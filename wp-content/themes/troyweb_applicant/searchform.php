<?php
/*
* This is the basic search form that will get shown when you use get_search_form() anywhere in your theme.
* Updated for accessibility November, 2018.
*
*/
?>

<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">

    <label class="sr-only">
        <span class="search-label" for="search"><?php echo _x( 'Search for:', 'label', 'troywebapplicant' ) ?></span>
    </label>

    <div class="search-input">

        <input type="search" class="search-field"
            required
            placeholder="<?php echo esc_attr_x( 'Search', 'placeholder', 'troywebapplicant' ) ?>"
            value="<?php echo get_search_query() ?>" name="s"
            title="<?php echo esc_attr_x( 'Search for:', 'label', 'troywebapplicant' ) ?>" />

        <button type="submit" class="search-submit" aria-label="Submit search form">
            <i class="fa-regular fa-arrow-right"></i>
        </button>
    </div>
    
</form>