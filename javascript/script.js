let sq = document.getElementById("sq");
let transhouse = document.getElementById("buildhouse");
let mouseY,mouseXonscreen;let sqY;
let mouseX,mouseYonscreen;let sqX;
let bool=false,msdown=false,playerSelected;let zindex=0;
function move(event) {
	mouseX = event.pageX;
	mouseY = event.pageY;
	mouseXonscreen = event.clientX;
	mouseYonscreen = event.clientY;
	update();ismousedown();scroll();
	transhouse.style.left=mouseX+"px";
	transhouse.style.top=mouseY+"px";
}
function mousedown() {
	sqX = mouseX;
	sqY = mouseY;
	msdown=true;
}
function mouseup() {
	if (sq.offsetLeft<player.offsetLeft&&
		sq.offsetLeft+sq.offsetWidth>player.offsetLeft+player.offsetWidth&&
		sq.offsetTop<player.offsetTop&&
		sq.offsetTop+sq.offsetHeight>player.offsetTop+player.offsetHeight&&
		sq.offsetWidth>player.offsetWidth&&
		sq.offsetHeight>player.offsetHeight){
		playerSelected=true;
		player.style.backgroundColor="blue";
	}
	else{player.style.backgroundColor="brown";playerSelected=false;}


	sq.style.display="none";
	msdown=false;
}
function ismousedown() {
	if(msdown==true){
	if(mouseX>sqX||mouseX<sqX){
	if(mouseY>sqY||mouseY<sqY){
	sq.style.left=sqX+"px";
	sq.style.top=sqY+"px";
	bool=true;
	sq.style.display="block";update();
	}}}
}
function buildhouse() {
	if (num==1) {
	let house = document.createElement("div");
	house.classList.add("house");
	house.style.left=mouseX-107/2+"px";
	house.style.top=mouseY-139+"px";
	house.style.zIndex=zindex++;
	document.body.appendChild(house);}
}
let num = 1;
function btn() {
	if (num==1) {transhouse.style.display="none";num=2;}
	else if (num==2) {transhouse.style.display="block";num=1;}
}
function movePlayer() {
	if (playerSelected){
	player.style.left=mouseX+"px";
	player.style.top=mouseY+"px";
	guard.style.left=mouseX-player.offsetWidth*1.5+Math.floor(Math.random()*150)+"px";
	guard.style.top=mouseY-Math.floor(Math.random()*100)+"px";
}}
function update() {
if (bool==true&&mouseX<sqX&&mouseY<sqY){
			sq.style.transform="translate(-100%,-100%)";
			sq.style.width=sqX-mouseX+"px";sq.style.height=sqY-mouseY+"px";}
if (bool==true&&mouseX<sqX&&mouseY>sqY){
			sq.style.transform="translate(-100%,0%)";
			sq.style.width=sqX-mouseX+"px";sq.style.height=mouseY-sqY+"px";}
if (bool==true&&mouseX>sqX&&mouseY<sqY){
			sq.style.transform="translate(0%,-100%)";
			sq.style.width=mouseX-sqX+"px";sq.style.height=sqY-mouseY+"px";}
if (bool==true&&mouseX>sqX&&mouseY>sqY){
			sq.style.transform="translate(0%,0%)";
			sq.style.width=mouseX-sqX+"px";sq.style.height=mouseY-sqY+"px";}
}
//	 THINGS THAT SHOULD BE DONE ONCE

let bush = document.querySelector(".bush");
bush.style.top=Math.floor(Math.random() * 600)+"px";
bush.style.left=Math.floor(Math.random() * 1000)+"px";
sq.style.left=window.innerWidth+"px";
sq.style.top=window.innerHeight+"px";
btn();
let player = document.querySelector("#player");
let guard = document.querySelector("#guard");
guard.style.left=player.offsetLeft-50+"px";
guard.style.top=player.offsetTop-50+"px";

//	 MAP VIEWING DO NOT CHANGE

window.setInterval(function(){
	let windowWidth=window.innerWidth;
	let windowHeight=window.innerHeight;
	if (mouseXonscreen>=windowWidth-2){window.scrollBy(30,0);}
	else if (mouseXonscreen>=windowWidth-30){window.scrollBy(11,0);}
	else if (mouseXonscreen<=2){window.scrollBy(-30,0);}
	else if(mouseXonscreen<=30){window.scrollBy(-11,0);}
	if (mouseYonscreen>=windowHeight-10){window.scrollBy(0,30);}
	else if (mouseYonscreen>=windowHeight-100){window.scrollBy(0,11);}
	else if (mouseYonscreen<=5){window.scrollBy(0,-30);}
	else if(mouseYonscreen<=30){window.scrollBy(0,-11);}
}, 50);