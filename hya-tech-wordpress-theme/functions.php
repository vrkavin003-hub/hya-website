<?php
/**
 * Theme setup and integration.
 *
 * @package HYATech
 */

defined( 'ABSPATH' ) || exit;

require_once get_template_directory() . '/inc/data.php';

define( 'HYA_THEME_VERSION', '1.0.0' );

function hya_theme_setup(): void {
	load_theme_textdomain( 'hya-tech', get_template_directory() . '/languages' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo', array( 'height' => 80, 'width' => 260, 'flex-height' => true, 'flex-width' => true ) );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'responsive-embeds' );
	register_nav_menus( array( 'primary' => __( 'Primary navigation', 'hya-tech' ), 'footer' => __( 'Footer navigation', 'hya-tech' ) ) );
}
add_action( 'after_setup_theme', 'hya_theme_setup' );

function hya_activate_theme(): void {
	$pages = array(
		'home' => 'Home', 'about' => 'About', 'capabilities' => 'Capabilities',
		'projects' => 'Projects', 'careers' => 'Careers', 'contact' => 'Contact',
		'privacy' => 'Privacy Policy', 'terms' => 'Terms',
	);
	$created = array();
	foreach ( $pages as $slug => $title ) {
		$page = get_page_by_path( $slug );
		if ( ! $page ) {
			$id = wp_insert_post( array( 'post_title' => $title, 'post_name' => $slug, 'post_status' => 'publish', 'post_type' => 'page' ) );
			if ( ! is_wp_error( $id ) ) { $created[ $slug ] = $id; }
		} else { $created[ $slug ] = $page->ID; }
	}
	if ( ! empty( $created['home'] ) ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $created['home'] );
	}
	if ( ! has_nav_menu( 'primary' ) ) {
		$menu_id = wp_create_nav_menu( 'HYA Tech Primary' );
		foreach ( array( 'home', 'about', 'capabilities', 'projects', 'careers', 'contact' ) as $slug ) {
			if ( ! empty( $created[ $slug ] ) ) { wp_update_nav_menu_item( $menu_id, 0, array( 'menu-item-title' => $pages[ $slug ], 'menu-item-object' => 'page', 'menu-item-object-id' => $created[ $slug ], 'menu-item-type' => 'post_type', 'menu-item-status' => 'publish' ) ); }
		}
		$locations = get_theme_mod( 'nav_menu_locations', array() );
		$locations['primary'] = $menu_id;
		$locations['footer'] = $menu_id;
		set_theme_mod( 'nav_menu_locations', $locations );
	}
	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'hya_activate_theme' );

function hya_enqueue_assets(): void {
	wp_enqueue_style( 'hya-theme', get_template_directory_uri() . '/assets/css/theme.css', array(), HYA_THEME_VERSION );
	wp_enqueue_script( 'hya-theme', get_template_directory_uri() . '/assets/js/theme.js', array(), HYA_THEME_VERSION, true );
	wp_localize_script( 'hya-theme', 'hyaTheme', array( 'ajaxUrl' => admin_url( 'admin-ajax.php' ), 'themeLabel' => __( 'Toggle color theme', 'hya-tech' ) ) );
}
add_action( 'wp_enqueue_scripts', 'hya_enqueue_assets' );

function hya_acf_json_save_point( string $path ): string { return get_template_directory() . '/acf-json'; }
add_filter( 'acf/settings/save_json', 'hya_acf_json_save_point' );
function hya_acf_json_load_point( array $paths ): array { $paths[] = get_template_directory() . '/acf-json'; return $paths; }
add_filter( 'acf/settings/load_json', 'hya_acf_json_load_point' );

function hya_get_field( string $name, mixed $fallback = '', int|false $post_id = false ): mixed {
	if ( function_exists( 'get_field' ) ) {
		$value = get_field( $name, $post_id ?: get_the_ID() );
		if ( null !== $value && false !== $value && '' !== $value ) {
			return $value;
		}
	}
	return $fallback;
}

