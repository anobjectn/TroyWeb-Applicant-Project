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

		<h1 class="entry-title single-title" itemprop="headline" rel="bookmark"><?php the_title(); ?></h1>

		<div class="npc-post-row">
			<section class="entry-content" itemprop="articleBody">
				<header class="article-header entry-header">
		
		
					<?php // Delete or comment out if you don't need this on your page or post. Edit in /templates/byline.php ?>
					<?php get_template_part( 'templates/byline'); ?>
						
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
            <aside><?php 
                $more_button = get_acf_field('ticketing_more_button');
                if(is_non_empty_array($more_button)):?>
                    <div class="event-more-button-container"><?php 
                        echo link_button($more_button,'green-button wide-button'); ?>
                    </div><?php
                endif; ?>

                <div class="share-event-container">
                    <h4>Share Post:</h4><?php 
                    echo social_sharing_buttons();?>
                </div>

				<div class="other-posts">
					<h4>Related Posts:</h4><?php 
					plate_related_posts(); ?>
				</div>
                
                <div class="event-upcoming-small-list mq-desktoponly">
                    <h4>Upcoming:</h4><?php 
                    echo do_shortcode('[events_list limit="4"]<div class="event-upcoming-small-item"><div class="event-upcoming-date" data-wrap-after-space-and-add-class="number">#_EVENTDATES</div><div class="event-upcoming-name">#_EVENTNAME</div><a href="#_EVENTURL" class="cover-link" title="more info"></a></div>[/events_list]'); ?>
                </div>

                <div class="event-upcoming-list mq-mobileonly">
                    <h4>Upcoming:</h4><?php 
                    echo do_shortcode( '[events_list limit="4" location="1"]' ); ?>
                </div>


            </aside>
		</div>
		

        <?php //comments_template(); ?>

	</article> <?php // end article ?>

<?php endwhile; ?>

<?php else : ?>

    <?php get_template_part( 'templates/404'); ?>

<?php endif; ?>