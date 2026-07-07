<?php
/**
 * Fallback site content used when WordPress fields have not been configured.
 *
 * @package HYATech
 */

defined( 'ABSPATH' ) || exit;

function hya_capabilities(): array {
	$base = get_template_directory_uri() . '/assets/images/';

	return array(
		array( 'slug' => 'design-engineering', 'title' => 'Design & engineering', 'short' => 'From a clear manufacturing need to validated engineering intent.', 'description' => 'Concept development, 3D modeling, simulation, design reviews, and production-ready engineering support.', 'image' => $base . 'offering1.jpg', 'items' => array( 'Concept development', '3D modeling and simulation', 'Design reviews', 'Prototyping and validation' ) ),
		array( 'slug' => 'precision-manufacturing', 'title' => 'Precision manufacturing', 'short' => 'Machining capabilities for complex parts, tooling, and production requirements.', 'description' => 'CNC turning, milling, multi-axis machining, EDM, grinding, inspection, and quality assurance.', 'image' => $base . 'cnc.jpg', 'items' => array( 'CNC turning and milling', 'Multi-axis machining', 'Wire and sinker EDM', 'Surface grinding and CMM inspection' ) ),
		array( 'slug' => 'fixtures-tooling', 'title' => 'Fixtures & tooling', 'short' => 'Custom-engineered fixtures that support repeatability, quality, and flow.', 'description' => 'Assembly fixtures, welding fixtures, jigs, inspection gauges, and production tooling tailored to specific requirements.', 'image' => $base . 'fixtures.jpg', 'items' => array( 'Assembly fixtures', 'Welding fixtures', 'Inspection gauges', 'Custom jigs and tooling' ) ),
		array( 'slug' => 'automation-turnkey', 'title' => 'Automation & turnkey systems', 'short' => 'Integrated assembly and process equipment from design to commissioning.', 'description' => 'Automated assembly lines, riveting, press fitting, tightening, dispensing, welding, and special-purpose machines.', 'image' => $base . 'automation.jpg', 'items' => array( 'Automated assembly lines', 'Riveting and press fitting', 'Tightening and dispensing', 'Special-purpose machines' ) ),
		array( 'slug' => 'intelligent-equipment', 'title' => 'Intelligent equipment', 'short' => 'Connected manufacturing equipment designed for better visibility and control.', 'description' => 'Equipment integrating automation, sensors, control systems, data capture, and real-time monitoring.', 'image' => $base . 'intelligentmanufacturing.jpg', 'items' => array( 'PLC-controlled equipment', 'Sensors and traceability', 'Test and inspection systems', 'Real-time monitoring' ) ),
		array( 'slug' => 'sheet-metal-bending', 'title' => 'Sheet Metal Bending', 'short' => 'Accurate forming for enclosures, brackets, and custom industrial parts.', 'description' => 'Precision sheet metal bending for industrial components, enclosures, brackets, and custom fabrication with accurate finishing and reliable quality.', 'image' => $base . 'sheet-metal-bending-press-brake.png', 'items' => array( 'Precision press-brake bending', 'Industrial enclosures', 'Brackets and formed parts', 'Custom fabrication support' ) ),
		array( 'slug' => 'laser-cutting', 'title' => 'Laser Cutting', 'short' => 'Clean, repeatable cutting for sheet metal profiles and fabricated parts.', 'description' => 'High-precision laser cutting for sheet metal parts, profiles, enclosures, and custom fabrication with clean edges and repeatable accuracy.', 'image' => $base . 'laser-cutting.png', 'items' => array( 'Precision profile cutting', 'Sheet metal components', 'Clean-edge processing', 'Custom production batches' ) ),
		array( 'slug' => 'laser-welding', 'title' => 'Laser Welding', 'short' => 'Controlled joining for precision components and production assemblies.', 'description' => 'Precision laser welding for complex components and industrial assemblies with focused heat input, clean joints, and repeatable production quality.', 'image' => $base . 'laser-welding.webp', 'items' => array( 'Precision laser welding', 'Low heat distortion', 'Complex component joints', 'Repeatable production quality' ) ),
		array( 'slug' => 'spares-support', 'title' => 'Industrial spares & support', 'short' => 'Practical supply and engineering support that helps keep production moving.', 'description' => 'Replacement parts, wear components, consumables, installation support, qualification, maintenance, and ongoing assistance.', 'image' => $base . 'offering5.jpg', 'items' => array( 'Replacement and wear parts', 'Industrial consumables', 'Installation and qualification', 'Maintenance support' ) ),
	);
}

