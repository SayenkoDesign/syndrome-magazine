<?php
// used to tracking the current post id for archives using load more. We do this for ad placement
if ( session_status() == PHP_SESSION_NONE ) {
    session_start();
}
 
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo THEME_FAVICONS;?>/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="<?php echo THEME_FAVICONS;?>/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="<?php echo THEME_FAVICONS;?>/favicon-16x16.png">
<link rel="manifest" href="<?php echo THEME_FAVICONS;?>/manifest.json">
<link rel="mask-icon" href="<?php echo THEME_FAVICONS;?>/safari-pinned-tab.svg" color="#5bbad5">
<meta name="theme-color" content="#ffffff">
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', '_s' ); ?></a>

	<header id="masthead" class="site-header" role="banner">

		<div class="column row expanded">
		
			<div class="wrap">
			    
                <div class="buttons">
				<button type="button" class="menu-toggle" data-toggle="modal-menu">
				<?php echo get_svg( 'menu' ); ?>
                <span class="screen-reader-text">Menu</span></button>
                
                <button type="button" class="search-toggle" data-toggle="modal-search">
				<?php echo get_svg( 'search' ); ?>
                <span class="screen-reader-text">Search</span></button>
                </div>
                
                <?php
                // social icons
                echo _s_get_social_icons();
                ?>
                
                <div class="site-branding">
	
					<?php		
					$logo = sprintf('<img src="%s" width="248" height="80" alt="%s"/>', THEME_IMG .'/logo.png', get_bloginfo( 'name' ) );
					$site_url = site_url();
					printf('<div class="site-title"><a href="%s" title="%s">%s</a></div>', $site_url, get_bloginfo( 'name' ), $logo );
					?>
	
				</div><!-- .site-branding -->
                
 				
					
				
			</div>
		
		</div><!-- .column.row -->
        
        
       <nav id="site-navigation" class="nav-primary" role="navigation">
            <div class="column row">
                <?php
                    // Desktop Menu
                    $args = array(
                        'theme_location' => 'primary',
                        'menu' => 'Primary Menu',
                        'container' => false,
                        'container_class' => '',
                        'container_id' => '',
                        'menu_id'        => 'primary-menu',
                        'menu_class'     => 'menu',
                        'before' => '',
                        'after' => '',
                        'link_before' => '',
                        'link_after' => '',
                        'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                        'depth' => 0
                    );
                    wp_nav_menu($args);						
                    
                ?>
            </div>
        </nav><!-- #site-navigation -->
		
	</header><!-- #masthead -->

 <div id="page" class="site-container">
		
	<div id="content" class="site-content">