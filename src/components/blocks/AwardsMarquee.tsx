function CrestIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
    >
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M20 8l-8 4v8c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11v-8l-8-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M16 18h8M16 22h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

type MarqueeItemProps = {
  label: string;
  variant: "primary" | "accent";
};

function MarqueeItem({ label, variant }: MarqueeItemProps) {
  const colorClass = variant === "primary" ? "text-primary" : "text-accent";

  return (
    <div className={`flex shrink-0 items-center gap-5 px-8 ${colorClass}`}>
      <CrestIcon className="h-9 w-9 shrink-0 opacity-90" />
      <span className="whitespace-nowrap font-serif text-xl font-semibold uppercase tracking-wide sm:text-2xl lg:text-[1.65rem]">
        {label}
      </span>
    </div>
  );
}

const items: MarqueeItemProps[] = [
  { label: "Admission open for 2026", variant: "primary" },
  { label: "Admission open for 2026", variant: "accent" },
  { label: "Admission open for 2026", variant: "primary" },
  { label: "Admission open for 2026", variant: "accent" },
  { label: "Admission open for 2026", variant: "primary" },
  { label: "Admission open for 2026", variant: "accent" },
];

export function AwardsMarquee() {
  const track = [...items, ...items];

  return (
    <section
      className="overflow-hidden border-y border-border bg-[#f3f1eb] py-5"
      aria-label="Admissions announcement"
    >
      <div className="marquee-track flex w-max items-center">
        {track.map((item, index) => (
          <MarqueeItem key={`${item.variant}-${index}`} {...item} />
        ))}
      </div>
    </section>
  );
}
