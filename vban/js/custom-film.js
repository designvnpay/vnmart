$(document).ready(function() {
    $('[data-popover="popover"]').popover({
        template: '<div class="popover" role="tooltip" style="width: 247px;"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"><div class="data-content"></div></div></div>',
        content: "<ul class='popover-content'><li><div class='single-film__age single-film__age--13'>13+</div> Dành cho độ tuổi 13 trở lên</li><li><div class='single-film__age single-film__age--16'>16+</div> Dành cho độ tuổi 16 trở lên</li><li><div class='single-film__age single-film__age--18'>18+</div> Dành cho độ tuổi 18 trở lên</li></ul>",
        container: 'body'
    });
    if ($(window).width() > 1024) {
        $('.tab-content--1').css('min-height', $('.section-body-middle ').height());
    }
    var swiper6 = new Swiper('.film-date-swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        preventClicks: false,
        preventClicksPropagation: false,
        observer: true,
        observeParents: true,
        nextButton: '.swiper-next-film-date',
        prevButton: '.swiper-prev-film-date',
        slidesPerView: 'auto'
    });
    $('.navbar-cinema li>label').click(function() {
        $('.navbar-cinema li>label>input[type="radio"]').closest('li').removeClass('active');
        $('.navbar-cinema li>label>input[type="radio"]:checked').closest('li').addClass('active');
        if ($('.navbar-cinema li>label>input[type="radio"]:checked').val() == 'Galaxy') {
            $('.cinema__list li a').text('Galaxy Mipec Long Biên');
        }
        if ($('.navbar-cinema li>label>input[type="radio"]:checked').val() == 'bhd') {
            $('.cinema__list li a').text('BHD Cimeplex Hà Nội');
        }
        if ($('.navbar-cinema li>label>input[type="radio"]:checked').val() == 'mega') {
            $('.cinema__list li a').text('Mega Cimeplex Hà Nội');
        }
        if ($('.navbar-cinema li>label>input[type="radio"]:checked').val() == 'cinestar') {
            $('.cinema__list li a').text('Cinestar Cimeplex Hà Nội');
        }
    });
    $('.seat--double').addClass('seatCharts-row--double');
    $.ripple(".cinema-text", {
        debug: false, // Turn Ripple.js logging on/off
        on: 'mousedown', // The event to trigger a ripple effect

        opacity: 0.1, // The opacity of the ripple
        color: "auto", // Set the background color. If set to "auto", it will use the text color
        multi: false, // Allow multiple ripples per element

        duration: 0.4, // The duration of the ripple

        // Filter function for modifying the speed of the ripple
        rate: function(pxPerSecond) {
            return pxPerSecond;
        },

        easing: 'linear' // The CSS3 easing function of the ripple
    });
    $('.select-film-location').select2({
        width: '100%',
        templateResult: formatFilmLocation2,
        templateSelection: formatFilmLocation
    });
    $(".select-film-location").on('select2:open', function() {
        $('.select2-results__options').css('max-height', '500px')
    });
    $('.tab-content--2').css('height', $('.tab-content--1').outerHeight());
    $('#targetTab2').on('click', function() {
        $('.tab-content--2').css('height', 'auto');
        $('.tab-content--2').addClass('tab-content--translate-right');
        $('.tab-content--1').addClass('tab-content--translate-animation');
    });
    $('.film-back__button').on('click', function() {
        $('.tab-content--2').css('height', $('.tab-content--1').outerHeight() * 1.1);
        $('.tab-content--2').removeClass('tab-content--translate-right');
        $('.tab-content--1').removeClass('tab-content--translate-animation');
    });
    $('.modal--film').on('show.bs.modal', function(e) {
        $('.ripple').remove();
    });
    $('.modal--trailer').on('show.bs.modal', function(e) {
        $('html').css('overflow', 'hidden');
    });
    $('.modal--trailer').on('hide.bs.modal', function(e) {
        $('html').css('overflow', 'auto');
    });
    if ($('#modalFilm3').hasClass('modal')) {
        var youtubeFunc = '';
        var outerDiv = $("modalFilm3");
        var youtubeIframe = $("#modalFilm3 iframe")[0].contentWindow;
        $('#modalFilm3').on('hidden.bs.modal', function(e) {
            youtubeFunc = 'pauseVideo';
            youtubeIframe.postMessage('{"event":"command","func":"' + youtubeFunc + '","args":""}', '*');
        });
        $('#modalFilm3').on('show.bs.modal', function(e) {
            youtubeFunc = 'playVideo';
            youtubeIframe.postMessage('{"event":"command","func":"' + youtubeFunc + '","args":""}', '*');
        });
    }
    if ($(window).width() < 769) {
        $(".select-film-location").on('select2:closing', selectClosing);
        $(".select-film-location").on('select2:open', function() {
            selectOpen('Chọn rạp chiếu');
        });
        $(".select-film-location").on('change', function() {
            closeSelect3();
        });
        $(".select-film-location").on('select2:open', function() {
            $('.select2-container').addClass('select2-container--filmloc');
        });
        $(".select-film-location").select2({
            width: '100%',
            placeholder: "Chọn rạp chiếu",
            closeOnSelect: false,
            templateResult: formatFilmLocation2,
            templateSelection: formatFilmLocation

        });
        $('.modal--film').on('shown.bs.modal', function(e) {
            BNS.on();
            BNS.on();
        });
        $('.modal--film').on('hide.bs.modal', function(e) {
            BNS.off();
            $('body').css('position', 'relative')
        });
        $('.modal--film').removeClass('fade');
    }
});

