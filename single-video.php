<?php
/**
 * The template for displaying all single video posts.
 *
 * @package _s
 */

get_header(); ?>

<div class="column row">

     <div id="primary" class="content-area">

        <main id="main" class="site-main" role="main">
        <?php
        while ( have_posts() ) :

            the_post();
            
            $attr = array( 'class' => 'section featured' );
        
            _s_section_open( $attr );	

            get_template_part( 'template-parts/content', 'video' );
            
            _s_section_close();	
            
        endwhile; ?>
        
        <?php
        // Trending Videos
        get_template_part( 'template-parts/section', 'videos-trending' );
        
        // Latest Videos
        get_template_part( 'template-parts/section', 'videos-latest' );
        ?>

        </main>

    </div>

</div>

	

<?php
get_footer();
