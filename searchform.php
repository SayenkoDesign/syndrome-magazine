<?php
/**
 * The template for displaying search forms in _s
 *
 * @package _s
 * @since _s 1.0
 */
 
?>
<div id="searchform" class="search-form">
	<form method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" role="search">
		<?php
        wp_dropdown_categories( array( 'orderby' => 'title', 'exclude' => '1', 'hide_empty' => false, 'show_option_all' => __( 'Select Topic', '_s' ) ) );
        ?>
        <label for="s" class="screen-reader-text"></label>
  		<input type="search" class="search-field" name="s" value="<?php echo esc_attr( get_search_query() ); ?>" id="s" placeholder="<?php echo esc_attr_x( 'Search Articles', 'placeholder', '_s' ); ?>" />
		
         <input type="hidden" name="post_type" value="post" />
		<button class="search-submit"><?php echo get_svg( 'search' );?><span class="screen-reader-text"><?php echo esc_attr_x( 'Search', 'submit button', '_s' ); ?></span></button>
<input type="hidden" name="post_type" value="post">
	</form>
</div>