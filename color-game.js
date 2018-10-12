var numSquare = 6;
var colors = generateRandomColors(numSquare);
var pickedColor = pickColor();
var square =document.querySelectorAll(".square");
var colorDisplay =document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent=pickedColor;


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquare = 3;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i = 0; i< square.length; i++) {
		if(square[i]){
			square[i].style.backgroundColor =colors[i];
		}
		square[3].style.display ="none";
		square[4].style.display ="none";
		square[5].style.display ="none";
		// else {
		// 	square[i].style.display="none";
		// }
	}
	h1.style.background = "#cf0505"
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquare = 6;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< square.length; i++) {
		square[i].style.backgroundColor =colors[i];
		square[i].style.display ="block";
	
	}
	h1.style.background = "#cf0505"
});

resetButton.addEventListener("click", function(){
	// generate new colors for the squares
	colors = generateRandomColors(6);
	// pickig the new random color
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	//change the square color
	for (var i =0; i < square.length; i++){
		square[i].style.backgroundColor =colors[i];
	}
	h1.style.background = "#23233b"
});

for (var i =0; i < square.length; i++){
	// aad initial colors to squares
	square[i].style.backgroundColor =colors[i];
	// add click listener to squares
	square[i].addEventListener("click", function(){
		// grab the color of clicked square
		var clickedColor = this.style.backgroundColor
		// compare color to pickedColor
		if (clickedColor === pickedColor) {
			resetButton.textContent="Play Again ?";
			messageDisplay.textContent="correct !";
			colorChange(clickedColor);
			h1.style.background = pickedColor;
		}else {
			this.style.backgroundColor="#23233b";
			messageDisplay.textContent="try again";
		}
	});
}



// ************************** function definitions *******************

function colorChange(color) {
	// loop thogh all squares
	for(var i=0; i<square.length; i++) {
		// change all color to the match color
		square[i].style.backgroundColor=color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for(var i= 0; i<num; i++) {
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor() {
	// picking the random color for red
	var r = Math.floor((Math.random() * 256));
	// picking the random color for green
	var g = Math.floor((Math.random() * 256));
	// picking the random color for blue
	var b = Math.floor((Math.random() * 256));

	// return the random colors
	return "rgb("+ r + ", " + g + ", " + b +")";
}
