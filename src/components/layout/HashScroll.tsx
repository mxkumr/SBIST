"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * After client navigation:
 * - with a hash → scroll to that section
 * - without a hash → ensure the page starts at the top
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");

    const run = () => {
      if (!hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
      }

      const el = document.getElementById(hash);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const t1 = window.setTimeout(run, 50);
    const t2 = window.setTimeout(run, hash ? 350 : 0);

    const onHashChange = () => {
      const next = window.location.hash.replace(/^#/, "");
      if (!next) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return;
      }
      document.getElementById(next)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}
