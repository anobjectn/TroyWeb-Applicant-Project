<?php
/*------------------------------------
* Theme: Plate by studio.bio 
* File: Main functions file
* Author: Joshua Michaels
* URI: https://studio.bio/themes/plate
*------------------------------------
*
*
*/


/**
 * We use WordPress's init hook to make sure
 * our blocks are registered early in the loading
 * process.
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 */
function twa_register_acf_blocks() {
	/**
	 * We register our block's with WordPress's handy
	 * register_block_type();
	 *
	 * @link https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	// register_block_type( __DIR__ . '/blocks/hero' );
    
}
// Here we call our register_acf_block() function on init.
add_action( 'init', 'twa_register_acf_blocks' );



// INCLUDE CFDUMP -- super helpful in debugging
include_once( 'library/functions/cfdump/cfdump.php' );

/* Plate development and debug functions
(not required but helper stuff for debugging and development)
*/
// require_once( 'library/plate.php' );

/* WordPress Admin functions (for customizing the WP Admin)
(also not required so comment it out if you don't need it)
*/
require_once( 'library/admin.php' );

// WordPress Customizer functions and enqueues
// include( get_template_directory_uri() . '/library/customizer.php' );

require_once( 'library/customizer.php' );



/************************************
 * PLATE LUNCH
 * 
 * Let's get everything on the plate. Mmmmmmmm.
 * 
 ************************************/

add_action( 'after_setup_theme', 'plate_lunch' );

function plate_lunch() {

    // editor style
    add_editor_style( get_stylesheet_directory_uri() . '/library/css/editor-style.css' );

    // let's get language support going, if you need it
    load_theme_textdomain( 'troywebapplicant', get_template_directory() . '/library/translation' );

    // cleanup the <head>
    add_action( 'init', 'plate_head_cleanup' );

    // remove WP version from RSS
    add_filter( 'the_generator', 'plate_rss_version' );

    // remove pesky injected css for recent comments widget
    add_filter( 'wp_head', 'plate_remove_wp_widget_recent_comments_style', 1 );

    // clean up comment styles in the head
    add_action( 'wp_head', 'plate_remove_recent_comments_style', 1 );

    // clean up gallery output in wp
    add_filter( 'gallery_style', 'plate_gallery_style' );

    // enqueue the styles and scripts
    add_action( 'wp_enqueue_scripts', 'plate_scripts_and_styles', 999 );

    // support the theme stuffs
    plate_theme_support();

    // adding sidebars to Wordpress
    add_action( 'widgets_init', 'plate_register_sidebars' );

    // cleaning up <p> tags around images
    add_filter( 'the_content', 'plate_filter_ptags_on_images' );

    // clean up the default WP excerpt
    add_filter( 'excerpt_more', 'plate_excerpt_more' );

    // new body_open() function added in WP 5.2
    // https://generatewp.com/wordpress-5-2-action-that-every-theme-should-use/
    if ( ! function_exists( 'wp_body_open' ) ) {
        /**
         * Fire the wp_body_open action.
         *
         * Added for backwards compatibility to support WordPress versions prior to 5.2.0.
         */
        function wp_body_open() {
            /**
             * Triggered after the opening <body> tag.
             */
            do_action( 'wp_body_open' );
        }
    }


} /* end plate lunch */


/************* THUMBNAIL SIZE OPTIONS *************/

// Thumbnail sizes
// add_image_size( 'plate-image-300', 300, 300, true );
// add_image_size( 'plate-image-150', 150, 150, true );

add_image_size( 'square-600', 600, 600, true );

add_image_size('wide-sm',640,9999,false);
add_image_size('wide-lg',1024,9999,false);
add_image_size('wide-xl',1600,9999,false);
add_image_size('wide-xxl',2200,9999,false);

add_image_size('tall-sm',500,768,true);
add_image_size('tall-lg',834,1122,true);
// add_image_size('tall-xl',768,956,true); 
// add_image_size('tall-xxl',1002,2200,true);


/*
to add more sizes, simply copy a line from above
and change the dimensions & name. As long as you
upload a "featured image" as large as the biggest
set width or height, all the other sizes will be
auto-cropped.

To call a different size, simply change the text
inside the thumbnail function.

For example, to call the 300 x 100 sized image,
we would use the function:
<?php the_post_thumbnail( 'plate-image-300' ); ?>
for the 600 x 150 image:
<?php the_post_thumbnail( 'plate-image-600' ); ?>

You can change the names and dimensions to whatever
you like. Enjoy!
*/

add_filter( 'image_size_names_choose', 'plate_custom_image_sizes' );

function plate_custom_image_sizes( $sizes ) {

    return array_merge( $sizes, array(

        // 'plate-image-600' => __('600px by 600px', 'troywebapplicant'),
        // 'plate-image-300' => __('300px by 300px', 'troywebapplicant'),
        // 'plate-image-150' => __('150px by 150px', 'troywebapplicant'),

        ) 
    );
}

/*
The function above adds the ability to use the dropdown menu to select
the new images sizes you have just created from within the media manager
when you add media to your content blocks. If you add more image sizes,
duplicate one of the lines in the array and name it according to your
new image size.
*/

/************* ACTIVE SIDEBARS ********************/

// Sidebars & Widgetizes Areas
function plate_register_sidebars() {

	register_sidebar( array(

            'id' => 'sidebar1',
            'name' => __( 'Sidebar 1', 'troywebapplicant' ),
            'description' => __( 'The first (primary) sidebar.', 'troywebapplicant' ),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h4 class="widgettitle">',
            'after_title' => '</h4>',

        )
    );

	/*
	to add more sidebars or widgetized areas, just copy
	and edit the above sidebar code. In order to call
	your new sidebar just use the following code:

	Just change the name to whatever your new
	sidebar's id is, for example:

	register_sidebar( array(

		'id' => 'sidebar2',
		'name' => __( 'Sidebar 2', 'troywebapplicant' ),
		'description' => __( 'The second (secondary) sidebar.', 'troywebapplicant' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h4 class="widgettitle">',
		'after_title' => '</h4>',

	   )
    );

	To call the sidebar in your template, you can just copy
	the sidebar.php file and rename it to your sidebar's name.
	So using the above example, it would be:
	sidebar-sidebar2.php

	*/
} // don't remove this bracket!


/*********************
COMMENTS
Blah blah blah.
*********************/

// Adding a custom gravatar. Customize this to add your own. Or delete it. It's totally up to you.
add_filter( 'avatar_defaults', 'new_default_avatar' );

function new_default_avatar ( $avatar_defaults ) {

    //Set the URL where the image file for your avatar is located
    $new_avatar_url = get_stylesheet_directory_uri() . '/library/images/custom-gravatar.png';

    // var_dump($new_avatar_url);

    //Set the text that will appear to the right of your avatar in Settings>>Discussion
    $avatar_defaults[$new_avatar_url] = 'Custom Avatar';

    return $avatar_defaults;
}




add_action( 'wp_enqueue_scripts', 'plate_fonts' );

function plate_fonts() {
    // ADOBE TYPEKIT FONTKIT , SPECIFIED WITH OVERIT ACCOUNT #1
    // DISABLED IN FAVOR OR LOCAL FONTS
    // wp_enqueue_style( 'plate-fonts', 'https://use.typekit.net/cfw8wyc.css' );

}


/****************************************
* SCHEMA *
http://www.longren.io/add-schema-org-markup-to-any-wordpress-theme/
****************************************/

function html_schema() {

    $schema = 'https://schema.org/';
 
    // Is single post
    if( is_single() ) {
        $type = "Article";
    }

    // Is blog home, archive or category
    else if( is_home() || is_archive() || is_category() ) {
        $type = "Blog";
    }

    // Is static front page
    else if( is_front_page() ) {
        $type = "Website";
    }

    // Is a general page
     else {
        $type = 'WebPage';
    }
 
    echo 'itemscope="itemscope" itemtype="' . $schema . $type . '"';
}



/*********************************
WP_HEAD CLEANUP
The default wordpress head is a mess. 
Let's clean it up by removing all 
the junk we don't need.
**********************************/

function plate_head_cleanup() {

    // category feeds
    remove_action( 'wp_head', 'feed_links_extra', 3 );

    // post and comment feeds
    remove_action( 'wp_head', 'feed_links', 2 );

    // EditURI link
    remove_action( 'wp_head', 'rsd_link' );

    // windows live writer
    remove_action( 'wp_head', 'wlwmanifest_link' );

    // previous link
    remove_action( 'wp_head', 'parent_post_rel_link' );

    // start link
    remove_action( 'wp_head', 'start_post_rel_link' );

    // links for adjacent posts
    remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head' );

    // WP version
    remove_action( 'wp_head', 'wp_generator' );

    // remove WP version from css
    add_filter( 'style_loader_src', 'plate_remove_wp_ver_css_js', 9999 );

    // remove WP version from scripts
    add_filter( 'script_loader_src', 'plate_remove_wp_ver_css_js', 9999 );

} /* end plate head cleanup */


// remove WP version from RSS
function plate_rss_version() {

    return ''; // it's as if it is not even there

}

// remove WP version from scripts
function plate_remove_wp_ver_css_js( $src ) {

    if ( strpos( $src, 'ver=' ) )

        $src = remove_query_arg( 'ver', $src );

    return $src;
}

// remove injected CSS for recent comments widget
function plate_remove_wp_widget_recent_comments_style() {

    if ( has_filter( 'wp_head', 'wp_widget_recent_comments_style' ) ) {

        remove_filter( 'wp_head', 'wp_widget_recent_comments_style' );
    }
}

// remove injected CSS from recent comments widget
function plate_remove_recent_comments_style() {

    global $wp_widget_factory;

    if (isset($wp_widget_factory->widgets['WP_Widget_Recent_Comments'])) {

        remove_action( 'wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style') );
    }
}

