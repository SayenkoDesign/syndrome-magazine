<?php


function featured_callout() {
        
    $content = get_field( 'featured_callout_message' );
    
    if( empty( $content ) ) {
        return false;
    }
    
    $attr = array( 'id' => 'callout', 'class' => 'section callout' );
                
    _s_section_open( $attr );
    
        print( '<div class="column row">' );

        printf( '<div class="entry-content" data-closable>
          <button class="close-button" aria-label="Close alert" type="button" data-close>
            <span aria-hidden="true">&times;</span>
          </button>
          %s
          </div>', 
          $content );
        
        echo '</div>';

    _s_section_close();	   
    
    
}


// Featured Posts

function section_featured_posts() {
    
    global $post;
    
    $post_id = get_the_ID();
                    
    $posts = [];
    
    $args = array(
        'post_type'           => 'post',
        'posts_per_page'      => 5,
        'post_status'    => 'publish'
    );
    
    $featured_posts = get_field('featured_posts');
    
    if( !empty( $featured_posts ) ) {
        $args['post__in'] = $featured_posts;
        $args['orderby'] = 'post__in';
    }
      
    // Use $loop, a custom variable we made up, so it doesn't overwrite anything
    $loop = new WP_Query( $args );
    
    $posts = $loop->posts;
    
    if( empty( $posts ) ) {
        return;
    }
    
    $attr = array( 'class' => 'section featured-posts' );
    
    _s_section_open( $attr );		
    
    print( '<div class="row">' );
    
        print( '<div class="large-8 columns">' );
        
            print( '<div class="row">' );
            
                printf( '<div class="large-8 columns">%s</div>', _get_featured_post( $posts[0], 'large' ) );
                
                printf( '<div class="large-4 columns">%s%s</div>', _get_secondary_post( $posts[1], 'medium' ), _get_secondary_post( $posts[2], 'medium' ) );
            print( '</div>' );
            
        print( '</div>' );
    
        $ad_block = get_field( 'ad_block', $post_id );
        $ad_block = _s_get_ad_block( $ad_block );
        
        if( count( $posts ) > 4 ) {
            
            if( empty( $ad_block ) ) {
                $ad_block = _get_secondary_post( $posts[4], 'medium' );
            }
            
        }
     
     
        printf( '<div class="large-4 columns">%s%s</div>', _get_secondary_post( $posts[3], 'medium' ), $ad_block );
    
    print( '</div>' );
    
    _s_section_close();	
}


function _get_featured_post( $_post = '', $size = 'medium', $image_size = 'large' ) {
    
    $background = get_the_post_thumbnail_url( $_post, $image_size );
    if( !empty( $background ) ) {
        $background = sprintf( ' style="background-image: url(%s);"', $background );
    }
    $image = sprintf( '<a href="%s"%s class="background"></a>', get_permalink( $_post->ID ), $background );
    $title = sprintf( '<h3 class="dot-ellipsis dot-resize-update dot-load-update""><a href="%s">%s</a></h3>', get_permalink( $_post->ID ), get_the_title( $_post->ID ) );
    $cat   = _s_get_post_term( $_post->ID );
    $terms = wp_get_post_terms( $_post->ID, 'category' );
    $term_class  = '';
    if( !is_wp_error( $terms ) ) {
        $term = array_pop($terms);
        $term_class = sanitize_title( $term->name );
    }
    
    $subtitle = get_field( 'subtitle', $_post->ID );
    if( !empty( $subtitle ) ) {
        $subtitle = sprintf( '<h4>%s</h4>', $subtitle );
    }
    
    
    $custom_excerpt = get_field( 'custom_excerpt', $_post->ID );
    
    if( empty( $custom_excerpt ) ) {
        $custom_excerpt = _s_get_the_excerpt( '', '', 20 );
    }
    
    $custom_excerpt = sprintf( '<div class="excerpt">%s</div>', $custom_excerpt );
    
    
    $description = sprintf( '<div class="post-description"><div class="wrap">%s%s%s</div></div>', $cat, $title, $custom_excerpt );
    return sprintf( '<div class="post %s %s">%s%s</div>', $term_class, $size, $image, $description );
}



