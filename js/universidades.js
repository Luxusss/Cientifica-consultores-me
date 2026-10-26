$(document).ready(function () {
  $('#universidades-placeholder').load('universidades.html', function () {
    $('#universidades-carousel').owlCarousel({
      navigation: false,
      slideSpeed: 100,
      pagination: true,
      autoPlay: true,
      stopOnHover: false,

      // Desktop
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3],

      // Tablet / móvil
      itemsTablet: [768, 2],   // hasta 768px -> 2 items
      itemsMobile: [479, 2]    // hasta 479px -> 2 items
      // si quieres 1 en muy chiquito: [479, 1]
    });
  });
});
