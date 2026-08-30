<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="navbar-sticky-wrapper">
    <nav class="navbar" :class="{ 'is-scrolled': isScrolled }">
      <!-- Top Bar: Logo (Left) and Hamburger (Right) -->
      <div class="nav-header">
        <RouterLink to="/" class="nav-brand" @click="closeMenu">
          <img src="/ek-logo.jpeg" alt="Evermont Kids Logo" class="brand-logo" />
        </RouterLink>

        <button 
          class="hamburger" 
          :class="{ 'is-active': isMenuOpen }"
          @click="toggleMenu"
          aria-label="Toggle navigation"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>

      <!-- Navigation Links -->
      <div class="nav-links" :class="{ 'is-open': isMenuOpen }">
        <RouterLink to="/" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/learning" @click="closeMenu">Learning</RouterLink>
        <RouterLink to="/our-days" @click="closeMenu">Our Days</RouterLink>
        <RouterLink to="/contact-us" @click="closeMenu">Contact</RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* ============================================================
   1. STICKY WRAPPER
============================================================ */
.navbar-sticky-wrapper {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  width: 100%;
  max-width: 100%; /* REPLACED 100vw with 100% */
  margin: 0;
  background-color: transparent;
  overflow-x: hidden;
}

/* ============================================================
   2. MOBILE BASE STYLES (Up to 570px)
============================================================ */
.navbar {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  background-color: #bb55ef;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.nav-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

.nav-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-logo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #42b883;
  flex-shrink: 0;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
}

.hamburger .bar {
  width: 100%;
  height: 3px;
  background-color: #ffffff;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger.is-active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.is-active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active .bar:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease-in-out, padding 0.35s ease;
  box-sizing: border-box;
}

.nav-links.is-open {
  max-height: 250px;
  padding-top: 0.85rem;
  padding-bottom: 0.5rem;
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #fbeb0f;
}

/* ============================================================
   3. TABLETS (571px to 820px)
============================================================ */
@media (min-width: 571px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1.5rem;
    min-height: 60px;
    height: auto; /* Replaced rigid height with flexible min-height */
  }

  .nav-header {
    width: auto;
  }

  .hamburger {
    display: none;
  }

  .nav-links {
    flex-direction: row;
    justify-content: flex-end;
    width: auto;
    max-height: none;
    overflow: visible;
    padding: 0;
    gap: 1.5rem;
  }

  .nav-links a {
    font-size: 0.95rem;
  }

  .brand-logo {
    width: 54px;
    height: 54px;
  }
}

/* ============================================================
   4. DESKTOP (821px to 1100px)
============================================================ */
@media (min-width: 821px) {
  .navbar {
    min-height: 60px;
    padding: 0rem 2rem;
    border-radius: 0;
  }

  .nav-links {
    gap: 2rem;
  }

  .nav-links a {
    font-size: 1rem;
  }

  .brand-logo {
    width: 60px;
    height: 60px;
  }
}

/* ============================================================
   5. XLARGE & ULTRA WIDE SCREENS (1101px and up)
============================================================ */
@media (min-width: 1101px) {
  .navbar {
    padding: 0 3rem;
  }

  .nav-links {
    gap: 2.5rem;
  }

  .nav-links a {
    font-size: 1.05rem;
  }

  .brand-logo {
    width: 65px;
    height: 65px;
  }
}
</style>