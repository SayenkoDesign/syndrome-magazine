<?php

/*
Modal - Search
		
*/
printf( '<div class="large reveal modal-search" id="modal-search" data-reveal data-close-on-click="false">
 	    <div class="modal-content">%s<button class="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button></div></div>',  get_search_form( false ) );