function hya_projects(): array {
	$base = get_template_directory_uri() . '/assets/images/';
	return array(
		array( 'category' => 'Machining', 'title' => 'CNC machining center', 'description' => 'Multi-axis machining capability supporting precision manufacturing requirements.', 'image' => $base . 'cnc.jpg' ),
		array( 'category' => 'Components', 'title' => 'High-precision components', 'description' => 'Precision component manufacturing for demanding industrial applications.', 'image' => $base . 'parts.jpg' ),
		array( 'category' => 'Fixtures', 'title' => 'Custom engineered fixtures', 'description' => 'Production fixtures designed to improve repeatability, quality, and assembly efficiency.', 'image' => $base . 'fixtures.jpg' ),
		array( 'category' => 'Fixtures', 'title' => 'Assembly jigs', 'description' => 'Practical jigs that streamline assembly work and support consistent positioning.', 'image' => $base . 'assembly.jpg' ),
		array( 'category' => 'Components', 'title' => 'Medical components', 'description' => 'Precision-manufactured components for controlled medical manufacturing applications.', 'image' => $base . 'medical.jpg' ),
		array( 'category' => 'Machining', 'title' => 'Surface grinding', 'description' => 'Controlled surface finishing for hardened materials and precision tooling requirements.', 'image' => $base . 'grinding.jpg' ),
		array( 'category' => 'Machining', 'title' => 'Electrical discharge machining', 'description' => 'EDM capability for intricate profiles, hardened materials, and complex geometries.', 'image' => $base . 'edm.jpg' ),
		array( 'category' => 'Automation', 'title' => 'Assembly automation', 'description' => 'PLC-controlled manufacturing equipment supporting repeatable assembly processes.', 'image' => $base . 'automation.jpg' ),
		array( 'category' => 'Automation', 'title' => 'Automated riveting system', 'description' => 'Automated riveting solutions for consistent permanent-joint production workflows.', 'image' => $base . 'riveting.jpg' ),
	);
}

function hya_timeline(): array {
	return array(
		array( 'year' => '2018', 'title' => 'The beginning', 'description' => 'The company registered as RAZK Automation in Madurai, beginning its precision manufacturing journey.' ),
		array( 'year' => '2019', 'title' => 'First major project', 'description' => 'Provided engineering support for automation equipment installation, qualification, and maintenance in the EMS industry.' ),
		array( 'year' => '2020', 'title' => 'Business expansion', 'description' => 'Expanded into spares and standard-parts supply, broadening the industrial support offering.' ),
		array( 'year' => '2021', 'title' => 'Chennai branch', 'description' => 'Established a branch office in Sriperumbudur to support a growing customer base.' ),
		array( 'year' => '2023', 'title' => 'HYA Tech is born', 'description' => 'Registered HYA Tech in Chennai, marking the next chapter of the business.' ),
		array( 'year' => '2024', 'title' => 'Manufacturing excellence', 'description' => 'Established a manufacturing facility in Hosur supporting precision components and fixture production.' ),
		array( 'year' => '2025', 'title' => 'Going global', 'description' => 'Established partnerships for know-how transfer and capacity sharing with China and Singapore.' ),
	);
}

function hya_career_roles(): array {
	return array( 'Design Engineer', 'Manufacturing Engineer', 'CNC Operator', 'Quality Inspector', 'Assembly Technician', 'General application' );
}

