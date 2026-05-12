import { type ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

import "lenis/dist/lenis.css";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: pathname === "/robots" ? 2.4 : 1.4,
      smoothWheel: true,
      syncTouch: true,
    });

    let frameId = 0;

    const update = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(update);
    };

    frameId = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return <>{children}</>;
}
