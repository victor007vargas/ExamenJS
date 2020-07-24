$(function(){

setTimeout (flastit,2000);


});










// □□□□□□  1 Modulo cambio color titulo□□□□□□
function clrtitwh ()  {$(".main-titulo").animate({color:"blue"},320,function(){clrtitbl ()})}
function clrtitbl ()  {$(".main-titulo").animate({color:"yellow"},480,function(){clrtitwh ()})}
function flastit ()   {clrtitwh (),clrtitbl ()};
// □□□□□□  Fin M1 □□□□□□


// □□□□□□  2 Modulo Generación de numero aleatorio de 1 a 4 □□□□□□
function genuma (){a1=Math.floor((Math.random() * 4) + 1),a2=Math.floor((Math.random() * 4) + 1),a3=Math.floor((Math.random() * 4) + 1),a4=Math.floor((Math.random() * 4) + 1),a5=Math.floor((Math.random() * 4) + 1),a6=Math.floor((Math.random() * 4) + 1),a7=Math.floor((Math.random() * 4) + 1)}

function asigna(){
var cola = ["a1","a2","a3","a4","a5","a6","a7"] ;
var i ;
var numa ="";
for (i=0; i < cola.length ;i++)
{ numa += (cola[i]=Math.floor((Math.random() * 4) + 1))};
alert(numa);
}
// □□□□□□  Fin M2 □□□□□□

// □□□□□□  3 Modulo Actividad del boton Inicar □□□□□□
$(".btn-reinicio").click(function(){ $(".btn-reinicio").css(genuma(),asigna())})



// □□□□□□  Fin M2 □□□□□□
