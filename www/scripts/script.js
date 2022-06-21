$(document).ready(function(){

  let isOpen = false;

  $('.js-header-btn').on('click', function(){
    if (isOpen) {
      $('.js-menu').slideUp();
      isOpen = false;
    } else {
      $('.js-menu').slideDown();
      isOpen = true;
    }
  });


  // FAQ
  $('.js-faq-btn').on('click', function(){

    $(this).next().slideToggle();
  });

});
