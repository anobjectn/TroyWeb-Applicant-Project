<?php
/*
 Template Name: Flexible Content Sections
 * 
 * For more info: http://codex.wordpress.org/Page_Templates
 * 
 * Visual interactive WordPress template hierarchy: https://wphierarchy.com
*/
?><?php get_header(); ?>

<div id="content">
	<div id="inner-content">
		<main id="main" class="main twa-grid" role="main" itemscope itemprop="mainContentOfPage" itemtype="https://schema.org/Blog"><?php 
            get_template_part( 'templates/hero-slider' );
            get_template_part( 'templates/interior-page', 'header' );

            
            if(acf_and('content_sections')):
                get_template_part( 'templates/content-sections', 'loop' );
            endif;?>

		</main>


	</div>

</div>

<?php get_footer(); ?>
