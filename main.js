const extindere = document.querySelectorAll(".extindere");
const deExtins = document.querySelectorAll(".deExtins");
const butonMeniu = document.querySelector("#butonMeniu");
const copyright = document.querySelector("#copyright small");

if (copyright)
   copyright.innerText = `© Tech-X ${new Date().getFullYear()} | Toate drepturile rezervate`;

//Meniu pentru ecrane mici
butonMeniu.addEventListener("click", meniuMobil);
const meniu = document.querySelector("#meniu");
if (screen.width > 768) meniu.style.display = "none";
function meniuMobil() {
   if (meniu.style.display === "flex") meniu.style.display = "none";
   else meniu.style.display = "flex";
}

function bannerCycle() {
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
         schimbareBanner();
      }, 3000);
   }
}

bannerCycle();

const banner = document.querySelector(".banner");
const hopa = new Audio("./poze/galerie/hopa.mp3");
const gif = document.querySelector("#surpriza");

let apasari = 0;

hopa.loop = true;

banner.addEventListener("click", () => {
   let clickuri = 4;
   console.log(apasari);
   apasari++;
   if (apasari == clickuri + 3) apasari = 1;
   if (apasari == clickuri) {
      gif.style.display = "block";
      hopa.play();
   } else if (apasari == clickuri + 2) {
      gif.style.display = "none";
      hopa.pause();
      hopa.currentTime = 0;
   }
});




