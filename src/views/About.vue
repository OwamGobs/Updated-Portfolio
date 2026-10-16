
<template>
  <div class="about-page">
    <!-- Navigation -->
    <header class="navbar">
      <RouterLink to="/" class="logo">
        Owam Gobinca<span>_</span>
      </RouterLink>

      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/About" class="active">About</RouterLink>
        <RouterLink to="/projects">Work</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </header>

    <!-- About Hero -->
    <main>
      <section class="about-hero">
        <div class="about-content">
          <p class="eyebrow">GET TO KNOW ME</p>

          <h1>
            A little about
            <span>me.</span>
          </h1>

          <h2>
            Hello! I'm <span>Owam Gobinca</span>,
            an aspiring software developer.
          </h2>

          <p class="intro">
            I'm passionate about technology, creativity, and building
            digital experiences that solve real problems. I enjoy turning
            ideas into functional, user-friendly websites and applications.
          </p>

          <p class="intro">
            As I continue to grow as a developer, I'm always learning new
            skills, exploring different technologies, and challenging
            myself to build better projects. My goal is to create digital
            solutions that are useful, accessible, and enjoyable to use.
          </p>

          <RouterLink to="/projects" class="primary-button">
            Explore my work <span>↗</span>
          </RouterLink>
        </div>

        <div class="about-visual">
          <div class="image-frame">
            <img
              src="../assets/profile.jpg"
              alt="Portrait of Owam Gobinca"
              class="profile-image"
            />
          </div>

          <div class="floating-note">
            <span class="note-icon">✦</span>
            <div>
              <strong>Always learning</strong>
              <p>Building. Improving. Growing.</p>
            </div>
          </div>

          <span class="decorative-dot dot-one"></span>
          <span class="decorative-dot dot-two"></span>
        </div>
      </section>

      <!-- Skills and interests -->
      <section class="details-section">
        <div class="section-heading">
          <p class="eyebrow">WHAT I BRING</p>
          <h2>My journey & interests</h2>
          <p>
            A growing skill set, a curious mindset, and a passion for
            creating meaningful digital experiences.
          </p>
        </div>

        <div class="details-grid">
          <article class="detail-card">
            <span class="card-number">01</span>
            <h3>Web Development</h3>
            <p>
              Building responsive websites and interactive interfaces
              using HTML, CSS, JavaScript, and Vue.js.
            </p>
          </article>

          <article class="detail-card">
            <span class="card-number">02</span>
            <h3>Problem Solving</h3>
            <p>
              Breaking down challenges, learning from mistakes, and
              finding practical solutions through code.
            </p>
          </article>

          <article class="detail-card">
            <span class="card-number">03</span>
            <h3>Creative Thinking</h3>
            <p>
              Exploring design ideas and creating clean, accessible,
              and user-friendly digital experiences.
            </p>
          </article>
        </div>
      </section>

      <!-- Personal statement -->
      <section class="closing-section">
        <p class="eyebrow">LOOKING AHEAD</p>
        <h2>
          I'm just getting started.
          <span>There's more to build.</span>
        </h2>
        <p>
          I'm excited to keep learning, collaborate with others, and turn
          new ideas into projects that make a difference.
        </p>
        <RouterLink to="/contact" class="secondary-button">
          Let's connect <span>↗</span>
        </RouterLink>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} Owam Gobinca</p>
      <p>Designed with purpose. Built with passion.</p>
    </footer>

    <div class="bottom-strip"></div>
  </div>
</template>

