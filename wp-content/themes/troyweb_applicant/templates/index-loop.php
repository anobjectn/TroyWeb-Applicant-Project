<?php
/**
 * 
 * Template Part: Index Loop
 * Description: Loop code for the index.php template.
 * 
 * @example <?php get_template_part( 'templates/index', 'loop'); ?>
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
<?php 

if (have_posts()) : ?>	
	<div class="npc-posts">
		<div class="npc-post-filters"><?php
			$post_categories = get_categories([
				'orderby' => 'name',
				'order'   => 'ASC',
				'hide_empty' => 1
			]);
			$posts_per_page = 8;
			$initial_page_count = ceil(wp_count_posts('post')->publish / $posts_per_page); ?> 
			<ul class="post-filter-list nostyle" data-filter-collection="npc-post-card">
				<li class="post-filter-li">
					<button type="button" class="post-filter-button post-filter-by-category filter-button active" data-filter-term="all">All <i class="if-active fa-light fa-check" aria-hidden="true"></i></button>
				</li><?php 
				foreach( $post_categories as $category ):?>
					<li class="post-filter-li">
						<button type="button" class="post-filter-button post-filter-by-category filter-button" data-filter-term="category-<?php echo $category->slug;?>"><?php echo $category->name;?> <i class="if-active fa-light fa-check" aria-hidden="true"></i></button>
					</li><?php 
				endforeach; ?>
			</ul>
		</div>
		<div class="npc-post-list filter-able-list" data-ppp="<?php echo $posts_per_page;?>"><?php 
			global $wp_query;
			while (have_posts()): 
				the_post();
				$this_posts_categories = get_the_category();
				$post_classes = [
					'npc-post-card',
				];
				foreach( $this_posts_categories as $category ):
					array_push($post_classes,'category-' . $category->slug);
				endforeach;
				$current_post_index = $wp_query->current_post + 1; // +1 because it's zero-indexed
				$current_post_page_number = ceil($current_post_index / $posts_per_page);
				$initially_hidden_class = $current_post_page_number == 1 ? false : 'filtered-out';
				if($initially_hidden_class):
					array_push($post_classes,$initially_hidden_class);
				endif;
				?>
				<article id="post-<?php the_ID(); ?>" <?php post_class($post_classes); ?> role="article" data-page="<?php echo $current_post_page_number;?>"><?php 
					if ( has_post_thumbnail() ):?>
						<div class="npc-post-card-visual"><?php 
							// get the --image-src
						?>
							<div class="npc-post-card-visual-inner" data-copy-img-src-to-closest=".npc-post-card-visual"><?php 
								the_post_thumbnail( 'plate-thumb-600' ); ?>
							</div>
						</div><?php 
					else:?>
						<div class="npc-post-card-visual not-available">
							<div class="date">
								<span class="day"><?php echo get_the_date('j');?></span>
								<span class="month"><?php echo get_the_date('M');?></span>
							</div>
						</div><?php 
					endif;?>
					<div class="npc-post-card-textual">
						<div class="npc-post-card-date"><?php
							echo get_the_date('M j, Y'); ?></div>
						<h3 class="h2 entry-title">
							<?php the_title(); ?>
						</h3>						
					</div>
					<a href="<?php the_permalink() ?>" class="cover-link" rel="bookmark" title="<?php the_title_attribute(); ?>"></a>
				</article><?php 
			endwhile; ?>
		</div>
		<ul class="post-paging-filters nav nav-h filter-like-radios"><?php 
			for ($i = 1; $i <= $initial_page_count; $i++):
				$button_classes = [
					'post-filter-button',
					'paging-filter-button',
					'filter-button',
					$i === 1 ? 'active' : '',
				]; ?>
				<li class="paging-filter-li">
					<button type="button" class="<?php echo implode(' ',$button_classes);?>" data-filter-term="page-<?php echo $i;?>"><?php echo $i;?></button>
				</li><?php
			endfor; ?>
		</ul>
		<?php //get_template_part( 'templates/post-navigation'); ?>
	</div><?php 
else:
	get_template_part( 'templates/404');
endif; ?>