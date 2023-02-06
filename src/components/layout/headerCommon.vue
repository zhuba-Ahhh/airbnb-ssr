<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="orders">房屋订单中心</el-menu-item>
    <el-menu-item index="records">历史足迹</el-menu-item>
    <el-sub-menu index="2">
      <template #title>国际化切换</template>
      <el-menu-item index="zh">中文</el-menu-item>
      <el-menu-item index="en">英文</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="avatar">
      <el-avatar shape="square" :size="50" :src="avatarUrl" />
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const avatarUrl = 'https://cdn.jsdelivr.net/gh/zhuba-Ahhh/CDN/img/logo_zhenzhou.jpg'
</script>
