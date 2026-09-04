import { useEffect, useRef, useState } from "react";
import type React from "react";

// ── Reveal hook ───────────────────────────────────────────────────────────────
export function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, vis }
}

export function revealStyle(vis: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : 'translateY(22px)',
    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  }
}