<script setup>
const scheduleItems = [
  'Arrival and play',
  'Fine motor skills development',
  'Circle time',
  'Age specific learning',
  'Morning snack',
  'Outdoor play',
  'Special activities',
  'Lunch',
  'Rest',
  'Quiet activity',
  'Outdoor play'
]

const reviews = [
  {
    quote: 'Add a short parent testimonial here.',
    name: 'Parent Name',
    rating: 5
  },
  {
    quote: 'Add a short parent testimonial here.',
    name: 'Parent Name',
    rating: 5
  },
  {
    quote: 'Add a short parent testimonial here.',
    name: 'Parent Name',
    rating: 5
  }
]

const pastEvents = [
  {
    title: 'Firefighter Day',
    image: 'ek13.jpg',
    description:
      "We use theme-based learning to encourage curiosity and relatability. After learning about occupations and vehicles, we invited local firefighters and their fire truck to teach us about their work, tools and what to do in case of fire. Students sat in the truck, sounded the horn, climbed the ladder and sprayed water with the hose."
  },
  {
    title: 'A Visit To The Vet',
    image: 'ek4.jpg',
    description:
      'We spent an exciting day at a local vet clinic where we got to pet newborn kittens, take part in a doggy check-up and tour the X-ray and operation rooms.'
  },
  {
    title: 'Beach Day',
    image: 'ek12.jpg',
    description:
      'After learning about sea creatures, we spent a morning at the beach searching for crabs and sea shells.'
  }
]

const upcomingEvents = [
  { title: 'A Visit To The Museum', date: '2026' },
  { title: 'Family Fun Day', date: '2026' }
]
</script>

<template>
  <main class="days-container">
    <div class="top-gap">     </div>
    <section class="days-banner">
      <div class="days-content">
        <h1 class="days-title">Our Days</h1>
      </div>
    </section>

    <!-- A Day At Evermont Kids -->
    <section class="days-section">
      <h2 class="section-title">A Day At Evermont Kids</h2>
      <p class="section-text">
        Each morning begins with smiles. As children arrive at school, they are greeted by a staff member who is there to give them a warm welcome and to receive information or questions from parents and caregivers. Throughout the day, children enjoy a combination of indoor and outdoor learning, group and individual activities and constant encouragement.
      </p>

      <ol class="timeline">
        <li v-for="(item, index) in scheduleItems" :key="item" class="timeline-item" :style="{ animationDelay: `${index * 0.05}s` }">
          <span class="timeline-marker">{{ index + 1 }}</span>
          <span class="timeline-label">{{ item }}</span>
        </li>
      </ol>
    </section>

    <!-- Horizontal divider photo -->
    <section class="divider-photo-wrap">
      <div class="divider-photo">
        <img src="/ek5.jpg" alt="A day of play at Evermont Kids" class="divider-photo-image" />
      </div>
    </section>

    <!-- Parent Reviews -->
    <section class="days-section">
      <h2 class="section-title">Parent Reviews</h2>
      <div class="reviews-grid">
        <div v-for="(review, index) in reviews" :key="index" class="review-card">
          <div class="review-stars">
            <span v-for="n in review.rating" :key="n">&#9733;</span>
          </div>
          <p class="review-quote">&ldquo;{{ review.quote }}&rdquo;</p>
          <p class="review-name">{{ review.name }}</p>
        </div>
      </div>
    </section>

    <!-- Calendar -->
    <section class="days-section">
      <h2 class="section-title">Calendar</h2>
      <div class="calendar-card">
        <p class="calendar-text">Our full events calendar will be available here soon. Please check back or contact the school office for current dates.</p>
      </div>
    </section>

    <!-- Happened at School -->
    <section class="days-section">
      <h2 class="section-title">Happened At School</h2>
      <div class="events-grid">
        <div v-for="event in pastEvents" :key="event.title" class="event-item">
          <div class="event-text-card">
            <h3 class="event-title">{{ event.title }}</h3>
            <p class="event-description">{{ event.description }}</p>
          </div>
          <div class="event-photo-card">
            <img :src="event.image" :alt="event.title" class="event-image" />
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="days-section">
      <h2 class="section-title">Upcoming Events</h2>
      <div class="upcoming-list">
        <div v-for="event in upcomingEvents" :key="event.title" class="upcoming-card">
          <span class="upcoming-date">{{ event.date }}</span>
          <span class="upcoming-title">{{ event.title }}</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ============================================================
   1. PAGE CONTAINER
============================================================ */
.top-gap {  width: 100%;  max-width: 100%;  margin: 0 auto;  padding: 0;  height: 5px;}

.days-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow-x: hidden;
}

/* ============================================================
   2. HERO BANNER (Mobile & Base: Up to 570px)
============================================================ */
.days-banner {
  width: 100%;
  height: 110px;
  margin: 0 auto;
  background-color: #bb55ef;
  border-radius: 16px;
  overflow: hidden;
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  animation: fadeInUp 0.6s ease both;
}

.days-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.days-title {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #ffffff;
  margin: 0;
  text-align: center;
}

/* ============================================================
   3. GENERIC SECTION
============================================================ */
.days-section {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1.75rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #bb55ef;
  margin: 0;
}

.section-text {
  font-size: 0.9rem;
  color: #333333;
  line-height: 1.55;
  margin: 0;
  max-width: 100%;
}

/* ============================================================
   3b. TIMELINE (daily schedule — a true sequence)
============================================================ */
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  text-align: left;
}

