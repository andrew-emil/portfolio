import { cn } from "@/lib/utils";

type Item = {
  title?: string;
  degree?: string;
  institution?: string;
  company?: string;
  duration: string;
  location?: string;
  details?: string[];
};

export function Timeline({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "relative ms-2 sm:ms-3 border-s-2 border-purple-500/40",
        className
      )}
    >
      {items.map((item, idx) => (
        <li key={idx} className="mb-6 sm:mb-8 ms-3 sm:ms-4">
          <div className="absolute -start-2.5 sm:-start-3.5 mt-1.5 h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 rounded-full border-2 border-purple-400 bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
          <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-3 sm:p-4 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]">
            <h3 className="text-sm sm:text-base font-semibold text-gray-100">
              {item.title || item.degree}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              {item.company || item.institution} •{" "}
              {item.location ? item.location + " • " : ""}
              {item.duration}
            </p>
            {item.details?.length ? (
              <ul className="mt-2 list-disc space-y-1 ps-4 sm:ps-5 text-xs sm:text-sm text-gray-300">
                {item.details.map((d, i) => (
                  <li key={i} className="leading-relaxed">
                    {d}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
