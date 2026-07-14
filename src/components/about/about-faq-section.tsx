import { Reveal } from "@/components/reveal";
import { AboutFaq } from "@/app/about/about-faq";

export function AboutFaqSection() {
  return (
    <section className="section-alt pt-0">
      <div className="site-container">
        <Reveal>
          <AboutFaq />
        </Reveal>
      </div>
    </section>
  );
}
