<template>
  <div class="projects" id="projects">
    <section class="section">
      <div class="container">
        <h1 class="section-title" ref="title">{{ $t('projects.title') }}</h1>

        <div class="projects-grid">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="project-card card"
            :ref="el => projectCards[index] = el"
          >
            <div class="project-header">
              <div class="project-image">
                <img
                  :src="getProjectImage(index)"
                  :alt="project.name || 'Project image'"
                  v-if="getProjectImage(index)"
                />
                <div v-else class="image-placeholder">
                  <span class="project-icon">🚀</span>
                </div>
                <div class="project-overlay">
                  <div class="overlay-buttons">
                    <a
                      v-if="project.github"
                      :href="project.github"
                      target="_blank"
                      class="overlay-btn"
                    >
                      {{ $t('projects.viewGithub') }}
                    </a>
                    <a
                      v-if="project.website"
                      :href="project.website"
                      target="_blank"
                      class="overlay-btn"
                    >
                      {{ $t('projects.viewWebsite') }}
                    </a>
                    <span v-if="!project.github && !project.website" class="overlay-text">{{ $t('projects.internalProject') }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-content">
              <h3 class="project-title">{{ project.name || '' }}</h3>
              <p class="project-description">{{ project.description || '' }}</p>

              <div class="project-technologies">
                <span
                  v-for="tech in (project.technologies || '').split(' ').filter(t => t.trim())"
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech.replace(/[-_]/g, ' ') }}
                </span>
              </div>
            </div>

            <div class="project-footer" v-if="project.github || project.website">
              <div class="project-links">
                <a v-if="project.github" :href="project.github" target="_blank" class="project-link">
                  <img src="/github-logo.svg" alt="GitHub" class="link-icon-svg" />
                  {{ $t('projects.viewGithub') }}
                </a>
                <a v-if="project.website" :href="project.website" target="_blank" class="project-link">
                  <svg class="link-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
                  </svg>
                  {{ $t('projects.viewWebsite') }}
                </a>
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
  name: 'Projects',
  setup() {
    const { t } = useI18n()
    const title = ref(null)
    const projectCards = ref([])
    const footer = ref(null)
    const { fadeInUp, scaleIn } = useAnimations()

    const projects = computed(() => {
      // 使用個別的 t() 調用來確保響應性
      return [
        {
          name: t('projects.items.0.name') || 'Simple Music Notes Reader',
          description: t('projects.items.0.description') || '一個給音樂家讀樂譜的Android App，可開啟 .MusicXML 樂譜檔並顯示內容，並支援自動向下捲動功能，使用者可自訂捲動速度以配合演奏。',
          technologies: t('projects.items.0.technologies') || 'Android Kotlin JavaScript MVVM',
          github: t('projects.items.0.github') || 'https://github.com/AaronCChen2233/--Portfolio--simple_music_notes_reader',
          website: (t('projects.items.0.website') !== 'projects.items.0.website') ? t('projects.items.0.website') : null
        },
        {
          name: t('projects.items.1.name') || 'Multiple File Rename',
          description: t('projects.items.1.description') || '一個你可以批次幫檔案改名的 Windows 桌面軟體，一共有三種改名方法，取代，刪除與新增字元。',
          technologies: t('projects.items.1.technologies') || 'WPF .NET C# MVVM',
          github: t('projects.items.1.github') || 'https://github.com/AaronCChen2233/--Portfolio--Multiple_File_Rename',
          website: (t('projects.items.1.website') !== 'projects.items.1.website') ? t('projects.items.1.website') : null
        },
        {
          name: t('projects.items.2.name') || 'SUDOKU',
          description: t('projects.items.2.description') || '一個能隨機產生數獨問題的 Windows 桌面軟體，有使用者介面可使使用者玩數獨，可選擇難度，當你完成時計時器會自動暫停。',
          technologies: t('projects.items.2.technologies') || 'Swing Java',
          github: t('projects.items.2.github') || 'https://github.com/AaronCChen2233/--Portfolio--SUDOKU',
          website: (t('projects.items.2.website') !== 'projects.items.2.website') ? t('projects.items.2.website') : null
        },
        {
          name: t('projects.items.3.name') || 'Clipboard Translator',
          description: t('projects.items.3.description') || '一個翻譯的 Windows 桌面軟體，當你複製一個單字時會在角落跳出一個小視窗，上面會顯示關於這個單字的相關資訊與翻譯。',
          technologies: t('projects.items.3.technologies') || 'Swing Java',
          github: t('projects.items.3.github') || 'https://github.com/AaronCChen2233/--Portfolio--ClipboardTranslator',
          website: (t('projects.items.3.website') !== 'projects.items.3.website') ? t('projects.items.3.website') : null
        },
        {
          name: t('projects.items.4.name') || '客服系統',
          description: t('projects.items.4.description') || '管理客服專案，管理處理事項相關文件等，連接Team+處理客服專案',
          technologies: t('projects.items.4.technologies') || 'ASP.NET MVC JavaScript TeamPlus API Microsoft SQL Server',
          github: (t('projects.items.4.github') !== 'projects.items.4.github') ? t('projects.items.4.github') : null,
          website: (t('projects.items.4.website') !== 'projects.items.4.website') ? t('projects.items.4.website') : null
        },
        {
          name: t('projects.items.5.name') || '關務系統',
          description: t('projects.items.5.description') || '處理進口相關業務與統計報表',
          technologies: t('projects.items.5.technologies') || 'ASP.NET MVC JavaScript Microsoft SQL Server RDLC',
          github: (t('projects.items.5.github') !== 'projects.items.5.github') ? t('projects.items.5.github') : null,
          website: (t('projects.items.5.website') !== 'projects.items.5.website') ? t('projects.items.5.website') : null
        },
        {
          name: t('projects.items.6.name') || '智能會議助理',
          description: t('projects.items.6.description') || '使用雅婷語音轉文字服務與OpenAI，將會議內容逐字稿轉成摘要',
          technologies: t('projects.items.6.technologies') || 'OpenAI API Yating API Azure Vue .NET(Core)',
          github: (t('projects.items.6.github') !== 'projects.items.6.github') ? t('projects.items.6.github') : null,
          website: (t('projects.items.6.website') !== 'projects.items.6.website') ? t('projects.items.6.website') : null
        },
        {
          name: t('projects.items.7.name') || '緊急重大事件通報',
          description: t('projects.items.7.description') || '供廠內人員通報緊急重大事件，並傳簡訊、Email通報給相關人士',
          technologies: t('projects.items.7.technologies') || 'ASP.NET MVC Microsoft SQL Server SMTP SMS API',
          github: (t('projects.items.7.github') !== 'projects.items.7.github') ? t('projects.items.7.github') : null,
          website: (t('projects.items.7.website') !== 'projects.items.7.website') ? t('projects.items.7.website') : null
        },
        {
          name: t('projects.items.8.name') || 'IFRS集團合併報表系統',
          description: t('projects.items.8.description') || '將集團內子公司財務報表依International Financial Reporting Standards (國際財務報導準則)合併',
          technologies: t('projects.items.8.technologies') || 'ASP.NET MVC Microsoft SQL Server RDLC',
          github: (t('projects.items.8.github') !== 'projects.items.8.github') ? t('projects.items.8.github') : null,
          website: (t('projects.items.8.website') !== 'projects.items.8.website') ? t('projects.items.8.website') : null
        },
        {
          name: t('projects.items.9.name') || '永豐餘百年慶',
          description: t('projects.items.9.description') || '協助永豐餘百年慶活動IT系統使用者疑問與故障排除，處理特殊需求',
          technologies: t('projects.items.9.technologies') || '.NET(Core) Microsoft SQL Server RDLC',
          github: (t('projects.items.9.github') !== 'projects.items.9.github') ? t('projects.items.9.github') : null,
          website: (t('projects.items.9.website') !== 'projects.items.9.website') ? t('projects.items.9.website') : null
        },
        {
          name: t('projects.items.10.name') || 'ResChecker',
          description: t('projects.items.10.description') || '一個輕量的 .NET 命令列工具與 MCP 伺服器，用於驗證指定的文字是否存在於某個資料夾中的 .resx 或 .resources 檔案內。若不存在MCP會回傳請AI幫忙翻譯',
          technologies: t('projects.items.10.technologies') || 'GitHub-Copilot AI Agent MCP C#',
          github: t('projects.items.10.github') || 'https://github.com/AaronCChen2233/--Tools--ResChecker',
          website: (t('projects.items.10.website') !== 'projects.items.10.website') ? t('projects.items.10.website') : null
        },
        {
          name: t('projects.items.11.name') || '開發流程標準化',
          description: t('projects.items.11.description') || '扮演DevOps角色，運用公司現在的DevOps工具與Cloud native工具配合公司政策與開發人員習慣訂定幾個常見的開發流程標準化，包括需求訪談、開發、測試、部署等等，並推廣至全公司使用。',
          technologies: t('projects.items.11.technologies') || 'Azure-DevOps Git Jenkins Docker IIS Notion SQL-Server RDLC',
          github: (t('projects.items.11.github') !== 'projects.items.11.github') ? t('projects.items.11.github') : null,
          website: (t('projects.items.11.website') !== 'projects.items.11.website') ? t('projects.items.11.website') : null
        }
        // todo: 加上Newegg Eip、Newegg Box
      ]
    })

    const projectImages = {
      0: 'Portfolio/project-images/simplemusicnotesreader.png',
      1: 'Portfolio/project-images/multiplefilerename.png',
      2: 'Portfolio/project-images/sudoku.png',
      3: 'Portfolio/project-images/clipboardtranslator.png',
      4: 'Portfolio/project-images/chpis.png', 
      5: 'Portfolio/project-images/hcis.png', 
      6: 'Portfolio/project-images/hcis.png', 
      7: 'Portfolio/project-images/hcis.png',
      8: 'Portfolio/project-images/hcis.png', 
      9: 'Portfolio/project-images/100th.png',  
      10: 'Portfolio/project-images/ResChecker.png',  
      11: null // internal project has no image yet
    }

    const getProjectImage = (index) => {
      return projectImages[index] || null
    }

    onMounted(() => {
      fadeInUp(title.value)

      projectCards.value.forEach((card, index) => {
        if (card) {
          scaleIn(card, index * 0.1)
        }
      })

      fadeInUp(footer.value, 1.5)
    })

    return {
      title,
      projectCards,
      footer,
      projects,
      getProjectImage
    }
  }
}
</script>

