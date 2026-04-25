<template>
  <div class="relative w-full min-h-screen font-sans overflow-x-hidden">
    <!-- Navbar -->
    <header class="campus-navbar">
      <div class="cp-nav-inner">
        <NuxtLink to="/" class="nav-logo" style="line-height:0">
          <svg width="72" height="43" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" aria-label="2code Solutions">
            <rect x="40" y="20" width="320" height="192" rx="32" ry="32" fill="none" stroke="#0a0a0a" stroke-width="5"/>
            <text x="200" y="148" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="120" letter-spacing="-6" fill="#0a0a0a">
              <tspan fill="#00d4d4">2</tspan>CS
            </text>
            <circle cx="348" cy="28" r="14" fill="#00d4d4"/>
          </svg>
        </NuxtLink>
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
              <span class="dot-label">EdTech Â· Mobile App</span>
            </div>

            <!-- Title -->
            <h1 class="cp-title">Campus Pulse</h1>

            <!-- Subtitle -->
            <p class="cp-subtitle">
              The anonymous platform for Pakistani university students to rate teachers,
              review courses, and make smarter academic decisions â€” built on trust, data, and community.
            </p>

            <!-- App Screens: Dual Mockup with Phone Frames -->
            <div class="cp-screen-showcase">
              <div class="cp-mockup-duo">
                <!-- Phone 1 -->
                <div class="cp-phone-frame">
                  <div class="cp-phone-btn cp-phone-vol-up"></div>
                  <div class="cp-phone-btn cp-phone-vol-down"></div>
                  <div class="cp-phone-btn cp-phone-power"></div>
                  <div class="cp-phone-screen">
                    <div class="cp-phone-notch">
                      <div class="cp-phone-speaker"></div>
                      <div class="cp-phone-camera"></div>
                    </div>
                    <img src="/mockup1.jpeg" alt="Campus Pulse app screen - teacher ratings" class="cp-screen-item" loading="eager" fetchpriority="high" />
                    <div class="cp-phone-home"></div>
                  </div>
                </div>
                <!-- Phone 2 -->
                <div class="cp-phone-frame">
                  <div class="cp-phone-btn cp-phone-vol-up"></div>
                  <div class="cp-phone-btn cp-phone-vol-down"></div>
                  <div class="cp-phone-btn cp-phone-power"></div>
                  <div class="cp-phone-screen">
                    <div class="cp-phone-notch">
                      <div class="cp-phone-speaker"></div>
                      <div class="cp-phone-camera"></div>
                    </div>
                    <img src="/mockup2.jpeg" alt="Campus Pulse app screen - university feed" class="cp-screen-item" loading="eager" fetchpriority="high" />
                    <div class="cp-phone-home"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Feature Pills -->
            <div class="cp-pills">
              <span class="cp-pill">Anonymous Reviews</span>
              <span class="cp-pill">Teacher Ratings</span>
              <span class="cp-pill">Course Insights</span>
              <span class="cp-pill">University Discovery</span>
              <span class="cp-pill">Flutter Â· Dart</span>
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
                <p class="cp-about-body">Your identity is never exposed to other students, teachers, or institutions â€” only our moderation team can investigate abuse.</p>
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
  title: "Campus Pulse â€” Anonymous University Reviews App | 2code Solutions",
  meta: [
    {
      name: "description",
      content:
        "Campus Pulse is a free anonymous platform for Pakistani university students to rate teachers, review courses, and discover universities â€” built by 2code Solutions.",
    },
    { name: "keywords", content: "Campus Pulse, Pakistani university app, rate teachers, anonymous reviews, university ratings, edtech Pakistan, Flutter app, 2code Solutions" },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Campus Pulse â€” Anonymous University Reviews App" },
    { property: "og:description", content: "Pakistani students rate teachers, review courses, and make smarter academic decisions anonymously. Built by 2code Solutions." },
    { property: "og:image", content: "/mockup1.jpeg" },
    { property: "og:url", content: "https://2codesolution.com/campus-pulse" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Campus Pulse â€” University Reviews App" },
    { name: "twitter:description", content: "Rate teachers & review courses anonymously. Built for Pakistani students by 2code Solutions." },
    { name: "twitter:image", content: "/mockup1.jpeg" },
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
  padding: 2rem 0;
}

.cp-mockup-duo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

/* â”€â”€ Phone Frame â”€â”€ */
.cp-phone-frame {
  position: relative;
  display: inline-block;
  background: #111;
  border-radius: 3rem;
  padding: 10px;
  box-shadow:
    0 0 0 2px #333,
    0 0 0 4px #111,
    0 32px 64px rgba(0, 0, 0, 0.35),
    0 8px 24px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

/* Screen area â€” wraps image naturally */
.cp-phone-screen {
  position: relative;
  border-radius: calc(3rem - 10px);
  overflow: hidden;
  background: #000;
  line-height: 0; /* remove inline gap under img */
}

/* Image fills the screen â€” height from natural aspect ratio */
.cp-screen-item {
  width: 220px;
  height: auto;
  display: block;
}

/* Notch overlay at top of screen */
.cp-phone-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 110px;
  height: 28px;
  background: #111;
  border-radius: 0 0 1.25rem 1.25rem;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.cp-phone-speaker {
  width: 40px;
  height: 5px;
  background: #2a2a2a;
  border-radius: 3px;
}

.cp-phone-camera {
  width: 8px;
  height: 8px;
  background: #1e2d40;
  border-radius: 50%;
  border: 1.5px solid #2a3a50;
}

/* Home indicator overlay at bottom of screen */
.cp-phone-home {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 2px;
  z-index: 10;
}

/* Side buttons on the frame */
.cp-phone-btn {
  position: absolute;
  background: #222;
  border-radius: 2px;
}

.cp-phone-vol-up {
  left: -4px;
  top: 80px;
  width: 4px;
  height: 30px;
}

.cp-phone-vol-down {
  left: -4px;
  top: 120px;
  width: 4px;
  height: 30px;
}

.cp-phone-power {
  right: -4px;
  top: 100px;
  width: 4px;
  height: 44px;
}

@media (max-width: 640px) {
  .cp-screen-item {
    width: 150px;
  }
  .cp-phone-frame {
    border-radius: 2.25rem;
    padding: 8px;
  }
  .cp-phone-screen {
    border-radius: calc(2.25rem - 8px);
  }
  .cp-mockup-duo {
    gap: 1.25rem;
  }
  .cp-phone-notch {
    width: 80px;
    height: 20px;
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

