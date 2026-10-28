<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import About from "./views/About.vue";
import Certifications from "./views/Certifications.vue";
import Contact from "./views/Contact.vue";
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";

const route = useRoute();
const router = useRouter();
const activeSection = ref(String(route.name || "home"));
const showGreeting = ref(false);
const greetingMessage = ref("");
const greetingSupportingMessage = ref("");
const greetingIsCertificationOpportunity = ref(false);
const certificationOpportunityShown = ref(false);
const waveKey = ref(0);
const greetingDuration = 4000;
let sectionObserver;
let greetingTimeout;

const routeGreetings = {
  about: "Curious about me? Let me introduce myself!",
  projects: "Here are some projects I've been working on!",
  certifications: "Here's what I've been learning and achieving!",
  contact: "Want to connect? Let's talk!",
};

const navigation = [
  { id: "home", label: "Home", icon: "bi-house-door", component: Home },
  { id: "about", label: "About", icon: "bi-person", component: About },
  { id: "projects", label: "Projects", icon: "bi-folder2-open", component: Projects },
  {
    id: "certifications",
    label: "Certifications",
    icon: "bi-award",
    component: Certifications,
  },
  { id: "contact", label: "Contact", icon: "bi-envelope", component: Contact },
];

watch(
  () => route.fullPath,
  (_, __, onCleanup) => {
    window.clearTimeout(greetingTimeout);
    showGreeting.value = false;
    greetingIsCertificationOpportunity.value = false;
    greetingSupportingMessage.value = "";
    if (route.name !== "certifications") {
      certificationOpportunityShown.value = false;
    }
    greetingMessage.value =
      route.name === "home" || route.path === "/"
        ? "Welcome to my portfolio."
        : (routeGreetings[route.name] ?? "Welcome! Take a look around my portfolio.");
    waveKey.value += 1;
    showGreeting.value = true;

    greetingTimeout = window.setTimeout(() => {
      showGreeting.value = false;
    }, greetingDuration);

    onCleanup(() => window.clearTimeout(greetingTimeout));
  },
  { immediate: true },
);

function showCertificationOpportunity() {
  if (route.name !== "certifications" || certificationOpportunityShown.value) return;

  certificationOpportunityShown.value = true;
  window.clearTimeout(greetingTimeout);
  greetingIsCertificationOpportunity.value = true;
  greetingMessage.value = "Your next project could start here.";
  greetingSupportingMessage.value =
    "Looking for someone ready to learn, build, and contribute? Let's connect and explore what's possible.";
  showGreeting.value = true;
}

function dismissCertificationOpportunity() {
  showGreeting.value = false;
}

function scrollToSection(id, behavior = "smooth") {
  document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
}

watch(
  () => route.name,
  (name) => {
    const id = String(name || "home");
    if (activeSection.value === id) return;

    activeSection.value = id;
    scrollToSection(id);
  },
);

onMounted(async () => {
  await nextTick();
  scrollToSection(activeSection.value, "auto");

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleSection) return;

      const id = visibleSection.target.id;
      if (activeSection.value === id) return;

      activeSection.value = id;
      if (route.name !== "not-found" && route.name !== id) {
        router.replace({ name: id });
      }
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
  );

  navigation.forEach(({ id }) => {
    const section = document.getElementById(id);
    if (section) sectionObserver.observe(section);
  });
});

onBeforeUnmount(() => {
  sectionObserver?.disconnect();
});
</script>

<template>
  <div class="portfolio-layout">
    <aside class="sidebar">
      <RouterLink class="brand" to="/"> Owam<span>.</span> </RouterLink>

      <p class="menu-label">MENU</p>

      <nav class="sidebar-nav" aria-label="Main navigation">
        <RouterLink
          v-for="item in navigation"
          :key="item.id"
          :to="item.id === 'home' ? '/' : `/${item.id}`"
          class="nav-item"
          :class="{ active: activeSection === item.id }"
          :aria-label="item.label"
          :aria-current="activeSection === item.id ? 'page' : undefined"
          :title="item.label"
        >
          <i :class="['bi', item.icon]" aria-hidden="true"></i>
        </RouterLink>
      </nav>
    </aside>

    <main class="main-content">
      <section
        v-for="item in navigation"
        :id="item.id"
        :key="item.id"
        class="portfolio-section"
        :aria-label="item.label"
      >
        <component
          :is="item.component"
          @reach-bottom="item.id === 'certifications' && showCertificationOpportunity()"
        />
      </section>
    </main>

    <div class="robot-mascot" aria-label="Portfolio greeting mascot">
      <Transition name="greeting">
        <div v-if="showGreeting" class="robot-greeting" role="status">
          <span class="robot-wave-emoji" aria-hidden="true">👋</span>
          <strong>{{ greetingMessage }}</strong>
          <p v-if="greetingSupportingMessage" class="robot-greeting-supporting">
            {{ greetingSupportingMessage }}
          </p>
          <div v-if="greetingIsCertificationOpportunity" class="robot-message-actions">
            <RouterLink to="/contact">Let's talk</RouterLink>
            <button type="button" @click="dismissCertificationOpportunity">Maybe later</button>
          </div>
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
        <div :key="waveKey" class="robot-arm robot-arm-right" :class="{ 'is-waving': waveKey > 0 }">
          <div class="robot-hand"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-layout {
  min-height: 100vh;
}

