const nav = document.getElementById("main");
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.classList.add("fixed-nav");
    document.body.paddingTop = nav.offsetHeight + "px";
  } else {
    document.body.classList.remove("fixed-nav");
    document.body.paddingTop = 0;
  }
}

document.addEventListener("scroll", fixNav);
