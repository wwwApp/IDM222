var works_title = document.getElementsByClassName("works-title");
var description = document.getElementsByClassName("description");
var close = document.getElementsByClassName("close");

//randomly apply styles to work-titles
window.addEventListener('load', function() {
    var arr = [];
    while(arr.length < 4){
        var randomnumber = Math.floor(Math.random()*works_title.length);
        if(arr.indexOf(randomnumber) > -1) 
            continue;
        arr[arr.length] = randomnumber;
    }

    for(var i=0; i<arr.length; i++)
        console.log(arr[i]);

    works_title[arr[0]].style.textDecoration = "underline";
    works_title[arr[1]].style.fontStyle = "italic";
    works_title[arr[2]].style.fontWeight = "bold";
    works_title[arr[3]].style.textDecoration = "underline";
}, false);

//function to expand description div once work-title is clicked
/*for(var i = 0; i < works_title.length; i++){
    works_title[i].addEventListener('click', function(){
        for(var j = 0; j<description.length; j++)
            description[j].style.display="none";

        description[i].style.display="block";
    }, false);
}*/

//function to expand description div once work-title is clicked
/*for(var i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(){
        description[i].style.display="none";
    }, false);
}*/

//temporary for testing
works_title[3].addEventListener('click', function(){
    description[3].style.display="block";
}, false);

close[3].addEventListener('click', function(){
    description[3].style.display="none";
}, false);

works_title[2].addEventListener('click', function(){
    description[2].style.display="block";
}, false);

close[2].addEventListener('click', function(){
    description[2].style.display="none";
}, false);

works_title[5].addEventListener('click', function(){
    description[5].style.display="block";
}, false);

close[5].addEventListener('click', function(){
    description[5].style.display="none";
}, false);

