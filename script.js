




function sum(){
  var x=document.getElementById("sum1").value;
  x = parseFloat(x);

 var y=document.getElementById("sum2").value;
y = parseFloat(y);
var z= x + y ;



document.getElementById("wynik1").innerHTML =  z;


return;


}



function dif(){
  var x=document.getElementById("dif1").value;
    x = parseFloat(x);

 var y=document.getElementById("dif2").value;
    y = parseFloat(y);



var z= x - y ;
 document.getElementById("wynik2").innerHTML = z;



return;


}
