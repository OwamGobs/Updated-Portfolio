
<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import profilePhoto from "../assets/profile.jpg";

const route = useRoute();
const showGreeting = ref(false);
const greetingMessage = ref("");
const waveKey = ref(0);
const greetingDuration = 5000;

const routeGreetings = {
  about: "Curious about me? Let me introduce myself!",
  projects: "Here are some projects I've been working on!",
  certifications: "Here's what I've been learning and achieving!",
  contact: "Want to connect? Let's talk!",
};

watch(
  () => route.fullPath,
  (_, __, onCleanup) => {
    showGreeting.value = false;

    greetingMessage.value =
      route.name === "home" || route.path === "/"
        ? "Welcome to my portfolio."
        : routeGreetings[route.name] ?? "Welcome! Take a look around my portfolio.";
    waveKey.value += 1;
    showGreeting.value = true;

    const greetingTimeout = window.setTimeout(() => {
      showGreeting.value = false;
    }, greetingDuration);

    onCleanup(() => window.clearTimeout(greetingTimeout));
  },
  { immediate: true },
);
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

      
      <div class="robot-mascot">
        <Transition name="greeting">
          <div v-if="showGreeting" class="robot-greeting" role="status">
            <span class="robot-wave-emoji" aria-hidden="true">👋</span>
            <strong>{{ greetingMessage }}</strong>
          </div>
        </Transition>

        <div class="robot" aria-hidden="true">
          <div class="robot-antenna"></div>

          <div class="robot-head">
            <div class="robot-eye"></div>
            <div class="robot-eye"></div>
            <div class="robot-mouth"></div>
          </div>

          <div class="robot-neck"></div>
          <div class="robot-body"></div>

          <div class="robot-arm robot-arm-left"></div>
          <div
            :key="waveKey"
            class="robot-arm robot-arm-right"
            :class="{ 'is-waving': waveKey > 0 }"
          >
            <div class="robot-hand"></div>
          </div>
        </div>
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

/* Main headline with blurred shadow */
.intro h1 {
  position: relative;
  isolation: isolate;
  margin: 0 0 28px;
  font-size: clamp(42px, 6.15vw, 94px);
  line-height: 1.02;
  font-weight: 800;
  color: #171e21;
  font-style: italic;
  letter-spacing: -0.075em;
  overflow: visible;
}

