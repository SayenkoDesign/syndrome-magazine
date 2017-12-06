<?php

function _get_video_post( $title = true, $foobox = false ) {
    
    $classes = ''; 
    
    if( $foobox ) {
        $video_url = get_post_meta( get_the_ID(), 'video', true );
        $classes = 'foobox';
    }
    else {
       $video_url = get_permalink(); 
    }
    
    $background = get_the_post_thumbnail_url( get_the_ID(), 'large' );
    
    if( empty( $video ) && empty( $background ) ) {
        return false;
    }
    
    $background = sprintf( ' style="background-image: url(%s);"', $background );
             
    $thumbnail = sprintf( '<div class="video" %s>%s</div>', $background, get_svg( 'video-play' ) );
    
    if( $title ) {
        $title = sprintf( '<h3 class="dot-ellipsis dot-resize-update dot-load-update">%s</h3>', get_the_title() );
    }
    
    
    // Removed foobox class
    return sprintf( '<div class="post"><a href="%s" class="%s">%s%s</a></div>', $video_url, $classes, $thumbnail, $title );   
}