$(function(){ // □□□□□□ 1 Inicio Funcion de Inicialaizacion  □□□□□□

setTimeout (flastit,2000); //***** 1.1 retardo accion color titulo (ver item 3)
asigpos();

}); // □□□□□□ Fin Funcion de Inicialaizacion  □□□□□□

$(".elemento").draggable({ // ****1.2 Habilita drag a elementos
cursor:"grab",
containment:".panel-tablero",
distance:5,
drag:function(event,ui){reogi=$(this);imgarra=$(this).attr("src");idarra=$(this).attr("id");posx=$(this).css("top");posy=$(this).css("left");



},

});//****fin 1.2


$(".elemento").droppable({drop: function( event, ui )// ****1.3 Habilita drop a elementos
{recipe =(this);elecae=$(this).attr("id");reasigel();} })

function reasigel(){$(recipe).attr("src",imgarra); //**** asignacion de imagenes a ID origen destino
$(elecae).attr("src",imgarra);
flagdrop=1; monitordrop();

}//****fin reasigel


function monitordrop(){if ((idarra)=="a1"){llenado();}};

function llenado(){

$("#a1").css("top","-30px");
$("#a1").css("left","0px");
$("#a1").animate({top:"0px"},500);

};


$(".bt1").click(function(){


})

// □□□□□□  2  Declaración de Variables Globales □□□□□□
var g3 ;
var imgarra; var elecae; var recipe; var reogi; var flagdrop=0; var idarra; var posx ; var posy;

var numa = [];numb = []; numc = [];numd =[];nume =[];numf=[]; numg = [];
var cola = [a1,a2,a3,a4,a5,a6,a7] ;
var colb = [b1,b2,b3,b4,b5,b6,b7] ;
var colc = [c1,c2,c3,c4,c5,c6,c7] ;
var cold = [d1,d2,d3,d4,d5,d6,d7] ;
var cole = [e1,e2,e3,e4,e5,e6,e7] ;
var colf = [f1,f2,f3,f4,f5,f6,f7] ;
var colg = [g1,g2,g3,g4,g5,g6,g7] ;


// □□□□□□  3 Modulo cambio color titulo□□□□□□
function clrtitwh ()  {$(".main-titulo").animate({color:"blue"},320,function(){clrtitbl ()})}
function clrtitbl ()  {$(".main-titulo").animate({color:"yellow"},480,function(){clrtitwh ()})}
function flastit ()   {clrtitwh (),clrtitbl ()};
// □□□□□□  Fin 3 □□□□□□

