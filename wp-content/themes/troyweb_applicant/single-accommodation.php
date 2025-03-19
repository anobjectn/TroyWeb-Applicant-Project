<?php 
/*
 * Accommodation Single Post Template
 * For more info: http://codex.wordpress.org/Post_Type_Templates
*/
?><?php get_header(); ?>

	<div id="content">

		<div id="inner-content">

			<main id="main" class="main twa-grid" role="main" itemscope itemprop="mainContentOfPage" itemtype="https://schema.org/Blog"><?php 
				get_template_part( 'templates/hero-slider' );

				get_template_part( 'templates/interior-page', 'header' );

				if(acf_and('content_sections')):
					get_template_part( 'templates/content-sections', 'loop' );
				endif;

				get_template_part( 'templates/accommodation', 'list' );

				if(acf_and('content_sections_secondary','options')):
					get_template_part( 'templates/content-sections-secondary', 'loop' );
				endif;

				?>

			</main>

		</div>

	</div>

<?php get_footer(); ?>
