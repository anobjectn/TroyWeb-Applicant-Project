<?php if ( has_post_thumbnail() ): ?>

    <div class="post-thumbnail mq-desktoponly">
        <div class="post-thumbnail-inner" data-copy-img-src-to-closest=".post-thumbnail"><?php 
            the_post_thumbnail( 'plate-thumb-300' ); ?>
        </div>
    </div>

<?php endif; ?>

<div class="excerpt-container">
    <?php 

    $has_excerpt = has_excerpt(); // this doesnt do what I wanted
    // cfdump($has_excerpt);
    $excerpt = get_the_excerpt();
    $excerpt_length = strlen($excerpt);
    // cfdump($excerpt_length);
    // cfdump($excerpt);
    if($excerpt_length > 0):
        echo $excerpt;
    elseif(is_archive()):
        // echo 'A';
        // if(is_post_type_archive()):
        //     $post_type = get_post_type();
        //     echo '<p>This is an ' . $post_type . ' listing page.</p>';
        // elseif(is_category()):
        //     $category = single_cat_title('', false);
        //     echo '<p>This is an listing page for the category: ' . $category . '.</p>';
        // elseif(is_tag()):
        //     $tag = single_tag_title('', false);
        //     echo '<p>This is an listing page for the tag: ' . $tag . '.</p>';
        // elseif(is_date()):
        //     echo '<p>This is an listing page for the date: ' . get_the_date() . '.</p>';
        // else:
        //     echo '<p>This is a post listing page.</p>';
        // endif;           
    endif;
    ?>
</div>