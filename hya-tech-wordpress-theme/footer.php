<?php
/** Site footer. @package HYATech */
defined( 'ABSPATH' ) || exit;
?>
</main>
<footer class="site-footer">
	<div class="container footer-grid">
		<div>
			<a class="brand brand-footer" href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<img src="<?php echo esc_url( hya_asset( 'images/hya-loader-logo.png' ) ); ?>" width="58" height="58" alt="">
				<span><strong>HYA TECH</strong><small>PRECISION BEYOND BELIEF</small></span>
			</a>
			<p><?php esc_html_e( 'Precision manufacturing, custom fixtures, industrial automation and intelligent equipment solutions.', 'hya-tech' ); ?></p>
		</div>
		<div><h2><?php esc_html_e( 'Company', 'hya-tech' ); ?></h2><?php wp_nav_menu( array( 'theme_location' => 'footer', 'container' => false, 'fallback_cb' => 'hya_nav_fallback', 'depth' => 1 ) ); ?></div>
		<div><h2><?php esc_html_e( 'Contact', 'hya-tech' ); ?></h2><ul><li><a href="mailto:<?php echo esc_attr( get_theme_mod( 'hya_email', 'info@hyatech.co.in' ) ); ?>"><?php echo esc_html( get_theme_mod( 'hya_email', 'info@hyatech.co.in' ) ); ?></a></li><li><a href="tel:+919597690303"><?php echo esc_html( get_theme_mod( 'hya_phone', '+91 95976 90303' ) ); ?></a></li><li><?php echo esc_html( get_theme_mod( 'hya_address', 'Plot No. 122, SIDCO, Hosur, Tamil Nadu 635109' ) ); ?></li></ul></div>
	</div>
	<div class="container footer-bottom"><span>© <?php echo esc_html( gmdate( 'Y' ) ); ?> HYA Tech</span><span><a href="<?php echo esc_url( hya_page_url( 'privacy' ) ); ?>"><?php esc_html_e( 'Privacy', 'hya-tech' ); ?></a><a href="<?php echo esc_url( hya_page_url( 'terms' ) ); ?>"><?php esc_html_e( 'Terms', 'hya-tech' ); ?></a></span></div>
</footer>
<?php wp_footer(); ?>
</body>
</html>

