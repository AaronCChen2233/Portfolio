# Aaron Chen - 個人履歷網站

這是使用 Vue 3 建立的響應式個人履歷網站，具備多語系支援、路由導航和豐富的動畫效果。

## 🌟 功能特色

- **多語系支援**: 中文/英文切換
- **響應式設計**: 支援桌機、平板、手機
- **路由導航**: 使用 Vue Router 進行頁面導航
- **滾動動畫**: 使用 GSAP 和 ScrollTrigger 製作滾動觸發動畫
- **現代化設計**: 美觀的 UI/UX 設計
- **效能優化**: 使用 Vite 構建工具

## 🚀 技術棧

- **前端框架**: Vue 3 (Composition API)
- **路由**: Vue Router 4
- **國際化**: Vue I18n 9
- **動畫**: GSAP + ScrollTrigger
- **構建工具**: Vite
- **樣式**: CSS3 (Grid, Flexbox, CSS Variables)

## 📱 頁面結構

1. **首頁** - 個人介紹和導航
2. **關於** - 詳細技能和個人特質
3. **經驗** - 工作經歷時間軸
4. **學歷** - 教育背景
5. **專案** - 作品集展示

## 🛠️ 安裝與運行

### 環境要求

- Node.js 16+
- npm 或 yarn

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

### 建置生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 🎨 自定義設定

### 修改個人資訊

1. 編輯 `src/i18n/index.js` 中的翻譯內容
2. 替換 `public/avatar.svg` 為你的頭像
3. 修改各個組件中的個人資訊

### 新增語言

1. 在 `src/i18n/index.js` 的 `messages` 物件中新增語言
2. 更新 `NavBar.vue` 中的語言切換邏輯

### 自定義主題色彩

編輯 CSS 變數或直接修改各組件的樣式：

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #1e3a8a;
  --text-color: #2c3e50;
  --bg-color: #f8fafc;
}
```

## 📁 專案結構

```
src/
├── components/          # 可重用組件
│   ├── NavBar.vue      # 導航欄
│   └── Footer.vue      # 頁腳
├── views/              # 頁面組件
│   ├── Home.vue        # 首頁
│   ├── About.vue       # 關於頁面
│   ├── Experience.vue  # 經驗頁面
│   ├── Education.vue   # 學歷頁面
│   └── Projects.vue    # 專案頁面
├── composables/        # 組合式函數
│   └── useAnimations.js # 動畫邏輯
├── i18n/              # 國際化設定
│   └── index.js       # 翻譯文件
├── router/            # 路由設定
│   └── index.js       # 路由配置
├── App.vue            # 根組件
└── main.js            # 應用入口
```

## 🎭 動畫效果

網站使用 GSAP 實現多種動畫效果：

- **fadeInUp**: 淡入上移
- **slideInLeft**: 左側滑入
- **slideInRight**: 右側滑入
- **scaleIn**: 縮放進入
- **staggerAnimation**: 錯開動畫

## 📱 響應式斷點

- **桌機**: > 968px
- **平板**: 768px - 968px
- **手機**: < 768px
- **小手機**: < 480px

## 🌐 部署

### GitHub Pages

1. 修改 `vite.config.js` 設定 base path
2. 建置專案: `npm run build`
3. 將 `dist` 資料夾內容推送到 `gh-pages` 分支

### Netlify

1. 連接 GitHub 倉庫
2. 設定建置命令: `npm run build`
3. 設定發佈目錄: `dist`

## 📄 授權

此專案採用 MIT 授權條款。

## 👨‍💻 作者

**陳志嶄 (Aaron Chen)**
- Email: aaronchen2233@gmail.com
- GitHub: [@AaronCChen2233](https://github.com/AaronCChen2233)
- LinkedIn: [Aaron Chen](https://linkedin.com/in/aaron-chen)

---

*這個履歷網站展示了現代前端開發技術的最佳實踐，包括組件化開發、狀態管理、國際化和動畫效果。*

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
