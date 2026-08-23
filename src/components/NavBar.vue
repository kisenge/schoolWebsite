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
        <RouterLink to="/about" @click="closeMenu">About</RouterLink>
        <RouterLink to="/learning" @click="closeMenu">Learning</RouterLink>
        <RouterLink to="/contact" @click="closeMenu">Contact</RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* ============================================================
   1. STICKY WRAPPER (Locks flush to top of screen on scroll)
============================================================ */
.navbar-sticky-wrapper {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  width: 100%;
  margin: 0; /* Ensures no gap above the sticky wrapper */
  background-color: transparent;
}

/* ============================================================
   2. MOBILE BASE STYLES
============================================================ */
.navbar {
  width: 100%;
  margin: 0 auto; /* Removed the top 0.5rem margin */
  background-color: #bb55ef;
  padding: 0.75rem 1.25rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 0 0 12px 12px; /* Keeps rounded bottom corners on mobile */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

/* Row setup: Keeps logo LEFT and hamburger RIGHT on mobile */
.nav-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.brand-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #42b883;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
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
  gap: 1rem;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease-in-out, padding 0.35s ease;
}

.nav-links.is-open {
  max-height: 250px;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
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
    padding: 0.75rem 2rem;
    height: 80px;
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
    gap: 2rem;
  }

  .brand-logo {
    width: 60px;
    height: 60px;
  }
}

/* ============================================================
   4. DESKTOP (821px and up)
   Prevents logo/links from shifting into the center
============================================================ */
@media (min-width: 821px) {
  .navbar {
    height: 90px;
    padding: 1rem 3rem;
    width: 100%;
    max-width: 100%;
    border-radius: 0;
    margin: 0;
    box-sizing: border-box;
    justify-content: space-between; /* Keeps logo far left and menu far right */
  }

  .nav-links {
    gap: 3rem;
  }

  .brand-logo {
    width: 70px;
    height: 70px;
  }
}

/* ============================================================
   5. XLARGE & ULTRA WIDE SCREENS (1101px and up)
============================================================ */
@media (min-width: 1101px) {
  .navbar {
    padding: 1rem 4rem;
  }

  .nav-links a {
    font-size: 1.15rem;
  }

  .brand-logo {
    width: 75px;
    height: 75px;
  }
}
</style>