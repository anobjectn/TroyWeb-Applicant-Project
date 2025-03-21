<?php
/**
 * 
 * Template Part: Single
 * Description: Loop code for Single Posts.
 * 
 * @example <?php get_template_part( 'templates/single', 'loop'); ?>
 * 
 * @author  Joshua Michaels for studio.bio <info@studio.bio>
 * @since   1.0.0
 * @version 1.3
 * @license WTFPL
 * 
 * @see     https://konstantin.blog/2013/get_template_part/
 *          http://buildwpyourself.com/get-template-part/
 * 
 */
?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

	<article id="post-<?php the_ID(); ?>" <?php post_class('full-width'); ?> role="article" itemscope itemprop="blogPost" itemtype="https://schema.org/BlogPosting">

        
        <section class="entry-content twa-grid" itemprop="articleBody">
            <header class="article-header entry-header full-width twa-grid">                
                <div class="twa-post-banner-image-container full-width">
                    <div class="twa-post-banner-image-container-inner">
                        <img src="<?php echo get_theme_file_uri(); ?>/library/images/hero-background_r.jpg" width="1440" height="797" itemprop="logo" alt="Troy Web Consulting" />
                    </div>
                </div>
                
                <div class="applicant-meta-container">
                    <h1 class="entry-title single-title" itemprop="headline" rel="bookmark">
                        Troy Web Developers: <?php 
                        the_title(); ?>
                    </h1><?php 

                    if ( has_post_thumbnail() ):?>
                        <div class="twa-post-feature-image-container"><?php 
                            the_post_thumbnail('large'); ?>
                        </div><?php 
                    endif; ?>
                    <div class="header-meta-facets"><?php 
                        $species = get_acf_field('species');
                        if ($species): ?>
                            <div class="meta-facet species">
                                <div class="label">Species</div>
                                <div class="value"><?php 
                                    echo $species; ?>
                                </div>
                            </div><?php
                        endif;
    
                        // Fetch and list terms from the 'skill' taxonomy
                        $skills = get_the_terms(get_the_ID(), 'skill');
                        if ($skills && !is_wp_error($skills)):?>
                            <div class="meta-facet skills">
                                <div class="label">Skills</div>
                                <div class="value"><?php 
                                    $skill_names = array_map(function($skill) {
                                        return esc_html($skill->name);
                                    }, $skills);

                                    //sort($skill_names);

                                    echo implode(', ', $skill_names); ?>
                                </div>
                            </div><?php
                        endif; ?>
                    </div>
                </div>
                                    
            </header> <?php // end article header ?>
    
            <section class="entry-content-inner full-width twa-grid" itemprop="articleBody">

                <div class="meta-facet about-me post-content">
                    <div class="label">About Me</div>
                    <div class="value"><?php the_content(); ?></div>
                </div><?php 

                $core_values = get_acf_field('core_values');
                if(is_non_empty_array($core_values)):?>
                    <div class="meta-facet core-values full-width twa-grid">
                        <div class="core-label label">Core Values</div>
                        <div class="core-values-list full-width"><?php 
                            // cfdump($core_values);
                            foreach ($core_values as $core_value):?>
                                <div class="core-value value"><?php
                                    $cv_featured_id = $core_value->ID;
                                    $cv_title = $core_value->post_title;
                                    $cv_post_content = $core_value->post_content;
                                    $cv_thumbnail = get_the_post_thumbnail($cv_featured_id, 'thumbnail');
                                    if($cv_thumbnail):
                                        echo '<div class="core-value-thumbnail">'.$cv_thumbnail.'</div>';
                                    endif;
                                    if($cv_title):
                                        echo '<h3 class="core-value-title">'.$cv_title.'</h3>';
                                    endif;
                                    if($cv_post_content):
                                        echo '<div class="core-value-content">'.$cv_post_content.'</div>';
                                    endif;?>
                                </div><?php 
                            endforeach;?>
                        </div>
                    </div><?php 
                endif;
                

                
                // Fetch and list terms from the 'experience' taxonomy
                $experiences = get_the_terms(get_the_ID(), 'experience');
                $experince_image_id = get_acf_field('experience_image');
                if ($experiences && !is_wp_error($experiences)):?>
                    <div class="applicant-experience">
                        <div class="label navigation-heading-label">Experience</div>
                        <div class="value font-oregano">
                            <ul class="experience-list"><?php 
                                foreach ($experiences as $experience):
                                    echo '<li>' . esc_html($experience->name) . '</li>';
                                endforeach;?>
                            </ul>
                        </div><?php 
                        if($experince_image_id):
                            echo '<div class="experience-image">'.wp_get_attachment_image( $experince_image_id,'large' ).'</div>';
                        endif;?>
                    </div><?php 
                endif; ?>
            </section> <?php // end article section ?>
    
        </section>
		

        <?php //comments_template(); ?>

	</article> <?php // end article ?>

<?php endwhile; ?>

<?php else : ?>

    <?php get_template_part( 'templates/404'); ?>

<?php endif; ?>