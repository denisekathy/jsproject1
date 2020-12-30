//Options of Colors 
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//Buttons
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){

//Original set up to pick colors between 0-3 
const randomNumber = getRandomNumber();
console.log(randomNumber);

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});

//Set up actual picking of random number

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}