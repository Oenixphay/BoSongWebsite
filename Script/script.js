Reveal = function(text){
    var head = document.getElementById(text); 
    if(head.style.display == 'none'){
       head.style.display = 'block';
    } else {
      head.style.display = 'none';
    }
 }