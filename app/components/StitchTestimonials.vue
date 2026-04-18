<template>
  <section id="testimonials" class="section-gap">
    <div class="section-card">
      <!-- Dot label -->
      <div class="sect-dot-flex">
        <div class="dot"></div>
        <span class="dot-label">Testimonials</span>
      </div>

      <!-- Section heading -->
      <div class="mb-12 max-w-[600px]">
        <h2
          class="text-black text-3xl md:text-5xl font-medium leading-[1.15] tracking-tight"
        >
          What Clients Say
        </h2>
      </div>

      <!-- Testimonials horizontal scroll -->
      <div
        ref="scrollContainer"
        class="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style="-ms-overflow-style: none; scrollbar-width: none"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial-card snap-start rounded-2xl bg-[#f5f7f8] p-7 md:p-8 flex flex-col justify-between"
        >
          <p
            class="text-black text-base md:text-lg leading-relaxed mb-8 font-light"
          >
            "{{ testimonial.quote }}"
          </p>
          <div class="flex items-center gap-4">
            <div
              class="w-11 h-11 rounded-full bg-[#e5e9eb] flex items-center justify-center text-grey-light text-sm font-semibold"
            >
              {{ testimonial.initials }}
            </div>
            <div>
              <p class="text-black text-sm font-medium">
                {{ testimonial.name }}
              </p>
              <p class="text-grey-light text-xs">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Drag indicator -->
      <div class="mt-6 flex items-center gap-3">
        <div class="h-[2px] bg-black/10 flex-1 rounded-full overflow-hidden">
          <div
            ref="dragBar"
            class="h-full bg-black rounded-full transition-all duration-300"
            :style="{ width: dragProgress + '%' }"
          ></div>
        </div>
        <span class="text-grey-light text-xs">Drag</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const scrollContainer = ref(null);
const dragBar = ref(null);
const dragProgress = ref(20);

const testimonials = [
  {
    quote:
      "2code Solutions delivered exactly what we needed — a fast, polished product that exceeded our expectations. Their technical expertise and communication were outstanding from start to finish.",
    name: "Ahmed Khan",
    role: "Founder, UNI Review",
    initials: "AK",
  },
  {
    quote:
      "The team at 2code brought our vision to life with precision and creativity. Their full-stack capabilities meant we had a single partner for everything, from design to deployment.",
    name: "Sarah Mitchell",
    role: "Product Manager",
    initials: "SM",
  },
  {
    quote:
      "Working with 2code was a seamless experience. They understood our requirements quickly and delivered a bot that handles thousands of voice transcriptions daily without issues.",
    name: "David Park",
    role: "Community Manager, REY Bot",
    initials: "DP",
  },
  {
    quote:
      "Professional, responsive, and genuinely invested in getting things right. 2code Solutions is exactly the kind of tech partner every growing business needs.",
    name: "Fatima Hassan",
    role: "CEO, Aqua Homes",
    initials: "FH",
  },
  {
    quote:
      "From concept to launch, 2code provided outstanding technical leadership. They helped us navigate complex architectural decisions and delivered a product our users love.",
    name: "James Rivera",
    role: "CTO, TechStart",
    initials: "JR",
  },
];

/** Split heading text into word spans wrapped in overflow:hidden containers */
function splitIntoWords(el) {
  const text = el.textContent.trim();
  const words = text.split(/\s+/);
  el.innerHTML = "";
  words.forEach((word, i) => {
    const outer = document.createElement("span");
    outer.className = "word-outer";
    const inner = document.createElement("span");
    inner.className = "word-inner";
    inner.textContent = word;
    outer.appendChild(inner);
    el.appendChild(outer);
    if (i < words.length - 1) {
      el.appendChild(document.createTextNode(" "));
    }
  });
  return el.querySelectorAll(".word-inner");
}

onMounted(async () => {
  if (!import.meta.client) return;
  await nextTick();

  // Track scroll progress for drag indicator
  const container = scrollContainer.value;
  if (container) {
    container.addEventListener(
      "scroll",
      () => {
        const max = container.scrollWidth - container.clientWidth;
        if (max > 0) {
          dragProgress.value = Math.max(10, (container.scrollLeft / max) * 100);
        }
      },
      { passive: true },
    );
  }

  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  // ── Dot label fade-up ──
  const dotFlex = document.querySelector("#testimonials .sect-dot-flex");
  if (dotFlex) {
    gsap.from(dotFlex, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: dotFlex,
        start: "top 90%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }

  // ── Heading line-by-line reveal ──
  const heading = document.querySelector("#testimonials h2");
  if (heading) {
    const words = splitIntoWords(heading);
    gsap.to(words, {
      y: 0,
      duration: 0.7,
      stagger: 0.04,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }

  // ── Testimonial cards staggered slide-in ──
  const cards = container?.querySelectorAll(".testimonial-card");
  if (cards) {
    gsap.from(cards, {
      x: 80,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }

  // ── Drag bar fade in ──
  const dragIndicator = document.querySelector("#testimonials .mt-6");
  if (dragIndicator) {
    gsap.from(dragIndicator, {
      y: 15,
      opacity: 0,
      duration: 0.5,
      delay: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: dragIndicator,
        start: "top 95%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }
});
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>

