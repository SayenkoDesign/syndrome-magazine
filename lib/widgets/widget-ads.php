<?php

if ( ! class_exists('Ads_Widget') ) {
    
    class Ads_Widget extends WP_Widget {
    
        const WIDGET_DOMAIN = '_s';
        const WIDGET_ID = 'ads';
        const WIDGET_NAME = 'Syndrome Blog - Ads';
        const WIDGET_DESCRIPTION = 'Custom widget to display ads.';
        const WIDGET_TITLE = '';
        
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
                
                 
            // before and after widget arguments are defined by themes
            echo $args['before_widget'];
            
            echo $title;
            
            // arguments, adjust as needed
            $query_args = array(
                'post_type'      => 'ads',
                'posts_per_page' => 1,
                'post_status'    => 'publish',
                'p' => $instance['ad_id']
            );
        
            // Use $loop, a custom variable we made up, so it doesn't overwrite anything
            $loop = new WP_Query( $query_args );
        
            // have_posts() is a wrapper function for $wp_query->have_posts(). Since we
            // don't want to use $wp_query, use our custom variable instead.
            if ( $loop->have_posts() ) : 
                
                while ( $loop->have_posts() ) : $loop->the_post(); 
                
                echo _s_get_ad_block( get_the_ID() );
                
                endwhile;
            
            else:
               
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
            
            ?>
            <p>
              <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?></label> 
              <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $title; ?>" />
            </p>
             
            <p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'ad_id' ) ); ?>"><?php esc_attr_e( 'Select Ad', '_s' ); ?>:</label>
				
                <?php
                echo form_dropdown( $this->get_field_name( 'ad_id' ) , 
                                    $this->list_ads() , 
                                    $instance['ad_id'], 
                                    array( 'id' => esc_attr( $this->get_field_id( 'ad_id' ) ) ) );
                ?>
			</p> 
             
            <?php
        
        }
        
        // Updating widget replacing old instances with new
        public function update( $new_instance, $old_instance ) {
            $new_instance = wp_parse_args( $new_instance, array(
                'title' => '',
                'ad_id' => 0,
            ) );
            
            $instance = $old_instance;

            $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
            $instance['ad_id'] = ( ! empty( $new_instance['ad_id'] ) ) ? $new_instance['ad_id'] : '';
              
            return $instance;
        }
        
        
        
        public function list_ads() {
         
            // arguments, adjust as needed
            $query_args = array(
                'post_type'      => 'ads',
                'posts_per_page' => -1,
                'post_status'    => 'publish',
             );
        
            // Use $loop, a custom variable we made up, so it doesn't overwrite anything
            $loop = new WP_Query( $query_args );
            
            $options = [];
        
            // have_posts() is a wrapper function for $wp_query->have_posts(). Since we
            // don't want to use $wp_query, use our custom variable instead.
            if ( $loop->have_posts() ) : 
            
                 while ( $loop->have_posts() ) : $loop->the_post(); 
                
                $options[ get_the_ID() ] = get_the_title();
                
                endwhile;
            
            else:
               
            endif;
        
            // We only need to reset the $post variable. If we overwrote $wp_query,
            // we'd need to use wp_reset_query() which does both.
            wp_reset_postdata();
            
            return $options;
            
        }
        
        
        
    } // Class widget ends here
    
    // Register and load the widget
    add_action( 'widgets_init', create_function( '', "register_widget('Ads_Widget');" ) );

}