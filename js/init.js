(function($){
  $(function(){

// nav button open and collapse
    $('.button-collapse').sideNav({
      menuWidth: 200, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks
    });

// scrolls to the correct section with nav click
    $(document).ready(function(){
      $('.scrollspy').scrollSpy();
    });

// parallax
    $(document).ready(function(){
      $('.parallax').parallax();
    });

// animations
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var animationIcon = 'animated flip';
    $('.icon').on('mouseover', function (){
      $(this).addClass(animationIcon).one(animationEnd, function(){
        $(this).removeClass(animationIcon);
      });
    });
    var animationResume = 'animated bounce';
    $('.resume').on('mouseover', function (){
      $(this).addClass(animationResume).one(animationEnd, function(){
        $(this).removeClass(animationResume);
      });
    });
    var animationPhone = 'animated wobble';
    $('.phone').on('mouseover', function (){
      $(this).addClass(animationPhone).one(animationEnd, function(){
        $(this).removeClass(animationPhone);
      });
    });
    var animationEmail = 'animated zoomOutRight';
    $('.email').on('mouseover', function (){
      $(this).addClass(animationEmail).one(animationEnd, function(){
        $(this).removeClass(animationEmail);
      });
    });
    var animationContact = 'animated pulse';
    $('.contact').on('mouseover', function (){
      $(this).addClass(animationContact).one(animationEnd, function(){
        $(this).removeClass(animationContact);
      });
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
