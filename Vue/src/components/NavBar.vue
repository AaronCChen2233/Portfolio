<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <div class="nav-brand">
        <a href="#home" @click="scrollToSection('home')" class="brand-link">
          {{ $t('home.name') }}
        </a>
      </div>

      <div class="nav-menu" :class="{ 'active': isMenuOpen }" @click.stop>
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="nav-link"
          @click="scrollToSection(item.section)"
        >
          {{ $t(`nav.${item.name}`) }}
        </a>

        <div class="nav-actions">
          <button @click="toggleLanguage" class="lang-toggle">
            {{ currentLang === 'zh' ? 'EN' : '中' }}
          </button>

          <div class="contact-links">
            <a href="mailto:aaronchen2233@gmail.com" class="contact-link" title="Email" @click="closeMenu">
              <i class="icon-email">✉</i>
            </a>
            <a href="https://github.com/AaronCChen2233" target="_blank" class="contact-link" title="GitHub" @click="closeMenu">
              <img src="/github-logo.svg" alt="GitHub" class="icon-svg" />
            </a>
            <a href="https://lunar-pyroraptor-62a.notion.site/1ac4f69954ca80f4a7bbe228b9023368" target="_blank" class="contact-link" :title="$t('contact.notion')" @click="closeMenu">
              <img src="/notion-logo.svg" alt="Notion" class="icon-svg" />
            </a>
          </div>
        </div>
      </div>

      <!-- 遮罩層 -->
      <div v-if="isMenuOpen" class="nav-overlay" @click="closeMenu"></div>

      <div class="nav-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'NavBar',
  setup() {
    const { locale } = useI18n()
    const isScrolled = ref(false)
    const isMenuOpen = ref(false)
    const currentLang = ref('zh')

    const navItems = [
      { name: 'home', href: '#home', section: 'home' },
      { name: 'about', href: '#about', section: 'about' },
      { name: 'experience', href: '#experience', section: 'experience' },
      { name: 'education', href: '#education', section: 'education' },
      { name: 'projects', href: '#projects', section: 'projects' }
    ]

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      closeMenu()
    }

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const closeMenu = () => {
      isMenuOpen.value = false
    }

    const handleClickOutside = (event) => {
      const navMenu = document.querySelector('.nav-menu')
      const navToggle = document.querySelector('.nav-toggle')

      if (isMenuOpen.value &&
          navMenu &&
          !navMenu.contains(event.target) &&
          !navToggle.contains(event.target)) {
        closeMenu()
      }
    }

    const toggleLanguage = () => {
      currentLang.value = currentLang.value === 'zh' ? 'en' : 'zh'
      locale.value = currentLang.value
      closeMenu()
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      document.addEventListener('click', handleClickOutside)
      currentLang.value = locale.value
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      isScrolled,
      isMenuOpen,
      currentLang,
      navItems,
      scrollToSection,
      toggleMenu,
      closeMenu,
      toggleLanguage
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
  box-sizing: border-box;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0 max(20px, calc((100vw - 100%) / 2 + 20px));
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  box-sizing: border-box;
}

.nav-brand .brand-link {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-decoration: none;
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 0;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #667eea;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.lang-toggle {
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.lang-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.contact-links {
  display: flex;
  gap: 15px;
}

.contact-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.contact-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.icon-svg {
  width: 20px;
  height: 20px;
  filter: invert(1);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  padding: 5px;
  background: none;
  border: none;
  position: relative;
  z-index: 1001;
  order: 2;
}

.bar {
  width: 25px;
  height: 3px;
  background: #2c3e50;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@media (max-width: 1240px) {
  .nav-container {
    padding: 0 20px;
  }
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .nav-container {
    padding: 0 20px;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 70px;
    right: -100%;
    width: 280px;
    height: calc(100vh - 70px);
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 40px 20px 20px 20px;
    gap: 25px;
    transition: right 0.3s ease;
    overflow-y: auto;
    z-index: 999;
    box-shadow: -5px 0 20px rgba(0,0,0,0.1);
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-link {
    font-size: 1.2rem;
    padding: 15px 10px;
    width: 100%;
    max-width: 200px;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    overflow: visible;
  }

  .nav-link:last-of-type {
    margin-bottom: 20px;
  }

  .nav-toggle.active .bar:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
    background: #667eea;
  }

  .nav-toggle.active .bar:nth-child(2) {
    opacity: 0;
    transform: translateX(-10px);
  }

  .nav-toggle.active .bar:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
    background: #667eea;
  }

  .nav-actions {
    flex-direction: column;
    gap: 25px;
    width: 100%;
    align-items: center;
    padding-top: 20px;
    border-top: 2px solid rgba(102, 126, 234, 0.2);
  }

  .lang-toggle {
    padding: 12px 24px;
    font-size: 1.1rem;
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
    flex-wrap: wrap;
  }

  .contact-link {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
  }
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 15px;
  }

  .nav-menu {
    width: 280px;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 15px;
    height: 60px;
  }

  .navbar {
    height: 60px;
  }

  .nav-menu {
    top: 60px;
    height: calc(100vh - 60px);
    padding: 30px 15px 15px 15px;
    gap: 20px;
    width: 250px;
  }

  .nav-brand .brand-link {
    font-size: 1.2rem;
  }

  .nav-link {
    font-size: 1.1rem;
    padding: 12px 0;
  }

  .nav-actions {
    gap: 20px;
    padding-top: 15px;
  }

  .lang-toggle {
    padding: 10px 20px;
    font-size: 1rem;
  }

  .contact-links {
    gap: 15px;
  }

  .contact-link {
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }

  .nav-toggle {
    gap: 3px;
    padding: 4px;
  }

  .bar {
    width: 22px;
    height: 2px;
  }

  .nav-toggle.active .bar:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .nav-toggle.active .bar:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  .nav-overlay {
    display: block;
  }
}
</style>
