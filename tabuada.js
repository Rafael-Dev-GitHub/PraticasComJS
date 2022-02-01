function calculatab(){
  var num = parseInt(document.getElementById("numero").value);
  var res = document.getElementById('res');
  var tabuada='';

  for(var multi=1; multi<=10 ; multi++)
   tabuada += num + " x " + multi+ " = "+ num*multi+ "<br />";
  
  res.innerHTML = tabuada;
}