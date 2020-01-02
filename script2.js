



function main(){

var base1=document.getElementById("base1").value;
var base2=document.getElementById("base2").value;


var liczba = document.getElementById("liczba").value;

var wynik=change_base(liczba, base1,base2);

document.getElementById("wynik").innerHTML=wynik;

return;


//liczba.addEventListener("keydown", function (e) {
  //  if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
    //    validate(e);
  //  }
//});


//alert(liczba);

}






function change_base(  s,  base1, base2){

var m=s.toString();
var n=m.length;


var suma=0;
var wynik="";
var digit2;
var digit;
for(var i = 0; i<n;i++){
    suma+=((m.charCodeAt(i)-48)*(Math.pow(base1, (n-1-i))));
}
while(suma>0.99){

    digit= (suma % base2)+48;
    digit2=String.fromCharCode(digit);
    if(digit>57){digit+=8;
      digit2=String.fromCharCode(digit);
    }
    wynik=digit2+wynik;
    suma/=base2;

}
return wynik;

}