function hya_image_url( mixed $value, string $fallback ): string {
	if ( is_array( $value ) && ! empty( $value['url'] ) ) {
		return esc_url_raw( $value['url'] );
	}
	if ( is_numeric( $value ) ) {
		$url = wp_get_attachment_image_url( (int) $value, 'full' );
		return $url ?: $fallback;
	}
	return is_string( $value ) && $value ? $value : $fallback;
}

function hya_asset( string $path ): string {
	return get_template_directory_uri() . '/assets/' . ltrim( $path, '/' );
}

function hya_page_url( string $slug ): string {
	$page = get_page_by_path( $slug );
	return $page ? get_permalink( $page ) : home_url( '/' . trim( $slug, '/' ) . '/' );
}

function hya_nav_fallback(): void {
	$items = array( 'Home' => home_url( '/' ), 'About' => hya_page_url( 'about' ), 'Capabilities' => hya_page_url( 'capabilities' ), 'Projects' => hya_page_url( 'projects' ), 'Careers' => hya_page_url( 'careers' ), 'Contact' => hya_page_url( 'contact' ) );
	echo '<ul class="nav-list">';
	foreach ( $items as $label => $url ) {
		printf( '<li><a href="%1$s">%2$s</a></li>', esc_url( $url ), esc_html( $label ) );
	}
	echo '</ul>';
}

function hya_customize_register( WP_Customize_Manager $customizer ): void {
	$customizer->add_section( 'hya_company', array( 'title' => __( 'HYA Tech company details', 'hya-tech' ), 'priority' => 30 ) );
	$fields = array(
		'hya_email' => array( 'Email', 'info@hyatech.co.in', 'email' ),
		'hya_phone' => array( 'Phone', '+91 95976 90303', 'text' ),
		'hya_address' => array( 'Address', 'Plot No. 122, SIDCO, Hosur, Tamil Nadu 635109', 'textarea' ),
		'hya_form_recipient' => array( 'Form recipient email', get_option( 'admin_email' ), 'email' ),
	);
	foreach ( $fields as $id => $config ) {
		$customizer->add_setting( $id, array( 'default' => $config[1], 'sanitize_callback' => 'email' === $config[2] ? 'sanitize_email' : 'sanitize_text_field' ) );
		$customizer->add_control( $id, array( 'label' => __( $config[0], 'hya-tech' ), 'section' => 'hya_company', 'type' => $config[2] ) );
	}
}
add_action( 'customize_register', 'hya_customize_register' );

