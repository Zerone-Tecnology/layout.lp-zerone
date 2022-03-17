
AOS.init();
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


// section Steps-Этапы 
let StepObject = {
    mainValues: {
        margin: ($("section.banner").width() - $(".container").width()) / 2,
        cardWidth: 380,
    },
    stepItems: [],
    setStepItems: () => {
        let margin = StepObject.mainValues.margin
        $(".step--item").each(index => {
            if ($(".step--item").hasClass('step--item-liner')) {

            }
            if (index == 0) {
                StepObject.stepItems[index] = { leftOffset: margin }
            } else {
                if (index >= 11) { false; }
                StepObject.stepItems[index] = { leftOffset: margin + index * (StepObject.mainValues.cardWidth + 35) }
            }
        });
    },
    getStepItems: () => { return StepObject.stepItems },
    drawStepItems: () => {
        $(".step--item").each(index => {
            if (!$($(".step--item")[index]).hasClass('step--item-liner')) {
                if (index >= 12) { false; }
                $($(".step--item")[index]).css('left', StepObject.stepItems[index].leftOffset + 'px')
            }
        });
        $($(".step--item-liner")).css('left', StepObject.mainValues.margin + 'px')

    },
    nextStepItem: () => {
        let nextIndex = $(".step--item").filter(".step--item-active").next().index();
        if (nextIndex == 12) { return 0 }

        $(".step--item").filter(".step--item-active").removeClass("step--item-active");
        $($('.step--item')[nextIndex]).addClass("step--item-active");

        $('.step--list').animate({ scrollLeft: (380 + 35) * nextIndex }, 600);
    },
    prevStepItem: () => {
        let prevIndex = $(".step--item").filter(".step--item-active").prev().index();
        if (prevIndex == -1) { return 0 }

        $(".step--item").filter(".step--item-active").removeClass("step--item-active");
        $($('.step--item')[prevIndex]).addClass("step--item-active");

        $('.step--list').animate({ scrollLeft: (380 + 35) * prevIndex }, 600);
    }
}

$(document).ready(() => {
    StepObject.setStepItems()
    StepObject.drawStepItems()

    $('.controller--btn').on('click', function () {
        $("header").toggleClass("open");

        if ($("header").hasClass('open')) {
            disableScroll()
        } else {
            enableScroll()
        }
    });
})
function disableScroll() {
    window.onscroll = function () { return 0 };
}

function enableScroll() {
    window.onscroll = function () { };
}