// remove injected CSS from gallery
function plate_gallery_style($css) {

    return preg_replace( "!<style type='text/css'>(.*?)</style>!s", '', $css );

}

function getOS() { 
	$user_agent = $_SERVER['HTTP_USER_AGENT'];
	$os_platform =   "undetected";
	$os_array =   array(
		'/windows nt 10/i'      =>  'Windows 10',
		'/windows nt 6.3/i'     =>  'Windows 8.1',
		'/windows nt 6.2/i'     =>  'Windows 8',
		'/windows nt 6.1/i'     =>  'Windows 7',
		'/windows nt 6.0/i'     =>  'Windows Vista',
		'/windows nt 5.2/i'     =>  'Windows Server 2003/XP x64',
		'/windows nt 5.1/i'     =>  'Windows XP',
		'/windows xp/i'         =>  'Windows XP',
		'/windows nt 5.0/i'     =>  'Windows 2000',
		'/windows me/i'         =>  'Windows ME',
		'/win98/i'              =>  'Windows 98',
		'/win95/i'              =>  'Windows 95',
		'/win16/i'              =>  'Windows 3.11',
		'/macintosh|mac os x/i' =>  'Mac OS X',
		'/mac_powerpc/i'        =>  'Mac OS 9',
		'/linux/i'              =>  'Linux',
		'/ubuntu/i'             =>  'Ubuntu',
		'/iphone/i'             =>  'iPhone',
		'/ipod/i'               =>  'iPod',
		'/ipad/i'               =>  'iPad',
		'/android/i'            =>  'Android',
		'/blackberry/i'         =>  'BlackBerry',
		'/webos/i'              =>  'Mobile'
	);
	foreach ( $os_array as $regex => $value ) { 
		if ( preg_match($regex, $user_agent ) ) {
			$os_platform = $value;
		}
	}   
	return $os_platform;
}

function client_has_windows(){
    $client_os = getOS();
    return strpos($client_os, 'Windows') !== false;
}


/*********************
SCRIPTS & ENQUEUEING
*********************/

