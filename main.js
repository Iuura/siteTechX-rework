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

let slider = tns({
   container: "#sliderMembri",
   items: 3,
   speed: 200,
   autoplay: true,
   autoplayHoverPause: false,
   autoplayTimeout: 2000,
   autoplayText: ["▶", "❚❚"],
   swipeAngle: 10,
   controls: false,
   autoplayButtonOutput: false,
   responsive: {
      1200: {
         items: 3,
         gutter: 20,
      },
      740: {
         items: 2,
         gutter: 20,
      },
      1: {
         items: 1,
      },
   },
   nav: true,
   navPosition: "bottom",
   navAsThumbnails: true,
   touch: true,
   arrowKeys: true,
   mouseDrag: true,
});

bannerCycle();
