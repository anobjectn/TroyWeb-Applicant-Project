<?php 

if(!is_front_page()):
    $page_title = is_archive() ? wp_title('', false) : get_the_title();
    $alt_title = get_acf_field('alternate_h1_title');

    $breadbcrumb_list = [];
    $home_page = [
        'name' => 'Home',
        'link' => get_home_url()
    ];
    array_push($breadbcrumb_list, $home_page);

    if(is_singular( 'experience' )):
        $page_title = get_the_title();
        $listing_page = [
            'name' => 'Graces',
            'link' => get_post_type_archive_link( 'experience' )
        ];
        array_push($breadbcrumb_list, $listing_page);
        $current_post = [
            'name' => get_the_title(),
            'link' => get_the_permalink()
        ];
        array_push($breadbcrumb_list, $current_post);

    elseif(is_singular( 'accommodation' )):
        $page_title = get_the_title();
        $listing_page = [
            'name' => 'Stay',
            'link' => get_post_type_archive_link( 'accommodation' )
        ];
        array_push($breadbcrumb_list, $listing_page);

        $current_post = [
            'name' => get_the_title(),
            'link' => get_the_permalink()
        ];
        array_push($breadbcrumb_list, $current_post);

    elseif(is_post_type_archive('accommodation')):
        $page_title = 'Stay';
        $listing_page = [
            'name' => 'Stay',
            'link' => get_post_type_archive_link( 'experience' )
        ];
        array_push($breadbcrumb_list, $listing_page);
    
    elseif(is_post_type_archive('package')):
        $page_title = 'Packages';
        $listing_page = [
            'name' => 'Packages',
            'link' => get_post_type_archive_link( 'package' )
        ];
        array_push($breadbcrumb_list, $listing_page);

    elseif(is_post_type_archive('experience')): 
        $page_title = 'Private Experiences';
        $listing_page = [
            'name' => 'Graces',
            'link' => get_post_type_archive_link( 'experience' )
        ];
        array_push($breadbcrumb_list, $listing_page);

    elseif(is_singular( 'page' )):
        $ancestor_pages = isset($post->ID) ? get_post_ancestors($post->ID) : [];
        if(count($ancestor_pages) > 0):
            foreach ($ancestor_pages as $ancestor_page):
                $page_name = get_the_title($ancestor_page);
                $page_url = get_the_permalink($ancestor_page);
                if($page_url !== get_home_url()):
                    $page_array = [
                        'name' => $page_name,
                        'link' => $page_url,
                        'ishome' => $ancestor_page
                    ];
                    array_push($breadbcrumb_list, $page_array);
                endif;
            endforeach;
        endif;
        $current_page = [
            'name' => get_the_title(),
            'link' => get_the_permalink()
        ];
        array_push($breadbcrumb_list, $current_page);
    elseif(is_404()): 
        $page = [
            'name' => 'Not Found',
            'link' => '/',
        ];
        array_push($breadbcrumb_list, $page);
    endif;
    
    ?>
    <div class="inner-page-header fg-grid mq-desktoponly">
        <div class="iph-inner st-v-padding">
            <div class="iph-current-page-name">
                <h1 class="iph-current-page-name"><?php 
                    if($alt_title):
                        echo $alt_title;
                    else: 
                        echo $page_title;
                    endif; ?>
                </h1>
            </div>
            <div class="iph-bread-crumbs"><?php 
                $last_crumb = array_search(end($breadbcrumb_list), $breadbcrumb_list);
                // cfdump($last_crumb);
                // cfdump($breadbcrumb_list);
                foreach ($breadbcrumb_list as $crumb):
                    echo '<a href="'.$crumb['link'].'" class="iph-bread-crumb-link">'.$crumb['name'].'</a>';
                    if($crumb !== end($breadbcrumb_list)):
                        echo '<span class="iph-bread-crumb-separator"> / </span>';
                    endif;                    
                endforeach;
            ?></div>
        </div>
    </div><?php 
endif;