// loading modernizr and jquery, comment reply and custom scripts
function plate_scripts_and_styles() {

    global $wp_styles; // call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way
    $stylsheet_last_mod = filemtime( get_theme_file_path( "/library/css/style.css" ));
    $javascript_last_mod = filemtime( get_theme_file_path( "/library/js/min/scripts-min.js" ));

    if ( !is_admin() ) {

        // modernizr (3.6.0 2018-04-17)
        wp_enqueue_script( 'modernizr', get_theme_file_uri() . '/library/js/libs/modernizr-custom-min.js', [], '3.6.0', false );

        // register main stylesheet
        wp_enqueue_style( 'plate-stylesheet', get_theme_file_uri() . '/library/css/style.css?lastmod='.$stylsheet_last_mod, [], '', 'all' );

        // ie-only style sheet
        wp_enqueue_style( 'plate-ie-only', get_theme_file_uri() . '/library/css/ie.css', [], '' );

        // Adobe Typekit
        // wp_enqueue_style( 'adobe-typekit', 'https://use.typekit.net/gkc3kpa.css', [], '' );

        $template_file = get_page_template_slug();
        // if ( $template_file && $template_file == 'page-gallery.php' ) {
		// 	wp_enqueue_style( 'photoswipe-stylesheet', get_theme_file_uri() . '/library/css/libs/photoswipe.css', [], '', 'all' );
		// 	wp_enqueue_style( 'photoswipeskin-stylesheet', get_theme_file_uri() . '/library/css/libs/default-skin/default-skin.css', [], '', 'all' );

		// 	wp_enqueue_script( 'photoswipe-js', get_theme_file_uri() . '/library/js/libs/photoswipe.min.js', [], '', true );
		// 	wp_enqueue_script( 'photoswipeui-js', get_theme_file_uri() . '/library/js/libs/photoswipe-ui-default.min.js', [], '', true );
		// }

        // $plyr_version = '3.7.8';
        // wp_enqueue_script('plyr-js','https://cdn.jsdelivr.net/npm/plyr@'.$plyr_version.'/dist/plyr.min.js',[],'',true);        
        // wp_enqueue_style('plyr-css','https://cdn.jsdelivr.net/npm/plyr@'.$plyr_version.'/dist/plyr.min.css', null, '', 'all' );        
        // wp_enqueue_style('plyr-custom-css','/wp-content/themes/ninepincider/library/css/plyr.css', null, '', 'all' );

        // scroll timelines polyfill https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js
        // wp_enqueue_script('scroll-timeline-js', get_theme_file_uri().'/library/js/libs/scroll-timeline.js', [], 'x', false );


        // Featherlight
        // wp_enqueue_style('featherlight-stylesheet','//cdn.jsdelivr.net/npm/featherlight@1.7.14/release/featherlight.min.css',[],'','all');
        // wp_enqueue_style('featherlight-gallery-stylesheet','//cdn.jsdelivr.net/npm/featherlight@1.7.14/release/featherlight.gallery.min.css',[],'','all');
        // wp_enqueue_script('featherlight-js','//cdn.jsdelivr.net/npm/featherlight@1.7.14/release/featherlight.min.js',['jquery'],'',true );
        // wp_enqueue_script('featherlight-gallery-js','//cdn.jsdelivr.net/npm/featherlight@1.7.14/release/featherlight.gallery.min.js',['featherlight-js'],'',true );

        // wp_enqueue_script('detect-swipe-js','//cdn.jsdelivr.net/npm/detect_swipe@2.1.4/jquery.detect_swipe.min.js',['jquery'],'',true );

        // // Swiper
        // wp_enqueue_style('swiper-stylesheet','https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',[],'','all' );
        // wp_enqueue_script('swiper-js','https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',[],'',true );

        // easepick
        // wp_enqueue_style('easepick-stylesheet','https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.min.css',[],'','all' );
        // wp_enqueue_script( 'easepick-js', 'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.umd.min.js', [], '', true );

        // gsap
        $gsap_version = '3.12.3';
        wp_enqueue_script('gsap-js','//cdnjs.cloudflare.com/ajax/libs/gsap/'.$gsap_version.'/gsap.min.js',[],'',true);
        wp_enqueue_script('gsap-flip-js','//cdnjs.cloudflare.com/ajax/libs/gsap/'.$gsap_version.'/Flip.min.js',[],'',true);

        // wp_enqueue_script('gsap-scrolltrigger-js','//cdnjs.cloudflare.com/ajax/libs/gsap/'.$gsap_version.'/ScrollTrigger.min.js',[],'',true);
        // wp_enqueue_script('gsap-scrollsmoother-js', get_theme_file_uri().'/library/js/libs/ScrollSmoother.min.js', ['gsap-scrolltrigger-js'], '', true );

        // if(client_has_windows()){
        //     $simplebar_version = '6.0.0';
        //     wp_enqueue_script('simplebar-js','https://cdnjs.cloudflare.com/ajax/libs/simplebar/'.$simplebar_version.'/simplebar.min.js',[],'',true );
        //     wp_enqueue_style('simplebar-css', 'https://cdnjs.cloudflare.com/ajax/libs/simplebar/'.$simplebar_version.'/simplebar.min.css', null, '', 'all' );
        // } else {
        //     // echo '<!-- NOT WINDOZE -->';
        // }


        // comment reply script for threaded comments
        // if ( is_singular() AND comments_open() AND ( get_option('thread_comments') == 1 )) { wp_enqueue_script( 'comment-reply' ); }

        // adding scripts file in the footer
        $script_dependencies = [
            'jquery',
            // 'swiper-js',
            // 'easepick-js',
            // 'featherlight-js',
            // 'plyr-js',
            'gsap-js',
            'gsap-flip-js',
            // 'scroll-timeline-js',
        ];
        // if(client_has_windows()){
        //     array_push($script_dependencies,'simplebar-js');
        // }
        // if ( $template_file && $template_file == 'page-gallery.php' ) {
        //     $script_dependencies[] = 'photoswipe-js';
        // }
        wp_enqueue_script( 'plate-js', get_theme_file_uri() . '/library/js/min/scripts-min.js?lastmod='.$javascript_last_mod,  $script_dependencies, '', true );

        // accessibility (a11y) scripts
        wp_enqueue_script( 'plate-a11y', get_theme_file_uri() . '/library/js/a11y.js', array( 'jquery' ), '', true );

        $wp_styles->add_data( 'plate-ie-only', 'conditional', 'lt IE 9' ); // add conditional wrapper around ie stylesheet

        // plate extra scripts. Uncomment to use. Or better yet, copy what you need to the main scripts folder or on the page(s) you need it
        // wp_enqueue_script( 'plate-extra-js', get_theme_file_uri() . '/library/js/extras/extra-scripts.js', array( 'jquery' ), '', true );

    }
}


/*********************
GUTENBERG ENQUEUES

These are kept out of the main enqueue
function in case you don't need them.
*********************/

/**
 * 
 * Gutenberg Editor Styles
 * 
 * Enqueue block editor style for Gutenberg
 * This applies to the admin editor *only*,
 * (e.g. not on the front end);
 * 
 */

