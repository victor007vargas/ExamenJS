$(function(){

flastit ();


});











function clrtitwh ()  {$(".main-titulo").animate({color:"blue"},230,function(){clrtitbl ()})}
function clrtitbl ()  {$(".main-titulo").animate({color:"yellow"},420,function(){clrtitwh ()})}
function flastit ()   {clrtitwh (),clrtitbl ()};
