<?php

function get_svg( $type = '' ) {
	
	$svgs = array(
		
        // Icons
        
        'work' => '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 510 510"><path d="M459 114.75H357v-51l-51-51H204l-51 51v51H51c-28.05 0-51 22.95-51 51v280.5c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51v-280.5c0-28.05-22.95-51-51-51zm-153 0H204v-51h102v51z" fill="#FFF"/></svg>',
        
        'a-broad' => '<svg xmlns="http://www.w3.org/2000/svg" width="31" height="27" viewBox="0 0 31 27"><path fill="#FFF" fill-rule="evenodd" d="M9.972 15.99c-2.284 1.14-4.463 2.222-7.222 3.025v-5.35c0-.416.206-.806.55-1.04l2.06-1.4c.177-.12.495-.22.708-.22h3.308V9.06H13.1v1.948h2.852c.462 0 .838.376.838.84v1.157c-2.623.896-4.736 1.95-6.818 2.987zm-.596-8.857v1.01H13.1v-1.01c0-.518-.42-.938-.94-.938h-1.846c-.518 0-.938.42-.938.938zM7.214 4.185c.268 0 .523-.055.755-.154.262.365.687.605 1.17.605.16 0 .308-.032.45-.078-.002.026-.008.05-.008.078 0 .496.402.898.898.898s.898-.402.898-.898-.402-.898-.898-.898c.07-.17.11-.356.11-.55 0-.8-.65-1.45-1.45-1.45-.026 0-.05.007-.077.01C8.838.93 8.1.33 7.213.33c-1.063 0-1.926.864-1.926 1.928s.863 1.927 1.927 1.927zm18.86 18.86c-.187.283-.192.648-.004.93l1.11 1.664c.407.606-.066 1.413-.793 1.357l-24.69-1.94c-.672-.052-1.234-.524-1.405-1.176C.142 23.31 0 22.604 0 21.978c0-1.29.518-1.53 1.578-1.783 9.477-2.26 12.084-7.712 27.897-8.604.41-.024.74.335.686.743-.467 3.47-2.123 7.72-4.086 10.71zm-1.207-4.075c0-.23-.188-.42-.42-.42-.23 0-.418.19-.418.42 0 .648-.434 1.19-1.022 1.37v-2.89c.315-.155.533-.477.533-.852 0-.528-.427-.956-.954-.956-.528 0-.956.428-.956.956 0 .377.22.7.54.856v2.887c-.59-.18-1.022-.722-1.022-1.37 0-.23-.187-.42-.42-.42-.23 0-.418.19-.418.42 0 1.257 1.022 2.28 2.278 2.28 1.257 0 2.28-1.023 2.28-2.28z"/></svg>',
        
        'body-talk' => '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 485.213 485.212"><g fill="#FFF"><path d="M224.274 240.756c-41.43-8.485-72.646-45.15-72.646-89.127 0-33.303 18.094-62.1 44.778-77.96 8.5 18.316 25.856 37.03 49.753 50.848 31.33 18.078 64.557 22.535 86.118 13.903.653 4.355 1.307 8.68 1.307 13.21 0 43.977-31.162 80.642-72.62 89.126 58.223-8.9 102.942-58.74 102.942-119.452C363.907 54.314 309.597 0 242.607 0c-66.962 0-121.303 54.315-121.303 121.304 0 60.712 44.776 110.55 102.97 119.452zM333.586 272.93h-15.163c0 41.878-33.943 75.817-75.816 75.817-41.875 0-75.812-33.94-75.812-75.817H151.63c-50.228 0-90.98 40.726-90.98 90.976v90.98c0 16.764 13.566 30.326 30.328 30.326h303.258c16.76 0 30.326-13.562 30.326-30.326v-90.98c0-50.25-40.693-90.976-90.976-90.976z"/></g></svg>',
        
        
        'bra-burners' => '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 611.999 611.999"><path fill="#FFF" d="M216.02 611.195c5.978 3.178 12.284-3.704 8.624-9.4-19.866-30.92-38.678-82.947-8.706-149.952 49.982-111.737 80.396-169.61 80.396-169.61s16.177 67.537 60.03 127.586c42.204 57.792 65.305 130.477 28.063 191.028-3.495 5.683 2.668 12.388 8.607 9.35 46.1-23.583 97.806-70.886 103.64-165.018 2.15-28.764-1.075-69.034-17.206-119.85-20.74-64.407-46.24-94.46-60.992-107.366-4.413-3.86-11.276-.44-10.914 5.413 4.3 69.494-21.845 87.13-36.726 47.386-5.943-15.874-9.41-43.33-9.41-76.766 0-55.665-16.15-112.967-51.754-159.53-9.26-12.11-20.093-23.425-32.523-33.074-4.5-3.494-11.024.018-10.612 5.7 2.734 37.736.257 145.885-94.624 275.09-86.03 119.85-52.693 211.895-40.864 236.825 22.616 47.76 54.162 75.806 84.97 92.187z"/></svg>',
        
        'mamma-mia' => '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 31.793 31.794"><g fill="#FFF"><path d="M16.21 8.913c2.38 0 4.31-1.996 4.31-4.454 0-2.464-1.93-4.46-4.31-4.46s-4.313 1.996-4.313 4.46c0 2.457 1.932 4.453 4.314 4.453zM23.855 12.692c-.214-.65-1.436-2.62-4.752-2.64l-6.49.018c-3.22-.18-4.505 1.722-4.706 2.565 0 0-2.174 6.94-1.8 8.55.23.997 1.962 2.218 3.806 3.126l-2.456 7.484h17.318l-2.39-7.745c1.647-.872 3.093-1.96 3.302-2.866.378-1.627-1.832-8.492-1.832-8.492zm-10.548 7.65c-.3.133-.634.21-.983.21-1.354 0-2.45-1.114-2.45-2.487s1.097-2.486 2.45-2.486c1.33 0 2.42 1.075 2.457 2.417.423-.303.855-.445 1.18-.504v.007c.486-.093.864 0 .864 0 1.634.362 5.245 1.964 5.245 1.964s-1.94 2.4-5.46 2.385c-.09 0-.18-.003-.266-.007-.325-.008-.616-.03-.878-.06-1.662-.197-2.138-.817-2.16-1.442z"/></g></svg>',
        
        'now-hot' => '<svg width="26" height="21" viewBox="0 0 26 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Current Affairs Icon</title><defs><path id="a" d="M12.83.2H.06V21h25.542V.2z"/></defs><g fill="none" fill-rule="evenodd"><g><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path d="M22.398 3.4V.2H0v17.602s0 3.2 3.2 3.2h20s2.402-.052 2.402-3.2V3.4h-3.204zm-19.2 16c-1.596 0-1.596-1.598-1.596-1.598v-16h19.2v16c0 .734.225 1.246.538 1.597H3.2z" fill="#FFF" mask="url(#b)"/></g><path fill="#FFF" d="M3.2 6.6h16V5h-16M12 16.2h5.602v-1.602H12M12 13h7.2v-1.6H12M12 9.802h7.2V8.2H12M3.2 16.2h7.198v-8h-7.2"/></g></svg>',
        
        
        'sex-relationships' => '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="#FFF" d="M504.485 103.21c4.15 0 7.515-3.365 7.515-7.516V71.648c0-21.823-17.755-39.577-39.577-39.577H191.875c-21.823 0-39.577 17.756-39.577 39.578v34.975C65.904 119.928 0 186.863 0 267.196c0 26.235 7.197 52.308 20.812 75.4 12.104 20.53 29.287 38.785 49.924 53.092l-30.103 73.908c-1.108 2.722-.494 5.928 1.544 8.045 2.335 2.426 6.112 2.997 9.06 1.365l94.453-52.342c12.495 2.337 25.32 3.52 38.17 3.52 66.38 0 124.65-31.345 156.978-78.215l111.22 78.508c2.845 2.007 6.8 1.764 9.38-.572 2.187-1.98 3.016-5.144 2.083-7.944L440.1 351.695h32.324c21.823 0 39.577-17.755 39.577-39.577v-180.02c0-4.15-3.365-7.514-7.516-7.514-4.15 0-7.515 3.364-7.515 7.515v180.018c0 13.536-11.012 24.548-24.55 24.548h-42.75c-5.04 0-8.725 5.102-7.128 9.89l19.48 58.44-93.24-65.817c12.113-21.722 18.935-46.16 18.935-71.985 0-89.87-82.478-162.984-183.86-162.984-5.572 0-11.084.234-16.53.667v-33.23c0-13.536 11.01-24.548 24.547-24.548h280.548c13.536 0 24.548 11.01 24.548 24.547v24.047c0 4.15 3.364 7.515 7.515 7.515zM183.86 415.15c-12.795 0-25.56-1.264-37.938-3.756-1.748-.353-3.566-.07-5.126.794l-78.204 43.338 24.376-59.846c1.364-3.35.148-7.197-2.894-9.154C40.84 358.706 15.03 314.096 15.03 267.196c0-72.13 59.208-132.362 137.267-145.35v190.272c0 21.823 17.755 39.577 39.577 39.577h130.49c-30.538 38.33-81.232 63.457-138.505 63.457zm0-295.91c93.092 0 168.83 66.372 168.83 147.954 0 25.093-7.175 48.743-19.807 69.47H191.875c-13.536 0-24.548-11.01-24.548-24.548V119.95c5.44-.465 10.954-.71 16.532-.71z"/><path fill="#FFF" d="M309.927 200.247c-11.662-10.86-32.742-12.327-55.076 7.145-22.333-19.473-43.414-18.008-55.074-7.145-11.74 10.936-14.4 32.452 3.23 52.414 16.953 19.195 45.537 45.64 46.745 46.757 2.842 2.626 7.357 2.625 10.2 0 1.207-1.116 29.79-27.562 46.744-46.756 17.633-19.96 14.972-41.476 3.233-52.413zm-14.495 42.465c-12.265 13.886-31.484 32.312-40.58 40.893-9.096-8.58-28.31-27-40.58-40.893-11.27-12.76-10.67-25.49-4.25-31.467 2.626-2.446 6.268-3.876 10.66-3.876 7.75 0 17.84 4.45 28.81 15.618 2.902 2.956 7.818 2.956 10.72 0 17.19-17.498 32.21-18.505 39.47-11.743 6.418 5.98 7.02 18.707-4.25 31.467z"/></svg>',
        
        
        'unlady-like' => '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 416.768 416.768"><path fill="#FFF" d="M207.64 0c-2.56 0-5.12 2.048-5.12 5.12l-.513 26.112c0 3.072 2.56 5.12 5.12 5.12 3.072 0 5.12-2.048 5.12-5.12l.512-26.112c0-3.072-2.05-5.12-5.12-5.12zM247.575 23.552c-2.048-2.048-5.12-2.048-7.168 0l-18.944 17.92c-2.048 2.048-2.048 5.12 0 7.168 1.024 1.024 2.048 1.536 3.584 1.536 1.024 0 2.56-.512 3.584-1.536l18.945-17.92c2.048-2.048 2.048-5.12 0-7.168zM193.815 41.472l-18.944-17.92c-2.047-2.048-5.12-2.048-7.167 0-2.048 2.048-2.048 5.12 0 7.168l18.944 17.92c1.024 1.024 2.048 1.536 3.584 1.536s2.56-.512 3.585-1.536c2.048-2.048 2.048-5.12 0-7.168zM390.423 392.704c-.512-2.56-3.584-4.608-6.144-3.584l-32.257 7.68-28.16-115.712c28.672-12.8 38.4-70.656 22.016-136.192-5.12-19.968-19.457-68.608-28.16-87.04-1.025-2.048-3.585-3.072-5.633-2.56l-92.16 22.528c-2.56.512-4.096 2.56-4.096 5.12.513 20.48 10.24 70.144 15.36 90.112 15.873 64 50.177 110.08 80.897 110.08h2.048l28.16 115.712-32.256 7.68c-2.56.512-4.61 3.584-3.585 6.144.512 2.56 2.56 4.096 5.12 4.096h1.024l74.24-17.92c2.56-.512 4.607-3.584 3.583-6.144zM226.583 86.016l83.968-20.48c3.585 8.192 7.68 19.968 11.777 32.256l-91.136 21.504c-2.047-12.8-4.095-24.576-4.607-33.28zm14.848 83.968c-2.047-9.216-5.63-24.576-8.703-40.448l92.16-22.016c4.608 15.36 8.704 30.208 10.752 38.912 15.36 62.464 6.655 119.808-18.945 125.952s-60.416-40.448-75.264-102.4z"/><path fill="#FFF" d="M318.23 138.752c-.51-2.56-3.07-4.096-6.143-3.584-2.56.512-4.608 3.584-3.584 6.144 11.264 45.056 9.216 83.456 4.608 94.72-1.023 2.56 0 5.632 2.56 6.656.513.512 1.537.512 2.05.512 2.047 0 4.095-1.024 4.607-3.072 5.632-13.312 7.68-53.248-4.096-101.376zM196.887 77.312l-92.16-22.528c-2.56-.512-4.608.512-5.632 2.56-8.704 18.432-23.04 67.072-28.16 87.04C54.55 210.432 64.79 268.288 92.95 280.576L64.79 396.288l-32.255-7.68c-2.56-.512-5.632 1.024-6.144 3.584-1.023 3.072.513 5.632 3.585 6.656l74.24 17.92h1.024c2.047 0 4.607-1.536 5.12-4.096.51-2.56-1.025-5.632-3.585-6.144l-32.256-7.68 28.16-115.712h2.047c30.72 0 65.024-46.08 80.896-110.592 5.12-19.968 14.848-70.144 15.36-90.112 0-2.56-1.536-4.608-4.096-5.12zm-22.016 93.184c-15.36 61.952-49.663 108.544-75.263 102.4-25.088-6.656-34.304-64-18.944-125.952 2.048-9.216 6.144-24.064 10.752-38.912l92.16 22.016c-3.072 15.872-6.144 31.232-8.704 40.448zm10.753-51.2L94.487 97.792c4.096-12.288 8.192-24.064 11.776-32.256l83.968 20.48c-.51 8.704-2.56 20.48-4.607 33.28z"/><path fill="#FFF" d="M104.727 135.68c-2.56-.512-5.632 1.024-6.144 3.584-11.776 48.128-9.216 88.064-4.096 101.376 1.024 2.048 2.56 3.072 4.608 3.072.512 0 1.536 0 2.048-.512 2.56-1.024 3.584-4.096 2.56-6.656-4.608-11.776-6.656-49.664 4.608-94.72.513-2.56-1.023-5.632-3.583-6.144z"/></svg>',
         
        
        'beaver-talk' => '<svg width="23" height="22" viewBox="0 0 23 22" xmlns="http://www.w3.org/2000/svg"><title>Beaver Talk Icon</title><path d="M21.793 9.928L12.123.266c-.343-.344-.9-.344-1.242 0L1.213 9.928c-.344.343-.344.9 0 1.242l9.67 9.662c.164.165.387.258.62.258.233 0 .457-.093.622-.258l9.67-9.662c.164-.165.256-.388.256-.62 0-.234-.092-.457-.257-.622zM8.933 11.67h-.94v1.455H6.68V7.958H8.93c1.322 0 2.083.65 2.083 1.8 0 1.212-.76 1.913-2.083 1.913zm5.287.414c.266 0 .606-.096.917-.25v-1.337h1.137v2.016c-.554.39-1.426.67-2.15.67-1.573 0-2.762-1.136-2.762-2.64 0-1.5 1.22-2.63 2.85-2.63.77 0 1.582.296 2.114.77l-.74.892c-.376-.347-.9-.56-1.38-.56-.85 0-1.5.663-1.5 1.527 0 .878.658 1.542 1.514 1.542z" fill="#FFF" fill-rule="evenodd"/></svg>',
        
        'menu' => '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="34" viewBox="0 0 38 34"><title>Menu Icon</title><g stroke-width="3" stroke="#252B33" fill="none"><path d="M2 22h34M2 12h34M2 32h27M2 2h27"/></g></svg>',
        
        'search' => '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Search icon</title><defs><path d="M32.56 30.44l-8.09-8.09C26.106 20.256 27 17.698 27 15c0-3.206-1.25-6.22-3.516-8.484C21.22 4.248 18.204 3 15 3c-3.206 0-6.22 1.248-8.484 3.516C4.25 8.78 3 11.794 3 15c0 3.206 1.25 6.22 3.516 8.484C8.78 25.752 11.794 27 15 27c2.698 0 5.256-.894 7.35-2.53l8.09 8.09 2.12-2.12zM15 24c-2.405 0-4.664-.936-6.363-2.636C6.937 19.665 6 17.404 6 15c0-2.403.936-4.664 2.637-6.363C10.337 6.937 12.595 6 15 6c2.404 0 4.663.936 6.363 2.637C23.063 10.337 24 12.597 24 15c0 2.404-.936 4.665-2.637 6.364C19.663 23.064 17.403 24 15 24z" id="a"/></defs><g transform="translate(-3 -3)" fill="none" fill-rule="evenodd"><path d="M0 0h36v36H0z"/><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path d="M0 0h36v36H0z" mask="url(#b)" fill="#0C0033"/></g></svg>',
        
        'video-play' => '<svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69"><title>  play  copy 6</title><desc>  Created with Sketch.</desc><g style="fill:none;opacity:0.8"><g transform="translate(-539 -2336)translate(119 2092)translate(0 104)translate(423 143)"><circle cx="31.5" cy="31.5" r="31.5" style="fill-opacity:0.7;fill:#FB5BA1;stroke-width:5;stroke:#FFF"/><polygon points="49 32 23 45 23 19" fill="#FFF"/></g></g></svg>',
        
		'arrow-circle' => '<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65"><defs><polygon points="0 0.1 0 65 64.9 65 64.9 0.1 0 0.1"/></defs><g fill="none"><g transform="translate(-1253 -1744)translate(122 1744)translate(1131 0)"><mask fill="#ABABAB"><use xlink:href="#path-1"/></mask><path class="circle" fill="#ABABAB" d="M32.5 65C50.4 65 64.9 50.4 64.9 32.5 64.9 14.6 50.4 0.1 32.5 0.1 14.6 0.1 0 14.6 0 32.5 0 50.4 14.6 65 32.5 65ZM32.5 2.7C48.9 2.7 62.3 16.1 62.3 32.5 62.3 49 48.9 62.4 32.5 62.4 16 62.4 2.6 49 2.6 32.5 2.6 16.1 16 2.7 32.5 2.7Z" mask="url(#mask-2)" /><path class="arrow" fill="#ABABAB" d="M36.4 42.6C36.7 42.9 37 43 37.4 43 37.7 43 38.1 42.9 38.3 42.6L48.6 32.9C48.9 32.7 49 32.3 49 32 49 31.7 48.9 31.3 48.6 31.1L38.3 21.4C37.8 20.9 36.9 20.9 36.4 21.4 35.9 21.9 35.9 22.7 36.4 23.2L45.7 32 36.4 40.8C35.9 41.3 35.9 42.1 36.4 42.6Z" /><path class="line" d="M45.6 33L20.4 33" style="stroke-width:3;stroke:#ABABAB"/></g></g></svg>',
		
		'search' => '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 76.652 76.652"><path d="M75.55 68.735L58.19 52.06c4.266-5.283 6.813-11.907 6.813-19.097 0-17.216-14.58-31.22-32.504-31.22C14.58 1.74 0 15.745 0 32.962s14.58 31.223 32.5 31.223c7.73 0 14.835-2.61 20.42-6.954l17.3 16.618c.733.707 1.7 1.06 2.663 1.06.967 0 1.93-.353 2.666-1.06 1.47-1.415 1.47-3.7 0-5.115zM7.535 32.963c0-13.223 11.2-23.98 24.964-23.98 13.768 0 24.968 10.757 24.968 23.98S46.268 56.95 32.5 56.95c-13.764 0-24.964-10.765-24.964-23.987z" fill="#242b33"/></svg>',
        
        'email' => '<svg viewBox="0 0 512 512"><path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"/></svg>',
	
		'facebook' => '<svg viewBox="0 0 512 512"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path></svg>',
		
		'googleplus' => '<svg viewBox="0 0 512 512"><path d="M179.7 237.6L179.7 284.2 256.7 284.2C253.6 304.2 233.4 342.9 179.7 342.9 133.4 342.9 95.6 304.4 95.6 257 95.6 209.6 133.4 171.1 179.7 171.1 206.1 171.1 223.7 182.4 233.8 192.1L270.6 156.6C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257 44 332.2 104.7 393 179.7 393 258 393 310 337.8 310 260.1 310 251.2 309 244.4 307.9 237.6L179.7 237.6 179.7 237.6ZM468 236.7L429.3 236.7 429.3 198 390.7 198 390.7 236.7 352 236.7 352 275.3 390.7 275.3 390.7 314 429.3 314 429.3 275.3 468 275.3"></path></svg>',
		
		'linkedin' => '<svg viewBox="0 0 512 512"><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path></svg>',
		
		'twitter' => '<svg viewBox="0 0 512 512"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path></svg>',
		
		'vimeo' => '<svg viewBox="0 0 512 512"><path d="M420.1 197.9c-1.5 33.6-25 79.5-70.3 137.8 -46.9 60.9-86.5 91.4-118.9 91.4 -20.1 0-37.1-18.5-51-55.6 -9.3-34-18.5-68-27.8-102 -10.3-37.1-21.4-55.7-33.2-55.7 -2.6 0-11.6 5.4-27 16.2L75.7 209.1c17-14.9 33.8-29.9 50.3-44.9 22.7-19.6 39.7-29.9 51.1-31 26.8-2.6 43.3 15.8 49.5 55 6.7 42.4 11.3 68.7 13.9 79 7.7 35.1 16.2 52.7 25.5 52.7 7.2 0 18-11.4 32.5-34.2 14.4-22.8 22.2-40.1 23.2-52.1 2.1-19.7-5.7-29.5-23.2-29.5 -8.3 0-16.8 1.9-25.5 5.7 16.9-55.5 49.3-82.4 97.1-80.9C405.5 130 422.2 153 420.1 197.9z"></path></svg>',
        
        'youtube' => '<svg viewBox="0 0 512 512"><path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z"/></svg>',
        
      'instagram' => '<svg viewBox="0 0 512 512"><g><path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"/><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"/><circle cx="351.5" cy="160.5" r="21.5"/></g></svg>'  
 
	
	);
	
	if( isset( $svgs[$type] ) ) {
		return $svgs[$type];	
	}
	
}