// □□□□□□  4 Modulo Generación de numero aleatorio de 1 a 4 y asignación a cajones □□□□□□
function asigna(){

var i ;
for (i=0; i < cola.length ;i++)
{ numa = (cola[i]=Math.floor((Math.random() * 4) + 1))};
for (i=0; i < colb.length ;i++)
{ numb += (colb[i]=Math.floor((Math.random() * 4) + 1))};
for (i=0; i < colc.length ;i++)
{ numc += (colc[i]=Math.floor((Math.random() * 4) + 1))};
for (i=0; i < cold.length ;i++)
{ numd += (cold[i]=Math.floor((Math.random() * 4) + 1))};
for (i=0; i < cole.length ;i++)
{ nume += (cole[i]=Math.floor((Math.random() * 4) + 1))};
for (i=0; i < colf.length ;i++)
{ numf += (colf[i]=Math.floor((Math.random() * 4) + 1))};
for (i=0; i < colg.length ;i++)
{ numg += (colg[i]=Math.floor((Math.random() * 4) + 1))};
a1=cola.slice(0,1); a2=cola.slice(1,2) ;a3=cola.slice(2,3) ;a4=cola.slice(3,4) ;a5=cola.slice(4,5); a6=cola.slice(5,6) ;a7=cola.slice(6,7);
b1=colb.slice(0,1); b2=colb.slice(1,2) ;b3=colb.slice(2,3) ;b4=colb.slice(3,4) ;b5=colb.slice(4,5); b6=colb.slice(5,6) ;b7=colb.slice(6,7);
c1=colc.slice(0,1); c2=colc.slice(1,2) ;c3=colc.slice(2,3) ;c4=colc.slice(3,4) ;c5=colc.slice(4,5); c6=colc.slice(5,6) ;c7=colc.slice(6,7);
d1=cold.slice(0,1); d2=cold.slice(1,2) ;d3=cold.slice(2,3) ;d4=cold.slice(3,4) ;d5=cold.slice(4,5); d6=cold.slice(5,6) ;d7=cold.slice(6,7);
e1=cole.slice(0,1); e2=cole.slice(1,2) ;e3=cole.slice(2,3) ;e4=cole.slice(3,4) ;e5=cole.slice(4,5); e6=cole.slice(5,6) ;e7=cole.slice(6,7);
f1=colf.slice(0,1); f2=colf.slice(1,2) ;f3=colf.slice(2,3) ;f4=colf.slice(3,4) ;f5=colf.slice(4,5); f6=colf.slice(5,6) ;f7=colf.slice(6,7);
g1=colg.slice(0,1); g2=colg.slice(1,2) ;g3=colg.slice(2,3) ;g4=colg.slice(3,4) ;g5=colg.slice(4,5); g6=colg.slice(5,6) ;g7=colg.slice(6,7);


if (a1==1){$("#a1").attr("src","image/1.png");} if (b1==1){$("#b1").attr("src","image/1.png");} if (c1==1){$("#c1").attr("src","image/1.png");} if (d1==1){$("#d1").attr("src","image/1.png");} if (e1==1){$("#e1").attr("src","image/1.png");}if (f1==1){$("#f1").attr("src","image/1.png");}if (g1==1){$("#g1").attr("src","image/1.png");}
if (a1==2){$("#a1").attr("src","image/2.png");} if (b1==2){$("#b1").attr("src","image/2.png");} if (c1==2){$("#c1").attr("src","image/2.png");} if (d1==2){$("#d1").attr("src","image/2.png");} if (e1==2){$("#e1").attr("src","image/2.png");}if (f1==2){$("#f1").attr("src","image/2.png");}if (g1==2){$("#g1").attr("src","image/2.png");}
if (a1==3){$("#a1").attr("src","image/3.png");} if (b1==3){$("#b1").attr("src","image/3.png");} if (c1==3){$("#c1").attr("src","image/3.png");} if (d1==3){$("#d1").attr("src","image/3.png");} if (e1==3){$("#e1").attr("src","image/3.png");}if (f1==3){$("#f1").attr("src","image/3.png");}if (g1==3){$("#g1").attr("src","image/3.png");}
if (a1==4){$("#a1").attr("src","image/4.png");} if (b1==4){$("#b1").attr("src","image/4.png");} if (c1==4){$("#c1").attr("src","image/4.png");} if (d1==4){$("#d1").attr("src","image/4.png");} if (e1==4){$("#e1").attr("src","image/4.png");}if (f1==4){$("#f1").attr("src","image/4.png");}if (g1==4){$("#g1").attr("src","image/4.png");}

if (a2==1){$("#a2").attr("src","image/1.png");} if (b2==1){$("#b2").attr("src","image/1.png");} if (c2==1){$("#c2").attr("src","image/1.png");} if (d2==1){$("#d2").attr("src","image/1.png");} if (e2==1){$("#e2").attr("src","image/1.png");}if (f2==1){$("#f2").attr("src","image/1.png");}if (g2==1){$("#g2").attr("src","image/1.png");}
if (a2==2){$("#a2").attr("src","image/2.png");} if (b2==2){$("#b2").attr("src","image/2.png");} if (c2==2){$("#c2").attr("src","image/2.png");} if (d2==2){$("#d2").attr("src","image/2.png");} if (e2==2){$("#e2").attr("src","image/2.png");}if (f2==2){$("#f2").attr("src","image/2.png");}if (g2==2){$("#g2").attr("src","image/2.png");}
if (a2==3){$("#a2").attr("src","image/3.png");} if (b2==3){$("#b2").attr("src","image/3.png");} if (c2==3){$("#c2").attr("src","image/3.png");} if (d2==3){$("#d2").attr("src","image/3.png");} if (e2==3){$("#e2").attr("src","image/3.png");}if (f2==3){$("#f2").attr("src","image/3.png");}if (g2==3){$("#g2").attr("src","image/3.png");}
if (a2==4){$("#a2").attr("src","image/4.png");} if (b2==4){$("#b2").attr("src","image/4.png");} if (c2==4){$("#c2").attr("src","image/4.png");} if (d2==4){$("#d2").attr("src","image/4.png");} if (e2==4){$("#e2").attr("src","image/4.png");}if (f2==4){$("#f2").attr("src","image/4.png");}if (g2==4){$("#g2").attr("src","image/4.png");}

if (a3==1){$("#a3").attr("src","image/1.png");} if (b3==1){$("#b3").attr("src","image/1.png");} if (c3==1){$("#c3").attr("src","image/1.png");} if (d3==1){$("#d3").attr("src","image/1.png");} if (e3==1){$("#e3").attr("src","image/1.png");}if (f3==1){$("#f3").attr("src","image/1.png");}if (g3==1){$("#g3").attr("src","image/1.png");}
if (a3==2){$("#a3").attr("src","image/2.png");} if (b3==2){$("#b3").attr("src","image/2.png");} if (c3==2){$("#c3").attr("src","image/2.png");} if (d3==2){$("#d3").attr("src","image/2.png");} if (e3==2){$("#e3").attr("src","image/2.png");}if (f3==2){$("#f3").attr("src","image/2.png");}if (g3==2){$("#g3").attr("src","image/2.png");}
if (a3==3){$("#a3").attr("src","image/3.png");} if (b3==3){$("#b3").attr("src","image/3.png");} if (c3==3){$("#c3").attr("src","image/3.png");} if (d3==3){$("#d3").attr("src","image/3.png");} if (e3==3){$("#e3").attr("src","image/3.png");}if (f3==3){$("#f3").attr("src","image/3.png");}if (g3==3){$("#g3").attr("src","image/3.png");}
if (a3==4){$("#a3").attr("src","image/4.png");} if (b3==4){$("#b3").attr("src","image/4.png");} if (c3==4){$("#c3").attr("src","image/4.png");} if (d3==4){$("#d3").attr("src","image/4.png");} if (e3==4){$("#e3").attr("src","image/4.png");}if (f3==4){$("#f3").attr("src","image/4.png");}if (g3==4){$("#g3").attr("src","image/4.png");}

if (a4==1){$("#a4").attr("src","image/1.png");} if (b4==1){$("#b4").attr("src","image/1.png");} if (c4==1){$("#c4").attr("src","image/1.png");} if (d4==1){$("#d4").attr("src","image/1.png");} if (e4==1){$("#e4").attr("src","image/1.png");}if (f4==1){$("#f4").attr("src","image/1.png");}if (g4==1){$("#g4").attr("src","image/1.png");}
if (a4==2){$("#a4").attr("src","image/2.png");} if (b4==2){$("#b4").attr("src","image/2.png");} if (c4==2){$("#c4").attr("src","image/2.png");} if (d4==2){$("#d4").attr("src","image/2.png");} if (e4==2){$("#e4").attr("src","image/2.png");}if (f4==2){$("#f4").attr("src","image/2.png");}if (g4==2){$("#g4").attr("src","image/2.png");}
if (a4==3){$("#a4").attr("src","image/3.png");} if (b4==3){$("#b4").attr("src","image/3.png");} if (c4==3){$("#c4").attr("src","image/3.png");} if (d4==3){$("#d4").attr("src","image/3.png");} if (e4==3){$("#e4").attr("src","image/3.png");}if (f4==3){$("#f4").attr("src","image/3.png");}if (g4==3){$("#g4").attr("src","image/3.png");}
if (a4==4){$("#a4").attr("src","image/4.png");} if (b4==4){$("#b4").attr("src","image/4.png");} if (c4==4){$("#c4").attr("src","image/4.png");} if (d4==4){$("#d4").attr("src","image/4.png");} if (e4==4){$("#e4").attr("src","image/4.png");}if (f4==4){$("#f4").attr("src","image/4.png");}if (g4==4){$("#g4").attr("src","image/4.png");}

if (a5==1){$("#a5").attr("src","image/1.png");} if (b5==1){$("#b5").attr("src","image/1.png");} if (c5==1){$("#c5").attr("src","image/1.png");} if (d5==1){$("#d5").attr("src","image/1.png");} if (e5==1){$("#e5").attr("src","image/1.png");}if (f5==1){$("#f5").attr("src","image/1.png");}if (g5==1){$("#g5").attr("src","image/1.png");}
if (a5==2){$("#a5").attr("src","image/2.png");} if (b5==2){$("#b5").attr("src","image/2.png");} if (c5==2){$("#c5").attr("src","image/2.png");} if (d5==2){$("#d5").attr("src","image/2.png");} if (e5==2){$("#e5").attr("src","image/2.png");}if (f5==2){$("#f5").attr("src","image/2.png");}if (g5==2){$("#g5").attr("src","image/2.png");}
if (a5==3){$("#a5").attr("src","image/3.png");} if (b5==3){$("#b5").attr("src","image/3.png");} if (c5==3){$("#c5").attr("src","image/3.png");} if (d5==3){$("#d5").attr("src","image/3.png");} if (e5==3){$("#e5").attr("src","image/3.png");}if (f5==3){$("#f5").attr("src","image/3.png");}if (g5==3){$("#g5").attr("src","image/3.png");}
if (a5==4){$("#a5").attr("src","image/4.png");} if (b5==4){$("#b5").attr("src","image/4.png");} if (c5==4){$("#c5").attr("src","image/4.png");} if (d5==4){$("#d5").attr("src","image/4.png");} if (e5==4){$("#e5").attr("src","image/4.png");}if (f5==4){$("#f5").attr("src","image/4.png");}if (g5==4){$("#g5").attr("src","image/4.png");}

if (a6==1){$("#a6").attr("src","image/1.png");} if (b6==1){$("#b6").attr("src","image/1.png");} if (c6==1){$("#c6").attr("src","image/1.png");} if (d6==1){$("#d6").attr("src","image/1.png");} if (e6==1){$("#e6").attr("src","image/1.png");}if (f6==1){$("#f6").attr("src","image/1.png");}if (g6==1){$("#g6").attr("src","image/1.png");}
if (a6==2){$("#a6").attr("src","image/2.png");} if (b6==2){$("#b6").attr("src","image/2.png");} if (c6==2){$("#c6").attr("src","image/2.png");} if (d6==2){$("#d6").attr("src","image/2.png");} if (e6==2){$("#e6").attr("src","image/2.png");}if (f6==2){$("#f6").attr("src","image/2.png");}if (g6==2){$("#g6").attr("src","image/2.png");}
if (a6==3){$("#a6").attr("src","image/3.png");} if (b6==3){$("#b6").attr("src","image/3.png");} if (c6==3){$("#c6").attr("src","image/3.png");} if (d6==3){$("#d6").attr("src","image/3.png");} if (e6==3){$("#e6").attr("src","image/3.png");}if (f6==3){$("#f6").attr("src","image/3.png");}if (g6==3){$("#g6").attr("src","image/3.png");}
if (a6==4){$("#a6").attr("src","image/4.png");} if (b6==4){$("#b6").attr("src","image/4.png");} if (c6==4){$("#c6").attr("src","image/4.png");} if (d6==4){$("#d6").attr("src","image/4.png");} if (e6==4){$("#e6").attr("src","image/4.png");}if (f6==4){$("#f6").attr("src","image/4.png");}if (g6==4){$("#g6").attr("src","image/4.png");}

if (a7==1){$("#a7").attr("src","image/1.png");} if (b7==1){$("#b7").attr("src","image/1.png");} if (c7==1){$("#c7").attr("src","image/1.png");} if (d7==1){$("#d7").attr("src","image/1.png");} if (e7==1){$("#e7").attr("src","image/1.png");}if (f7==1){$("#f7").attr("src","image/1.png");}if (g7==1){$("#g7").attr("src","image/1.png");}
if (a7==2){$("#a7").attr("src","image/2.png");} if (b7==2){$("#b7").attr("src","image/2.png");} if (c7==2){$("#c7").attr("src","image/2.png");} if (d7==2){$("#d7").attr("src","image/2.png");} if (e7==2){$("#e7").attr("src","image/2.png");}if (f7==2){$("#f7").attr("src","image/2.png");}if (g7==2){$("#g7").attr("src","image/2.png");}
if (a7==3){$("#a7").attr("src","image/3.png");} if (b7==3){$("#b7").attr("src","image/3.png");} if (c7==3){$("#c7").attr("src","image/3.png");} if (d7==3){$("#d7").attr("src","image/3.png");} if (e7==3){$("#e7").attr("src","image/3.png");}if (f7==3){$("#f7").attr("src","image/3.png");}if (g7==3){$("#g7").attr("src","image/3.png");}
if (a7==4){$("#a7").attr("src","image/4.png");} if (b7==4){$("#b7").attr("src","image/4.png");} if (c7==4){$("#c7").attr("src","image/4.png");} if (d7==4){$("#d7").attr("src","image/4.png");} if (e7==4){$("#e7").attr("src","image/4.png");}if (f7==4){$("#f7").attr("src","image/4.png");}if (g7==4){$("#g7").attr("src","image/4.png");}



}
// □□□□□□  Fin 4 □□□□□□


// □□□□□□  5 Modulo Actividad del boton Inicar □□□□□□
$(".btn-reinicio").click(function(){ $(".btn-reinicio").css(asigna())})
// □□□□□□  Fin 5 □□□□□□

// □□□□□□  4 Modulo Logica deteccion Series □□□□□□
function deteceries(){


}
// □□□□□□  Fin M4 □□□□□□
// □□□□□□  Posicion elementos □□□□□□
var posxa1,posya1,posxa2,posya2,posxa3, posya3,posxa4, posya4,posxa6, posya6,posx7,posy7
function asigpos(){posxa1=$("#a1").css("top");posya1=$("#a1").css("left");posxa2=$("#a1").css("top");posya2=$("#a1").css("left")}
