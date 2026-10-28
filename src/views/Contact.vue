<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const statusMessage = ref("");

function submitForm() {
  const body = [
    `Name: ${form.value.name}`,
    `Email: ${form.value.email}`,
    "",
    form.value.message,
  ].join("\n");
  const mailtoUrl = `mailto:owamgobingca@gmail.com?subject=${encodeURIComponent(form.value.subject)}&body=${encodeURIComponent(body)}`;

  statusMessage.value = "Opening your email app with the message ready to send.";
  window.location.href = mailtoUrl;
}
</script>

<template>
  <main class="contact-page">
    <section class="contact-content">
      <p class="eyebrow">LET'S CONNECT</p>
      <h1>
        Have an idea?
        <span>Let's talk.</span>
      </h1>
      <p class="intro">
        I’m open to conversations about projects, collaboration, and opportunities. Choose a way to
        get in touch.
      </p>

      <div class="contact-options">
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

    <section class="message-section">
      <p class="eyebrow">SEND A MESSAGE</p>
      <h2>Let's start a conversation.</h2>
      <p class="form-intro">Have a project or opportunity in mind? Send me a message.</p>

      <form @submit.prevent="submitForm">
        <div class="field">
          <label for="contact-name">Full Name</label>
          <input
            id="contact-name"
            v-model.trim="form.name"
            name="name"
            type="text"
            placeholder="Your full name"
            required
          />
        </div>

        <div class="field">
          <label for="contact-email">Email Address</label>
          <input
            id="contact-email"
            v-model.trim="form.email"
            name="email"
            type="email"
            placeholder="Your email address"
            required
          />
        </div>

        <div class="field">
          <label for="contact-subject">Subject</label>
          <input
            id="contact-subject"
            v-model.trim="form.subject"
            name="subject"
            type="text"
            placeholder="What is this regarding?"
            required
          />
        </div>

        <div class="field">
          <label for="contact-message">Message</label>
          <textarea
            id="contact-message"
            v-model.trim="form.message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button type="submit" class="send-button">
          Send Message
          <span aria-hidden="true">↗</span>
        </button>

        <p v-if="statusMessage" class="success" role="status">
          {{ statusMessage }}
        </p>
      </form>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: clamp(32px, 6vw, 80px);
  padding: 72px clamp(24px, 7vw, 100px);
  color: #f5f2f3;
  background: var(--page-background);
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

/* Contact form */
.message-section {
  width: 100%;
}

.message-section h2 {
  margin: 0 0 12px;
  font-size: clamp(25px, 3vw, 34px);
  font-weight: 800;
  color: #f5f2f3;
}

.form-intro {
  margin-bottom: 24px;
  color: #e6dfe2;
  line-height: 1.7;
}

.message-section form {
  display: grid;
  gap: 18px;
}

.field {
  display: grid;
  gap: 8px;
}

.field label {
  color: #f5f2f3;
  font-size: 14px;
  font-weight: 600;
}

.field input,
.field textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 13px 15px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 9px;
  background: #fff;
  color: #272329;
  font: inherit;
  font-size: 14px;
}

.field input:focus,
.field textarea:focus {
  outline: 2px solid #f47b0b;
  outline-offset: 2px;
}

.field textarea {
  resize: vertical;
}

.send-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  border: none;
  border-radius: 9px;
  background: #f47b0b;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.send-button span {
  color: #fff;
}

.send-button:hover {
  background: #d96500;
}

.send-button:disabled {
  opacity: 0.7;
  cursor: wait;
}

.success,
.error {
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
}

.success {
  color: #d8ffe5;
  background: #185c3b;
}

.error {
  color: #ffe1e1;
  background: #792a35;
}

@media (max-width: 768px) {
  .contact-page {
    grid-template-columns: 1fr;
    min-height: calc(100vh - 94px);
    padding: 52px 24px;
  }

  h1 {
    letter-spacing: -2px;
  }
}
</style>
