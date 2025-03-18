<?php

defined( 'ABSPATH' ) or die( 'Nope, not today!' );

if( !function_exists( 'cfdump' ) ):
	include_once 'class-dBug.php';
	function cfdump( $obj, $type = 'null', $collapsed = false ){
		new \SYRADEV\Dbg\dBug2( $obj, $type, $collapsed );
	}	// end cfdump()
endif;