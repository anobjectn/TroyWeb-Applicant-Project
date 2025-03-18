<?php
/**
 * 
 * Template Part: Byline
 * Description: Code for byline using functions from WP Twenty Seventeen theme.
 * 
 * @example <?php get_template_part( 'templates/byline'); ?>
 * 
 * @author  Joshua Michaels for studio.bio <info@studio.bio>
 * @since   1.0.0
 * @version 1.3
 * @license WTFPL
 * 
 * @see     WordPress Twenty Seventeen theme code.
 * 
 */
?>

<div class="byline-wrap">

    <?php // Get the author name; wrap it in a link.

        echo '<span class="posted-on">' . plate_time_link() . '</span>';

     ?>

</div>