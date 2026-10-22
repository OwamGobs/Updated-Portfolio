<template>
  <main class="contact-page">
    <section class="contact-content">
      <p class="eyebrow">LET'S CONNECT</p>
      <h1>
        Have an idea?
        <span>Let's talk.</span>
      </h1>
      <p class="intro">
        I’m open to conversations about projects, collaboration, and
        opportunities. Choose a way to get in touch.
      </p>

      <div class="contact-options">
        <a class="contact-option" href="mailto:owamgobingca@gmail.com">
          <i class="bi bi-envelope" aria-hidden="true"></i>
          <span>
            <strong>Email</strong>
            <small>owamgobingca@gmail.com</small>
          </span>
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
        <a
          class="contact-option"
          href="https://www.linkedin.com/in/owam-gobingca-08650b324/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-linkedin" aria-hidden="true"></i>
          <span>
            <strong>LinkedIn</strong>
            <small>Connect with me professionally</small>
          </span>
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
        <a
          class="contact-option"
          href="https://github.com/OwamGobs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-github" aria-hidden="true"></i>
          <span>
            <strong>GitHub</strong>
            <small>Explore my projects</small>
          </span>
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 72px clamp(24px, 7vw, 100px);
  color: #f5f2f3;
  background: radial-gradient(
    ellipse at 38% 48%,
    #3f3f3f 0%,
    #696969 54%,
    #969696 100%
  );
}

.contact-content {
  width: min(100%, 760px);
}

.eyebrow {
  margin-bottom: 18px;
  color: #920039;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}

h1 {
  margin: 0;
  font-size: clamp(42px, 7vw, 76px);
  font-weight: 800;
  letter-spacing: -3px;
  line-height: 1.05;
}

h1 span {
  display: block;
  color: #f47b0b;
}

.intro {
  max-width: 560px;
  margin: 24px 0 36px;
  color: #e6dfe2;
  font-size: 16px;
  line-height: 1.8;
}

.contact-options {
  display: grid;
  gap: 12px;
}

.contact-option {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #272329;
  background: #fff;
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.contact-option:hover {
  transform: translateY(-2px);
  border-color: #f47b0b;
}

.contact-option > i {
  color: #920039;
  font-size: 22px;
}

.contact-option > span:nth-child(2) {
  display: grid;
  gap: 4px;
}

.contact-option strong {
  font-size: 15px;
}

.contact-option small {
  color: #817980;
  font-size: 13px;
}

.arrow {
  margin-left: auto;
  color: #920039;
  font-size: 20px;
}

@media (max-width: 768px) {
  .contact-page {
    min-height: calc(100vh - 94px);
    padding: 52px 24px;
  }

  h1 {
    letter-spacing: -2px;
  }
}
</style>
