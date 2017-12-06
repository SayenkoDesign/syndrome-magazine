<?php
/**
 * Change sidebar parameters
 *
 * @param $instance
 * @param $widget
 * @param $args
 *
 * @return bool
 */
function _s_widget_display_callback($instance, $widget, $args) {

  if ( strpos( $args['id'], 'cs-' ) === FALSE ) {
	  return $instance;
  }

  $args['before_widget'] = sprintf( '<aside class="widget %s">', $widget->widget_options['classname'] );
  $args['after_widget'] = '</aside>';
  $args['before_title'] = '<h3 class="widget-title">';
  $args['after_title'] = '</h3>';

  $widget->widget($args, $instance);

  return false;
}

//add_filter( 'widget_display_callback', '_s_widget_display_callback', 10, 3 );


/**
 * Class Walker_Categories_Template
 */
class Walker_Categories_Template extends Walker_Category {

	/**
	 * @param       $output
	 * @param       $category
	 * @param int   $depth
	 * @param array $args
	 * @param int   $id
	 */
	function start_el( &$output, $category, $depth = 0, $args = array(), $id = 0 ) {
        $output .= sprintf( '<li><a href="%s" title="%s"><span>%s</span></a></li>', 
        esc_url( get_category_link( $category->term_id ) ),
        esc_attr( $category->name ), 
        esc_attr( $category->name ) );
    }

	/**
	 * @param       $output
	 * @param       $page
	 * @param int   $depth
	 * @param array $args
	 */
	function end_el( &$output, $page, $depth = 0, $args = array() ) {
        $output .= "</a></li>\n";  
    }  
}


/**
 * Add span to anchors inside the categories widget
 *
 * @param $cat_args
 *
 * @return mixed
 */
function sb_categories_add_span( $cat_args ) {
    $cat_args['walker'] = new Walker_Categories_Template;
    return $cat_args;
}

add_filter( 'widget_categories_args', 'sb_categories_add_span' );