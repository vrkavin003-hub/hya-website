<?php
/** Reusable page hero. @package HYATech */
defined( 'ABSPATH' ) || exit;
$defaults = array( 'variant' => 'page', 'eyebrow' => '', 'title' => '', 'accent' => '', 'description' => '', 'image' => '', 'image_alt' => '', 'image_position' => 'center center', 'primary_label' => '', 'primary_url' => '', 'secondary_label' => '', 'secondary_url' => '', 'features' => array() );
$args = wp_parse_args( $args ?? array(), $defaults );
$args['eyebrow'] = hya_get_field( 'hero_eyebrow', $args['eyebrow'] );
$args['title'] = hya_get_field( 'hero_title', $args['title'] );
$args['accent'] = hya_get_field( 'hero_accent', $args['accent'] );
$args['description'] = hya_get_field( 'hero_description', $args['description'] );
$args['image'] = hya_image_url( hya_get_field( 'hero_image', '' ), $args['image'] );
$args['primary_label'] = hya_get_field( 'hero_primary_label', $args['primary_label'] );
$args['primary_url'] = hya_get_field( 'hero_primary_url', $args['primary_url'] );
$args['secondary_label'] = hya_get_field( 'hero_secondary_label', $args['secondary_label'] );
$args['secondary_url'] = hya_get_field( 'hero_secondary_url', $args['secondary_url'] );
?>
<section class="page-hero page-hero-<?php echo esc_attr( $args['variant'] ); ?>">
	<div class="container hero-card">
		<div class="hero-blueprint" aria-hidden="true"></div>
		<div class="hero-visual" style="--hero-image:url('<?php echo esc_url( $args['image'] ); ?>');--hero-position:<?php echo esc_attr( $args['image_position'] ); ?>" role="img" aria-label="<?php echo esc_attr( $args['image_alt'] ); ?>"><span class="hero-glass" aria-hidden="true"></span></div>
		<div class="hero-join" aria-hidden="true"><svg viewBox="0 0 1000 700" preserveAspectRatio="none"><path class="hero-depth" d="M598 -18 C522 84 528 166 476 258 C416 364 397 458 458 548 C503 614 535 662 563 718 L407 718 C386 635 318 558 346 452 C378 332 404 229 470 112 C496 66 512 20 520 -18 Z"/><path class="hero-line" d="M598 -18 C522 84 528 166 476 258 C416 364 397 458 458 548 C503 614 535 662 563 718"/></svg></div>
		<div class="hero-content reveal">
			<?php if ( $args['eyebrow'] ) : ?><span class="eyebrow"><?php echo esc_html( $args['eyebrow'] ); ?></span><?php endif; ?>
			<h1><?php echo esc_html( $args['title'] ); ?><?php if ( $args['accent'] ) : ?><strong><?php echo esc_html( $args['accent'] ); ?></strong><?php endif; ?></h1>
			<p><?php echo esc_html( $args['description'] ); ?></p>
			<?php if ( $args['primary_label'] || $args['secondary_label'] ) : ?><div class="hero-actions">
				<?php if ( $args['primary_label'] ) : ?><a class="button button-primary" href="<?php echo esc_url( $args['primary_url'] ); ?>"><?php echo esc_html( $args['primary_label'] ); ?><span aria-hidden="true">→</span></a><?php endif; ?>
				<?php if ( $args['secondary_label'] ) : ?><a class="button button-secondary" href="<?php echo esc_url( $args['secondary_url'] ); ?>"><?php echo esc_html( $args['secondary_label'] ); ?></a><?php endif; ?>
			</div><?php endif; ?>
			<?php if ( $args['features'] ) : ?><div class="hero-features"><?php foreach ( $args['features'] as $feature ) : ?><div class="hero-feature"><span class="feature-icon" aria-hidden="true">✦</span><span><strong><?php echo esc_html( $feature['title'] ); ?></strong><?php if ( ! empty( $feature['description'] ) ) : ?><small><?php echo esc_html( $feature['description'] ); ?></small><?php endif; ?></span></div><?php endforeach; ?></div><?php endif; ?>
		</div>
	</div>
</section>

