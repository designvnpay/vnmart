var zoom = 18;

var latitude = 21.0296262;

var longitude = 105.7636005;



$(document).ready(function() {

    

     $('[data-placeholder]').focus(function() {

        var input = $(this);

        if (input.val() == input.attr('data-placeholder')) {

            input.val('');

            // input.removeClass('placeholder');

        }

    }).blur(function() {

        var input = $(this);

        if (input.val() == '' || input.val() == input.attr('data-placeholder')) {

            input.addClass('placeholder');

            input.val(input.attr('data-placeholder'));

        }

    }).blur();



    $('[data-placeholder]').parents('form').submit(function() {

        $(this).find('[data-placeholder]').each(function() {

            var input = $(this);

            if (input.val() == input.attr('data-placeholder')) {

                input.val('');

            }

        })

    });

    

    

    

setupMap();

   function setupMap(){

    

        

        var options = {

          

            center: new google.maps.LatLng(latitude, longitude),

            zoom: zoom,

            disableDefaultUI: true,

            scrollwheel: false,

             mapTypeId: google.maps.MapTypeId.roadmap

        };

        var div = document.getElementById('map');









        var map = new google.maps.Map(div, options);



     

        var image = 'images/mapmarker.png';

        var marker = new google.maps.Marker({

            position: new google.maps.LatLng(latitude, longitude),

            map: map,

            icon: image

        });

       

    

    }

    //Contact form setup



    checkContactForm();

    function checkContactForm() {

        if ($(".contact-form").length > 0) {





            //  triggers contact form validation

            var formStatus = $(".contact-form").validate();

            //   ===================================================== 

            //sending contact form

            $(".contact-form").submit(function(e) {

                e.preventDefault();



                if (formStatus.errorList.length === 0)

                {

                    $(".contact-form .submit").fadeOut(function() {

                        $('#loading').css('visibility', 'visible');

                        $.post('submit.php', $(".contact-form").serialize(),

                                function(data) {

                                    $(".contact-form input,.contact-form textarea").not('.submit').val('');



                                    $('.message-box').html(data);





                                    $('#loading').css('visibility', 'hidden');

                                    $(".contact-form .submit").removeClass('disabled').css('display', 'block');

                                }



                        );

                    });





                }



            });

        }

    }

    function clearAnimations() {



      

        $('.animated.bounceInUp').each(function() {

            $('.animated.bounceInUp').removeClass('animated').removeClass('bounceInUp');

        });



        $('.animated.bounceOutUp').each(function() {

            $('.animated.bounceOutUp').removeClass('animated').removeClass('bounceOutUp');

        });





        $('.animated.bounceInLeft').each(function() {

            $('.animated.bounceInLeft').removeClass('animated').removeClass('bounceInLeft');

        });





    }

    

    

      $('.mobile-slider .slide-holder').carouFredSel({

                auto: {

                delay:3000

                },

          pagination	: {

              container:$(".mobile-slider .mb-pagination"),

              

              anchorBuilder:function(nr) {

    return '<a href="#'+nr+'"></a>'

}

                          

          }

            });

    

    

      $('.features-slider .slide-holder').carouFredSel({

                auto: {

                delay:3000

                },

          pagination	: {

              container:$(".features-slider  .mb-pagination"),

              

              anchorBuilder:function(nr) {

    return '<a href="#'+nr+'"></a>'

}

                          

          }

            });

      $('.brands-slider .slide-holder').carouFredSel({

                auto: {

                delay:4000

                }

          

            });

    

    

          $(".brands-slider-holder  .next-btn").click(function(event) {

            event.preventDefault();

            $('.brands-slider .slide-holder').trigger("next", 1);



        });





       $(".brands-slider-holder .prev-btn").click(function(event) {

            event.preventDefault();

            $('.brands-slider .slide-holder').trigger("prev", 1);



        });

    

    

     $('.recom-holder .recom-slider').carouFredSel({

       

                auto: false,

          pagination	: {

              container:$(".recom-holder .mb-pagination"),

              

              anchorBuilder:function(nr) {

    return '<a href="#'+nr+'"></a>'

}

                          

          }

            });

    

   /* $(window).resize(function(){

    $('.mobile-slider').css('left',$('.mobile-slider').parent().width()-100);

    })*/

 setupSliderStyle();

 

 function setupSliderStyle() {





        if ($('.flexslider').length > 0) {

            $('.flexslider').flexslider({

                controlNav:false,

                responsive:true,

                directionNav:true,

                prevText: "",

                nextText: "",

                slideshow: true,

                start: function(slider) {

                    $('.flexslider').find('.preloader').removeClass('loading');

                    cs = slider.find('.slide').eq(slider.currentSlide);







                    bl = cs.find('.flex-caption .back-layer');

                    flimg = cs.find('.flex-caption .front-layer .image');

                    fltxt = cs.find('.flex-caption .front-layer .texts-holder');

                    

             

                    bl.find('.anim').addClass('animated bounceInUp');









                    setTimeout(function() {



    



                 flimg.find('.anim').addClass('animated bounceInLeft');



                      









                    }, 500);



                    setTimeout(function() {





                        fltxt.find('.anim').addClass('animated bounceInUp');











                    }, 800);







                    

                },

                after: function(slider) {

                    $('.flexslider').find('.preloader').removeClass('loading');

                    cs = slider.find('.slide').eq(slider.currentSlide);







                    bl = cs.find('.flex-caption .back-layer');

                    flimg = cs.find('.flex-caption .front-layer .image');

                    fltxt = cs.find('.flex-caption .front-layer .texts-holder');



                    bl.find('.anim').addClass('animated bounceInUp');



                    setTimeout(function() {





                        flimg.find('.anim').addClass('animated bounceInLeft');









                    }, 500);



                    setTimeout(function() {





                        fltxt.find('.anim').addClass('animated bounceInUp');









                    }, 800);



                },

                before: function(slider) {

                    $('.flexslider').find('.preloader').addClass('loading');

                    cs = slider.find('.slide').eq(slider.currentSlide);

                    el = cs.find('.flex-caption div');

                    bl = cs.find('.flex-caption .back-layer');

                    fl = cs.find('.flex-caption .front-layer');

                    clearAnimations();

                    fl.find('.anim').addClass('animated bounceOutUp');



                    bl.find('.anim').addClass('animated bounceOutUp');







                }

            });



        }



    }



    $('.section-features-tab a').click(function(event){

        event.preventDefault();

        el=$(this);

        $('.section-features-tab a.active').removeClass('active');

        el.toggleClass('active');

        targetTab=$(el.attr('href'));

   targetTab.tab('show') ;

    });

    

    

$('.responsive-menu select').change(function() {

        var loc = ($(this).find('option:selected').val());

 window.location = loc;

    

    });







    $('.no-action').click(function(e) {

        e.preventDefault();



    });

   

    

    

    

//hashtag navigation address setup (deeplink)





    $('.nav-menu a').address($(this).attr('href'));



    $.address.change(function(event) {



        var pageID = event.value.split('/')[1];



        if (pageID != '' && pageID.indexOf('.') === -1) {



            var el = $(".nav-menu [href=#" + pageID + "]");



            $('.nav-menu .active').removeClass('active');

            el.parent().addClass('active');

            $('select.nav option').each(function() {



                var val = $(this).val();



                if (val === "#" + pageID) {

                    $('select.nav option:selected').removeAttr('selected');

                    $(this).attr('selected', 'selected');

                }



            });





            scrollToSection("#" + pageID);

        } else {

            if (pageID.indexOf('.') > -1) {

                window.location = pageID;

            }

        }

    });



    $('select.nav').change(function() {

        var loc = ($(this).find('option:selected').val());



        scrollToSection(loc);

    });



    function scrollToSection(destSection) {





        $('html, body').stop().animate({

            scrollTop: $(destSection).offset().top - 90

        }, 2000, 'easeInOutExpo');



    }



    $('.nav-menu a').bind('click', function(event) {





        event.preventDefault();

        var clickedMenu = $(this);

		

        $('.nav-menu .active').toggleClass('active');

        clickedMenu.parent().toggleClass('active');





        scrollToSection(clickedMenu.attr('href'));









    });



    

});





