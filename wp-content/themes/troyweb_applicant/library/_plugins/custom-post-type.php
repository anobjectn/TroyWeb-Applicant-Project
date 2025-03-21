<?php
/**
* Plugin Name: Plate Staff CPT
* Description: Staff CPT sample for Plate theme
* Version: 1.0
* Author: Joshua Michaels for studio.bio
* Author URI: https://studio.bio/
*/

/******************************************************************
A PLUGIN? IN MY THEME?
*******************************************************************
Wait a minute there buddy, what is a plugin file doing in a theme?

Well think about it...in most cases whatever site you're working
on will need your CPT to work with or without your theme. You may
not be the dev in 5 years time but they will still need their data.

Thus, it makes sense to put each custom post type in a plugin. This
is an example of a 'Staff' custom post type and includes its own
taxonomy 'Grouping' plus some functions to change the 'Title' field
on edit screens and make the admin columns sortable.

You *could* edit this file to make your own CPT. But it's even easier
to just go to https://generatewp.com and use the Post Type Generator
and the Taxonomy Generator there. That's what I do.

Edit this or replace your own code from generatewp.com and then place
in the /wp-content/plugins folder and activate it like any other
plugin. Sweetness.

** And yes, I know having this file in the theme gives an error in
Theme Check. Big whoop.

******************************************************************/


// Flush rewrite rules for custom post types
add_action( 'after_switch_theme', 'plate_flush_rewrite_rules' );

// Flush your rewrite rules
function plate_flush_rewrite_rules() {
	flush_rewrite_rules();
}


// Register Custom Post Type
function plate_staff_cpt() {

	$labels = array(
		'name'                  => _x( 'Staff', 'Post Type General Name', 'troywebapplicant' ),
		'singular_name'         => _x( 'Staff', 'Post Type Singular Name', 'troywebapplicant' ),
		'menu_name'             => __( 'Staff', 'troywebapplicant' ),
		'name_admin_bar'        => __( 'Staff', 'troywebapplicant' ),
		'archives'              => __( 'Staff Archives', 'troywebapplicant' ),
		'parent_item_colon'     => __( 'Parent Staff:', 'troywebapplicant' ),
		'all_items'             => __( 'All Staff', 'troywebapplicant' ),
		'add_new_item'          => __( 'Add New Staff', 'troywebapplicant' ),
		'add_new'               => __( 'Add New Staff', 'troywebapplicant' ),
		'new_item'              => __( 'New Staff', 'troywebapplicant' ),
		'edit_item'             => __( 'Edit Staff', 'troywebapplicant' ),
		'update_item'           => __( 'Update Staff', 'troywebapplicant' ),
		'view_item'             => __( 'View Staff', 'troywebapplicant' ),
		'search_items'          => __( 'Search Staff', 'troywebapplicant' ),
		'not_found'             => __( 'Not found', 'troywebapplicant' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'troywebapplicant' ),
		'featured_image'        => __( 'Featured Image', 'troywebapplicant' ),
		'set_featured_image'    => __( 'Set featured image', 'troywebapplicant' ),
		'remove_featured_image' => __( 'Remove featured image', 'troywebapplicant' ),
		'use_featured_image'    => __( 'Use as featured image', 'troywebapplicant' ),
		'insert_into_item'      => __( 'Insert into staff', 'troywebapplicant' ),
		'uploaded_to_this_item' => __( 'Uploaded to this staff', 'troywebapplicant' ),
		'items_list'            => __( 'Staff list', 'troywebapplicant' ),
		'items_list_navigation' => __( 'Staff list navigation', 'troywebapplicant' ),
		'filter_items_list'     => __( 'Filter staff list', 'troywebapplicant' ),
	);
	$rewrite = array(
		'slug'                  => 'staff',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
	);
	$args = array(
		'label'                 => __( 'Staff', 'troywebapplicant' ),
		'description'           => __( 'Plate Staff', 'troywebapplicant' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'revisions', 'page-attributes', ),
		'taxonomies'            => array( 'grouping' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-businessman',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'rewrite'               => $rewrite,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
		// You can change the base request here
		//'rest_base'             => 'staff',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
	);
	register_post_type( 'plate_staff', $args );

}
add_action( 'init', 'plate_staff_cpt', 0 );


// Register Custom Taxonomy
function plate_staff_grouping_tax() {

	$labels = array(
		'name'                       => _x( 'Groupings', 'Taxonomy General Name', 'troywebapplicant' ),
		'singular_name'              => _x( 'Grouping', 'Taxonomy Singular Name', 'troywebapplicant' ),
		'menu_name'                  => __( 'Groupings', 'troywebapplicant' ),
		'all_items'                  => __( 'All Groupings', 'troywebapplicant' ),
		'parent_item'                => __( 'Parent Grouping', 'troywebapplicant' ),
		'parent_item_colon'          => __( 'Parent Grouping:', 'troywebapplicant' ),
		'new_item_name'              => __( 'New Grouping Name', 'troywebapplicant' ),
		'add_new_item'               => __( 'Add New Grouping', 'troywebapplicant' ),
		'edit_item'                  => __( 'Edit Grouping', 'troywebapplicant' ),
		'update_item'                => __( 'Update Grouping', 'troywebapplicant' ),
		'view_item'                  => __( 'View Grouping', 'troywebapplicant' ),
		'separate_items_with_commas' => __( 'Separate groupings with commas', 'troywebapplicant' ),
		'add_or_remove_items'        => __( 'Add or remove groupings', 'troywebapplicant' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'troywebapplicant' ),
		'popular_items'              => __( 'Popular Items', 'troywebapplicant' ),
		'search_items'               => __( 'Search Groupings', 'troywebapplicant' ),
		'not_found'                  => __( 'Not Found', 'troywebapplicant' ),
		'no_terms'                   => __( 'No items', 'troywebapplicant' ),
		'items_list'                 => __( 'Groupings list', 'troywebapplicant' ),
		'items_list_navigation'      => __( 'Groupings list navigation', 'troywebapplicant' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => false,
		'show_tagcloud'              => false,
		'show_in_rest'               => true,
		// You can change the base request here
		//'rest_base'                  => 'grouping',
		'rest_controller_class'      => 'WP_REST_Terms_Controller',
	);
	register_taxonomy( 'grouping', array( 'plate_staff' ), $args );

}

add_action( 'init', 'plate_staff_grouping_tax', 0 );


// Change the 'Title' field text on edit screen
function plate_staff_change_title_text( $title ){
    $screen = get_current_screen();

    if  ( 'plate_staff' == $screen->post_type ) {
        $title = 'Full Name (First Last)';
    }

    return $title;
}

add_filter( 'enter_title_here', 'plate_staff_change_title_text' );


// Add sortable admin columns dopeness
add_filter("manage_edit-plate_staff_sortable_columns", 'plate_staff_sort');

function plate_staff_sort($columns) {
    $custom = array(
        'taxonomy-grouping' => 'taxonomy-grouping'
    );
    return wp_parse_args($custom, $columns);
}


?>