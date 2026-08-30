<template>
  <main class="about-container">
    <section class="about-banner">
      <div class="about-content">
        <h1 class="about-title">Learning</h1>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="about-details">
      <div class="details-card">
        <h2 class="section-title">How We Teach</h2>
        <p class="section-text">
          Evermont Kids uses the EYFS framework for learning, development and care of children aged 18 months to 5 years.
          We apply theme-based, active learning to achieve set goals for each age level. Math is taught with hands-on activities where children can touch, move and make values, sums and patterns, leading them to master mathematical concepts at their roots. Science is taught through exploration and experimentation. Literacy is introduced and practiced through themes, games, songs and stories. An array of extracurricular activities are offered to expose children to various strengths, skills and potential passions, including visual arts, music, swimming, physical education, cooking and gardening.
        </p>
      </div>

      <!-- Horizontal feature photo -->
      <div class="feature-photo">
        <img
          src="/ek3.jpg"
          alt="Hands-on learning at Evermont Kids"
          class="feature-photo-image"
        />
      </div>

      <div class="details-card">
        <h2 class="section-title">Our Curriculum</h2>
        <p class="section-text">
          We are committed to instilling confidence, creativity and a love of learning in each child while providing excellent primary school preparation.
        </p>
      </div>

      <div class="details-card">
        <h2 class="section-title">Primary School Preparation</h2>
        <p class="section-text">
          Evermont Kids is a comfortable transition from home to school, where children feel connected to their teachers and know that they will be heard, guided and encouraged.
          As preschool is often the first step of independence into the world, we've created a secure, calm, playful and structured environment to develop social skills, academic skills and self-esteem.
          Our teachers work with age-appropriate goals for academic, physical and emotional development to ensure a smooth and successful transition into primary school.
        </p>
      </div>

      <!-- Vertical photo triptych -->
      <div class="triptych-grid">
        <div class="triptych-item">
          <img src="/ek14.jpg" alt="Evermont Kids learning moment" class="triptych-image" />
        </div>
        <div class="triptych-item">
          <img src="/ek-w2.jpg" alt="Evermont Kids classroom activity" class="triptych-image" />
        </div>
        <div class="triptych-item">
          <img src="/ek15.jpg" alt="Evermont Kids creative play" class="triptych-image" />
        </div>
      </div>

      <div class="details-card">
        <h2 class="section-title">Nurturing The Whole Child</h2>
        <p class="section-text">
          At Evermont Kids we work towards developing confident, well-balanced, life-long learners by incorporating healthy habits and practices in everything we do. We prioritize nutritional meals, a growth mindset, confidence building and positive play.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ============================================================
   1. PAGE CONTAINER
============================================================ */
.about-container {
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
.about-banner {
  width: 100%;
  max-width: 100%;
  height: 110px;
  margin: 0 auto;
  background-color: #f8f40b;
  border-radius: 16px;
  overflow: hidden;
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  animation: fadeInUp 0.6s ease both;
}

.about-content {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  box-sizing: border-box;
}

.about-title {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #000000;
  margin: 0 auto;
  line-height: 1.15;
  text-align: center;
  width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* ============================================================
   3. DETAILS CONTENT SECTION
============================================================ */
.about-details {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1.75rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.details-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  box-sizing: border-box;
  animation: fadeInUp 0.6s ease both;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #bb55ef;
  margin: 0 auto;
  text-align: center;
}

.section-text {
  font-size: 0.9rem;
  color: #333333;
  line-height: 1.55;
  margin: 0 auto;
  max-width: 100%;
  text-align: center;
}

/* ============================================================
   3b. HORIZONTAL FEATURE PHOTO
============================================================ */
.feature-photo {
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
  animation: fadeInUp 0.7s ease both;
}

.feature-photo-image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.feature-photo:hover .feature-photo-image {
  transform: scale(1.03);
}

/* ============================================================
   3c. VERTICAL TRIPTYCH
============================================================ */
.triptych-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
  animation: fadeInUp 0.7s ease both;
}

.triptych-item {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.triptych-image {
  width: 100%;
  height: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.triptych-item:hover .triptych-image {
  transform: scale(1.06);
}

/* ============================================================
   4. TABLETS (571px to 820px)
============================================================ */
@media (min-width: 571px) {
  .about-banner {
    height: 120px;
    border-radius: 20px;
    padding: 0 1.5rem;
  }

  .about-title {
    font-size: 3rem;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .section-text {
    font-size: 0.95rem;
  }
}

/* ============================================================
   5. DESKTOP (821px to 1100px)
============================================================ */
@media (min-width: 821px) {
  .about-banner {
    height: 60px;
    border-radius: 24px;
    padding: 0 2rem;
  }

  .about-title {
    font-size: 3rem;
  }

  .about-details {
    padding: 2.25rem 1.5rem;
    gap: 1.75rem;
  }

  .section-title {
    font-size: 1.4rem;
  }

  .section-text {
    font-size: 0.98rem;
  }
}

/* ============================================================
   6. XLARGE SCREENS (1101px to 1439px)
============================================================ */
@media (min-width: 1101px) {
  .about-banner {
    height: 60px;
    border-radius: 28px;
    padding: 0 2.5rem;
  }

  .about-content {
    max-width: 800px;
  }

  .about-title {
    font-size: 3rem;
  }

  .about-details {
    max-width: 850px;
    padding: 2.5rem 1.75rem;
    gap: 2rem;
  }

  .section-title {
    font-size: 1.45rem;
  }

  .section-text {
    font-size: 1rem;
    max-width: 750px;
  }
}

/* ============================================================
   7. ULTRA WIDE SCREENS (1440px and up)
============================================================ */
@media (min-width: 1440px) {
  .about-banner {
    height: 60px;
    padding: 0 3rem;
    border-radius: 32px;
  }

  .about-content {
    max-width: 850px;
  }

  .about-title {
    font-size: 3rem;
  }

  .about-details {
    max-width: 900px;
    padding: 2.75rem 2rem;
    gap: 2.25rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .section-text {
    font-size: 1.02rem;
    max-width: 800px;
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
  .about-banner,
  .details-card,
  .feature-photo,
  .triptych-grid {
    animation: none;
  }
  .feature-photo-image,
  .triptych-image {
    transition: none;
  }
}
</style>