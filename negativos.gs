function negativos() {

//Esta funçao pode ser util quando utilizada 
//com um acionador(trigger) de tempo.
//A função acessa uma array multidimensional
//e torna negativo somente os elementos numéricos 
//maiores que zero.

//ACESSANDO OS DADOS
  const ss = SpreadsheetApp.getActive();
  const s = ss.getSheetByName('Comercial');
  const arr = s.getRange('K4:K100').getValues();
  
  const arr_cl = arr.filter(get_clean);
  const neg = get_negative(arr);
  
  function get_negative(x){
    z = [];
    for(let i=0;i<x.length;i++){
      if(x[i] > 0){
        z.push([x[i][0] * -1])}
      else{
        z.push([x[i][0]])}
      }
  
    return z}
  
  //Somente elementos não nulos
  function get_clean(arr){
    
    for(let i =0; i < arr.length; i++){
      return arr[i] != ""}}
        
  
  // INSERINDO OS DADOS
  const target = s.getRange(4,11,neg.length, 1).setValues(neg);
  
  Logger.log(neg);
  
  
  
}
