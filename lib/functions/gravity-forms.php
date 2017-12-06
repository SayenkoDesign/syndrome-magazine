<?php

// Turn on label visibility
add_filter( 'gform_enable_field_label_visibility_settings', '__return_true' );

// On submit scroll back down to form
add_filter( 'gform_confirmation_anchor', '__return_true' );

// Remove scroll to a specific form #5
//add_filter( 'gform_confirmation_anchor_5', '__return_false' );

// Change submit input to button, and add span
add_filter( 'gform_submit_button', 'form_submit_button', 10, 2 );
function form_submit_button( $button, $form ) {
    $button_text = $form['button']['text'];
    return sprintf( "<button class='gform_button button' id='gform_submit_button_%s'><span>%s</span></button>", $form['id'], $button_text );
}