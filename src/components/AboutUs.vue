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
          We’ve designed a comfortable learning space that is both natural and stimulating, allowing children to feel
          at ease and excited to learn. 
        </p>
      </div>

      <div class="details-card">
        <h2 class="section-title">Our Commitment</h2>
        <p class="section-text">
          We are committed to instilling confidence, creativity and a love of learning in each child while providing excellent primary school preparation.
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
  height: 110px;             /* Exact Mobile Height */
  margin: 0 auto;
  background-color: #40E0D0; /* Turquoise background */
  border-radius: 16px;       /* Rounded corners */
  overflow: hidden;          /* Keeps inner content within rounded edges */
  padding: 0 1.5rem;         /* Removed vertical padding so height stays exact */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
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
  font-size: 3rem;
  font-weight: 800;
  color: #000000;
  margin: 0;
  line-height: 1.1;
  word-break: break-word;
}

.about-description {
  font-size: 1.15rem;
  color: #000000;
  margin: 0;
  line-height: 1.5;
  max-width: 650px;
}

/* ============================================================
   3. DETAILS CONTENT SECTION
============================================================ */
.about-details {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.details-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #bb55ef; /* Brand purple */
  margin: 0;
}

.section-text {
  font-size: 1.1rem;
  color: #333333;
  line-height: 1.6;
  margin: 0;
  max-width: 750px;
}

/* ============================================================
   4. TABLETS (571px to 820px)
============================================================ */
@media (min-width: 571px) {
  .about-banner {
    height: 120px;           /* Exact Tablet Height */
    border-radius: 20px;
    padding: 0 2rem;
  }

  .about-title {
    font-size: 3.5rem;
  }

  .about-description {
    font-size: 1.25rem;
  }

  .section-title {
    font-size: 2.25rem;
  }
}

/* ============================================================
   5. DESKTOP (821px to 1100px)
============================================================ */
@media (min-width: 821px) {
  .about-banner {
    height: 120px;           /* Exact Desktop Height */
    border-radius: 24px;
    padding: 0 2rem;
  }

  .about-title {
    font-size: 3.5rem;
  }

  .about-description {
    font-size: 1.35rem;
  }

  .about-details {
    padding: 4rem 2rem;
    gap: 3.5rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .section-text {
    font-size: 1.2rem;
  }
}

/* ============================================================
   6. XLARGE SCREENS (1101px to 1439px)
============================================================ */
@media (min-width: 1101px) {
  .about-banner {
    height: 120px;           /* Exact Large Desktop Height */
    border-radius: 28px;
    padding: 0 3rem;
  }

  .about-content {
    max-width: 950px;
  }

  .about-title {
    font-size: 3.5rem;
  }

  .about-description {
    font-size: 1.4rem;
    max-width: 750px;
  }

  .about-details {
    max-width: 1050px;
    padding: 5rem 2rem;
  }

  .section-title {
    font-size: 2.75rem;
  }

  .section-text {
    font-size: 1.25rem;
    max-width: 850px;
  }
}

/* ============================================================
   7. ULTRA WIDE SCREENS (1440px and up)
============================================================ */
@media (min-width: 1440px) {
  .about-banner {
    height: 120px;           /* Exact Ultra-Wide Desktop Height */
    padding: 0 4rem;
    border-radius: 32px;
  }

  .about-content {
    max-width: 1100px;
  }

  .about-title {
    font-size: 3.5rem;
  }

  .about-description {
    font-size: 1.5rem;
    max-width: 850px;
  }

  .about-details {
    max-width: 1200px;
    padding: 6rem 2rem;
    gap: 4.5rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .section-text {
    font-size: 1.3rem;
    max-width: 950px;
  }
}
</style>