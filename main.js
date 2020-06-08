

$('.header-right > a').click(
  function () {
    $('.hamburger-menu').addClass('active');
    // $('.hamburger-menu').fadeIn(100);
  }
);

$('.close').click(
  function () {
    $('.hamburger-menu').removeClass('active');
    // $('.hamburger-menu').fadeOut(100);
  }
);
