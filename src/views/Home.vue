<script setup>
import profilePhoto from "../assets/profile.jpg";
</script>

<template>
  <main id="home" class="hero">
    <!-- Navigation -->
    <header class="navbar">
      <a href="#home" class="logo">
        <span>Owam</span>
        <span class="logo-accent">Gobinca_</span>
      </a>

      <nav class="nav-links">
        <a href="#home" class="active">Home</a>
        <RouterLink to="/about">About</RouterLink>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <!-- Hero content -->
    <section class="hero-content">
      <div class="intro">
        <h1>
          Turning Ideas Into<br />
          Functional Web<br />
          Experiences.
        </h1>

        <h2>Hi, I'm Owam Gobinca</h2>

        <p class="subtitle">An aspiring software developer</p>

        <a href="#work" class="projects-button">
          View my projects
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <!-- Profile photo -->
      <div class="portrait-wrapper">
        <img
          :src="profilePhoto"
          alt="Portrait of Owam Gobinca"
          class="portrait"
        />
      </div>
    </section>

    <!-- Bottom accent -->
    <div class="bottom-strip"></div>
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap");

:root {
  font-family: "Inter", sans-serif;
  color: #171e21;
  background: #e8e4e5;
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

.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 24px 4.2% 32px;
  background:
    radial-gradient(
      ellipse at 12% 75%,
      rgba(255, 246, 247, 0.95) 0%,
      transparent 48%
    ),
    linear-gradient(115deg, #ded9da 0%, #c9c4c5 48%, #a8a6a7 100%);
}

/* Navigation */

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  position: relative;
  z-index: 2;
}

.logo {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 0.98;
  font-weight: 800;
  letter-spacing: -1px;
}

.logo-accent {
  color: #d47a1b;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: clamp(30px, 5.5vw, 85px);
}

.nav-links a {
  font-size: 16px;
  font-weight: 600;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: #a95616;
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

.intro h1 {
  margin: 0 0 28px;
  font-size: clamp(42px, 6.15vw, 94px);
  line-height: 1.02;
  font-weight: 800;
  font-style: italic;
  letter-spacing: -0.075em;
}

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

.subtitle {
  margin: 0 0 22px;
  font-size: clamp(20px, 3.1vw, 44px);
  line-height: 1.2;
  font-weight: 700;
  font-style: italic;
  letter-spacing: -0.065em;
}

/* Projects button */

.projects-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 56px;
  padding: 15px 20px;
  border-radius: 17px;
  background: #f47b0b;
  color: #171e21;
  font-size: 16px;
  font-weight: 500;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.projects-button span {
  font-size: 23px;
  line-height: 1;
}

.projects-button:hover {
  background: #ff922b;
  transform: translateY(-3px);
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
  border-radius: 24% 24% 24% 24%;
}

/* Burgundy bottom line */

.bottom-strip {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 9px;
  background: #920039;
}

/* Tablets */

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

  .nav-links {
    gap: 25px;
  }
}

/* Mobile phones */

@media (max-width: 600px) {
  .hero {
    min-height: 100svh;
    padding: 22px 6% 35px;
  }

  .navbar {
    align-items: flex-start;
    gap: 18px;
  }

  .logo {
    font-size: 17px;
    flex-shrink: 0;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 12px 18px;
  }

  .nav-links a {
    font-size: 12px;
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
}
</style>