function _get_secondary_post( $_post ) {
    
    
    $background = get_the_post_thumbnail_url( $_post->ID, 'large' );
    
    if( !empty( $background ) ) {
        $background = sprintf( ' style="background-image: url(%s);"', $background );
    }
    $image = sprintf( '<a href="%s"%s class="background"></a>', get_permalink( $_post->ID ), $background );
    
    $terms = wp_get_post_terms( $_post->ID, 'category' );
    
    $cat = '';
    $term_class = '';
    
    if( !is_wp_error( $terms ) ) {
       $term = $terms[0]; 
       
       $term_class = sanitize_title( $term->name );
       $cat = sprintf( '<a href="%s" class="term-link %s">%s<span>%s</span></a>', get_term_link( $term->slug, 'category' ), $term_class, get_svg( 
                       $term_class ), $term->name );
    }
    

    $subtitle = get_field( 'subtitle', $_post->ID );
    if( !empty( $subtitle ) ) {
        $subtitle = sprintf( '<h4>%s</h4>', $subtitle );
    }
    
    $title = sprintf( '<div class="post-description"><h3><a href="%s">%s</a></h3>%s</div>', 
                      get_permalink( $_post->ID ), get_the_title( $_post->ID ), $subtitle );
     
    return sprintf( '<div class="post %s">%s%s%s</div>', $term_class, $image, $cat, $title );   
}



function section_post_cards() {
         
    $shortcode = do_shortcode( '[instagram-feed layout="carousel" carouselrows="1" carouselarrows="true" showheader=false showfollow=false carouselpag=false carouselarrows=true showcaption=false cols=4 showlikes=false num=33]' );
    
    $attr = array( 'class' => 'section post-cards' );
    
    _s_section_open( $attr );	
    
    printf( '<div class="column row"><header class="text-center"><h2>%s</h2></header></div>', __( 'Postcards', '_s' ) );		
    
    print( '<div class="column row">' );
    
    echo  $shortcode;
    
    print( '</div>' );
    _s_section_close();	
    
        
}


function section_recent() {
    
    $posts = '';
    
    $ad_block = get_field( 'recent_ad_block' );
    $ad_block = _s_get_ad_block( $ad_block );
    
    
    $query_args = array(
            'post_type'      => 'post',
            'posts_per_page' => 20,
            'post_status'    => 'publish',
        );
    
    // Exclude featured posts
    $featured_posts = get_field('featured_posts');
    
    if( !empty( $featured_posts ) ) { 
        $query_args['post__not_in'] = $featured_posts;
    }
    
    
    // Use $loop, a custom variable we made up, so it doesn't overwrite anything
    $loop = new WP_Query( $query_args );

    $posts = [];
    
    if ( $loop->have_posts() ) : 
         while ( $loop->have_posts() ) : $loop->the_post(); 
             
            $posts[] = _get_post();
           
         endwhile;
      
     else:
     
      
     endif;

    // We only need to reset the $post variable. If we overwrote $wp_query,
    // we'd need to use wp_reset_query() which does both.
    wp_reset_postdata();
    
    if( empty( $posts ) ) {
        return false;
    }
    
    $slick = false;
    
    // Add the ad block
    
    if( !empty( $ad_block ) ) {
        array_splice($posts, 1, 0, $ad_block );
    }
    
    $out = '';
    
        
    $posts = array_chunk( $posts, 2 );
            
    foreach( $posts as $p ) {
         $out .= sprintf( '<div class="column">%s</div>', implode( '', $p ) );
    }
    
    $slick = ' has-slick';
    $out = sprintf( '<div class="slick-posts">%s</div>', $out );
  
                
    printf( '<div class="recent-posts%s"><header><h2>%s</h2></header>%s</div>', $slick, __( 'Recent', '_s' ), $out );	

}


