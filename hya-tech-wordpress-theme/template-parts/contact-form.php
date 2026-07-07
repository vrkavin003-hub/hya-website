<?php defined( 'ABSPATH' ) || exit; ?>
<form class="form-card reveal" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post">
	<?php get_template_part( 'template-parts/form-message' ); wp_nonce_field( 'hya_contact', 'hya_nonce' ); ?>
	<input type="hidden" name="action" value="hya_submit"><input type="hidden" name="hya_form" value="contact">
	<label class="honeypot" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
	<div class="form-grid"><label class="field"><span>Full name *</span><input name="name" autocomplete="name" minlength="2" required></label><label class="field"><span>Company *</span><input name="company" autocomplete="organization" minlength="2" required></label><label class="field"><span>Email address *</span><input name="email" type="email" autocomplete="email" required></label><label class="field"><span>Phone number</span><input name="phone" type="tel" autocomplete="tel"></label></div>
	<label class="field"><span>Capability you are interested in *</span><select name="service" required><option value="">Select a capability</option><?php foreach( hya_capabilities() as $capability ) : ?><option><?php echo esc_html( $capability['title'] ); ?></option><?php endforeach; ?><option>Other</option></select></label>
	<label class="field"><span>Project details *</span><textarea name="message" rows="6" minlength="20" required placeholder="Tell us about the application, production need, timeline, and constraints."></textarea></label>
	<div class="button-row"><button class="button button-primary" type="submit">Send enquiry <span aria-hidden="true">→</span></button></div>
</form>

