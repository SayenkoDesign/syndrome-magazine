<?php
 
/**
 * Create new CPT - Ads
 */
 
class CPT_ADS extends CPT_Core {

    const POST_TYPE = 'ads';
	const TEXTDOMAIN = '_s';
	
	/**
     * Register Custom Post Types. See documentation in CPT_Core, and in wp-includes/post.php
     */
    public function __construct() {

 		
		// Register this cpt
        // First parameter should be an array with Singular, Plural, and Registered name
        parent::__construct(
        
        	array(
				__( 'Ad', self::TEXTDOMAIN ), // Singular
				__( 'Ads', self::TEXTDOMAIN ), // Plural
				self::POST_TYPE // Registered name/slug
			),
			array( 
				'public'              => true,
				'publicly_queryable'  => true,
				'show_ui'             => true,
				'query_var'           => true,
				'capability_type'     => 'post',
				'has_archive'         => false,
				'hierarchical'        => false,
				'show_ui'             => true,
				'show_in_menu'        => true,
				'show_in_nav_menus'   => false,
				'exclude_from_search' => true,
				'rewrite'             => false,
				'supports' => array( 'title', 'editor', 'revisions' ),
				 )

        );
		

     }
	 
     
     /**
	 * Registers admin columns to display. Hooked in via CPT_Core.
	 * @since  0.1.0
	 * @param  array  $columns Array of registered column names/labels
	 * @return array           Modified array
	 */
	public function columns( $columns ) {
		$new_column = array(
			'shortcode' =>  __( 'Shortcode', '_s' ),
		);
		return array_slice( $columns, 0, 2, true ) + $new_column + array_slice( $columns, 1, null, true );
	}

	/**
	 * Handles admin column display. Hooked in via CPT_Core.
	 * @since  0.1.0
	 * @param  array  $column Array of registered column names
	 */
	public function columns_display( $column, $post_id ) {
		switch ( $column ) {
			case 'shortcode':
				printf('[ad-block id="%s"]', $post_id );
				break;
		}
	}

 
}

new CPT_ADS();