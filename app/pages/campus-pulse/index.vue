<template>
  <div class="relative w-full min-h-screen font-sans overflow-x-hidden">
    <!-- Navbar -->
    <header class="campus-navbar">
      <div class="cp-nav-inner">
        <NuxtLink to="/" class="nav-logo">2code Solution</NuxtLink>
        <NuxtLink to="/" class="cp-nav-back">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5">
            <line x1="14" y1="8" x2="2" y2="8" />
            <polyline points="7,3 2,8 7,13" />
          </svg>
          Back
        </NuxtLink>
      </div>
    </header>

    <main>
      <!-- Hero / Intro Section -->
      <section class="cp-hero">
        <div class="w-container">
          <div class="cp-hero-inner section-card is-shaped">
            <!-- Tag -->
            <div class="sect-dot-flex">
              <div class="dot"></div>
              <span class="dot-label">EdTech · Mobile App</span>
            </div>

            <!-- Title -->
            <h1 class="cp-title">Campus Pulse</h1>

            <!-- Subtitle -->
            <p class="cp-subtitle">
              The anonymous platform for Pakistani university students to rate teachers,
              review courses, and make smarter academic decisions — built on trust, data, and community.
            </p>

            <!-- App Screen -->
            <div class="cp-screen-showcase">
              <img src="/uni.png" alt="Campus Pulse app" class="cp-showcase-img" />
            </div>

            <!-- Feature Pills -->
            <div class="cp-pills">
              <span class="cp-pill">Anonymous Reviews</span>
              <span class="cp-pill">Teacher Ratings</span>
              <span class="cp-pill">Course Insights</span>
              <span class="cp-pill">University Discovery</span>
              <span class="cp-pill">Flutter · Dart</span>
              <span class="cp-pill">Appwrite Backend</span>
            </div>

            <!-- About blurbs -->
            <div class="cp-about-grid">
              <div class="cp-about-card">
                <div class="cp-about-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="10" cy="10" r="8"/>
                    <path d="M10 6v4l3 3"/>
                  </svg>
                </div>
                <h3 class="cp-about-title">Real-time Insights</h3>
                <p class="cp-about-body">Students post and read reviews instantly, giving the most up-to-date picture of campus life.</p>
              </div>
              <div class="cp-about-card">
                <div class="cp-about-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/>
                    <circle cx="10" cy="7" r="4"/>
                  </svg>
                </div>
                <h3 class="cp-about-title">Fully Anonymous</h3>
                <p class="cp-about-body">Your identity is never exposed to other students, teachers, or institutions — only our moderation team can investigate abuse.</p>
              </div>
              <div class="cp-about-card">
                <div class="cp-about-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <h3 class="cp-about-title">Data-driven Decisions</h3>
                <p class="cp-about-body">Aggregated ratings and structured course data help students choose the right university, department, and teachers.</p>
              </div>
            </div>

            <!-- Legal Buttons -->
            <div class="cp-legal-buttons">
              <NuxtLink to="/campus-pulse/terms-and-conditions" class="cp-legal-btn">
                <span>Terms &amp; Conditions</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="3" y1="9" x2="15" y2="9" />
                  <polyline points="9,3 15,9 9,15" />
                </svg>
              </NuxtLink>
              <NuxtLink to="/campus-pulse/privacy-policy" class="cp-legal-btn">
                <span>Privacy Policy</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="3" y1="9" x2="15" y2="9" />
                  <polyline points="9,3 15,9 9,15" />
                </svg>
              </NuxtLink>
            </div>

            <!-- Delete Account -->
            <NuxtLink to="/campus-pulse/delete-account" class="cp-delete-btn">
              <span>Request Account Deletion</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14H6L5 6"/>
                <path d="M10 11v4M14 11v4"/>
                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <StitchFooter />
  </div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";

useHead({
  title: "Campus Pulse — EdTech App by 2code Solution",
  meta: [
    {
      name: "description",
      content:
        "Campus Pulse is an anonymous platform for Pakistani university students to rate teachers, review courses, and make smarter academic decisions.",
    },
  ],
});

onMounted(async () => {
  if (!import.meta.client) return;
  await nextTick();

  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  const title = document.querySelector(".cp-title");
  if (title) {
    gsap.from(title, { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" });
  }

  const subtitle = document.querySelector(".cp-subtitle");
  if (subtitle) {
    gsap.from(subtitle, { y: 30, opacity: 0, duration: 0.7, delay: 0.15, ease: "power2.out" });
  }

  const screens = document.querySelectorAll(".cp-screen-item");
  if (screens.length) {
    gsap.from(screens, {
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      delay: 0.3,
      ease: "power2.out",
    });
  }

  const aboutCards = document.querySelectorAll(".cp-about-card");
  if (aboutCards.length) {
    gsap.from(aboutCards, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.45,
      ease: "power2.out",
    });
  }

});
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

.cp-hero {
  padding-top: 3rem;
  padding-bottom: 4rem;
}

.cp-title {
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: var(--black);
  margin-top: 0.75rem;
  margin-bottom: 1.25rem;
}

.cp-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--grey-light);
  line-height: 1.65;
  max-width: 48rem;
  margin-bottom: 3rem;
}

/* App Screen Showcase */
.cp-screen-showcase {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}

.cp-showcase-img {
  width: auto;
  max-width: 420px;
  height: auto;
  object-fit: contain;
  display: block;
}

@media (max-width: 640px) {
  .cp-showcase-img {
    max-width: 85vw;
  }
}

/* Feature Pills */
.cp-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.cp-pill {
  display: inline-flex;
  align-items: center;
  height: 2rem;
  padding: 0 0.875rem;
  border-radius: 9999px;
  background: var(--lightgray);
  color: var(--grey-light);
  font-size: 0.8125rem;
  font-weight: 500;
}

/* About Grid */
.cp-about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .cp-about-grid {
    grid-template-columns: 1fr;
  }
}

.cp-about-card {
  padding: 1.5rem;
  background: var(--lightgray);
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cp-about-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black);
}

.cp-about-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--black);
  letter-spacing: -0.02em;
}

.cp-about-body {
  font-size: 0.875rem;
  color: var(--grey-light);
  line-height: 1.6;
}

/* Legal Buttons */
.cp-legal-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 640px) {
  .cp-legal-buttons {
    grid-template-columns: 1fr;
  }
}

.cp-legal-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.75rem;
  background: var(--black);
  color: var(--white);
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  text-decoration: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.cp-legal-btn:hover {
  opacity: 0.82;
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .cp-legal-btn {
    padding: 1rem 1.25rem;
    font-size: 0.9375rem;
  }
}

/* Delete account button */
.cp-delete-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.75rem;
  padding: 1.25rem 1.75rem;
  background: transparent;
  border: 1.5px solid rgba(0, 0, 0, 0.12);
  border-radius: 1rem;
  color: var(--grey-light);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
}

.cp-delete-btn:hover {
  border-color: #e11d48;
  color: #e11d48;
  background: #fff1f2;
}

@media (max-width: 640px) {
  .cp-delete-btn {
    padding: 1rem 1.25rem;
    font-size: 0.9375rem;
  }
}
</style>
