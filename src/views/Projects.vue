<script setup>
import { computed, nextTick, ref } from "vue";

const projects = ref([
  {
    title: "E-Commerce Website",
    category: "Web Development",
    year: "2026",
    description:
      "A responsive e-commerce website focused on a clean shopping experience, attractive product presentation, and intuitive navigation.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Personal Portfolio",
    category: "Web Development",
    year: "2026",
    description:
      "A personal portfolio showcasing my development journey, skills, and projects through a responsive interface built with Vue.",
    technologies: ["Vue.js", "JavaScript", "CSS", "Vite"],
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "ApplyDirect SA",
    category: "Full-Stack Development",
    year: "2026",
    description:
      "A student-focused application project designed to support the application process, with profile management and contact functionality.",
    technologies: ["Vue.js", "Node.js", "Express", "MySQL"],
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
]);

const selectedCategory = ref("All");
const showProjects = ref(false);
const projectsSection = ref(null);

const categories = computed(() => [
  "All",
  ...new Set(projects.value.map((project) => project.category)),
]);

const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") return projects.value;

  return projects.value.filter(
    (project) => project.category === selectedCategory.value,
  );
});

async function toggleProjects() {
  showProjects.value = !showProjects.value;

  if (showProjects.value) {
    await nextTick();
    projectsSection.value?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    return;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <main class="projects-page">
    <!-- Navigation -->
    <header class="navbar">
      <RouterLink to="/" class="logo">
        <span>Owam</span>
        <span class="logo-accent">Gobinca_</span>
      </RouterLink>

      <nav class="nav-links" aria-label="Main navigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects" class="active">Work</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </header>

    <!-- Page introduction -->
    <section class="projects-hero">
      <p class="eyebrow">MY SELECTED WORK</p>

      <h1>
        Ideas turned into
        <span>reality.</span>
      </h1>

      <p class="hero-description">
        Every project is an opportunity to learn, experiment, and build
        something meaningful. Explore what I've been working on.
      </p>

      <div class="project-stats">
        <div>
          <strong>{{ projects.length.toString().padStart(2, "0") }}</strong>
          <span>Projects showcased</span>
        </div>
        <div>
          <strong>{{
            new Set(projects.flatMap((p) => p.technologies)).size
          }}</strong>
          <span>Technologies explored</span>
        </div>
      </div>

      <button
        type="button"
        class="cta-button reveal-button"
        :aria-expanded="showProjects"
        :aria-controls="showProjects ? 'project-details' : undefined"
        @click="toggleProjects"
      >
        {{ showProjects ? "Hide projects" : "View projects" }}
        <span aria-hidden="true">{{ showProjects ? "↑" : "↓" }}</span>
      </button>
    </section>

    <template v-if="showProjects">
      <!-- Filters -->
      <section id="project-details" ref="projectsSection" class="work-section">
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
                <span
                  v-for="technology in project.technologies"
                  :key="technology"
                >
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

                <span
                  v-if="!project.liveUrl && !project.githubUrl"
                  class="coming-soon"
                >
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

      <!-- Contact call to action -->
      <section class="contact-cta">
        <p class="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>Let's build something <span>great.</span></h2>
        <p>
          I'm interested in learning, collaborating, and exploring new
          opportunities.
        </p>
        <RouterLink to="/contact" class="cta-button">
          Get in touch <span>↗</span>
        </RouterLink>
      </section>

      <footer class="footer">
        <p>© {{ new Date().getFullYear() }} Owam Gobinca</p>
        <RouterLink to="/">Back to home ↑</RouterLink>
      </footer>
    </template>
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
  background: radial-gradient(
    ellipse at 38% 48%,
    #3f3f3f 0%,
    #696969 54%,
    #969696 100%
  );
  font-family: Inter, Arial, sans-serif;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  padding: 25px 5%;
}

.logo {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 0.98;
  font-weight: 800;
  letter-spacing: -1px;
  text-decoration: none;
}

.logo-accent {
  color: #d47a1b;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(18px, 3vw, 42px);
}

.nav-links a {
  color: var(--ink);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: #ffad66;
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
  gap: 28px;
}

.project-card {
  --ink: #000000;
  --muted: #6d676b;
  overflow: hidden;
  border: 1px solid rgba(101, 27, 50, 0.1);
  border-radius: 13px;
  background: white;
  color: var(--ink);
  box-shadow: 0 7px 25px rgba(45, 25, 35, 0.04);
  animation: reveal 0.65s ease-out both;
  animation-delay: calc(var(--card-index) * 100ms);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(45, 25, 35, 0.12);
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
  padding: 27px;
}

.project-meta {
  color: #b65c18;
  font-size: 0.76rem;
  font-weight: 700;
}

.project-info h3 {
  margin: 12px 0;
  font-size: 1.5rem;
  letter-spacing: -0.04em;
}

.project-description {
  min-height: 78px;
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.8;
}

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0;
}

.technology-list span {
  padding: 7px 10px;
  border-radius: 5px;
  background: #f3edf0;
  color: #5f3346;
  font-size: 0.74rem;
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

.reveal-button {
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
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
  .navbar {
    align-items: flex-start;
    padding: 22px 6%;
  }

  .nav-links {
    justify-content: flex-end;
    gap: 12px 17px;
  }

  .nav-links a {
    font-size: 0.82rem;
  }

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

@media (max-width: 480px) {
  .navbar {
    flex-direction: column;
    gap: 22px;
  }

  .nav-links {
    justify-content: flex-start;
  }

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
