<template>
  <footer class="footer-section">
    <div class="footer-card">
      <div class="footer-wrapper">
        <!-- Left: Link columns -->
        <div class="grid-footer-links">
          <!-- Company -->
          <nav class="footer-col">
            <div class="section-label">Company:</div>
            <div class="grid-links">
              <div class="link-wrapper">
                <a href="#work" class="nav-link is-footer">Projects</a>
                <div class="hover-line"></div>
              </div>
              <div class="link-wrapper">
                <a href="#services" class="nav-link is-footer">Services</a>
                <div class="hover-line"></div>
              </div>
              <div class="link-wrapper">
                <a href="#testimonials" class="nav-link is-footer"
                  >Testimonials</a
                >
                <div class="hover-line"></div>
              </div>
              <div class="link-wrapper">
                <a href="#contact" class="nav-link is-footer">Contact</a>
                <div class="hover-line"></div>
              </div>
            </div>
          </nav>

          <!-- Services -->
          <nav class="footer-col">
            <div class="section-label">Services:</div>
            <div class="grid-links">
              <div class="link-wrapper">
                <a href="#contact" class="nav-link is-footer"
                  >Web Development</a
                >
                <div class="hover-line"></div>
              </div>
              <div class="link-wrapper">
                <a href="#contact" class="nav-link is-footer">Mobile Apps</a>
                <div class="hover-line"></div>
              </div>
              <div class="link-wrapper">
                <a href="#contact" class="nav-link is-footer">UI/UX Design</a>
                <div class="hover-line"></div>
              </div>
              <div class="link-wrapper">
                <a href="#contact" class="nav-link is-footer"
                  >Backend Systems</a
                >
                <div class="hover-line"></div>
              </div>
              <div class="link-wrapper">
                <a href="#contact" class="nav-link is-footer"
                  >Cloud Solutions</a
                >
                <div class="hover-line"></div>
              </div>
              <div class="link-wrapper">
                <a href="#contact" class="nav-link is-footer"
                  >API Development</a
                >
                <div class="hover-line"></div>
              </div>
            </div>
          </nav>

          <!-- Technologies -->
          <nav class="footer-col">
            <div class="section-label">Technologies:</div>
            <div class="grid-links">
              <div class="link-wrapper">
                <a href="#" class="nav-link is-footer">Vue / Nuxt</a>
                <div class="hover-line"></div>
              </div>
              <div class="link-wrapper">
                <a href="#" class="nav-link is-footer">React / Next</a>
                <div class="hover-line"></div>
              </div>
              <div class="link-wrapper">
                <a href="#" class="nav-link is-footer">Node.js</a>
                <div class="hover-line"></div>
              </div>
              <div class="link-wrapper">
                <a href="#" class="nav-link is-footer">Flutter</a>
                <div class="hover-line"></div>
              </div>
              <div class="link-wrapper">
                <a href="#" class="nav-link is-footer">AWS / Azure</a>
                <div class="hover-line"></div>
              </div>
              <div class="link-wrapper">
                <a href="#" class="nav-link is-footer">PostgreSQL</a>
                <div class="hover-line"></div>
              </div>
            </div>
          </nav>
        </div>

        <!-- Right: Newsletter + Social -->
        <div class="footer-right">
          <!-- Newsletter -->
          <div class="footer-subscribe">
            <div class="section-label-500">
              Subscribe to our news and updates
            </div>
            <form @submit.prevent class="footer-form">
              <input
                type="email"
                placeholder="Your email here"
                class="footer-email-input"
              />
              <button type="submit" class="footer-submit-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
            <p class="footer-privacy-note">
              By signing up, you agree to our
              <a href="#" class="footer-privacy-link">Privacy Policy.</a> We
              respect your data. Unsubscribe anytime.
            </p>
          </div>

          <!-- Social -->
          <div class="footer-social-block">
            <div class="section-label-500">Follow us on:</div>
            <div class="footer-social-icons">
              <a href="https://www.linkedin.com/company/2-code-solution/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
              <a href="https://www.instagram.com/2_code_solution/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
              <a href="mailto:info2codesolution@gmail.com" aria-label="Email us" class="social-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
            <div style="margin-top: 0.75rem;">
              <a href="mailto:info2codesolution@gmail.com" class="footer-email-cta">info2codesolution@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <span class="nav-logo">2code Solutions</span>
        <div class="footer-bottom-right">
          <span class="rights-text"
            >© 2026 2code Solutions. All rights reserved</span
          >
          <div class="sect-dot-flex" style="margin-bottom: 0">
            <div class="dot"></div>
            <div class="link-wrapper">
              <a href="#" class="nav-link is-footer">Privacy Policy</a>
              <div class="hover-line"></div>
            </div>
          </div>
        </div>
        <button
          @click="scrollToTop"
          class="scroll-up-link"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8.3536 2.6464C8.1583 2.4512 7.8417 2.4512 7.6464 2.6464L4.4645 5.8284C4.2692 6.0237 4.2692 6.3403 4.4645 6.5355C4.6597 6.7308 4.9763 6.7308 5.1716 6.5355L8 3.7071L10.8284 6.5355C11.0237 6.7308 11.3403 6.7308 11.5355 6.5355C11.7308 6.3403 11.7308 6.0237 11.5355 5.8284L8.3536 2.6464ZM8.5 14L8.5 3L7.5 3L7.5 14L8.5 14Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Extra bottom spacing -->
    <div class="h-4"></div>
  </footer>
