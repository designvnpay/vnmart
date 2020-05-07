var mywindow = $(window);
var currentPos = 0;
var a = 0;
var up = false;
var rangeOnchage = 0;
var targetPos;
var targetPosb = 0;
var close = 0;
var b = 0;
mywindow.scroll(function() {
    if ($(".changefont").filter(':animated').length > 0) {
        return false;
    }
    targetPos = a + 50;
    currentPos = mywindow.scrollTop();
    if (currentPos > targetPos && !up) {
        $('.changefont').stop().fadeOut('fast');
        //$('.back').stop().slideToggle('fast');
        up = !up;
        console.log(up);
    } else if (currentPos < targetPosb && up) {
        if (close == 0) {
            $('.changefont').stop().fadeIn('fast');
        }
        // $('.back').stop().slideToggle('fast');
        up = !up;
    }
    if (currentPos < b) {
        a = currentPos;
    } else if (currentPos > b) {
        targetPosb = currentPos - 50;
    }
    b = currentPos;

});
$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoHeight: true, //enable auto height
    });
    var v = 14;
    $('body').css('font-size', v + 'px')
    $('#range').on('change', function() {
        var v = $(this).val();
        $('body').css('font-size', v + 'px')
        $('.font-index').html(v);
        var height = $('.swiper-slide-active').height();
        $('.swiper-wrapper').css('height', height + 40);
    });
    $(".bottom").hide();
    $('.changefont').click(function() {
        if ($(".changefont").filter(':animated').length > 0) {
            return false;
        } else {
            $(".bottom").stop().slideToggle("fast");
            $(".changefont").slideToggle("fast");
            close = 1;
            $('body').css('padding-bottom', 60 + 'px');
        }

    });
    $('.btn-close').click(function() {
        if ($(".bottom").filter(':animated').length > 0) {
            return false;
        } else {
            $(".bottom").stop().slideToggle("fast");
            $(".changefont").stop().slideToggle("fast");
            close = 0;
            $('body').css('padding-bottom', 0 + 'px');
        }

    });
});
