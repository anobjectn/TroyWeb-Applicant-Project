<?php 
/*
 * Cider Single Post Template
 * For more info: http://codex.wordpress.org/Post_Type_Templates
*/





?><?php get_header(); ?>

	<div id="content">

		<div id="inner-content">

			<main id="main" class="main twa-grid" role="main" itemscope itemprop="mainContentOfPage" itemtype="https://schema.org/Blog">
				<div class="back-container twa-grid-col-wide no-vertical-padding"><a href="/our-cider" title="Back to Our Cider page"><img src="<?php echo get_theme_file_uri(); ?>/library/images/arrow-circle-left.svg" width="46" height="46" class="style-svg"></a></div>
				<div class="cider-single-row">
					<div class="cider-single-col-main text-align-center">
						<h1><?php the_title(); ?></h1><?php

						$cider_specs = get_acf_field('specs');
						$cider_alcohol_by_volume = is_non_empty_array($cider_specs,'alcohol_by_volume') ? $cider_specs['alcohol_by_volume'] : false;
						$cider_fluid_ounces = is_non_empty_array($cider_specs,'fluid_ounces') ? $cider_specs['fluid_ounces'] : false;
						$cider_gluten = is_non_empty_array($cider_specs,'gluten') ? $cider_specs['gluten'] : false; ?>
						<div class="cider-specs"><?php 
							if($cider_alcohol_by_volume): ?>
								<div class="cider-alcohol-by-volume"><?php echo $cider_alcohol_by_volume; ?>% ABV</div><?php
							endif;
							if($cider_fluid_ounces): ?>
								<div class="cider-fluid-ounces"><?php echo $cider_fluid_ounces; ?> FL OZ</div><?php
							endif;
							if($cider_gluten): ?>
								<div class="cider-gluten"><?php echo $cider_gluten; ?></div><?php
							endif; 	?>
						</div>

						<div class="cider-primary-go-mobile mq-mobileonly">
							<div class="cider-feature-image-container"><?php 
								echo get_the_post_thumbnail( $post->ID, 'large' ); ?>
							</div>
							<div class="cider-get">
								<div>
									<a href="/" class="green-button">find it near you</a>
								</div>
								<div>
									<a href="/" class="underline-to-box">shop online</a>
								</div>
							</div>
						</div>
						
						<div class="single-cider-content entry-content"><?php 
							the_content();?>
						</div><?php
							
						$cider_crafted_withs = get_acf_field( 'crafted_with' );
						if(is_non_empty_array($cider_crafted_withs)):?>
							<div class="cider-crafted-withs">
								<div class="cider-crafted-with-header">CRAFTED WITH</div>
								<div class="cider-crafted-withs-inner"><?php 
									foreach ($cider_crafted_withs as $cider_crafted_with):?>
										<div class="cider-crafted-width"><?php 
											$cider_ingredient = is_non_empty_array($cider_crafted_with,'ingredient') ? $cider_crafted_with['ingredient'] : false;
											$cider_source = is_non_empty_array($cider_crafted_with,'source') ? $cider_crafted_with['source'] : false;
											if($cider_ingredient): ?>
												<div class="cider-ingredient"><?php echo $cider_ingredient; ?></div><?php
											endif;
											if($cider_source): ?>
												<div class="cider-source"><?php echo $cider_source; ?></div><?php
											endif;?>										
										</div><?php 
									endforeach;
								?></div>
							</div><?php 
						endif;

						$cider_flavor = get_acf_field('flavor');
						$cider_sweetness = is_non_empty_array($cider_flavor,'sweetness') ? $cider_flavor['sweetness'] : '';
						$cider_sharpness = is_non_empty_array($cider_flavor,'sharpness') ? $cider_flavor['sharpness'] : '';?>
						<div class="cider-flavor">
							<div class="cider-flavor-spectrum cider-sweetness">
								<div class="flavor-label flavor-label-min">Dry</div>
								<div class="flavor-value" style="--value:<?php echo $cider_sweetness; ?>"></div>
								<div class="flavor-label flavor-label-max">Sweet</div>
							</div>
							<div class="cider-flavor-spectrum cider-sharpness">
								<div class="flavor-label flavor-label-min">Mild</div>
								<div class="flavor-value" style="--value:<?php echo $cider_sharpness; ?>"></div>
								<div class="flavor-label flavor-label-max">Sharp</div>
							</div>
						</div>
						
					</div>
					<div class="mq-desktoponly cider-single-col-secondary text-align-center">
						<div class="cider-feature-image-container"><?php 
							echo get_the_post_thumbnail( $post->ID, 'large' ); ?>
						</div>
						<div class="cider-get">
							<div>
								<a href="/cider-finder/" class="green-button">find it near you</a>
							</div>
							<div>
								<a href="/shop/" class="underline-to-box">shop online</a>
							</div>
							<div>
								<img src="/wp-content/themes/ninepincider/library/images/snya-logo.svg" width="100" height="98" alt="Drink NY Apples" >
							</div>
						</div>
					</div>
				</div><?php 

				$cider_images = get_acf_field( 'images' );
				if(is_non_empty_array($cider_images)):?>
					<div class="cider-image-slider twa-grid full-width">
						<div class="cider-image-slider-outer">
							<div class="cider-image-slider-inner"><?php 
								foreach ($cider_images as $cider_image):
									// cfdump($cider_image);
									$cider_image_id = is_non_empty_array($cider_image,'id') ? $cider_image['id'] : false;
									if($cider_image_id):
										echo '<div class="image-container">'.wp_get_attachment_image( $cider_image_id, 'large' ).'</div>';
									endif;
								endforeach;?>
							</div>
							<!--
							<div class="image-strip-slider-button-prev mq-desktoponly"><img src="<?php echo get_theme_file_uri(); ?>/library/images/arrow-circle-left.svg" width="46" height="46" class="style-svg"></div>
							<div class="image-strip-slider-button-next mq-desktoponly"><img src="<?php echo get_theme_file_uri(); ?>/library/images/arrow-circle-right.svg" width="46" height="46" class="style-svg"></div>
							-->
						</div>
					</div><?php
				endif;
								
				$current_post_id = get_the_ID();
				$related_ciders_query = related_posts_by_taxonomy( $current_post_id, 'availability-type' );
				$related_ciders = $related_ciders_query->posts;

				if(is_non_empty_array($related_ciders)):?>
					<div class="related-cider">
						<div class="related-cider-header"><h3>You May Also Like</h3></div>
						<div class="related-cider-outer swiper">
							<div class="related-cider-inner swiper-wrapper"><?php 
								foreach ($related_ciders as $related_cider):
									// cfdump($related_cider);
									$related_cider_id = $related_cider->ID;
									$related_cider_title = $related_cider->post_title;
									$related_cider_specs = get_acf_field('specs', $related_cider_id);
									$related_cider_form_factor = is_non_empty_array($related_cider_specs,'form_factor') ? $related_cider_specs['form_factor'] : '';
									$related_cider_image = get_the_post_thumbnail( $related_cider_id, 'plate-thumb-300' );
	
									$related_cider_availability_types = get_the_terms($related_cider_id,'availability-type');
									$related_cider_availability_type = is_non_empty_array($related_cider_availability_types) ? $related_cider_availability_types[0]->name : false;
	
									$related_cider_classes = [
										'single-cider-item',
										'single-related-cider-item',
										'cider-carousel-slide',
										'swiper-slide',
									];
									foreach($related_cider_availability_types as $related_cider_availability_type):
										array_push($related_cider_classes,'type-'.$related_cider_availability_type->slug);
									endforeach;?>
									<article id="post-<?php echo $related_cider_id; ?>" <?php post_class($related_cider_classes); ?> role="article">
										<div class="post-thumbnail cider-image">
											<?php echo $related_cider_image; ?>
										</div>
										<div class="cider-text">
											<h3 class="h2 entry-title"><?php echo $related_cider_title; ?></h3>
											<div class="entry-meta mq-desktoponly"><?php
												if($related_cider_form_factor):
													echo '<span class="form-factor">'.$related_cider_form_factor.'</span>';
												endif; ?>
											</div>
										</div><?php 
										echo cover_link(['url'=>get_the_permalink($related_cider_id)],'', esc_attr($related_cider_title)); ?>
									</article><?php
								endforeach;?>
							</div>
							<div class="mq-mobileonly rc-slider-pagination swiper-pagination"></div>
						</div>
					</div><?php 
				endif;

				// cfdump($current_post_id);
				// cfdump($related_ciders_query->posts);
				
				
				?>
			</main>

			<?php // plate_related_posts(); ?>

		</div>

	</div>

    <?php // get_sidebar(); ?>

<?php get_footer(); ?>