function section_recommended() {
    
    $posts = '';
    
    $ad_block = get_field( 'recommended_ad_block' );
    $ad_block = _s_get_ad_block( $ad_block );
    
    
    $query_args = array(
            'post_type'      => 'post',
            'posts_per_page' => 20,
            'post_status'    => 'publish',
            'meta_query' => array(
                 array(
                    'key' => 'recommend_post',
                    'value' => 1,
                    'compare' => '=',
                ),
            )
        );
        
        
    // Exclude featured posts
    $featured_posts = get_field('featured_posts');
    
    if( !empty( $featured_posts ) ) { 
        $query_args['post__not_in'] = $featured_posts;
    }
    
    
    // Use $loop, a custom variable we made up, so it doesn't overwrite anything
    $loop = new WP_Query( $query_args );

    $posts = [];

    if ( $loop->have_posts() ) : 
         while ( $loop->have_posts() ) : $loop->the_post(); 

            $posts[] = _get_post();
                       
         endwhile;
      
     else:
     
      
     endif;

    // We only need to reset the $post variable. If we overwrote $wp_query,
    // we'd need to use wp_reset_query() which does both.
    wp_reset_postdata();
    
    if( empty( $posts ) ) {
        return false;
    }
    
    $slick = false;
    
    // Add the ad block
    
    if( !empty( $ad_block ) ) {
        array_splice($posts, 1, 0, $ad_block );
    }
    
    $out = '';
    
    $posts = array_chunk( $posts, 2 );
            
    foreach( $posts as $p ) {
         $out .= sprintf( '<div class="column">%s</div>', implode( '', $p ) );
    }
    
    if( count( $posts ) > 3 ) {
        $slick = ' has-slick';
        $out = sprintf( '<div class="slick-posts">%s</div>', $out );
    }
    else {
        $out = sprintf( '<div class="row small-up-1 medium-up-2 xlarge-up-3">%s</div>', $out ); 
    }    
                
    printf( '<div class="recommended-posts%s"><header><h2>%s</h2></header>%s</div>', $slick, __( 'Recommended', '_s' ), $out );	

}




function _get_post() {
    
    
    $background = get_the_post_thumbnail_url( get_the_ID(), 'large' );
    
    if( !empty( $background ) ) {
        $background = sprintf( ' style="background-image: url(%s);"', $background );
    }
    $image = sprintf( '<a href="%s"%s></a>', get_permalink(), $background );
    
    $terms = wp_get_post_terms( get_the_ID(), 'category' );
    
    $cat = '';
    $term_class = '';
    
    if( !is_wp_error( $terms ) ) {
       $term = $terms[0]; 
       
       $term_class = sanitize_title( $term->name );
       $cat = sprintf( '<a href="%s" class="term-link %s">%s<span>%s</span></a>', get_term_link( $term->slug, 'category' ), $term_class, get_svg( 
                       $term_class ), $term->name );
    }
    
    $subtitle = get_field( 'subtitle' );
    if( !empty( $subtitle ) ) {
        $subtitle = sprintf( '<h4>%s</h4>', $subtitle );
    }
    
    
    $title = sprintf( '<h3><a href="%s">%s</a></h3>', 
                      get_permalink(), get_the_title() );
     
    return sprintf( '<div class="post %s">%s<div class="post-description">%s%s%s</div></div>', $term_class, $image, $cat, $title, $subtitle );   
}




function section_videos() {
         
    $heading = get_field( 'featured_videos_heading' );
    $subheading = get_field( 'featured_videos_subheading' );
    
    $posts = '';
    
    $args = array(
        'post_type'      => 'video',
        'posts_per_page' => 9,
        'post_status'    => 'publish',
    );
    
    $video_posts = get_field('video_posts');
    
    if( !empty( $video_posts ) ) {
        $args['post__in']       = $video_posts;
        $args['orderby']        = 'post__in';
        $args['posts_per_page'] = -1;
    }
      
    // Use $loop, a custom variable we made up, so it doesn't overwrite anything
    $loop = new WP_Query( $args );
              
    if ( $loop->have_posts() ) : 
        while ( $loop->have_posts() ) : $loop->the_post(); 
            
            $posts .= _get_video_post();
 
        endwhile;
    endif;

    wp_reset_postdata();   
    
    
    $attr = array( 'class' => 'section video-posts' );
    
    _s_section_open( $attr );	
    
    
    if( empty( $heading ) ) {
        $heading = __( 'PMS Videos', '_s' );
    }
    
    if( !empty( $subheading ) ) {
        $subheading = sprintf( '<h4>%s</h4>', $subheading );
    }
    
    printf( '<div class="column row"><header><h2>%s</h2>%s</header></div>', 
            $heading, $subheading );	
    
    printf( '<div class="column row"><div class="slick-videos">%s</div></div>', $posts );
    
    print( '</div>' );
    
    _s_section_close();	
}