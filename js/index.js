window.onload = function(){ document.querySelector(".preloader").style.display = "none";}

const button = document.body.querySelector('[data-target="#collapseExample"]');
/*
Add click event listener where we will provide logic that updates the button text
*/
button.addEventListener('click', function() {
  
  /*
  Update the text of the button to toggle beween "More" and "Less" when clicked
  */
  if(button.innerText.toLowerCase() === 'Thanks for Downloading!') {
    button.innerText = 'Résumé';
  }
  else {
    button.innerText = 'Thanks for Downloading!';
  }
});