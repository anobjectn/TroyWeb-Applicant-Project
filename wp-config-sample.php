<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'twa_wp' );

/** Database username */
define( 'DB_USER', 'username_here' );

/** Database password */
define( 'DB_PASSWORD', 'password_here' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '~(qbt0!!1`}-SO<Pb[.N|NkW-[hB=zLu&~/|^b}(KubXCna<%85!yOxCVSnVWe%V');
define('SECURE_AUTH_KEY',  'cuoAN$53vDlm,D+mv0(5w r&@9-86?Gp?15m_4JD_xh9N/+D3/^xm_uzf-)zApHC');
define('LOGGED_IN_KEY',    'P@NF~+$(]pf*_NW<x?x2kS,qA3Pxm1e`!o.+K3?MPf>v2V_/#75,#21Msc^]Q  s');
define('NONCE_KEY',        'N)/blMxcnk!7z8]=V4B,1)i2UR?-5`QK>Ol/IjU7fm}^vT-zmw|&l$>*cHcO&uE~');
define('AUTH_SALT',        'EQlY^x7J3&>|xIG0+$!c&C*-p8OMk>cuh->7e+n>_Q7BW)]6mn)lhhTV.IdO}dj)');
define('SECURE_AUTH_SALT', '0^+:rg^P}S@{7kM-@k+V!nVo_.3BGlm|*|%8|TY++0I3#@j]!{+h3tzazxkQO[x0');
define('LOGGED_IN_SALT',   'cfouL.N!vF7orSLkaY|$)T2%jL}d2k q6g.yJA95_wDy[f7Tj$;^$*[aJ-QHnK(r');
define('NONCE_SALT',       'Bn4J$]|nZPo:jB*jEZC|d1<I6<FB9I#|^=%G%3iqTWGQ[wGIQX!0iO8$+nGx_]Xc');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'twa_wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