function closeSelect3() {
    setTimeout(function() {
        $('.select2-search__field').blur();
    }, 1);
    setTimeout(function() {
        $(".select-city").select2('close');
        $(".select-county").select2('close');
        $(".select-pay-bill").select2('close');
        $(".select--custom-1l").select2('close');
        $(".select--custom-1r").select2('close');
        $(".select-fly-number").select2('close');
        $(".select-fly").select2('close');
        $(".select-fly-single").select2('close');
        $(".select-film-location").select2('close');
        $('.select2-container').removeClass('select2-container--filmloc');
    }, 500);
    BNS.off();
    setTimeout(function() {
        $('.select2-dropdown').removeClass('top0');
    }, 100);
}

function formatFilmLocation(filmLocation) {
    if (!filmLocation.id) {
        return filmLocation.text;
    }
    var text1 = "BHD Phạm Ngọc Thạch";
    var text11 = "01B Phạm Ngọc Thạch, Đống Đa, Hà Nội";
    var text2 = "BHD Gia Lâm";
    var text22 = "02B Phạm Ngọc Thạch, Đống Đa, Hà Nội";
    var text3 = "BHD Hoàng Hoa Thám";
    var text33 = "03B Phạm Ngọc Thạch, Đống Đa, Hà Nội";
    var text4 = "BHD Hà Đông";
    var text44 = "04B Phạm Ngọc Thạch, Đống Đa, Hà Nội";
    var text5 = "BHD Long Biên";
    var text55 = "05B Phạm Ngọc Thạch, Đống Đa, Hà Nội";
    if (filmLocation.element.value.toString() == '1') {
        var $filmLocation = $(
            '<span class="form-film__maintext">' + text1 + '</span>' + '<span class="form-film__subtext">' + text11 + '</span>'
        );
    }
    if (filmLocation.element.value.toString() == '2') {
        var $filmLocation = $(
            '<span class="form-film__maintext">' + text2 + '</span>' + '<span class="form-film__subtext">' + text22 + '</span>'
        );
    }
    if (filmLocation.element.value.toString() == '3') {
        var $filmLocation = $(
            '<span class="form-film__maintext">' + text3 + '</span>' + '<span class="form-film__subtext">' + text33 + '</span>'
        );
    }
    if (filmLocation.element.value.toString() == '4') {
        var $filmLocation = $(
            '<span class="form-film__maintext">' + text4 + '</span>' + '<span class="form-film__subtext">' + text44 + '</span>'
        );
    }
    if (filmLocation.element.value.toString() == '5') {
        var $filmLocation = $(
            '<span class="form-film__maintext">' + text5 + '</span>' + '<span class="form-film__subtext">' + text55 + '</span>'
        );
    }
    return $filmLocation;
};

function formatFilmLocation2(filmLocation) {
    if (!filmLocation.id) {
        return filmLocation.text;
    }
    var text1 = "BHD Phạm Ngọc Thạch";
    var text11 = "01B Phạm Ngọc Thạch, Đống Đa, Hà Nội";
    var text2 = "BHD Gia Lâm";
    var text22 = "02B Phạm Ngọc Thạch, Đống Đa, Hà Nội";
    var text3 = "BHD Hoàng Hoa Thám";
    var text33 = "03B Phạm Ngọc Thạch, Đống Đa, Hà Nội";
    var text4 = "BHD Hà Đông";
    var text44 = "04B Phạm Ngọc Thạch, Đống Đa, Hà Nội";
    var text5 = "BHD Long Biên";
    var text55 = "05B Phạm Ngọc Thạch, Đống Đa, Hà Nội";
    if (filmLocation.element.value.toString() == '1') {
        var $filmLocation = $(
            '<div class="form-film__text"><span class="form-film__maintext">' + text1 + '</span>' + '<span class="form-film__subtext">' + text11 + '</span></div>'
        );
    }
    if (filmLocation.element.value.toString() == '2') {
        var $filmLocation = $(
            '<div class="form-film__text"><span class="form-film__maintext">' + text2 + '</span>' + '<span class="form-film__subtext">' + text22 + '</span></div>'
        );
    }
    if (filmLocation.element.value.toString() == '3') {
        var $filmLocation = $(
            '<div class="form-film__text"><span class="form-film__maintext">' + text3 + '</span>' + '<span class="form-film__subtext">' + text33 + '</span></div>'
        );
    }
    if (filmLocation.element.value.toString() == '4') {
        var $filmLocation = $(
            '<div class="form-film__text"><span class="form-film__maintext">' + text4 + '</span>' + '<span class="form-film__subtext">' + text44 + '</span></div>'
        );
    }
    if (filmLocation.element.value.toString() == '5') {
        var $filmLocation = $(
            '<div class="form-film__text"><span class="form-film__maintext">' + text5 + '</span>' + '<span class="form-film__subtext">' + text55 + '</span></div>'
        );
    }
    return $filmLocation;
};
function isTouchDevice(){
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}