.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 1000;
  width: 88px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 12px 20px;
  background: #e2e2e2;
  border-right: 1px solid #eee1e6;
}

.brand {
  color: #272329;
  font-size: 17px;
  font-weight: 800;
  text-decoration: none;
  letter-spacing: -1px;
  white-space: nowrap;
}

.brand span {
  color: #920039;
}

.menu-label {
  display: none;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 36px;
}

.nav-item {
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  color: #f47b0b;
  text-decoration: none;
  transition: all 0.25s ease;
}

.nav-item i {
  font-size: 20px;
}

.nav-item:hover,
.nav-item.active {
  color: #f47b0b;
  background: #fff0df;
}

.nav-item:hover {
  transform: translateY(-2px);
}

.main-content {
  min-width: 0;
  margin-left: 88px;
}

.portfolio-section {
  min-height: 100vh;
  scroll-margin-top: 0;
}

@media (max-width: 768px) {
  .sidebar {
    inset: 0 auto 0 0;
    width: 68px;
    height: 100vh;
    padding: 20px 8px;
    border-right: 1px solid #eee1e6;
    border-bottom: 0;
  }

  .brand {
    font-size: 15px;
  }

  .sidebar-nav {
    gap: 8px;
    margin-top: 28px;
    overflow-y: auto;
  }

  .nav-item {
    flex: 0 0 auto;
    width: 44px;
    height: 44px;
  }

  .nav-item i {
    font-size: 18px;
  }

  .main-content {
    margin-left: 68px;
  }

  .portfolio-section {
    min-height: 100vh;
    scroll-margin-top: 0;
  }
}

@media (max-height: 620px) and (min-width: 769px) {
  .sidebar {
    overflow-y: auto;
    padding: 18px 12px 14px;
  }

  .sidebar-nav {
    flex-shrink: 0;
    gap: 8px;
    margin-top: 24px;
  }

  .nav-item {
    width: 44px;
    height: 44px;
  }
}

.robot-mascot {
  --robot-scale: 0.58;

  position: fixed;
  right: calc(12px + env(safe-area-inset-right, 0px));
  bottom: calc(12px + env(safe-area-inset-bottom, 0px));
  z-index: 5;
  width: 0;
  height: 0;
  pointer-events: none;
}

.robot-greeting {
  position: absolute;
  right: 0;
  bottom: 74px;
  display: flex;
  width: min(260px, calc(100vw - 24px));
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

.robot-greeting-supporting {
  color: #f4f4f4;
  font-size: 12px;
  line-height: 1.45;
}

.robot-message-actions {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 4px;
  pointer-events: auto;
}

.robot-message-actions a,
.robot-message-actions button {
  padding: 0;
  border: 0;
  background: none;
  color: #f47b0b;
  font: inherit;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
}

.robot-wave-emoji {
  font-size: 22px;
  animation: greetingWave 1s ease-in-out 1s 3;
}

.robot {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100px;
  height: 105px;
  transform-origin: bottom right;
  transform: scale(var(--robot-scale));
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
  content: "";
}

.robot-eye {
  width: 11px;
  height: 15px;
  border-radius: 50%;
  background: #ff8a1c;
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
  content: "";
}

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

@keyframes robotWave {
  0%,
  100% {
    transform: rotate(-38deg);
  }
  25%,
  65% {
    transform: rotate(-105deg);
  }
  45%,
  85% {
    transform: rotate(-65deg);
  }
}

@keyframes greetingWave {
  0%,
  100% {
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
  0%,
  100% {
    transform: translateY(0) scale(var(--robot-scale));
  }
  50% {
    transform: translateY(-3px) scale(var(--robot-scale));
  }
}

@keyframes robotBlink {
  0%,
  45%,
  48%,
  100% {
    transform: scaleY(1);
  }
  46%,
  47% {
    transform: scaleY(0.15);
  }
}

@media (min-width: 601px) and (max-width: 1280px) {
  .robot-mascot {
    --robot-scale: 0.48;
  }

  .robot-greeting {
    bottom: 62px;
    width: min(240px, calc(100vw - 24px));
    padding: 10px 13px;
  }
}

@media (max-width: 600px) {
  .robot-mascot {
    --robot-scale: 0.32;
  }

  .robot-greeting {
    bottom: 46px;
    width: min(180px, calc(100vw - 24px));
    padding: 7px 9px;
    font-size: 10px;
  }

  .robot-greeting strong {
    font-size: 11px;
  }
}

@media (max-width: 380px) {
  .robot-mascot {
    --robot-scale: 0.29;
  }

  .robot-greeting {
    bottom: 43px;
    width: min(165px, calc(100vw - 24px));
    padding: 6px 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .robot,
  .robot-arm-right,
  .robot-wave-emoji,
  .robot-eye {
    animation: none !important;
  }

  .greeting-enter-active,
  .greeting-leave-active {
    transition: none;
  }
}
</style>
