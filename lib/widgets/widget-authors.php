<?php

if ( ! class_exists('Author_Widget') ) {
    
    class Author_Widget extends WP_Widget {
    
        const WIDGET_DOMAIN = '_s';
        const WIDGET_ID = 'authors';
        const WIDGET_NAME = 'Syndrome Blog - Authors';
        const WIDGET_DESCRIPTION = 'Custom widget to display list of authors.';
        const WIDGET_TITLE = 'Other Authors';
        
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
                
            $user_args = array(
                'orderby' => 'display_name', 
                'has_published_posts' => true,
                'order'   => 'ASC',      
            );
            
            // Exclude current author if we're on the Author archive
            if( is_author() ) {
                $user_id = get_queried_object_id();
                
                $user_args['exclude'] = array( $user_id );
            }
            
            $user_query = new WP_User_Query( $user_args );
            
            if ( empty( $user_query->results ) )
                return;
                 
            // before and after widget arguments are defined by themes
            echo $args['before_widget'];
            
            echo $title;
            
            echo '<div class="posts">';
            
            foreach ( $user_query->results as $user ) :
                
                $prefix = 'hero_';
                $user_id = $user->ID;
                
                $avatar         = sprintf( '<a href="%s">%s</a>', get_author_posts_url( $user_id ), get_avatar( $user_id, 80 ) );
                
                $acf_user_id    = sprintf( 'user_%s', $user_id );
                $description	= get_field( sprintf( '%sdescription', $prefix ), $acf_user_id );
                if( !empty( $description ) ) {
                    $description = wpautop( $description );
                }
                
                $display_name   = sprintf( '<a href="%s"><h4>%s</h4></a>%s', 
                                           get_author_posts_url( $user_id ), 
                                           get_the_author_meta('display_name', $user_id ),
                                           $description
                                            );
     
                printf( '<div class="post">%s<div>%s</div></div>', 
                                 $avatar, 
                                 $display_name );
                  
      
            endforeach;
            
            echo '</div>';
    
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
            
            ?>
            <p>
              <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?></label> 
              <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $title; ?>" />
            </p>
             <p>
            <?php
        
        }
        
        // Updating widget replacing old instances with new
        public function update( $new_instance, $old_instance ) {
            $instance = array();
            $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
            return $instance;
        }
        
    } // Class widget ends here
    
    // Register and load the widget
    add_action( 'widgets_init', create_function( '', "register_widget('Author_Widget');" ) );

}