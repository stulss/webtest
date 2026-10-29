import { useEffect, useRef, useState } from "react";

// 아코디언 패널 높이를 측정해 부드럽게 펼침/접힘. reduced-motion이면 즉시 전환.
export function useAccordion() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const first = useRef(true);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (first.current) {
      first.current = false;
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.hidden = !open;
      return;
    }
    if (open) {
      el.hidden = false;
      const target = el.scrollHeight;
      el.style.overflow = "hidden";
      el.style.height = "0px";
      el.offsetHeight;
      el.style.height = target + "px";
      const done = (e) => {
        if (e.propertyName !== "height") return;
        el.style.height = "";
        el.style.overflow = "";
        el.removeEventListener("transitionend", done);
      };
      el.addEventListener("transitionend", done);
      el.closest("article")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      el.style.overflow = "hidden";
      el.style.height = el.scrollHeight + "px";
      el.offsetHeight;
      el.style.height = "0px";
      const done = (e) => {
        if (e.propertyName !== "height") return;
        el.hidden = true;
        el.style.height = "";
        el.style.overflow = "";
        el.removeEventListener("transitionend", done);
      };
      el.addEventListener("transitionend", done);
    }
  }, [open]);

  return { open, toggle: () => setOpen((v) => !v), panelRef };
}
