<template>
  <main class="home-container">
    <section class="hero-banner">
      <!-- Left / Primary Image Frame -->
      <div class="image-frame">
        <img 
          src="/ek-home2.jpg" 
          alt="Featured Visual Left" 
          class="hero-image"
        />
      </div>

      <!-- Text Content -->
      <div class="hero-content">
        <h1 class="hero-title">Learn, Play and Discover at Evermont Kids.</h1>
      </div>

      <!-- Right / Secondary Image Frame -->
      <div class="image-frame image-frame-secondary">
        <img 
          src="/ek-home1.jpg" 
          alt="Featured Visual Right" 
          class="hero-image"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ============================================================
   1. PAGE CONTAINER
============================================================ */
.home-container {
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  overflow-x: clip; /* Prevents horizontal scrollbars */
}

/* ============================================================
   2. MOBILE & TABLET BASE STYLES (Up to 820px)
============================================================ */
.hero-banner {
  width: 100%;
  margin: 0 auto;
  display: grid; /* Grid container for stacking layers */
  justify-items: center; /* Horizontally centers content */
  align-items: center;
  /*background-color: #40E0D0; /* Turquoise background */
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

/* Forces primary image and text overlay into the exact same Grid cell */
.hero-banner > * {
  grid-area: 1 / 1;
}

.image-frame {
  width: 100%;
  aspect-ratio: 719 / 1080;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Hide the second image completely on mobile and tablet */
.image-frame-secondary {
  display: none;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* Text Overlay Styling (Mobile & Tablet) - STRICTLY CONSTRAINED TO PHOTO WIDTH */
.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically centers text over image */
  align-items: flex-start;  /* Left-aligns text */
  text-align: left;
  width: 100%;
  max-width: 100%;          /* NEVER extends past the width of the image frame */
  height: 100%;
  padding: 1.5rem;          /* Internal padding keeping text inside image frame */
  box-sizing: border-box;   /* Includes padding in width calculations */
  background: transparent;  /* Explicitly transparent */
  gap: 0.75rem;
  z-index: 2;
}

/* All text is strictly BLACK */
.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #000000;           /* Pure Black */
  margin: 0;
  line-height: 1.1;
  word-break: break-word;   /* Prevents overflow */
  text-shadow: none;
}

.hero-description {
  font-size: 1.1rem;
  color: #000000;           /* Pure Black */
  margin: 0;
  line-height: 1.35;
  text-shadow: none;
}

/* ============================================================
   3. TABLETS (571px to 820px)
   Matches hero height strictly to 780px image height
============================================================ */
@media (min-width: 571px) {
  .hero-banner {
    height: 780px;           /* Hero banner height strictly equals 780px */
    width: 100%;             /* Fills section width with turquoise */
    border-radius: 20px;
    /*background-color: #40E0D0;*/
  }

  .image-frame {
    height: 780px;
    width: auto;
    max-width: 100%;
    aspect-ratio: 719 / 1080;
  }

  .hero-content {
    width: 100%;
    max-width: 519px; 
    padding: 2.5rem;
  }

  .hero-title {
    font-size: 6rem;
  }

  .hero-description {
    font-size: 1.2rem;
  }
}

/* ============================================================
   4. DESKTOP (821px and up)
   Turquoise background scales smoothly between 821px and 1100px
============================================================ */
@media (min-width: 821px) {
  .hero-banner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: fit-content;       /* Matches exact height of internal image frames */
    padding: 0;
    width: 100%;
    max-width: 100%;
    /*background-color: #40E0D0; /* Turquoise background spans full width */
    border-radius: 0;
    overflow-x: clip;
    position: relative;
  }

  /* Reset grid stacking rules for desktop flex items */
  .hero-banner > * {
    grid-area: auto;
  }

  /* Dynamically scale height down between 821px & 1100px to fit screen width */
  .image-frame {
    height: clamp(520px, 55vh, 780px);
    width: auto;
    aspect-ratio: 719 / 1080;
    flex-shrink: 1;            /* Allows smooth proportional shrinking below 1100px */
  }

  /* Secondary image activated */
  .image-frame-secondary {
    display: flex;
  }

  /* Text LOCKED to exact Viewport Center & LEFT ALIGNED */
  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    height: auto;
    width: clamp(300px, 35vw, 420px); /* Scales cleanly down on narrower desktop screens */
    max-width: 90vw;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    padding: 0;
    gap: 1.25rem;
    z-index: 10;
  }

  .hero-title {
    font-size: clamp(3.5rem, 5vw, 6rem); /* Responsive scaling prevents text wrapping collisions */
    color: #000000;
    text-shadow: none;
  }

  .hero-description {
    font-size: 1.25rem;
    color: #000000;
    text-shadow: none;
  }
}

/* ============================================================
   5. XLARGE SCREENS (1101px and up)
   Full 780px height restored once space allows
============================================================ */
@media (min-width: 1101px) {
  .image-frame {
    height: 780px;
  }

  .hero-content {
    width: 420px;
  }

  .hero-title {
    font-size: 6rem;
  }
}

@media (min-width: 1440px) {
  .hero-content {
    width: 520px;
  }

  .hero-title {
    font-size: 6rem;
  }

  .hero-description {
    font-size: 1.4rem;
  }
}
</style>