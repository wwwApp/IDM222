//button objects and help object
var pigButton = document.getElementById("pig-button");
var horseButton = document.getElementById("horse-button");
var roosterButton = document.getElementById("rooster-button");
var tigerButton = document.getElementById("tiger-button");
var snakeButton = document.getElementById("snake-button");
var dragonButton = document.getElementById("dragon-button");
var dogButton = document.getElementById("dog-button");
var monkeyButton = document.getElementById("monkey-button");
var sheepButton = document.getElementById("sheep-button");
var rabbitButton = document.getElementById("rabbit-button");
var oxButton = document.getElementById("ox-button");
var ratButton = document.getElementById("rat-button");

/*var buttons = [pigButton, horseButton, roosterButton, tigerButton, snakeButton, dragonButton,
               dogButton, monkeyButton, sheepButton, rabbitButton, oxButton, ratButton];*/
var texts = document.getElementById("test-content").children;
var images = document.getElementById("image-container").children;
var dates = document.getElementById("date-container").children;

var enterButton = document.getElementById("enter");
var helpButton = document.getElementById("help-button");
var helpImage = document.getElementById("help-image");
var exitHelpButton = document.getElementById("exit-help");

//global indexes for each zodiac animal
var rat = 0;
var pig = 1;
var dragon = 2;
var snake = 3;
var rabbit = 4;
var ox = 5;
var monkey = 6;
var rooster = 7;
var tiger = 8;
var sheep = 9;
var horse = 10;
var dog = 11;

//event listeners for help button
helpButton.addEventListener("click", function(){
    helpImage.style.display = "block";
    exitHelpButton.style.display = "block"});

exitHelpButton.addEventListener("click", function(){
    helpImage.style.display = "none";
    exitHelpButton.style.display = "none"});

//hover event listeners
/*for(b in buttons){
    buttons[b].addEventListener("mouseover", function(){
        hoverButton(buttons[b].id);}, false)};*/
pigButton.addEventListener("mouseover", function(){
    hoverButton("pig-button");}, false);
horseButton.addEventListener("mouseover", function(){
    hoverButton("horse-button");}, false);
roosterButton.addEventListener("mouseover", function(){
    hoverButton("rooster-button");}, false);
tigerButton.addEventListener("mouseover", function(){
    hoverButton("tiger-button");}, false);
snakeButton.addEventListener("mouseover", function(){
    hoverButton("snake-button");}, false);
dragonButton.addEventListener("mouseover", function(){
    hoverButton("dragon-button");}, false);
dogButton.addEventListener("mouseover", function(){
    hoverButton("dog-button");}, false);
monkeyButton.addEventListener("mouseover", function(){
    hoverButton("monkey-button");}, false);
sheepButton.addEventListener("mouseover", function(){
    hoverButton("sheep-button");}, false);
rabbitButton.addEventListener("mouseover", function(){
    hoverButton("rabbit-button");}, false);  
oxButton.addEventListener("mouseover", function(){
    hoverButton("ox-button");}, false);
ratButton.addEventListener("mouseover", function(){
    hoverButton("rat-button");}, false);  

//un-hover event listeners
pigButton.addEventListener("mouseout", function(){
    unhoverButton("pig-button");}, false);
horseButton.addEventListener("mouseout", function(){
    unhoverButton("horse-button");}, false);
roosterButton.addEventListener("mouseout", function(){
    unhoverButton("rooster-button");}, false);
tigerButton.addEventListener("mouseout", function(){
    unhoverButton("tiger-button");}, false);
snakeButton.addEventListener("mouseout", function(){
    unhoverButton("snake-button");}, false);
dragonButton.addEventListener("mouseout", function(){
    unhoverButton("dragon-button");}, false);
dogButton.addEventListener("mouseout", function(){
    unhoverButton("dog-button");}, false);
monkeyButton.addEventListener("mouseout", function(){
    unhoverButton("monkey-button");}, false);
sheepButton.addEventListener("mouseout", function(){
    unhoverButton("sheep-button");}, false);
rabbitButton.addEventListener("mouseout", function(){
    unhoverButton("rabbit-button");}, false);  
oxButton.addEventListener("mouseout", function(){
    unhoverButton("ox-button");}, false);
ratButton.addEventListener("mouseout", function(){
    unhoverButton("rat-button");}, false);  

