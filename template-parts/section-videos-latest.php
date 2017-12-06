<?php

// Latest Videos

section_videos_latest();
function section_videos_latest() {
      
    $args = array(
        'post_type'           => 'video',
        'posts_per_page'      => 12,
        'post_status'    => 'publish',
       );
      
    // Use $loop, a custom variable we made up, so it doesn't overwrite anything
    $loop = new WP_Query( $args );
              
    if ( $loop->have_posts() ) : 
    
        $attr = array( 'class' => 'section latest video-posts' );
        
        _s_section_open( $attr );	
    
        printf( '<div class="column row"><header><h2>%s</h2></header></div>', 
            __( 'Latest Videos', '_s' ) );
         
        print( '<div class="column row"><div class="slick-videos">' );
    
        while ( $loop->have_posts() ) : $loop->the_post(); 
            
            echo _get_video_post();
   
        endwhile;
        
        print( '</div></div>' );
        
        _s_section_close();	
        
    endif;

    wp_reset_postdata();   
    
 }