 var canvas=document.getElementById('canvas');
 var ctx=canvas.getContext('2d');
 var ballRadius=10;
 var ballx=canvas.width/2;
 var bally=canvas.height-ballRadius;
 var eyesNum=10;
 var random=Math.ceil(Math.random()*10);
 var dx=5;
 var dy=-5;

var up=document.getElementById("up");
var down=document.getElementById("down");

up.onclick=function(){
if (dx*dx<225) {
	if (dx<0) {dx--;}else{dx++;}
	if (dy<0) {dy--;} else{dy++;}
}
	//console.log(dx);
}
down.onclick=function(){
	if (dx*dx>0) {
		if (dx<0) {dx++;}else{dx--;}
		if (dy<0) {dy++;} else{dy--;}
	}
	//console.log(dx);
}





 var DrawTimer=setInterval(draw,10);
function deg(d){
	return (d/180)*Math.PI;
}

function DrawBall(){
ctx.beginPath(); 
ctx.arc(ballx,bally,ballRadius,0,Math.PI*2,true);
ctx.fillStyle="red";
ctx.fill();
ctx.closePath();

ctx.beginPath(); 
ctx.arc(ballx-2,bally-2,ballRadius/3,0,Math.PI*2,true);
ctx.fillStyle="pink";
ctx.fill();
ctx.closePath();

}
function DrawEyes(x,y,eyeSize,lineSize,eyeBallSize,pupilSize,eyeBallColor,pupilColor){

ctx.beginPath();
ctx.arc(x,y+eyeSize,eyeSize*2,deg(210),deg(330),false);
ctx.arc(x,y-eyeSize,eyeSize*2,deg(30),deg(150),false);
ctx.strokeStyle="rgb(50,50,50)";
ctx.lineWidth=lineSize;
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();
ctx.save();
ctx.clip();
ctx.closePath();

var eyeballOffsetX=((ballx-x)/x)*eyeBallSize;
var eyeballOffsetY=((bally-y)/y)*eyeBallSize; 
var pupilOffsetX=((ballx-x)/x)*pupilSize;
var pupilOffsetY=((bally-y)/y)*pupilSize; 

if (ballx>x) {
	eyeballOffsetX=((ballx-x)/(canvas.width-x))*eyeBallSize;
	pupilOffsetX=((ballx-x)/(canvas.width-x))*pupilSize;
}
if (bally>y) {
	eyeballOffsetY=((bally-y)/(canvas.height-y))*eyeBallSize; 
	pupilOffsetY=((bally-y)/(canvas.height-y))*pupilSize; 
}

ctx.beginPath();
ctx.arc(x+eyeballOffsetX,y+eyeballOffsetY,eyeBallSize,0,deg(360));
ctx.fillStyle="rgb("+parseInt(x/5)+", "+parseInt(bally/lineSize*2)+","+parseInt(ballx/lineSize)+")";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(x+pupilOffsetX+eyeballOffsetX,y+pupilOffsetY+eyeballOffsetY,pupilSize,0,deg(360));
ctx.fillStyle=pupilColor;
ctx.fill();
ctx.closePath();
ctx.restore();

}
 function draw() {
 	// body...
 	ctx.clearRect(0,0,canvas.width,canvas.height);

 	 
 	DrawEyes(500,300,50,8,40,20,"green","black");
 	DrawEyes(460,220,40,6,30,10,"green","black");
 	DrawEyes(200,310,50,10,40,20,"green","black");
 	DrawEyes(200,140,40,6,30,10,"green","black");
 	DrawEyes(150,220,50,8,40,20,"green","black");
 	DrawEyes(300,150,40,6,30,10,"green","black");
 	DrawEyes(400,80,40,5,30,10,"green","black");
 	DrawEyes(100,330,40,10,30,10,"green","black");
 	DrawEyes(500,90,30,10,20,10,"green","black");
 	DrawEyes(80,100,30,8,20,5,"green","black");
 	DrawEyes(450,50,10,5,8,2,"green","black");

 	DrawEyes(700,120,40,8,30,15,"green","black");
 	DrawEyes(600,320,35,5,20,10,"green","black");
 	DrawEyes(500,460,30,10,20,10,"green","black");
 	DrawEyes(380,420,30,8,20,5,"green","black");
 	DrawEyes(650,400,60,5,50,20,"green","black");
 	DrawBall();

	if (ballx+ballRadius>canvas.width||ballx-ballRadius<0) {
		dx=-dx;
	}
	if (bally+ballRadius>canvas.height||bally-ballRadius<0) {
		dy=-dy;
	}

 	ballx+=dx;
 	bally+=dy;


 }


