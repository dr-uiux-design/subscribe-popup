document.addEventListener("DOMContentLoaded", function () {
    //mobile resize for 100vh
    if (window.innerWidth < 993) {
        const documentHeight = () => {
            const doc = document.documentElement;
            doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
        };
        window.addEventListener("resize", documentHeight);
        documentHeight();
    }

    //mobile menu
    $(document).on("click", "[data-burger]", function () {
        $(".mobileMenu").show();
    });
    $(document).on("click", "[data-close]", function () {
        $(".mobileMenu").hide();
    });

    //header cart btn
    if (window.innerWidth > 992) {
        $(document).on("click", "[data-cart]", function (e) {
            e.preventDefault();
            $(".cartPopup").addClass("active");
            $(".cartPopup-overlay").fadeIn();
        });
        $(document).on("click", "[data-cart-close]", function () {
            $(".cartPopup-overlay").fadeOut();
            $(".cartPopup").removeClass("active");
        });
    }

    //plus, minus toggle
    /*$(document).on("click", ".numbers-plus", function () {
        const parent = this.closest(".numbers");
        let prevValue = parseInt($(parent).find(".numbers-value").val());
        $(parent)
            .find(".numbers-value")
            .val(prevValue + 1);
        return false;
    });
    $(document).on("click", ".numbers-minus", function () {
        const parent = this.closest(".numbers");
        let prevValue = parseInt($(parent).find(".numbers-value").val());
        if (prevValue > 1) {
            $(parent)
                .find(".numbers-value")
                .val(prevValue - 1);
        }
        return false;
    });*/

    //header scroll
    //if (window.innerWidth > 992) {
    $nav = $(".header-center");
    $window = $(window);
    $h = $nav.offset().top;

    const scrollFunc = () => {
        if ($window.scrollTop() > $h) {
            $nav.addClass("fixed");
        } else {
            $nav.removeClass("fixed");
        }
    };

    scrollFunc();
    $window.scroll(function () {
        scrollFunc();
    });
    //}

    //nice select
    document.querySelectorAll("select").forEach((item) => {
        if (item.closest(".cart-item__block")) {
            NiceSelect.bind(item, { searchable: true });
        } else {
            NiceSelect.bind(item);
        }
    });

    //sliders
    if ($(".main-slider").length) {
        const swiper = new Swiper(".main-slider", {
            slidesPerView: 1,
            loop: true,
            autoHeight: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    }
    // if ($(".video-slider").length) {
    //     const swiper = new Swiper(".video-slider", {
    //         slidesPerView: 1,
    //         loop: true,
    //         autoHeight: true,
    //         pagination: {
    //             el: ".swiper-pagination",
    //             type: "progressbar",
    //         },
    //         autoplay: {
    //             delay: 3000,
    //             disableOnInteraction: false,
    //         },
    //     });
    // }
    if ($(".pageCard-slider").length) {
        const mobileSwiper = new Swiper(".pageCard-slider", {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
        });
        const swiper = new Swiper(".modal-slider", {
            loop: true,
            navigation: {
                nextEl: ".modal-next",
                prevEl: ".modal-prev",
            },
        });
    }

    //toggle filters
    if ($(".catalog-filtersBtn").length) {
        $(document).on("click", ".catalog-filtersBtn", function (e) {
            e.preventDefault();
            $(".filterPopup").addClass("active");
            $(".filterPopup-overlay").fadeIn();
        });
        $(document).on("click", "[data-filter-close]", function () {
            $(".filterPopup-overlay").fadeOut();
            $(".filterPopup").removeClass("active");
        });
    }
    $(document).on("click", ".catalog-box__title", function () {
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });

    //card counter
    $(document).on("click", ".numbers-plus", function () {
        const parent = this.closest(".numbers");
        let prevValue = parseInt($(parent).find(".numbers-value").val());
        $(parent)
            .find(".numbers-value")
            .val(prevValue + 1);
        return false;
    });
    $(document).on("click", ".numbers-minus", function () {
        const parent = this.closest(".numbers");
        let prevValue = parseInt($(parent).find(".numbers-value").val());
        if (prevValue > 1) {
            $(parent)
                .find(".numbers-value")
                .val(prevValue - 1);
        }
        return false;
    });
});
