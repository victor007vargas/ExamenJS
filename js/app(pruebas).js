$(function(){

setTimeout (flastit,2000);


});

// □□□□□□  Declaración de Variables Globales □□□□□□





// □□□□□□  1 Modulo cambio color titulo□□□□□□
function clrtitwh ()  {$(".main-titulo").animate({color:"blue"},320,function(){clrtitbl ()})}
function clrtitbl ()  {$(".main-titulo").animate({color:"yellow"},480,function(){clrtitwh ()})}
function flastit ()   {clrtitwh (),clrtitbl ()};
// □□□□□□  Fin M1 □□□□□□

// □□□□□□  2 Modulo Generación de numero aleatorio de 1 a 4 y asignación a cajones □□□□□□
function asigna(){
var a1=0; var a2=0;
var cola = [a1,a2] ;
var i ;
for (i=0; i < cola.length ;i++)
{ numa = (cola[i]=Math.floor((Math.random() * 4) + 1))};
a1=cola.slice(0,1); a2=cola.slice(1,2) ;
alert("Valores de las variables : "+a1+" "+a2);
if (a1===a2){alert("a1 y a2 son iguales")}


}
// □□□□□□  Fin M2 □□□□□□


// □□□□□□  3 Modulo Actividad del boton Inicar □□□□□□
$(".btn-reinicio").click(function(){ $(".btn-reinicio").css(asigna())})
// □□□□□□  Fin M3 □□□□□□
