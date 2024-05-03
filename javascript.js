// JavaScript for slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].classList.add("zoomIn"); // Add zoom in animation to current slide
  setTimeout(function() {
    slides[slideIndex-1].classList.remove("zoomIn"); // Remove zoom in animation after duration
    slides[slideIndex-1].classList.add("zoomOut"); // Add zoom out animation
  }, 2000); // Duration for zoom in animation (2 seconds)
  setTimeout(showSlides, 4000); // Change image every 4 seconds (including animation duration)
}


//slidec
$(document).ready(function() {
  $('#card-carousel').carousel({
    interval: 2000 // Change interval as needed (in milliseconds)
  });
});

//database of email
