<?php get_header(); ?>
	
	<div id="content">

		<div id="inner-content" class="">

			<main id="main" class="main npc-grid" role="main" itemscope itemprop="mainContentOfPage" itemtype="https://schema.org/Blog">
                <h1 class="nosho">Our Cider</h1><?php 

				$ph_textual = get_acf_field('our_cider_header_textual','option');
				$ph_textual_headline = is_non_empty_array($ph_textual,'headline') ? $ph_textual['headline'] : false;
				$ph_textual_short_text = is_non_empty_array($ph_textual,'short_text') ? $ph_textual['short_text'] : false;
				$ph_visual = get_acf_field('our_cider_header_visual','option');
				$ph_visual_type = is_non_empty_array($ph_visual,'visual_type') ? $ph_visual['visual_type'] : false;
				$ph_visual_image = $ph_visual_type == 'image' && is_non_empty_array($ph_visual,'image') ? $ph_visual['image'] : false;
				$ph_video_type = $ph_visual_type == 'video' && is_non_empty_array($ph_visual,'video_type') ? $ph_visual['video_type'] : false;
				$ph_visual_video_vimeo = $ph_visual_type == 'video' && is_non_empty_array($ph_visual,'video') && $ph_video_type == 'vimeo' ? $ph_visual['video'] : false;
				$ph_visual_video_local = $ph_visual_type == 'video' && is_non_empty_array($ph_visual,'video') && $ph_video_type == 'library' ? $ph_visual['video_from_library'] : false;

				// cfdump($ph_visual_type);
				// cfdump($ph_visual);
				// cfdump($ph_visual_video);
				// cfdump($ph_textual);
				// cfdump($ph_textual_headline);
				
				$ph_classes = [
					'page-header',
					$ph_visual_image || $ph_visual_video_vimeo || $ph_visual_video_local ? 'page-header-w-visual' : 'page-header-wo-visual',
					$ph_visual_image ? 'page-header-w-image' : 'page-header-wo-image',
					$ph_visual_video_vimeo || $ph_visual_video_local ? 'page-header-w-video' : 'page-header-wo-video',
					$ph_visual_video_vimeo ? 'video-type-vimeo' : '',
					$ph_visual_video_local ? 'video-type-local' : '',
				];
				?>
				<div class="<?php echo implode(' ',$ph_classes);?>"><?php 
					if($ph_textual_headline || $ph_textual_short_text):?>
						<div class="page-header-textual"><?php 
							if($ph_textual_headline):?>
								<h1><?php echo $ph_textual_headline; ?></h1><?php
							endif;
							if($ph_textual_short_text):?>
								<div class="ph-short-text"><?php 
									echo $ph_textual_short_text; ?>
								</div><?php  
							endif; ?></p>
						</div><?php
					endif;
					if($ph_visual_image || $ph_visual_video_vimeo || $ph_visual_video_local):?>
						<div class="page-header-visual"><?php 
							if($ph_visual_image && is_non_empty_array($ph_visual_image,'id')):?>
								<div class="ph-image-container"><?php 
									$image_id = $ph_visual_image['id'];
									if($image_id):
										echo wp_get_attachment_image($image_id,'large');
										// cfdump($ph_visual_image);
									endif; ?>
								</div><?php
							elseif($ph_visual_video_vimeo):
								$ph_visual_video_url = get_iframe_src_from_iframe_markup($ph_visual_video_vimeo).'&background=1&autopause=0&autoplay=1&loop=1&playsinline=1';
								if(preg_match("/(https?:\/\/)?(www\.)?(player\.)?vimeo\.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/", $ph_visual_video_url, $output_array)):
									$ph_visual_video_id = $output_array[5];?>
									<div class="ph-video-container"><div class="ph-video video plyr__video-embed" data-plyr-provider="vimeo" data-plyr-embed-id="<?php echo $ph_visual_video_id;?>"></div></div><?php 
								else:?>
									<div class="ph-video-container"><div class="ph-video video plyr__video-embed" data-plyr-provider="vimeo" data-plyr-embed-id="<?php echo $ph_visual_video_url;?>"></div></div><?php 
								endif;
							elseif($ph_visual_video_local):
                				// cfdump($ph_visual_video_local);?>
								<video autoplay="true" loop="true" muted="true" playsinline="true" class="page-header-video">
									<source src="<?php echo $ph_visual_video_local;?>?muted=1&autoplay=1&autopause=0" type="video/mp4" />
								</video><?php 
							endif; ?>
						</div><?php
					endif;	?>
				</div>
				<div class="tab-like-filters">
					<ul class="currently-available-filter cider-filter-list nav nav-h cider-filter-like-radios">
						<li><button type="button" class="ca-filter-button filter-button active" data-filter-term="currently-available">Available</button></li>
						<li><button type="button" class="ca-filter-button filter-button" data-filter-term="currently-unavailable">Unavailable</button></li>
					</ul>
				</div>
				
				<div class="cider-availability-types">
					<ul class="availability-type-filter nostyle cider-filter-list cider-filter-like-radios">
						<li><button type="button" class="at-filter-button filter-button active" data-filter-term="all">All Ciders <i class="if-active fa-light fa-check"></i></button><?php 
						$terms = get_terms('availability-type');
						if (!empty($terms) && !is_wp_error($terms)):
							foreach ($terms as $term):
								echo '<li><button type="button" class="at-filter-button filter-button" data-filter-term="type-'.esc_attr($term->slug).'">' . $term->name . ' <i class="if-active fa-light fa-check"></i></button></li>';
							endforeach;
						endif;?>
					</ul>
				</div>

				<div class="cider-list filter-able-list">
					<?php if (have_posts()) : while (have_posts()) : the_post();
						$current_availability = get_acf_field('currently_available');
						$form_specs = get_acf_field('specs');
						$form_factor = is_non_empty_array($form_specs,'form_factor') ? $form_specs['form_factor'] : '';
						// cfdump($form_specs);
						$cider_classes = [
							'single-cider-item',
							$current_availability ? 'currently-available' : 'currently-unavailable filtered-out',
						];
						$availability_types = get_the_terms(get_the_id(),'availability-type');
						foreach($availability_types as $availability_type):
							array_push($cider_classes,'type-'.$availability_type->slug);
						endforeach;
						// cfdump($current_availability); ?>
	
						<article id="post-<?php the_ID(); ?>" <?php post_class($cider_classes); ?> role="article">
							<div class="post-thumbnail">
								<?php the_post_thumbnail( 'large' ); ?>
							</div>
							<header class="entry-header article-header">
								<h3 class="h2 entry-title"><?php the_title(); ?></h3>
								<div class="entry-meta"><?php
									if($form_factor):
										echo '<span class="form-factor">'.$form_factor.'</span>';
									endif;
									if(is_non_empty_array($availability_types)):
										echo '<span class="availability-type mq-desktoponly">'.$availability_types[0]->name.'</span>';
									endif; ?>
								</div>
							</header><?php 
							echo cover_link(['url'=>get_the_permalink()],'', esc_attr(get_the_title())); ?>	
						</article> <?php // end article ?>
	
					<?php endwhile; ?>
	
						
	
					<?php else : ?>
	
						<?php get_template_part( 'templates/404'); ?>
	
					<?php endif; ?>
				</div>
				<?php get_template_part( 'templates/post-navigation'); ?>

			</main>

		</div>

	</div>

	<?php // get_sidebar(); ?>

<?php get_footer(); ?>
