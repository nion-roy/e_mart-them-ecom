// Header Sticky Script ======================= >>
window.addEventListener("scroll", function () {
   var headerSection = document.querySelector(".nav-wrap");
   headerSection.classList.toggle("sticky", window.scrollY > 0);
});

// Tooltip Script ======================= >>
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
   return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Mobile View Script ======================= >>
document.getElementById("menuBar").addEventListener("click", menuFunction);
document.getElementById("closeMenu").addEventListener("click", menuFunction);
document.getElementById("menu-overlay").addEventListener("click", menuFunction);
function menuFunction() {
   document.getElementById("openMenu").classList.toggle("active");
   document.getElementById("menu-overlay").classList.toggle("active");
}

// Message Script ======================= >>
document.getElementById("font-icon-message").addEventListener("click", messageFunction);
document.getElementById("close-btn").addEventListener("click", messageFunction);
function messageFunction() {
   document.getElementById("back-content-message").classList.toggle("active");
}

//Back To Top Menu Script ===================== //
$(document).ready(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 40) {
         $("#jumpUp").fadeIn();
      } else {
         $("#jumpUp").fadeOut();
      }
   });
   $("#jumpUp").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1000);
   });
});
