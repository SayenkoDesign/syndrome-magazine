<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package _s
 */

get_header(); ?>

<?php
// Hero


    
    
section_hero();
function section_hero() {
    global $post;
    
    $args = array();
    
    $args['attr'] = array( 'id' => 'hero', 'class' => 'section hero' );
    
    $prefix = 'hero_404';
    $prefix = set_field_prefix( $prefix );

    $heading = get_field( sprintf( '%stitle', $prefix ), 'option' );
    $description	= get_field( sprintf( '%sdescription', $prefix ), 'option' );
    
    $background_image = get_field( sprintf( '%sbackground_image', $prefix ), 'option' );

    $style = '';
    $content = '';
     
    if( !empty( $background_image ) ) {
        $attachment_id = $background_image;
        $size = 'hero';
        $background = wp_get_attachment_image_src( $attachment_id, $size );
        $args['attr']['style'] = sprintf( 'background-image: url(%s);', $background[0] );
        $args['attr']['class'] .= ' background-image';
    }
    
    $content = '';
          
    if( !empty( $heading ) ) {
        $content .= _s_get_heading( $heading, 'h1' );
    }
    
    if( !empty( $description ) ) {
        $description = _s_wrap_text( $description, "\n" );
        $content .= _s_get_heading( $description, 'h4' );
    }
    
    echo kr_module_hero( $args, $content );
        
}

?>

<div id="primary" class="content-area">

	<main id="main" class="site-main" role="main">
	
		<section class="section default">
			<div class="column row">
	
				<div class="entry-content">
					<p><?php echo get_field( 'content_404', 'option' ); ?></p>
				</div><!-- .page-content -->
				
				</div>
		</section>

	</main><!-- #main -->

</div><!-- #primary -->

	

<?php
get_footer();
