const toggleButton = document.getElementsByClassName("hamburger_button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

//Za pokrenuti drugi dropdown
const ec_i_dropdown = document.getElementsByClassName("ec_i_dropdown")[0];
const ec_dropdown_linkovi = document.getElementsByClassName("ec_dropdown_linkovi")[0];




toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

//Za pokrenuti drugi dropdown
//ec_i_dropdown.addEventListener("mouseover", () => {

const energetskiCertifikati = document.getElementsByClassName("EnergetskiCertifikati")[0];

energetskiCertifikati.addEventListener("mouseover", () => {
  ec_dropdown_linkovi.classList.add("active");
  //ec_dropdown_linkovi.classList.toggle("active");
});
energetskiCertifikati.addEventListener("mouseout", () => {
  ec_dropdown_linkovi.classList.remove("active");
});

ec_dropdown_linkovi.addEventListener("mouseover", () => {
  ec_dropdown_linkovi.classList.add("active");
  //ec_dropdown_linkovi.classList.toggle("active");
});
ec_dropdown_linkovi.addEventListener("mouseout", () => {
  ec_dropdown_linkovi.classList.remove("active");
  //ec_dropdown_linkovi.classList.toggle("active");
});



