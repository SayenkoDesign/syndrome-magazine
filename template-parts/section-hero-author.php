<?php

/*
Hero
		
*/

section_hero();
function section_hero() {
    
    $args = array();
    
    $args['attr'] = array( 'id' => 'hero', 'class' => 'section hero' );
    
    $prefix = 'hero';
    $prefix = set_field_prefix( $prefix );
    
    $author_id = sprintf( 'user_%s', get_queried_object_id() );
    
    
    //$heading 		= get_field( sprintf( '%stitle', $prefix ), $author_id );
    $heading          = get_the_author_meta('display_name');
    $description	  = get_field( sprintf( '%sdescription', $prefix ), $author_id );
    $background_image = get_field( sprintf( '%sbackground_image', $prefix ), $author_id );
     
    if( !empty( $background_image ) ) {
        $attachment_id = $background_image;
        $size = 'hero';
        $background = wp_get_attachment_image_src( $attachment_id, $size );
        $args['attr']['style'] = sprintf( 'background-image: url(%s);', $background[0] );
        $args['attr']['class'] .= ' background-image';
    }
    
    $content = '';
          
    if( !empty( $heading ) ) {
        $content .= _s_get_heading( $heading, 'h1' );
    }
    
    if( !empty( $description ) ) {
        $description = _s_wrap_text( $description, "\n" );
        $content .= _s_get_heading( $description, 'h4' );
    }
    
    echo kr_module_hero( $args, $content );
        
}