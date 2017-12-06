<?php

/****************************************
	WordPress Cleanup functions - work in progress
*****************************************/
	include_once( 'wp-cleanup.php' );


/****************************************
	Theme Settings - load main stylesheet, add body classes
*****************************************/
	include_once( 'theme-settings.php' );



/****************************************
	include_onces (libraries, Classes etc)
*****************************************/
	include_once( 'includes/cpt-core/CPT_Core.php' );

	include_once( 'includes/taxonomy-core/Taxonomy_Core.php' );
	
    include_once( 'includes/theme-functions/form.php' );


/****************************************
	Functions
*****************************************/
    
    include_once( 'functions/svg.php' );
    
	include_once( 'functions/theme.php' );

	include_once( 'functions/template-tags.php' );

	include_once( 'functions/acf.php' );
  
	include_once( 'functions/fonts.php' );

	include_once( 'functions/scripts.php' );
    
    include_once( 'functions/post-views.php' );

	include_once( 'functions/blog.php' );
    
    include_once( 'functions/recommend.php' );

	include_once( 'functions/social.php' );

	include_once( 'functions/gravity-forms.php' );

	include_once( 'functions/menus.php' );
    
    include_once( 'functions/addtoany.php' );
      
    include_once( 'functions/widgets.php' );
    
    include_once( 'functions/front-page.php' );
    
    include_once( 'functions/videos.php' );
    
    include_once( 'functions/ads.php' );
    
/****************************************
	Page Builder
*****************************************/

 
 	include_once( 'page-builder/functions.php' );

	include_once( 'page-builder/markup.php' );

	include_once( 'page-builder/layout.php' );

	include_once( 'page-builder/filters.php' );

	// Load modules
    include_once( 'page-builder/modules/cta.php' );
	include_once( 'page-builder/modules/content-block.php' );
    include_once( 'page-builder/modules/list.php' );
	include_once( 'page-builder/modules/grid.php' );
    include_once( 'page-builder/modules/hero.php' );
 
/****************************************
	Post Types
*****************************************/

    include_once( 'post-types/cpt-videos.php' );
    include_once( 'post-types/cpt-ads.php' );
    
/****************************************
	Widgets
*****************************************/
    include_once( 'widgets/widget-ads.php' );
    include_once( 'widgets/widget-authors.php' );
    include_once( 'widgets/widget-trending-posts.php' );
    include_once( 'widgets/widget-recommended-posts.php' );
    include_once( 'widgets/widget-trending-videos.php' );