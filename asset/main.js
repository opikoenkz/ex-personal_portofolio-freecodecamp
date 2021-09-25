$(document).ready(function () {
  $(window).scroll(function () {
    //sticky navbar on scroll script
    if ($(window).scrollTop()) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //scroll-up button show/hide script
    /*if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }else {
            $('.scroll-up-btn').removeClass("show");
        }*/
  });

  /*$('.navbar .navbar-menu .navbar-nav li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });*/
});

/*----- Navbar Hamburger -----*/
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".navbar-nav");
const menuItem = document.querySelectorAll(".nav-link");

// main toggle
menuBtn.addEventListener("click", () => {
  toggle();
});

// toggle on item click if open
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}
