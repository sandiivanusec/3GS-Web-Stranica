const toggleButton = document.getElementsByClassName("hamburger_button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

//Za pokrenuti drugi dropdown
const ec_i_dropdown = document.getElementsByClassName("ec_i_dropdown")[0];
const ec_dropdown_linkovi = document.getElementsByClassName("ec_dropdown_linkovi")[0];

const energetskiCertifikati = document.getElementsByClassName("EnergetskiCertifikati")[0];


function isMobile () {
 return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

if(isMobile()) {

  energetskiCertifikati.addEventListener("click", () => {
    ec_dropdown_linkovi.classList.toggle("active");
  });

} else {

  energetskiCertifikati.addEventListener("mouseover", () => {
    ec_dropdown_linkovi.classList.add("active");
  });
  energetskiCertifikati.addEventListener("mouseout", () => {
    ec_dropdown_linkovi.classList.remove("active");
  });
  
  ec_dropdown_linkovi.addEventListener("mouseover", () => {
    ec_dropdown_linkovi.classList.add("active");
  });
  ec_dropdown_linkovi.addEventListener("mouseout", () => {
    ec_dropdown_linkovi.classList.remove("active");
  });

}



