<template>
  <div class="events" id="events">
    <section class="section">
      <div class="container">
        <h2 class="section-title" ref="title">{{ $t('events.sectionTitle') }}</h2>

        <div class="event-grid">
          <div
            v-for="(item, idx) in competitions"
            :key="idx"
            class="event-card card"
            :ref="el => eventCards[idx] = el"
          >
            <div class="card-header">
              <div class="event-info">
                <h3 class="event-name">{{ item.title }}</h3>
                <p class="period">{{ item.period }}</p>
              </div>
            </div>

            <div class="card-body">
              <p>{{ item.description }}</p>
              <ul v-if="item.details && item.details.length" class="details-list">
                <li v-for="(d, i) in item.details" :key="i" class="detail-item">
                  {{ d }}
                </li>
              </ul>
              <p v-if="item.url" class="event-link">
                <a :href="item.url" target="_blank" class="event-btn">
                  {{ $t('events.visitWebsite') }}
                </a>
              </p>
              <p v-if="item.result"><strong>{{ item.result }}</strong></p>
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
      // build list from events items; manual order preserved
      return [
        {
          title: t('events.items.0.title') || 'DevOpsDays 2025',
          period: t('events.items.0.period') || '2025年6月5日至6日',
          description: t('events.items.0.description') || '參加臺灣規模最大的DevOps盛會',          url: t('events.items.0.url') || 'https://devopsdays.tw/2025/',          details: [
            t('events.items.0.details.0') || 'Open Space：與DevOps實踐者、技術專家、開發者交流互動討論AI焦慮。',
            t('events.items.0.details.1') || '工作坊：使用Azure DevOps CI/CD工作坊',
            t('events.items.0.details.2') || '主題議程：參與專家與企業DevOps與AI應用分享',
            t('events.items.0.details.3') || '專家面對面：與專家提問討論激盪想法'
          ],
          result: null
        },
        {
          title: t('events.items.1.title') || 'IT Home 雲端大會',
          period: t('events.items.1.period') || '2025年7月2日',
          description: t('events.items.1.description') ||
            '參與臺灣規模最大雲端盛會了解最新雲端趨勢，今年活動特別加上AI相關的應用、趨勢及討論，實際操作最新雲端工具與AI工具工作坊',
          url: t('events.items.1.url') || 'https://cloudsummit.ithome.com.tw/2025/',
          result: null
        },
        {
          title: t('events.items.2.title') || 'GitHub Copilot 應用競賽',
          period: t('events.items.2.period') || '2025年7月',
          description: t('events.items.2.description') ||
            '參加永豐餘公司內部舉辦GitHub Copilot 競賽，運用GitHub Copilot功能包括自動完成、說明與註解、程式優化重構、測試資料、其他功能等共15項應用',
          result: t('events.items.2.result') ||
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

.event-info {
  flex: 1;
}

.event-name {
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

.details-list {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.detail-item {
  position: relative;
  padding-left: 25px;
  margin-bottom: 8px;
  line-height: 1.5;
  color: #4a5568;
}

.detail-item::before {
  content: '●';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

/* responsive tweaks for medium screens */
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

  .event-name {
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

  .event-name {
    font-size: 1.1rem;
  }

  .period {
    font-size: 0.95rem;
  }
}

/* 活動官網按鈕 */
.event-btn {
  display: inline-block;
  padding: 8px 16px;
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;
}

.event-btn:hover {
  background: linear-gradient(135deg, #1e3a8a 0%, #667eea 100%);
}

/* 動畫效果 */
.event-card:hover .event-name {
  transition: transform 0.3s ease;
}
</style>