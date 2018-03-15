/*
// Title Button Functionality
*/

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



/*
// Close Button Funtionality
*/

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