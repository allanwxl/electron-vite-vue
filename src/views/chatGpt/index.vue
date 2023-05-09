<script setup lang="ts">
import { useRouter } from "vue-router";
import { LeftOutlined, ReloadOutlined } from '@ant-design/icons-vue';
// <webview id="foo" src="https://chat.openai.com/" style="display:inline-flex; width:640px; height:480px"></webview>
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
  <div class="flex mb-20px">
    <a-button size="large" @click="goBack">
      <template #icon><left-outlined /></template>
    </a-button>
    <a-button size="large" @click="reload" class="ml-10px">
      <template #icon><reload-outlined /></template>
    </a-button>
  </div>
  <iframe src="https://chat.openai.com/" height="600" width="800"></iframe>
</template>

<style>

</style>
