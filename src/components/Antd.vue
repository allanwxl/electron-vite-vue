<script setup lang="ts">
  import { useRouter } from "vue-router";
  const router = useRouter();
  const goLogin = () => {
    router.push({
      path: "/login",
    });
  };
</script>

<template>
  <img alt="Vue logo" src="../assets/vue.svg" />
  <p>Vue3 + Ant Design Vue3 演示项目</p>
  <a-button type="primary" @click="goLogin">Login</a-button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
