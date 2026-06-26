import { useEffect } from "react";

/**
 * Adds `is-visible` to elements with `mj-reveal`, `mj-reveal-fade`,
 * or `mj-rule` once they scroll into view.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".mj-reveal, .mj-reveal-fade, .mj-rule"),
    );
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
