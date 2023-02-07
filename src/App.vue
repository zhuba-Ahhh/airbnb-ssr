<script setup lang="ts">
import { ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { useI18n } from 'vue-i18n'
import headerCommon from '@/components/layout/headerCommon.vue'

const { locale: myLocale } = useI18n()
const locale = ref(zhCn)

const changeLang = (language: string) => {
  locale.value = language === 'en' ? en : zhCn
  myLocale.value = language
}
</script>

<template>
  <el-config-provider :locale="locale">
    <headerCommon @changeLang="changeLang" />
    <router-link to="/"> 首页 </router-link>
    <router-link to="/mine"> 个人中心 </router-link>
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped>

</style>
