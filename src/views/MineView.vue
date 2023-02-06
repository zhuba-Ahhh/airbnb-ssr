<script setup lang="ts">
import IndexedDB from '@/utils/indexedDB'
import { fetchRoom, fetchTest } from '@/apis'

const storeName = 'room'
const airbnbDB = new IndexedDB('airbnb')
airbnbDB.openStore('room', 'id', ['长', '宽'])

const data = {
  id: '1', // 不传就是新增
  长: '20m',
  宽: '12m'
}

function addData() {
  airbnbDB.updateItem(storeName, data)
}

function deleteData(key: number | string) {
  airbnbDB.deleteItem(storeName, key)
}

function getAllData() {
  airbnbDB.getList(storeName)
}

function getItem(key: number | string) {
  airbnbDB.getItem(storeName, key)
}

function getTest() {
  fetchTest().then((res: any) => {
    console.log('真实数据', res)
  })
}

function getRoom() {
  fetchRoom().then(res => {
    console.log('mock数据', res)
  })
}
getTest()
getRoom()
</script>

<template>
  <main>Mine</main>
  <el-button @click="addData()">addData</el-button>
  <el-button @click="deleteData('1')">deleteData</el-button>
  <el-button @click="getAllData()">getAllData</el-button>
  <el-button @click="getItem('1')">getItem</el-button>
</template>
