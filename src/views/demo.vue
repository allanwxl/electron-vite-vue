<script setup lang="ts">
import { LeftOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import http from '../../http/index'
import { useRouter } from "vue-router";
import { onMounted, ref } from 'vue'


const router = useRouter();
const goBack = () => {
  router.push({
    path: "/"
  });
}
const reload = () => {
  window.location.reload()
}
</script>

<template>
  <div class="flex">
    <a-button size="large" @click="goBack">
      <template #icon><left-outlined /></template>
    </a-button>
    <a-button size="large" @click="reload" class="ml-10px">
      <template #icon><reload-outlined /></template>
    </a-button>
  </div>
  <div class="mt-10px">
  </div>
  <div class="mt-10px">
  </div>
</template>

<style>
</style>