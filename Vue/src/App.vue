<template>
  <div id="app">
    <NavBar />
    <main>
      <Home />
      <About />
      <Experience />
      <Education />
      <Projects />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Experience from './views/Experience.vue'
import Education from './views/Education.vue'
import Projects from './views/Projects.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    Home,
    About,
    Experience,
    Education,
    Projects
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
}

main {
  flex: 1;
  width: 100%;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.section {
  padding: 80px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.section-title {
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #2c3e50;
  font-weight: 700;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  margin-bottom: 30px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

/* 響應式設計 */
@media (max-width: 1240px) {
  .container {
    padding: 0 20px;
  }

  #app {
    width: 100vw;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  #app {
    width: 100vw;
    padding: 0;
    margin: 0;
  }

  .section {
    padding: 60px 0;
    min-height: auto;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .card {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  #app {
    width: 100vw;
    padding: 0;
    margin: 0;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}

/* 滾動條樣式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #1e3a8a 100%);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
}

/* 確保滾動條不會影響佈局 */
html {
  overflow-y: scroll;
  scrollbar-gutter: stable;
}
</style>
