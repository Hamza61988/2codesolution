<template>
  <section id="work" class="section-gap">
    <div class="section-card">
      <!-- Dot label -->
      <div class="sect-dot-flex">
        <div class="dot"></div>
        <span class="dot-label">Featured Works</span>
      </div>

      <!-- Section heading -->
      <div class="mb-16 max-w-[700px]">
        <h2
          class="text-black text-3xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.15] tracking-tight"
        >
          We create solutions but most importantly we identify problems.
        </h2>
      </div>

      <!-- Project Cards -->
      <div class="flex flex-col gap-16 md:gap-20">
        <!-- Project 1: Campus Pulse -->
        <NuxtLink to="/campus-pulse" class="project-card group cursor-pointer block">
          <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <!-- Image -->
            <div
              class="w-full lg:w-[58%] rounded-2xl bg-[#f0f2f3] h-[22rem] md:h-[26rem] lg:h-[28rem] flex items-center justify-center"
            >
              <img
                src="/uni.png"
                alt="Campus Pulse"
                class="project-image max-w-full max-h-full object-contain"
              />
            </div>
            <!-- Info -->
            <div class="w-full lg:w-[42%] flex flex-col gap-3 lg:pt-6">
              <div class="sect-dot-flex mb-0">
                <div
                  class="dot"
                  style="width: 0.375rem; height: 0.375rem"
                ></div>
                <span class="dot-label text-xs"
                  >EdTech Platform</span
                >
              </div>
              <h3
                class="text-black text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight group-hover:opacity-60 transition-opacity"
              >
                Campus Pulse
              </h3>
              <p class="text-grey-light text-base leading-relaxed mt-1">
                A comprehensive platform for Pakistani students to review, rate,
                and discover universities with data-driven insights.
              </p>
              <div class="flex flex-wrap gap-2 mt-4">
                <span
                  class="px-3 py-1.5 rounded-full bg-[rgba(6,182,212,0.08)] text-cyan text-xs font-medium"
                  >Flutter</span
                >
                <span
                  class="px-3 py-1.5 rounded-full bg-[rgba(6,182,212,0.08)] text-cyan text-xs font-medium"
                  >Dart</span
                >
                <span
                  class="px-3 py-1.5 rounded-full bg-[rgba(6,182,212,0.08)] text-cyan text-xs font-medium"
                  >Appwrite</span
                >
              </div>
              <div class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-black group-hover:gap-3 transition-all">
                View App
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
                  <line x1="2" y1="7" x2="12" y2="7" />
                  <polyline points="7,2 12,7 7,12" />
                </svg>
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Divider -->
        <div class="w-full h-px bg-black/5"></div>

        <!-- Project 2: REY Bot -->
        <div class="project-card group cursor-pointer">
          <div
            class="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-start"
          >
            <!-- Image -->
            <div
              class="w-full lg:w-[58%] rounded-2xl bg-[#f0f2f3] h-[22rem] md:h-[26rem] lg:h-[28rem] p-6 flex items-center justify-center"
            >
              <img
                src="/reybot.png"
                alt="REY Bot"
                class="project-image max-w-full max-h-full object-contain"
              />
            </div>
            <!-- Info -->
            <div class="w-full lg:w-[42%] flex flex-col gap-3 lg:pt-6">
              <div class="sect-dot-flex mb-0">
                <div
                  class="dot"
                  style="width: 0.375rem; height: 0.375rem"
                ></div>
                <span class="dot-label text-xs">AI Tool</span>
              </div>
              <h3
                class="text-black text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight group-hover:opacity-60 transition-opacity"
              >
                REY Bot
              </h3>
              <p class="text-grey-light text-base leading-relaxed mt-1">
                An advanced Discord transcription bot that converts voice chats
                into text in real-time using AI-powered speech recognition.
              </p>
              <div class="flex flex-wrap gap-2 mt-4">
                <span
                  class="px-3 py-1.5 rounded-full bg-[rgba(6,182,212,0.08)] text-cyan text-xs font-medium"
                  >Python</span
                >
                <span
                  class="px-3 py-1.5 rounded-full bg-[rgba(6,182,212,0.08)] text-cyan text-xs font-medium"
                  >Discord API</span
                >
                <span
                  class="px-3 py-1.5 rounded-full bg-[rgba(6,182,212,0.08)] text-cyan text-xs font-medium"
                  >OpenAI Whisper</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="w-full h-px bg-black/5"></div>

        <!-- Project 3: Aqua Homes -->
        <a href="https://www.aquahomesolution.company/" target="_blank" rel="noopener noreferrer" class="project-card group cursor-pointer block">
          <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <!-- Image -->
            <div
              class="w-full lg:w-[58%] rounded-2xl bg-[#f0f2f3] h-[22rem] md:h-[26rem] lg:h-[28rem] p-6 flex items-center justify-center"
            >
              <img
                src="/aquahomes.png"
                alt="Aqua Homes"
                class="project-image max-w-full max-h-full object-contain"
              />
            </div>
            <!-- Info -->
            <div class="w-full lg:w-[42%] flex flex-col gap-3 lg:pt-6">
              <div class="sect-dot-flex mb-0">
                <div
                  class="dot"
                  style="width: 0.375rem; height: 0.375rem"
                ></div>
                <span class="dot-label text-xs"
                  >Corporate Website</span
                >
              </div>
              <h3
                class="text-black text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight group-hover:opacity-60 transition-opacity"
              >
                Aqua Homes
              </h3>
              <p class="text-grey-light text-base leading-relaxed mt-1">
                A high-performance web presence for a leading waterproofing
                company, built for speed and conversion.
              </p>
              <div class="flex flex-wrap gap-2 mt-4">
                <span
                  class="px-3 py-1.5 rounded-full bg-[rgba(6,182,212,0.08)] text-cyan text-xs font-medium"
                  >React</span
                >
                <span
                  class="px-3 py-1.5 rounded-full bg-[rgba(6,182,212,0.08)] text-cyan text-xs font-medium"
                  >Tailwind CSS</span
                >
                <span
                  class="px-3 py-1.5 rounded-full bg-[rgba(6,182,212,0.08)] text-cyan text-xs font-medium"
                  >Next.js</span
                >
              </div>
              <div class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-black group-hover:gap-3 transition-all">
                Visit Site
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
                  <line x1="2" y1="7" x2="12" y2="7" />
                  <polyline points="7,2 12,7 7,12" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>

      <!-- All projects link -->
      <div class="mt-16 flex justify-center">
        <a
          href="#"
          class="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-black/15 text-black text-sm font-medium hover:bg-cyan hover:text-white hover:border-cyan transition-all duration-300"
        >
          All Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <line x1="2" y1="8" x2="14" y2="8" />
            <polyline points="8,2 14,8 8,14" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from "vue";

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

  // â”€â”€ Dot label fade-up â”€â”€
  const dotFlex = document.querySelector("#work .sect-dot-flex");
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

  // â”€â”€ Heading line-by-line reveal â”€â”€
  const heading = document.querySelector("#work h2");
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

  // â”€â”€ Project cards: image + info staggered reveal â”€â”€
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    const img = card.querySelector(".project-image");
    const info = card.querySelector(".flex.flex-col.gap-3");
    const tags = card.querySelectorAll(".flex-wrap span");

    // Image scale-in
    if (img) {
      gsap.from(img, {
        scale: 1.1,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }

    // Info block slide up
    if (info) {
      gsap.from(info, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        delay: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }

    // Tags stagger
    if (tags.length) {
      gsap.from(tags, {
        y: 15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.06,
        delay: 0.35,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }
  });

  // â”€â”€ Dividers fade in â”€â”€
  const dividers = document.querySelectorAll("#work .w-full.h-px");
  dividers.forEach((div) => {
    gsap.from(div, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.8,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: div,
        start: "top 90%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  });

  // â”€â”€ "All Projects" CTA fade up â”€â”€
  const allProjectsBtn = document.querySelector("#work .mt-16 a");
  if (allProjectsBtn) {
    gsap.from(allProjectsBtn, {
      y: 25,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: allProjectsBtn,
        start: "top 92%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }
});
</script>

