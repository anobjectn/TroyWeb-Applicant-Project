<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php html_schema(); ?> <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

	<head>

        <?php /**
         * updated with non-blocking order
         * see here: https://csswizardry.com/2018/11/css-and-network-performance/
         * 
         * In short, place any js here that doesn't need to act on css before any css to
         * speed up page loads.
         */
        ?>

        <?php // drop Google Analytics here ?>        

        <?php // See everything you need to know about the <head> here: https://github.com/joshbuchea/HEAD ?>
        <meta charset='<?php bloginfo( 'charset' ); ?>'>
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Troy Web Consulting: Software Development Company" />
        <link rel="manifest" href="/site.webmanifest" />

        <?php // updated pingback. Thanks @HardeepAsrani https://github.com/HardeepAsrani ?>
        <?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
            <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
        <?php endif; ?>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Oldenburg&family=Oregano:ital@0;1&display=swap" rel="stylesheet">

        <?php wp_head(); ?>
        
    </head>
    
	<body <?php body_class(); ?> id="npc" itemscope itemtype="https://schema.org/WebPage">
		<div id="container" class="main-content-container">

			<header id="header" class="header main-header twa-grid" role="banner" itemscope itemtype="https://schema.org/WPHeader">
                <div id="inner-header" class="inner-header-container full-width twa-grid">
                    <div class="inner-header-row twa-grid-col-wide no-v-padding">
                        <div class="inner-header-base"><?php 
                            
                            if (has_custom_logo()): ?>    
                                <div id="logo-container" class="inline-svg" itemprop="logo">
                                    <a href="<?php echo home_url(); ?>" rel="nofollow" itemprop="url" title="<?php bloginfo('name'); ?>"><?php the_custom_logo(); ?></a>
                                </div><?php 
                            else: ?>
                                <div id="logo-container" itemprop="logo">
                                    <a href="<?php echo home_url(); ?>" rel="nofollow" itemprop="url" title="<?php bloginfo('name'); ?>">
                                        <img src="<?php echo get_theme_file_uri(); ?>/library/images/tw-logo-header.png" width="479" height="77" itemprop="logo" alt="Troy Web Consulting" />
                                    </a>
                                </div><?php 
                            endif; ?>
    
                            <div class="main-toggler-container mq-mobileonly">
                                <button class="main-menu-toggler" aria-label="Toggle Main Menu" data-main-menu-toggle-class="main-menu-open">
                                    <div class="inner-button">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </button>
                            </div>
                            
                        </div>
                        <div class="main-menu-container" data-search-selector=".header-search-container">
                            <!-- <button class="main-menu-closer mq-mobileonly">
                                <i class="fa-light fa-xmark" title="Close menu"></i>
                            </button> -->
                            <div class="search-container mq-mobileonly"><?php 
                                get_search_form();?>
                            </div>
                            <nav class="header-nav primary-menu" role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement" aria-label="<?php _e( 'Primary Menu ', 'troywebapplicant' ); ?>">
        
                                <?php // added primary menu marker for accessibility ?>
                                <h2 class="screen-reader-text"><?php _e( 'Primary Menu', 'troywebapplicant' ); ?></h2>
        
                                <?php wp_nav_menu([
                                    'container' => true,
                                    'container_class' => 'menu',
                                    'menu' => 'main-menu',
                                    'menu_class' => 'nav top-nav main-menu',
                                    'theme_location' => 'main-nav',
                                    ]); ?>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
