$(function(){

setTimeout (flastit,2000);


});










// □□□□□□  1 Modulo cambio color titulo□□□□□□
function clrtitwh ()  {$(".main-titulo").animate({color:"blue"},320,function(){clrtitbl ()})}
function clrtitbl ()  {$(".main-titulo").animate({color:"yellow"},480,function(){clrtitwh ()})}
function flastit ()   {clrtitwh (),clrtitbl ()};
// □□□□□□  Fin M1 □□□□□□


// □□□□□□  2 Modulo Generación de numero aleatorio de 1 a 4 □□□□□□
function genum () {numx=Math.floor((Math.random() * 4) + 1)}
function genuma (){a1=Math.floor((Math.random() * 4) + 1),a2=Math.floor((Math.random() * 4) + 1),a3=Math.floor((Math.random() * 4) + 1),a4=Math.floor((Math.random() * 4) + 1),a5=Math.floor((Math.random() * 4) + 1),a6=Math.floor((Math.random() * 4) + 1),a7=Math.floor((Math.random() * 4) + 1)}
function asigna (){if (a1==4) {alert("El dulce es el cuatro");alert("Puede seguir");asia();}}
function asia (){$("#a1").attr("src","image/4.png")}
// □□□□□□  Fin M2 □□□□□□

// □□□□□□  3 Modulo Actividad del boton Inicar □□□□□□
$(".btn-reinicio").click(function(){ $(".btn-reinicio").css(genuma(),alert(a1),asigna())})



// □□□□□□  Fin M2 □□□□□□
