<template>
  <div class="about" id="about">
    <section class="section">
      <div class="container">

        <div class="about-content">
          <div class="about-description card" ref="description">
            <p>{{ dynamicDescription }}</p>
          </div>

          <div class="about-grid">
            <div class="traits-section card" ref="traits">
              <!-- 浮動 emoji 背景元素 -->
              <div class="floating-emojis">
                <div class="floating-emoji" data-emoji="💡" style="--delay: 0s; --duration: 8s;"></div>
                <div class="floating-emoji" data-emoji="🔍" style="--delay: 1s; --duration: 10s;"></div>
                <div class="floating-emoji" data-emoji="🤝" style="--delay: 2s; --duration: 9s;"></div>
                <div class="floating-emoji" data-emoji="💪" style="--delay: 3s; --duration: 7s;"></div>
                <div class="floating-emoji" data-emoji="😊" style="--delay: 4s; --duration: 11s;"></div>
                <div class="floating-emoji" data-emoji="🚀" style="--delay: 1.5s; --duration: 8.5s;"></div>
                <div class="floating-emoji" data-emoji="⭐" style="--delay: 2.5s; --duration: 9.5s;"></div>
                <div class="floating-emoji" data-emoji="🎯" style="--delay: 3.5s; --duration: 10.5s;"></div>
              </div>

              <h3 class="subsection-title">{{ $t('about.traits.title') }}</h3>
              <p class="traits-content">{{ $t('about.traits.content') }}</p>

              <div class="learning-content">
                <h3 class="subsection-title">{{ $t('about.learning.title') }}</h3>
                <div class="learning-links">
                  <a
                    href="https://lunar-pyroraptor-62a.notion.site/Podcast-20c4f69954ca80299294c44b4370d8dd"
                    target="_blank"
                    class="learning-link"
                  >
                    {{ $t('about.learning.podcast') }}
                  </a>
                  <span class="separator">,</span>
                  <a
                    href="https://lunar-pyroraptor-62a.notion.site/20c4f69954ca8048bb04d92ca62cbb2e"
                    target="_blank"
                    class="learning-link"
                  >
                    {{ $t('about.learning.reading') }}
                  </a>
                  <span class="separator">,</span>
                  <span>{{ $t('about.learning.others') }}</span>
                </div>
              </div>


              <div class="education-stats" ref="stats">
                <div class="stat-item">
                  <div class="stat-number">{{ yearsOfExperience }}+</div>
                  <div class="stat-label">{{ $t('about.stats.experience') }}</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">1</div>
                  <div class="stat-label">{{ $t('about.stats.degrees') }}</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">2</div>
                  <div class="stat-label">{{ $t('about.stats.certificates') }}</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">6</div>
                  <div class="stat-label">{{ $t('about.stats.skills') }}</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">{{ projectsCount }}</div>
                  <div class="stat-label">{{ $t('about.stats.projects') }}</div>
                </div>
              </div>
            </div>

            <div class="skills-section card" ref="skills">
              <h3 class="subsection-title">{{ $t('about.skills.title') }}</h3>
              <div class="skills-grid">
                <div class="skill-category" v-for="skill in skillCategories" :key="skill.key">
                  <h4 class="skill-title">{{ $t(`about.skills.${skill.key}`) }}</h4>
                  <div class="skill-tags">
                    <span
                      v-for="tech in skill.technologies"
                      :key="tech"
                      class="skill-tag"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAnimations } from '../composables/useAnimations'

