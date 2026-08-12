import { ContactForm } from "@/components/forms";
import { SectionHeading } from "@/components/ui";

export function ContactConsultation() {
  return (
    <section id="consultation" className="section-alt scroll-mt-32">
      <div className="site-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Request consultation"
            title="Get in Touch with Industry Experts "
            description="Share the details of engineering you want to bring to life / a production challenge let's cross
             horizon & create precision beyond imagination."
          />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
