<footer id="main-footer" class="main-footer twa-grid" role="contentinfo" itemscope itemtype="https://schema.org/WPFooter">
	<div class="main-footer-top no-v-padding-bottom"><?php 
		
		// cfdump($extra_footer_type);
		// cfdump($event_list_type);
		// cfdump($event_list_selected);
		// cfdump($event_list_search); 
		// ?>
	</div>
	<div class="main-footer-middle">
		<div class="branding-and-info">
			<a href="<?php echo home_url(); ?>" class="footer-logo" itemprop="url" title="<?php bloginfo('name'); ?>">
				<img src="<?php echo get_theme_file_uri(); ?>/library/images/tw-logo-footer.png" itemprop="logo" alt="Troy Web Consulting - Custom Software and Web Development" width="424" height="116" />
			</a>

		

		</div>
		<div class="menus-and-contact">
			<div class="footer-menus">
				<div class="col1">
					<div class="col1-inner">
						<nav role="navigation"><?php 
							wp_nav_menu([
								'container' => '',
								'menu' => 'social-networks-menu',
								'menu_class' => 'nav nav-h',
								'depth' => 0,
								'fallback_cb' => false,
							]);?> 
						</nav>
					</div>
				</div>
			</div>
		</div>
		<a href="#npc" class="back-to-top" aria-label="Back to top"><i class="fa-regular fa-arrow-up-to-line"></i></a>
	</div>
	<div class="main-footer-bottom threequarter-v-padding">
		<p class="source-org copyright">&copy; <?php echo date('Y'); ?> Troy Web Consulting. All rights reserved.</p>
	</div>
</footer>

</div>


<?php wp_footer(); ?>

</body>

</html>
