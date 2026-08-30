<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const classesData = ref([
  {
    id: 'sparrows',
    ageGroup: 'Under 3 years',
    name: 'Sparrows',
    image: 'sparrow.png', // Replace with your actual image path
    description: 'Description to follow'
  },
  {
    id: 'blue-jays',
    ageGroup: 'Age 3 (by October 14th)',
    name: 'Blue Jays',
    image: 'blue-jay.png', // Replace with your actual image path
    description: 'Description to follow'
  },
  {
    id: 'ravens',
    ageGroup: 'Age 4',
    name: 'Ravens',
    image: 'crow.png', // Replace with your actual image path
    description: 'Description to follow'
  },
  {
    id: 'wise-owls',
    ageGroup: 'Age 5',
    name: 'Wise Owls',
    image: 'barn-owl.png', // Replace with your actual image path
    description: 'Description to follow'
  }
])

const trackRef = ref(null)
const activeIndex = ref(0)

function handleScroll() {
  const track = trackRef.value
  if (!track) return
  const cardWidth = track.clientWidth
  const index = Math.round(track.scrollLeft / cardWidth)
  activeIndex.value = Math.min(Math.max(index, 0), classesData.value.length - 1)
}

function goToCard(index) {
  const track = trackRef.value
  if (!track) return
  const cardWidth = track.clientWidth
  track.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
  activeIndex.value = index
}

onMounted(() => {
  trackRef.value?.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  trackRef.value?.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="classes-container">
    <h2 class="section-title">Classes</h2>

    <!-- Grid / Carousel Container -->
    <div class="classes-grid" ref="trackRef">
      <div 
        v-for="item in classesData" 
        :key="item.id" 
        class="class-card"
      >
        <div class="age-badge">{{ item.ageGroup }}</div>
        
        <div class="card-image-wrapper">
          <img 
            :src="item.image" 
            :alt="`${item.name} Class`" 
            class="card-image" 
          />
        </div>

        <div class="card-body">
          <h3 class="class-name">{{ item.name }}</h3>
          <p class="class-description">{{ item.description }}</p>
        </div>
      </div>
    </div>

    <!-- Carousel Dots (mobile only) -->
    <div class="carousel-dots" role="tablist" aria-label="Class carousel navigation">
      <button
        v-for="(item, index) in classesData"
        :key="`dot-${item.id}`"
        class="dot"
        :class="{ 'dot-active': index === activeIndex }"
        role="tab"
        :aria-selected="index === activeIndex"
        :aria-label="`Go to ${item.name}`"
        @click="goToCard(index)"
      ></button>
    </div>
  </section>
</template>

<style scoped>
/* ============================================================
   1. SECTION WRAPPER & HEADING
============================================================ */
.classes-container {
  width: 100%;
  max-width: 100%;
  padding: 1rem 0; /* Removed horizontal padding so full-bleed carousel scrolls edge-to-edge */
  box-sizing: border-box;
  overflow-x: hidden; /* Prevents overflow leaking out to body */
}

.section-title {
  text-align: center;
  font-size: 1.75rem; /* Scaled down slightly for mobile header hierarchy */
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
}

/* ============================================================
   2. MOBILE BASE STYLES (Up to 570px)
   Horizontal snap-scrolling carousel, one card at a time
============================================================ */
.classes-grid {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  padding: 0 1.25rem 1rem 1.25rem;
  width: 0; /* Forces intrinsic width to 0 so this scroll container's summed child
               widths never get counted toward an ancestor's shrink-to-fit size */
  min-width: 100%; /* Then stretches back to fill all available space normally */
  max-width: 100%;
  box-sizing: border-box;
  scrollbar-width: none; 
  -ms-overflow-style: none;
}

.classes-grid::-webkit-scrollbar {
  display: none;
}

.class-card {
  flex: 0 0 100%; /* Full-width single card per view on mobile */
  width: 100%;
  min-width: 0; /* Prevents inner content (text/images) from forcing card wider than container */
  scroll-snap-align: start;
  background-color: #ffffff;
  border-radius: 16px;
  border: 2px solid #bb55ef;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
}

.age-badge {
  background-color: #bb55ef;
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  margin-bottom: 0.85rem;
  white-space: nowrap; /* Keeps age text on one line inside badge */
}

.card-image-wrapper {
  width: 120px; /* Reduced slightly for smaller mobile devices */
  height: 120px;
  margin-bottom: 0.85rem;
  border-radius: 50%;
  border: 3px solid #42b883;
  background-color: #ffffff;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0; /* Ensures circle never deforms or gets squished */
}

.card-image {
  max-width: 85%;
  max-height: 85%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.class-name {
  font-size: 1.35rem;
  color: #1a1a1a;
  margin-bottom: 0.35rem;
}

.class-description {
  color: #666666;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* ============================================================
   2b. CAROUSEL DOTS (mobile only, hidden from 571px up)
============================================================ */
.carousel-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background-color: #d9d9d9;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.dot:hover {
  background-color: #bb55ef99;
}

.dot-active {
  background-color: #bb55ef;
  transform: scale(1.25);
}

/* ============================================================
   3. TABLETS (571px to 820px)
   Switches from swipe carousel to a 2-column grid
============================================================ */
@media (min-width: 571px) {
  .classes-container {
    padding: 1rem 2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .classes-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow-x: visible;
    gap: 1.5rem;
    padding: 0;
  }

  .class-card {
    flex: initial;
    width: auto;
    padding: 1.5rem;
  }

  .card-image-wrapper {
    width: 130px;
    height: 130px;
  }

  .carousel-dots {
    display: none; /* Dots only make sense for the mobile single-card carousel */
  }
}

/* ============================================================
   4. DESKTOP (821px and up)
============================================================ */
@media (min-width: 821px) {
  .classes-container {
    padding: 1rem 0rem;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .classes-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}

/* ============================================================
   5. XLARGE & ULTRA WIDE SCREENS (1101px and up)
============================================================ */
@media (min-width: 1101px) {
  .classes-container {
    padding: 1rem 0rem; /* Reduced side padding so cards get more room */
    max-width: 2200px; /* Raised so the container rarely caps out before the viewport does */
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .classes-grid {
    gap: 2rem;
  }

  .card-image-wrapper {
    width: 150px;
    height: 150px;
  }

  .class-name {
    font-size: 1.5rem;
  }

  .class-description {
    font-size: 1rem;
  }
}

/* ============================================================
   6. ULTRA WIDE SCREENS (1600px and up)
   Cards keep scaling instead of the container hard-capping
============================================================ */
@media (min-width: 1600px) {
  .classes-container {
    max-width: 100%; /* No hard cap — cards scale with the full viewport */
    padding: 2rem 0rem;
  }

  .classes-grid {
    gap: 2.5rem;
  }

  .class-card {
    padding: 2rem;
  }

  .card-image-wrapper {
    width: 170px;
    height: 170px;
  }

  .class-name {
    font-size: 1.65rem;
  }

  .class-description {
    font-size: 1.05rem;
  }
}
</style>