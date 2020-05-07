$(document).ready(function (){
  $.fn.menumaker = function(options) {      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        cssmenu.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }
            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
	
	$('body').on('click', '.toggle-submenu', function (e) {
        $(this).toggleClass('open');
        $(this).parent().find(".submenu").slideToggle(300)
        
        
    });
	

	$( 'body' ).append( "<div class='back-drop'></div>" );
	$( 'body' ).append( "<div class='back-dropdown'></div>" );
	$( 'body' ).append( "<div class='back-drop-right'></div>" );
	$( 'body' ).append( "<div class='back-drop-hover'></div>" );
	
	$('#menu-navi ul>li.nav1').hover(
       function(){ 		   
		   $('body').addClass('hover'); 
		   $('.back-drop-hover').addClass('open'); 
	   
	   },
       function(){ 
		   $('body').removeClass('hover'); 
		   $('.back-drop-hover').removeClass('open'); 
	   }
);
	$('#menu-navi ul>li.nav2').hover(
       function(){ 		   
		   $('body').addClass('hover'); 
		   $('.back-drop-hover').addClass('open'); 
	   
	   },
       function(){ 
		   $('body').removeClass('hover'); 
		   $('.back-drop-hover').removeClass('open'); 
	   }
);
	$('#menu-navi ul>li.nav3').hover(
       function(){ 		   
		   $('body').addClass('hover'); 
		   $('.back-drop-hover').addClass('open'); 
	   
	   },
       function(){ 
		   $('body').removeClass('hover'); 
		   $('.back-drop-hover').removeClass('open'); 
	   }
);

	$('body').on('click', '.btn-toggle-nav', function (e) {
        $(this).toggleClass('open');
        $(".cont-toggle-nav").toggleClass('open');
		$('body').toggleClass('ovl-hidden');
		$('.back-drop').toggleClass('open');
    });
	$('body').on('click', '.btn-nav-right', function (e) {
        $(this).toggleClass('open');
        $(".navbar-right").toggleClass('open');
		$('body').toggleClass('hidden2');
		$('.back-drop-right').toggleClass('open');
    });
	$('body').on('click', '.dropdown-toggle', function (e) {
        $(this).toggleClass('open');
		$('body').toggleClass('hidden-dropdown');
		$('.back-dropdown').toggleClass('open');
    });
	$('body').on('click', '.back-dropdown', function (e) {
        $(this).toggleClass('open');
		$('body').toggleClass('hidden-dropdown');
		
    });

    $('body').on('click', '.back-drop', function (e) {
        $(this).toggleClass('open');
        $(".cont-toggle-nav").toggleClass('open');
		$('body').toggleClass('ovl-hidden');
		
    });
	$('body').on('click', '.back-drop-right', function (e) {
        $(this).toggleClass('open');
        $(".navbar-right").toggleClass('open');
		$('body').toggleClass('hidden2');
		
    });
	$( 'body' ).addClass('view-grid-active');
	$('body').on('click', '.btn-view-gird', function (e) {
        
        $(".media").addClass('view-grid');
		$('body').addClass('view-grid-active');
        
        
    });
	$('body').on('click', '.btn-view-list', function (e) {
        
        $(".media").removeClass('view-grid');
		$('body').removeClass('view-grid-active');
        
        
    });
	$('body').on('click', '.btn-view', function (e) {
        
        $(".btn-view").removeClass('active');
		 $(this).addClass('active');
        
        
    });
	
	
});




