var canvas=document.getElementById('back_line_canv');
var ctx = canvas.getContext('2d');

ctx.lineWidth = 5; // толщина линии

ctx.arc(200,200,100,0, Math.PI,true);
ctx.stroke();