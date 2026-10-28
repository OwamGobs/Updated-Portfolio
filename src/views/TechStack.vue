<script setup>
import { onBeforeUnmount, onMounted } from "vue";

const emit = defineEmits(["close"]);

const technologyGroups = [
  {
    title: "Frontend",
    description: "Building responsive interfaces and interactive experiences.",
    technologies: [
      {
        name: "HTML",
        icon: "bi-filetype-html",
        purpose: "Structuring accessible content and page layouts.",
        level: "Building Projects",
        progress: 100,
      },
      {
        name: "CSS",
        icon: "bi-filetype-css",
        purpose: "Styling responsive pages, layouts, and UI components.",
        level: "Building Projects",
        progress: 100,
      },
      {
        name: "JavaScript",
        icon: "bi-filetype-js",
        purpose: "Adding interactivity and application behavior.",
        level: "Building Projects",
        progress: 100,
      },
      {
        name: "Vue.js",
        icon: "bi-code-slash",
        purpose: "Creating component-based interfaces and portfolio features.",
        level: "Building Projects",
        progress: 100,
      },
      {
        name: "Three.js",
        icon: "bi-box",
        purpose: "Creating interactive 3D graphics and visualizations for the web.",
        level: "Currently Learning",
        progress: 75,
      },
      {
        name: "Bootstrap",
        icon: "bi-bootstrap",
        purpose: "Using a responsive grid and reusable interface utilities.",
        level: "Building Projects",
        progress: 100,
      },
    ],
  },
  {
    title: "Backend & Databases",
    description: "Building server-side features and working with data.",
    technologies: [
      {
        name: "Node.js",
        icon: "bi-braces",
        purpose: "Running JavaScript on the server for web applications.",
        level: "Building Projects",
        progress: 100,
      },
      {
        name: "Express.js",
        icon: "bi-hdd-network",
        purpose: "Exploring server routes and API development.",
        level: "Building Projects",
        progress: 100,
      },
      {
        name: "MySQL",
        icon: "bi-database",
        purpose: "Practising relational data storage and queries.",
        level: "Building Projects",
        progress: 100,
      },
      {
        name: "PHP",
        icon: "bi-filetype-php",
        purpose: "Writing server-side code for dynamic web applications.",
        level: "Building Projects",
        progress: 100,
      },
      {
        name: "Python",
        icon: "bi-filetype-py",
        purpose: "Writing scripts and practising programming problem-solving.",
        level: "Building Projects",
        progress: 100,
      },
    ],
  },
  {
    title: "Development Tools",
    description: "Tools I use to manage code and collaborate on projects.",
    technologies: [
      {
        name: "Git & GitHub",
        icon: "bi-github",
        purpose: "Tracking code changes and managing project repositories.",
        level: "Building Projects",
        progress: 100,
      },
      {
        name: "Vite",
        icon: "bi-lightning-charge",
        purpose: "Running the development server and building Vue projects.",
        level: "Building Projects",
        progress: 100,
      },
    ],
  },
];

function closeOnEscape(event) {
  if (event.key === "Escape") emit("close");
}

onMounted(() => {
  window.addEventListener("keydown", closeOnEscape);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", closeOnEscape);
});
</script>

<template>
  <main
    class="tech-stack-page"
    role="dialog"
    aria-modal="true"
    aria-labelledby="tech-stack-title"
  >
    <button
      type="button"
      class="close-button"
      @click="emit('close')"
      aria-label="Close Tech Stack"
      title="Close Tech Stack"
    >
      <i class="bi bi-x-lg" aria-hidden="true"></i>
    </button>

    <header class="tech-hero">
      <p class="eyebrow">MY TOOLS & LEARNING JOURNEY</p>
      <h1 id="tech-stack-title">Tech stack<span>.</span></h1>
      <p class="hero-description">
        The technologies I use in my projects and the skills I’m continuing to develop.
      </p>
      <p class="progress-note">
        Full bars indicate technologies I have learned and can apply; they do
        not imply expert-level proficiency.
      </p>
    </header>

    <div class="technology-groups">
      <section
        v-for="group in technologyGroups"
        :key="group.title"
        class="technology-group"
        :aria-label="group.title"
      >
        <div class="group-heading">
          <div>
            <h2>{{ group.title }}</h2>
            <p>{{ group.description }}</p>
          </div>
          <span class="technology-count">
            {{ group.technologies.length }}
            {{ group.technologies.length === 1 ? "technology" : "technologies" }}
          </span>
        </div>

        <div class="technology-grid">
          <article
            v-for="technology in group.technologies"
            :key="technology.name"
            class="technology-card"
          >
            <div class="technology-title">
              <span class="technology-icon" aria-hidden="true">
                <i :class="['bi', technology.icon]"></i>
              </span>
              <h3>{{ technology.name }}</h3>
            </div>

            <p class="technology-purpose">{{ technology.purpose }}</p>

            <div class="technology-level">
              <span>Experience</span>
              <strong>{{ technology.level }}</strong>
            </div>

            <div
              class="progress"
              role="progressbar"
              :aria-label="`${technology.name} illustrative learning progress`"
              :aria-valuenow="technology.progress"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar" :style="{ width: `${technology.progress}%` }"></div>
            </div>
            <span class="progress-caption">Learning progress snapshot</span>
          </article>
        </div>
      </section>
    </div>

    <footer class="tech-footer">
      <button type="button" class="back-link" @click="emit('close')">
        <i class="bi bi-arrow-left" aria-hidden="true"></i>
        Back to projects
      </button>
    </footer>
  </main>
