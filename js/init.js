(function($){
  $(function(){

    $('.button-collapse').sideNav();

    var animationIcon = 'animated flip';
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $('.icon').on('mouseover', function (){
      $(this).addClass(animationIcon).one(animationEnd, function(){
        $(this).removeClass(animationIcon);
      });
    });
    var animationName = 'animated wobble';
    $('.phone').on('mouseover', function (){
      $(this).addClass(animationName).one(animationEnd, function(){
        $(this).removeClass(animationName);
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
