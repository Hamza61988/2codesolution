<template>
  <section id="services" class="section-gap">
    <div class="section-card">
      <!-- Top row: dot label + heading -->
      <div class="services-grid">
        <div>
          <div class="sect-dot-flex">
            <div class="dot"></div>
            <span class="dot-label">Our Services</span>
          </div>
        </div>
        <h2
          ref="headingRef"
          class="services-heading text-black font-medium leading-[1.12] tracking-tight"
        >
          We build solutions but most importantly we solve real problems.
        </h2>
      </div>

      <!-- Services list -->
      <div class="h-services-wrapper">
        <div class="list-h-services">
          <div
            v-for="(service, index) in services"
            :key="service.name"
            ref="serviceItems"
            class="service-row-item"
          >
            <a href="#contact" class="grid-service-link">
              <div class="service-number">
                {{ String(index + 1).padStart(2, "0") }}
              </div>
              <h3 class="service-name-text">{{ service.name }}</h3>
              <div class="s-arrow-wrap">
                <div class="s-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="100%"
                    viewBox="0 0 18 12"
                    fill="none"
                  >
                    <path
                      d="M17.0001 6L1.00012 6"
                      stroke="#141B34"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0003 11C12.0003 11 17.0002 7.31756 17.0002 5.99996C17.0003 4.68237 12.0002 1 12.0002 1"
                      stroke="#141B34"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div class="h-service-bg"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const headingRef = ref(null);
const serviceItems = ref([]);

const services = [
  { name: "Web Development" },
  { name: "Mobile Apps" },
  { name: "UI/UX Design" },
  { name: "Backend Systems" },
  { name: "API Development" },
  { name: "Cloud Solutions" },
  { name: "DevOps" },
  { name: "Consulting" },
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

  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  // ── Dot label fade-up ──
  const dotFlex = document.querySelector("#services .sect-dot-flex");
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
  if (headingRef.value) {
    const words = splitIntoWords(headingRef.value);
    gsap.to(words, {
      y: 0,
      duration: 0.7,
      stagger: 0.04,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.value,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }

  // ── Service items: each fades in individually with stagger ──
  const items = serviceItems.value;
  if (items.length) {
    gsap.set(items, { y: 30, opacity: 0 });

    items.forEach((item, i) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 92%",
          toggleActions: "play none none none",
          once: true,
        },
        delay: i * 0.04,
      });
    });
  }
});
</script>
