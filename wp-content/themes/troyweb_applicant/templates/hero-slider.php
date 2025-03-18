<?php 

global $post;
if(is_post_type_archive('accommodation') || is_post_type_archive('experience') || is_post_type_archive('package')):
    $fields_location = 'options';
else:
    $fields_location = isset($post->ID) ? $post->ID : 'options';
endif;

if(is_post_type_archive('experience')):
    $hero_slides_field_name = 'hero_slider_slides_e';
    $hero_options_field_name = 'hero_slider_options_e';
elseif(is_post_type_archive('package')):
    $hero_slides_field_name = 'hero_slider_slides_p';
    $hero_options_field_name = 'hero_slider_options_p';
else:
    $hero_slides_field_name = 'hero_slider_slides';
    $hero_options_field_name = 'hero_slider_options';
endif;


$hero_slides = get_acf_field($hero_slides_field_name, $fields_location);
$hero_options = get_acf_field($hero_options_field_name, $fields_location);
$insert_hero_if_empty = false; // WHEN TRUE, INSERTS DEFAULT HERO SLIDE IF NO SLIDES ARE DEFINED

if(is_non_empty_array($hero_slides)):
    $slide_count = count($hero_slides);
    $hero_ani = is_non_empty_array($hero_options,'transition') ? $hero_options['transition'] : false;
    $hero_ani_style = is_non_empty_array($hero_ani,'style') ? $hero_ani['style'] : 'slide';
    $hero_ani_speed = is_non_empty_array($hero_ani,'speed') ? $hero_ani['speed'] : '1000';
    $hero_ani_auto = is_non_empty_array($hero_ani,'auto_play') ? $hero_ani['auto_play'] : ''; 
    $hero_ani_delay = !empty($hero_ani_auto) && is_non_empty_array($hero_ani,'delay') ? $hero_ani['delay'] : '';
    
    $hero_show_explore = is_non_empty_array($hero_options,'show_explore') && $hero_options['show_explore'] === 'show' ? true : false; 

    $section_classes = [
        'content-section',
        'content-section-large-slider',
        'full-width',
        'slide-count-'.$slide_count,
        $hero_show_explore ? 'show-explore' : 'hide-explore',
        $slide_count > 0 ? 'swiper' : 'no-swiper',
    ]; ?>
    <div class="<?php echo implode(' ',$section_classes);?>" data-swiper-effect="<?php echo $hero_ani_style;?>" data-swiper-speed="<?php echo $hero_ani_speed;?>" data-swiper-autoplay="<?php echo $hero_ani_auto;?>" data-swiper-delay="<?php echo $hero_ani_delay;?>">
        <div class="slide-collection swiper-wrapper" data-remove-hidden=".content-section-large-slider .slide-collection img"><?php 
            $slide_i = 0;
            foreach ($hero_slides as $slide):
                $slide_type = is_non_empty_array($slide,'type') ? $slide['type'] : 'image';
                $video = $slide_type == 'video' && is_non_empty_array($slide,'video_background') ? $slide['video_background'] : false;
                $image_sm = $slide_type == 'image' && is_non_empty_array($slide,'image_mb') ? $slide['image_mb'] : false;
                $image_lg = $slide_type == 'image' && is_non_empty_array($slide,'image_dt') ? $slide['image_dt'] : false;
                $roof_text = is_non_empty_array($slide,'text_roof') ? $slide['text_roof'] : false;
                $large_text = is_non_empty_array($slide,'text_large') ? $slide['text_large'] : false;
                $cta_button = is_non_empty_array($slide,'cta_button') ? $slide['cta_button'] : false;
                $slide_delay = is_non_empty_array($slide,'slide_delay') ? $slide['slide_delay'] : false;
                
                $slide_classes = [
                    'slide',
                    'swiper-slide',
                    'stack-grid',
                    esc_attr( 'slide-'.$slide_type ),
                    $slide_type == 'video' ? 'bg-type-video-container' : 'bg-type-image-container',
                ];
                $slide_id = 'hero-slider'.$slide_i;

                $slide_timing_attr = $slide_delay ? 'data-swiper-autoplay="'.$slide_delay.'"' : '';
                ?>
                <div id="<?php echo $slide_id;?>" class="<?php echo implode(' ',$slide_classes);?>" <?php echo $slide_timing_attr;?>><?php 
                    if($video):
                        $video_url = get_iframe_src_from_iframe_markup($video).'&autoplay=true&loop=true';
                        if(preg_match("/(https?:\/\/)?(www\.)?(player\.)?vimeo\.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/", $video_url, $output_array)):
                            $video_id = $output_array[5];?>
                            <div class="video plyr__video-embed" data-plyr-provider="vimeo" data-plyr-embed-id="<?php echo $video_id;?>"></div><?php 
                        else:?>
                            <div class="video plyr__video-embed" data-plyr-provider="vimeo" data-plyr-embed-id="<?php echo $video_url;?>"></div><?php 
                        endif;
                    endif;
                    if($image_sm):
                        $image_sm_id = $image_sm['id'];
                        echo wp_get_attachment_image( $image_sm_id,'medium_large', false, ['class'=>'mq-mobileonly'] );
                    endif;
                    if($image_lg):
                        $image_lg_id = $image_lg['id'];
                        echo wp_get_attachment_image( $image_lg_id,'wide-xxl', false, ['class'=>'mq-desktoponly'] );
                    endif;
                    if($roof_text || $large_text || $cta_button):?>
                        <div class="slide-text"><?php 
                            if($roof_text):
                                echo '<div class="roof-text">'.$roof_text.'</div>';
                            endif;
                            if($large_text):
                                echo '<div class="large-text">'.$large_text.'</div>';
                            endif;
                            if($cta_button):
                                echo '<div class="cta-button-container">'.link_button($cta_button,'box-line-button').'</div>';
                            endif;?>
                        </div><?php 
                    endif;
                    ?>
                </div><?php 
                $slide_i++;
            endforeach;?>            
        </div><?php 
        if($slide_count > 1):?>
            <div class="swiper-button-prev"><i class="fa-light fa-arrow-left"></i></div>
            <div class="swiper-button-next"><i class="fa-light fa-arrow-right"></i></div><?php
        endif;
        
        if($hero_show_explore):?>
            <div class="explore-hint">
                <a href="#content-sections"><img src="<?php echo get_theme_file_uri(); ?>/library/images/explore-hint.svg" width="70" height="66" alt="Explore"></a>
            </div><?php 
        endif; ?> 
    </div><?php 