add_action( 'enqueue_block_editor_assets', 'plate_block_editor_styles' );

function plate_block_editor_styles() {
    
    wp_enqueue_style( 'plate-block-editor-styles', get_theme_file_uri( '/library/css/editor.css' ), false, '1.0', 'all' );

}

/**
 * Gutenberg Front End Styles
 * 
 * Enqueue front end styles for Gutenberg.
 * 
 */
add_action( 'enqueue_block_assets', 'plate_gutenberg_styles' );

function plate_gutenberg_styles() {

    wp_enqueue_style( 'plate-gutenberg-styles', get_theme_file_uri( '/library/css/gutenberg.css' ), false, '1.0', 'all' );

}

/****************************************
* REMOVE WP EXTRAS & DEQUEUEING STUFFS *
****************************************/

/* 
* Remove emojis: because WordPress is serious business.
* But, if you want emojis, don't let me stop you from having a good time. 
* To enable emojis, comment these functions out or just delete them.
*/

add_action( 'init', 'disable_wp_emojicons' );

function disable_wp_emojicons() {

    // all actions related to emojis
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );

    // filter to remove TinyMCE emojis
    add_filter( 'tiny_mce_plugins', 'disable_emojicons_tinymce' );

}

function disable_emojicons_tinymce( $plugins ) {

    if ( is_array( $plugins ) ) {

        return array_diff( $plugins, array( 'wpemoji' ) );

    } else {

        return [];

    }
}


/* 
* Dequeue jQuery Migrate
* I'm commenting this out by default. Why? Because Gravity Forms *requires* it
* for some form functions to work...***eye roll***. 
*/
// add_action( 'wp_default_scripts', 'plate_dequeue_jquery_migrate' );

// function plate_dequeue_jquery_migrate( $scripts ) {

//     if (! empty( $scripts->registered['jquery'] ) ) {

//         $jquery_dependencies = $scripts->registered['jquery']->deps;

//         $scripts->registered['jquery']->deps = array_diff( $jquery_dependencies, array( 'jquery-migrate' ) );

//     }

// }

// Remove wp-embed.min.js from the front end. Commented out by default as you may need it.
// See here: https://wordpress.stackexchange.com/questions/211701/what-does-wp-embed-min-js-do-in-wordpress-4-4
// add_action( 'init', function() {
  
//       // Remove the REST API endpoint.
//       remove_action('rest_api_init', 'wp_oembed_register_route');
  
//       // Turn off oEmbed auto discovery.
//       // Don't filter oEmbed results.
//       remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);
  
//       // Remove oEmbed discovery links.
//       remove_action('wp_head', 'wp_oembed_add_discovery_links');
  
//       // Remove oEmbed-specific JavaScript from the front-end and back-end.
//       remove_action('wp_head', 'wp_oembed_add_host_js');
//   }, PHP_INT_MAX - 1 );


// Remove the p from around imgs (http://css-tricks.com/snippets/wordpress/remove-paragraph-tags-from-around-images/)
// This only works for the main content box, not using ACF or other page builders.
// Added small bit of javascript in scripts.js that will work everywhere. 
// Keeping this in in case people are still using it.
add_filter('the_content', 'plate_filter_ptags_on_images');

