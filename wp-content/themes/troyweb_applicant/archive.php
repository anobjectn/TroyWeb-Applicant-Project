<?php get_header(); ?>
	
	<div id="content">

		<div id="inner-content" class="">

			<main id="main" class="main npc-grid" role="main" itemscope itemprop="mainContentOfPage" itemtype="https://schema.org/Blog">

				<?php // Edit the loop in /templates/archive-loop. Or roll your own. ?>
				<?php get_template_part( 'templates/archive', 'loop'); ?>

			</main>

		</div>

	</div>

	<?php // get_sidebar(); ?>

<?php get_footer(); ?>