elseif($insert_hero_if_empty):?>
    <div class="content-section content-section-large-slider full-width slide-count-1 no-swiper">
        <div class="slide-collection swiper-wrapper">
            <div class="slide slide-image swiper-slide">
                <img width="768" height="871" src="/wp-content/uploads/2023/11/our-story-hero-image_sm-768x871.jpg" class="mq-mobileonly" alt="" decoding="async" fetchpriority="high" srcset="/wp-content/uploads/2023/11/our-story-hero-image_sm-768x871.jpg 768w, /wp-content/uploads/2023/11/our-story-hero-image_sm-529x600.jpg 529w, /wp-content/uploads/2023/11/our-story-hero-image_sm-903x1024.jpg 903w, /wp-content/uploads/2023/11/our-story-hero-image_sm-640x726.jpg 640w, /wp-content/uploads/2023/11/our-story-hero-image_sm.jpg 920w" sizes="(max-width: 768px) 100vw, 768px">
                <img width="2160" height="1320" src="/wp-content/uploads/2023/11/our-story-hero-image@1.5x.jpg" class="mq-desktoponly" alt="" decoding="async" srcset="/wp-content/uploads/2023/11/our-story-hero-image@1.5x.jpg 2160w, /wp-content/uploads/2023/11/our-story-hero-image@1.5x-600x367.jpg 600w, /wp-content/uploads/2023/11/our-story-hero-image@1.5x-1024x626.jpg 1024w, /wp-content/uploads/2023/11/our-story-hero-image@1.5x-768x469.jpg 768w, /wp-content/uploads/2023/11/our-story-hero-image@1.5x-1536x939.jpg 1536w, /wp-content/uploads/2023/11/our-story-hero-image@1.5x-2048x1252.jpg 2048w, /wp-content/uploads/2023/11/our-story-hero-image@1.5x-640x391.jpg 640w, /wp-content/uploads/2023/11/our-story-hero-image@1.5x-1600x978.jpg 1600w" sizes="(max-width: 2160px) 100vw, 2160px">  
            </div>            
        </div> 
    </div><?php
else:?>
    <div class="content-section content-section-large-slider full-width slide-count-0 no-swiper">
    </div><?php 
endif;
