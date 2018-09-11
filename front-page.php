<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _s
 */

get_header(); ?>


<?php
featured_callout();
    
section_featured_posts();
?>
    
<div class="row">

    <div class="large-8 columns">
    
        <div id="primary" class="content-area">
	        
            <main id="main" class="site-main" role="main">
     
	        <?php
            
            section_recent();
            
            section_recommended();
            
            section_post_cards();
	
	        ?>

            </main>
        
        </div>
    
    </div>
    
    <div class="large-4 columns">
    
        <?php get_sidebar( 'front-page' ); ?>
    
    </div>	

</div>
    
<?php
section_videos();
?>
    
<?php
get_footer();
