<template>
  <div class="events" id="events">
    <section class="section">
      <div class="container">
        <h2 class="section-title" ref="title">{{ $t('education.activitiesSectionTitle') }}</h2>

        <div class="event-grid">
          <div
            v-for="(item, idx) in competitions"
            :key="idx"
            class="event-card card"
            :ref="el => eventCards[idx] = el"
          >
            <div class="card-header">
              <div class="school-info">
                <h3 class="school-name">{{ item.title }}</h3>
                <p class="period">{{ item.period }}</p>
              </div>
            </div>

            <div class="card-body">
              <p>{{ item.description }}</p>
              <p><strong>{{ item.result }}</strong></p>
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
  name: 'Event',
  setup() {
    const { t } = useI18n()
    const title = ref(null)
    const eventCards = ref([])
    const { fadeInUp, slideInLeft, slideInRight } = useAnimations()

    const competitions = computed(() => {
      return [
        {
          title: t('education.competitions.0.title') || 'GitHub Copilot 應用競賽',
          period: t('education.competitions.0.period') || '2025年7月',
          description: t('education.competitions.0.description') ||
            '參加永豐餘公司內部舉辦GitHub Copilot 競賽，運用GitHub Copilot功能包括自動完成、說明與註解、程式優化重構、測試資料、其他功能等共15項應用',
          result: t('education.competitions.0.result') ||
            '成果：獲得第二名並與全公司分享應用情境。'
        }
      ]
    })

    onMounted(() => {
      fadeInUp(title.value)

      eventCards.value.forEach((card, index) => {
        if (card) {
          if (index % 2 === 0) {
            slideInLeft(card, index * 0.2)
          } else {
            slideInRight(card, index * 0.2)
          }
        }
      })
    })

    return {
      title,
      competitions,
      eventCards
    }
  }
}
</script>

<style scoped>
.events {
  background: #ffffff;
  padding-top: 90px;
}

.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.event-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}

.event-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  border-color: #1e3a8a;
}

.event-card::after {
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

.event-card:hover::after {
  left: 100%;
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 25px;
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

.period {
  color: #6b7280;
  font-weight: 500;
  font-size: 0.95rem;
}

.card-body {
  margin-bottom: 20px;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .event-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 40px;
  }

  .card-header {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .school-name {
    font-size: 1.2rem;
  }

  .period {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .event-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .card-header {
    gap: 10px;
  }

  .school-name {
    font-size: 1.1rem;
  }

  .period {
    font-size: 0.95rem;
  }
}

/* 動畫效果 */
.event-card:hover .school-name {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
</style>