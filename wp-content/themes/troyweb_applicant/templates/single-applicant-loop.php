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
    
                                        echo implode(', ', $skill_names);?>
                                </div>
                            </div><?php
                        endif; ?>
                    </div>
                </div>
                                    
            </header> <?php // end article header ?>
    
            <section class="entry-content" itemprop="articleBody">

                <div class="meta-facet about-me post-content">
                    <div class="label">About Me</div>
                    <div class="value"><?php the_content(); ?></div>
                </div><?php 

                $core_values = get_acf_field('core_values');
                if(is_non_empty_array($core_values)):?>
                    <div class="meta-facet core-values"><?php 
                        // cfdump($core_values);
                        foreach ($core_values as $core_value):?>
                            <div class="core-value"><?php
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
                    </div><?php 
                endif;
                

                
                // Fetch and list terms from the 'experience' taxonomy
                $experiences = get_the_terms(get_the_ID(), 'experience');
                if ($experiences && !is_wp_error($experiences)):
                    echo '<ul class="experience-list">';
                    foreach ($experiences as $experience):
                        echo '<li>' . esc_html($experience->name) . '</li>';
                    endforeach;
                    echo '</ul>';
                endif; ?>
            </section> <?php // end article section ?>
    
            <footer class="article-footer">
    
                <?php // get_template_part( 'templates/category-tags'); ?>
    
            </footer> <?php // end article footer ?>
        </section>
		

        <?php //comments_template(); ?>

	</article> <?php // end article ?>

<?php endwhile; ?>

<?php else : ?>

    <?php get_template_part( 'templates/404'); ?>

<?php endif; ?>