<template>
  <div class="home" id="home">
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text" ref="heroText">
            <h1 class="hero-greeting">{{ $t('home.greeting') }}</h1>
            <h2 class="hero-name">{{ $t('home.name') }}</h2>
            <p class="hero-title">{{ $t('home.title') }}</p>
            <div class="hero-actions">
              <a href="#about" @click="scrollToSection('about')" class="btn hero-btn">
                {{ $t('nav.about') }}
              </a>
              <a href="#projects" @click="scrollToSection('projects')" class="btn btn-outline">
                {{ $t('nav.projects') }}
              </a>
            </div>
          </div>
          <div class="hero-image" ref="heroImage">
            <div class="image-container">
              <img src="/mypicture.jpeg" alt="Aaron Chen" class="profile-image" />
              <div class="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator" ref="scrollIndicator">
        <div class="scroll-arrow"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useAnimations } from '../composables/useAnimations'
import { gsap } from 'gsap'

export default {
  name: 'Home',
  setup() {
    const heroText = ref(null)
    const heroImage = ref(null)
    const scrollIndicator = ref(null)
    const { fadeInUp, slideInLeft, slideInRight } = useAnimations()

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    onMounted(() => {
      // 初始動畫
      gsap.fromTo(heroText.value.children,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.5
        }
      )

      gsap.fromTo(heroImage.value,
        {
          x: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.8
        }
      )

      gsap.fromTo(scrollIndicator.value,
        {
          y: 20,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 1.5
        }
      )

      // 滾動指示器動畫
      gsap.to(scrollIndicator.value.querySelector('.scroll-arrow'), {
        y: 10,
        duration: 1.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      })
    })

    return {
      heroText,
      heroImage,
      scrollIndicator,
      scrollToSection
    }
  }
}
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: #ffffff;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  min-height: 80vh;
}

.hero-text {
  text-align: left;
}

.hero-greeting {
  font-size: 1.5rem;
  color: #667eea;
  margin-bottom: 10px;
  font-weight: 500;
}

.hero-name {
  font-size: 4rem;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title {
  font-size: 1.3rem;
  color: #5a6c7d;
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.hero-btn {
  padding: 15px 40px;
  font-size: 1.1rem;
}

.btn-outline {
  background: transparent;
  border: 2px solid #667eea;
  color: #667eea;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  position: relative;
  width: 350px;
  height: 350px;
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
}

.image-overlay {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border: 2px solid #667eea;
  border-radius: 50%;
  opacity: 0.3;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.1;
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #667eea;
  cursor: pointer;
}

.scroll-arrow {
  width: 2px;
  height: 30px;
  background: #667eea;
  position: relative;
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: -3px;
  width: 8px;
  height: 8px;
  border-right: 2px solid #667eea;
  border-bottom: 2px solid #667eea;
  transform: rotate(45deg);
}

/* 響應式設計 */
@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .hero-text {
    text-align: center;
  }

  .hero-name {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .hero-greeting {
    font-size: 1.2rem;
  }

  .hero-name {
    font-size: 2.5rem;
  }

  .hero-title {
    font-size: 1.1rem;
  }

  .image-container {
    width: 280px;
    height: 280px;
  }

  .hero-actions {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-name {
    font-size: 2rem;
  }

  .hero-title {
    font-size: 1rem;
  }

  .image-container {
    width: 220px;
    height: 220px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 200px;
    text-align: center;
  }
}
</style>
