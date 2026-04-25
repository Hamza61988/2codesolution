<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, watch } from "vue";

const { $lenis } = useNuxtApp();
const route = useRoute();

const scrollToHash = async (hash) => {
  if (!hash || hash === "#") return;

  await nextTick();
  const target = document.querySelector(decodeURIComponent(hash));
  if (!target) return;

  $lenis?.scrollTo(target, {
    duration: 1.2,
    offset: -8,
    easing: (t) => 1 - Math.pow(1 - t, 4),
  });
};

const onAnchorClick = (e) => {
  const link = e.target?.closest?.('a[href^="#"]');
  if (!link) return;

  const hash = link.getAttribute("href");
  if (!hash || hash === "#") return;

  const target = document.querySelector(decodeURIComponent(hash));
  if (!target) return;

  e.preventDefault();
  window.history.replaceState(null, "", hash);
  scrollToHash(hash);
};

onMounted(() => {
  document.addEventListener("click", onAnchorClick);

  if (route.hash) {
    scrollToHash(route.hash);
  }
});

onBeforeUnmount(() => {
  document.removeEventListener("click", onAnchorClick);
});

watch(
  () => route.hash,
  (hash) => {
    if (hash) {
      scrollToHash(hash);
    }
  },
);
</script>
