<template>
  <section id="contact" class="section-gap">
    <div class="section-card">
      <!-- Dot label -->
      <div class="sect-dot-flex">
        <div class="dot"></div>
        <span class="dot-label">We're explorers</span>
      </div>
      <div class="text-grey-light text-sm mb-8" style="margin-top: -0.75rem;">
        or email us at
        <a href="mailto:info2codesolution@gmail.com" class="font-medium hover:opacity-70 transition-opacity" style="color: var(--cyan); text-decoration: underline; text-underline-offset: 3px;">info2codesolution@gmail.com</a>
      </div>

      <!-- Section heading -->
      <div class="mb-10">
        <h2
          class="text-black text-3xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.15] tracking-tight"
        >
          Ready to take the<br class="hidden md:block" />
          next step with us?
        </h2>
      </div>
      <div class="text-grey-light text-sm font-medium mb-6">Contact us</div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <!-- Left: heading + trust -->
        <div class="flex flex-col justify-between">
          <h3
            class="text-black text-2xl md:text-4xl font-medium tracking-tight mb-8"
          >
            Let's make an impact
          </h3>
          <div class="flex flex-col gap-3">
            <div class="text-grey-light text-sm">Our Testimonials:</div>
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded bg-[#f0f2f3] flex items-center justify-center"
              >
                <span class="text-xs font-bold text-grey-light">5★</span>
              </div>
              <span class="text-grey-light text-sm"
                >Trusted by clients worldwide</span
              >
            </div>
          </div>
        </div>

        <!-- Right: form -->
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex flex-col gap-2">
              <label class="text-grey-light text-sm">Name</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Your name"
                class="form-input bg-transparent border-b border-black/10 px-0 py-3 text-black text-sm placeholder-[#b0b5b8] outline-none"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-grey-light text-sm">Company</label>
              <input
                v-model="form.company"
                type="text"
                placeholder="Company name"
                class="form-input bg-transparent border-b border-black/10 px-0 py-3 text-black text-sm placeholder-[#b0b5b8] outline-none"
              />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-grey-light text-sm">Your Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="your@email.com"
              class="form-input bg-transparent border-b border-black/10 px-0 py-3 text-black text-sm placeholder-[#b0b5b8] outline-none"
            />
          </div>

          <!-- Interest tags -->
          <div class="flex flex-col gap-3 mt-2">
            <label class="text-grey-light text-sm">I'm interested in...</label>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="interest in interests"
                :key="interest"
                type="button"
                @click="toggleInterest(interest)"
                :class="[
                  'pill-btn',
                  selectedInterests.includes(interest) ? 'is-active' : '',
                ]"
              >
                {{ interest }}
              </button>
            </div>
          </div>

          <!-- Message -->
          <div class="flex flex-col gap-2">
            <label class="text-grey-light text-sm"
              >Tell us about your project.</label
            >
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Write something concise..."
              class="form-input bg-transparent border-b border-black/10 px-0 py-3 text-black text-sm placeholder-[#b0b5b8] outline-none resize-none"
            ></textarea>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="w-full md:w-auto md:self-start px-8 py-3.5 rounded-full bg-cyan text-white text-sm font-medium hover:opacity-80 transition-opacity duration-300 mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from "vue";

const form = reactive({
  name: "",
  company: "",
  email: "",
  message: "",
});

const interests = [
  "Web Development",
  "Mobile Apps",
  "UX/UI",
  "Backend Systems",
  "Landing Page",
  "Consulting",
];

const selectedInterests = ref([]);

function toggleInterest(interest) {
  const idx = selectedInterests.value.indexOf(interest);
  if (idx > -1) {
    selectedInterests.value.splice(idx, 1);
  } else {
    selectedInterests.value.push(interest);
  }
}

function handleSubmit() {
  console.log("Form submitted:", {
    ...form,
    interests: selectedInterests.value,
  });
}

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

  const section = document.querySelector("#contact");
  if (!section) return;

  // ── Dot label fade-up ──
  const dotFlex = section.querySelector(".sect-dot-flex");
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
  const heading = section.querySelector("h2");
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

  // ── "Contact us" label fade ──
  const contactLabel = section.querySelector(
    ".text-grey-light.text-sm.font-medium.mb-6",
  );
  if (contactLabel) {
    gsap.from(contactLabel, {
      y: 15,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: contactLabel,
        start: "top 92%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }

  // ── Left column (sub-heading + trust) ──
  const leftCol = section.querySelector(
    ".grid > .flex.flex-col.justify-between",
  );
  if (leftCol) {
    gsap.from(leftCol, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: leftCol,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }

  // ── Form fields stagger (excludes pill container) ──
  const formFields = section.querySelectorAll(
    "form > div:not(:has(.pill-btn))",
  );
  if (formFields.length) {
    gsap.from(formFields, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.07,
      ease: "power2.out",
      scrollTrigger: {
        trigger: formFields[0],
        start: "top 90%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }

  // ── Interest pills stagger ──
  const pillContainer = section.querySelector(".flex.flex-wrap.gap-2");
  const pills = section.querySelectorAll(".pill-btn");
  if (pillContainer && pills.length) {
    // Fade the label
    const pillLabel = pillContainer.previousElementSibling;
    if (pillLabel) {
      gsap.from(pillLabel, {
        y: 15,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: pillLabel,
          start: "top 92%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }
    // Stagger pills
    gsap.from(pills, {
      y: 15,
      opacity: 0,
      duration: 0.35,
      stagger: 0.05,
      ease: "power2.out",
      clearProps: "all",
      scrollTrigger: {
        trigger: pillContainer,
        start: "top 92%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }
});
</script>
