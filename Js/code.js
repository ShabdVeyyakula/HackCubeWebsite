// Hackathons Hosted Animation

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  $('.odometer').each(function() {
    if ($(this).isInViewport()) {
        
      setTimeout(function(){
        setTimeout(function () {
            hackathonsHosted.innerHTML = 22;
          }, 200);
      }, 0);
    } else {
    }
  });
});

// Hackers registered animation

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  $('.odometer').each(function() {
    if ($(this).isInViewport()) {
        
      setTimeout(function(){
        setTimeout(function () {
            hackersRegistered.innerHTML = 120;
          }, 200);
      }, 0);
    } else {
    }
  });
});

//Mentors registered animation

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  $('.odometer').each(function() {
    if ($(this).isInViewport()) {
        
      setTimeout(function(){
        setTimeout(function () {
          mentorsRegistered.innerHTML = 20;
          }, 200);
      }, 0);
    } else {
    }
  });
});

//AOS INIT
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)


});

//