function plate_filter_ptags_on_images( $content ) {

    return preg_replace('/<pp>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);

}


// Simple function to remove the [...] from excerpt and add a 'Read More �' link.
function plate_excerpt_more($more) {
    global $post;
    // edit here if you like
    return '...  <a class="excerpt-read-more" href="'. get_permalink( $post->ID ) . '" title="'. __( 'Read ', 'troywebapplicant' ) . esc_attr( get_the_title( $post->ID ) ).'">'. __( 'Read more &raquo;', 'troywebapplicant' ) .'</a>';
}



/*********************
THEME SUPPORT
*********************/

// support all of the theme things
function plate_theme_support() {

    // wp thumbnails (see sizes above)
    add_theme_support( 'post-thumbnails' );

    // default thumb size
    set_post_thumbnail_size(125, 125, true);

    // wp custom background (thx to @bransonwerner for update)
    add_theme_support( 'custom-background', array(

        'default-image' => '',    // background image default
        'default-color' => '',    // background color default (dont add the #)
        'wp-head-callback' => '_custom_background_cb',
        'admin-head-callback' => '',
        'admin-preview-callback' => '',

        )
    );

    // Custom Header Image
    add_theme_support( 'custom-header', array(

            'default-image'      => get_template_directory_uri() . '/library/images/header-image.png',
            'default-text-color' => '000',
            'width'              => 1440,
            'height'             => 220,
            'flex-width'         => true,
            'flex-height'        => true,
            'header-text'        => true,
            'uploads'            => true,
            'wp-head-callback'   => 'plate_style_header',

        ) 
    );

    // Custom Logo
    add_theme_support( 'custom-logo', array(

        'height'      => 100,
        'width'       => 100,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array( 'site-title', 'site-description' ),

        ) 
    );

    // rss thingy
    add_theme_support( 'automatic-feed-links' );

    // To add another menu, uncomment the second line and change it to whatever you want. You can have even more menus.
    register_nav_menus( array(

        'main-nav' => __( 'The Main Menu', 'troywebapplicant' ),   // main nav in header
        // 'footer-links' => __( 'Footer Links', 'troywebapplicant' ) // secondary nav in footer. Uncomment to use or edit.

        )
    );

    // Title tag. Note: this still isn't working with Yoast SEO
    add_theme_support( 'title-tag' );

    // Add theme support for selective refresh for widgets.
    add_theme_support( 'customize-selective-refresh-widgets' );

    // Enable support for HTML5 markup.
    add_theme_support( 'html5', array(

        'comment-list', 
        'comment-form', 
        'search-form', 
        'gallery', 
        'caption'

        ) 
    );

    /* 
    * POST FORMATS
    * Ahhhh yes, the wild and wonderful world of Post Formats. 
    * I've never really gotten into them but I could see some
    * situations where they would come in handy. Here's a few
    * examples: https://www.competethemes.com/blog/wordpress-post-format-examples/
    * 
    * This theme doesn't use post formats per se but we need this 
    * to pass the theme check.
    * 
    * We may add better support for post formats in the future.
    * 
    * If you want to use them in your project, do so by all means. 
    * We won't judge you. Ok, maybe a little bit.
    *
    */

    add_theme_support( 'post-formats', array(

        // 'aside',             // title less blurb
        // 'gallery',           // gallery of images
        // 'link',              // quick link to other site
        // 'image',             // an image
        // 'quote',             // a quick quote
        // 'status',            // a Facebook like status update
        // 'video',             // video
        // 'audio',             // audio
        // 'chat'               // chat transcript

        )
    );

    // Gutenberg support: https://www.billerickson.net/getting-your-theme-ready-for-gutenberg/
    // https://wordpress.org/gutenberg/handbook/extensibility/theme-support/
    // .alignwide styles added to _768up
    add_theme_support( 'align-wide' );
    
    add_theme_support( 'editor-color-palette', array(
        array(
            'name' => 'Brand Orange',
            'slug' => 'color-brand-orange',
            'color' => '#E77436',
        ),
        array(
            'name' => 'Brand Dark',
            'slug' => 'color-brand-dark',
            'color' => '#29292E',
        ),
        array(
            'name' => 'Grey',
            'slug' => 'color-grey',
            'color' => '#474852',
        ),
        array(
            'name' => 'Highlight',
            'slug' => 'color-highlight',
            'color' => '#F7CEB8',
        ),
        array(
            'name' => 'Neutral',
            'slug' => 'color-neutral',
            'color' => '#EFEFEF',
        ),
    ) );


    // Adds responsive embeds to Gutenberg blocks
    add_theme_support( 'responsive-embeds' );

    // Adds default Gutenberg styles to custom blocks
    // Delete/comment out if you are adding your own block styles
    add_theme_support( 'wp-block-styles' );

    // To limit the Gutenberg editor to your theme colors, uncomment this
    // add_theme_support( 'disable-custom-colors' );

} /* end plate theme support */


/** 
 * $content_width.
 * 
 * We need this to pass the theme check. Massive eye roll.
 * IT DOESN'T MAKE SENSE WITH RESPONSIVE LAYOUTS.
 * I'm looking at you, WordPress Trac peoples.
 * 
 * Probably best to not touch this unless you really want to
 * assign a maximum content width.
 * 
 * https://codex.wordpress.org/Content_Width
 * 
 */

// commented by default now as it breaks Instagram Gutenberg Block embeds.
if ( ! isset( $content_width ) ) {
	// $content_width = '100%';
}


/* 
* WooCommerce Support
*
* This function only removes the warning in the WP admin when 
* WooCommerce is installed. To fully support WooCommerce you 
* will need to add some stuff to your product loops.
* 
* See here: https://docs.woocommerce.com/document/third-party-custom-theme-compatibility/
*
*/

if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {

    add_action( 'after_setup_theme', 'woocommerce_support' );

    function woocommerce_support() {

        add_theme_support( 'woocommerce' );

    }

}


/*********************
RELATED POSTS FUNCTION
*********************/

/**
 * Plate Related Posts.
 * 
 * Adapted from this gist:
 * https://gist.github.com/claudiosanches/3167825
 * 
 * Replaced old related posts function from Bones.
 * Added: 2018-05-03
 *
 * Usage:
 * To show related by categories:
 * Add in single.php <?php plate_related_posts(); ?>.
 * To show related by tags:
 * Add in single.php <?php plate_related_posts('tag'); ?>.
 *
 * @global array $post
 *   WP global post.
 * @param string $display
 *   Set category or tag.
 * @param int $qty
 *   Number of posts to be displayed.
 * @param bool $images
 *   Enable or disable displaying images.
 * @param string $title
 *   Set the widget title.
 */

function plate_related_posts( $display = 'category', $qty = 5, $images = true, $title = 'Related Posts' ) {
    global $post;
    $show = false;
    $post_qty = (int) $qty;
    switch ( $display ) :
        case 'tag':
            $tags = wp_get_post_tags( $post->ID) ;
            if ( $tags ) {
                $show = true;
                $tag_ids = [];
                foreach ( $tags as $individual_tag ) {
                    $tag_ids[] = $individual_tag->term_id;
                }
                $args = array(
                    'tag__in' => $tag_ids,
                    'post__not_in' => array( $post->ID ),
                    'posts_per_page' => $post_qty,
                    'ignore_sticky_posts' => 1
                );
            }
            break;
        default :
            $categories = get_the_category( $post->ID );
            if ( $categories ) {
                $show = true;
                $category_ids = [];
                foreach ( $categories as $individual_category ) {
                    $category_ids[] = $individual_category->term_id;
                }
                $args = array(
                    'category__in' => $category_ids,
                    'post__not_in' => array( $post->ID ),
                    'showposts' => $post_qty,
                    'ignore_sticky_posts' => 1
                );
            }
    endswitch;
    if ( $show == true ) {
        $related = new wp_query( $args );
        if ( $related->have_posts() ) {
            $layout = '<div class="related-posts">';
            // $layout .= '<h3>' . strip_tags( $title ) . '</h3>';
            $layout .= '<ul class="nostyle related-posts-list nav nav-v">';
            while ( $related->have_posts() ) {
                $related->the_post();
                $layout .= '<li class="related-post">';
                if ( $images == true ) {
                    $layout .= '<span class="related-thumb">';
                    $layout .= '<a href="' . get_permalink() . '" title="' . get_the_title() . '">' . get_the_post_thumbnail() . '</a>';
                    $layout .= '</span>';
                }
                $layout .= '<span class="related-title">';
                $layout .= '<a href="' . get_permalink() . '" title="' . get_the_title() . '">' . get_the_title() . '</a>';
                $layout .= '</span>';
                $layout .= '</li>';
            }
            $layout .= '</ul>';
            $layout .= '</div>';
            echo $layout;
        }
        wp_reset_query();
    }
}

function related_posts_by_taxonomy( $post_id, $taxonomy, $args=array() ) {
	$related_query = new WP_Query();
	$terms = wp_get_object_terms( $post_id, $taxonomy );

	// Make sure we have terms from the current post
	if ( count( $terms ) ) {
		$post_ids = get_objects_in_term( $terms[0]->term_id, $taxonomy );
        $post_ids = array_diff($post_ids, [$post_id]); // Remove the current post ID

		$post = get_post( $post_id );
		$post_type = get_post_type( $post );        

		$args = wp_parse_args( $args, [
                'post_type' => $post_type,
                'post__in' => $post_ids,
                'taxonomy' => $taxonomy,
                'term' => $terms[0]->slug,
			] );
		$related_query = new WP_Query( $args );
	}

	// Return our results in query form
	return $related_query;
}


/*********************
PAGE NAVI
*********************/

/** 
* Numeric Page Navi (built into the theme by default).
* (Updated 2018-05-17)
* 
* If you're using this with a custom WP_Query, make sure 
* to add your query variable as an argument and this 
* function will play nice. Example:
* 
* plate_page_navi( $query );
*
* Also make sure your query has pagination set, e.g.:
* $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
* (or something similar)
* See the codex: https://codex.wordpress.org/Pagination
* 
* @param array $wp_query
*
*/

function plate_page_navi( $wp_query ) {
    $pages = $wp_query->max_num_pages;
    $big = 999999999; // need an unlikely integer

    if ( $pages > 1 ) {
        $page_current = max(1, get_query_var('paged'));

        echo '<nav class="pagination">';

        echo paginate_links(array(
            'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
            'format' => '?paged=%#%',
            'current'       => $page_current,
            'total'         => $pages,
            'prev_text'     => '&larr;',
            'next_text'     => '&rarr;',
            'type'          => 'list',
            'end_size'      => 3,
            'mid_size'      => 3
        ));

        echo '</nav>';
    }
}


/*
****************************************
*        PLATE SPECIAL FUNCTIONS       *
****************************************
*/

// Body Class functions
// Adds more slugs to body class so we can style individual pages + posts.
add_filter( 'body_class', 'plate_body_class' );

function plate_body_class( $classes ) {

    // Adds new classes for blogroll page (list of blog posts)
    // good for containing full-width images from Gutenberg
    // Added: 2018-12-07
    global $wp_query;

    if ( isset( $wp_query ) && (bool) $wp_query->is_posts_page ) {
        $classes[] = 'blogroll page-blog';
    }

    global $post;

    if ( isset( $post ) ) {

        /* Un comment below if you want the post_type-post_name body class */
        /* $classes[] = $post->post_type . '-' . $post->post_name; */
        
        $pagetemplate = get_post_meta( $post->ID, '_wp_page_template', true);
        $classes[] = sanitize_html_class( str_replace( '.', '-', $pagetemplate ), '' );
        $classes[] = $post->post_name;

    }

    if (is_page()) {

        global $post;

        if ( $post->post_parent ) {

            // Parent post name/slug
            $parent = get_post( $post->post_parent );
            $classes[] = $parent->post_name;

            // Parent template name
            $parent_template = get_post_meta( $parent->ID, '_wp_page_template', true );
            
            if ( !empty($parent_template) )
                $classes[] = 'template-'.sanitize_html_class( str_replace( '.', '-', $parent_template ), '' );

        }
        
        // If we *do* have an ancestors list, process it
        // http://codex.wordpress.org/Function_Reference/get_post_ancestors
        if ($parents = get_post_ancestors( $post->ID )) {

            foreach ( (array)$parents as $parent ) {

                // As the array contains IDs only, we need to get each page
                if ( $page = get_page($parent) ) {
                    // Add the current ancestor to the body class array
                    $classes[] = "{$page->post_type}-{$page->post_name}";
                }

            }

        }
 
        // Add the current page to our body class array
        $classes[] = "{$post->post_type}-{$post->post_name}";

    }

    if ( is_page_template('single-full.php') ) {
        $classes[] = 'single-full';
    }

    return $classes;

}


/* 
* QUICKTAGS
*
* Let's add some extra Quicktags for clients who aren't HTML masters
* They are pretty handy for HTML masters too.
*
* Hook into the 'admin_print_footer_scripts' action
*
*/
add_action( 'admin_print_footer_scripts', 'plate_custom_quicktags' );

function plate_custom_quicktags() {

    if ( wp_script_is( 'quicktags' ) ) { ?>

        <script type="text/javascript">
            window.onload = function() {
                QTags.addButton( 'qt-p', 'p', '<p>', '</p>', '', '', 1 );
                QTags.addButton( 'qt-br', 'br', '<br>', '', '', '', 9 );
                QTags.addButton( 'qt-span', 'span', '<span>', '</span>', '', '', 11 );
                QTags.addButton( 'qt-h2', 'h2', '<h2>', '</h2>', '', '', 12 );
                QTags.addButton( 'qt-h3', 'h3', '<h3>', '</h3>', '', '', 13 );
                QTags.addButton( 'qt-h4', 'h4', '<h4>', '</h4>', '', '', 14 );
                QTags.addButton( 'qt-h5', 'h5', '<h5>', '</h5>', '', '', 15 );
            }
        </script>

<?php }

}

// Load dashicons on the front end
// To use, go here and copy the css/html for the dashicon you want: https://developer.wordpress.org/resource/dashicons/
// Example: <span class="dashicons dashicons-wordpress"></span>

// add_action( 'wp_enqueue_scripts', 'template_load_dashicons' );

// function template_load_dashicons() {

//     wp_enqueue_style( 'dashicons' );

// }

  
// Post Author function (from WP Twenty Seventeen theme)
// We use this in the byline template part but included here in case you want to use it elsewhere.
if ( ! function_exists( 'plate_posted_on' ) ) :
/**
 * Prints HTML with meta information for the current post-date/time and author.
 */
function plate_posted_on() {

    // Get the author name; wrap it in a link.
    $byline = sprintf(

    /* translators: %s: post author */
    __( 'by %s', 'troywebapplicant' ),
    '<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . get_the_author() . '</a></span>'

    );

    // Finally, let's write all of this to the page.
    echo '<span class="posted-on">' . plate_time_link() . '</span><span class="byline"> ' . $byline . '</span>';

}
endif;


// Post Time function (from WP Twenty Seventeen theme)
if ( ! function_exists( 'plate_time_link' ) ) :
/**
 * Gets a nicely formatted string for the published date.
 */
function plate_time_link() {

    $time_string = 'Posted on: <time class="entry-date published updated" datetime="%1$s">%2$s</time>';
    if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
      $time_string = 'Posted on: <time class="entry-date published" datetime="%1$s">%2$s</time> | Updated: <time class="updated" datetime="%3$s">%4$s</time>';
    }

    $time_string = sprintf(
        $time_string,
        esc_attr( get_the_date( DATE_W3C ) ),
        esc_html( get_the_date() ),
        esc_attr( get_the_modified_date( DATE_W3C ) ),
        esc_html( get_the_modified_date() )
    );

    // Wrap the time string in a link, and preface it with 'Posted on'.
    return sprintf(

        /* translators: %s: post date */
        __( '<span class="screen-reader-text">Posted on</span> %s', 'troywebapplicant' ),
        $time_string

    );
}
endif;



