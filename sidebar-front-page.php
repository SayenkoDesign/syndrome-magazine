<?php
/**
 * The sidebar containing the main widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */

if ( ! is_active_sidebar( 'front-page' ) ) {
	return;
} ?>

<div id="secondary" class="widget-area" role="complementary">
	<?php dynamic_sidebar( 'front-page' ); ?>
</div><!-- #secondary -->
