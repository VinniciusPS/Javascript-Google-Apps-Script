function array_dif() {
  
  // O codigo acessa 2 arrays multidimensionais na planilha,
  // compara os elementos entre elas,
  // e retorna somente os elementos novos, considerando uma delas como referência.
  // Esse código é útil quando utilizado como macro, onde queremos adicionar 
  // novos elementos a uma sheet à partir de outra, sem repetir os elementos
  // já anteriormente adicionados.
  
  //ACESSANDO OS DADOS DA PLANILHA
  let ss = SpreadsheetApp.getActive();
  let s = ss.getSheetByName('Scripts')
  let s_2 = ss.getActiveSheet();
  let cell = s.getRange('AJ2:AO100').getValues();
  let cell_fc = s_2.getRange('B24:F100').getValues();
  let newarr = [];
  
  //ARRAYS FILTRADAS
  let cl_cell = cell.filter(filterclean);
  let cl_cellfc = cell_fc.filter(filterclean);
  let newarr_date = get_col(cl_cell,0);
  let cl_false = get_false(newarr_date,5);
  
  //FUNÇOES DE LIMPEZA E EXTRAÇAO 
  function filterclean(x){
    for(let i=0;i<x.length;i++){
      return x[i] != ""}}
  
  function get_col(arr,n){
    let date = [];
    for(let i=0;i<arr.length;i++){
      if(new Date(arr[i][n]).getTime() < Date.now() 
        && new Date().getMonth() == new Date(arr[i][n]).getMonth()){ 
        date.push(arr[i])}}
    
    return date;}
  
  function get_false(arr,n){
    let t = [];
    for(let i=0;i<arr.length;i++){
      if(arr[i][n] == true){
        t.push(arr[i].slice(0,5));}}
    
    return t;}
  
  //LOOPING PARA POPULAR NOVA ARRAY
  //Neste looping for, utilizo uma condicional com Date().getTime()
  //para comparar tambem a diferença de dados armazenados em tempos diferentes
  for(let i = 0; i<cl_false.length; ++i) {
    let a = cl_false[i];
    let found = false;
    for(let j = 0; j<cl_cellfc.length; ++j) {
      let b = cl_cellfc[j];
      if(a[1] == b[1] && a[2] == b[2] && a[3] == b[3] && a[4] == b[4] 
         && new Date(a[0]).getTime() == new Date(b[0]).getTime()) {
        found = true;
        break;
      }
    }
    if(!found) {
      newarr.push(a);
    }}
    
  //INSERINDO DADOS NA PLANILHA
  let target_ss = SpreadsheetApp.getActive();
  let target_s = target_ss.getActiveSheet();
  try {
    let target_cell = target_s.getRange(target_s.getLastRow()+1, 2, newarr.length, newarr[0].length).setValues(newarr);;
  } catch (e) {
    SpreadsheetApp.getUi().alert('Não há novas movimentações');
  
}
  
}