/** 
 * Dashboard Widget
 * 
 * Add a widget to the dashboard in the WP Admin.
 * Great to add instructions or info for clients.
 *  
 * If you don't need/want this, just remove it or 
 * comment it out.
 * 
 * Customize it...yeaaaahhh...but don't criticize it.
 * 
 * 
 */

function plate_add_dashboard_widgets() {

    // Call the built-in dashboard widget function with our callback
    wp_add_dashboard_widget(
        'plate_dashboard_widget', // Widget slug. Also the HTML id for styling in admin.scss.
        __( 'Welcome', 'troywebapplicant' ), // Title.
        'plate_dashboard_widget_init' // Display function (below)
    );
}
// add_action( 'wp_dashboard_setup', 'plate_add_dashboard_widgets' );

// Create the function to output the contents of our Dashboard Widget.
function plate_dashboard_widget_init() {

    // helper vars for links and images and stuffs.
    $url = get_admin_url();
    $img = get_theme_file_uri() . '/library/images/logo.svg';

    echo '<div class="dashboard-image"><img src=' . $img . '" width="96" height="96" /></div>';
    echo '<h3>You\'ve arrived at the WordPress Dashboard aka the \'Site Admin\' or \'WordPress Admin\' or simply the \'Admin\'.</h3>'; 
    
}

