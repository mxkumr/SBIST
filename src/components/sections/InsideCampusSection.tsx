import { Counters } from "@/components/blocks/Counters";
import { counterItems } from "@/lib/home-content";

export function InsideCampusSection() {
  return (
    <Counters
      items={counterItems}
      subtitle="Inside SBIST"
      title="Where Ambition Meets Opportunity"
    />
  );
}
