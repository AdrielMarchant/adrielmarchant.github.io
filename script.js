window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
      document.querySelector('.back-to-top').style.display = 'block';
      document.querySelector('.back-to-landing').style.display = 'block';
    } else {
      document.querySelector('.back-to-top').style.display = 'none';
      document.querySelector('.back-to-landing').style.display = 'none';
    }
  });

window.addEventListener("load", function() {
  const grey = document.querySelector(".grey");
  const white = document.querySelector(".white");

  grey.classList.add("show");
  white.classList.add("show");
});
function gallery(imgs) {
  var expandImg = document.getElementById("expandedImg"); // Get the expanded image
  var imgText = document.getElementById("imgtext");// Get the image text
  expandImg.src = imgs.src; // Use the same src in the expanded image as the image being clicked on from the grid
  imgText.innerHTML = imgs.alt;// Use the value of the alt attribute of the clickable image as text inside the expanded image
  expandImg.parentElement.style.display = "block";// Show the container element (hidden with CSS)
}
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {// Next/previous controls
  showSlides(slideIndex += n);
}
function currentSlide(n) {// Thumbnail image controls
  showSlides(slideIndex = n);
  var dots = document.getElementsByClassName("dot");
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[slideIndex - 1].classList.add("active");
}
function showSlides(n) { // Show the selected picture 
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

