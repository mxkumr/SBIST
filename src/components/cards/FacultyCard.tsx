import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export type FacultyCardProps = {
  name: string;
  role: string;
  image: string;
  href?: string;
};

export function FacultyCard({ name, role, image, href = "/about" }: FacultyCardProps) {
  return (
    <Link href={href} className="group block">
      <Card hover padding="none" className="overflow-hidden">
        <div className="relative aspect-[4/5] overflow-hidden bg-surface">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
            <span className="text-xs font-semibold text-accent">View Profile →</span>
          </div>
        </div>
        <div className="p-5 text-center">
          <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="mt-1 text-sm text-muted">{role}</p>
        </div>
      </Card>
    </Link>
  );
}
