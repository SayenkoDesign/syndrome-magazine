<?php
/*
Template Name: Videos
*/


get_header(); ?>

<?php
// Hero
get_template_part( 'template-parts/section', 'hero' );
?>

<div id="primary" class="content-area">

	<main id="main" class="site-main" role="main">
	<?php
    
    
 	// Featured Posts
	section_featured_video_posts();
	function section_featured_video_posts() {
				        
        $posts = [];
        
        $args = array(
            'post_type'           => 'video',
            'posts_per_page'      => 3,
            'post_status'    => 'publish'
        );
        
        $featured_posts = get_field('featured_posts');
        
        if( !empty( $featured_posts ) ) {
            $args['post__in'] = $featured_posts;
	        $args['orderby'] = 'post__in';
        }
          
        $loop = new WP_Query( $args );
                    
        if ( $loop->have_posts() ) : 
                
            while ( $loop->have_posts() ) : $loop->the_post(); 
                
                $posts[] =  _get_video_post();
       
            endwhile;
        
        else:
        
            return;
            
        endif;
    
        wp_reset_postdata();   
        
        // get the first post
        $first_post = array_shift( $posts );
  		
		$attr = array( 'class' => 'section featured-posts' );
		
		_s_section_open( $attr );		
		
		print( '<div class="row">' );
        
        // do we have more than 1 video?
        $column_class = !empty( $posts ) ? 'large-8' : '' ;
        
        // Column headings
        $post_title = $featured_title = '<h4>&nbsp;</h4>';
        
        if( !empty( $posts) ) {
             $featured_title = sprintf( '<h4 class="title"><em>%s</em></h4>', __( 'Featured Videos', '_s' ) );
        }
		
        printf( '<div class="small-12 %s columns">%s%s</div>', $column_class, $post_title, $first_post );
        
        if( !empty( $posts) ) {
            
            print( '<div class="small-12 large-4 columns">' );
            
                echo $featured_title;
                
                print( '<div class="row">' );
                
                foreach( $posts as $p ) {
                    printf( '<div class="medium-6 large-12 columns">%s</div>', $p );
                }
                
                print( '</div>' );
            
            print( '</div>' );
               
        }
		
		print( '</div>' );
		_s_section_close();	
	}
      
    
    // Trending Videos
    get_template_part( 'template-parts/section', 'videos-trending' );
    
    // Latest Videos
    get_template_part( 'template-parts/section', 'videos-latest' );
    
	?>
	</main>
    
</div>
<?php
get_footer();
