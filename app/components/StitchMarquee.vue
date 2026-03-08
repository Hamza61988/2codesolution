<template>
  <div class="overflow-hidden py-8 md:py-10">
    <div class="marquee-track">
      <span v-for="i in 3" :key="i" class="flex items-center mr-0">
        <span
          v-for="(item, idx) in marqueeItems"
          :key="`${i}-${idx}`"
          class="flex items-center whitespace-nowrap"
          style="gap: 3rem"
        >
          <span class="text-grey-light text-sm font-medium">/</span>
          <span
            class="text-black text-xl md:text-2xl font-medium uppercase tracking-wide"
          >
            {{ item }}
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script setup>
const marqueeItems = [
  "RESULTS DRIVEN SOLUTIONS",
  "BUSINESS VALUE",
  "PURPOSEFUL DESIGNS",
  "STRATEGIC EXPERIENCES",
  "FULL-STACK PRODUCTS",
  "SCALABLE APPS",
];
</script>
