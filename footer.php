<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */
?>


<?php
if( is_page() ) {
    $ad_block = get_field( 'global_footer_ad', 'options' );
    echo _s_get_ad_block( $ad_block, 'footer-ad' );
}
?>


</div><!-- #content -->


<?php
get_template_part( 'template-parts/section', 'social-share-newsletter' );
?>

<?php 
if ( is_active_sidebar( 'footer' ) ) : 
    
    $attr = array( 'id' => 'footer-newsletter', 'class' => 'section footer-newsletter' );
                    
    _s_section_open( $attr );
    
        print( '<div class="column row">' );

        dynamic_sidebar( 'footer' );
        
        echo '</div>';

    _s_section_close();	
    
    
endif; 
?>


<?php
 // Footer functions located inside: theme.php
?>

<div class="footer-widgets">
    <div class="wrap">
    
        <div class="row expanded">
            
            <div class="small-12 large-4 large-push-4 columns">
                <?php
                $logo = sprintf('<img src="%s" width="219" height="64" alt="%s"/>', THEME_IMG .'/logo-white.png', get_bloginfo( 'name' ) );
				$site_url = site_url();
				printf('<div class="widget footer-logo"><a href="%s" title="%s">%s</a></div>', $site_url, get_bloginfo( 'name' ), $logo );
                ?>
            </div>
            
            <div class="small-12 large-4 large-pull-4 columns">
                
                <div class="widget">
                <?php
                // social icons
                
                echo _s_get_social_icons();
                ?>
                </div>
            </div>
            
            
            
            <div class="small-12 large-4 columns">
                
                <div class="widget">
                <?php
                $args = array(
                        'theme_location' => 'footer',
                        'menu' => 'Footer Menu',
                        'container' => false,
                        'container_class' => '',
                        'container_id' => '',
                        'menu_id'        => 'footer-menu',
                        'menu_class'     => 'menu',
                        'before' => '',
                        'after' => '',
                        'link_before' => '',
                        'link_after' => '',
                        'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                        'depth' => 0
                    );
                    wp_nav_menu($args);			
                ?>
                </div>
            </div>
        
        </div>
	
	</div>
</div>

<footer id="colophon" class="site-footer" role="contentinfo">
	
    <div class="wrap">
    
    <div class="column row">
    
        <?php
        footer_copyright();
        function footer_copyright() {
            $menu = '';
          
            if ( has_nav_menu( 'copyright' ) ) {
                $args = array(
                    'theme_location' => 'copyright',
                    'container' => false,
                    'container_class' => '',
                    'container_id' => '',
                    'menu_id'        => 'copyright-menu',
                    'menu_class'     => 'menu',
                    'before' => '',
                    'after' => '',
                    'link_before' => '',
                    'link_after' => '',
                    'depth' => 0,
                    'echo' => false
                );
                $menu = sprintf( '<span class="links">%s</span>', strip_tags( wp_nav_menu($args), '<a>' ) );	
            }
            
            $credit = sprintf( '<span><a href="%1$s">Seattle Web Design</a> by <a href="%1$s">Sayenko Design.</a></span>', 'https://www.sayenkodesign.com/' );
            
            printf( '<p>&copy; %s Syndrome Magazine. All rights reserved. %s %s</p>', date( 'Y' ), $credit, $menu );
         
        }
        ?>
         
       </div>
    
    </div>
  
 </footer><!-- #colophon -->

</div>
<?php
// Load modals

get_template_part( 'template-parts/modal', 'menu' );

get_template_part( 'template-parts/modal', 'search' );

get_template_part( 'template-parts/modal', 'contact' );
?>


<?php wp_footer(); ?>
</body>
</html>
