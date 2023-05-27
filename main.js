// Closes navbar if one of the elements are clicked
$(document).ready(function () {

    $(document).click(function (event) {
  
          var target = $(event.target);
          var _mobileMenuOpen = $(".navbar-collapse").hasClass("show");
  
          if (_mobileMenuOpen === true && !target.hasClass("navbar-toggler")) {
              $("button.navbar-toggler").click();
          }
  
      });
      
  });
  
  // Waits until page is fully loaded to call AOS
  window.addEventListener('load', () => {
      AOS.init();
  });

  $('.expandHome').mouseover(function() {
    $('.sub-home').css({
          'display': 'block'
      }); 
  });
  $('.subnavbtn').mouseover(function() {
    $('.sub-home').css({
          'display': 'none'
      }); 
  });
  
  $('#trapezoid').mouseleave(function() {
    $('#trapezoid').css({
          'margin-top': '-53px'
      }); 
      $('.sub-home').css({
          'display': 'none'
      }); 
  }).mouseenter(function() {
    $('#trapezoid').css({
          'margin-top': '0px'
      }); 
  });
  
  /*
  
  // Function to "hide" navbar when scrolling down (FIXME)
  
  var prevScrollpos = window.pageYOffset;
  
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
  
    if (prevScrollpos < currentScrollPos && currentScrollPos > 100) {
      document.getElementById("navbar-hide").style.top = "-70px";
      }
    else {
      document.getElementById("navbar-hide").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
  }
  
  */