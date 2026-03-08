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
  title: "2code Solution — We Build Digital Products",
  meta: [
    {
      name: "description",
      content:
        "2code Solution builds full-stack digital products — from mobile apps to web platforms. Your trusted technology partner.",
    },
  ],
});
</script>
