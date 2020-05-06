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