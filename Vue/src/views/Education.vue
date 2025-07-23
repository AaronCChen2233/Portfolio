<template>
  <div class="education" id="education">
    <section class="section">
      <div class="container">
        <h1 class="section-title" ref="title">{{ $t('education.title') }}</h1>

        <div class="education-grid">
          <div
            v-for="(school, index) in schools"
            :key="index"
            class="education-card card"
            :ref="el => educationCards[index] = el"
          >
            <div class="card-header">
              <div class="school-logo">
                <img
                  :src="getSchoolLogo(index)"
                  :alt="school.name || 'School logo'"
                  v-if="getSchoolLogo(index)"
                />
                <div v-else class="logo-placeholder">
                  {{ school.name?.charAt(0) || '?' }}
                </div>
              </div>
              <div class="school-info">
                <h3 class="school-name">{{ school.name || '' }}</h3>
                <h4 class="degree">{{ school.degree || '' }}</h4>
                <p class="period">{{ school.period || '' }}</p>
              </div>
            </div>

            <div class="card-body">
              <div class="activities" v-if="school.activities && school.activities.length">
                <h5 class="activities-title">{{ $t('education.activitiesTitle') }}</h5>
                <ul class="activities-list">
                  <li
                    v-for="(activity, actIndex) in school.activities"
                    :key="actIndex"
                    class="activity-item"
                  >
                    {{ activity }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="card-footer">
              <div class="achievement-badge">
                <span class="badge-text">{{ getBadgeText(school.degree) }}</span>
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
  name: 'Education',
  setup() {
    const { t } = useI18n()
    const title = ref(null)
    const educationCards = ref([])
    const stats = ref(null)
    const { fadeInUp, slideInLeft, slideInRight, scaleIn } = useAnimations()

    const schools = computed(() => {
      // 使用個別的 t() 調用來確保響應性
      return [
        {
          name: t('education.schools.0.name') || 'Cornerstone International Community College of Canada',
          degree: t('education.schools.0.degree') || 'Web 與 App 開發 非學位課程',
          period: t('education.schools.0.period') || '2019 - 2021',
          activities: [
            t('education.schools.0.activities.0') || '志工工作 維護電腦教室'
          ]
        },
        {
          name: t('education.schools.1.name') || '國立澎湖科技大學',
          degree: t('education.schools.1.degree') || '資訊管理學學士',
          period: t('education.schools.1.period') || '2010 - 2014',
          activities: [
            t('education.schools.1.activities.0') || '曾至廈門集美大學電商管理系交換一學期',
            t('education.schools.1.activities.1') || '畢業專題小組組長',
            t('education.schools.1.activities.2') || '助教'
          ]
        }
      ]
    })

    const schoolLogos = {
      0: '/school-logos/ciccc.png',  // CICCC
      1: '/school-logos/npu.png'     // 澎湖科技大學
    }

    const getSchoolLogo = (index) => {
      return schoolLogos[index] || null
    }

    const getBadgeText = (degree) => {
      // 檢查是否為非學位課程（支持中英文）
      if (degree.includes('非學位') || degree.toLowerCase().includes('non-degree')) {
        return t('education.nonDegreeBadge')
      } else {
        return t('education.bachelorBadge')
      }
    }

    onMounted(() => {
      fadeInUp(title.value)

      educationCards.value.forEach((card, index) => {
        if (card) {
          if (index % 2 === 0) {
            slideInLeft(card, index * 0.2)
          } else {
            slideInRight(card, index * 0.2)
          }
        }
      })

      scaleIn(stats.value, 0.6)
    })

    return {
      title,
      educationCards,
      stats,
      schools,
      getSchoolLogo,
      getBadgeText
    }
  }
}
</script>

<style scoped>
.education {
  background: #ffffff;
  min-height: 100vh;
  padding-top: 90px;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.education-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}

.education-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  border-color: #1e3a8a;
}

.education-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4) 50%,
    transparent
  );
  transition: left 0.6s ease;
  pointer-events: none;
  z-index: 1;
}

.education-card:hover::after {
  left: 100%;
}

.education-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 25px;
}

.school-logo {
  width: 80px;
  height: 80px;
  border-radius: 15px;
  overflow: hidden;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.school-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 5px;
}

.logo-placeholder {
  font-size: 2rem;
  font-weight: 700;
  color: #1e3a8a;
}

.school-info {
  flex: 1;
}

.school-name {
  font-size: 1.3rem;
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.3;
}

.degree {
  font-size: 1.1rem;
  color: #1e3a8a;
  font-weight: 600;
  margin-bottom: 5px;
}

.period {
  color: #6b7280;
  font-weight: 500;
  font-size: 0.95rem;
}

.card-body {
  margin-bottom: 20px;
}

.activities-title {
  font-size: 1rem;
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 15px;
  border-bottom: 2px solid #667eea;
  padding-bottom: 5px;
  display: inline-block;
}

.activities-list {
  list-style: none;
  padding: 0;
}

.activity-item {
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  line-height: 1.5;
  color: #4a5568;
}

.activity-item::before {
  content: '●';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
}

.achievement-badge {
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}



.stat-item {
  text-align: center;
  padding: 20px;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1rem;
  color: #6b7280;
  font-weight: 500;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .education-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 40px;
  }

  .education-card {
    margin: 0 10px;
  }

  .card-header {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .school-logo {
    width: 60px;
    height: 60px;
    align-self: center;
  }

  .school-name {
    font-size: 1.2rem;
  }

  .degree {
    font-size: 1rem;
  }



  .stat-number {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .education-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .card-header {
    gap: 10px;
  }

  .school-logo {
    width: 50px;
    height: 50px;
  }

  .logo-placeholder {
    font-size: 1.5rem;
  }

  .school-name {
    font-size: 1.1rem;
  }

  .degree {
    font-size: 0.95rem;
  }



  .stat-item {
    padding: 15px;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.9rem;
  }
}

/* 動畫效果 */
.education-card:hover .school-logo {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.education-card:hover .achievement-badge {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.activity-item:hover {
  color: #2c3e50;
  transform: translateX(5px);
  transition: all 0.3s ease;
}
</style>
