<?php get_header(); ?>

	<div id="content">

		<div id="inner-content">

			<main id="main" class="main npc-grid" role="main">

				<div class="section-page-green text-align-center">
					<h1 class="archive-title"><span><?php _e( 'Search Results for:', 'troywebapplicant' ); ?></span> <span class="terms color-black"><?php echo esc_attr(get_search_query()); ?></span></h1>
					<?php 
					// global $wp_query;
					$fount_posts = $wp_query->found_posts;
					$fount_post_label = $fount_posts == 1 ? 'Result' : 'Results';
					// cfdump($fount_posts);
					?>
					<div class="search-results-meta"><?php echo $fount_posts.' '.$fount_post_label;?></div>
				</div>


				<div class="search-result-list">
					<?php if (have_posts()) : while (have_posts()) : the_post();
						$post_type = get_post_type();
						$post_type_class = 'post-type-' . $post_type;
						// cfdump($post_type); 
						$result_item_classes = [
							'post-search-result',
							$post_type_class,
						];
						?>
	
						<article id="post-<?php the_ID(); ?>" <?php post_class($result_item_classes); ?> role="article">
	
							<header class="entry-header article-header">
	
								<h3 class="search-title entry-title large-text">
	
								<?php the_title(); ?>
	
								</h3>
								
								<?php // get_template_part( 'templates/byline'); ?>
	
							</header><?php 
								$thumb_class = has_post_thumbnail() ? 'has-thumbnail' : 'no-thumbnail';	
								$section_classes = [
									'entry-content',
									$thumb_class,
								];?>
	
							<section class="<?php echo implode(' ',$section_classes);?>">
								
								<?php get_template_part( 'templates/content', 'excerpt'); ?>
	
							</section><?php 
							$result_link = [
								'url' => get_the_permalink(),
								'title' => get_the_title().'...	 More',
							];
							echo cover_link($result_link); ?>
						</article>
	
					<?php endwhile; ?>
	
						<?php plate_page_navi( $wp_query ); ?>
	
					<?php else : ?>
	
						<?php get_template_part( 'templates/404'); ?>
	
					<?php endif; ?>
				</div>


			</main>

		</div>

	</div>

    <?php // get_sidebar(); ?>

<?php get_footer(); ?>