function hya_process_form(): void {
	$form = isset( $_POST['hya_form'] ) ? sanitize_key( wp_unslash( $_POST['hya_form'] ) ) : '';
	if ( ! in_array( $form, array( 'contact', 'career' ), true ) ) {
		wp_die( esc_html__( 'Invalid form.', 'hya-tech' ), 400 );
	}
	if ( ! isset( $_POST['hya_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['hya_nonce'] ) ), 'hya_' . $form ) ) {
		hya_form_redirect( $form, 'error', __( 'Security validation failed. Please try again.', 'hya-tech' ) );
	}
	if ( ! empty( $_POST['website'] ) ) {
		hya_form_redirect( $form, 'error', __( 'Unable to process this submission.', 'hya-tech' ) );
	}

	$name    = isset( $_POST['name'] ) ? sanitize_text_field( wp_unslash( $_POST['name'] ) ) : '';
	$email   = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
	$message = isset( $_POST['message'] ) ? sanitize_textarea_field( wp_unslash( $_POST['message'] ) ) : '';
	if ( strlen( $name ) < 2 || ! is_email( $email ) || strlen( $message ) < 20 ) {
		hya_form_redirect( $form, 'error', __( 'Please complete all required fields with valid information.', 'hya-tech' ) );
	}

	$recipient = get_theme_mod( 'hya_form_recipient', get_option( 'admin_email' ) );
	$headers   = array( 'Reply-To: ' . $name . ' <' . $email . '>' );
	$body      = "Name: {$name}\nEmail: {$email}\n";
	$attachments = array();

	if ( 'contact' === $form ) {
		$company = isset( $_POST['company'] ) ? sanitize_text_field( wp_unslash( $_POST['company'] ) ) : '';
		$phone   = isset( $_POST['phone'] ) ? sanitize_text_field( wp_unslash( $_POST['phone'] ) ) : '';
		$service = isset( $_POST['service'] ) ? sanitize_text_field( wp_unslash( $_POST['service'] ) ) : '';
		if ( strlen( $company ) < 2 || ! $service ) {
			hya_form_redirect( $form, 'error', __( 'Please complete all required fields.', 'hya-tech' ) );
		}
		$subject = sprintf( 'Project enquiry — %s', $company );
		$body   .= "Company: {$company}\nPhone: {$phone}\nCapability: {$service}\n\nProject details:\n{$message}";
	} else {
		$role = isset( $_POST['role'] ) ? sanitize_text_field( wp_unslash( $_POST['role'] ) ) : '';
		if ( ! $role ) {
			hya_form_redirect( $form, 'error', __( 'Please select a position.', 'hya-tech' ) );
		}
		$subject = sprintf( 'Career application — %s', $role );
		$body   .= "Position: {$role}\n\nIntroduction:\n{$message}";
		if ( ! empty( $_FILES['resume']['name'] ) ) {
			require_once ABSPATH . 'wp-admin/includes/file.php';
			$file = $_FILES['resume'];
			$allowed = array( 'pdf' => 'application/pdf', 'doc' => 'application/msword', 'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' );
			if ( (int) $file['size'] > 5 * MB_IN_BYTES ) {
				hya_form_redirect( $form, 'error', __( 'The résumé must be smaller than 5 MB.', 'hya-tech' ) );
			}
			$check = wp_check_filetype_and_ext( $file['tmp_name'], $file['name'], $allowed );
			if ( empty( $check['ext'] ) || empty( $check['type'] ) ) {
				hya_form_redirect( $form, 'error', __( 'Upload a PDF, DOC, or DOCX résumé.', 'hya-tech' ) );
			}
			$upload = wp_handle_upload( $file, array( 'test_form' => false, 'mimes' => $allowed ) );
			if ( isset( $upload['file'] ) ) {
				$attachments[] = $upload['file'];
			}
		}
	}

	$sent = wp_mail( $recipient, $subject, $body, $headers, $attachments );
	foreach ( $attachments as $attachment ) {
		wp_delete_file( $attachment );
	}
	hya_form_redirect( $form, $sent ? 'success' : 'error', $sent ? __( 'Thank you. Your submission has been sent.', 'hya-tech' ) : __( 'The message could not be sent. Please email us directly.', 'hya-tech' ) );
}
add_action( 'admin_post_nopriv_hya_submit', 'hya_process_form' );
add_action( 'admin_post_hya_submit', 'hya_process_form' );

function hya_form_redirect( string $form, string $status, string $message ): never {
	$fallback = 'career' === $form ? hya_page_url( 'careers' ) . '#apply' : hya_page_url( 'contact' ) . '#consultation';
	$url = wp_get_referer() ?: $fallback;
	wp_safe_redirect( add_query_arg( array( 'form_status' => $status, 'form_message' => rawurlencode( $message ) ), $url ) );
	exit;
}

function hya_output_meta(): void {
	if ( is_admin() ) { return; }
	$description = is_singular() && has_excerpt() ? get_the_excerpt() : get_bloginfo( 'description' );
	printf( "\n<meta name=\"description\" content=\"%s\">\n", esc_attr( wp_strip_all_tags( $description ) ) );
	printf( '<meta property="og:title" content="%s">' . "\n", esc_attr( wp_get_document_title() ) );
	printf( '<meta property="og:description" content="%s">' . "\n", esc_attr( wp_strip_all_tags( $description ) ) );
	printf( '<meta property="og:url" content="%s">' . "\n", esc_url( home_url( add_query_arg( array(), $GLOBALS['wp']->request ?? '' ) ) ) );
	printf( '<link rel="canonical" href="%s">' . "\n", esc_url( home_url( add_query_arg( array(), $GLOBALS['wp']->request ?? '' ) ) ) );
}
add_action( 'wp_head', 'hya_output_meta', 2 );
