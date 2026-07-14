import { ContactForm } from "@/components/forms";
import { SectionHeading } from "@/components/ui";

export function ContactConsultation() {
  return (
    <section id="consultation" className="section-alt scroll-mt-32">
      <div className="site-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Request consultation"
            title="Tell us enough to begin well."
            description="A few concrete details about the application, production environment, timeline, and constraints help HYA Tech route your enquiry effectively."
          />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
