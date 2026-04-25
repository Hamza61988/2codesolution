import Lenis from "lenis";

export default defineNuxtPlugin(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const lenis = new Lenis({
    duration: prefersReducedMotion ? 0.01 : 1.6,
    easing: (t: number) => 1 - Math.pow(1 - t, 4),
    smoothWheel: !prefersReducedMotion,
    // Lower multipliers make users scroll more to travel the same distance.
    wheelMultiplier: 0.45,
    touchMultiplier: 0.7,
    syncTouch: true,
    lerp: prefersReducedMotion ? 1 : 0.055,
  });

  let rafId = 0;

  function raf(time: number) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  import("gsap/ScrollTrigger")
    .then(({ ScrollTrigger }) => {
      lenis.on("scroll", ScrollTrigger.update);
    })
    .catch(() => {
      // ScrollTrigger is optional for pages that do not use GSAP.
    });

  window.addEventListener("pagehide", () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
  });

  return {
    provide: {
      lenis,
    },
  };
});