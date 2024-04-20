let slideIndex = 1;
let slideIndex1 = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;
let slideIndex4 = 1;

SlideShow(slideIndex);
SlideShow1(slideIndex1);
SlideShow2(slideIndex2);
SlideShow3(slideIndex3);
SlideShow4(slideIndex4);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides1 = document.getElementsByClassName("mySlides1");
  if (n > slides1.length) { slideIndex1 = 1; }
  if (n < 1) { slideIndex1 = slides1.length; }
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slides1[slideIndex1 - 1].style.display = "block";
}

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  if (n > slides2.length) { slideIndex2 = 1; }
  if (n < 1) { slideIndex2 = slides2.length; }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slides2[slideIndex2 - 1].style.display = "block";
}

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let i;
  let slides3 = document.getElementsByClassName("mySlides3");
  if (n > slides3.length) { slideIndex3 = 1; }
  if (n < 1) { slideIndex3 = slides3.length; }
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slides3[slideIndex3 - 1].style.display = "block";
}

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  let i;
  let slides4 = document.getElementsByClassName("mySlides4");
  if (n > slides4.length) { slideIndex4 = 1; }
  if (n < 1) { slideIndex4 = slides4.length; }
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  slides4[slideIndex4 - 1].style.display = "block";
}

function on() {
  document.getElementById("overlay").style.display = "block";
}
function on1() {
  document.getElementById("overlay1").style.display = "block";
}
function on2() {
  document.getElementById("overlay2").style.display = "block";
}
function on3() {
  document.getElementById("overlay3").style.display = "block";
}
function on4() {
  document.getElementById("overlay4").style.display = "block";
}
function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("overlay1").style.display = "none";
  document.getElementById("overlay2").style.display = "none";
  document.getElementById("overlay3").style.display = "none";
  document.getElementById("overlay4").style.display = "none";
}

function plusSlideS(n) {
  SlideShow(slideIndex += n);
}
function plusSlideS1(n) {
  SlideShow1(slideIndex1 += n);
}
function plusSlideS2(n) {
  SlideShow2(slideIndex2 += n);
}
function plusSlideS3(n) {
  SlideShow3(slideIndex3 += n);
}
function plusSlideS4(n) {
  SlideShow4(slideIndex4 += n);
}

function currentSlide(n) {
  SlideShow(slideIndex = n);
}
function currentSlide1(n) {
  SlideShow1(slideIndex1 = n);
}
function currentSlide2(n) {
  SlideShow2(slideIndex2 = n);
}
function currentSlide3(n) {
  SlideShow3(slideIndex3 = n);
}
function currentSlide4(n) {
  SlideShow4(slideIndex4 = n);
}

function SlideShow(n) {
  var i;
  var slideS = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slideS.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slideS.length; }
  for (i = 0; i < slideS.length; i++) {
    slideS[i].style.display = "none";
  }
  slideS[slideIndex - 1].style.display = "block";
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  circles[slideIndex - 1].className += " enable";
}

function SlideShow1(n) {
  var i;
  var slideS = document.getElementsByClassName("Containers1");
  var circles = document.getElementsByClassName("dots1");
  if (n > slideS.length) { slideIndex1 = 1; }
  if (n < 1) { slideIndex1 = slideS.length; }
  for (i = 0; i < slideS.length; i++) {
    slideS[i].style.display = "none";
  }
  slideS[slideIndex1 - 1].style.display = "block";
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  circles[slideIndex1 - 1].className += " enable";
}

function SlideShow2(n) {
  var i;
  var slideS = document.getElementsByClassName("Containers2");
  var circles = document.getElementsByClassName("dots2");
  if (n > slideS.length) { slideIndex2 = 1; }
  if (n < 1) { slideIndex2 = slideS.length; }
  for (i = 0; i < slideS.length; i++) {
    slideS[i].style.display = "none";
  }
  slideS[slideIndex2 - 1].style.display = "block";
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  circles[slideIndex2 - 1].className += " enable";
}

function SlideShow3(n) {
  var i;
  var slideS = document.getElementsByClassName("Containers3");
  var circles = document.getElementsByClassName("dots3");
  if (n > slideS.length) { slideIndex3 = 1; }
  if (n < 1) { slideIndex3 = slideS.length; }
  for (i = 0; i < slideS.length; i++) {
    slideS[i].style.display = "none";
  }
  slideS[slideIndex3 - 1].style.display = "block";
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  circles[slideIndex3 - 1].className += " enable";
}

function SlideShow4(n) {
  var i;
  var slideS = document.getElementsByClassName("Containers4");
  var circles = document.getElementsByClassName("dots4");
  if (n > slideS.length) { slideIndex4 = 1; }
  if (n < 1) { slideIndex4 = slideS.length; }
  for (i = 0; i < slideS.length; i++) {
    slideS[i].style.display = "none";
  }
  slideS[slideIndex4 - 1].style.display = "block";
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  circles[slideIndex4 - 1].className += " enable";
}

var b = 0;
var txt = 'Sezon #7 (2022-2023)';
var speed = 100;

function typeWriter() {
  if (b < txt.length) {
    document.getElementById("sez").innerHTML += txt.charAt(b);
    b++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