function add_excerpts_to_pages() {
    add_post_type_support('page', 'excerpt');
}
add_action('init', 'add_excerpts_to_pages');

// function modify_query_return_all_posts( $query ) {
// }
// add_action( 'pre_get_posts', 'modify_query_return_all_posts' );

// register custom block category TWA
function register_twa_block_category( $categories, $post ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'twa',
                'title' => __( 'TWA Blocks', 'troywebapplicant' ),
            ),
        )
    );
}
add_filter( 'block_categories', 'register_twa_block_category', 10, 2 );


function link_button($button_info,$classes='twa-orange-button',$title_attr_txt=false){
    // $button_info should be an array, preferably with keys: url, title, target
    if(is_non_empty_array($button_info,'url') && !empty($button_info['url'])):
        $url = $button_info['url'];
        $target = (array_key_exists('target',$button_info) && !empty($button_info['target'])) ? $button_info['target'] : '_top';
        $title = (array_key_exists('title',$button_info) && !empty($button_info['title'])) ? $button_info['title'] : '';
        $rel_attr = ($target == '_blank') ? ' rel="noopener"' : '';
		if($title_attr_txt){
			$title_attr = ' title="'.$title_attr_txt.'"';
		} elseif($title){
			$title_attr = ' title="'.$title.'"';
		} else {
			$title_attr = '';
		}
        $class_attr = ($classes) ? 'class="button '.$classes.'"' : 'class="button"';
        return '<a href="'.$url.'"'.$title_attr.' target="'.$target.'" '.$class_attr.'>'.$title.'</a>';
    else:
        return '';
    endif;
}

function social_sharing_buttons() {
	if(is_singular() || is_home()){
		$url = urlencode(get_permalink());
		$title = htmlspecialchars(urlencode(html_entity_decode(get_the_title(), ENT_COMPAT, 'UTF-8')), ENT_COMPAT, 'UTF-8');
		$twitterURL = 'https://twitter.com/intent/tweet?text='.$title.'&amp;url='.$url;
		$facebookURL = 'https://www.facebook.com/sharer/sharer.php?u='.$url;
		$linkedinURL = 'https://www.linkedin.com/shareArticle?title='.$title.'&amp;url='.$url;

		$variable = '<div class="blog-social-links"><span class="nosho">SHARE:</span> ';
		$variable .= '<a class="social-link social-facebook" href="'.$facebookURL.'" target="_blank"><i class="fa-fw fa-brands fa-facebook-f fa-fw"></i></a>';
		$variable .= '<a class="social-link social-twitter" href="'. $twitterURL .'" target="_blank"><i class="fa-fw fa-brands fa-x-twitter fa-fw"></i></a>';
		$variable .= '<a class="social-link social-linkedin" href="'.$linkedinURL.'" target="_blank"><i class="fa-fw fa-brands fa-linkedin-in fa-fw"></i></a>';
		$variable .= '<a class="social-link social-copy" href="'.$url.'" data-click-to-copy="'.$url.'"><i class="fa-fw fa-regular fa-link-simple"></i></a>';
		$variable .= '</div>';
		echo $variable;
	}
}

function twa_button_shortcode($atts, $content = 'More Info') {
    // Extract shortcode attributes
    extract(shortcode_atts(array(
        'type' => '',
        'url' => '',
        'target' => '_top'
    ), $atts));

    // Create button_info array
    $button_info = array(
        'url' => $url,
        'title' => do_shortcode($content),
        'target' => $target
    );

    // Generate button markup using link_button function
    return link_button($button_info, $type);
}
add_shortcode('twa-button', 'twa_button_shortcode');


function cover_link($button_info,$classes=false,$title_attr_txt=false){
    // $button_info should be an array, preferably with keys: url, title, target
    if(is_non_empty_array($button_info,'url') && !empty($button_info['url'])):
        $url = $button_info['url'];
        $target = (array_key_exists('target',$button_info) && !empty($button_info['target'])) ? $button_info['target'] : '_top';
        $title = (array_key_exists('title',$button_info) && !empty($button_info['title'])) ? $button_info['title'] : '';
        $rel_attr = ($target == '_blank') ? ' rel="noopener"' : '';
        $extra_attr_name = is_non_empty_array($button_info,'extra_attr') ? $button_info['extra_attr'] : false;
        $extra_attr_value = is_non_empty_array($button_info,'extra_attr_value') ? $button_info['extra_attr_value'] : false;
        $extra_attr = ($extra_attr_name && $extra_attr_value) ? ' '.$extra_attr_name.'="'.$extra_attr_value.'"' : '';
		if($title_attr_txt){
			$title_attr = ' title="'.$title_attr_txt.'"';
		} elseif($title){
			$title_attr = ' title="'.$title.'"';
		} else {
			$title_attr = '';
		}
        $class_attr = ($classes) ? 'class="cover-link '.$classes.'"' : 'class="cover-link"';
        return '<a href="'.$url.'"'.$title_attr.' target="'.$target.'" '.$class_attr.$extra_attr.'></a>';
    else:
        return '';
    endif;
}

