//function to prevent default action for anchor elements
const anchors = document.querySelectorAll('a');
for(anchor of anchors){
    anchor.addEventListener('click', function(){
        event.preventDefault();
    },false);
}

//function to close all details when one is clicked
const workContainers = document.querySelectorAll('.workContainer');
function closeWorkContainer(event){
    //hide all project div before showing the selected project div
    for (const workContainer of workContainers){
        workContainer.open = false;
    }
}

//add the event listeners to the titles of the works
for(workContainer of workContainers){
    workContainer.addEventListener('click', closeWorkContainer, false);
}


//function to close the currently opened project div using button
const closeButtons = document.querySelectorAll('.close');
function closeWorkContainer(event){
    //find the project div that is currently opened
    const workContainers = document.querySelectorAll('.workContainer');
    var currentElementID = "";
    for (const workContainer of workContainers){
        if(workContainer.open == true){
            currentElementID = workContainer.getAttribute('id');
            console.log(currentElementID);
        }
    }

    //get the current project div and toggle the state of 'hidden' to close
    const currentElement = document.getElementById(currentElementID);
    if(currentElement!=null){
        currentElement.open = false;
    }
}

//add the event listeners to the close buttons in all project div
for(const button of closeButtons){
    button.addEventListener('click', closeWorkContainer, false);
}


//randomly apply styles to work-titles
/*
window.addEventListener('load', function() {
    //get the several random numbers within the length of worksTitle
    var arr = [];
    while(arr.length < 4){
        var randomnumber = Math.floor(Math.random()*worksTitle.length);
        if(arr.indexOf(randomnumber) > -1) 
            continue;
        arr[arr.length] = randomnumber;
    }

    for(var i=0; i<arr.length; i++)
        console.log(arr[i]);

    //using the array from above to change the text style on random worksTitle
    worksTitle[arr[0]].style.textDecoration = "underline";
    worksTitle[arr[1]].style.fontStyle = "italic";
    worksTitle[arr[2]].style.fontWeight = "bold";
    worksTitle[arr[3]].style.textDecoration = "underline";
}, false);
*/