<?php
/** Site header. @package HYATech */
defined( 'ABSPATH' ) || exit;
?><!doctype html>
<html <?php language_attributes(); ?> data-theme="light">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script>try{document.documentElement.dataset.theme=localStorage.getItem('hya-theme')||'light';}catch(e){}</script>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="skip-link" href="#main-content"><?php esc_html_e( 'Skip to content', 'hya-tech' ); ?></a>
<header class="site-header-wrap">
	<div class="site-header">
		<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="<?php esc_attr_e( 'HYA Tech home', 'hya-tech' ); ?>">
			<?php if ( has_custom_logo() ) : ?>
				<?php the_custom_logo(); ?>
			<?php else : ?>
				<img src="<?php echo esc_url( hya_asset( 'images/hya-loader-logo.png' ) ); ?>" width="58" height="58" alt="">
			<?php endif; ?>
			<span><strong>HYA TECH</strong><small>PRECISION BEYOND BELIEF</small></span>
		</a>
		<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-menu"><span></span><span></span><span></span><span class="screen-reader-text"><?php esc_html_e( 'Menu', 'hya-tech' ); ?></span></button>
		<nav id="primary-menu" class="primary-nav" aria-label="<?php esc_attr_e( 'Primary navigation', 'hya-tech' ); ?>">
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'container' => false, 'menu_class' => 'nav-list', 'fallback_cb' => 'hya_nav_fallback', 'depth' => 1 ) ); ?>
		</nav>
		<div class="header-actions">
			<button class="theme-toggle" type="button" aria-label="<?php esc_attr_e( 'Toggle color theme', 'hya-tech' ); ?>"><span aria-hidden="true">◐</span></button>
			<a class="button button-primary header-cta" href="<?php echo esc_url( hya_page_url( 'contact' ) ); ?>#consultation"><?php esc_html_e( 'Request consultation', 'hya-tech' ); ?><span aria-hidden="true">→</span></a>
		</div>
	</div>
</header>
<main id="main-content">

