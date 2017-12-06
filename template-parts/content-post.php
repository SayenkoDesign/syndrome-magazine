<?php
/**
 * Template part for displaying single posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _s
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'column row' ); ?>>
	
 <?php
     if( !is_single() ) {
        
        $post_image = get_the_post_thumbnail_url( get_the_ID(), 'large' );
        if( !empty( $post_image ) ) {
            $post_image = sprintf( 'background-image: url(%s);', $post_image );
        }
        $post_categories =  _s_get_post_terms( get_the_ID() );
        
        $post_title = sprintf( '<h2><a href="%s">%s</a></h2>', get_permalink(), get_the_title() );
        $post_author = _s_get_post_author();
        
        printf( '<div class="post-hero" style="%s"><div class="flex"><header class="entry-header">%s%s</header></div></div>', 
                $post_image, $post_categories, $post_title );
                
        echo $post_author;
    }
    else {
        
        echo _s_get_post_author( 120 );
        
        printf( '<div class="column row">%s</div>', _s_get_addtoany_share_icons() );
    }
	?>
	
	<div class="entry-content">
	
		<?php 
		if( is_single() ) {
			
			the_content(); 
			
		} else {
	
			_s_the_excerpt( '', '', 80 );
			
			printf( '<p class="read-more"><a href="%s" class="more">%s ></a></p>', get_permalink(), __( 'Read More', '_s' ) ) ;
		}
		?>
		
	</div><!-- .entry-content -->

	<footer class="entry-footer">
        
        <?php 
        if( is_single() ) {
  			
            printf( '<h4>%s</h4>', __( 'Categories:' ), '_s'  );
            echo _s_get_post_terms( get_the_ID() );
  			
		} 
        
        ?>
        
         
	</footer><!-- .entry-footer -->
    

<?php
     if( ! is_single() ) {
        
        
        // arguments, adjust as needed
        $args = array(
            'post_type'      => 'post',
            'posts_per_page' => -1,
            'post_status'    => 'publish',
         );
    
        if( is_category() ) {
            $cat_id = get_queried_object_id();
            $args['cat'] = $cat_id;
        }
        else if( is_author() ) {
            
            $author_id = get_queried_object_id();
            
            $args['author'] = $author_id;
        }
        
        $loop = new WP_Query( $args );

        wp_reset_postdata();
        
        $post_ids =  wp_list_pluck( $loop->posts, 'ID' );
        
        $current = array_search( get_the_ID(), $post_ids );
        
        $i = 0;
        $index = 0;
        $insert_every = 3;
        $post_id = 0;
        $total_ads = 0;
        
        $post_index_ads = get_field( 'post_index_ads', 'options' );
        
        if( !empty( $post_index_ads ) ) {
            
            $total_ads = count( $post_index_ads );
            
            // show after every three posts
            if( 0 === ( $current + 1 ) % $insert_every ) {
                 
                // Loop up to current # and increment index every nth so that we can capture the correct ad array key
                 while( $i < $current ) {
                    
                     if( $i > 0 && $i % $insert_every == 0 ) {
                         $index++;
                     }
                     
                     // Every time we reach our limit, we reset back to zero so that we're only showing the available ads
                     if( $index >= $total_ads ) {
                         $index = 0;
                     }
                     
                     $i++;
                }
                                    
                // make sure ad array key exists
                
                if( isset( $post_index_ads[ $index ] ) ) {
                    $post_id = $post_index_ads[ $index ];
                    
                    echo _s_get_ad_block( $post_id );
                }
                   
            }
        }
    }
    
    
?>    
    

</article><!-- #post-## -->

