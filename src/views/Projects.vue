<script setup>
import { computed, nextTick, ref } from "vue";
import TechStack from "./TechStack.vue";
import marketPulseImage from "../assets/WebScraping.png";
import modernTechImage from "../assets/ModernTechSolutions.png";
import eventPlanningImage from "../assets/EventPlanning.png";
import applyDirectImage from "../assets/ApplyDirectSA.png";

const projects = ref([
  {
    title: "Market Pulse",
    category: "Web Development",
    year: "2026",
    description:
      "A price-monitoring dashboard for retail goods and digital assets, with market snapshots, top movers, source filtering, and a watchlist.",
    technologies: ["Vue.js", "JavaScript", "Price monitoring"],
    image: marketPulseImage,
    liveUrl: "https://market-pulse-11gq.onrender.com/",
    githubUrl: "",
  },
  {
    title: "ModernTech Solutions HR Dashboard",
    category: "Web Development",
    year: "2026",
    description:
      "A human resources dashboard for managing employee records, payroll, attendance, time-off requests, and performance reviews in one place.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: modernTechImage,
    liveUrl: "https://ihtishaamj63-web.github.io/Project-1-ModernTech-Solutions/",
    githubUrl: "",
  },
  {
    title: "Event Planning Service",
    category: "Web Development",
    year: "2026",
    description:
      "A website for an event planning service, presenting event offerings and helping visitors explore planning options.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: eventPlanningImage,
    liveUrl: "https://newmi-git.github.io/Event-Planning-Service/",
    githubUrl: "",
  },
  {
    title: "ApplyDirect SA",
    category: "Full-Stack Development",
    year: "2026",
    description:
      "A student-focused application project designed to support the application process, with profile management and contact functionality.",
    technologies: ["Vue.js", "Node.js", "Express", "MySQL"],
    image: applyDirectImage,
    liveUrl: "",
    githubUrl: "https://github.com/stephanbennett42-ctrl/applydirect-sa",
  },
]);

const selectedCategory = ref("All");
const showTechStack = ref(false);
const techStackButton = ref(null);

const categories = computed(() => [
  "All",
  ...new Set(projects.value.map((project) => project.category)),
]);

const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") return projects.value;

  return projects.value.filter((project) => project.category === selectedCategory.value);
});

function openTechStack() {
  showTechStack.value = true;
}

async function closeTechStack() {
  showTechStack.value = false;
  await nextTick();
  techStackButton.value?.focus({ preventScroll: true });
}
</script>

<template>
  <main class="projects-page">
    <!-- Page introduction -->
    <section class="projects-hero">
      <p class="eyebrow">MY SELECTED WORK</p>

      <h1>
        Ideas turned into
        <span>reality.</span>
      </h1>

      <p class="hero-description">
        Every project is an opportunity to learn, experiment, and build something meaningful.
        Explore what I've been working on.
      </p>

      <div class="project-stats">
        <div>
          <strong>{{ projects.length.toString().padStart(2, "0") }}</strong>
          <span>Projects showcased</span>
        </div>
        <div>
          <strong>{{ new Set(projects.flatMap((p) => p.technologies)).size }}</strong>
          <span>Technologies explored</span>
        </div>
      </div>

      <button ref="techStackButton" type="button" class="tech-stack-link" @click="openTechStack">
        <i class="bi bi-code-slash" aria-hidden="true"></i>
        View My Tech Stack
        <span aria-hidden="true">↗</span>
      </button>
    </section>

    <!-- Filters -->
    <section id="project-details" class="work-section">
      <div class="section-top">
        <div>
          <p class="eyebrow">THE PORTFOLIO</p>
          <h2>Things I've built<span>.</span></h2>
        </div>

        <p class="results-count">
          {{ filteredProjects.length }}
          {{ filteredProjects.length === 1 ? "project" : "projects" }}
        </p>
      </div>

      <div class="filters" aria-label="Filter projects by category">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          :class="{ selected: selectedCategory === category }"
          :aria-pressed="selectedCategory === category"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <!-- Project cards -->
      <div class="projects-grid">
        <article
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          class="project-card"
          :style="{ '--card-index': index }"
        >
          <div class="project-image">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title + ' project preview'"
              loading="lazy"
            />

            <div v-else class="image-placeholder">
              <span class="placeholder-symbol">&lt;/&gt;</span>
              <span>{{ project.title }}</span>
              <small>PROJECT PREVIEW</small>
            </div>

            <span class="project-year">{{ project.year }}</span>
          </div>

          <div class="project-info">
            <div class="project-meta">
              <span>{{ project.category }}</span>
            </div>

            <h3>{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>

            <div class="technology-list">
              <span v-for="technology in project.technologies" :key="technology">
                {{ technology }}
              </span>
            </div>

            <div class="project-actions">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link primary-link"
              >
                View live project <span>↗</span>
              </a>

              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                GitHub <span>↗</span>
              </a>

              <span v-if="!project.liveUrl && !project.githubUrl" class="coming-soon">
                Links coming soon
              </span>
            </div>
          </div>
        </article>
      </div>

      <p v-if="filteredProjects.length === 0" class="empty-state">
        No projects in this category yet.
      </p>
    </section>



    <Transition name="tech-stack-overlay">
      <TechStack v-if="showTechStack" @close="closeTechStack" />
    </Transition>
  </main>
</template>

<style scoped>
.projects-page {
  --orange: #f47b0b;
  --burgundy: #920039;
  --ink: #f5f2f3;
  --muted: #e6dfe2;
  min-height: 100vh;
  color: var(--ink);
  background: var(--page-background);
  font-family: Inter, Arial, sans-serif;
}

.projects-hero {
  max-width: 1200px;
  margin: auto;
  padding: 90px 7% 75px;
  animation: reveal 0.75s ease-out both;
}

.eyebrow {
  color: #ffad66;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 3px;
}

.projects-hero h1 {
  max-width: 850px;
  margin: 22px 0;
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.075em;
}

.projects-hero h1 span,
.section-top h2 span,
.contact-cta h2 span {
  color: var(--orange);
  font-style: italic;
}

.hero-description {
  max-width: 620px;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.9;
}

.project-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 55px;
  margin-top: 35px;
}

