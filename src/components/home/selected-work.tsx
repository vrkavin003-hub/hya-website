import { ButtonLink } from "@/components/ui";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeading } from "@/components/ui";

export function SelectedWork() {
  return (
    <section className="section">
      <div className="site-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Manufacturing problems made tangible."
            description="A selection of the project categories and solutions presented by HYA Tech."
          />
          <ButtonLink href="/projects" variant="secondary">
            Explore projects
          </ButtonLink>
        </div>
        <div className="mt-12">
          <ProjectGrid limit={6} />
        </div>
      </div>
    </section>
  );
}
