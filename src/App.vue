
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const navigation = [
  { id: 'home', label: 'Home', icon: 'bi-house-door' },
  { id: 'about', label: 'About', icon: 'bi-person' },
  { id: 'projects', label: 'Projects', icon: 'bi-folder2-open' },
  { id: 'certifications', label: 'Certifications', icon: 'bi-award' },
  { id: 'contact', label: 'Contact', icon: 'bi-envelope' }
]
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
          :class="{ active: route.name === item.id }"
          :aria-label="item.label"
          :title="item.label"
        >
          <i :class="['bi', item.icon]" aria-hidden="true"></i>
        </RouterLink>
      </nav>

    </aside>

    <main class="main-content">
      <RouterView />
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

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    min-height: 0;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 16px;
    border-right: 0;
    border-bottom: 1px solid #eee1e6;
  }

  .sidebar .menu-label {
    display: none;
  }

  .sidebar-nav {
    flex-direction: row;
    gap: 6px;
    margin-top: 0;
    overflow-x: auto;
  }

  .nav-item {
    flex: 0 0 auto;
    width: 40px;
    height: 40px;
  }

  .nav-item i {
    font-size: 18px;
  }

  .main-content {
    margin-left: 0;
    padding-top: 94px;
  }

  .portfolio-section {
    scroll-margin-top: 94px;
  }
}

@media (max-height: 620px) and (min-width: 769px) {
  .sidebar {
    overflow-y: auto;
    padding: 18px 12px 14px;
  }

  .sidebar-nav {
    flex-shrink: 0;
  }

  .sidebar-nav {
    gap: 8px;
    margin-top: 24px;
  }

  .nav-item {
    width: 44px;
    height: 44px;
  }

}
</style>