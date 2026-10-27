
<script setup>
import profilePhoto from "../assets/profile.jpg";
</script>

<template>
  <main id="home" class="hero">
    <section class="hero-content">
      <!-- Hero content -->
      <div class="intro">
        <h1 data-text="Turning Ideas Into Functional Web Experiences.">
          Turning Ideas Into<br />
          Functional Web<br />
          Experiences.
        </h1>

        <h2>Hi, I'm Owam Gobinca</h2>

        <p class="subtitle">An aspiring software developer</p>

        <div class="hero-actions">
          <RouterLink to="/projects" class="projects-button">
            View my projects
            <span aria-hidden="true">→</span>
          </RouterLink>

          <RouterLink to="/about" class="projects-button about-button">
            More about me
            <span aria-hidden="true">↗</span>
          </RouterLink>
        </div>
      </div>

      <!-- Profile photo -->
      <div class="portrait-wrapper">
        <img
          :src="profilePhoto"
          alt="Portrait of Owam Gobinca"
          class="portrait"
        />
      </div>

      <!-- Social media icons -->
      <div class="social-links d-flex align-items-center gap-3">
        <a
          href="https://github.com/OwamGobs"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
          aria-label="GitHub"
        >
          <i class="bi bi-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/owam-gobingca-08650b324/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
          aria-label="LinkedIn"
        >
          <i class="bi bi-linkedin"></i>
        </a>

        <a
          href="mailto:owamgobingca@gmail.com"
          class="social-icon"
          aria-label="Email"
        >
          <i class="bi bi-envelope-fill"></i>
        </a>
      </div>

      <div class="bottom-strip"></div>
    </section>
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap");

:root {
  font-family: "Inter", sans-serif;
  color: #171e21;
  background: #d7d4d5;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Main hero background */
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  overflow: clip;
  display: flex;
  flex-direction: column;
  padding: 24px 4.2% 32px;
  color: #f4f4f4;
  background: radial-gradient(
    ellipse at 38% 48%,
    #343434 0%,
    #5d5d5d 54%,
    #858585 100%
  );
}

/* Main hero layout */
.hero-content {
  flex: 1;
  width: 100%;
  max-width: 1500px;
  margin: 30px auto 0;
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(280px, 0.8fr);
  align-items: center;
  gap: 4%;
  padding-bottom: 15px;
}

.intro {
  min-width: 0;
  position: relative;
  z-index: 1;
}

/* Main headline */
.intro h1 {
  position: relative;
  margin: 0 0 28px;
  font-size: clamp(42px, 6.15vw, 94px);
  line-height: 1.02;
  font-weight: 800;
  color: #171e21;
  font-style: italic;
  letter-spacing: -0.075em;
  overflow: visible;
}

/* Orange introduction heading */
.intro h2 {
  margin: 0 0 12px;
  color: #d17a1c;
  font-size: clamp(30px, 4.7vw, 70px);
  line-height: 1.08;
  font-weight: 800;
  font-style: italic;
  letter-spacing: -0.065em;
  white-space: nowrap;
}

/* Subtitle */
.subtitle {
  margin: 0 0 22px;
  font-size: clamp(20px, 3.1vw, 44px);
  line-height: 1.2;
  color: #171e21;
  font-weight: 700;
  font-style: italic;
  letter-spacing: -0.065em;
}

/* Project buttons */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.projects-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 12px;
  min-height: 56px;
  padding: 15px 20px;
  border: 1px solid #f47b0b;
  border-radius: 17px;
  background: #f47b0b;
  color: #171e21;
  font-size: 16px;
  font-weight: 500;
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease;
}

.about-button {
  background: #f47b0b;
}

.projects-button span {
  display: inline-block;
  font-size: 23px;
  line-height: 1;
  transition: transform 0.25s ease;
}

.projects-button:hover {
  border-color: #c85e00;
  background: #ff922b;
  color: #fff;
  transform: translateY(-3px);
}

.projects-button:hover span {
  transform: translateX(5px);
}

.projects-button:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 3px;
}

/* Profile image */
.portrait-wrapper {
  width: 100%;
  max-width: 440px;
  justify-self: center;
}

.portrait {
  display: block;
  width: 100%;
  aspect-ratio: 0.84;
  object-fit: cover;
  object-position: center top;
  border-radius: 24%;
  animation: portraitFloat 4s ease-in-out 1.2s infinite;
  transition: filter 0.3s ease;
}

.portrait:hover {
  filter: saturate(1.08);
}

/* Social media links */
.social-links {
  position: absolute;
  right: 4.2%;
  bottom: 28px;
  z-index: 5;
}

.social-icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(146, 0, 57, 0.25);
  border-radius: 50%;
  color: #920039;
  background: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease;
}

.social-icon:hover {
  background: #920039;
  color: #fff;
  transform: translateY(-4px);
}

.social-icon:focus-visible {
  outline: 3px solid #f47b0b;
  outline-offset: 3px;
}

.bottom-strip {
  min-height: 0;
}

/* Entrance animations */
@keyframes introReveal {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes portraitReveal {
  from {
    opacity: 0;
    transform: translateX(24px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes portraitFloat {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

.intro h1 {
  animation: introReveal 0.8s ease-out both;
}

.intro h2 {
  animation: introReveal 0.8s ease-out 0.15s both;
}

.intro .subtitle {
  animation: introReveal 0.8s ease-out 0.3s both;
}

.intro .projects-button {
  animation: introReveal 0.8s ease-out 0.45s both;
}

.portrait-wrapper {
  animation: portraitReveal 0.9s ease-out 0.2s both;
}

/* Tablet layouts */
@media (max-width: 900px) {
  .hero {
    padding-left: 5%;
    padding-right: 5%;
  }

  .hero-content {
    grid-template-columns: minmax(0, 1.2fr) minmax(220px, 0.8fr);
    gap: 3%;
  }

  .intro h1 {
    font-size: clamp(40px, 6vw, 58px);
  }

  .intro h2 {
    font-size: clamp(27px, 4.5vw, 42px);
    white-space: normal;
  }

  .subtitle {
    font-size: clamp(20px, 3vw, 29px);
  }
}

/* Mobile phones */
@media (max-width: 600px) {
  .hero {
    min-height: 100svh;
    padding: 22px 6% 35px;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 28px;
    margin-top: 45px;
    padding-bottom: 20px;
  }

  .intro h1 {
    font-size: clamp(39px, 10vw, 57px);
    margin-bottom: 20px;
  }

  .intro h2 {
    font-size: clamp(29px, 7.5vw, 43px);
    white-space: normal;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: clamp(21px, 5.3vw, 28px);
    margin-bottom: 20px;
  }

  .projects-button {
    min-height: 49px;
    padding: 12px 17px;
    font-size: 14px;
  }

  .portrait-wrapper {
    width: min(75%, 300px);
  }

  .social-links {
    position: relative;
    right: auto;
    bottom: auto;
    justify-content: center;
    margin: 20px 0;
    gap: 25px;
  }
}

/* Respect reduced-motion preferences */
@media (prefers-reduced-motion: reduce) {
  .intro h1,
  .intro h2,
  .intro .subtitle,
  .intro .projects-button,
  .portrait-wrapper,
  .portrait {
    animation: none !important;
  }

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}


</style>
