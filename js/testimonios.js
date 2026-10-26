$(document).ready(function() {
    $("#testimonial-clients").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        slideSpeed: 500,
        paginationSpeed: 500,
        autoPlay: 4000,
        stopOnHover: true,
        pagination: true,
        navigation: false
    });
});