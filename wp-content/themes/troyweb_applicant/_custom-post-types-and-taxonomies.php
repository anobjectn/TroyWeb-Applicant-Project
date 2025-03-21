<?php

add_action("init", function () {
    register_taxonomy(
        "experience",
        [
            0 => "applicant",
        ],
        [
            "labels" => [
                "name" => "Experience",
                "singular_name" => "Experience",
                "menu_name" => "Experience",
                "all_items" => "All Experience",
                "edit_item" => "Edit Experience",
                "view_item" => "View Experience",
                "update_item" => "Update Experience",
                "add_new_item" => "Add New Experience",
                "new_item_name" => "New Experience Name",
                "search_items" => "Search Experience",
                "popular_items" => "Popular Experience",
                "separate_items_with_commas" =>
                    "Separate experience with commas",
                "add_or_remove_items" => "Add or remove experience",
                "choose_from_most_used" =>
                    "Choose from the most used experience",
                "not_found" => "No experience found",
                "no_terms" => "No experience",
                "items_list_navigation" => "Experience list navigation",
                "items_list" => "Experience list",
                "back_to_items" => "← Go to experience",
                "item_link" => "Experience Link",
                "item_link_description" => "A link to a experience",
            ],
            "public" => true,
            "show_in_menu" => true,
            "show_in_rest" => true,
            "show_admin_column" => true,
            "rewrite" => [
                "with_front" => false,
            ],
        ]
    );

    register_taxonomy(
        "skill",
        [
            0 => "applicant",
        ],
        [
            "labels" => [
                "name" => "Skills",
                "singular_name" => "Skill",
                "menu_name" => "Skills",
                "all_items" => "All Skills",
                "edit_item" => "Edit Skill",
                "view_item" => "View Skill",
                "update_item" => "Update Skill",
                "add_new_item" => "Add New Skill",
                "new_item_name" => "New Skill Name",
                "search_items" => "Search Skills",
                "popular_items" => "Popular Skills",
                "separate_items_with_commas" => "Separate skills with commas",
                "add_or_remove_items" => "Add or remove skills",
                "choose_from_most_used" => "Choose from the most used skills",
                "not_found" => "No skills found",
                "no_terms" => "No skills",
                "items_list_navigation" => "Skills list navigation",
                "items_list" => "Skills list",
                "back_to_items" => "← Go to skills",
                "item_link" => "Skill Link",
                "item_link_description" => "A link to a skill",
            ],
            "public" => true,
            "show_in_menu" => true,
            "show_in_rest" => true,
            "show_admin_column" => true,
            "rewrite" => [
                "with_front" => false,
            ],
        ]
    );
});

add_action("init", function () {
    register_post_type("applicant", [
        "labels" => [
            "name" => "Applicants",
            "singular_name" => "Applicant",
            "menu_name" => "Applicants",
            "all_items" => "All Applicants",
            "edit_item" => "Edit Applicant",
            "view_item" => "View Applicant",
            "view_items" => "View Applicants",
            "add_new_item" => "Add New Applicant",
            "add_new" => "Add New Applicant",
            "new_item" => "New Applicant",
            "parent_item_colon" => "Parent Applicant:",
            "search_items" => "Search Applicants",
            "not_found" => "No applicants found",
            "not_found_in_trash" => "No applicants found in Trash",
            "archives" => "Applicant Archives",
            "attributes" => "Applicant Attributes",
            "insert_into_item" => "Insert into applicant",
            "uploaded_to_this_item" => "Uploaded to this applicant",
            "filter_items_list" => "Filter applicants list",
            "filter_by_date" => "Filter applicants by date",
            "items_list_navigation" => "Applicants list navigation",
            "items_list" => "Applicants list",
            "item_published" => "Applicant published.",
            "item_published_privately" => "Applicant published privately.",
            "item_reverted_to_draft" => "Applicant reverted to draft.",
            "item_scheduled" => "Applicant scheduled.",
            "item_updated" => "Applicant updated.",
            "item_link" => "Applicant Link",
            "item_link_description" => "A link to a applicant.",
        ],
        "description" => "Troy Web Applicants",
        "public" => true,
        "show_in_rest" => false,
        "menu_icon" => "dashicons-universal-access",
        "supports" => [
            0 => "title",
            1 => "editor",
            2 => "revisions",
            3 => "thumbnail",
            4 => "custom-fields",
        ],
        "rewrite" => [
            "with_front" => false,
        ],
        "delete_with_user" => false,
    ]);

    register_post_type("core-value", [
        "labels" => [
            "name" => "Core Values",
            "singular_name" => "Core Value",
            "menu_name" => "Core Values",
            "all_items" => "All Core Values",
            "edit_item" => "Edit Core Value",
            "view_item" => "View Core Value",
            "view_items" => "View Core Values",
            "add_new_item" => "Add New Core Value",
            "add_new" => "Add New Core Value",
            "new_item" => "New Core Value",
            "parent_item_colon" => "Parent Core Value:",
            "search_items" => "Search Core Values",
            "not_found" => "No core values found",
            "not_found_in_trash" => "No core values found in Trash",
            "archives" => "Core Value Archives",
            "attributes" => "Core Value Attributes",
            "insert_into_item" => "Insert into core value",
            "uploaded_to_this_item" => "Uploaded to this core value",
            "filter_items_list" => "Filter core values list",
            "filter_by_date" => "Filter core values by date",
            "items_list_navigation" => "Core Values list navigation",
            "items_list" => "Core Values list",
            "item_published" => "Core Value published.",
            "item_published_privately" => "Core Value published privately.",
            "item_reverted_to_draft" => "Core Value reverted to draft.",
            "item_scheduled" => "Core Value scheduled.",
            "item_updated" => "Core Value updated.",
            "item_link" => "Core Value Link",
            "item_link_description" => "A link to a core value.",
        ],
        "description" => "Fundamental beliefs and principles",
        "public" => true,
        "show_in_nav_menus" => false,
        "show_in_admin_bar" => false,
        "show_in_rest" => true,
        "menu_icon" => "dashicons-heart",
        "supports" => [
            0 => "title",
            1 => "editor",
            2 => "thumbnail",
        ],
        "rewrite" => [
            "with_front" => false,
            "pages" => false,
        ],
        "delete_with_user" => false,
    ]);
});
