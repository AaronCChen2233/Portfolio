<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3>{{ $t('home.name') }}</h3>
          <p>{{ $t('home.title') }}</p>
        </div>

        <div class="footer-nav">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            class="footer-link"
            @click="scrollToSection(item.section)"
          >
            {{ $t(`nav.${item.name}`) }}
          </a>
        </div>        <div class="footer-contact">
          <a href="mailto:aaronchen2233@gmail.com" class="contact-item">
            <span class="contact-icon">✉</span>
            {{ $t('contact.email') }}
          </a>
          <a href="https://github.com/AaronCChen2233" target="_blank" class="contact-item">
            <img src="/github-logo.svg" alt="GitHub" class="contact-icon-svg" />
            {{ $t('contact.github') }}
          </a>
          <a href="https://lunar-pyroraptor-62a.notion.site/1ac4f69954ca80f4a7bbe228b9023368" target="_blank" class="contact-item">
            <img src="/notion-logo.svg" alt="Notion" class="contact-icon-svg" />
            {{ $t('contact.notion') }}
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>{{ $t('footer.madeBy') }}</p>
          <p>{{ $t('footer.tech') }}</p>
        </div>
        <div class="footer-year">
          <p>&copy; {{ currentYear }} Aaron Chen. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Footer',
  setup() {
    const currentYear = ref(new Date().getFullYear())

    const navItems = [
      { name: 'home', href: '#home', section: 'home' },
      { name: 'about', href: '#about', section: 'about' },
      { name: 'experience', href: '#experience', section: 'experience' },
      { name: 'education', href: '#education', section: 'education' },
      { name: 'projects', href: '#projects', section: 'projects' }
    ]

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    return {
      currentYear,
      navItems,
      scrollToSection
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 50px 0 20px;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-brand h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-brand p {
  color: #bdc3c7;
  font-size: 1rem;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.footer-link {
  color: #bdc3c7;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 5px 0;
}

.footer-link:hover,
.footer-link.active {
  color: #667eea;
  transform: translateX(5px);
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #bdc3c7;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 8px 0;
}

.contact-item:hover {
  color: #667eea;
  transform: translateX(5px);
}

.contact-icon {
  font-size: 1.2rem;
  width: 24px;
  text-align: center;
}

.contact-icon-svg {
  width: 24px;
  height: 24px;
  filter: invert(1);
  margin-right: 12px;
}

.footer-bottom {
  border-top: 1px solid #445568;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-copyright p {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.footer-year p {
  color: #7f8c8d;
  font-size: 0.9rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }

  .footer-nav {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .footer-contact {
    align-items: center;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 30px 0 15px;
  }

  .footer-content {
    gap: 25px;
  }

  .footer-brand h3 {
    font-size: 1.3rem;
  }

  .footer-nav {
    flex-direction: column;
    gap: 15px;
  }

  .contact-item {
    font-size: 0.9rem;
  }

  .contact-icon {
    font-size: 1.1rem;
  }

  .footer-copyright p,
  .footer-year p {
    font-size: 0.8rem;
  }
}

/* 動畫效果 */
.footer-link,
.contact-item {
  position: relative;
  overflow: hidden;
}

.footer-link::after,
.contact-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  transition: left 0.3s ease;
}

.footer-link:hover::after,
.contact-item:hover::after {
  left: 0;
}
</style>
