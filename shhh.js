const banner = document.querySelector(".banner");
const hopa = new Audio("./poze/galerie/hopa.mp3");

let apasari = 0;

hopa.loop = true;

banner.addEventListener("click", () => {
   console.log(apasari);
   apasari++;
   if (apasari == 8) apasari = 0;
   if (apasari == 5) hopa.play(0);
   else if (apasari == 7) {
      hopa.pause();
      hopa.currentTime = 0;
   }
});