//hover method
function hoverButton(whichSign){
    switch(whichSign){
        case "pig-button":
            pigButton.setAttribute("src", "images/buttons/pig-hover.png");
            break;
        case "horse-button":
            horseButton.setAttribute("src", "images/buttons/horse-hover.png");
            break;
        case "rooster-button":
            roosterButton.setAttribute("src", "images/buttons/rooster-hover.png");
            break;
        case "tiger-button":
            tigerButton.setAttribute("src", "images/buttons/tiger-hover.png");
            break;
        case "snake-button":
            snakeButton.setAttribute("src", "images/buttons/snake-hover.png");
            break;
        case "dragon-button":
            dragonButton.setAttribute("src", "images/buttons/dragon-hover.png");
            break;
        case "dog-button":
            dogButton.setAttribute("src", "images/buttons/dog-hover.png");
            break;
        case "monkey-button":
            monkeyButton.setAttribute("src", "images/buttons/monkey-hover.png");
            break;
        case "sheep-button":
            sheepButton.setAttribute("src", "images/buttons/sheep-hover.png");
            break;
        case "rabbit-button":
            rabbitButton.setAttribute("src", "images/buttons/rabbit-hover.png");
            break;
        case "ox-button":
            oxButton.setAttribute("src", "images/buttons/ox-hover.png");
            break;
        case "rat-button":
            ratButton.setAttribute("src", "images/buttons/rat-hover.png");
            break;
        default:
            break;
    }
}

//unhover method
function unhoverButton(whichSign){
    switch(whichSign){
        case "pig-button":
            pigButton.setAttribute("src", "images/buttons/pig.png");
            break;
        case "horse-button":
            horseButton.setAttribute("src", "images/buttons/horse.png");
            break;
        case "rooster-button":
            roosterButton.setAttribute("src", "images/buttons/rooster.png");
            break;
        case "tiger-button":
            tigerButton.setAttribute("src", "images/buttons/tiger.png");
            break;
        case "snake-button":
            snakeButton.setAttribute("src", "images/buttons/snake.png");
            break;
        case "dragon-button":
            dragonButton.setAttribute("src", "images/buttons/dragon.png");
            break;
        case "dog-button":
            dogButton.setAttribute("src", "images/buttons/dog.png");
            break;
        case "monkey-button":
            monkeyButton.setAttribute("src", "images/buttons/monkey.png");
            break;
        case "sheep-button":
            sheepButton.setAttribute("src", "images/buttons/sheep.png");
            break;
        case "rabbit-button":
            rabbitButton.setAttribute("src", "images/buttons/rabbit.png");
            break;
        case "ox-button":
            oxButton.setAttribute("src", "images/buttons/ox.png");
            break;
        case "rat-button":
            ratButton.setAttribute("src", "images/buttons/rat.png");
            break;
        default:
            break;
    }
}

//click event listeners for animal buttons
/*
for(b in buttons){
    buttons[b].addEventListener("click", function(){
        displayZodiacAnimal(buttons[b].id);}, false);}*/
pigButton.addEventListener("click", function(){
    displayZodiacAnimal("pig-button");}, false);
horseButton.addEventListener("click", function(){
    displayZodiacAnimal("horse-button");}, false);
roosterButton.addEventListener("click", function(){
    displayZodiacAnimal("rooster-button");}, false);
tigerButton.addEventListener("click", function(){
    displayZodiacAnimal("tiger-button");}, false);
snakeButton.addEventListener("click", function(){
    displayZodiacAnimal("snake-button");}, false);
dragonButton.addEventListener("click", function(){
    displayZodiacAnimal("dragon-button");}, false);
dogButton.addEventListener("click", function(){
    displayZodiacAnimal("dog-button");}, false);
monkeyButton.addEventListener("click", function(){
    displayZodiacAnimal("monkey-button");}, false);
sheepButton.addEventListener("click", function(){
    displayZodiacAnimal("sheep-button");}, false);
rabbitButton.addEventListener("click", function(){
    displayZodiacAnimal("rabbit-button");}, false);  
oxButton.addEventListener("click", function(){
    displayZodiacAnimal("ox-button");}, false);
ratButton.addEventListener("click", function(){
    displayZodiacAnimal("rat-button");}, false);  