.project-stats div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.project-stats strong {
  font-size: 1.9rem;
}

.project-stats span {
  color: var(--muted);
  font-size: 0.85rem;
}

.tech-stack-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  padding: 12px 18px;
  border: 1px solid rgba(255, 173, 102, 0.65);
  border-radius: 8px;
  background: transparent;
  color: var(--ink);
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.tech-stack-link:hover {
  transform: translateY(-2px);
  border-color: var(--orange);
  background: var(--orange);
  color: #171e21;
}

.tech-stack-link:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 3px;
}

.work-section {
  --ink: #f5f2f3;
  --muted: #e6dfe2;
  padding: 75px 7% 100px;
  color: var(--ink);
  background: transparent;
}

.work-section .eyebrow {
  color: #ffad66;
}

.section-top {
  max-width: 1200px;
  margin: 0 auto 30px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
}

.section-top h2,
.contact-cta h2 {
  margin: 12px 0;
  font-size: clamp(2rem, 4vw, 3.2rem);
  letter-spacing: -0.06em;
}

.results-count {
  color: var(--muted);
  font-size: 0.9rem;
}

.filters {
  max-width: 1200px;
  margin: 0 auto 35px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filters button {
  border: 1px solid #d8cbd1;
  border-radius: 30px;
  padding: 10px 17px;
  background: transparent;
  color: var(--ink);
  font: inherit;
  font-size: 0.85rem;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.filters button:hover,
.filters button.selected {
  border-color: var(--burgundy);
  background: var(--burgundy);
  color: white;
}

.projects-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.project-card {
  --ink: #000000;
  --muted: #6d676b;
  overflow: hidden;
  border: 1px solid rgba(101, 27, 50, 0.1);
  border-radius: 13px;
  background: white;
  color: var(--ink);
  animation: reveal 0.65s ease-out both;
  animation-delay: calc(var(--card-index) * 100ms);
  transition: transform 0.25s ease;
}

.project-card:hover {
  transform: translateY(-6px);
}

.project-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: #e8dfe3;
}

.project-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.45s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.045);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--burgundy);
  background:
    radial-gradient(circle at 80% 20%, #f8c18c 0, transparent 30%),
    linear-gradient(135deg, #f2e7eb, #e1cbd5);
  font-weight: 700;
}

.placeholder-symbol {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -5px;
}

.image-placeholder small {
  font-size: 0.65rem;
  letter-spacing: 3px;
}

.project-year {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 7px 12px;
  border-radius: 30px;
  background: white;
  font-size: 0.78rem;
  font-weight: 700;
}

.project-info {
  padding: 20px;
}

.project-meta {
  color: #b65c18;
  font-size: 0.76rem;
  font-weight: 700;
}

.project-info h3 {
  margin: 12px 0;
  font-size: 1.25rem;
  letter-spacing: -0.04em;
}

.project-description {
  min-height: 90px;
  color: var(--muted);
  font-size: 0.86rem;
  line-height: 1.65;
}

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 16px 0;
}

.technology-list span {
  padding: 6px 8px;
  border-radius: 5px;
  background: #f3edf0;
  color: #5f3346;
  font-size: 0.68rem;
  font-weight: 600;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  padding-top: 18px;
  border-top: 1px solid #eee7ea;
}

.project-link {
  display: inline-flex;
  gap: 7px;
  align-items: center;
  color: var(--burgundy);
  font-size: 0.86rem;
  font-weight: 700;
  text-decoration: none;
}

.project-link span {
  transition: transform 0.2s ease;
}

.project-link:hover span {
  transform: translate(3px, -3px);
}

.primary-link {
  color: #bd5b12;
}

.coming-soon {
  color: var(--muted);
  font-size: 0.82rem;
  font-style: italic;
}

.empty-state {
  padding: 45px 0;
  color: var(--muted);
  text-align: center;
}

.contact-cta {
  padding: 95px 7%;
  text-align: center;
}

.contact-cta > p:not(.eyebrow) {
  max-width: 580px;
  margin: 15px auto;
  color: var(--muted);
  line-height: 1.8;
}

.cta-button {
  display: inline-flex;
  gap: 15px;
  align-items: center;
  margin-top: 20px;
  padding: 15px 23px;
  border-radius: 10px;
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
  padding: 25px 7%;
  color: var(--muted);
  font-size: 0.85rem;
}

.footer a {
  color: #ffad66;
  text-decoration: none;
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 760px) {
  .projects-hero {
    padding: 65px 6% 55px;
  }

  .work-section {
    padding: 60px 6%;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-description {
    min-height: auto;
  }
}

@media (min-width: 761px) and (max-width: 1000px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .section-top {
    align-items: flex-start;
    flex-direction: column;
    gap: 0;
  }

  .project-stats {
    gap: 28px;
  }

  .project-info {
    padding: 21px;
  }

  .footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
</style>
