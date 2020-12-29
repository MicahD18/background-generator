var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var random1 = document.querySelector(".random1");
var random2 = document.querySelector(".random2");

function currentGradient() {
    css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function randomButton() {
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor.color1 = "#" + randomColor1;
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor.color2 = "#" + randomColor2;

        random1.innerHTML = "#" + randomColor1;
        random2.innerHTML = "#" + randomColor2;
    }

button.addEventListener("click", randomButton);

currentGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

color1.addEventListener("click", randomButton);
color2.addEventListener("click", randomButton);

