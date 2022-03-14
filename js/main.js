// Portfolio start
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
});
function swiperDataChanged() {
    let activeProjectName = $($('.swiper-slide')[swiper.activeIndex]).data('name');
    let activeProjectNumber = $($('.swiper-slide')[swiper.activeIndex]).data('number');
    $(".project--name").html(activeProjectName)
    $(".slider--number-active").html(activeProjectNumber)
}
swiper.on('transitionEnd', function () {
    swiperDataChanged();
});
// Portfolio end

// Map start
let map;
DG.then(function () {
    map = DG.map('map', {
        center: [43.253902793104, 76.94004666143438],
        zoom: 16
    });

    DG.marker([43.253902793104, 76.94004666143438]).addTo(map);
});
// Map end



$(document).on('load', () => {
    initSwiper()
})