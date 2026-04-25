<template>
  <div
    class="fixed top-0 left-0 w-full z-[100] transition-all duration-300"
    :class="scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : ''"
  >
    <div class="max-w-[82.5rem] mx-auto px-6 md:px-10">
      <header class="flex items-center justify-between py-4">
        <!-- Logo -->
        <a
          href="#"
          class="text-black text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity"
          style="line-height: 0"
        >
          <svg
            width="72"
            height="43"
            viewBox="0 0 400 240"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="2code Solutions"
          >
            <rect
              x="40"
              y="20"
              width="320"
              height="192"
              rx="32"
              ry="32"
              fill="none"
              stroke="#0a0a0a"
              stroke-width="5"
            />
            <text
              x="200"
              y="148"
              text-anchor="middle"
              font-family="'Plus Jakarta Sans', sans-serif"
              font-weight="800"
              font-size="120"
              letter-spacing="-6"
              fill="#0a0a0a"
            >
              <tspan fill="#00d4d4">2</tspan>
              CS
            </text>
            <circle cx="348" cy="28" r="14" fill="#00d4d4" />
          </svg>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-8">
          <a
            class="text-grey-light hover:text-black transition-colors text-sm"
            href="#work"
            >Work</a
          >
          <a
            class="text-grey-light hover:text-black transition-colors text-sm"
            href="#services"
            >Services</a
          >
          <a
            class="text-grey-light hover:text-black transition-colors text-sm"
            href="#testimonials"
            >Testimonials</a
          >
          <a
            class="text-grey-light hover:text-black transition-colors text-sm"
            href="#contact"
            >Contact</a
          >
        </nav>

        <!-- CTA -->
        <div class="flex items-center gap-4">
          <a
            href="#contact"
            class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/15 text-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            Request a Quote
          </a>
          <!-- Mobile menu button -->
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
      </header>
    </div>

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
            class="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-full border border-black/15 text-black text-base font-medium"
          >
            Request a Quote
          </a>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const menuOpen = ref(false);
const scrolled = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 80;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
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
