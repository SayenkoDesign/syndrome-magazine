<?php

/*
Hero
		
*/

section_hero();
function section_hero() {
    
    global $post;
    
    $args = array();
    
    $args['attr'] = array( 'id' => 'hero', 'class' => 'section hero' );
    
    $prefix = 'hero';
    $prefix = set_field_prefix( $prefix );
      
    $heading = sprintf( '<h1>%s</h1>', get_the_title() );
    $description = sprintf( '<p>%s</p>', _s_get_posted_on() );
    $background_image = get_the_post_thumbnail_url( get_the_ID(), 'hero' );
    
    if( !empty( $background_image ) ) {
        $args['attr']['style'] = sprintf( 'background-image: url(%s);', $background_image );
        $args['attr']['class'] .= ' background-image';
    }
    
    
    
    $content = '';
    
    $content .= _s_get_post_terms( get_the_ID() ); // post categories
          
    if( !empty( $heading ) ) {
        $content .= _s_get_heading( $heading, 'h1' );
    }
    
    if( !empty( $description ) ) {
        $description = _s_wrap_text( $description, "\n" );
        $content .= _s_get_heading( $description, 'h4' );
    }
    
    
    
    echo kr_module_hero( $args, $content );
        
}