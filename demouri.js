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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex - 1].style.display = "block";

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
  if (m > slides1.length) { slideIndex1 = 1 }
  if (m < 1) { slideIndex1 = slides1.length }
  for (j = 0; j < slides1.length; j++) {
    slides1[j].style.display = "none";
  }
  //for (j = 0; j < dots1.length; j++) {
  //dots1[j].className = dots1[j].className.replace(" active", "");
  //}
  slides1[slideIndex1 - 1].style.display = "block";

}
//
//
//
//
//
let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(p) {
  showSlides2(slideIndex2 += p);
}

// Thumbnail image controls
function currentSlide2(p) {
  showSlides2(slideIndex2 = p);
}

function showSlides2(p) {
  let k;
  let slides2 = document.getElementsByClassName("mySlides2");
  //let dots1 = document.getElementsByClassName("dot");
  if (p > slides2.length) { slideIndex2 = 1 }
  if (p < 1) { slideIndex2 = slides2.length }
  for (k = 0; k < slides2.length; k++) {
    slides2[k].style.display = "none";
  }
  //for (j = 0; j < dots1.length; j++) {
  //dots1[j].className = dots1[j].className.replace(" active", "");
  //}
  slides2[slideIndex2 - 1].style.display = "block";

}

let slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(p) {
  showSlides3(slideIndex3 += p);
}

// Thumbnail image controls
function currentSlide3(p) {
  showSlides3(slideIndex3 = p);
}

function showSlides3(p) {
  let k;
  let slides3 = document.getElementsByClassName("mySlides3");
  //let dots1 = document.getElementsByClassName("dot");
  if (p > slides3.length) { slideIndex3 = 1 }
  if (p < 1) { slideIndex3 = slides3.length }
  for (k = 0; k < slides3.length; k++) {
    slides3[k].style.display = "none";
  }
  //for (j = 0; j < dots1.length; j++) {
  //dots1[j].className = dots1[j].className.replace(" active", "");
  //}
  slides3[slideIndex3 - 1].style.display = "block";

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
function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("overlay1").style.display = "none";
  document.getElementById("overlay2").style.display = "none";
  document.getElementById("overlay3").style.display = "none";
}




var slidePosition = 1;
SlideShow(slidePosition);
SlideShow1(slidePosition);
SlideShow2(slidePosition);
SlideShow3(slidePosition);

// forward/Back controls
function plusSlideS(n) {
  SlideShow(slidePosition += n);
}
function plusSlideS1(n) {
  SlideShow1(slidePosition += n);
}
function plusSlideS2(n) {
  SlideShow2(slidePosition += n);
}
function plusSlideS3(n) {
  SlideShow3(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}
function currentSlide1(n) {
  SlideShow1(slidePosition = n);
}
function currentSlide2(n) {
  SlideShow2(slidePosition = n);
}
function currentSlide3(n) {
  SlideShow3(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slideS = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slideS.length) { slidePosition = 1 }
  if (n < 1) { slidePosition = slideS.length }
  for (i = 0; i < slideS.length; i++) {
    slideS[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slideS[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}
function SlideShow1(n) {
  var i;
  var slideS = document.getElementsByClassName("Containers1");
  var circles = document.getElementsByClassName("dots1");
  if (n > slideS.length) { slidePosition = 1 }
  if (n < 1) { slidePosition = slideS.length }
  for (i = 0; i < slideS.length; i++) {
    slideS[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slideS[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}

function SlideShow2(n) {
  var i;
  var slideS = document.getElementsByClassName("Containers2");
  var circles = document.getElementsByClassName("dots2");
  if (n > slideS.length) { slidePosition = 1 }
  if (n < 1) { slidePosition = slideS.length }
  for (i = 0; i < slideS.length; i++) {
    slideS[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slideS[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}

function SlideShow3(n) {
  var i;
  var slideS = document.getElementsByClassName("Containers3");
  var circles = document.getElementsByClassName("dots3");
  if (n > slideS.length) { slidePosition = 1 }
  if (n < 1) { slidePosition = slideS.length }
  for (i = 0; i < slideS.length; i++) {
    slideS[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slideS[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
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