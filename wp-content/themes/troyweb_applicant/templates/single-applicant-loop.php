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

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> role="article" itemscope itemprop="blogPost" itemtype="https://schema.org/BlogPosting">

        
        <div class="twa-post-row">
            <section class="entry-content" itemprop="articleBody">
                <header class="article-header entry-header"><?php
                    if ( has_post_thumbnail() ):?>
                        <div class="twa-post-banner-image-container default-feature-image-only no-banner"><?php 
                            the_post_thumbnail('wide-xl'); ?>
                        </div><?php 
                    endif; ?>
                    
                    <h1 class="entry-title single-title" itemprop="headline" rel="bookmark"><?php the_title(); ?></h1>
						
				</header> <?php // end article header ?>
		
				<section class="entry-content" itemprop="articleBody">
		
					<?php if ( has_post_format()) { 
						get_template_part( 'format', get_post_format() ); 
					} ?>
				
					<?php the_content(); ?>
		
				</section> <?php // end article section ?>
		
				<footer class="article-footer">
		
					<?php // get_template_part( 'templates/category-tags'); ?>
		
				</footer> <?php // end article footer ?>
			</section>

		</div>
		

        <?php //comments_template(); ?>

	</article> <?php // end article ?>

<?php endwhile; ?>

<?php else : ?>

    <?php get_template_part( 'templates/404'); ?>

<?php endif; ?>