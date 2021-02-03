function onlydiff() {
  
  // O codigo acessa 2 arrays multidimensionais na planilha,
  // compara os elementos entre elas,
  // e retorna somente os elementos novos, considerando uma delas como referência.
  // Esse código é útil quando utilizado como macro, onde queremos adicionar 
  // novos elementos a uma sheet à partir de outra, sem repetir os elementos
  // já anteriormente adicionados.
  
  //ACESSANDO OS DADOS DA PLANILHA
  const spreadsheet = SpreadsheetApp.getActive();
  const pagamentos = spreadsheet.getSheetByName('A Pagar')
  const caixa = spreadsheet.getSheetByName('Caixa');
  let arrpag = pagamentos.getRange('A2:D100').getValues();
  let arrcaixa = caixa.getRange('B2:C100').getValues();
  let newarr = [];


  //ARRAYS FILTRADAS
  arrpag = arrpag.filter(getfilter)
  arrcaixa = arrcaixa.filter(getfilter)

  //somente true
  arrpag.forEach(gettrue)

  //FUNÇÕES DE LIMPEZA
  //funçao celulas não vazias
  function getfilter(x){
    for(let i=0;i<x.length;i++){
      return x[i] != ""}}

  //funçao true
  function gettrue(x){
      if(x[0] == true){
        x = x }
     
  }

  //LOOPING PARA POPULAR NOVA ARRAY
  //Neste looping for, utilizo loop e  condicional 
  //para comparar a diferença de dados de cada array e retorna os elementos diferentes 
  for(let i = 0; i<arrpag.length; ++i) {
    let a = arrpag[i];
    console.log(a)
    found = false
    for(let j = 0; j<arrcaixa.length; ++j) {
      let b = arrcaixa[j];
      console.log(b)
      if(a[1] == b[0] ) {
        found = true;
        console.log(found)
        break;
        
      }
    }
    if(!found) {
      newarr.push([a[1],a[3]]);
    }}

  //INSERINDO DADOS NA PLANILHA
  const targetss = SpreadsheetApp.getActive();
  let targets = targetss.getSheetByName('Caixa');
  try {
    let targetarr = targets.getRange(targets.getLastRow()+1, 2, newarr.length, newarr[0].length).setValues(newarr);;
  } catch (e) {
    SpreadsheetApp.getUi().alert('Não há novas movimentações');
  }
