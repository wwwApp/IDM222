//function to toggle the visibility of the project div
const worksTitle = document.querySelectorAll('.worksTitle');
function toggleWorkItem(event){
    //hide all project div before showing the selected project div
    const workItems = document.querySelectorAll('.workItem');
    for (const workItem of workItems){
        workItem.hidden = true;
    }

    //get the ID value of the targeted project div
    const targetElementID = this.getAttribute('href').substr(1);
    console.log(targetElementID);

    //get the targeted project div and toggle the state of 'hidden' to show
    const targetElement = document.getElementById(targetElementID);
    targetElement.hidden = false;

    //prevent the default action of navigating to the href value
    event.preventDefault();
}

//add the event listeners to the titles of the works
for(const anchor of worksTitle){
    anchor.addEventListener('click', toggleWorkItem, false);
}


//function to close the currently opened project div using button
const closeButtons = document.querySelectorAll('.close');
function closeWorkItem(event){
    //find the project div that is currently opened
    const workItems = document.querySelectorAll('.workItem');
    var currentElementID = "";
    for (const workItem of workItems){
        if(workItem.hidden = false){
            currentElementID = workItem.getAttribute('id');
            console.log(currentElementID);
        }
    }

    //get the current project div and toggle the state of 'hidden' to close
    const currentElement = document.getElementById(currentElementID);
    currentElement.hidden = true;
}

//add the event listeners to the close buttons in all project div
for(const button of closeButtons){
    button.addEventListener('click', closeWorkItem, false);
}


//randomly apply styles to work-titles
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