<template>
  <div class="debug-page">
    <h1>Debug Page</h1>
    <p>如果你能看到這個頁面，表示 Vue 正常運作。</p>
    <div class="test-content">
      <h2>{{ $t('home.greeting') }} {{ $t('home.name') }}</h2>
      <p>{{ $t('home.title') }}</p>
      <button @click="toggleLang" class="debug-btn">
        切換語言: {{ currentLang }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Debug',
  setup() {
    const { locale } = useI18n()
    const currentLang = ref(locale.value)

    const toggleLang = () => {
      currentLang.value = currentLang.value === 'zh' ? 'en' : 'zh'
      locale.value = currentLang.value
    }

    return {
      currentLang,
      toggleLang
    }
  }
}
</script>

<style scoped>
.debug-page {
  padding: 50px 20px;
  background: white;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.test-content {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  margin: 20px 0;
}

.debug-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.debug-btn:hover {
  background: #0056b3;
}
</style>
