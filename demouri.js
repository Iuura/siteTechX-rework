
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";
  
}
//
//
//
//
let slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(m) {
  showSlides1(slideIndex1 += m);
}

// Thumbnail image controls
function currentSlide1(m) {
  showSlides1(slideIndex1 = m);
}

function showSlides1(m) {
  let j;
  let slides1 = document.getElementsByClassName("mySlides1");
  //let dots1 = document.getElementsByClassName("dot");
  if (m > slides1.length) {slideIndex1 = 1}
  if (m < 1) {slideIndex1 = slides1.length}
  for (j = 0; j < slides1.length; j++) {
    slides1[j].style.display = "none";
  }
  //for (j = 0; j < dots1.length; j++) {
    //dots1[j].className = dots1[j].className.replace(" active", "");
  //}
  slides1[slideIndex1-1].style.display = "block";
 
}

function on() {
  document.getElementById("overlay").style.display = "block";
}
function on1() {
  document.getElementById("overlay1").style.display = "block";
}
function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("overlay1").style.display = "none";
}