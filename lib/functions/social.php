<?php
global $social_profiles;

 
/**
 * Echo social icons with SVG.
 */
function _s_get_social_icons( $profiles = array() ) { 

	if( !is_array( $profiles ) || empty( array_filter( $profiles ) ) ) {
		
        // defaults
        $profiles = array( 'facebook' => get_field( 'facebook', 'options' ),
              'twitter' => get_field( 'twitter', 'options' ),
              'instagram' => get_field( 'instagram', 'options' ),
              'youtube' => get_field( 'youtube', 'options' ),
        );
  	}
    
    $profiles = array_filter( $profiles );
 	
	$out = '';
	
	foreach( $profiles as $type => $url ) {
		
        $svg = get_svg( $type );
        
        if( !empty( $svg ) ) {
			$out .= sprintf( '<li class="social-icon"><a href="%s" title="%s">%s</a></li>', $url, ucwords( $type ), $svg );
		}
	}
	
	return sprintf( '<ul class="social-icons">%s</ul>', $out );

 }
 
 
 function _s_do_social_icons( $profiles = array() ) { 
	if( !empty( $profiles ) ) {
		echo _s_get_social_icons( $profiles );
	}
	
 }