/* FreeFrontend-inspired shadow */
.intro h1::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  z-index: -1;
  color: #101416;
  filter: blur(12px);
  transform: skew(12deg, 0) translate(-1%, 8%);
  opacity: 0.95;
  pointer-events: none;
  white-space: pre-wrap;
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
  gap: 12px;
  min-height: 56px;
  padding: 15px 20px;
  border: 1px solid #f47b0b;
  border-radius: 17px;
  background: #f47b0b;
  color: #171e21;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 0 0 rgba(146, 0, 57, 0);
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
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
  box-shadow: 0 8px 22px rgba(146, 0, 57, 0.16);
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
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.social-icon:hover {
  background: #920039;
  color: #fff;
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(146, 0, 57, 0.2);
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

  .intro h1::before {
    filter: blur(10px);
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

  .intro h1::before {
    filter: blur(8px);
    transform: translate(0, 5%);
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


/* =========================
   ROBOT MASCOT
========================= */

.robot-mascot {
  position: fixed;
  right: 4.2%;
  bottom: 78px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  pointer-events: none;
  transform: scale(0.75);
  transform-origin: bottom right;
}

/* Greeting bubble */
.robot-greeting {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 16px;
  border: 1px solid rgba(244, 123, 11, 0.5);
  border-radius: 15px;
  background: rgba(30, 32, 34, 0.96);
  color: #f4f4f4;
  font-size: 12px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.greeting-enter-active,
.greeting-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.greeting-enter-from,
.greeting-leave-to {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
}

.robot-greeting strong {
  color: #f47b0b;
  font-size: 15px;
}

.robot-wave-emoji {
  font-size: 22px;
  animation: greetingWave 1s ease-in-out 1s 3;
}

/* Robot structure */
.robot {
  position: relative;
  width: 100px;
  height: 105px;
  animation: robotFloat 3s ease-in-out 1.5s infinite;
}

.robot-head {
  position: absolute;
  top: 8px;
  left: 12px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 76px;
  height: 62px;
  border: 3px solid #f0f3f4;
  border-radius: 21px;
  background: linear-gradient(145deg, #e3e7e9, #aeb7bd);
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
}

.robot-antenna {
  position: absolute;
  top: 0;
  left: 47px;
  width: 5px;
  height: 13px;
  border-radius: 4px;
  background: #cbd1d5;
}

.robot-antenna::before {
  position: absolute;
  top: -5px;
  left: -3px;
  width: 11px;
  height: 11px;
  border: 2px solid #ffd1a5;
  border-radius: 50%;
  background: #f47b0b;
  box-shadow: 0 0 12px rgba(244, 123, 11, 0.8);
  content: "";
}

.robot-eye {
  width: 11px;
  height: 15px;
  border-radius: 50%;
  background: #ff8a1c;
  box-shadow:
    0 0 5px #f47b0b,
    0 0 12px rgba(244, 123, 11, 0.9);
  animation: robotBlink 4s infinite;
}

.robot-eye:nth-child(2) {
  animation-delay: 0.15s;
}

.robot-mouth {
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: 18px;
  height: 7px;
  border-bottom: 3px solid #f47b0b;
  border-radius: 50%;
  transform: translateX(-50%);
}

.robot-neck {
  position: absolute;
  top: 68px;
  left: 43px;
  width: 14px;
  height: 8px;
  background: #c3cbd0;
}

.robot-body {
  position: absolute;
  bottom: 0;
  left: 30px;
  width: 40px;
  height: 30px;
  border: 2px solid #edf0f2;
  border-radius: 10px 10px 14px 14px;
  background: #b7c0c5;
}

.robot-body::after {
  position: absolute;
  top: 8px;
  left: 12px;
  width: 12px;
  height: 5px;
  border-radius: 4px;
  background: #f47b0b;
  box-shadow: 0 0 8px rgba(244, 123, 11, 0.8);
  content: "";
}

/* Arms */
.robot-arm {
  position: absolute;
  top: 47px;
  width: 11px;
  height: 27px;
  border: 2px solid #e8edef;
  border-radius: 8px;
  background: #aeb8bd;
  transform-origin: top center;
}

.robot-arm-left {
  left: 13px;
  transform: rotate(18deg);
}

.robot-arm-right {
  top: 34px;
  right: 4px;
  z-index: 3;
  height: 29px;
  transform: rotate(-38deg);
}

.robot-arm-right.is-waving {
  animation: robotWave 1.1s ease-in-out 0.5s 3;
}

.robot-hand {
  position: absolute;
  top: -9px;
  left: -4px;
  width: 17px;
  height: 15px;
  border: 2px solid #f0f3f4;
  border-radius: 7px;
  background: #cbd2d6;
}

/* Animations */
@keyframes robotWave {
  0%, 100% {
    transform: rotate(-38deg);
  }
  25%, 65% {
    transform: rotate(-105deg);
  }
  45%, 85% {
    transform: rotate(-65deg);
  }
}

@keyframes greetingWave {
  0%, 100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(25deg);
  }
  50% {
    transform: rotate(-15deg);
  }
  75% {
    transform: rotate(20deg);
  }
}

@keyframes robotFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes robotBlink {
  0%, 45%, 48%, 100% {
    transform: scaleY(1);
  }
  46%, 47% {
    transform: scaleY(0.15);
  }
}

/* Smaller screens */
@media (max-width: 600px) {
  .robot-mascot {
    right: 10px;
    bottom: 70px;
    transform: scale(0.82);
  }

  .robot-greeting {
    padding: 9px 12px;
    font-size: 11px;
  }
}

/* Respect reduced-motion preferences */
@media (prefers-reduced-motion: reduce) {
  .robot-mascot,
  .robot,
  .robot-arm-right,
  .robot-wave-emoji,
  .robot-eye {
    animation: none !important;
  }
}

</style>
