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

function prevStepItem() {
    let prevIndex = $(".step--item").filter(".step--item-active").prev().index();
    if (prevIndex == -1) { return 0 }

    $(".step--item").filter(".step--item-active").removeClass("step--item-active");
    $($('.step--item')[prevIndex]).addClass("step--item-active");

    $('.step--list').animate({ scrollLeft: prevIndex * 380 + 35 }, 600);
}
function nextStepItem() {
    let nextIndex = $(".step--item").filter(".step--item-active").next().index();
    if (nextIndex == 12) { return 0 }

    $(".step--item").filter(".step--item-active").removeClass("step--item-active");
    $($('.step--item')[nextIndex]).addClass("step--item-active");

    $('.step--list').animate({ scrollLeft: nextIndex * 380 + 35 * nextIndex }, 600);
}


$(document).on('load', () => {
    initSwiper()
})