<style scoped>
.projects {
  background: #ffffff;
  min-height: 100vh;
  padding-top: 90px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.project-card {
  background: white;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  border-color: #667eea;
}

.project-header {
  position: relative;
  height: 200px;
  overflow: hidden;
  border-bottom: 1px solid #e2e8f0;
}

.project-image {
  width: 100%;
  height: 100%;
  position: relative;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: #f8fafc;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-icon {
  font-size: 4rem;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 126, 234, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-buttons {
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
}

.overlay-btn {
  background: white;
  color: #667eea;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.overlay-btn:hover {
  background: #f8fafc;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.overlay-text {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
}

.project-content {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.project-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.tech-tag {
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);
}

.project-footer {
  padding: 20px 25px;
  border-top: 1px solid #e2e8f0;
  background: #f8fafc;
}

.project-links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-radius: 8px;
  background: white;
  border: 1px solid #e2e8f0;
}

.project-link:hover {
  color: #1e3a8a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.github-icon-svg, .link-icon-svg {
  width: 18px;
  height: 18px;
  filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(231deg) brightness(97%) contrast(92%);
}

.project-link:hover .github-icon-svg,
.project-link:hover .link-icon-svg {
  filter: brightness(0) saturate(100%) invert(10%) sepia(64%) saturate(3530%) hue-rotate(231deg) brightness(91%) contrast(103%);
}

.projects-footer {
  background: white;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
}

.footer-content h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
  font-weight: 700;
}

