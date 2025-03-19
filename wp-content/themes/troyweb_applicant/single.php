<?php get_header(); ?>

	<div id="content">

		<div id="inner-content" class="unwrap"><?php
			$banner_image_info = get_acf_field('banner_image');
            $banner_image_id = is_non_empty_array($banner_image_info,'id') ? $banner_image_info['id'] : false;
			if($banner_image_id):?>
				<div class="npc-post-banner-image-container"><?php 
					echo wp_get_attachment_image($banner_image_id,'wide-xl'); ?>
				</div><?php 
			elseif ( has_post_thumbnail() ):?>
				<div class="npc-post-banner-image-container default-feature-image-only no-banner"><?php 
					the_post_thumbnail('wide-xl'); ?>
				</div><?php 
			endif; ?>
			<main id="main" class="main twa-grid" role="main" itemscope itemprop="mainContentOfPage" itemtype="https://schema.org/Blog">
				<div class="back-container twa-grid-col-wide no-vertical-padding"><a href="/blog/" title="Back to Our Blog page"><img src="<?php echo get_theme_file_uri(); ?>/library/images/arrow-circle-left.svg" width="46" height="46" class="style-svg"></a></div>
				<?php // Edit the loop in /templates/single-loop. Or roll your own. ?>
				<?php get_template_part( 'templates/single', 'loop'); ?>

			</main>

			<?php // related posts function; uncomment below to use ?>
			<?php // plate_related_posts(); ?>

		</div>

	</div>

    <?php // get_sidebar(); ?>

<?php get_footer(); ?>
