<template>
  <main class="about-container">
    <section class="about-banner">
      <div class="about-content">
        <h1 class="about-title">About Us</h1>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="about-details">
      <div class="details-card">
        <h2 class="section-title">Our Mission</h2>
        <p class="section-text">
          At Evermont Kids we believe that children are naturally eager to learn and that through play, exploration and positive introductions, a love of learning can be nurtured at an early age.
          Our beautiful, child-centered environment encourages curiosity, play, creativity and expression to inspire life-long learning.
          We've designed a comfortable learning space that is both natural and stimulating, allowing children to feel at ease and excited to learn.
        </p>
      </div>

      <!-- Photo Gallery: 4 vertical images, first with text overlay -->
      <div class="gallery-grid">
        
        <div class="gallery-item">
          <img
            src="/ek7.jpg"
            alt="Evermont Kids classroom"
            class="gallery-image"
          />
        </div>
        <div class="gallery-item">
          <img
            src="/ek8.jpg"
            alt="Evermont Kids outdoor play"
            class="gallery-image"
          />
        </div>
        <div class="gallery-item">
          <img
            src="/ek9.jpg"
            alt="Evermont Kids activities"
            class="gallery-image"
          />
        </div>
        <div class="gallery-item">
          <img
            src="/ek10.jpg"
            alt="Evermont Kids classroom"
            class="gallery-image"
          />
        </div>
        
      </div>

      <div class="details-card">
        <h2 class="section-title">Our Commitment</h2>
        <p class="section-text">
          We are committed to instilling confidence, creativity and a love of learning in each child while providing excellent primary school preparation.
        </p>
      </div>

      <div class="gallery-item gallery-feature">
          <img
            src="/ek6.jpg"
            alt="Children learning at Evermont Kids"
            class="gallery-image"
          />
          <div class="gallery-overlay">
            <span class="gallery-overlay-text">Curiosity. Creativity. Confidence.</span>
          </div>
        </div>

      <div class="details-card">
        <h2 class="section-title">What Sets Us Apart</h2>
        <p class="section-text">
          We are a small school by design, working only with small groups to provide the close attention and personalized nurturing that is needed during the early years of learning. With the small group design, children feel encouraged to ask questions and express their thoughts. It also allows teachers to observe each child's unique abilities and level of understanding instantly, so that we can further challenge strengths and give extra support for weak areas promptly.
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
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

/* ============================================================
   2. HERO BANNER (Mobile & Base: Up to 570px)
============================================================ */
.about-banner {
  width: 100%;
  height: 110px;
  margin: 0 auto;
  background-color: #40E0D0;
  border-radius: 16px;
  overflow: hidden;
  padding: 0 1.5rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
 
  animation: fadeInUp 0.6s ease both;
}

.about-content {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
}

.about-title {
  font-size: 1.85rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #000000;
  margin: 0;
  line-height: 1.15;
  word-break: break-word;
}

/* ============================================================
   3. DETAILS CONTENT SECTION
============================================================ */
.about-details {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2.25rem 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.details-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.6rem;
  animation: fadeInUp 0.6s ease both;
}

.section-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #bb55ef;
  margin: 0;
}

.section-text {
  font-size: 0.95rem;
  color: #333333;
  line-height: 1.6;
  margin: 0;
  max-width: 700px;
}

/* ============================================================
   3b. PHOTO GALLERY
============================================================ */
.gallery-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  animation: fadeInUp 0.7s ease both;
}

.gallery-item {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 14px;
  overflow: hidden;
 
  
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.gallery-feature {
  grid-column: span 2;
  aspect-ratio: 16 / 9;
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  box-sizing: border-box;
}

.gallery-overlay-text {
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3;
  text-align: left;
}

/* ============================================================
   4. TABLETS (571px to 820px)
============================================================ */
@media (min-width: 571px) {
  .about-banner {
    height: 120px;
    border-radius: 20px;
    padding: 0 2rem;
  }

  .about-title {
    font-size: 2.1rem;
  }

  .section-title {
    font-size: 1.45rem;
  }

  .section-text {
    font-size: 1rem;
  }

  .gallery-overlay-text {
    font-size: 1.1rem;
  }
}

/* ============================================================
   5. DESKTOP (821px to 1100px)
============================================================ */
@media (min-width: 821px) {
  .about-banner {
    height: 120px;
    border-radius: 24px;
    padding: 0 2rem;
  }

  .about-title {
    font-size: 2.25rem;
  }

  .about-details {
    padding: 3rem 2rem;
    gap: 2.5rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .section-text {
    font-size: 1.02rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .gallery-feature {
    grid-column: span 2;
    aspect-ratio: 4 / 3;
  }
}

/* ============================================================
   6. XLARGE SCREENS (1101px to 1439px)
============================================================ */
@media (min-width: 1101px) {
  .about-banner {
    height: 120px;
    border-radius: 28px;
    padding: 0 3rem;
  }

  .about-content {
    max-width: 950px;
  }

  .about-title {
    font-size: 2.4rem;
  }

  .about-details {
    max-width: 1050px;
    padding: 3.5rem 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-text {
    font-size: 1.05rem;
    max-width: 800px;
  }

  .gallery-grid {
    gap: 1.25rem;
  }
}

/* ============================================================
   7. ULTRA WIDE SCREENS (1440px and up)
============================================================ */
@media (min-width: 1440px) {
  .about-banner {
    height: 120px;
    padding: 0 4rem;
    border-radius: 32px;
  }

  .about-content {
    max-width: 1100px;
  }

  .about-title {
    font-size: 2.5rem;
  }

  .about-details {
    max-width: 1200px;
    padding: 4rem 2rem;
    gap: 3rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-text {
    font-size: 1.08rem;
    max-width: 900px;
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
  .gallery-grid {
    animation: none;
  }
  .gallery-image {
    transition: none;
  }
}
</style>