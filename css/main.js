const menuBtn = document.querySelector(".bar");
const showMenu = document.querySelector(".nav__menu-mobile");
// const outSideMenuMobile = document.querySelector(".outside-menu");
const pageslideBg = document.querySelector(".pageslideBg");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  showMenu.classList.toggle("active");
  pageslideBg.classList.toggle("overlay");
});
pageslideBg.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  showMenu.classList.toggle("active");
  pageslideBg.classList.toggle("overlay");
});

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 100) {
//     $("#main-header").addClass("fixed");
//   } else {
//     $("#main-header").removeClass("fixed");
//   }
// });

//  fixed js
// window.onscroll = function () {
//   myFunction();
// };

// var header = document.getElementById("main-header");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("fixed");
//   } else {
//     header.classList.remove("fixed");
//   }
// }

var accordions = document.getElementsByClassName("menu-drop");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    var content = this.childNodes[5];
    this.childNodes[3].classList.toggle("down");
    if (content) {
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
  };
}
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  nav: false,
  navigation: false,
  autoplayTimeout: 2000,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