.timeline-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #ffffff;
  border: 2px solid #bb55ef;
  border-radius: 10px;
  padding: 0.55rem 0.85rem;
  animation: fadeInUp 0.5s ease both;
}

.timeline-marker {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #bb55ef;
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-label {
  font-size: 0.9rem;
  color: #1a1a1a;
  font-weight: 600;
}

/* ============================================================
   3c. DIVIDER PHOTO
============================================================ */
.divider-photo-wrap {
  width: 100%;
  max-width: 900px;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
}

.divider-photo {
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
}

.divider-photo-image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.divider-photo:hover .divider-photo-image {
  transform: scale(1.03);
}

/* ============================================================
   3d. PARENT REVIEWS
============================================================ */
.reviews-grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.review-card {
  background-color: rgba(187, 85, 239, 0.05);
  border: 2px solid #bb55ef;
  border-radius: 14px;
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.review-stars {
  color: #f8f40b;
  font-size: 0.95rem;
  letter-spacing: 0.15em;
}

.review-quote {
  font-size: 0.88rem;
  color: #333333;
  line-height: 1.5;
  font-style: italic;
  margin: 0;
}

.review-name {
  font-size: 0.82rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

/* ============================================================
   3e. CALENDAR
============================================================ */
.calendar-card {
  width: 100%;
  background-color: rgba(64, 224, 208, 0.12);
  border: 2px solid #40E0D0;
  border-radius: 14px;
  padding: 1.5rem 1.1rem;
}

.calendar-text {
  margin: 0;
  font-size: 0.9rem;
  color: #333333;
  line-height: 1.55;
}

/* ============================================================
   3f. EVENTS GRID (text laid over photo)
============================================================ */
.events-grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.event-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.event-text-card {
  width: 100%;
  background-color: #ffffff;
  border: 2px solid #bb55ef;
  border-radius: 14px;
  padding: 1rem 1.1rem;
  box-sizing: border-box;
  text-align: left;
}

.event-title {
  color: #bb55ef;
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 0.4rem 0;
}

.event-description {
  color: #333333;
  font-size: 0.85rem;
  line-height: 1.55;
  margin: 0;
}

.event-photo-card {
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
}

.event-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.event-photo-card:hover .event-image {
  transform: scale(1.05);
}

/* ============================================================
   3g. UPCOMING EVENTS
============================================================ */
.upcoming-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.upcoming-card {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border: 2px solid #f8f40b;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  box-sizing: border-box;
}

.upcoming-title {
  font-size: 0.92rem;
  font-weight: 700;
  color: #1a1a1a;
}

.upcoming-date {
  font-size: 0.8rem;
  font-weight: 700;
  color: #000000;
  background-color: #f8f40b;
  border-radius: 20px;
  padding: 0.25rem 0.65rem;
}

/* ============================================================
   4. TABLETS (571px to 820px)
============================================================ */
@media (min-width: 571px) {
  .days-banner {
    height: 120px;
    border-radius: 20px;
    padding: 0 1.5rem;
  }

  .days-title {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .section-text {
    font-size: 0.95rem;
  }

  .reviews-grid {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .review-card {
    flex: 1 1 calc(50% - 0.5rem);
  }

  .events-grid {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .event-item {
    flex: 1 1 calc(50% - 0.5rem);
  }

  .upcoming-list {
    flex-direction: row;
  }

  .upcoming-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    flex: 1;
  }
}

/* ============================================================
   5. DESKTOP (821px to 1100px)
============================================================ */
@media (min-width: 821px) {
  .days-banner {
    height: 60px;
    border-radius: 24px;
    padding: 0 2rem;
  }

  .days-title {
    font-size: 1.6rem;
  }

  .days-section {
    max-width: 1000px;
    padding: 2.25rem 1.5rem;
    gap: 1.25rem;
  }

  .section-title {
    font-size: 1.4rem;
  }

  .section-text {
    font-size: 0.98rem;
    max-width: 700px;
  }

  .timeline {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem 1rem;
  }

  .reviews-grid {
    flex-wrap: nowrap;
  }

  .review-card {
    flex: 1 1 0;
  }

  .events-grid {
    flex-wrap: nowrap;
    align-items: stretch;
  }

  .event-item {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
  }

  .event-photo-card {
    flex: 1;
  }
}

/* ============================================================
   6. XLARGE SCREENS (1101px to 1439px)
============================================================ */
@media (min-width: 1101px) {
  .days-banner {
    height: 60px;
    border-radius: 28px;
    padding: 0 2.5rem;
  }

  .days-title {
    font-size: 1.7rem;
  }

  .days-section {
    max-width: 1100px;
    padding: 2.5rem 1.75rem;
  }

  .section-title {
    font-size: 1.45rem;
  }

  .section-text {
    font-size: 1rem;
    max-width: 750px;
  }

  .divider-photo-wrap {
    max-width: 1100px;
  }
}

/* ============================================================
   7. ULTRA WIDE SCREENS (1440px and up)
============================================================ */
@media (min-width: 1440px) {
  .days-banner {
    height: 60px;
    padding: 0 3rem;
    border-radius: 32px;
  }

  .days-title {
    font-size: 1.75rem;
  }

  .days-section {
    max-width: 1200px;
    padding: 2.75rem 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .section-text {
    font-size: 1.02rem;
    max-width: 800px;
  }

  .divider-photo-wrap {
    max-width: 1200px;
  }
}

/* ============================================================
   8. ANIMATIONS
============================================================ */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .days-banner,
  .timeline-item,
  .divider-photo-image,
  .event-image {
    animation: none;
    transition: none;
  }
}
</style>