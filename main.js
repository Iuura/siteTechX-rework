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
