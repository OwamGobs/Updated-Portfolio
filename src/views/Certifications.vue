<script setup>
import { nextTick, ref } from "vue";
import cybersecurityCertificate from "../assets/introduction-to-cybersecurity-certificate.png";
import dataScienceCertificate from "../assets/introduction-to-data-science-certificate.png";

const certificateDialog = ref(null);
const activeCertificate = ref(null);

const credentialGroups = [
  {
    title: "Certificates",
    items: [
      {
        title: "YouthCode Project Certificate of Achievement",
        type: "Certificate",
        issuer: "Life Choices Academy",
        date: "2 October 2026",
        category: "Software Development",
        description:
          "Awarded for completing the YouthCode software development project, covering ICT, front-end development, database and back-end development, e-commerce, and personal and professional development.",
        credentialUrl: "",
        documentUrl: "/Scanned%20Document.pdf",
        showCertificateButton: true,
        compactPreview: true,
        previewDocument: true,
      },
      {
        title: "Introduction to Cybersecurity",
        type: "Certificate",
        issuer: "Cisco Networking Academy",
        date: "31 August 2026",
        category: "Cybersecurity",
        description:
          "Completed the Introduction to Cybersecurity course, covering online safety, common cyber threats and vulnerabilities, protection strategies, and cybersecurity career pathways.",
        credentialUrl: "",
        image: cybersecurityCertificate,
        documentUrl: "/certificates/introduction-to-cybersecurity-certificate.png",
      },
      {
        title: "Introduction to Data Science",
        type: "Certificate",
        issuer: "Life Choices Academy / Cisco Networking Academy",
        date: "31 August 2026",
        category: "Data Science",
        description:
          "Completed the Introduction to Data Science course through the Cisco Networking Academy program at Life Choices Academy.",
        credentialUrl: "",
        image: dataScienceCertificate,
        documentUrl: "/certificates/introduction-to-data-science-certificate.png",
      },
    ],
  },
  {
    title: "Badges",
    items: [
      {
        title: "Introduction to Cybersecurity",
        type: "Badge",
        issuer: "Cisco",
        date: "31 August 2026",
        category: "Cybersecurity",
        description:
          "Earned for completing Cisco's Introduction to Cybersecurity course, covering cyber threats, online safety, and cybersecurity careers.",
        credentialUrl:
          "https://www.credly.com/badges/8b2c3069-aff3-4ce7-9fc5-81364e75a693/public_url",
        image:
          "https://images.credly.com/size/680x680/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
      },
    ],
  },
];

const credentialCount = credentialGroups.reduce((total, group) => total + group.items.length, 0);

