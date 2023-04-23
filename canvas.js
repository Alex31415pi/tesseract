/* ###########################
# DOCTYPE javascript 
# Autor: Alex C. S.;
# Design: Linear 2d ;
# Tools: canvas ;
# Date:22/04/2023 ;
##############################  */

function myF(){
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
drawBox();
drawGrid();
drawGame();
}
function drawBox(){
var Wa = document.getElementById("wa").value;
var Ha = document.getElementById("ha").value;
 this.canvas.width= Wa;
 this.canvas.height= Ha;
 // stroke
ctx.save();
ctx.beginPath();
ctx.strokeStyle="white";
ctx.strokeWidth=3;
ctx.strokeRect(0,0,Wa,Ha);
ctx.stroke();
ctx.closePath();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.fillStyle="rgba(0,0,0,0.9)";
ctx.fillRect(0,0,Wa - 2,Ha -2);
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.restore();
}

// text 
function drawGrid(){
var Wa = document.getElementById("wa").value; var Ha = document.getElementById("ha").value;
var Ia = document.getElementById("ia").value; var Ja = document.getElementById("ja").value;
var Ib = Number(Ia);
var Jb = Number(Ja);
for(var i = 0; i < canvas.width; i += Ib){
ctx.save();
ctx.beginPath();
ctx.strokeStyle="#4ebdff";
ctx.lineWidth=1;
ctx.moveTo(i,0);
ctx.lineTo(i,Ha);
ctx.stroke();
ctx.closePath();
ctx.restore(); }
for(var j = 0; j < canvas.height; j += Jb){
ctx.save();
ctx.beginPath();
ctx.strokeStyle="#4ebdff";
ctx.lineWidth=1;
ctx.moveTo(0,j);
ctx.lineTo(Wa,j);
ctx.stroke();
ctx.closePath();
ctx.restore(); } }

function drawGame(){
var Wa = document.getElementById("wa").value; var Ha = document.getElementById("ha").value; var r = document.getElementById("ra").value;

// screen
var Wb = Number(Wa) / 2;
var Hb = Number(Ha) / 2;
var Hc = Hb + 50;
var Hd = Hb - 50;
// raio 
var ra = - r;
var rb = r;
// tempo/
t_a += t_b;
var s = t_a ;

// p1
var radX1 = 90 * Math.PI / 180;
var radY1 = s + 180 * Math.PI / 180;

var Xa1 = Wb + Math.cos(radX1) * (ra) ;
var Ya1 = Hb + Math.sin(radY1) * (rb) ;


ctx.save();
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=1;
ctx.arc(Xa1,Ya1,5,Math.PI / 180 * 0, Math.PI / 180 * 360, false);
ctx.stroke();
ctx.closePath();
ctx.restore();

// p2
var radX2 = 90 * Math.PI / 180;
var radY2 = s + (90) * Math.PI / 180;
var Xa2 = Xa1 + Math.cos(radX2) * (ra) ;
var Ya2 = Ya1 + Math.sin(radY2) * (rb) ;
ctx.save();
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=1;
ctx.arc(Xa2,Ya2,5,Math.PI / 180 * 0, Math.PI / 180 * 360, false);
ctx.stroke();
ctx.closePath();
ctx.restore();
// p3
var radX3 = 90 * Math.PI / 180;
var radY3 = s + (-90) * Math.PI / 180;
var Xa3 = Xa1 + Math.cos(radX3) * (ra) ;
var Ya3 = Ya1 + Math.sin(radY3) * (rb) ;
ctx.save();
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=1;
ctx.arc(Xa3,Ya3,5,Math.PI / 180 * 0, Math.PI / 180 * 360, false);
ctx.stroke();
ctx.closePath();
ctx.restore();


// p4
var radX4 = 0 * Math.PI / 180;
var radY4 = s + 180 * Math.PI / 180;

var Xa4 = Wb + Math.cos(radX4) * (ra) ;
var Ya4 = Hb + Math.sin(radY4) * (rb) ;

ctx.save();
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=2;
ctx.arc(Xa4,Ya4,5,Math.PI / 180 * 0, Math.PI / 180 * 360, false);
ctx.stroke();
ctx.closePath();
ctx.restore();

// 5
var radX5 = 180 * Math.PI / 180;
var radY5 = s + (180) * Math.PI / 180;

var Xa5 = Wb + Math.cos(radX5) * (ra) ;
var Ya5 = Hb + Math.sin(radY5) * (rb) ;

ctx.save();
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=1;
ctx.arc(Xa5,Ya5,5,Math.PI / 180 * 0, Math.PI / 180 * 360, false);
ctx.stroke();
ctx.closePath();
ctx.restore();

// lado b 
// p6
var radX6 = 90 * Math.PI / 180;
var radY6 = s + 360 * Math.PI / 180;

var Xa6 = Wb + Math.cos(radX6) * (ra) ;
var Ya6 = Hb + Math.sin(radY6) * (rb) ;


ctx.save();
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.arc(Xa6,Ya6,5,Math.PI / 180 * 0, Math.PI / 180 * 360, false);
ctx.stroke();
ctx.closePath();
ctx.restore();

// p7
var radX7 = 90 * Math.PI / 180;
var radY7 = s + (90) * Math.PI / 180;
var Xa7 = Xa6 + Math.cos(radX7) * (ra) ;
var Ya7 = Ya6 + Math.sin(radY7) * (rb) ;
ctx.save();
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.arc(Xa7,Ya7,5,Math.PI / 180 * 0, Math.PI / 180 * 360, false);
ctx.stroke();
ctx.closePath();
ctx.restore();

// p8
var radX8 = 90 * Math.PI / 180;
var radY8 = s + (-90) * Math.PI / 180;
var Xa8 = Xa6 + Math.cos(radX8) * (ra) ;
var Ya8 = Ya6 + Math.sin(radY8) * (rb) ;
ctx.save();
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.arc(Xa8,Ya8,5,Math.PI / 180 * 0, Math.PI / 180 * 360, false);
ctx.stroke();
ctx.closePath();
ctx.restore();


// p9
var radX9 = 0 * Math.PI / 180;
var radY9 = s + 360 * Math.PI / 180;

var Xa9 = Wb + Math.cos(radX9) * (ra) ;
var Ya9 = Hb + Math.sin(radY9) * (rb) ;

ctx.save();
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(Xa9,Ya9,5,Math.PI / 180 * 0, Math.PI / 180 * 360, false);
ctx.stroke();
ctx.closePath();
ctx.restore();

// 10
var radX10 = 180 * Math.PI / 180;
var radY10 = s + (360) * Math.PI / 180;

var Xa10 = Wb + Math.cos(radX10) * (ra) ;
var Ya10 = Hb + Math.sin(radY10) * (rb) ;

ctx.save();
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.arc(Xa10,Ya10,5,Math.PI / 180 * 0, Math.PI / 180 * 360, false);
ctx.stroke();
ctx.closePath();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.fillStyle="white";
ctx.lineWidth=1;
ctx.font="20px Arial";
ctx.fillText("<<<>>>",30,30);
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.fillStyle="red";
ctx.lineWidth=1;
ctx.font="20px Sans-serif";
ctx.fillText("> Width",Wa - 80,30);
ctx.fillText("v Height",10,Ha - 20);
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.restore();
document.getElementById("a1").innerHTML= s;
}
var t_a = 0.0006;
var t_b = 0.001;

function onStart(){
 var myStart = setInterval(myF,0.001);
  myF();}
function onStop(){ clearInterval(myStart);}