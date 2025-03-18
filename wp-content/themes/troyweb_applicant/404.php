<?php get_header(); ?>
	
	<div id="content">

		<div id="inner-content">

			<main id="main" class="main npc-grid" role="main" itemscope itemprop="mainContentOfPage" itemtype="https://schema.org/Blog"><?php 
				get_template_part( 'templates/hero-slider' );
				get_template_part( 'templates/interior-page', 'header' );?>		
				<article id="post-not-found" class="hentry">
			
					<div class="article-content">
						<section class="entry-content">
	
							<div class="txt-404">
	
								<h3>Oops…<br>Something is empty</h3>
								<a href="javascript: history.go(-1);" class="box-button">Lets Go Back</a>
								<h3>Or…</h3>
	
							</div>
	
						</section>
	
						<section class="search-outer">
	
							<div class="search-form-outer minimal-form">
								
								<?php get_search_form(); ?>
								
							</div>
	
						</section>

					</div>

				</article>

			</main>

		</div>

	</div>

    <?php // get_sidebar(); ?>

<?php get_footer(); ?>
