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