<style scoped>
.about-page {
  --orange: #e87535;
  --burgundy: #651b32;
  --text: #29252b;
  --muted: #706b72;
  --surface: #ffffff;

  min-height: 100vh;
  color: var(--text);
  background: linear-gradient(135deg, #f8f7f8 0%, #eeebef 100%);
  font-family: Arial, Helvetica, sans-serif;
}

.navbar {
  min-height: 88px;
  padding: 20px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.logo {
  color: var(--text);
  text-decoration: none;
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.7px;
}

.logo span {
  color: var(--orange);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links a {
  color: #504a52;
  text-decoration: none;
  font-size: 0.94rem;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--orange);
}

.about-hero {
  max-width: 1280px;
  margin: 0 auto;
  padding: 75px 8% 100px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 75px;
}

.eyebrow {
  color: var(--orange);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 3px;
  margin: 0 0 20px;
}

.about-content h1 {
  margin: 0 0 26px;
  font-size: clamp(3rem, 5.5vw, 5.3rem);
  line-height: 1.04;
  letter-spacing: -3px;
  font-weight: 800;
}

.about-content h1 span {
  color: var(--orange);
  font-style: italic;
}

.about-content h2 {
  max-width: 570px;
  margin: 0 0 20px;
  font-size: 1.3rem;
  line-height: 1.6;
  font-weight: 600;
}

.about-content h2 span {
  color: var(--burgundy);
}

.intro {
  max-width: 590px;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.9;
  margin: 0 0 17px;
}

.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 20px;
  padding: 15px 23px;
  border-radius: 5px;
  background: var(--orange);
  color: white;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;
}

.primary-button:hover,
.secondary-button:hover {
  background: var(--burgundy);
  transform: translateY(-2px);
}

.about-visual {
  position: relative;
  max-width: 410px;
  width: 100%;
  justify-self: center;
}

.image-frame {
  position: relative;
  padding: 15px;
  border: 2px solid rgba(101, 27, 50, 0.18);
  border-radius: 48% 48% 12px 12px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 18px 18px 0 rgba(101, 27, 50, 0.08);
}

.profile-image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center;
  border-radius: 48% 48% 8px 8px;
}

.floating-note {
  position: absolute;
  bottom: 35px;
  left: -45px;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 17px 20px;
  border-radius: 8px;
  background: var(--surface);
  box-shadow: 0 12px 35px rgba(35, 22, 35, 0.12);
}

.note-icon {
  color: var(--orange);
  font-size: 1.8rem;
}

.floating-note strong {
  font-size: 0.9rem;
}

.floating-note p {
  color: var(--muted);
  font-size: 0.75rem;
  margin: 5px 0 0;
}

.decorative-dot {
  position: absolute;
  display: block;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: var(--orange);
}

.dot-one {
  top: 35px;
  right: -23px;
}

.dot-two {
  bottom: 10px;
  right: 20px;
  width: 10px;
  height: 10px;
  background: var(--burgundy);
}

.details-section {
  padding: 85px 8% 100px;
  background: rgba(255, 255, 255, 0.62);
}

.section-heading {
  max-width: 650px;
  margin: 0 auto 45px;
  text-align: center;
}

.section-heading h2,
.closing-section h2 {
  margin: 0 0 18px;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -1.5px;
  line-height: 1.2;
}

.section-heading > p:last-child,
.closing-section > p:not(.eyebrow) {
  color: var(--muted);
  line-height: 1.8;
}

.details-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.detail-card {
  padding: 30px;
  border: 1px solid #e9e2e7;
  border-radius: 10px;
  background: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.detail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(40, 20, 35, 0.08);
}

.card-number {
  color: var(--orange);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 2px;
}

.detail-card h3 {
  margin: 23px 0 12px;
  font-size: 1.2rem;
}

.detail-card p {
  color: var(--muted);
  line-height: 1.8;
  font-size: 0.93rem;
  margin: 0;
}

.closing-section {
  max-width: 850px;
  margin: 0 auto;
  padding: 100px 8%;
  text-align: center;
}

.closing-section h2 span {
  display: block;
  color: var(--burgundy);
  font-style: italic;
}

.closing-section > p:not(.eyebrow) {
  max-width: 650px;
  margin: 0 auto;
}

.footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 25px 8%;
  color: #777078;
  font-size: 0.83rem;
}

.bottom-strip {
  height: 9px;
  background: var(--burgundy);
}

@media (max-width: 850px) {
  .about-hero {
    grid-template-columns: 1fr;
    gap: 60px;
    padding-top: 55px;
  }

  .about-content {
    text-align: center;
  }

  .about-content h2,
  .intro {
    margin-left: auto;
    margin-right: auto;
  }

  .about-visual {
    width: min(100%, 370px);
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .detail-card {
    padding: 25px;
  }
}

@media (max-width: 560px) {
  .navbar {
    flex-direction: column;
    padding: 22px 5%;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 17px;
  }

  .about-hero {
    padding: 45px 6% 75px;
  }

  .about-content h1 {
    letter-spacing: -1.5px;
  }

  .floating-note {
    left: -8px;
    bottom: 20px;
    padding: 12px;
  }

  .details-section {
    padding: 70px 6%;
  }

  .footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
