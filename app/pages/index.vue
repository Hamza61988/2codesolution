<template>
  <div class="relative w-full min-h-screen font-sans overflow-x-hidden">
    <main>
      <StitchHero />
      <StitchFeatured />
      <StitchServices />
      <StitchTestimonials />
      <StitchContact />
    </main>
    <StitchFooter />
  </div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";

onMounted(async () => {
  if (!import.meta.client) return;
  await nextTick();
  // Wait for all child components to mount and render
  await new Promise((r) => setTimeout(r, 200));

  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  // Reshape animation: section cards start full-width, gain border-radius on scroll
  document.querySelectorAll(".section-card").forEach((card) => {
    ScrollTrigger.create({
      trigger: card,
      start: "top 90%",
      end: "top 20%",
      onEnter: () => card.classList.add("is-shaped"),
      onLeaveBack: () => card.classList.remove("is-shaped"),
    });
  });
});

useHead({
  title: "2code Solutions — We Build Digital Products",
  meta: [
    {
      name: "description",
      content:
        "2code Solutions builds full-stack digital products — from mobile apps to web platforms. Web development, UI/UX, Flutter apps, and backend systems. Your trusted technology partner in Pakistan.",
    },
    { name: "keywords", content: "2code Solutions, web development Pakistan, mobile app development, Flutter, React, Next.js, UI/UX design, backend development, software agency Pakistan" },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "2code Solutions" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "2code Solutions" },
    { property: "og:title", content: "2code Solutions — We Build Digital Products" },
    { property: "og:description", content: "Full-stack web & mobile development agency. We build web platforms, Flutter apps, UI/UX designs, and backend systems." },
    { property: "og:url", content: "https://2codesolution.com" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "2code Solutions — We Build Digital Products" },
    { name: "twitter:description", content: "Full-stack digital products — web, mobile, design & backend. Pakistan's trusted tech partner." },
  ],
});
</script>