function viewportSizeBackgrounds(){
    $hero_image = get_acf_field( 'hero_image' );
    $hero_image_portrait = (!empty($hero_image) && array_key_exists('portrait',$hero_image)) ? $hero_image['portrait'] : false;
    $hero_image_landscape = (!empty($hero_image) && array_key_exists('landscape',$hero_image)) ? $hero_image['landscape'] : false;
    if($hero_image_portrait || $hero_image_landscape){
        if($hero_image_portrait && !$hero_image_landscape){
            $hero_settings = [
            'background-image:url('.$hero_image_portrait['sizes']['hero-sm'].')',
                ['(min-width:600px)','background-image:url('.$hero_image_portrait['sizes']['hero-lg'].')'],
                ['(min-width:1000px)','background-image:url('.$hero_image_portrait['sizes']['hero-xl'].')'],
                ['(min-width:1440px)','background-image:url('.$hero_image_portrait['sizes']['hero-xxl'].')'],
            ];
            echo responsive_background_css('.hero',$hero_settings);
        } elseif($hero_image_landscape && !$hero_image_portrait){
            $hero_settings = [
                'background-image:url('.$hero_image_landscape['sizes']['hero-sm'].')',
                ['(min-width:600px)','background-image:url('.$hero_image_landscape['sizes']['hero-lg'].')'],
                ['(min-width:1000px)','background-image:url('.$hero_image_landscape['sizes']['hero-xl'].')'],
                ['(min-width:1440px)','background-image:url('.$hero_image_landscape['sizes']['hero-xxl'].')'],
            ];
            echo responsive_background_css('.hero',$hero_settings);
        } elseif($hero_image_portrait && $hero_image_landscape){
            $hero_settings = [
                'background-image:url('.$hero_image_portrait['sizes']['hero-sm'].')',
                ['(min-width:600px)','background-image:url('.$hero_image_portrait['sizes']['hero-lg'].')'],
                ['(min-width:768px)','background-image:url('.$hero_image_landscape['sizes']['hero-lg'].')'],
                ['(min-width:1000px)','background-image:url('.$hero_image_landscape['sizes']['hero-xl'].')'],
                ['(min-width:1440px)','background-image:url('.$hero_image_landscape['sizes']['hero-xxl'].')'],
            ];
            echo responsive_background_css('.hero',$hero_settings);
        }
    }
}

function header_styles(){
    viewportSizeBackgrounds();
}
add_action('wp_head', 'header_styles', 100);

function slugify($string,$max_length=false){
    if($max_length && $max_length > 0){
        $slugged = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $string), '-'));
        return substr($slugged, 0, $max_length);
    } else {
        return strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $string), '-'));
    }
}

function format_phone_dashes($phone){
    $phone = preg_replace("/[^0-9,.]/", "", $phone );
    if(strlen($phone) == 7){
      return preg_replace("/(\d{3})(\d{4})/", "$1-$2", $phone);
    } elseif(strlen($phone) == 10){
      return preg_replace("/(\d{3})(\d{3})(\d{4})/", "$1-$2-$3", $phone);
    } else {
      return $phone;
    }
}

function format_phone_parens($phone){
    $phone = preg_replace("/[^0-9,.]/", "", $phone );
    if(strlen($phone) == 7){
      return preg_replace("/(\d{3})(\d{4})/", "$1-$2", $phone);
    } elseif(strlen($phone) == 10){
      return preg_replace("/(\d{3})(\d{3})(\d{4})/", "($1) $2-$3", $phone);
    } else {
      return $phone;
    }
}

function format_phone_dots($phone){
    $phone = preg_replace("/[^0-9,.]/", "", $phone );
    if(strlen($phone) == 7){
      return preg_replace("/(\d{3})(\d{4})/", "$1.$2", $phone);
    } elseif(strlen($phone) == 10){
      return preg_replace("/(\d{3})(\d{3})(\d{4})/", "$1.$2.$3", $phone);
    } else {
      return $phone;
    }
}

function format_tel($phone){
  // Eventually be smart but not yet
  $phone = preg_replace("/[^0-9,.]/", "", $phone );
  return 'tel:+1'.$phone;
}

function returnTelLink($phone,$extra_classes=false,$prependFA=false){
    if($phone){
        $class = ($extra_classes) ? $extra_classes.' tel-link' : 'tel-link';
        $icon = ($prependFA) ? '<i class="fa-solid fa-phone"></i>' : '';
        return '<a href="'.format_tel($phone).'" class="'.$class.'">'.$icon.format_phone_dots($phone).'</a>';
    }
    return '';
}

function getMainTelephoneLink($extra_classes=false){
    $phone = get_acf_field('main_phone','options');
    return returnTelLink($phone,$extra_classes);
}

function get_google_directions_url($address, $encoded=false){
  if(!$encoded){
    $address = urlencode($address);
  }
  $base_url = 'https://www.google.com/maps/dir/?api=1&destination=';
  return $base_url . $address;
}

function is_non_empty_array($x,$with_key = false){
    if($with_key){
        // $with_key to also test if key exists with a value
        return ($x && is_array($x) && count($x) && key_exists($with_key,$x) && !empty($x[$with_key])); 
    } else {
        return ($x && is_array($x) && count($x)); 
    }
}


/* Change Gravity Forms default ajax spinner */
// add_filter( 'gform_ajax_spinner_url', 'spinner_url', 10, 2 );
// function spinner_url( $image_src, $form ) {
//     return  get_theme_file_uri().'/library/images/icon8-22.png';
// }



function acf_and($var,$where=false){
    // function to test for ACF field that wont break page if ACF is not active
    if($where){
        return (function_exists('get_field') && get_field($var,$where));
    } else {
        return (function_exists('get_field') && get_field($var));
    }
}

function get_acf_field($var,$where=false){
    // function to get ACF field values that wont break page if ACF is not active
    $response = '';
    if(!function_exists('get_field')){
        return $response;
    }
    if($where){
        $response = get_field($var,$where);
    } else {
        $response = get_field($var);
    }
    return $response;
}




?>
