// created by ToffyCaluga
let colors=generateRandomColors(6);

let squares=document.querySelectorAll('.square');
for(i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];
}
let h1=document.querySelector('h1');
let numbreOfSquares=6;
let pickedColor=pickColor(numbreOfSquares);
let contentColorDisplay=document.querySelector('#colorDisplay ');
contentColorDisplay.textContent=pickedColor;
let colorBody='#232323';
let menssage=document.querySelector('#menssage');
let reset=document.querySelector('#reset');
let easy=document.querySelector("#easy");
let hard=document.querySelector("#hard");
let toffy=document.querySelector("#toffy");
let imgWin="<div id='image2'><img src='img/cartel.png'><span id='win'> <b>You Win!!</b></span></div>" ;
let imgLose="<div id='image1' ><img src='img/puag.png'><span id='lose'><b>Try Again</b></span></div>";

for(i=0;i<squares.length;i++){
    squares[i].addEventListener('click',function(){
        // alert("funciona")
        let clickedColor=getComputedStyle(this);
        // alert(clickedColor.backgroundColor);
        // alert(pickedColor);
        if(clickedColor.backgroundColor==pickedColor){
            // alert("correcto");
            changeColorCorrect();
        }else{
            // alert("incorrecto");
            changeColorFail(this);
        }
    });
}
function changeColorCorrect(){
    for(let i =0;i<colors.length;i++){
        squares[i].style.background=pickedColor;
        squares[i].innerHTML=imgWin;
    }
    h1.style.background=pickedColor;
    menssage.textContent="You win!!!"
    reset.textContent="Play Again";
}
function changeColorFail(a){
    a.style.background=colorBody;
    menssage.textContent="Try Again";
    // toffy.setAttribute("src", "img/puag.png");
    a.innerHTML=imgLose;
}
;
function generateRandomColors(num){
    let array=[];
    for(let i=0;i<num;i++){
        array[i]=randomColor();
    }
    return array;
}
function randomColor(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    rgb="rgb("+red+", "+green+", "+blue+")";
    return rgb;
}
function pickColor(num){
    let random=Math.floor(Math.random()*num);
    return colors[random];

}
reset.addEventListener('click',function(){
    reset.textContent="New colors";
    menssage.textContent="Let's play";
    h1.style.background="gray";
    colors=generateRandomColors(numbreOfSquares);
   
    pickedColor=pickColor(numbreOfSquares);
    // alert(pickedColor);
    contentColorDisplay.textContent=pickedColor;
    for(let i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
        squares[i].innerHTML="";
    }
});

easy.addEventListener('click',function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    numbreOfSquares=3;
    colors=generateRandomColors(numbreOfSquares);
    pickedColor=pickColor(numbreOfSquares);
    contentColorDisplay.textContent=pickedColor;
    for(let i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
            squares[i].innerHTML="";
        }else{
            squares[i].style.display="none";
        }
    }
});
hard.addEventListener('click',function(){
    easy.classList.remove("selected");
    hard.classList.add("selected")
    numbreOfSquares=6;
    colors=generateRandomColors(numbreOfSquares);
    pickedColor=pickColor(numbreOfSquares);
    contentColorDisplay.textContent=pickedColor;
    for(let i=0;i<colors.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
            squares[i].style.display="block";
            squares[i].innerHTML="";
        }
    }
});

