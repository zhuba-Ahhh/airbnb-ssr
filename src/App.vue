<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { useI18n } from 'vue-i18n'

const locale = ref(zhCn)
const Lang = ref('英')
const { locale: myLocale } = useI18n()

const router = useRouter()

const changeLang = () => {
  if (Lang.value === '中') {
    console.log(1)
    locale.value = zhCn
    Lang.value = '英'
    myLocale.value = 'zh'
  } else {
    console.log(2)
    locale.value = en
    Lang.value = '中'
    myLocale.value = 'en'
  }
}
</script>

<template>
  <el-config-provider :locale="locale">
    <button @click="changeLang()">切换{{ Lang }}文</button>
    <img src="/vite.svg" class="logo" alt="Vite logo" />

    <button @click="() => router.push({ path: '/' })">首页</button>
    <button @click="() => router.push({ path: '/mine' })">个人中心</button>
    <router-link to="/"> 首页 </router-link>
    <router-link to="/mine"> 个人中心 </router-link>
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped>

</style>
