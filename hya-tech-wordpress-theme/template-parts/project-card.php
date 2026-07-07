<?php defined( 'ABSPATH' ) || exit; ?>
<article class="card reveal"><div class="card-image"><img src="<?php echo esc_url( $args['image'] ); ?>" alt="<?php echo esc_attr( $args['title'] ); ?>" loading="lazy"></div><div class="card-body"><span class="label"><?php echo esc_html( $args['category'] ); ?></span><h3><?php echo esc_html( $args['title'] ); ?></h3><p><?php echo esc_html( $args['description'] ); ?></p></div></article>

