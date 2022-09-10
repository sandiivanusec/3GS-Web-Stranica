const toggleButton = document.getElementsByClassName("hamburger_button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

//Za pokrenuti drugi dropdown
const ec_i_dropdown = document.getElementsByClassName("ec_i_dropdown")[0];
const ec_dropdown_linkovi = document.getElementsByClassName("ec_dropdown_linkovi")[0];




toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

//Za pokrenuti drugi dropdown
ec_i_dropdown.addEventListener("click", () => {
  ec_dropdown_linkovi.classList.toggle("active");
})


