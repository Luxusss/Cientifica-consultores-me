// Activar animaciones WOW
new WOW().init();

// Botón "volver arriba"
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('#back-to-top').fadeIn();
  } else {
    $('#back-to-top').fadeOut();
  }
});

$('#back-to-top').click(function () {
  $('#back-to-top').tooltip('hide');
  $('body,html').animate({ scrollTop: 0 }, 800);
  return false;
});

$('#back-to-top').tooltip('hide');
