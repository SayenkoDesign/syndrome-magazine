<?php
/**
 * The sidebar containing the main widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */

if ( ! is_active_sidebar( 'author' ) ) {
	return;
} ?>

<div id="secondary" class="widget-area" role="complementary">
	<?php dynamic_sidebar( 'author' ); ?>
</div><!-- #secondary -->
