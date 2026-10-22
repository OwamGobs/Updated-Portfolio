<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import About from './views/About.vue'
import Certifications from './views/Certifications.vue'
import Contact from './views/Contact.vue'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'

const route = useRoute()
const router = useRouter()
const activeSection = ref(String(route.name || 'home'))
let sectionObserver

const navigation = [
  { id: 'home', label: 'Home', icon: 'bi-house-door', component: Home },
  { id: 'about', label: 'About', icon: 'bi-person', component: About },
  { id: 'projects', label: 'Projects', icon: 'bi-folder2-open', component: Projects },
  {
    id: 'certifications',
    label: 'Certifications',
    icon: 'bi-award',
    component: Certifications,
  },
  { id: 'contact', label: 'Contact', icon: 'bi-envelope', component: Contact },
]

function scrollToSection(id, behavior = 'smooth') {
  document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' })
}

watch(
  () => route.name,
  (name) => {
    const id = String(name || 'home')
    if (activeSection.value === id) return

    activeSection.value = id
    scrollToSection(id)
  },
)

onMounted(async () => {
  await nextTick()
  scrollToSection(activeSection.value, 'auto')

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (!visibleSection) return

      const id = visibleSection.target.id
      if (activeSection.value === id) return

      activeSection.value = id
      if (route.name !== id) {
        router.replace({ name: id })
      }
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
  )

  navigation.forEach(({ id }) => {
    const section = document.getElementById(id)
    if (section) sectionObserver.observe(section)
  })
})

onBeforeUnmount(() => {
  sectionObserver?.disconnect()
})
</script>

<template>
  <div class="portfolio-layout">
    <aside class="sidebar">
      <RouterLink class="brand" to="/">
        Owam<span>.</span>
      </RouterLink>

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
        <component :is="item.component" />
      </section>
    </main>
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
  background: #fff;
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
  color: #625b63;
  text-decoration: none;
  transition: all 0.25s ease;
}

.nav-item i {
  font-size: 20px;
}

.nav-item:hover,
.nav-item.active {
  color: #920039;
  background: #f8eaf0;
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
</style>
