const extindere = document.querySelectorAll(".extindere");
const deExtins = document.querySelectorAll(".deExtins");
const butonMeniu = document.querySelector("#butonMeniu");

//Meniu pentru ecrane mici
butonMeniu.addEventListener("click", meniuMobil);
const meniu = document.querySelector("#meniu");
if (screen.width > 768) meniu.style.display = "none";
function meniuMobil() {
   if (meniu.style.display === "flex") meniu.style.display = "none";
   else meniu.style.display = "flex";
}

const pozeBanner = document.querySelectorAll(".banner-image");

let pozaBanner = 0;
pozeBanner[pozaBanner].style.display = "block";
pozaBanner++;
schimbareBanner();
function schimbareBanner() {
   setTimeout(() => {
      pozaBanner == 0
         ? (pozeBanner[pozeBanner.length - 1].style.display = "none")
         : (pozeBanner[pozaBanner - 1].style.display = "none");
      pozeBanner[pozaBanner].style.display = "block";
      pozaBanner++;
      if (pozaBanner == pozeBanner.length) pozaBanner = 0;
      console.log(pozaBanner);
      schimbareBanner();
   }, 3000);
}