.footer-content p {
  color: #6b7280;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.footer-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}

.link-icon-svg {
  width: 18px;
  height: 18px;
  filter: invert(1);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }

  .project-header {
    height: 150px;
  }

  .project-content {
    padding: 20px;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .project-description {
    font-size: 0.95rem;
  }

  .tech-tag {
    font-size: 0.75rem;
    padding: 3px 8px;
  }

  .project-footer {
    padding: 15px 20px;
  }

  .project-links {
    gap: 10px;
  }

  .project-link {
    font-size: 0.9rem;
    padding: 6px 10px;
  }

  .projects-footer {
    padding: 30px 20px;
    margin: 0 10px;
  }

  .footer-links {
    gap: 15px;
  }

  .footer-link {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .project-content {
    padding: 15px;
  }

  .project-title {
    font-size: 1.1rem;
  }

  .project-description {
    font-size: 0.9rem;
  }

  .projects-footer {
    padding: 25px 15px;
  }

  .footer-content h3 {
    font-size: 1.3rem;
  }

  .footer-content p {
    font-size: 1rem;
  }

  .footer-links {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .footer-link {
    width: 200px;
    justify-content: center;
  }
}

/* 動畫效果 */
.project-card {
  animation: fadeInScale 0.6s ease-out forwards;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.tech-tag {
  animation: slideInUp 0.4s ease-out forwards;
  animation-delay: calc(var(--index) * 0.1s);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
