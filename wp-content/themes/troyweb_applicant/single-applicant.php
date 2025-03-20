<?php get_header(); ?>

	<div id="content">

		<div id="inner-content" class="unwrap">
			<main id="main" class="main twa-grid" role="main" itemscope itemprop="mainContentOfPage" itemtype="https://schema.org/Blog">
				<!-- <div class="back-container twa-grid-col-wide no-vertical-padding"><a href="/blog/" title="Back to Our Blog page"><img src="<?php echo get_theme_file_uri(); ?>/library/images/arrow-circle-left.svg" width="46" height="46" class="style-svg"></a></div> -->
				<?php get_template_part( 'templates/single-applicant', 'loop'); ?>
			</main>
		</div>

	</div>

    <?php // get_sidebar(); ?>

<?php get_footer(); ?>
