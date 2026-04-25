<template>
  <section ref="heroSection" class="hero-home is-top">
    <!-- Navbar positioned absolute inside hero -->
    <div class="navbar-section-wrap">
      <header class="w-container">
        <div class="navbar">
          <!-- Logo -->
          <a href="#" class="nav-logo" style="line-height:0">
            <svg width="72" height="43" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" aria-label="2code Solutions">
              <rect x="40" y="20" width="320" height="192" rx="32" ry="32" fill="none" stroke="#0a0a0a" stroke-width="5"/>
              <text x="200" y="148" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="120" letter-spacing="-6" fill="#0a0a0a">
                <tspan fill="#00d4d4">2</tspan>CS
              </text>
              <circle cx="348" cy="28" r="14" fill="#00d4d4"/>
            </svg>
          </a>

          <!-- Desktop Nav Links -->
          <nav class="nav-menu hidden md:flex">
            <div class="link-wrapper">
              <a class="nav-link" href="#work">Work</a>
              <div class="hover-line"></div>
            </div>
            <div class="link-wrapper">
              <a class="nav-link" href="#services">Services</a>
              <div class="hover-line"></div>
            </div>
            <div class="link-wrapper">
              <a class="nav-link" href="#testimonials">Testimonials</a>
              <div class="hover-line"></div>
            </div>
            <div class="link-wrapper">
              <a class="nav-link" href="#contact">Contact</a>
              <div class="hover-line"></div>
            </div>
          </nav>

          <!-- CTA + Mobile Menu Toggle -->
          <div class="nav-right">
            <a href="#contact" class="main-btn hidden md:flex">
              <div class="btn-bg"></div>
              <span class="btn-label">Let's chat</span>
              <span class="btn-wave">👋</span>
            </a>
            <button
              @click="menuOpen = !menuOpen"
              class="md:hidden text-black w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <svg
                v-if="!menuOpen"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <!-- Mobile Menu -->
      <Transition name="slide">
        <div
          v-if="menuOpen"
          class="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/5 px-6 py-8"
        >
          <nav class="flex flex-col gap-6">
            <a
              @click="menuOpen = false"
              class="text-black text-2xl font-medium"
              href="#work"
              >Work</a
            >
            <a
              @click="menuOpen = false"
              class="text-black text-2xl font-medium"
              href="#services"
              >Services</a
            >
            <a
              @click="menuOpen = false"
              class="text-black text-2xl font-medium"
              href="#testimonials"
              >Testimonials</a
            >
            <a
              @click="menuOpen = false"
              class="text-black text-2xl font-medium"
              href="#contact"
              >Contact</a
            >
            <a
              @click="menuOpen = false"
              href="#contact"
              class="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#e5e9eb] text-black text-base font-medium"
            >
              Let's chat 👋
            </a>
          </nav>
        </div>
      </Transition>
    </div>

    <!-- Hero content — centered -->
    <header class="hero-header">
      <div
        class="flex flex-col items-center justify-start gap-4 md:gap-5 text-center"
      >
        <h1
          ref="heroHeading"
          class="text-black font-medium leading-[1.08] tracking-tight"
          style="font-size: clamp(2.75rem, 7vw, 5.5rem)"
        >
          <span
            v-for="(char, idx) in heroText"
            :key="idx"
            :class="['hero-char', idx === 0 ? 'hero-char--accent' : '']"
          >{{ char === ' ' ? ' ' : char }}</span>
        </h1>
        <p
          ref="subtitleRef"
          class="opacity-0 text-grey-light text-base md:text-lg leading-relaxed font-light max-w-[480px]"
        >
          We deliver creative web design, mobile apps, and full-stack solutions
          to make the most impact.
        </p>
      </div>
      <a ref="ctaRef" href="#contact" class="opacity-0 main-btn is-hero">
        <div class="btn-bg"></div>
        <span class="btn-label">Request a quote</span>
        <span class="btn-wave">👋</span>
      </a>
    </header>

    <!-- Scroll down button — positioned absolute inside hero -->
    <a ref="scrollDownRef" href="#work" class="scroll-down-link opacity-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M7.6464 13.3532C7.8417 13.5485 8.1583 13.5485 8.3536 13.3532L11.5355 10.1712C11.7308 9.976 11.7308 9.6594 11.5355 9.4641C11.3403 9.2689 11.0237 9.2689 10.8284 9.4641L8 12.2926L5.1716 9.4641C4.9763 9.2689 4.6597 9.2689 4.4645 9.4641C4.2692 9.6594 4.2692 9.976 4.4645 10.1712L7.6464 13.3532ZM7.5 2L7.5 13L8.5 13L8.5 2L7.5 2Z"
          fill="white"
        />
      </svg>
    </a>

    <!-- Infinity line / marquee — absolutely positioned at bottom of hero -->
    <div ref="infinityLineRef" class="infinity-line-absolute opacity-0">
      <div class="infinity-line-wrapper">
        <div v-for="i in 6" :key="i" class="infinity-line-part">
          <div>/ Results driven solutions</div>
          <div>/ Business value</div>
          <div>/ Purposeful designs</div>
          <div>/ Strategic Experiences</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";

const heroSection = ref(null);
const heroHeading = ref(null);
const subtitleRef = ref(null);
const ctaRef = ref(null);
const scrollDownRef = ref(null);
const infinityLineRef = ref(null);
const menuOpen = ref(false);

const heroText = "2code Solutions";

onMounted(async () => {
  if (!import.meta.client) return;
  await nextTick();
  await new Promise((r) => setTimeout(r, 300));

  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  // Hero character animation
  const chars = heroHeading.value?.querySelectorAll(".hero-char");
  if (chars && chars.length > 0) {
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.035,
      ease: "power3.out",
      delay: 0.2,
    });
  }

  // Subtitle + CTA + scroll-down + infinity line fade in
  const fadeEls = [
    subtitleRef.value,
    ctaRef.value,
    scrollDownRef.value,
    infinityLineRef.value,
  ].filter(Boolean);
  gsap.to(fadeEls, {
    opacity: 1,
    duration: 0.7,
    stagger: 0.12,
    ease: "power2.out",
    delay: 0.9,
  });

  // Scroll trigger: toggle is-top class
  ScrollTrigger.create({
    trigger: heroSection.value,
    start: "top top",
    end: "+=100",
    onLeaveBack: () => {
      heroSection.value?.classList.add("is-top");
    },
    onLeave: () => {
      heroSection.value?.classList.remove("is-top");
    },
  });

  let ticking = false;
  const handleScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 50) {
        heroSection.value?.classList.remove("is-top");
      } else {
        heroSection.value?.classList.add("is-top");
      }
      ticking = false;
    });
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
