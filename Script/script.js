//Create function "Reveal()"
Reveal = function(text){
   //Create variable: In this context, stores the unordered list with the activity description within a parallel display
    var head = document.getElementById(text); 
   //Create an if statement that displays hidden text on click
    if(head.style.display == 'none'){
       head.style.display = 'block';
    } 
    //Else statement that hides text on click if shown
    else {
      head.style.display = 'none';
    }
 }