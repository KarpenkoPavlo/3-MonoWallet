/*header add background*/
let headerBackground = document.querySelector(".header");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        headerBackground.style.backgroundColor = "rgb(5%, 5%, 5%, 0.7)";
    } else {
        headerBackground.style.backgroundColor = "rgb(1%, 1%, 1%, 0.0)";
    }
  };
