
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Certifications from './views/Certifications.vue'

const activeSection = ref('home')

const navigation = [
  { id: 'home', label: 'Home', icon: 'bi-house-door' },
  { id: 'about', label: 'About', icon: 'bi-person' },
  { id: 'projects', label: 'Projects', icon: 'bi-folder2-open' },
  { id: 'certifications', label: 'Certifications', icon: 'bi-award' },
  { id: 'contact', label: 'Contact', icon: 'bi-envelope' }
]

function goToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

function updateActiveSection() {
  const sections = document.querySelectorAll('.portfolio-section')
  let current = 'home'

  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.4) {
      current = section.id
    }
  })

  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>
<style scoped>
.portfolio-layout {
  min-height: 100vh;
}

.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 1000;
  width: 245px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 34px 22px 24px;
  background: #fff;
  border-right: 1px solid #eee1e6;
}

.brand {
  color: #272329;
  font-size: 22px;
  font-weight: 800;
  text-decoration: none;
  letter-spacing: -1px;
}

.brand span {
  color: #920039;
}

.menu-label {
  margin: 38px 0 16px 10px;
  color: #817980;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 13px 12px;
  border-radius: 9px;
  color: #625b63;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
}

.nav-item i {
  font-size: 18px;
}

.nav-item:hover,
.nav-item.active {
  color: #920039;
  background: #f8eaf0;
}

.nav-item:hover {
  transform: translateX(3px);
}

.main-content {
  min-width: 0;
  margin-left: 245px;
}

.sidebar-bottom {
  margin-top: auto;
}

.sidebar-bottom .menu-label {
  margin-top: 0;
}

.social-links {
  display: flex;
  gap: 10px;
  padding-left: 10px;
}

.social-links a {
  display: flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee1e6;
  border-radius: 50%;
  color: #920039;
  text-decoration: none;
  transition: all 0.25s ease;
}

.social-links a:hover {
  color: #fff;
  background: #920039;
  transform: translateY(-3px);
}

.copyright {
  margin: 20px 0 0 10px;
  color: #817980;
  font-size: 10px;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    min-height: 0;
    padding: 12px 16px;
    border-right: 0;
    border-bottom: 1px solid #eee1e6;
  }

  .sidebar .menu-label,
  .sidebar-bottom {
    display: none;
  }

  .sidebar-nav {
    flex-direction: row;
    gap: 4px;
    margin-top: 10px;
    overflow-x: auto;
  }

  .nav-item {
    flex: 0 0 auto;
    gap: 6px;
    padding: 9px;
    font-size: 11px;
  }

  .nav-item i {
    font-size: 14px;
  }

  .main-content {
    margin-left: 0;
    padding-top: 94px;
  }

  .portfolio-section {
    scroll-margin-top: 94px;
  }
}
</style>