# HYA Tech WordPress Theme

Native WordPress migration of the HYA Tech Next.js website. The theme does not require Node.js, React, or Next.js in production.

## Installation

1. In WordPress, go to **Appearance → Themes → Add New → Upload Theme**.
2. Upload `hya-tech-wordpress-theme.zip`, install, and activate it.
3. Activation creates the Home, About, Capabilities, Projects, Careers, Contact, Privacy Policy, and Terms pages when they do not already exist.
4. Go to **Settings → Permalinks** and click **Save Changes** once.
5. Go to **Appearance → Customize → HYA Tech company details** and set contact details and the form recipient email.
6. Go to **Appearance → Menus** to review the generated primary menu and assign it to Primary navigation and Footer navigation.
7. Upload a custom logo under **Appearance → Customize → Site Identity** if desired.

## Optional ACF editing

Advanced Custom Fields is optional. When active, the bundled local JSON field group makes hero titles, descriptions, images, and buttons editable on each page. Without ACF, every page uses production-ready fallback content.

## Forms

Contact and Careers forms use WordPress nonces, a honeypot, server-side validation, sanitization, and `wp_mail()`. Career résumé uploads accept PDF, DOC, and DOCX files up to 5 MB. Uploaded files are attached to the email and removed after sending.

Reliable email delivery depends on the host. If the server does not deliver PHP mail reliably, configure a reputable SMTP plugin and verified sending domain.

## Content

Page-specific PHP templates provide the migrated fallback content. Standard WordPress page content remains available for generic pages. Capability and project fallback arrays are in `inc/data.php`.

## Requirements

- WordPress 6.4+
- PHP 8.1+
- Pretty permalinks recommended

