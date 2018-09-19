<?php

/*
Modal - Menu
		
*/

modal_menu();
function modal_menu() {
    ?>
    <div class="reveal modal-menu" id="modal-menu" data-reveal>
 	    <div class="modal-content">
            <div class="site-title">
               <button class="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
               <?php
                $logo = sprintf('<img src="%s" alt="%s"/>', THEME_IMG .'/logo.png', get_bloginfo( 'name' ) );
                $site_url = site_url();
                printf('<a href="%s" title="%s">%s</a>', $site_url, get_bloginfo( 'name' ), $logo );
                ?>
            </div>
            
            <?php
            
            echo _s_get_social_icons();
            
            printf( '<div class="donate"><a href="%s"><span>Donate</span></a></div>', get_permalink( 1159 ) );
            
            get_search_form();
            ?>
            
          <nav class="nav-primary" role="navigation">
                  <?php
                    
                    $args = array(
                        'theme_location' => 'primary',
                        'menu' => 'Primary Menu',
                        'container' => 'false',
                        'container_class' => '',
                        'container_id' => '',
                        'menu_id'        => 'primary-menu',
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
          </nav>
          
          <nav class="nav-secondary" role="navigation">     
                   <?php 
                    $args = array(
                        'theme_location' => 'secondary',
                        'menu' => 'Secondary Menu',
                        'container' => 'false',
                        'container_class' => '',
                        'container_id' => '',
                        'menu_id'        => 'secondary-menu',
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
                
         </nav><!-- .nav-secondary -->	
         
         <?php if ( is_active_sidebar( 'modal' ) ) : ?>
                <?php dynamic_sidebar( 'modal' ); ?>
        <?php endif; ?>
      
   </div>
</div>
<?php
       
}