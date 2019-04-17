var difficulty=6;

var difficult1=document.querySelector("#easy");
var difficult2=document.querySelector("#hard");
difficult1.addEventListener("click",function(){
	difficulty=3;
	
	colors =generaterandomcolors(difficulty);
	pickedcolor=colorpick();
	colordisplay.textContent=pickedcolor;
	 console.log(pickedcolor);
	 
	colordistrib();
	for (var i = 3; i < squares.length; i++) {
		squares[i].style.backgroundColor="#232323";
	}
resetf();
});
difficult2.addEventListener("click",function(){
	difficulty=6;

	difficult1.ClassList.remove("selected");
	difficult2.ClassList.add("selected");
	color=generaterandomcolors(difficulty);
	pickedcolor=colorpick();
	colordisplay.textContent=pickedcolor;
	 console.log(pickedcolor);
	 for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=colors[i];
	}
	colordistrib();

	 for (var i = 3; i < squares.length; i++) {
		squares[i].style.backgroundColor=colors[i];
	}
	resetf();
});

var h1=document.querySelector("h1");
var colors =generaterandomcolors(difficulty);
var squares=document.querySelectorAll(".square");

var pickedcolor=colorpick();
var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent=pickedcolor;

var messagedisplay=document.getElementById("message");

var buttonreset=document.querySelector("#reset");
buttonreset.addEventListener("click",function resetf(){
	colors =generaterandomcolors(difficulty);
	pickedcolor=colorpick();
	colordisplay.textContent=pickedcolor;
	 console.log(pickedcolor);
	colordistrib();
});

	 console.log(pickedcolor);
colordistrib();
function colordistrib(){
	for (var i = 0; i< squares.length; i++) 
{
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;

	 // console.log(clickedcolor);
		if(clickedcolor==pickedcolor)
		{
			messagedisplay.textContent="Correct";
			changecolors(pickedcolor);
			h1.style.backgroundColor=pickedcolor;
		}	
		else
		{
			this.style.backgroundColor="#232323";
			messagedisplay.textContent="Try Again";
		}
	});

}
}

function changecolors(color){
	for (var i = difficulty-1; i >=0; i--)
	 {
	 	squares[i].style.backgroundColor=color;
	 }
}
function colorpick(){
	var rnd=Math.floor(Math.random()*colors.length);
	// console.log(rnd);
	return colors[rnd];
}
function generaterandomcolors(number){
	var  arr=[];
	for(var i=0 ; i <number; i ++)
	{
		arr.push(randomcol());
	}
	return arr;

	

}
function randomcol(){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var col="rgb("+r+", "+g+", "+b+")";
		return col;
	}

// console.log(colrdisplay);
