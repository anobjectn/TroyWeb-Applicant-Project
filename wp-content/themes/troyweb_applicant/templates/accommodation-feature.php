<?php 

$accommo_props = get_acf_field('a_properties');
$accommo_num_br = is_non_empty_array($accommo_props, 'number_of_bedrooms') ? $accommo_props['number_of_bedrooms'] : 1;
$accommo_sq_ft = is_non_empty_array($accommo_props, 'square_feet') ? $accommo_props['square_feet'] : false;
$accommo_banner_text = is_non_empty_array($accommo_props, 'banner_text') ? $accommo_props['banner_text'] : false;
$accommo_short_desc = is_non_empty_array($accommo_props, 'short_description') ? $accommo_props['short_description'] : false;

?><article id="feature-post-<?php the_ID(); ?>" <?php post_class('feature-accommodation fg-grid-col-narrow'); ?> role="article">
    <header class="entry-header article-header">
        <div class="roof-text"><?php 
            $a_type = get_the_terms( get_the_ID(), 'accommodation-type' );
            $a_type = join(', ', wp_list_pluck( $a_type , 'name') );
            echo $a_type; ?>
        </div>

        <h3 class="h2 entry-title">
            <?php the_title(); ?>
        </h3>
    
        <div class="accommodation-meta"><?php 

            if($accommo_num_br):
                echo $accommo_num_br.' BR <span class="seperator">|</span> ';
            endif;
            if($accommo_sq_ft):
                echo $accommo_sq_ft.' SQFT <span class="seperator">|</span> ';
            endif;
            if($accommo_short_desc): 
                echo $accommo_short_desc;
            endif; ?>
        </div>
        <div class="accommodation-content"><?php the_excerpt();?></div>
        <div class="action-row"><?php 
    
            $a_type_verb = 'View';
            
            switch ($a_type) {
                case 'Suites':
                    $a_type_label = 'Suite';
                    break;
                case 'Villas':
                    $a_type_verb = 'Explore';
                    $a_type_label = 'Villa';
                    break;			
                default:
                    $a_type_label = 'Room';
                    break;
            }
            
                ?>
            <a href="<?php the_permalink() ?>" rel="bookmark" class="view-link box-line-button" title="View <?php the_title_attribute(); ?>"><?php echo $a_type_verb.' '.$a_type_label;?></a>
            <a href="#book-now-url-goes-here" class="view-link golden-brown-button" title="Book Now" data-booking-type="">Book Now</a>
        </div>
    </header>
    <div class="accommodation-art"><?php 
        if($accommo_banner_text):?>
            <div class="banner-text"><?php echo $accommo_banner_text;?></div><?php
        endif;?>
        <div class="accommodation-feature-image"><?php 
            $feature_image_sq = get_acf_field('squarish_feature_image');
            $feature_image_sq_id = is_non_empty_array($feature_image_sq,'ID') ? $feature_image_sq['ID'] : false;
            // cfdump($feature_image_sq);
            if($feature_image_sq_id):
                echo wp_get_attachment_image( $feature_image_sq_id,'wide-lg' );
            else:
                the_post_thumbnail( 'wide-lg' );
            endif;?>
        </div>
    </div>
</article>