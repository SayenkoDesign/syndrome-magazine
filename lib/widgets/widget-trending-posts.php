<?php
// Creating the widget 
class TRENDING_POSTS_WIDGET extends WP_Widget {

	const WIDGET_DOMAIN = '_s';
	const WIDGET_ID = 'trending-posts';
	const WIDGET_NAME = 'Syndrome Blog - Trending Posts';
	const WIDGET_DESCRIPTION = 'Custom widget for trending posts.';
	const WIDGET_TITLE = 'Trending';
    const POSTS_PER_PAGE = 4;
	
	function __construct() {
		
		parent::__construct(
			// Base ID of your widget
			self::WIDGET_ID, 
		
			// Widget name will appear in UI
			__( self::WIDGET_NAME, self::WIDGET_DOMAIN), 
		
			// Widget description
			array( 'description' => __( self::WIDGET_DESCRIPTION, self::WIDGET_DOMAIN ), ) 
		);
	}

	// Creating widget front-end
	// This is where the action happens
	public function widget( $args, $instance ) {
		
		$title = apply_filters( 'widget_title', $instance['title'] );
		
		if ( ! empty( $title ) )
			$title =  $args['before_title'] . $title . $args['after_title'];
        
        $post_count = self::POSTS_PER_PAGE;
        
        if( isset( $instance['post_count'] ) &&  $instance['post_count'] > 0 ) {
            $post_count = $instance['post_count'];
        }
        
        // before and after widget arguments are defined by themes
		echo $args['before_widget'];
		
		echo $title;
           
        
        // arguments, adjust as needed
        $query_args = array(
            'post_type'      => 'post',
            'posts_per_page' => $post_count,
            'post_status'    => 'publish',
            'meta_key' => 'views',
            'orderby'  => 'meta_value_num comment_count date',
        );
    
        // Use $loop, a custom variable we made up, so it doesn't overwrite anything
        $loop = new WP_Query( $query_args );
    
        // have_posts() is a wrapper function for $wp_query->have_posts(). Since we
        // don't want to use $wp_query, use our custom variable instead.
        if ( $loop->have_posts() ) : 
            echo '<div class="posts">';
            while ( $loop->have_posts() ) : $loop->the_post(); 
    
                printf( '<div class="post">%s<h5><a href="%s">%s</a></h5></div>', 
                         sprintf( '<a href="%s">%s</a>', get_permalink(), get_the_post_thumbnail( get_the_ID(), 'widget-thumbnail' ) ), 
                         get_permalink(),  
                         get_the_title() );
            endwhile;
            echo '</div>';
         
         else:
         
            print( '<p>No posts available</p>' );
         
         endif;
    
        // We only need to reset the $post variable. If we overwrote $wp_query,
        // we'd need to use wp_reset_query() which does both.
        wp_reset_postdata();
        
		// After Widget
		echo $args['after_widget'];
	}
    
			
	// Widget Backend 
	public function form( $instance ) {
		
		if ( isset( $instance[ 'title' ] ) ) {
				$title = esc_attr( $instance[ 'title' ] );
		}
		else {
			$title = __( self::WIDGET_TITLE, self::WIDGET_DOMAIN );
		}
        
        if ( isset( $instance[ 'post_count' ] ) ) {
				$post_count = absint( $instance[ 'post_count' ] );
		}
		
 		?>
		<p>
          <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?></label> 
          <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $title; ?>" />
        </p>
        <p>
          <label for="<?php echo $this->get_field_id('post_count'); ?>"><?php _e('Number of posts to show:'); ?></label>
          <input class="" id="<?php echo $this->get_field_id('post_count'); ?>" name="<?php echo $this->get_field_name('post_count'); ?>" type="text" value="<?php echo $post_count; ?>" />
		 </p>
		<?php
	
	}
	
	// Updating widget replacing old instances with new
	public function update( $new_instance, $old_instance ) {
		$instance = array();
		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
        $instance['post_count'] = ( ! empty( $new_instance['post_count'] ) ) ? absint( $new_instance['post_count'] ) : self::POSTS_PER_PAGE;
		return $instance;
	}
	
} // Class widget ends here

// Register and load the widget
add_action( 'widgets_init', create_function( '', "register_widget('TRENDING_POSTS_WIDGET');" ) );