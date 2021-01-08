const extindere = document.querySelectorAll(".extindere");
const deExtins = document.querySelectorAll(".deExtins");

extindere[0].addEventListener("click", () => extinde(0));

function extinde(x) {
  if (deExtins[x].classList.contains("ascuns")) {
    deExtins[x].classList.remove("ascuns");
    extindere[x].innerHTML =
      '<img src="poze/arrow-circle-up.svg" alt="extinde" />';
  } else {
    deExtins[x].classList.add("ascuns");
    extindere[x].innerHTML =
      '<img src="poze/arrow-circle-down.svg" alt="extinde" />';
  }
}
