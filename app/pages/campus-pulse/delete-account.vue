<template>
  <div class="relative w-full min-h-screen font-sans overflow-x-hidden">
    <!-- Navbar -->
    <header class="campus-navbar">
      <div class="cp-nav-inner">
        <NuxtLink to="/" class="nav-logo">2code Solutions</NuxtLink>
        <NuxtLink to="/campus-pulse" class="cp-nav-back">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5">
            <line x1="14" y1="8" x2="2" y2="8" />
            <polyline points="7,3 2,8 7,13" />
          </svg>
          Campus Pulse
        </NuxtLink>
      </div>
    </header>

    <main>
      <section class="da-section">
        <div class="w-container">
          <div class="section-card is-shaped">

            <!-- Warning badge -->
            <div class="da-warning-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Permanent Action
            </div>

            <!-- Heading -->
            <h1 class="da-title">Delete Account</h1>
            <p class="da-subtitle">
              Submitting this form sends a deletion request to our team. Your account and all associated data will be permanently removed within <strong>30 days</strong>. This action cannot be undone.
            </p>

            <!-- What gets deleted -->
            <div class="da-info-grid">
              <div class="da-info-card da-info-deleted">
                <div class="da-info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6l-1 14H6L5 6"/>
                    <path d="M10 11v4M14 11v4"/>
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                  </svg>
                </div>
                <div>
                  <p class="da-info-label">Permanently deleted</p>
                  <ul class="da-info-list">
                    <li>Your profile &amp; account credentials</li>
                    <li>University &amp; department information</li>
                    <li>Profile photo</li>
                    <li>All personal data tied to your account</li>
                  </ul>
                </div>
              </div>
              <div class="da-info-card da-info-retained">
                <div class="da-info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <p class="da-info-label">May be retained (anonymised)</p>
                  <ul class="da-info-list">
                    <li>Reviews &amp; ratings (no name attached)</li>
                    <li>Aggregated course/teacher statistics</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Form -->
            <form class="da-form" @submit.prevent="handleSubmit">
              <div class="da-form-row">
                <label class="da-label" for="email">Registered email address <span class="da-required">*</span></label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="da-input"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div class="da-form-row">
                <label class="da-label" for="reason">Reason for deletion <span class="da-required">*</span></label>
                <div class="da-select-wrap">
                  <select id="reason" v-model="form.reason" class="da-select" required>
                    <option value="" disabled>Select a reason…</option>
                    <option value="no_longer_student">I'm no longer a student</option>
                    <option value="privacy_concerns">Privacy concerns</option>
                    <option value="not_useful">App is not useful to me</option>
                    <option value="duplicate_account">I have a duplicate account</option>
                    <option value="bad_experience">Bad experience with the app</option>
                    <option value="other">Other</option>
                  </select>
                  <svg class="da-select-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
                    <polyline points="2,5 7,10 12,5"/>
                  </svg>
                </div>
              </div>

              <div class="da-form-row">
                <label class="da-label" for="details">Additional details <span class="da-optional">(optional)</span></label>
                <textarea
                  id="details"
                  v-model="form.details"
                  class="da-textarea"
                  placeholder="Tell us more about why you'd like to delete your account…"
                  rows="4"
                ></textarea>
              </div>

              <div class="da-form-row">
                <label class="da-label" for="confirm">Type <strong>DELETE</strong> to confirm <span class="da-required">*</span></label>
                <input
                  id="confirm"
                  v-model="form.confirm"
                  type="text"
                  class="da-input"
                  :class="{ 'da-input-error': form.confirm && form.confirm !== 'DELETE' }"
                  placeholder="DELETE"
                  required
                />
                <p v-if="form.confirm && form.confirm !== 'DELETE'" class="da-field-error">
                  Please type DELETE exactly as shown
                </p>
              </div>

              <div class="da-form-footer">
                <NuxtLink to="/campus-pulse" class="da-cancel-btn">Cancel</NuxtLink>
                <button
                  type="submit"
                  class="da-submit-btn"
                  :disabled="form.confirm !== 'DELETE'"
                >
                  Submit Deletion Request
                </button>
              </div>
            </form>

          </div>
        </div>
      </section>
    </main>

    <StitchFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

useHead({
  title: "Delete Account — Campus Pulse",
  meta: [
    {
      name: "description",
      content: "Request deletion of your Campus Pulse account and associated data.",
    },
  ],
});

const form = ref({
  email: "",
  reason: "",
  details: "",
  confirm: "",
});

function handleSubmit() {
  // Submission handled server-side in the future
}

