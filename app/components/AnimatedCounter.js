"use client";
import { useEffect, useRef, useState } from "react";

/**
 * AnimatedCounter — counts from 0 to `end` when visible in viewport.
 * Handles formats: "10,000+", "100+", "4.8", "50+"
 */
export default function AnimatedCounter({ value, duration = 1800, className = "" }) {
  const [display, setDisplay] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  // Parse target: "10,000+" → { num: 10000, suffix: "+", decimals: 0, hasComma: true }
  const parsed = (() => {
    const clean = value.replace(/,/g, "");
    const match = clean.match(/^([\d.]+)(.*)$/);
    if (!match) return { num: 0, suffix: "", decimals: 0, hasComma: false };
    const num = parseFloat(match[1]);
    const suffix = match[2] || "";
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
    const hasComma = value.includes(",");
    return { num, suffix, decimals, hasComma };
  })();

  function formatNum(n) {
    let s = parsed.decimals > 0 ? n.toFixed(parsed.decimals) : Math.floor(n).toString();
    if (parsed.hasComma) {
      const parts = s.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      s = parts.join(".");
    }
    return s + parsed.suffix;
  }

  useEffect(() => {
    if (hasAnimated) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated]);

  function animate() {
    const start = performance.now();
    const { num } = parsed;

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * num;
      setDisplay(formatNum(current));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(formatNum(num));
      }
    }
    requestAnimationFrame(step);
  }

  return (
    <span ref={ref} className={`stat-value ${hasAnimated ? "counted" : ""} ${className}`}>
      {display}
    </span>
  );
}
