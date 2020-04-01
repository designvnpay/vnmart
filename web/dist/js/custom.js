$(document).ready(function () {
   $('.steps').each(function () {
      var stepItem = $(this).find('.steps__item');
      var stepItemLength = stepItem.length;
      var stepItemActive = $(this).find('.steps__item--active');
      var stepItemActiveLength = stepItemActive.length;
      $(stepItemActive).eq(stepItemActiveLength - 1).addClass('steps__item--active--last');
      var itemSpace = (100 / (stepItemLength - 1)) * (stepItemActiveLength - 1);
      console.log($(stepItemActive).eq(stepItemActiveLength));
      $(this).find('.steps__progress').css('width', itemSpace + '%')
   });
   if ($(window).width() > 992) {
      $('.sticky-sidebar').stickySidebar('updateSticky');
   }

   $('.accordion-item.active .accordion-content').css('transition', 'none');
   $('[data-accordion]').on('accordion.open', function () {
      setTimeout(function () {
         if ($(window).width() > 992) {
            $('.sticky-sidebar').stickySidebar('updateSticky');
         }
      }, 300);
   });
   $('[data-accordion]').on('accordion.close', function () {
      setTimeout(function () {
         if ($(window).width() > 992) {
            $('.sticky-sidebar').stickySidebar('updateSticky');
         }
      }, 300);
   });
   var swiperGuideCon = new Swiper('.swiper-guide-content', {
      pagination: {
         el: $('.guide-detail__content').find('.swiper-pagination-number'),
         type: 'bullets',
         clickable: true,
      },
      speed: 1,
      allowTouchMove: false
   })
   var swiperGuide = new Swiper('.swiper-guide', {
      pagination: {
         el: $('.guide-detail__content').find('.swiper-pagination-number'),
         type: 'bullets',
         clickable: true,
         renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
         }
      }
   }).on('slideChange', function () {
      swiperGuideCon.slideTo(swiperGuide.realIndex);
      $('.swiper-pagination-number .swiper-pagination-bullet').removeClass('progress');
      for (i = 0; i < swiperGuide.realIndex; i++) {
         $('.swiper-pagination-number .swiper-pagination-bullet').eq(i).addClass('progress')
      };
      var stepDis = swiperGuide.slides.length - (swiperGuide.slides.length - swiperGuide.realIndex);
      var stepDisPercen = (100 / ((swiperGuide.slides.length - 1) / stepDis))
      $('.swiper-pagination-number .steps__progress').css('width', stepDisPercen + '%');
      if (swiperGuide.realIndex + 1 == swiperGuide.slides.length) {
         $('#guide-next').closest('div').css('display', 'none');
         $('#guide-prev').closest('div').css('display', '');
      }
      else {
         $('#guide-next').closest('div').css('display', '');
         $('#guide-prev').closest('div').css('display', 'none');
      }
   });;

   $('.swiper-pagination-number').append('<div class="steps__progress"></div>');
   $('#guide-next').on('click', function () {
      swiperGuide.slideNext();
   });
   $('#guide-prev').on('click', function () {
      swiperGuide.slideTo(0);
   });
});