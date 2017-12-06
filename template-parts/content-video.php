<?php
/**
 * Template part for displaying single posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _s
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	
    <div class="entry-content">
	
		<?php 
		printf( '<div class="row"><div class="medium-7 large-8 columns">%s</div><div class="medium-5 large-4 columns">%s%s</div></div>',
                _get_video_post( false, true ),
                the_title( '<h2>', '</h2>', false ),
                _s_get_addtoany_share_icons()
        );
		?>
		
	</div><!-- .entry-content -->

	
</article><!-- #post-## -->
