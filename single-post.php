<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package _s
 */
 
get_header(); ?>

<?php
get_template_part( 'template-parts/section', 'hero-post' );
?>

<div class="row">
<div class="large-8 large-centered columns">

 
    <div id="primary" class="content-area">
    
        <main id="main" class="site-main" role="main">
        <?php
        while ( have_posts() ) :
    
            the_post();
    
            get_template_part( 'template-parts/content', 'post' );
    
           // the_post_navigation();
    
            if ( comments_open() || get_comments_number() ) :
                comments_template();
            endif;
    
            endwhile; ?>
    
        </main>
    
    </div>
    
    </div>
    
    <?php
    $ad_block = get_field( 'global_footer_ad', 'options' );
    echo _s_get_ad_block( $ad_block, 'footer-ad' );
    ?>
    
</div>

 
<?php
// related posts

section_related_posts();
function section_related_posts() {
       
    $args = array(
        'post_type'           => 'post',
        'posts_per_page'      => -1,
        'post_status'    => 'publish'
    );
    
    $related_posts = get_field('related_posts');
    
    if( !empty( $related_posts ) ) {
        $args['post__in'] = $related_posts;
        $args['orderby'] = 'post__in';
    }
    else {
        return;   
    }
      
    // Use $loop, a custom variable we made up, so it doesn't overwrite anything
    $loop = new WP_Query( $args );
                
    if ( $loop->have_posts() ) : 
    
        $attr = array( 'class' => 'section related-posts' );
        
        _s_section_open( $attr );	
    
        printf( '<div class="column row"><header><h2>%s</h2></header></div>', 
            __( 'Related Articles', '_s' ) );
         
        print( '<div class="column row"><div class="slick-posts" data-equalizer data-equalize-on="medium">' );
    
        while ( $loop->have_posts() ) : $loop->the_post(); 
            
            echo _get_related_post();
   
        endwhile;
        
        print( '</div></div>' );
        
        _s_section_close();	
        
    endif;

    wp_reset_postdata();   
    
 }


 function _get_related_post() {
        
        global $post;
        
        $background = get_the_post_thumbnail_url( $post, 'large' );
        
        if( !empty( $background ) ) {
            $background = sprintf( ' style="background-image: url(%s);"', $background );
        }
        $image = sprintf( '<a href="%s"%s></a>', get_permalink(), $background );
        
        $cat = '';
        $term_class = '';
        
        $taxonomy = 'category';
        $terms = wp_get_post_terms( get_the_ID(), $taxonomy );

        if( !is_wp_error( $terms ) && !empty( $terms )  ) {
            $term = array_pop($terms);
            $term_class = sanitize_title( $term->name );
            $cat = sprintf( '<a href="%s" class="term-link %s">%s<span>%s</span></a>', get_term_link( $term->slug, $taxonomy ), $term_class, get_svg( $term_class ), $term->name );
        }
        
        $subtitle = get_field( 'subtitle' );
        if( !empty( $subtitle ) ) {
            $subtitle = sprintf( '<h4>%s</h4>', $subtitle );
        }
        $title = sprintf( '<a href="%s" class="post-description" data-equalizer-watch><h3>%s</h3>%s</a>', 
                          get_permalink(), get_the_title(), $subtitle );
         
        return sprintf( '<div class="column"><div class="post %s">%s%s%s</div></div>', $term_class, $image, $cat, $title );   
    }

?>

<?php
get_footer();
