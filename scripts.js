/*PRELOADER*/

window.addEventListener("load", () => {
  const loaderContainer = document.querySelector(
    ".loader-container"
  );
  loaderContainer.style.opacity = 0;
  loaderContainer.style.visibility = "hidden";
});

/* Cookies */
const buttonAcceptCookies = document.getElementById(
  "btn-accept-cookie"
);
const cookiesBanner = document.getElementById("cookies__banner");
const backgroundCookies = document.getElementById(
  "background__cookies"
);

/*if cookies has not accepted*/
if (!localStorage.getItem("cookies-accepted")) {
  cookiesBanner.classList.add("active");
  backgroundCookies.classList.add("active");
}

/*Click btn to ocult banner an background*/
buttonAcceptCookies.addEventListener("click", () => {
  cookiesBanner.classList.remove("active");
  backgroundCookies.classList.remove("active");

  localStorage.setItem("cookies-accepted", true);
});

/*Responsive menu*/
let menuToggle = document.querySelector(".menu--toggle");
let menuToggleIcon = document.querySelector(".menu--toggle i");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    menuToggleIcon.setAttribute("class", "fa fa-times");
  } else {
    menuToggleIcon.setAttribute("class", "fa fa-bars");
  }
});

/*Gallery */

let tortas = document.getElementById("tortas");
let ponques = document.getElementById("ponques");
let galleryt = document.querySelector(".gallery");
let galleryp = document.querySelector(".gallery__ponques");

tortas.addEventListener("click", () => {
  galleryp.className = "hide";
  galleryt.className = "gallery";
  tortas.className = "active";
  ponques.className = "";
});
ponques.addEventListener("click", () => {
  galleryp.className = "gallery__ponques";
  galleryt.className = "hide";
  tortas.className = "";
  ponques.className = "active";
});