</template>

<script setup>
import { onMounted, nextTick } from "vue";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
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

  const footer = document.querySelector(".footer-section");
  if (!footer) return;

  // ── Footer link columns stagger ──
  const footerCols = footer.querySelectorAll(".footer-col");
  footerCols.forEach((col) => {
    const label = col.querySelector(".section-label");
    const links = col.querySelectorAll(".link-wrapper");

    if (label) {
      // Line-by-line reveal for column headers (Company, Services, Technologies)
      const words = splitIntoWords(label);
      gsap.to(words, {
        y: 0,
        duration: 0.6,
        stagger: 0.04,
        ease: "power3.out",
        scrollTrigger: {
          trigger: label,
          start: "top 92%",
          toggleActions: "play none none reverse",
          once: true,
        },
      });
    }

    if (links.length) {
      gsap.from(links, {
        y: 15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.04,
        ease: "power2.out",
        scrollTrigger: {
          trigger: links[0],
          start: "top 95%",
          toggleActions: "play none none reverse",
          once: true,
        },
      });
    }
  });

  // ── Newsletter section fade-up ──
  const subscribeTitle = footer.querySelector(
    ".footer-subscribe .section-label-500",
  );
  const subscribeForm = footer.querySelector(".footer-form");
  const privacyNote = footer.querySelector(".footer-privacy-note");

  if (subscribeTitle) {
    // Line-by-line reveal for newsletter title
    const words = splitIntoWords(subscribeTitle);
    gsap.to(words, {
      y: 0,
      duration: 0.6,
      stagger: 0.04,
      ease: "power3.out",
      scrollTrigger: {
        trigger: subscribeTitle,
        start: "top 92%",
        toggleActions: "play none none reverse",
        once: true,
      },
    });
  }

  if (subscribeForm) {
    gsap.from(subscribeForm, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      delay: 0.2, // slightly after title
      ease: "power2.out",
      scrollTrigger: {
        trigger: subscribeForm,
        start: "top 95%",
        toggleActions: "play none none reverse",
        once: true,
      },
    });
  }

  if (privacyNote) {
    gsap.from(privacyNote, {
      y: 10,
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: privacyNote,
        start: "top 98%",
        toggleActions: "play none none reverse",
        once: true,
      },
    });
  }

  // ── Social icons stagger ──
  const socialLabel = footer.querySelector(
    ".footer-social-block .section-label-500",
  );
  const socialIcons = footer.querySelectorAll(".social-icon");

  if (socialLabel) {
    // Line-by-line reveal for social label "Follow us on:"
    const words = splitIntoWords(socialLabel);
    gsap.to(words, {
      y: 0,
      duration: 0.6,
      stagger: 0.04,
      ease: "power3.out",
      scrollTrigger: {
        trigger: socialLabel,
        start: "top 92%",
        toggleActions: "play none none reverse",
        once: true,
      },
    });
  }

  if (socialIcons.length) {
    gsap.from(socialIcons, {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      stagger: 0.08,
      delay: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: socialIcons[0],
        start: "top 95%",
        toggleActions: "play none none reverse",
        once: true,
      },
    });
  }

  // ── Bottom bar fade up ──
  const bottomBar = footer.querySelector(".footer-bottom");
  if (bottomBar) {
    gsap.from(bottomBar, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: bottomBar,
        start: "top 95%",
        toggleActions: "play none none reverse",
        once: true,
      },
    });
  }
});
</script>
