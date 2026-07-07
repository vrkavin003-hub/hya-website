<?php defined( 'ABSPATH' ) || exit; ?>
<form class="form-card reveal" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post" enctype="multipart/form-data">
	<?php get_template_part( 'template-parts/form-message' ); wp_nonce_field( 'hya_career', 'hya_nonce' ); ?>
	<input type="hidden" name="action" value="hya_submit"><input type="hidden" name="hya_form" value="career">
	<label class="honeypot" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
	<div class="form-grid"><label class="field"><span>Full name *</span><input name="name" autocomplete="name" minlength="2" required></label><label class="field"><span>Email address *</span><input name="email" type="email" autocomplete="email" required></label></div>
	<label class="field"><span>Position of interest *</span><select name="role" required><option value="">Select a position</option><?php foreach( hya_career_roles() as $role ) : ?><option><?php echo esc_html( $role ); ?></option><?php endforeach; ?></select></label>
	<label class="field"><span>Introduction *</span><textarea name="message" rows="6" minlength="20" required placeholder="Share your experience and the work you want to contribute to."></textarea></label>
	<label class="field"><span>Résumé (PDF, DOC or DOCX; maximum 5 MB)</span><input name="resume" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"></label>
	<div class="button-row"><button class="button button-primary" type="submit">Send application <span aria-hidden="true">→</span></button></div>
</form>

