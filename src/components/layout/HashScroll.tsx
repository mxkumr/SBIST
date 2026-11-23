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
    const getHash = () => window.location.hash.replace(/^#/, "");

    const scrollToHash = (behavior: ScrollBehavior = "smooth") => {
      const id = getHash();
      if (!id) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return true;
      }
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView({ behavior, block: "start" });
      return true;
    };

    const runWithRetry = () => {
      if (scrollToHash(getHash() ? "smooth" : "auto")) return;
      const delays = [120, 350, 700, 1200];
      delays.forEach((ms) => {
        window.setTimeout(() => scrollToHash("smooth"), ms);
      });
    };

    runWithRetry();

    const onHashChange = () => runWithRetry();
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}