</template>

<style scoped>
.tech-stack-page {
  --orange: #f47b0b;
  --burgundy: #920039;
  --ink: #f5f2f3;
  --muted: #e6dfe2;
  position: fixed;
  inset: 0;
  z-index: 1200;
  overflow-y: auto;
  overscroll-behavior: contain;
  min-height: 100vh;
  padding: 88px clamp(24px, 7vw, 96px) 60px;
  color: var(--ink);
  background: var(--page-background);
  font-family: Inter, Arial, sans-serif;
}

.tech-stack-overlay-enter-active,
.tech-stack-overlay-leave-active {
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}

.tech-stack-overlay-enter-from,
.tech-stack-overlay-leave-to {
  opacity: 0;
  transform: translateY(14px);
}

.close-button {
  position: absolute;
  top: 28px;
  right: clamp(24px, 7vw, 96px);
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;
  background: transparent;
  color: var(--ink);
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.close-button:hover {
  transform: rotate(90deg);
  background: var(--orange);
  color: #171e21;
}

.close-button:focus-visible,
.back-link:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 3px;
}

.tech-hero,
.technology-groups,
.tech-footer {
  width: min(100%, 1200px);
  margin-right: auto;
  margin-left: auto;
}

.tech-hero {
  margin-bottom: 50px;
}

.eyebrow {
  margin-bottom: 14px;
  color: #ffad66;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 3px;
}

.tech-hero h1 {
  margin: 0;
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.075em;
}

.tech-hero h1 span {
  color: var(--orange);
  font-style: italic;
}

.hero-description {
  max-width: 620px;
  margin: 20px 0 10px;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.8;
}

.progress-note {
  max-width: 620px;
  margin: 0;
  color: #f0c7a6;
  font-size: 0.82rem;
  line-height: 1.6;
}

.technology-group + .technology-group {
  margin-top: 42px;
}

.group-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;
}

.group-heading h2 {
  margin: 0 0 5px;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.04em;
}

.group-heading p {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
}

.technology-count {
  flex: 0 0 auto;
  color: #ffad66;
  font-size: 0.8rem;
}

.technology-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.technology-card {
  padding: 22px;
  border: 1px solid rgba(101, 27, 50, 0.1);
  border-radius: 13px;
  background: #fff;
  color: #272329;
}

.technology-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.technology-icon {
  display: grid;
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 10px;
  background: #f8eaf0;
  color: var(--burgundy);
  font-size: 1.2rem;
}

.technology-title h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
}

.technology-purpose {
  min-height: 48px;
  margin: 16px 0 20px;
  color: #625b63;
  font-size: 0.88rem;
  line-height: 1.65;
}

.technology-level {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
  font-size: 0.78rem;
}

.technology-level span,
.progress-caption {
  color: #706970;
}

.technology-level strong {
  color: var(--burgundy);
  font-size: 0.86rem;
}

.progress {
  height: 7px;
  overflow: hidden;
  border-radius: 10px;
  background: #eee7ea;
}

.progress-bar {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--burgundy), var(--orange));
}

.progress-caption {
  display: block;
  margin-top: 7px;
  font-size: 0.7rem;
}

.tech-footer {
  margin-top: 46px;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 0;
  border: 0;
  background: transparent;
  color: #ffad66;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.back-link:hover {
  color: #fff;
}

@media (max-width: 900px) {
  .technology-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .tech-stack-page {
    padding: 82px 20px 42px;
  }

  .close-button {
    top: 20px;
    right: 20px;
  }

  .tech-hero {
    margin-bottom: 38px;
  }

  .technology-grid {
    grid-template-columns: 1fr;
    gap: 13px;
  }

  .technology-card {
    padding: 19px;
  }

  .technology-purpose {
    min-height: 0;
  }

  .group-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
