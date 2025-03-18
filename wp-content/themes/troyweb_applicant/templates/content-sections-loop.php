<?php 

global $post;
if(is_post_type_archive('accommodation')):
    $fields_location = 'options';
else:
    $fields_location = $post->ID;
endif;

?>
<div id="content-sections" class="section-list"><?php
// Loop through all flex content layouts and include their files while also tagging with ID (based on index), Index of type, and even/odd of type. 
$ob_i = 0;
$j = [];
// var_dump(get_acf_field('oblocks'));
while ( the_flexible_field('content_sections', $fields_location) ):
  $row_i = ['of_all' => $ob_i];
  $layout_name = get_row_layout();
  // var_dump($layout_name);
  if(array_key_exists($layout_name, $j)):
    $highest_was = $j[$layout_name];
    $highest_new = $highest_was + 1;
    $row_i['of_type'] = $highest_new;
    $j[$layout_name] = $highest_new;
  else:
    $row_i['of_type'] = 0;
    $j[$layout_name] = 0;
  endif;
  $row_i['of_type_even_odd'] = ($row_i['of_type'] % 2) ? 'even' : 'odd';
  include( get_template_directory().'/templates/section-'.$layout_name.'.php' );
  $ob_i++;
endwhile;

$fc = the_flexible_field('content_sections', $fields_location);
if(($fc || !is_non_empty_array($fc)) && !is_archive()):?>
  <!-- <div class="content-section fg-grid naa">
    <?php // get_template_part( 'templates/basic', 'markup' );?>
  </div> --><?php 
endif; ?>


</div>