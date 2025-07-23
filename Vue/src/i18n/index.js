import { createI18n } from 'vue-i18n'

const messages = {
  zh: {
    nav: {
      home: '首頁',
      about: '關於',
      experience: '經驗',
      education: '學歷',
      projects: '作品與專案'
    },
    home: {
      greeting: '您好，我是',
      name: '陳志嶄',
      title: '一位來自台灣的軟體工程師。'
    },
    about: {
      title: '關於',
      description: '擁有 8 年軟體開發經驗，涵蓋 DevOps、後端、前端 與 Windows 桌面應用開發。具備後端重構與需求分析能力，重視程式碼的可讀性與效能。熱愛學習與自我成長，不斷精進技術。',
      traits: {
        title: '個人特質',
        content: '創意創新、洞察力強、團隊合作佳、個性善良勇敢、平易近人'
      },
      stats: {
        experience: '年經驗',
        degrees: '學位',
        certificates: '證書',
        skills: '技術專長',
        projects: '作品與專案'
      },
      skills: {
        title: '技能',
        devops: 'DevOps',
        webDev: '網頁開發',
        desktop: '桌面程式開發',
        mobile: '手機軟體開發',
        database: '資料庫',
        tools: '開發工具',
        versionControl: '版控工具'
      },
      learning: {
        title: '能力提升學習管道',
        podcast: 'Podcast',
        reading: '閱讀',
        others: '線上課程, 技術分享, 研究'
      }
    },
    experience: {
      title: '經驗',
      current: '至今',
      months: '個月',
      year: '年',
      jobs: [
        {
          title: '二級專員',
          company: '永豐餘投資控股股份有限公司',
          location: '台灣, 台北',
          period: '2022年4月 - 至今',
          description: [
            '開發供公司內部人使用網站 例如：外銷系統、關務系統、客服系統、IFRS，使用ASP.NET MVC、.NET(Core)、Vue 3、Entity Framework、HTML、JQuery、JavaScript、MS SQL、RDLC',
            '規劃DevOps流程使用Azure DevOps、Jenkins、Git、MSBuild、Reporting Services PowerShell、IIS、Kubernetes、Harbor、Notion'
          ]
        },
        {
          title: '系統工程師',
          company: '耀聖資訊',
          location: '台灣, 台北',
          period: '2021年3月 - 2022年2月 · 11 個月',
          description: [
            '維護與開發醫療相關桌面應用程式，使用C#、Windows Presentation Foundation (WPF)、Entity Framework(DB First)、MS SQL、RDLC'
          ]
        },
        {
          title: '軟體工程師',
          company: '台灣新蛋',
          location: '台灣, 台北',
          period: '2014年9月 - 2018年9月 · 4 年 1 個月',
          description: [
            '維護與開發NewEgg.tw網站，包括前端與後端',
            '維護與開發企業入口網站(EIP)，包括後端與手機端(Android)使用 XMPP、MS SQL Server，使用Active MQ、Solr、Redis提升後端服務回應時間',
            '開發NewEgg Box 雲端系統桌面應用程式，使用Windows Presentation Foundation (WPF) 與 MVVM (MVVM Light)架構。研究與技術分享使團隊有更好的產出'
          ]
        }
      ]
    },
    education: {
      title: '學歷',
      activitiesTitle: '活動與成就',
      nonDegreeBadge: '非學位課程',
      bachelorBadge: '學士學位',
      schools: [
        {
          name: 'Cornerstone International Community College of Canada',
          degree: 'Web 與 App 開發 非學位課程',
          period: '2019 - 2021',
          activities: [
            '志工工作 維護電腦教室'
          ]
        },
        {
          name: '國立澎湖科技大學',
          degree: '資訊管理學學士',
          period: '2010 - 2014',
          activities: [
            '曾至廈門集美大學電商管理系交換一學期',
            '畢業專題小組組長',
            '助教'
          ]
        }
      ]
    },
    projects: {
      title: '作品與專案',
      internalProject: '內部專案',
      items: [
        {
          name: 'Simple Music Notes Reader',
          description: '一個給音樂家讀樂譜的Android App，可開啟 .MusicXML 樂譜檔並顯示內容，並支援自動向下捲動功能，使用者可自訂捲動速度以配合演奏。',
          technologies: 'Android Kotlin JavaScript MVVM',
          github: 'https://github.com/AaronCChen2233/--Portfolio--simple_music_notes_reader',
          website: null
        },
        {
          name: 'Multiple File Rename',
          description: '一個你可以批次幫檔案改名的 Windows 桌面軟體，一共有三種改名方法，取代，刪除與新增字元。',
          technologies: 'WPF .NET C# MVVM',
          github: 'https://github.com/AaronCChen2233/--Portfolio--Multiple_File_Rename',
          website: null
        },
        {
          name: 'SUDOKU',
          description: '一個能隨機產生數獨問題的 Windows 桌面軟體，有使用者介面可使使用者玩數獨，可選擇難度，當你完成時計時器會自動暫停。',
          technologies: 'Swing Java',
          github: 'https://github.com/AaronCChen2233/--Portfolio--SUDOKU',
          website: null
        },
        {
          name: 'Clipboard Translator',
          description: '一個翻譯的 Windows 桌面軟體，當你複製一個單字時會在角落跳出一個小視窗，上面會顯示關於這個單字的相關資訊與翻譯。',
          technologies: 'Swing Java',
          github: 'https://github.com/AaronCChen2233/--Portfolio--ClipboardTranslator',
          website: null
        },
        {
          name: '客服系統',
          description: '管理客服專案，管理處理事項相關文件等，連接Team+處理客服專案',
          technologies: 'ASP.NET MVC JavaScript TeamPlus API Microsoft SQL Server',
          github: null,
          website: null
        },
        {
          name: '關務系統',
          description: '處理進口相關業務與統計報表',
          technologies: 'ASP.NET MVC JavaScript Microsoft SQL Server RDLC',
          github: null,
          website: null
        },
        {
          name: '智能會議助理',
          description: '使用雅婷語音轉文字服務與OpenAI，將會議內容逐字稿轉成摘要',
          technologies: 'OpenAI API Yating API Azure Vue .NET(Core)',
          github: null,
          website: null
        },
        {
          name: '緊急重大事件通報',
          description: '供廠內人員通報緊急重大事件，並傳簡訊、Email通報給相關人士',
          technologies: 'ASP.NET MVC Microsoft SQL Server SMTP SMS API',
          github: null,
          website: null
        },
        {
          name: 'IFRS集團合併報表系統',
          description: '將集團內子公司財務報表依International Financial Reporting Standards (國際財務報導準則)合併',
          technologies: 'ASP.NET MVC Microsoft SQL Server RDLC',
          github: null,
          website: null
        },
        {
          name: '永豐餘百年慶',
          description: '協助永豐餘百年慶活動IT系統使用者疑問與故障排除，處理特殊需求',
          technologies: '.NET(Core) Microsoft SQL Server RDLC',
          github: null,
          website: 'https://100th.yfy.com/'
        }
      ],
      viewGithub: '查看 GitHub',
      viewWebsite: '查看網站'
    },
    footer: {
      madeBy: '此履歷由陳志嶄設計與製作',
      tech: '使用 Vue, JavaScript, GSAP'
    },
    contact: {
      email: '信箱',
      github: 'GitHub',
      notion: '工程筆記'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects'
    },
    home: {
      greeting: 'Hello, I am',
      name: 'Aaron Chen',
      title: 'A Software Engineer from Taiwan.'
    },
    about: {
      title: 'About',
      description: '8 years of software development experience, covering DevOps, backend, frontend and Windows desktop application development. Capable of backend refactoring and requirement analysis, focusing on code readability and performance. Love learning and self-improvement, continuously improving technical skills.',
      traits: {
        title: 'Personal Traits',
        content: 'Creative and innovative, strong insight, good teamwork, kind and brave personality, approachable'
      },
      stats: {
        experience: 'Years Experience',
        degrees: 'Degree',
        certificates: 'Certificates',
        skills: 'Skills',
        projects: 'Projects'
      },
      skills: {
        title: 'Skills',
        devops: 'DevOps',
        webDev: 'Web Development',
        desktop: 'Desktop Development',
        mobile: 'Mobile Development',
        database: 'Database',
        tools: 'Development Tools',
        versionControl: 'Version Control'
      },
      learning: {
        title: 'Learning Channels',
        podcast: 'Podcast',
        reading: 'Reading',
        others: 'Online courses, Tech sharing, Research'
      }
    },
    experience: {
      title: 'Experience',
      current: 'Present',
      months: 'months',
      year: 'years',
      jobs: [
        {
          title: 'Level 2 Specialist',
          company: 'YFY Inc.',
          location: 'Taiwan, Taipei',
          period: 'April 2022 - Present',
          description: [
            'Develop internal websites such as: export system, customs system, customer service system, IFRS, using ASP.NET MVC, .NET(Core), Vue 3, Entity Framework, HTML, JQuery, JavaScript, MS SQL, RDLC',
            'Plan DevOps processes using Azure DevOps, Jenkins, Git, MSBuild, Reporting Services PowerShell, IIS, Kubernetes, Harbor, Notion'
          ]
        },
        {
          title: 'System Engineer',
          company: 'RealSun Information',
          location: 'Taiwan, Taipei',
          period: 'March 2021 - February 2022 · 11 months',
          description: [
            'Maintain and develop medical-related desktop applications using C#, Windows Presentation Foundation (WPF), Entity Framework(DB First), MS SQL, RDLC'
          ]
        },
        {
          title: 'Software Engineer',
          company: 'Newegg Taiwan',
          location: 'Taiwan, Taipei',
          period: 'September 2014 - September 2018 · 4 years 1 month',
          description: [
            'Maintain and develop NewEgg.tw website, including frontend and backend',
            'Maintain and develop Enterprise Information Portal (EIP), including backend and mobile (Android) using XMPP, MS SQL Server, using Active MQ, Solr, Redis to improve backend service response time',
            'Develop NewEgg Box cloud system desktop application using Windows Presentation Foundation (WPF) and MVVM (MVVM Light) architecture. Research and technical sharing for better team output'
          ]
        }
      ]
    },
    education: {
      title: 'Education',
      activitiesTitle: 'Activities & Achievements',
      nonDegreeBadge: 'Non-degree Program',
      bachelorBadge: 'Bachelor Degree',
      schools: [
        {
          name: 'Cornerstone International Community College of Canada',
          degree: 'Web & App Development Non-degree Program',
          period: '2019 - 2021',
          activities: [
            'Volunteer work maintaining computer lab'
          ]
        },
        {
          name: 'National Penghu University of Science and Technology',
          degree: 'Bachelor of Information Management',
          period: '2010 - 2014',
          activities: [
            'Exchange student at Jimei University E-commerce Management Department for one semester',
            'Graduation project team leader',
            'Teaching assistant'
          ]
        }
      ]
    },
    projects: {
      title: 'Projects & Works',
      internalProject: 'Internal Project',
      items: [
        {
          name: 'Simple Music Notes Reader',
          description: 'An Android App for musicians to read sheet music, can open .MusicXML sheet music files and display content, supports automatic scrolling function, users can customize scrolling speed to match performance.',
          technologies: 'Android Kotlin JavaScript MVVM',
          github: 'https://github.com/AaronCChen2233/--Portfolio--simple_music_notes_reader',
          website: null
        },
        {
          name: 'Multiple File Rename',
          description: 'A Windows desktop software that can batch rename files, with three renaming methods: replace, delete and add characters.',
          technologies: 'WPF .NET C# MVVM',
          github: 'https://github.com/AaronCChen2233/--Portfolio--Multiple_File_Rename',
          website: null
        },
        {
          name: 'SUDOKU',
          description: 'A Windows desktop software that can randomly generate Sudoku problems, with user interface for playing Sudoku, difficulty selection, timer automatically pauses when completed.',
          technologies: 'Swing Java',
          github: 'https://github.com/AaronCChen2233/--Portfolio--SUDOKU',
          website: null
        },
        {
          name: 'Clipboard Translator',
          description: 'A translation Windows desktop software, when you copy a word, a small window will pop up in the corner showing relevant information and translation about the word.',
          technologies: 'Swing Java',
          github: 'https://github.com/AaronCChen2233/--Portfolio--ClipboardTranslator',
          website: null
        },
        {
          name: 'Customer Service System',
          description: 'Manage customer service projects, manage processing-related documents, connect with Team+ to handle customer service projects',
          technologies: 'ASP.NET MVC JavaScript TeamPlus API Microsoft SQL Server',
          github: null,
          website: null
        },
        {
          name: 'Customs System',
          description: 'Handle import-related business and statistical reports',
          technologies: 'ASP.NET MVC JavaScript Microsoft SQL Server RDLC',
          github: null,
          website: null
        },
        {
          name: 'AI Meeting Assistant',
          description: 'Use Yating speech-to-text service and OpenAI to convert meeting transcripts into summaries',
          technologies: 'OpenAI API Yating API Azure Vue .NET(Core)',
          github: null,
          website: null
        },
        {
          name: 'Emergency Incident Reporting',
          description: 'For factory personnel to report emergency incidents, send SMS and email notifications to relevant personnel',
          technologies: 'ASP.NET MVC Microsoft SQL Server SMTP SMS API',
          github: null,
          website: null
        },
        {
          name: 'IFRS System',
          description: 'Consolidate subsidiary financial statements within the group according to International Financial Reporting Standards',
          technologies: 'ASP.NET MVC Microsoft SQL Server RDLC',
          github: null,
          website: null
        },
        {
          name: 'YFY 100 Year Anniversary',
          description: 'Assist with YFY centennial celebration IT system user inquiries and troubleshooting, handle special requirements',
          technologies: '.NET(Core) Microsoft SQL Server RDLC',
          github: null,
          website: 'https://100th.yfy.com/'
        }
      ],
      viewGithub: 'View GitHub',
      viewWebsite: 'View Website'
    },
    footer: {
      madeBy: 'This resume designed and created by Aaron Chen',
      tech: 'Built with Vue, JavaScript, GSAP'
    },
    contact: {
      email: 'Email',
      github: 'GitHub',
      notion: 'Engineering Notes'
    }
  }
}

const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages
})

export default i18n
