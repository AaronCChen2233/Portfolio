<template>
  <div class="experience" id="experience">
    <section class="section">
      <div class="container">
        <h1 class="section-title" ref="title">{{ $t('experience.title') }}</h1>

        <div class="timeline">
          <div
            v-for="(job, index) in jobs"
            :key="index"
            class="timeline-item"
            :ref="el => timelineItems[index] = el"
          >
            <div class="timeline-marker">
              <div class="timeline-dot"></div>
              <div class="timeline-line" v-if="index < jobs.length - 1"></div>
            </div>

            <div class="timeline-content card">
              <div class="company-logo" v-if="getCompanyLogo(index)">
                <img :src="getCompanyLogo(index)" :alt="job.company" />
              </div>

              <div class="job-header">
                <h3 class="job-title">{{ job.title }}</h3>
                <div class="job-meta">
                  <h4 class="company-name">{{ job.company }}</h4>
                  <p class="job-location">{{ job.location }}</p>
                  <p class="job-period">{{ job.period }}</p>
                </div>
              </div>

              <div class="job-description">
                <ul class="description-list">
                  <li
                    v-for="(desc, descIndex) in job.description"
                    :key="descIndex"
                    class="description-item"
                  >
                    {{ desc }}
                  </li>
                </ul>
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
  name: 'Experience',
  setup() {
    const { t } = useI18n()
    const title = ref(null)
    const timelineItems = ref([])
    const { fadeInUp, slideInLeft } = useAnimations()

    // 直接從 i18n 獲取 jobs 數據
    const jobs = computed(() => {
      // 最簡單的方法：直接返回硬編碼的數據結構
      // 這樣可以確保數據正確載入
      return [
        {
          title: t('experience.jobs.0.title') || '二級專員',
          company: t('experience.jobs.0.company') || '永豐餘投資控股股份有限公司',
          location: t('experience.jobs.0.location') || '台灣, 台北',
          period: t('experience.jobs.0.period') || '2022年4月 - 至今',
          description: [
            t('experience.jobs.0.description.0') || '開發供公司內部人使用網站 例如：外銷系統、關務系統、客服系統、IFRS，使用ASP.NET MVC、.NET(Core)、Vue 3、Entity Framework、HTML、JQuery、JavaScript、MS SQL、RDLC',
            t('experience.jobs.0.description.1') || '規劃DevOps流程使用Azure DevOps、Jenkins、Git、MSBuild、Reporting Services PowerShell、IIS、Kubernetes、Harbor、Notion'
          ]
        },
        {
          title: t('experience.jobs.1.title') || '系統工程師',
          company: t('experience.jobs.1.company') || '耀聖資訊',
          location: t('experience.jobs.1.location') || '台灣, 台北',
          period: t('experience.jobs.1.period') || '2021年3月 - 2022年2月 · 11 個月',
          description: [
            t('experience.jobs.1.description.0') || '維護與開發醫療相關桌面應用程式，使用C#、Windows Presentation Foundation (WPF)、Entity Framework(DB First)、MS SQL、RDLC'
          ]
        },
        {
          title: t('experience.jobs.2.title') || '軟體工程師',
          company: t('experience.jobs.2.company') || '台灣新蛋',
          location: t('experience.jobs.2.location') || '台灣, 台北',
          period: t('experience.jobs.2.period') || '2014年9月 - 2018年9月 · 4 年 1 個月',
          description: [
            t('experience.jobs.2.description.0') || '維護與開發NewEgg.tw網站，包括前端與後端',
            t('experience.jobs.2.description.1') || '維護與開發企業入口網站(EIP)，包括後端與手機端(Android)使用 XMPP、MS SQL Server，使用Active MQ、Solr、Redis提升後端服務回應時間',
            t('experience.jobs.2.description.2') || '開發NewEgg Box 雲端系統桌面應用程式，使用Windows Presentation Foundation (WPF) 與 MVVM (MVVM Light)架構。研究與技術分享使團隊有更好的產出'
          ]
        }
      ]
    })

    const companyLogos = {
      0: '/company-logos/yfy.png',       // 永豐餘 (二級專員)
      1: '/company-logos/realsun.png',  // 耀聖資訊 (系統工程師)
      2: '/company-logos/newegg.png'     // 台灣新蛋 (軟體工程師)
    }

    const getCompanyLogo = (index) => {
      return companyLogos[index] || null
    }

    onMounted(() => {
      fadeInUp(title.value)

      // 等待DOM更新後再執行動畫
      setTimeout(() => {
        timelineItems.value.forEach((item, index) => {
          if (item) {
            slideInLeft(item, index * 0.3)
          }
        })
      }, 100)
    })

    return {
      title,
      timelineItems,
      jobs,
      getCompanyLogo
    }
  }
}
</script>

<style scoped>
.experience {
  background: #ffffff;
  min-height: 100vh;
  padding-top: 90px;
}

.timeline {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding: 20px;
}

.timeline-item {
  display: flex;
  margin-bottom: 50px;
  position: relative;
}

.timeline-marker {
  flex-shrink: 0;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
}

.timeline-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  border: 4px solid white;
  box-shadow: 0 4px 10px rgba(102, 126, 234, 0.3);
  z-index: 2;
  position: relative;
}

.timeline-line {
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, #667eea, #1e3a8a);
  margin-top: 10px;
  opacity: 0.3;
}

.timeline-content {
  flex: 1;
  position: relative;
  padding: 40px;
  min-height: 200px;
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 25px;
  left: -10px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid white;
  filter: drop-shadow(-2px 0 4px rgba(0,0,0,0.1));
}

.job-header {
  margin-bottom: 25px;
}

.job-title {
  font-size: 1.8rem;
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.job-meta {
  display: grid;
  gap: 8px;
}

.company-name {
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 600;
}

.job-location {
  color: #6b7280;
  font-weight: 500;
  font-size: 1.1rem;
}

.job-period {
  color: #667eea;
  font-weight: 600;
  font-size: 1.1rem;
}

.job-description {
  margin-bottom: 20px;
}

.description-list {
  list-style: none;
  padding: 0;
}

.description-item {
  position: relative;
  padding-left: 25px;
  margin-bottom: 15px;
  line-height: 1.7;
  color: #4a5568;
  font-size: 1.05rem;
}

.description-item::before {
  content: '●';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.description-item:hover {
  color: #2c3e50;
  transition: color 0.3s ease;
}

.company-logo {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.company-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 5px;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .timeline-item {
    flex-direction: column;
    margin-bottom: 40px;
  }

  .timeline-marker {
    flex-direction: row;
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
    justify-content: flex-start;
  }

  .timeline-line {
    width: 100%;
    height: 2px;
    margin-top: 0;
    margin-left: 10px;
  }

  .timeline-content {
    margin-left: 0;
  }

  .timeline-content::before {
    top: -20px;
    left: 25px;
    border-top: 10px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    filter: drop-shadow(0 -2px 4px rgba(0,0,0,0.1));
  }


  .company-logo {
    position: static;
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
    align-self: flex-start;
  }
}

@media (max-width: 480px) {
  .timeline {
    padding: 0 10px;
  }

  .timeline-content {
    padding: 20px;
  }

  .job-title {
    font-size: 1.3rem;
  }

  .company-name {
    font-size: 1.1rem;
  }

  .description-item {
    font-size: 0.95rem;
    padding-left: 20px;
  }

  .company-logo {
    width: 40px;
    height: 40px;
  }
}

/* 動畫效果 */
.timeline-item:hover .timeline-content {
  transform: translateX(5px);
  transition: transform 0.3s ease;
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
