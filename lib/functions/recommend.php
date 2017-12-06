<?php

/**
 * Toggle Featured status of a product from admin.
 */
function recommend_post() {
    if ( current_user_can( 'edit_posts' ) && check_admin_referer( 'recommend-post' ) ) {
        $post_id = isset( $_GET['post_id'] ) && (int) $_GET['post_id'] ? (int) $_GET['post_id'] : '';
		
		if ( empty( $post_id ) ) 
            wp_die('no post ID');
            
        if ( ! add_post_meta( $post_id, 'recommend_post', 1, true ) ) { 
           
           $find = get_post_meta( $post_id, 'recommend_post', true );
           $set_value = $find ? 0 : 1;
           
           update_post_meta( $post_id, 'recommend_post', $set_value );
        }

    }

    wp_safe_redirect( wp_get_referer() ? remove_query_arg( array( 'trashed', 'untrashed', 'deleted', 'ids' ), wp_get_referer() ) : admin_url( 'edit.php?post_type=post' ) );
    exit;
}

add_action( 'wp_ajax_recommend_post', 'recommend_post' );


// ADD NEW COLUMN
function post_order_columns( $defaults ) {
    $defaults['recommend'] = 'Recommend';
    return $defaults;
}
 
// SHOW THE FEATURED IMAGE
function render_post_columns( $column ) {
    global $post;
    if ($column == 'recommend') {
        $url = wp_nonce_url( admin_url( 'admin-ajax.php?action=recommend_post&post_id=' . $post->ID ), 'recommend-post' );
        $find = get_post_meta( $post->ID, 'recommend_post', true );
        $set_value = $find ? 'style="fill: #ffd055;"' : 'style="fill-rule:nonzero;"';
        echo '<style>.star-rating { display: inline-block; outline: 0!important;} .star-rating:hover svg polygon { fill: #ffd055; }</style>';
        echo '<a href="' . esc_url( $url ) . '" aria-label="' . __( 'Toggle recommend status', '_s' ) . '" class="star-rating">';
        printf( '<svg height="25" width="23">
    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" %s/></svg>', $set_value);
         echo '</a>';
    }
}

add_filter('manage_post_posts_columns', 'post_order_columns');
add_action('manage_post_posts_custom_column', 'render_post_columns', 10, 2);

