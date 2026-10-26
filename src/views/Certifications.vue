<script setup>
import cybersecurityCertificate from "../assets/introduction-to-cybersecurity-certificate.png";
import dataScienceCertificate from "../assets/introduction-to-data-science-certificate.png";
import youthCodeCertificate from "../assets/youthcode-certificate.png";

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
        image: youthCodeCertificate,
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
            <div class="cert-visual" :class="{ 'has-certificate-image': cert.image }">
              <img
                v-if="cert.image"
                :src="cert.image"
                :alt="cert.title + ' ' + cert.type.toLowerCase()"
                loading="lazy"
              />

              <div v-else class="certificate-placeholder">
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
                  View credential ↗
                </a>

                <span v-else class="pending-link"> Credential details to be added </span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </section>

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
  box-shadow: 0 7px 25px rgba(45, 25, 35, 0.04);
  animation: rise-in 0.6s ease-out both;
  animation-delay: var(--delay);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.cert-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 40px rgba(45, 25, 35, 0.11);
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

.cert-date,
.pending-link {
  color: var(--muted);
  font-size: 0.78rem;
}

.credential-link {
  color: var(--burgundy);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
}

.credential-link:hover {
  color: #b65c18;
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
