(function (document, window, $) {

	'use strict';

	// Load Foundation
	$(document).foundation();

	// Touch events for main menu
	$( '.nav-primary li:has(ul)' ).doubleTapToGo();
    
    if (Foundation.MediaQuery.is('small only')) {
      $('.modal-menu .search-form .search-field').attr('placeholder', 'Search');
    }
    
    $(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
      
      var placeholder_text;
      placeholder_text = ('small' === newSize) ? 'Search' : 'Search Articles';
      $('.modal-menu .search-form .search-field').attr('placeholder', placeholder_text);
      
    });
    
    $(window).load(function() {
    
        var $el = $('.slick-videos');
        $el.on('init', function() {
            $el.each(function(index) {
                
            });
        });

        $el.slick({
            dots: false,
            //centerMode: true,
            slidesToShow: 3,
            arrows: true,
            nextArrow: '<div class="arrow-right"><span>Next</span></div>',
            prevArrow: '<div class="arrow-left"><span>Previous</span></div>',
            responsive: [
                {
                  breakpoint: 980,
                  settings: {
                    //centerMode: true,
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                            //centerMode: true,
                    slidesToShow: 1
                  }
                }
            ]
        });
        
        
        var $el2 = $('.slick-posts');
        $el2.on('init', function() {
            $el2.each(function(index) {
                
            });
        });
        
        $el2.on('beforeChange', function(event, slick, currentSlide, nextSlide){
          //new Foundation.Equalizer($(".slick-posts")).applyHeight();
        });
        
        

        $el2.slick({
            dots: false,
            //centerMode: true,
            slidesToShow: 3,
            arrows: true,
            adaptiveHeight: true,
            nextArrow: '<div class="arrow-right"><span>Next</span></div>',
            prevArrow: '<div class="arrow-left"><span>Previous</span></div>',
            responsive: [
                {
                  breakpoint: 639,
                  settings: {
                            //centerMode: true,
                    slidesToShow: 1
                  }
                }
            ]
        });
        
        // Smash Balloon custom carousel
        var $el3 = $('.post-cards .cards');
        $el3.on('init', function() {
            $el3.each(function(index) {
                
            });
        });
        
        /*
        $el3.on('beforeChange', function(event, slick, currentSlide, nextSlide){
          new Foundation.Equalizer($(".slick-posts")).applyHeight();
        });
        */
 
        $el3.slick({
            dots: false,
            //centerMode: true,
            slidesToShow: 3,
            arrows: true,
            nextArrow: '<div class="arrow-right"><span>Next</span></div>',
            prevArrow: '<div class="arrow-left"><span>Previous</span></div>',
            responsive: [
                {
                  breakpoint: 639,
                  settings: {
                    //centerMode: true,
                    slidesToShow: 1
                  }
                }
            ]
        });
        
	
    });
    
    
    // Smash baloon add span to load more button    
    
    $('.sbi_load_btn').html( '<span>'+$('.sbi_load_btn').html()+'</span>' );
    $('.sbi_load_btn').addClass( 'btn-primary' );

}(document, window, jQuery));

