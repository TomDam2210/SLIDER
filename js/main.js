$(document).ready(function() {
    var slideContainer = $('.top-row');
    var slideContainer2 = $('.bottom-row')
    var slideWidth = $('.image5').outerWidth(true) + parseInt($('.image5').css('margin-right'));
    var slideWidth2 = $('.image9').outerWidth(true) + parseInt($('.image9').css('margin-right'));
  
    function slideRight() {
      slideContainer.animate({scrollLeft: '+=' + slideWidth}, 500, function() {
        $('.top-row div:first-child').appendTo(slideContainer);
        slideContainer.scrollLeft(0);
      });
      slideContainer2.animate({scrollLeft: '+=' + slideWidth2}, 500, function() {
        $('.bottom-row div:first-child').appendTo(slideContainer2);
        slideContainer2.scrollLeft(0);
      });
    }
  
    function slideLeft() {
      $('.top-row div:last-child').prependTo(slideContainer);
      slideContainer.scrollLeft(slideWidth);
      slideContainer.animate({scrollLeft: '-=' + slideWidth}, 500);
      $('.bottom-row div:last-child').prependTo(slideContainer2);
      slideContainer2.scrollLeft(slideWidth2);
      slideContainer2.animate({scrollLeft: '-=' + slideWidth2}, 500);
    }
  
    $('.arrow-right').click(function() {
      slideLeft();
    });
  
    $('.arrow-left').click(function() {
      slideRight();
    });
  });
  