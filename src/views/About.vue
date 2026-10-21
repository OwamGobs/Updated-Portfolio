<template>
  <div class="about-page">
    <!-- About Hero -->
    <main>
      <section class="about-hero">
        <div class="about-heading">
          <p class="eyebrow">GET TO KNOW ME</p>

          <h1>
            A little about
            <span>me.</span>
          </h1>
        </div>

        <div class="about-body">
          <div class="about-content">
            <h2>
              Hello! I'm <span>Owam Gobinca</span>, an aspiring software
              developer.
            </h2>

            <p class="intro">
              I’m Owam, an aspiring software developer with a passion for
              technology, creativity and problem-solving. My journey into
              software development began in high school, where I was introduced
              to Delphi and became interested in understanding how applications
              work and how code can be used to bring ideas to life.
            </p>

            <p class="intro about-continuation">
              I’m currently developing my skills at Life Choices Academy, where
              I’ve been building a foundation in web development and
              programming. Through hands-on projects, I’ve gained experience
              with HTML, CSS, JavaScript, and Python, while also learning to use
              Git and GitHub to manage and collaborate on projects.
            </p>

            <p>
              I enjoy turning ideas into functional, user-friendly websites and
              exploring new technologies that challenge me to grow. Working on
              individual and team projects has helped me strengthen my
              problem-solving skills, adapt to challenges, and understand the
              importance of collaboration in software development.
            </p>

            <p class="intro">
              As I continue to grow as a developer, I'm always learning new
              skills, exploring different technologies, and challenging myself
              to build better projects. My goal is to create digital solutions
              that are useful, accessible, and enjoyable to use.
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

          <p class="intro about-continuation">
            I’m currently developing my skills at Life Choices Academy, where
            I’ve been building a foundation in web development and programming.
            Through hands-on projects, I’ve gained experience with HTML, CSS,
            JavaScript, and Python, while also learning to use Git and GitHub to
            manage and collaborate on projects. I enjoy turning ideas into
            functional, user-friendly websites and exploring new technologies
            that challenge me to grow. Working on individual and team projects
            has helped me strengthen my problem-solving skills, adapt to
            challenges, and understand the importance of collaboration in
            software development.
          </p>
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
          I'm excited to keep learning, collaborate with others, and turn new
          ideas into projects that make a difference.
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
  </div>
</template>

<style scoped>
.about-page {
  --orange: #e87535;
  --burgundy: #651b32;
  --text: #f5f2f3;
  --muted: #e6dfe2;
  --surface: #ffffff;

  min-height: 100vh;
  color: var(--text);
  background: radial-gradient(
    ellipse at 38% 48%,
    #3f3f3f 0%,
    #696969 54%,
    #969696 100%
  );
  font-family: Arial, Helvetica, sans-serif;
}

.about-hero {
  max-width: 1280px;
  margin: 0 auto;
  padding: 75px 8% 100px;
}

.about-body {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(180px, 0.85fr);
  align-items: start;
  gap: clamp(24px, 5vw, 75px);
}

.eyebrow {
  color: var(--orange);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 3px;
  margin: 0 0 20px;
}

.about-heading h1 {
  margin: 0 0 26px;
  font-size: clamp(3rem, 5.5vw, 5.3rem);
  line-height: 1.04;
  letter-spacing: -3px;
  font-weight: 800;
}

.about-heading h1 span {
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
  color: #f5f2f3;
  font-size: 1rem;
  line-height: 1.9;
  margin: 0 0 17px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
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
  transition:
    transform 0.2s ease,
    background 0.2s ease;
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

.about-continuation {
  grid-column: 2;
  max-width: 410px;
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
  --muted: #706b72;

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

.closing-section h2 {
  margin: 0 0 18px;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -1.5px;
  line-height: 1.2;
}

.closing-section > p:not(.eyebrow) {
  color: var(--muted);
  line-height: 1.8;
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

@media (max-width: 560px) {
  .about-body {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .about-continuation {
    grid-column: 1;
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
}

@media (max-width: 560px) {
  .about-hero {
    padding: 45px 6% 75px;
  }

  .about-heading h1 {
    letter-spacing: -1.5px;
  }

  .floating-note {
    left: -8px;
    bottom: 20px;
    padding: 12px;
  }

  .footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
