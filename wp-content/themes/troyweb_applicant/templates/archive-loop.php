<?php
/**
 * 
 * Template Part: Archive Loop
 * Description: Loop code for the archive.php template.
 * 
 * @example <?php get_template_part( 'templates/archive', 'loop'); ?>
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
<div class="npc-post-list"><?php 
	if (have_posts()) : while (have_posts()) : the_post(); ?>
		<article id="post-<?php the_ID(); ?>" <?php post_class('npc-post-card'); ?> role="article">
			<div class="npc-post-card-visual"><?php 
				the_post_thumbnail( 'plate-thumb-600' ); ?>
			</div>
			<div class="npc-post-card-textual">
				<h3 class="h2 entry-title">
					<?php the_title(); ?>
				</h3>
				
			</div>
			<a href="<?php the_permalink() ?>" class="cover-link" rel="bookmark" title="<?php the_title_attribute(); ?>"></a>
	
		</article> <?php // end article ?>
	
	<?php endwhile; ?>
	
		<?php get_template_part( 'templates/post-navigation'); ?>
	
	<?php else : ?>
	
		<?php get_template_part( 'templates/404'); ?>
	
	<?php endif; ?>
</div>	