<div class="accommodation-list fg-grid">
	<div class="accommodation-list-intro fg-grid-col-tight triple-v-padding-top no-v-padding-bottom">
		<div class="mq-intro-row">
			<div class="intro-text"><?php 
				$roof_text = get_acf_field('a_intro_roof_text','options');
				$large_text = get_acf_field('a_intro_large_text','options');?>
				<div class="roof-text"><?php echo $roof_text;?></div>
				<div class="large-text"><?php echo $large_text;?></div>
			</div>
			<div class="intro-filter">
				<div class="select-list is-closed" data-filter-target=".accommodation-list-inner">
					<span class="placeholder underline-button-dark" tabindex="0">Showing All <i class="fa-light fa-plus"></i></span><?php
					$accommodation_type_terms = get_terms( [
						'taxonomy' => 'accommodation-type',
						'hide_empty' => false,
					] );

					if ( ! empty( $accommodation_type_terms ) && ! is_wp_error( $accommodation_type_terms ) ) :?>
						<ul class="list nav"><?php 
							foreach ( $accommodation_type_terms as $term ):
								echo '<li><a href="filter-'.$term->slug.'" data-term-slug="'.$term->slug.'" class="underline-button-dark">' . $term->name . '</a></li>';
							endforeach;?>
							<li><a href="filter-all" data-term-slug="all" class="underline-button-dark">Show All</a></li>
						</ul><?php 
					endif; ?>
				</div>
				<!-- <a href="#" class="underline-button-dark">Filter <i class="fa-light fa-plus"></i></a> -->
			</div>
		</div>
	</div>
	<div class="accommodation-list-inner fg-grid-col-narrow"><?php 
		$omit_posts	= [];
		if(is_singular( 'accommodation' )):
			$omit_posts = [get_the_ID()];
		endif;
		if (is_singular( 'accommodation' ) || is_post_type_archive('accommodation')):
			if( have_rows('content_sections') ):
				// cfdump(get_acf_field('content_sections'));

				while ( have_rows('content_sections') ) : the_row();
					if( get_row_layout() == 'feature_accommodation' ):
						$feature_accommodation = get_sub_field('feature_accommodation');
						$feature_accommodation_id = $feature_accommodation ? $feature_accommodation->ID : false;

						if($feature_accommodation):
							$omit_posts[] = $feature_accommodation->ID;
						endif;
					endif;

				// End loop.
				endwhile;
			endif;
			if(have_rows('content_sections_secondary')):
				while ( have_rows('content_sections_secondary') ) : the_row();
					if( get_row_layout() == 'feature_accommodation' ):
						$feature_accommodation_2 = get_sub_field('feature_accommodation');
						$featured_accommo_id = $feature_accommodation_2 ? $feature_accommodation_2->ID : false;
						if($featured_accommo_id):
							$omit_posts[] = $featured_accommo_id;
						endif;
					endif;
				endwhile;
			endif;

		endif;
		// cfdump(is_post_type_archive('accommodation'));
		$args = [
			'post_type' => 'accommodation',
			'posts_per_page' => -1,
			'post__not_in' => $omit_posts, 
		];
		$accommodation_posts = new WP_Query($args);
		set_query_var('accommodation_posts', $accommodation_posts);	
		get_template_part( 'templates/archive', 'accommodation-loop'); ?>
	</div>
</div>