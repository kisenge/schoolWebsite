<template>
  <main class="contact-container">
    <div class="top-gap">

    </div>
    <section class="contact-banner">
      <div class="contact-content">
        <h1 class="contact-title">Contact Us</h1>
      </div>
    </section>

    <section class="contact-body">
      <div class="contact-photo">
        <img src="/ek11.jpg" alt="Welcome to Evermont Kids" class="contact-photo-image" />
      </div>

      <div class="contact-info">
        <div class="info-card">
          <h2 class="section-title">Admissions</h2>
          <p class="section-text">
            Enrollment is on-going throughout the year, depending on space availability. We encourage you to visit the school so that you may meet the team and learn more.
          </p>
        </div>

        <div class="info-card">
          <h2 class="section-title">Contact</h2>
          <div class="contact-details">
            <a href="tel:+255789168286" class="contact-line">
              <span class="contact-icon">&#9742;</span> 255 789 168 286
            </a>
            <a href="tel:+255764256000" class="contact-line">
              <span class="contact-icon">&#9742;</span> 255 764 256 000
            </a>
            <a href="mailto:evermontkids@gmail.com" class="contact-line">
              <span class="contact-icon">&#9993;</span> evermontkids@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ============================================================
   1. PAGE CONTAINER
============================================================ */
.top-gap {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  height: 5px;
}
.contact-container {
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
.contact-banner {
  width: 100%;
  height: 110px;
  margin: 0 auto;
  background-color: #40E0D0;
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

.contact-title {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #000000;
  margin: 0;
  text-align: center;
}

/* ============================================================
   3. BODY LAYOUT
============================================================ */
.contact-body {
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

.contact-photo {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 3 / 4;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
  animation: fadeInUp 0.6s ease both;
}

.contact-photo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.contact-photo:hover .contact-photo-image {
  transform: scale(1.05);
}

.contact-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.info-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.55rem;
  animation: fadeInUp 0.6s ease both;
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
  max-width: 500px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
}

.contact-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: #1a1a1a;
  text-decoration: none;
  background-color: rgba(187, 85, 239, 0.08);
  border: 2px solid #bb55ef;
  border-radius: 30px;
  padding: 0.55rem 1.1rem;
  transition: background-color 0.2s ease, transform 0.2s ease;
  box-sizing: border-box;
}

.contact-line:hover {
  background-color: rgba(187, 85, 239, 0.18);
  transform: translateY(-2px);
}

.contact-icon {
  color: #bb55ef;
  font-size: 1rem;
}

/* ============================================================
   4. TABLETS (571px to 820px)
============================================================ */
@media (min-width: 571px) {
  .contact-banner {
    height: 120px;
    border-radius: 20px;
    padding: 0 1.5rem;
  }

  .contact-title {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .section-text {
    font-size: 0.95rem;
  }

  .contact-line {
    font-size: 0.95rem;
  }
}

/* ============================================================
   5. DESKTOP (821px to 1100px)
============================================================ */
@media (min-width: 821px) {
  .contact-banner {
    height: 60px;
    border-radius: 24px;
    padding: 0 2rem;
  }

  .contact-title {
    font-size: 1.6rem;
  }

  .contact-body {
    max-width: 900px;
    padding: 2.5rem 1.5rem;
    flex-direction: row;
    align-items: flex-start;
    gap: 2.5rem;
  }

  .contact-photo {
    max-width: 280px;
    flex-shrink: 0;
  }

  .contact-info {
    flex: 1;
    align-items: flex-start;
    text-align: left;
  }

  .info-card {
    align-items: flex-start;
    text-align: left;
  }

  .section-text {
    max-width: 100%;
  }

  .contact-details {
    align-items: flex-start;
  }

  .section-title {
    font-size: 1.4rem;
  }
}

/* ============================================================
   6. XLARGE SCREENS (1101px to 1439px)
============================================================ */
@media (min-width: 1101px) {
  .contact-banner {
    height: 60px;
    border-radius: 28px;
    padding: 0 2.5rem;
  }

  .contact-title {
    font-size: 1.7rem;
  }

  .contact-body {
    max-width: 1050px;
    padding: 3rem 1.75rem;
    gap: 3rem;
  }

  .contact-photo {
    max-width: 320px;
  }

  .section-title {
    font-size: 1.45rem;
  }

  .section-text {
    font-size: 1rem;
  }
}

/* ============================================================
   7. ULTRA WIDE SCREENS (1440px and up)
============================================================ */
@media (min-width: 1440px) {
  .contact-banner {
    height: 60px;
    padding: 0 3rem;
    border-radius: 32px;
  }

  .contact-title {
    font-size: 1.75rem;
  }

  .contact-body {
    max-width: 1150px;
    padding: 3.5rem 2rem;
  }

  .contact-photo {
    max-width: 340px;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .section-text {
    font-size: 1.02rem;
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
  .contact-banner,
  .contact-photo,
  .info-card {
    animation: none;
  }
  .contact-photo-image,
  .contact-line {
    transition: none;
  }
}
</style>