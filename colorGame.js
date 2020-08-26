var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor =  pickColor();
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var numSquares = 6;

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];

        }else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
        
            squares[i].style.background = colors[i];

       
            squares[i].style.display = "block";
        
    }
   
})

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor =  pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    resetButton.textContent = "New Colors";  
    messageDisplay.textContent = "";  

})







colorDisplay.textContent = pickedColor;



for(var i = 0; i<squares.length; i++){
    squares[i].style.background = colors[i];

   
   squares[i].addEventListener("click", function(){
       
    var clickedColor = this.style.background;
   
   
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "correct!!!";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        resetButton.textContent = "Play again?!";
        
        
    
    }
    else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }

   });
   
}

function changeColors(color){
    for(var i = 0 ; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){

var arr = []

for(var i = 0; i < num; i++){
    arr.push(randomColor())

}
return arr;
}

function randomColor(){
            
    var ra = Math.floor(Math.random() * 256); 
    var ga = Math.floor(Math.random() * 256);
    var ba = Math.floor(Math.random() * 256);
     
    return "rgb(" + ra + ", " + ga+ ", " + ba + ")" ;




}