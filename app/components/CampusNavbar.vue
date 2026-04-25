<template>
  <header class="campus-navbar">
    <div class="cp-nav-inner">
      <NuxtLink
        :to="logoTo"
        class="cp-nav-logo"
        aria-label="2code Solutions home"
      >
        <svg
          width="72"
          height="43"
          viewBox="0 0 400 240"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
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
      </NuxtLink>

      <NuxtLink :to="backTo" class="cp-nav-back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          aria-hidden="true"
          focusable="false"
        >
          <line x1="14" y1="8" x2="2" y2="8" />
          <polyline points="7,3 2,8 7,13" />
        </svg>
        {{ backLabel }}
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    backTo: string;
    backLabel?: string;
    logoTo?: string;
  }>(),
  {
    backLabel: "Back",
    logoTo: "/",
  },
);
</script>

<style scoped>
.campus-navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--grey);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.cp-nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding: 0 var(--pad);
}

.cp-nav-logo {
  line-height: 0;
  display: inline-flex;
  transition: opacity 0.2s ease;
}

.cp-nav-logo:hover {
  opacity: 0.7;
}

.cp-nav-back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--black);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.cp-nav-back:hover {
  opacity: 0.55;
}

@media (max-width: 768px) {
  .cp-nav-inner {
    padding: 0 1rem;
    height: 3.5rem;
  }
}
</style>
