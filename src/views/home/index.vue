<script setup lang="ts">
import { useRouter } from "vue-router";
// import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'
// import electronSvg from ''

console.log("[App.vue]", `Hello world from Electron ${process.versions.electron}!`)

const router = useRouter();
// const electronSvg = require('@/assets/electron.svg')
// const viteSvg = require('@/assets/vite.svg')
// const vueSvg = require('@/assets/vue.svg')
const openChatGpt = () => {
  router.push({
    path: "/chatGpt"
  });
}
</script>

<template>
  <div class="flex-center">
    <a href="https://www.electronjs.org/" target="_blank">
      <img src="/electron.svg" class="logo electron" alt="Electron logo" />
    </a>
    <a href="https://vitejs.dev/" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
<!--  <HelloWorld msg="Electron + Vite + Vue" />-->
  <div class="flex-center">
    <Login />
  </div>
  <div class="flex-center">
    Place static files into the <code>/public</code> folder
    <img style="width:5em;" src="/node.svg" alt="Node logo">
  </div>
  <div class="flex-center">
    <span class="cursor-pointer" @click="openChatGpt">Open ChatGPT Website</span>
  </div>
</template>

<style>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.electron:hover {
  filter: drop-shadow(0 0 2em #9FEAF9);
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
