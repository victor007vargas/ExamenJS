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
var i ;
var g3 ;
var numa = ""; numb = ""; numc = "";numd = "";nume = "";numf= ""; numg = "";
var cola = [a1,a2,a3,a4,a5,a6,a7] ;
var colb = [b1,b2,b3,b4,b5,b6,b7] ;
var colc = [c1,c2,c3,c4,c5,c6,c7] ;
var cold = [d1,d2,d3,d4,d5,d6,d7] ;
var cole = [e1,e2,e3,e4,e5,e6,e7] ;
var colf = [f1,f2,f3,f4,f5,f6,f7] ;
var colg = [g1,g2,g3,g4,g5,g6,g7] ;
for (i=0; i < cola.length ;i++)
{ numa += (cola[i]=Math.floor((Math.random() * 4) + 1))};
{ numb += (cola[i]=Math.floor((Math.random() * 4) + 1))};
{ numc += (cola[i]=Math.floor((Math.random() * 4) + 1))};
{ numd += (cola[i]=Math.floor((Math.random() * 4) + 1))};
{ nume += (cola[i]=Math.floor((Math.random() * 4) + 1))};
{ numf += (cola[i]=Math.floor((Math.random() * 4) + 1))};
{ numg += (cola[i]=Math.floor((Math.random() * 4) + 1))};
var a1=cola.slice(0,1)
if (a1==1){$("#a1").attr("src","image/1.png");}
if (a1==2){$("#a1").attr("src","image/2.png");}
if (a1==3){$("#a1").attr("src","image/3.png");}
if (a1==4){$("#a1").attr("src","image/4.png");}
var a2=cola.slice(1,2)
if (a2==1){$("#a2").attr("src","image/1.png");}
if (a2==2){$("#a2").attr("src","image/2.png");}
if (a2==3){$("#a2").attr("src","image/3.png");}
if (a2==4){$("#a2").attr("src","image/4.png");}
var a3=cola.slice(2,3)
if (a3==1){$("#a3").attr("src","image/1.png");}
if (a3==2){$("#a3").attr("src","image/2.png");}
if (a3==3){$("#a3").attr("src","image/3.png");}
if (a3==4){$("#a3").attr("src","image/4.png");}
var a4=cola.slice(3,4)
if (a4==1){$("#a4").attr("src","image/1.png");}
if (a4==2){$("#a4").attr("src","image/2.png");}
if (a4==3){$("#a4").attr("src","image/3.png");}
if (a4==4){$("#a4").attr("src","image/4.png");}
var a5=cola.slice(4,5)
if (a5==1){$("#a5").attr("src","image/1.png");}
if (a5==2){$("#a5").attr("src","image/2.png");}
if (a5==3){$("#a5").attr("src","image/3.png");}
if (a5==4){$("#a5").attr("src","image/4.png");}
var a6=cola.slice(5,6)
if (a6==1){$("#a6").attr("src","image/1.png");}
if (a6==2){$("#a6").attr("src","image/2.png");}
if (a6==3){$("#a6").attr("src","image/3.png");}
if (a6==4){$("#a6").attr("src","image/4.png");}
var a7=cola.slice(6,7)
if (a7==1){$("#a7").attr("src","image/1.png");}
if (a7==2){$("#a7").attr("src","image/2.png");}
if (a7==3){$("#a7").attr("src","image/3.png");}
if (a7==4){$("#a7").attr("src","image/4.png");}
}

function asignb(){
var i ;
var numb = "";
var colb = [b1,b2,b3,b4,b5,b6,b7] ;
for (i=0; i < colb.length ;i++)
{ numb += (colb[i]=Math.floor((Math.random() * 4) + 1))};
var b1=colb.slice(1,2)
if (b1==1){$("#b1").attr("src","image/1.png");}
if (b1==2){$("#b1").attr("src","image/2.png");}
if (b1==3){$("#b1").attr("src","image/3.png");}
if (b1==4){$("#b1").attr("src","image/4.png");}}
// □□□□□□  Fin M2 □□□□□□

// □□□□□□  3 Modulo Actividad del boton Inicar □□□□□□
$(".btn-reinicio").click(function(){ $(".btn-reinicio").css(asigna(),asignb())})



// □□□□□□  Fin M2 □□□□□□
