"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  stagger = false,
  delay,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Animira direktnu decu jedno za drugim */
  stagger?: boolean;
  /** Kasnjenje za pojedinacni reveal, npr. "0.15s" */
  delay?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const inView = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.9 && r.bottom > 0;
    };

    // Vec u vidokrugu na ucitavanju — prikazi odmah.
    if (inView()) {
      setVisible(true);
      return;
    }

    let io: IntersectionObserver | undefined;
    const reveal = () => {
      setVisible(true);
      cleanup();
    };
    const onScroll = () => {
      if (inView()) reveal();
    };

    function cleanup() {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }

    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) reveal();
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      io.observe(el);
    }
    // Fallback ako IO ne okine (npr. programski scroll, neki webview-i).
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return cleanup;
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(stagger ? "reveal-group" : "reveal", visible && "is-visible", className)}
      style={delay ? ({ "--reveal-delay": delay } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
