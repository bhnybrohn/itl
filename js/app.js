window.onscroll = function () { myFunction() };

let header = document.querySelector("#nav-fix");
let navbar = document.querySelector(".navbar")
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

