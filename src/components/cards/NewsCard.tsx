import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export type NewsCardProps = {
  title: string;
  excerpt?: string;
  category: string;
  date: string;
  image: string;
  author?: string;
  authorImage?: string;
  href?: string;
};

export function NewsCard({
  title,
  excerpt,
  category,
  date,
  image,
  author,
  authorImage,
  href = "/sbsb#events",
}: NewsCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <Card hover padding="none" className="flex h-full flex-col overflow-hidden">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <span className="absolute left-4 top-4 rounded-md bg-accent px-3 py-1 text-xs font-semibold text-white">
            {category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <time className="text-xs text-muted">{date}</time>
          <h3 className="mt-2 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          {excerpt && (
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
              {excerpt}
            </p>
          )}
          {author && (
            <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
              {authorImage ? (
                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image src={authorImage} alt={author} fill className="object-cover" sizes="32px" />
                </div>
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {author[0]}
                </div>
              )}
              <span className="text-sm text-muted">{author}</span>
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}