export default {
  name: 'About',
  setup() {
    const { t, locale, tm } = useI18n()
    const title = ref(null)
    const description = ref(null)
    const traits = ref(null)
    const skills = ref(null)
    const learning = ref(null)

    const { fadeInUp, slideInLeft, slideInRight } = useAnimations()

    // 計算從2016年9月到現在的工作年數
    const yearsOfExperience = computed(() => {
      const startDate = new Date(2016, 8) // 2016年9月 (月份從0開始)
      const currentDate = new Date()
      const yearsDiff = currentDate.getFullYear() - startDate.getFullYear()
      return yearsDiff
    })

    // 動態生成描述，將年數替換為計算出的值
    const dynamicDescription = computed(() => {
      const baseDescription = t('about.description')
      // 處理中英文兩種情況
      if (baseDescription.includes('8 年')) {
        // 中文版本：將 "8 年" 替換為動態年數
        return baseDescription.replace('8 年', `${yearsOfExperience.value} 年`)
      } else if (baseDescription.includes('8 years')) {
        // 英文版本：將 "8 years" 替換為動態年數
        return baseDescription.replace('8 years', `${yearsOfExperience.value} years`)
      }
      return baseDescription
    })

    // 計算項目數量
    const projectsCount = computed(() => {
      try {
        // 方法1：使用 t() 函數
        const projectsItems1 = t('projects.items')

        // 方法2：使用 tm() 函數獲取原始數據
        const projectsData = tm('projects')
        const projectsItems2 = projectsData.items

        // 優先使用 tm() 方法的結果
        if (Array.isArray(projectsItems2)) {
          return projectsItems2.length
        }

        // 回退到 t() 方法
        if (Array.isArray(projectsItems1)) {
          return projectsItems1.length
        }

        // 如果都不行，返回固定值
        return 10
      } catch (error) {
        console.error('Error getting projects count:', error)
        return 10
      }
    })

    const skillCategories = [
      {
        key: 'devops',
        technologies: ['Azure DevOps', 'Jenkins', 'Harbor', 'Docker', 'Kubernetes']
      },
      {
        key: 'webDev',
        technologies: ['.NET(Core)', 'ASP.NET MVC', 'Vue', 'React', 'JavaScript', 'TypeScript']
      },
      {
        key: 'desktop',
        technologies: ['WPF', 'Swing', 'Tkinter', 'C#', 'Python']
      },
      //{
      //  key: 'mobile',
      //  technologies: ['iOS', 'Android', 'Swift', 'Java', 'Kotlin']
      //},
      {
        key: 'database',
        technologies: ['Microsoft SQL Server', 'MongoDB', 'Firebase']
      },
      {
        key: 'tools',
        technologies: ['Visual Studio', 'VS Code', 'Postman','PyCharm', 'IntelliJ']
      },
      {
        key: 'versionControl',
        technologies: ['Git', 'TFS']
      }
    ]

    onMounted(() => {
      fadeInUp(title.value)
      fadeInUp(description.value, 0.2)
      slideInLeft(traits.value, 0.4)
      fadeInUp(skills.value, 0.6)
      slideInRight(learning.value, 0.8)
    })

    return {
      title,
      description,
      traits,
      skills,
      learning,
      skillCategories,
      yearsOfExperience,
      dynamicDescription,
      projectsCount
    }
  }
}
</script>

<style scoped>
.about {
  background: #ffffff;
  min-height: 100vh;
  padding-top: 90px;
}

.about-content {
  max-width: 1000px;
  margin: 0 auto;
}

.about-description {
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 50px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
}

.subsection-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: 600;
}

.traits-section .subsection-title {
  font-size: 1.3rem;
}

/* 浮動 emoji 背景特效 */
.traits-section {
  position: relative;
  overflow: hidden;
}

.floating-emojis {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.15;
}

.floating-emoji {
  position: absolute;
  font-size: 2rem;
  animation: float var(--duration) infinite linear;
  animation-delay: var(--delay);
}

.floating-emoji::before {
  content: attr(data-emoji);
  display: block;
  animation: rotate var(--duration) infinite linear;
  animation-delay: var(--delay);
}

@keyframes float {
  0% {
    transform: translateY(100vh) translateX(-10px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) translateX(10px);
    opacity: 0;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(0.8);
  }
  25% {
    transform: rotate(90deg) scale(1.1);
  }
  50% {
    transform: rotate(180deg) scale(0.9);
  }
  75% {
    transform: rotate(270deg) scale(1.2);
  }
  100% {
    transform: rotate(360deg) scale(0.8);
  }
}

