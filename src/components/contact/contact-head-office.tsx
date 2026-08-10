import { OfficeExplorer } from "@/components/contact/office-explorer";
import { locations } from "@/data/site";

export function ContactHeadOffice() {
  return (
    <section className="section">
      <div className="site-container grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <OfficeExplorer locations={locations} />
      </div>
    </section>
  );
}
