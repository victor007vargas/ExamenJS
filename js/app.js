$(function(){

setTimeout (flastit,2000);


});










// □□□□□□  1 Modulo cambio color titulo□□□□□□
function clrtitwh ()  {$(".main-titulo").animate({color:"blue"},320,function(){clrtitbl ()})}
function clrtitbl ()  {$(".main-titulo").animate({color:"yellow"},480,function(){clrtitwh ()})}
function flastit ()   {clrtitwh (),clrtitbl ()};
// □□□□□□  Fin M1 □□□□□□


// □□□□□□  2 Modulo Generación de numero aleatorio de 1 a 4 y asignación a elementos□□□□□□
function asigna(){
var cola = ["a1","a2","a3","a4","a5","a6","a7"] ;
var i ;
var numa ="";
for (i=0; i < cola.length ;i++)
{ numa += (cola[i]=Math.floor((Math.random() * 4) + 1))};
alert(numa);
}

function asignb(){
var i ;
var numb = "";
var colb = [b1,b2,b3,b4,b5,b6,b7] ;
for (i=0; i < colb.length ;i++)
{ numb += (colb[i]=Math.floor((Math.random() * 4) + 1))};
alert(numb);
var b1=colb.slice(1,2)
if (b1==4){alert(b1);}

}
function convertir (){}
// □□□□□□  Fin M2 □□□□□□

// □□□□□□  3 Modulo Actividad del boton Inicar □□□□□□
$(".btn-reinicio").click(function(){ $(".btn-reinicio").css(asignb(),convertir())})



// □□□□□□  Fin M2 □□□□□□
