<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package _s
 */

get_header(); ?>

<?php
if( is_category() ) {
    get_template_part( 'template-parts/section', 'hero-category' );
}
else if( is_author() ) {
    get_template_part( 'template-parts/section', 'hero-author' );
}
else {
    get_template_part( 'template-parts/section', 'hero-blog' );
}


?>

<div class="row">

    <div class="medium-7 large-8 columns">
    
        <div id="primary" class="content-area">
        
            <main id="main" class="site-main" role="main">
                <?php
                author_bio();
                function author_bio() {
                    if( !is_author() )
                        return;
                    
                    $author_id = get_queried_object_id();
                       
                    $avatar = get_avatar( $author_id, 200 );
                    
                    $author_bio = wpautop( get_the_author_meta( 'biography' ) );
                    
                    // Get social icons 
                    $social_profiles = array(
                        
                        'facebook'  => get_the_author_meta( 'facebook' ),
                        'twitter'   => get_the_author_meta( 'twitter' ),
                        'instagram' => get_the_author_meta( 'instagram' ),
                        'youtube'   => get_the_author_meta( 'youtube' ),
                        
                    );
                    
                    $social_icons = _s_get_social_icons( $social_profiles );
                    if( !empty( $social_icons ) ) {
                        $social_icons = sprintf( '<h4>%s</h4>%s', __( 'Find me on:', '_s' ), _s_get_social_icons( $social_profiles ) );
                    }
                    
                    
                    printf( '<div class="author-bio"><div class="entry-content">%s%s</div>%s</div>', $avatar, $author_bio, $social_icons );
                }
                 
                 
                if ( have_posts() ) : ?>
        
                   <?php
                    while ( have_posts() ) :
        
                        the_post();
        
                        get_template_part( 'template-parts/content', 'post' );
        
                    endwhile;
                    
                    the_posts_navigation();
                                        
                else :
        
                    get_template_part( 'template-parts/content', 'none' );
        
                endif; ?>
        
            </main>
        
        </div>
    
    </div>
    
    <div class="medium-5 large-4 columns">
    
        <?php 
        // Author archive gets a dedicated sidebar
        $sidebar = is_author() ? 'author' : '' ;
        get_sidebar( $sidebar ); 
        ?>
    
    </div>	

</div>

<?php
get_footer();
