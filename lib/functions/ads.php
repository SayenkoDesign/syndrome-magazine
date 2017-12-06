<?php


/// Shortcode [ad-block id="4"]

function shortcode_ad_block( $atts = array(), $content = '' ) {
    $a = shortcode_atts( array(
        'id' => '',
        'unique_id' => '',
    ), $atts );

    return _s_get_ad_block( $a['id'], $a['unique_id'] );
}
add_shortcode( 'ad-block', 'shortcode_ad_block' );


function _s_get_ad_block( $id, $unique_id = '' ) {
     
     if( false == absint( $id ) ) {
         return;
     }
     
     // get the ad
     
     // arguments, adjust as needed
	$args = array(
		'post_type'      => 'ads',
		'posts_per_page' => 1,
		'post_status'    => 'publish',
		'p'              => $id
	);
    

	// Use $loop, a custom variable we made up, so it doesn't overwrite anything
	$loop = new WP_Query( $args );
    
    $ad = '';

	// have_posts() is a wrapper function for $wp_query->have_posts(). Since we
	// don't want to use $wp_query, use our custom variable instead.
	if ( $loop->have_posts() ) : 
 		while ( $loop->have_posts() ) : $loop->the_post(); 

			$ad_type = strtolower( get_field( 'ad_type' ) ); // Code/ Image
            
            $ad = _s_get_ad_by_type( $ad_type );
 
		endwhile;
 	endif;

	// We only need to reset the $post variable. If we overwrote $wp_query,
	// we'd need to use wp_reset_query() which does both.
	wp_reset_postdata();
    
    if( empty( $ad ) ) {
        return;
    }
    
    if( !empty( $unique_id ) ) {
       $unique_id = sprintf( ' id="%s"', $unique_id ); 
    }
             
    return sprintf( '<div%s class="ad-block">%s</div>', $unique_id, $ad );
       
}


function _s_get_ad_by_type( $ad_type = '' ) {
    
    if( empty( $ad_type ) )
        return;
    
    $ad = '';
    
    if( 'code' == $ad_type  ) {
        $ad = get_field( 'code' );
    }
    else {
       $attachment_id = get_field( 'image' );
       $image = _s_get_acf_image( $attachment_id );
       $attachment_id = get_field( 'mobile_image' );
       $mobile_image = _s_get_acf_image( $attachment_id );
       $url = get_field( 'url' );
       
       if( !empty( $image ) && !empty( $url ) ) {
           
           $ad = sprintf( '<a href="%s" target="_blank">%s</a>', $url, $image );
           
           // Imclude both if there is a mobile pohto
           if( !empty( $mobile_image ) ) {
               $desktop = sprintf( '<div class="show-for-medium"><a href="%s" target="_blank">%s</a></div>', $url, $image );
               $mobile = sprintf( '<div class="show-for-small-only"><a href="%s" target="_blank">%s</a></div>', $url, $mobile_image );
               
               $ad = $desktop . $mobile;
           }
       }
    }
             
    return $ad;
}