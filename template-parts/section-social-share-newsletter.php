<?php

/*
Section - Share/Newsletter
*/

// site-content needs padding bottom 100px if cta active

 _s_social_share_newsletter();
function _s_social_share_newsletter() {
	
    if( !is_home() && !is_category() && !is_author() && !is_singular( 'post' ) )
        return false;
    
 	$share = sprintf( '<div class="widget social-share">%s</div>', _s_get_addtoany_share_icons() );
    
    $form = sprintf( '<div class="widget gform_widget">%s</div>', do_shortcode( '[gravityform id="1" title="false" description="false" ajax="true" tabindex="9"]' ) );
   	
	$content = sprintf( '<div class="row"><div class="small-12 large-6 columns">%s</div><div class="small-12 large-6 columns show-for-large">%s</div></div>', $share, $form );
				
	$attr = array( 'id' => 'social-share-newsletter', 'class' => 'section social-share-newsletter' );
	
 	_s_section_open( $attr );
		echo $content;
	_s_section_close();		
 }