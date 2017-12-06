/*

jQuery( window ).load( function() {
	var windowHeight	= jQuery( window ).height();
	var sidebarHeight	= jQuery( '.site-content' ).height();

	
	function stickySidebar() {
		if ( ! jQuery( '.home .site-content' ).length ) {
			return;
		}
        
        console.log('activated');

		var tallestSidebar = -1;
		jQuery( '#secondary' ).each( function() {
			tallestSidebar = tallestSidebar > jQuery( this ).outerHeight() ? tallestSidebar : jQuery( this ).outerHeight();
		});
        
        console.log(tallestSidebar);

		var topDistance           = jQuery( document ).scrollTop();
		var sidebarWidth          = jQuery( '#secondary' ).outerWidth();
		var	contentWidth          = jQuery( '.site-content > .row' ).outerWidth();
		var	primaryWidth          = jQuery( '#primary' ).outerWidth();
		var	gutter                = contentWidth - primaryWidth - sidebarWidth;
		var	sidebarOffset         = primaryWidth + gutter;
        var	headerOffset          = jQuery( '.site-header' ).outerHeight() + 30;
		var primaryPosition       = jQuery( '#primary' ).offset();
  		

		// If we're in desktop orientation and the order review column is taller than the customer details column and smaller than the window height
		if ( ( jQuery( window ).width() > 768 ) ) {
            
                console.log('sticky sidebar');

				if ( topDistance  > ( primaryPosition.top - headerOffset ) ) {
					jQuery( '#secondary' ).addClass( 'sidebar-fixed' );
					if ( jQuery( '#secondary' ).css( 'direction' ) === 'rtl' ) {
						jQuery( '#secondary' ).css({
							//'margin-right':		sidebarOffset,
							'width':			sidebarWidth,
                            'top':              headerOffset
						});
					} else {
						jQuery( '#secondary' ).css({
							//'margin-left':		sidebarOffset,
							'width':			sidebarWidth,
                            'top':              headerOffset
						});
					}
				} else {
					jQuery( '#secondary' ).removeAttr( 'style' ).removeClass( 'sidebar-fixed' );
				}
		}
	}

	// Do sticky on scroll
	jQuery( window ).scroll( function() {
		stickySidebar();
	});

	// Do sticky on window resize
	jQuery( window ).resize( function() {
		stickySidebar();
	});
});

*/