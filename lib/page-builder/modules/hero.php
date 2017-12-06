<?php

function kr_module_hero( $args = [], $content = '' ) {
    
    if( empty( $content ) ) {
        return;
    }

    $defaults = array(
        'html5'   => '<section %s>',
        'context' => 'section',
        'attr' => array( 'id' => 'hero', 'class' => 'section hero' ),
        'echo' => false
    );
    
    
    /**
     * Parse incoming $args into an array and merge it with $defaults
     */ 
    $args = wp_parse_args( $args, $defaults );

     
    $out = _s_markup( $args );
    $out .= '<div class="flex">';
    $out .= _s_structural_wrap( 'open', false );
     
    $out .= sprintf( '<div class="row"><div class="small-12 columns"><div class="hero-content">%s</div></div></div>', $content );
    
    $out .= _s_structural_wrap( 'close', false );
    $out .= '</div>';
    $out .= '</section>';
    
    echo $out;
        
}