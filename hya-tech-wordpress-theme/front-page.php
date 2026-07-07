<?php
/** Front page. @package HYATech */
defined( 'ABSPATH' ) || exit;
get_header();
get_template_part( 'template-parts/hero', null, array(
	'variant' => 'home', 'eyebrow' => 'Engineering excellence', 'title' => 'Precision Engineering.', 'accent' => 'Powerful Solutions.',
	'description' => 'We deliver smart, reliable and quality-driven industrial solutions to help your business grow stronger.',
	'image' => hya_asset( 'images/heroes/home-hero-cnc.png' ), 'image_alt' => 'CNC milling equipment machining a precision HYA Tech component', 'image_position' => 'center center',
	'primary_label' => 'Explore Our Services', 'primary_url' => hya_page_url( 'capabilities' ), 'secondary_label' => 'View Our Projects', 'secondary_url' => hya_page_url( 'projects' ),
	'features' => array( array( 'title' => 'Quality Assured', 'description' => 'International standards & proven process' ), array( 'title' => 'Advanced Technology', 'description' => 'Cutting-edge machines & innovation' ), array( 'title' => 'Industry Expertise', 'description' => 'Serving diverse industries with excellence' ) ),
) );
get_template_part( 'template-parts/stats' );
?>
<section class="section"><div class="container service-panel reveal"><div class="section-heading center"><span class="label">What we do</span><h2>Our core services</h2></div><div class="card-grid">
<?php foreach ( hya_capabilities() as $capability ) : ?><a class="card" href="<?php echo esc_url( hya_page_url( 'capabilities' ) . '#' . $capability['slug'] ); ?>"><div class="card-image"><img src="<?php echo esc_url( $capability['image'] ); ?>" alt="<?php echo esc_attr( $capability['title'] ); ?>" loading="lazy"></div><div class="card-body"><h3><?php echo esc_html( $capability['title'] ); ?></h3><p><?php echo esc_html( $capability['short'] ); ?></p></div></a><?php endforeach; ?>
</div></div></section>
<section class="section section-alt"><div class="container two-column"><div class="media-card reveal"><img src="<?php echo esc_url( hya_asset( 'images/intelligentmanufacturing.jpg' ) ); ?>" alt="Intelligent manufacturing equipment" loading="lazy"></div><div class="content-copy reveal"><span class="label">Who we are</span><h2>Engineering excellence, built through close collaboration.</h2><p>HYA Tech is committed to becoming a leading industry player by expanding through deep collaboration with customers and investing in technology and talent.</p><p>The company was founded to build world-class engineering excellence in precision manufacturing—delivering innovation, quality, and reliability from India.</p><a class="button button-primary" href="<?php echo esc_url( hya_page_url( 'about' ) ); ?>">Read our story</a></div></div></section>
<section class="section"><div class="container"><div class="section-heading center"><span class="label">Selected work</span><h2>Manufacturing problems made tangible.</h2><p>A selection of project categories and solutions presented by HYA Tech.</p></div><div class="card-grid"><?php foreach ( array_slice( hya_projects(), 0, 6 ) as $project ) : get_template_part( 'template-parts/project-card', null, $project ); endforeach; ?></div></div></section>
<?php get_template_part( 'template-parts/contact-cta' ); get_footer(); ?>

