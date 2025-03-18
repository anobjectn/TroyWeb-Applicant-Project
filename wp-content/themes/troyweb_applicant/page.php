<?php get_header(); ?>

<div id="content">
	<div id="inner-content">
		<main id="main" class="main npc-grid" role="main" itemscope itemprop="mainContentOfPage" itemtype="https://schema.org/Blog"><?php
		
			// get_template_part( 'blocks/_blocks.php' );]
			
			

			// get_template_part( 'templates/hero-slider' );
			// get_template_part( 'templates/interior-page', 'header' );
			
			// if(acf_and('content_sections')):
                //get_template_part( 'templates/content-sections', 'loop' );
            // endif;
			?>
			<div class="entry-content npc-grid full-width">
				<?php 
				$content = get_the_content();
				if($content || !empty($content)):
					the_content();
				else:?>
					<div style="margin-block:3em">
						<h1>h1 Heading</h1>
						<p>lskj dflksdfj lkdsfjh <a href="https://someplace.net">inline link</a> lkdjfhg kdfjhg kdfsjhg kldjfgh dlskfjghdflkjgh dlfkjgh dslkjgh sdlkjhg sldfkjgh ldskfjgh ldksfjghldkfj hglkdsjhgldskfjhg lkdsjfgh lkdfjshg lkdsjfgh dkfjg</p>
						<h2>h2 Heading</h2>
						<ul>
							<li>aksjd flkjasd lkajsdhf ljksdh jkl dhs</li>
							<li>akss dfdfsgjd flkjasd lkajsdhf ljksdh jkl dhs</li>
							<li>sdfsdfdf flkjasd lkajsdhf ljksdh jkl dhs</li>
						</ul>
						<p>lskj dflksdfj lkdsfjh lkdjfhg kdfjhg kdfsjhg kldjfgh dlskfjghdflkjgh dlfkjgh dslkjgh sdlkjhg sldfkjgh ldskfjgh ldksfjghldkfj hglkdsjhgldskfjhg lkdsjfgh lkdfjshg lkdsjfgh dkfjg</p>
						<h3>h3 Heading</h3>
						<p>lskj dflksdfj lkdsfjh lkdjfhg kdfjhg kdfsjhg kldjfgh dlskfjghdflkjgh dlfkjgh dslkjgh sdlkjhg sldfkjgh ldskfjgh ldksfjghldkfj hglkdsjhgldskfjhg lkdsjfgh lkdfjshg lkdsjfgh dkfjg</p>
						<ol>
							<li>sdfsdfdf flkjasd lkajsdhf ljksdh jkl dhs</li>
							<li>aksjd flkjasd lkajsdhf ljksdh jkl dhs</li>
							<li>akss dfdfsgjd flkjasd lkajsdhf ljksdh jkl dhs</li>
						</ol>
						<h4>h4 Heading</h4>
						<p>lskj dflksdfj lkdsfjh lkdjfhg kdfjhg kdfsjhg kldjfgh dlskfjghdflkjgh dlfkjgh dslkjgh sdlkjhg sldfkjgh ldskfjgh ldksfjghldkfj hglkdsjhgldskfjhg lkdsjfgh lkdfjshg lkdsjfgh dkfjg</p>
						<h5>h5 Heading</h5>
						<p>lskj dflksdfj lkdsfjh lkdjfhg kdfjhg kdfsjhg kldjfgh dlskfjghdflkjgh dlfkjgh dslkjgh sdlkjhg sldfkjgh ldskfjgh ldksfjghldkfj hglkdsjhgldskfjhg lkdsjfgh lkdfjshg lkdsjfgh dkfjg</p>
						<h6>h6 Heading</h6>
						<p>lskj dflksdfj lkdsfjh lkdjfhg kdfjhg kdfsjhg kldjfgh dlskfjghdflkjgh dlfkjgh dslkjgh sdlkjhg sldfkjgh ldskfjgh ldksfjghldkfj hglkdsjhgldskfjhg lkdsjfgh lkdfjshg lkdsjfgh dkfjg</p>
						<p><strong>This is a strong tag</strong></p>
					</div><?php 
				endif;?>
			</div>
		</main>
	</div>
</div>

<?php get_footer(); ?>
