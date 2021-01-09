const extindere = document.querySelectorAll(".extindere");
const deExtins = document.querySelectorAll(".deExtins");

for (let i = 0; i < extindere.length; i++) {
   extindere[i].parentElement.addEventListener("click", () => extinde(i));
}

function extinde(x) {
   let clasa = extindere[x].parentElement.classList[0];
   switch (clasa) {
      case "intunecat":
         if (deExtins[x].classList.contains("ascuns")) {
            deExtins[x].classList.remove("ascuns");
            if (deExtins[x].classList.contains("desc")) {
               deExtins[x].style.display = "flex";
            }
            extindere[x].innerHTML =
               '<img src="poze/arrow-circle-up.svg" alt="extinde" />';
         } else {
            deExtins[x].classList.add("ascuns");
            if (deExtins[x].classList.contains("desc")) {
               deExtins[x].style.display = "";
            }
            extindere[x].innerHTML =
               '<img src="poze/arrow-circle-down.svg" alt="extinde" />';
         }
         break;
      case "galbui":
         if (deExtins[x].classList.contains("ascuns")) {
            deExtins[x].classList.remove("ascuns");
            if (deExtins[x].classList.contains("desc")) {
               deExtins[x].style.display = "flex";
            }
            extindere[x].innerHTML =
               '<img src="poze/arrow-circle-up-dark.svg" alt="extinde" />';
         } else {
            deExtins[x].classList.add("ascuns");
            if (deExtins[x].classList.contains("desc")) {
               deExtins[x].style.display = "";
            }
            extindere[x].innerHTML =
               '<img src="poze/arrow-circle-down-dark.svg" alt="extinde" />';
         }
         break;
   }

   //console.log(extindere[x].parentElement.classList[0]);
}
