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
    
    $queried_object = get_queried_object(); 
    $taxonomy = $queried_object->taxonomy;
    $term_id = $queried_object->term_id;  

    $heading = single_cat_title( '', '' );
    remove_filter('term_description','wpautop');
    $description = category_description();
    add_filter('term_description','wpautop');
    $background_image	= get_field( sprintf( '%sbackground_image', $prefix ), $queried_object );
     
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