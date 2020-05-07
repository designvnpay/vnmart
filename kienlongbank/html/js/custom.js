new WOW().init();

var vid = document.getElementById("vidHD");



function playVid() {

   vid.play();

}

function pauseVid() {

   vid.pause();

}

$(document).ready(function () {

   var swiper2 = new Swiper('.swiper-2', {

      navigation: {

         nextEl: '.swiper-next',

         prevEl: '.swiper-prev',

      },

      autoplay: {

         delay: 3000,

         disableOnInteraction: false

      },

      loop: true,

      autoHeight: true,

      on: {

         transitionStart: function () {

            $('#intro .wow').removeClass('animated');

            $(window).trigger('resize')

         },

         transitionEnd: function () {

            $('.swiper-slide-active.wow-slide .wow').addClass('animated');

            $(window).trigger('resize')

         },

      }

   });

   var swiper2 = new Swiper('.swiper-3', {

      navigation: {

         nextEl: '.swiper-next',

         prevEl: '.swiper-prev',

      },

      slidesPerView: 3,

      spaceBetween: 30,

      autoplay: {

         delay: 3000,

         disableOnInteraction: false

      },

      breakpoints: {

         480: {

            slidesPerView: 1,

            spaceBetween: 10

         },

         // when window width is <= 480px

         768: {

            slidesPerView: 2,

            spaceBetween: 15

         }

      }

   });

   $('#myModal2').on('shown.bs.modal', function (e) {

      playVid()

   });

   $('#myModal2').on('hidden.bs.modal', function (e) {

      pauseVid()

   });

   $('.table-wraper-size').scroll(function (e) {

      var _this = this;

      if (_this.scrollWidth === (_this.scrollLeft + _this.clientWidth)) {

         $(_this).parent('.table-wraper-inner').addClass('right-none');

      }

      else {

         $(_this).parent('.table-wraper-inner').removeClass('right-none');

      };



      if (_this.scrollLeft === 0) {

         $(_this).parent('.table-wraper-inner').addClass('left-none');

      }

      else {

         $(_this).parent('.table-wraper-inner').removeClass('left-none');

      };

   }).scroll();

   if ($(window).width() < 992) {

      $('.list-icons-text .table').on('click', function () {

         $('html, body').animate({

            scrollTop: $(".feature-phone-wrap").offset().top - 80

         }, 1000);

      });

   }

});

var yourNavigation = $(".bottompage");
    stickyDiv = "fixbottom";
    yourHeader = $('.menu').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > yourHeader ) {
    yourNavigation.addClass(stickyDiv);
  } else {
    yourNavigation.removeClass(stickyDiv);
  }
});

$('.bottompage').on('click',".controler",function(e){
      e.preventDefault();
      var el = $(this);
      el.toggleClass('active');
      $('.bottompage').toggleClass('active');
      el.siblings('.container').slideToggle();
    });