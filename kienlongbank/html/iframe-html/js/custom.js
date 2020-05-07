$(document).ready(function () {
   $('img:not(.non-click)').on('click', function () {
      $('.clickable').css({
         'opacity': 0.5,
         'background-color': '#1a8fce'
      });
      $('a').css({
         'opacity': 0.5,
         'background-color': '#1a8fce'
      });
      setTimeout(function () {
         $('.clickable').removeAttr('style');
         $('a').removeAttr('style');
      }, 300);
   });
});

$(window).on('load', function() {
    $(".loader").fadeOut("slow", function() {});
});