const isPdfCertificate = (url) => /\.pdf(?:[?#]|$)/i.test(url);

async function openCertificate(cert) {
  activeCertificate.value = cert;
  await nextTick();
  certificateDialog.value?.showModal();
}

function closeCertificate() {
  activeCertificate.value = null;
}
</script>

<template>
  <main class="certifications-page">
    <!-- Introduction -->
    <section class="cert-hero">
      <p class="eyebrow">MY LEARNING JOURNEY</p>

      <h1>
        Learning today.
        <span>Building tomorrow.</span>
      </h1>

      <p class="hero-description">
        Every certification represents a step forward in my development journey. Explore the
        courses, knowledge, and skills I'm building along the way.
      </p>

      <div class="hero-decoration" aria-hidden="true">✦</div>
    </section>

    <!-- Certifications -->
    <section class="cert-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">COURSES & ACHIEVEMENTS</p>
          <h2>Certificates & badges<span>.</span></h2>
        </div>

        <span class="count"> {{ credentialCount }} credentials </span>
      </div>

      <section
        v-for="(group, groupIndex) in credentialGroups"
        :key="group.title"
        class="credential-group"
      >
        <h3 class="credential-group-title">{{ group.title }}</h3>

        <div class="cert-grid">
          <article
            v-for="(cert, index) in group.items"
            :key="cert.title"
            class="cert-card"
            :style="{ '--delay': `${(groupIndex * 2 + index) * 100}ms` }"
          >
            <div
              class="cert-visual"
              :class="{
                'has-certificate-image': cert.image,
                'is-compact-preview': cert.compactPreview,
                'has-document-preview': cert.previewDocument,
              }"
            >
              <iframe
                v-if="cert.previewDocument && isPdfCertificate(cert.documentUrl)"
                :src="`${cert.documentUrl}#page=1&zoom=page-fit&toolbar=0&navpanes=0`"
                :title="cert.title + ' preview'"
                loading="lazy"
                tabindex="-1"
                aria-hidden="true"
              ></iframe>

              <img
                v-else-if="cert.image"
                :src="cert.image"
                :alt="cert.title + ' ' + cert.type.toLowerCase()"
                loading="lazy"
              />

              <div v-else-if="!cert.previewDocument" class="certificate-placeholder">
                <span class="certificate-icon">✦</span>
                <span>{{ cert.type.toUpperCase() }}</span>
                <small>{{ cert.category }}</small>
              </div>

              <span class="verified-label">{{ cert.type }}</span>
            </div>

            <div class="cert-content">
              <p class="cert-category">{{ cert.category }}</p>
              <h3>{{ cert.title }}</h3>
              <p class="issuer">{{ cert.issuer }}</p>
              <p class="cert-description">{{ cert.description }}</p>

              <div class="cert-footer">
                <span class="cert-date">{{ cert.date }}</span>

                <a
                  v-if="cert.credentialUrl"
                  :href="cert.credentialUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="credential-link"
                >
                  {{ cert.type === "Certificate" ? "View Certificate ↗" : "View credential ↗" }}
                </a>
              </div>

              <div v-if="cert.showCertificateButton" class="cert-actions">
                <button
                  class="credential-link certificate-button"
                  type="button"
                  @click="openCertificate(cert)"
                >
                  View Certificate
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </section>

    <dialog
      ref="certificateDialog"
      class="certificate-dialog"
      aria-labelledby="certificate-dialog-title"
      @click.self="certificateDialog?.close()"
      @close="closeCertificate"
    >
      <template v-if="activeCertificate">
        <div class="certificate-dialog-header">
          <h2 id="certificate-dialog-title">{{ activeCertificate.title }}</h2>
          <button
            class="certificate-dialog-close"
            type="button"
            aria-label="Close certificate preview"
            autofocus
            @click="certificateDialog?.close()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="certificate-dialog-preview">
          <iframe
            v-if="isPdfCertificate(activeCertificate.documentUrl)"
            :src="activeCertificate.documentUrl"
            :title="activeCertificate.title"
          ></iframe>
          <img
            v-else-if="/\.(?:jpe?g|png)(?:[?#]|$)/i.test(activeCertificate.documentUrl)"
            :src="activeCertificate.documentUrl"
            :alt="activeCertificate.title"
          />
          <p v-else>
            Preview unavailable for this file type. Use the link below to open the document.
          </p>
        </div>

        <a
          class="certificate-open-link"
          :href="activeCertificate.documentUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open certificate in a new tab ↗
        </a>
      </template>
    </dialog>
  </main>
</template>

<style scoped>
.certifications-page {
  --orange: #f47b0b;
  --burgundy: #920039;
  --ink: #f5f2f3;
  --muted: #e6dfe2;

  min-height: 100vh;
  color: var(--ink);
  background: radial-gradient(ellipse at 38% 48%, #343434 0%, #5d5d5d 54%, #858585 100%);
  font-family: Inter, Arial, sans-serif;
}

.cert-hero {
  position: relative;
  overflow: hidden;
  padding: 90px 8% 20px;
  animation: rise-in 0.7s ease-out both;
}

.eyebrow {
  color: #ffad66;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 3px;
}

.cert-hero h1 {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 22px 0;
  font-size: clamp(2.8rem, 6.5vw, 5.5rem);
  line-height: 1.05;
  letter-spacing: -0.075em;
}

.cert-hero h1 span,
.section-heading h2 span,
.learning-section h2 span {
  display: block;
  color: var(--orange);
  font-style: italic;
}

.hero-description {
  position: relative;
  z-index: 1;
  max-width: 650px;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.9;
}

.hero-decoration {
  position: absolute;
  right: 10%;
  top: 20%;
  color: rgba(146, 0, 57, 0.09);
  font-size: clamp(100px, 18vw, 230px);
  animation: gentle-turn 18s linear infinite;
}

.cert-section {
  --ink: #f5f2f3;
  --muted: #e6dfe2;

  padding: 20px 8% 100px;
  background: transparent;
}

.cert-section .eyebrow {
  color: #ffad66;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
}

.section-heading h2,
.learning-section h2 {
  margin: 12px 0;
  font-size: clamp(2rem, 4vw, 3.3rem);
  letter-spacing: -0.06em;
}

.count {
  color: var(--muted);
  font-size: 0.85rem;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px;
}

.credential-group + .credential-group {
  margin-top: 48px;
}

.credential-group-title {
  margin: 0 0 20px;
  font-size: 1.35rem;
}

.cert-card {
  --ink: #171e21;
  --muted: #706970;
  overflow: hidden;
  border: 1px solid rgba(101, 27, 50, 0.1);
  border-radius: 13px;
  background: white;
  color: var(--ink);
  animation: rise-in 0.6s ease-out both;
  animation-delay: var(--delay);
  transition: transform 0.25s ease;
}

.cert-card:hover {
  transform: translateY(-5px);
}

.cert-visual {
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #eee3e8;
}

.cert-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.cert-visual.has-certificate-image {
  aspect-ratio: 4 / 5;
}

.cert-visual.is-compact-preview {
  aspect-ratio: 16 / 9;
}

.cert-visual.is-compact-preview img {
  object-fit: contain;
}

.cert-visual.has-document-preview {
  aspect-ratio: 16 / 9;
  background: #f2e7eb;
}

.cert-visual.has-document-preview iframe {
  width: 100%;
  height: 100%;
  border: 0;
  pointer-events: none;
}

.cert-visual.has-certificate-image img {
  object-fit: contain;
}

.cert-card:hover .cert-visual img {
  transform: scale(1.035);
}

.certificate-placeholder {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--burgundy);
  background:
    radial-gradient(circle at 80% 20%, #f8c18c 0, transparent 30%),
    linear-gradient(135deg, #f2e7eb, #e1cbd5);
  font-weight: 800;
  letter-spacing: 2px;
}

.certificate-icon {
  font-size: 3.5rem;
}

.certificate-placeholder small {
  font-size: 0.65rem;
  letter-spacing: 1px;
}

.verified-label {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 7px 10px;
  border-radius: 20px;
  background: white;
  color: var(--burgundy);
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 1px;
}

.cert-content {
  padding: 25px;
}

.cert-category {
  color: #b65c18;
  font-size: 0.75rem;
  font-weight: 700;
}

.cert-content h3 {
  margin: 12px 0 8px;
  font-size: 1.35rem;
  letter-spacing: -0.035em;
}

.issuer {
  color: var(--burgundy);
  font-size: 0.9rem;
  font-weight: 600;
}

.cert-description {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.8;
}

.cert-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 20px;
  padding-top: 17px;
  border-top: 1px solid #eee7ea;
}

.cert-actions {
  margin-top: 16px;
}

.certificate-button {
  width: 100%;
  cursor: pointer;
  color: #171e21;
}

.certificate-button:hover {
  color: #171e21;
}

.cert-date {
  color: var(--muted);
  font-size: 0.78rem;
}

.credential-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 13px;
  border: 0;
  border-radius: 9px;
  background: var(--orange);
  color: #171e21;
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.credential-link:hover:not(:disabled) {
  transform: translateY(-2px);
  background: #ff922b;
}

.credential-link:focus-visible {
  outline: 3px solid #b65c18;
  outline-offset: 3px;
}

.credential-link:disabled {
  cursor: not-allowed;
  opacity: 0.65;
}

.certificate-dialog {
  width: min(1100px, calc(100vw - 32px));
  max-width: none;
  max-height: calc(100dvh - 32px);
  padding: 20px;
  overflow: auto;
  border: 1px solid rgba(146, 0, 57, 0.25);
  border-radius: 13px;
  background: white;
  color: #171e21;
}

.certificate-dialog::backdrop {
  background: rgba(23, 30, 33, 0.72);
}

.certificate-dialog-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
}

.certificate-dialog-header h2 {
  margin: 0;
  color: var(--burgundy);
  font-size: clamp(1.1rem, 3vw, 1.5rem);
}

.certificate-dialog-close {
  display: grid;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid var(--burgundy);
  border-radius: 9px;
  background: white;
  color: var(--burgundy);
  font-size: 1.7rem;
  line-height: 1;
  cursor: pointer;
}

.certificate-dialog-close:hover {
  background: var(--burgundy);
  color: white;
}

.certificate-dialog-preview {
  display: grid;
  min-height: 260px;
  max-height: calc(100dvh - 160px);
  aspect-ratio: 16 / 10;
  place-items: center;
  overflow: auto;
  background: #f2e7eb;
}

.certificate-dialog-preview iframe {
  width: 100%;
  height: min(68dvh, 720px);
  border: 0;
  background: white;
}

.certificate-dialog-preview img {
  display: block;
  max-width: 100%;
  max-height: calc(100dvh - 200px);
  object-fit: contain;
}

.certificate-open-link {
  display: inline-flex;
  margin-top: 14px;
  color: var(--burgundy);
  font-weight: 700;
  text-underline-offset: 3px;
}

.empty-state {
  padding: 40px 0;
  color: var(--muted);
  text-align: center;
}

.learning-section {
  padding: 90px 8%;
  text-align: center;
}

.learning-section > p:not(.eyebrow) {
  max-width: 620px;
  margin: 15px auto;
  color: var(--muted);
  line-height: 1.9;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  padding: 15px 22px;
  border-radius: 9px;
  background: var(--orange);
  color: #171e21;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  background: #ff922b;
}

.footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 25px 8%;
  color: var(--muted);
  font-size: 0.85rem;
}

.footer a {
  color: #ffad66;
  text-decoration: none;
}

@keyframes rise-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gentle-turn {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 760px) {
  .cert-hero {
    padding: 65px 6% 16px;
  }

  .cert-section {
    padding: 16px 6% 60px;
  }

  .cert-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 761px) and (max-width: 1000px) {
  .cert-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .section-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .footer {
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .certificate-dialog {
    width: calc(100vw - 20px);
    max-height: calc(100dvh - 20px);
    padding: 14px;
  }

  .certificate-dialog-preview iframe {
    height: 68dvh;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
