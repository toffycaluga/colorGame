// created by ToffyCaluga

// Generar colores aleatorios
let colors = generateRandomColors(6);

// Obtener los elementos de los cuadrados
let squares = document.querySelectorAll('.square');

// Asignar colores areatorios a cada cuadrado 
for (i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
}
// Obtener los elementos del DOM
let h1 = document.querySelector('h1');
let numbreOfSquares = 6;
let pickedColor = pickColor(numbreOfSquares);
let contentColorDisplay = document.querySelector('#colorDisplay ');
contentColorDisplay.textContent = pickedColor;
let colorBody = '#232323';
let menssage = document.querySelector('#menssage');
let reset = document.querySelector('#reset');
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");
let toffy = document.querySelector("#toffy");
let imgWin = "<div id='image2'><img src='img/cartel.png' width='100%'><span id='win'> <b>You Win!!</b></span></div>";
let imgLose = "<div id='image1' ><img src='img/puag.png' width='80%'><span id='lose'><b>Try Again</b></span></div>";

// Configurar eventos de click en los cuadrados
for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
        // Obtener el color clickeando
        let clickedColor = getComputedStyle(this);
        // Comparar el color clickeando con el color objetivo 
        if (clickedColor.backgroundColor == pickedColor) {
            // Cambiar los colores y mostrar el mensaje de victoria
            changeColorCorrect();
        } else {
            // Cambiar el color y mostrar mensaje de error
            changeColorFail(this);
        }
    });
}
// Funcion para cambiar los colores cuando el jugador acierta
function changeColorCorrect() {
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.background = pickedColor;
        squares[i].innerHTML = imgWin;
    }
    h1.style.background = pickedColor;
    menssage.textContent = "You win!!!"
    reset.textContent = "Play Again";
}
// Función para cambiar el color cuando el jugador falla
function changeColorFail(a) {
    a.style.background = colorBody;
    menssage.textContent = "Try Again";
    a.innerHTML = imgLose;
}
;
// generar colores aleatorios
function generateRandomColors(num) {
    let array = [];
    for (let i = 0; i < num; i++) {
        array[i] = randomColor();
    }
    return array;
}
// Generar un color aleatorio e formato RGB
function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
    return rgb;
}
// Elegir un color aleatorio de la lista de colores
function pickColor(num) {
    let random = Math.floor(Math.random() * num);
    return colors[random];

}
// configurar evento de click en boton "Reset"
reset.addEventListener('click', function () {
    reset.textContent = "New colors";
    menssage.textContent = "Let's play";
    h1.style.background = "gray";
    colors = generateRandomColors(numbreOfSquares);

    pickedColor = pickColor(numbreOfSquares);
    contentColorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].innerHTML = "";
    }
});
// configurar evento de click en boton "Easy"
easy.addEventListener('click', function () {
    hard.classList.remove("selected");
    easy.classList.add("selected");
    numbreOfSquares = 3;
    colors = generateRandomColors(numbreOfSquares);
    pickedColor = pickColor(numbreOfSquares);
    contentColorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].innerHTML = "";
        } else {
            squares[i].style.display = "none";
        }
    }
});
// configurar evento de click en boton "Hard"
hard.addEventListener('click', function () {
    easy.classList.remove("selected");
    hard.classList.add("selected")
    numbreOfSquares = 6;
    colors = generateRandomColors(numbreOfSquares);
    pickedColor = pickColor(numbreOfSquares);
    contentColorDisplay.textContent = pickedColor;
    for (let i = 0; i < colors.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
            squares[i].innerHTML = "";
        }
    }
});

