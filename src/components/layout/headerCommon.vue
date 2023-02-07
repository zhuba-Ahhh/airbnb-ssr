<template>
  <div class="header-common">
    <img :size="50" :src="logoUrl" alt="店" class="logo" />
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="orders">房屋订单中心</el-menu-item>
      <el-menu-item index="records">历史足迹</el-menu-item>
      <el-sub-menu index="language">
        <template #title>国际化切换</template>
        <el-menu-item index="zh">{{ t("message.zh") }}</el-menu-item>
        <el-menu-item index="en">{{ t("message.en") }}</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="avatar"><img :src="avatarUrl" alt="个人中心" class="avatar" /></el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const emit = defineEmits<{
  (e: 'changeLang', language: any): void
}>()

const activeIndex = ref('orders')

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  if (key === 'zh') emit('changeLang', 'zhCn')
  else if (key === 'en') emit('changeLang', 'en')
}

const avatarUrl = 'https://cdn.jsdelivr.net/gh/zhuba-Ahhh/CDN/img/logo_zhenzhou.jpg'
const logoUrl = 'https://cdn.jsdelivr.net/gh/zhuba-Ahhh/CDN/img/logo_dian.png'
</script>

<style lang="scss" scoped>
@import '@/assets/styles/layout/index.scss'
</style>
