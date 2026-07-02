import { timeline } from "@/data/site";

export function Timeline({ compact = false }: { compact?: boolean }) {
  const items = compact ? timeline.slice(-4) : timeline;

  return (
    <ol className="relative">
      {items.map((item, index) => (
        <li
          key={item.year}
          className={`relative grid gap-5 pb-10 sm:grid-cols-[104px_1fr] ${
            index === items.length - 1 ? "pb-0" : ""
          }`}
        >
          {index < items.length - 1 ? (
            <span
              className="absolute bottom-0 left-[23px] top-12 w-px bg-border sm:left-[51px]"
              aria-hidden="true"
            />
          ) : null}
          <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-blue/20 bg-lightblue text-sm font-bold text-blue sm:mx-auto">
            {index + 1}
          </div>
          <div className="rounded-[20px] border border-border bg-white p-6">
            <div className="text-sm font-semibold text-blue">{item.year}</div>
            <h3 className="mt-2 text-xl font-semibold text-navy">{item.title}</h3>
            <p className="mt-3 leading-7 text-muted">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
