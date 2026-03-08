import Lenis from "lenis";

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    duration: 0.6,
    easing: (t: number) => 1 - Math.pow(1 - t, 4),
    smoothWheel: true,
    wheelMultiplier: 1.8,
    touchMultiplier: 2,
    lerp: 0.15,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Integrate with GSAP ScrollTrigger if available
  if (import.meta.client) {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time: number) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      });
    });
  }

  return {
    provide: {
      lenis,
    },
  };
});