/* 隨機位置分佈 */
.floating-emoji:nth-child(1) {
  left: 10%;
  font-size: 1.8rem;
}

.floating-emoji:nth-child(2) {
  left: 25%;
  font-size: 2.2rem;
}

.floating-emoji:nth-child(3) {
  left: 40%;
  font-size: 1.9rem;
}

.floating-emoji:nth-child(4) {
  left: 55%;
  font-size: 2.1rem;
}

.floating-emoji:nth-child(5) {
  left: 70%;
  font-size: 1.7rem;
}

.floating-emoji:nth-child(6) {
  left: 85%;
  font-size: 2.3rem;
}

.floating-emoji:nth-child(7) {
  left: 15%;
  font-size: 2rem;
}

.floating-emoji:nth-child(8) {
  left: 75%;
  font-size: 1.9rem;
}

/* 確保內容在浮動元素之上 */
.traits-section .subsection-title,
.traits-section .traits-content,
.traits-section .learning-content {
  position: relative;
  z-index: 1;
}

.traits-content {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #4a5568;
  margin-bottom: 15px;
}

.learning-content {
  border-top: 1px solid #e2e8f0;
  padding-top: 15px;
  margin-bottom: 50px;
}

.learning-subtitle {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;
}

.learning-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  line-height: 1.5;
}

.skills-grid {
  display: grid;
  gap: 25px;
}

.skill-category {
  border-left: 4px solid #667eea;
  padding-left: 20px;
}

.skill-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.learning-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.learning-link:hover {
  color: #1e3a8a;
  border-bottom-color: #1e3a8a;
}

.separator {
  color: #4a5568;
}

.education-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 40px auto 0;
  padding: 40px 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

  .education-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 0 10px;
  }

    .education-stats {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 30px 15px;
  }

/* 響應式設計 */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .about-description {
    font-size: 1.1rem;
  }

  .skill-tags {
    gap: 6px;
  }

  .skill-tag {
    padding: 4px 10px;
    font-size: 0.8rem;
  }

  .learning-subtitle {
    font-size: 0.9rem;
  }

  .learning-links {
    font-size: 0.85rem;
  }

  /* 行動裝置浮動效果調整 */
  .floating-emoji {
    font-size: 1.5rem;
  }

  .floating-emoji:nth-child(1) { font-size: 1.3rem; }
  .floating-emoji:nth-child(2) { font-size: 1.7rem; }
  .floating-emoji:nth-child(3) { font-size: 1.4rem; }
  .floating-emoji:nth-child(4) { font-size: 1.6rem; }
  .floating-emoji:nth-child(5) { font-size: 1.2rem; }
  .floating-emoji:nth-child(6) { font-size: 1.8rem; }
  .floating-emoji:nth-child(7) { font-size: 1.5rem; }
  .floating-emoji:nth-child(8) { font-size: 1.4rem; }
}

@media (max-width: 480px) {
  .about-description {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  .subsection-title {
    font-size: 1.3rem;
  }

  .skill-category {
    padding-left: 15px;
  }

  .skill-tags {
    gap: 5px;
  }

  .skill-tag {
    padding: 3px 8px;
    font-size: 0.75rem;
  }

  /* 小螢幕浮動效果 */
  .floating-emojis {
    opacity: 0.1;
  }

  .floating-emoji {
    font-size: 1.2rem;
  }

  .floating-emoji:nth-child(1) { font-size: 1rem; }
  .floating-emoji:nth-child(2) { font-size: 1.4rem; }
  .floating-emoji:nth-child(3) { font-size: 1.1rem; }
  .floating-emoji:nth-child(4) { font-size: 1.3rem; }
  .floating-emoji:nth-child(5) { font-size: 0.9rem; }
  .floating-emoji:nth-child(6) { font-size: 1.5rem; }
  .floating-emoji:nth-child(7) { font-size: 1.2rem; }
  .floating-emoji:nth-child(8) { font-size: 1.1rem; }
}
</style>