onMounted(async () => {
  if (!import.meta.client) return;
  await nextTick();

  const { gsap } = await import("gsap");

  const title = document.querySelector(".da-title");
  if (title) {
    gsap.from(title, { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" });
  }

  const subtitle = document.querySelector(".da-subtitle");
  if (subtitle) {
    gsap.from(subtitle, { y: 20, opacity: 0, duration: 0.6, delay: 0.1, ease: "power2.out" });
  }

  const infoCards = document.querySelectorAll(".da-info-card");
  if (infoCards.length) {
    gsap.from(infoCards, { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, delay: 0.2, ease: "power2.out" });
  }

  const formEl = document.querySelector(".da-form");
  if (formEl) {
    gsap.from(formEl, { y: 20, opacity: 0, duration: 0.5, delay: 0.35, ease: "power2.out" });
  }
});
</script>

<style scoped>
/* Navbar */
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

/* Section */
.da-section {
  padding-top: 3rem;
  padding-bottom: 4rem;
}

/* Warning badge */
.da-warning-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.875rem;
  background: #fff1f2;
  color: #e11d48;
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

/* Title */
.da-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  color: var(--black);
  margin-bottom: 1rem;
}

.da-subtitle {
  font-size: 1rem;
  color: var(--grey-light);
  line-height: 1.7;
  max-width: 42rem;
  margin-bottom: 2.5rem;
}

.da-subtitle strong {
  color: var(--black);
  font-weight: 600;
}

/* Info cards */
.da-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

@media (max-width: 640px) {
  .da-info-grid {
    grid-template-columns: 1fr;
  }
}

.da-info-card {
  display: flex;
  gap: 0.875rem;
  padding: 1.25rem;
  border-radius: 1rem;
}

.da-info-deleted {
  background: #fff1f2;
}

.da-info-retained {
  background: var(--lightgray);
}

.da-info-icon {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.da-info-deleted .da-info-icon {
  background: #ffe4e6;
  color: #e11d48;
}

.da-info-retained .da-info-icon {
  background: var(--white);
  color: var(--black);
}

.da-info-label {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.da-info-deleted .da-info-label {
  color: #e11d48;
}

.da-info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.da-info-list li {
  font-size: 0.8125rem;
  color: var(--grey-light);
  line-height: 1.5;
  padding-left: 1rem;
  position: relative;
}

.da-info-list li::before {
  content: "–";
  position: absolute;
  left: 0;
  color: var(--grey-light);
}

/* Form */
.da-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 38rem;
}

.da-form-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.da-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--black);
  letter-spacing: -0.01em;
}

.da-required {
  color: #e11d48;
}

.da-optional {
  color: var(--grey-light);
  font-weight: 400;
}

.da-input,
.da-select,
.da-textarea {
  width: 100%;
  background: var(--lightgray);
  border: 1.5px solid transparent;
  border-radius: 0.75rem;
  padding: 0.875rem 1rem;
  font-size: 0.9375rem;
  font-family: inherit;
  color: var(--black);
  outline: none;
  transition: border-color 0.2s ease, background 0.2s ease;
  appearance: none;
  -webkit-appearance: none;
}

.da-input::placeholder,
.da-textarea::placeholder {
  color: #b0b5b8;
}

.da-input:focus,
.da-select:focus,
.da-textarea:focus {
  border-color: var(--black);
  background: var(--white);
}

.da-input-error {
  border-color: #e11d48 !important;
}

.da-field-error {
  font-size: 0.8125rem;
  color: #e11d48;
  margin-top: 0.25rem;
}

.da-textarea {
  resize: vertical;
  min-height: 6rem;
}

/* Select wrapper */
.da-select-wrap {
  position: relative;
}

.da-select {
  cursor: pointer;
  padding-right: 2.5rem;
}

.da-select-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--grey-light);
}

/* Form footer */
.da-form-footer {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 0.5rem;
}

@media (max-width: 480px) {
  .da-form-footer {
    flex-direction: column-reverse;
    align-items: stretch;
  }
}

.da-cancel-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.5rem;
  border-radius: 0.75rem;
  border: 1.5px solid rgba(0, 0, 0, 0.12);
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--grey-light);
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease;
  white-space: nowrap;
}

.da-cancel-btn:hover {
  border-color: var(--black);
  color: var(--black);
}

.da-submit-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.5rem;
  border-radius: 0.75rem;
  border: none;
  background: #e11d48;
  color: var(--white);
  font-size: 0.9375rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.da-submit-btn:hover:not(:disabled) {
  opacity: 0.85;
}

.da-submit-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
</style>