function displayZodiacAnimal(whichSign){
    //delete whatever is currently being displayed
    for(i = 0; i<images.length; i++){
        images[i].style.display = "none";
        texts[i].style.display = "none";
        if(i<dates.length)
            dates[i].style.display = "none";
    }

    switch(whichSign){
        case "pig-button":
            images[pig].style.display = "block";
            texts[pig].style.display = "block";
            dates[pig].style.display = "block";
            playSound("pig-sound");
            break;
        case "horse-button":
            images[horse].style.display = "block";
            texts[horse].style.display = "block";
            dates[horse].style.display = "block";
            playSound("horse-sound");
            break;
        case "rooster-button":
            images[rooster].style.display = "block";
            texts[rooster].style.display = "block";
            dates[rooster].style.display = "block";
            playSound("rooster-sound");
            break;
        case "tiger-button":
            images[tiger].style.display = "block";
            texts[tiger].style.display = "block";
            dates[tiger].style.display = "block";
            playSound("tiger-sound");
            break;
        case "snake-button":
            images[snake].style.display = "block";
            texts[snake].style.display = "block";
            dates[snake].style.display = "block";
            playSound("snake-sound");
            break;
        case "dragon-button":
            images[dragon].style.display = "block";
            texts[dragon].style.display = "block";
            dates[dragon].style.display = "block";
            playSound("dragon-sound");
            break;
        case "dog-button":
            images[dog].style.display = "block";
            texts[dog].style.display = "block";
            dates[dog].style.display = "block";
            playSound("dog-sound");
            break;
        case "monkey-button":
            images[monkey].style.display = "block";
            texts[monkey].style.display = "block";
            dates[monkey].style.display = "block";
            playSound("monkey-sound");
            break;
        case "sheep-button":
            images[sheep].style.display = "block";
            texts[sheep].style.display = "block";
            dates[sheep].style.display = "block";
            playSound("sheep-sound");
            break;
        case "rabbit-button":
            images[rabbit].style.display = "block";
            texts[rabbit].style.display = "block";
            dates[rabbit].style.display = "block";
            playSound("rabbit-sound");
            break;
        case "ox-button":
            images[ox].style.display = "block";
            texts[ox].style.display = "block";
            dates[ox].style.display = "block";
            playSound("ox-sound");
            break;
        case "rat-button":
            images[rat].style.display = "block";
            texts[rat].style.display = "block";
            dates[rat].style.display = "block";
            playSound("rat-sound");
            break;
        default:
            break;
    }
}

//method to play sound
function playSound(whichSound){
    document.getElementById(whichSound).play();
}

//get user input and get corresponding zodiac animal
//due to the complexity of chinese zodiac calculation,
//I picked five most recent years to compare with the input
function getZodiacAnimal(){
    bdayInput = new Date(document.getElementById("bday").value);
    var bYear = bdayInput.getFullYear();
    var bMonth = bdayInput.getMonth();
    var bDate = bdayInput.getDate();

    //validate date input
    if(isNaN(Date.parse(bdayInput))) {
		alert('Invalid date! Please re-enter!');
		return false;
    }
    
    //increment month and date for readability
    bMonth++;
    bDate++;

    if((bMonth == 12 && bDate >= 22) || (bMonth == 1 && bDate <= 19))
        corrZodiac = "rat-button";
    else if((bMonth == 11 && bDate >= 22) || (bMonth == 12 && bDate <= 21))
        corrZodiac = "pig-button";
    else if((bMonth == 10 && bDate >= 24) || (bMonth == 11 && bDate <= 21))
        corrZodiac = "dragon-button";
    else if((bMonth == 9 && bDate >= 23) || (bMonth == 10 && bDate <= 23))
        corrZodiac = "snake-button";
    else if((bMonth == 8 && bDate >= 23) || (bMonth == 9 && bDate <= 22))
        corrZodiac = "rabbit-button";
    else if((bMonth == 7 && bDate >= 23) || (bMonth == 8 && bDate <= 22))
        corrZodiac = "ox-button";
    else if((bMonth == 6 && bDate >= 22) || (bMonth == 7 && bDate <= 22))
        corrZodiac = "monkey-button";
    else if((bMonth == 5 && bDate >= 21) || (bMonth == 6 && bDate <= 21))
        corrZodiac = "rooster-button";
    else if((bMonth == 4 && bDate >= 20) || (bMonth == 5 && bDate <= 20))
        corrZodiac = "tiger-button";
    else if((bMonth == 3 && bDate >= 21) || (bMonth == 4 && bDate <= 19))
        corrZodiac = "sheep-button";
    else if((bMonth == 2 && bDate >= 19) || (bMonth == 3 && bDate <= 20))
        corrZodiac = "horse-button";
    else if((bMonth == 1 && bDate >= 20) || (bMonth == 2 && bDate <= 18))
        corrZodiac = "dog-button";
    
    displayZodiacAnimal(corrZodiac);
    return false;
}