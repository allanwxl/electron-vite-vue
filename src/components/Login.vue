<script setup lang="ts">
  import { useRouter } from "vue-router";
  import { reactive, ref } from "vue";

  interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }

  const router = useRouter();
  const goExam = () => {
    router.push({
      path: "/exam",
    });
  };

  const formState = reactive<FormState>({
    username: '',
    password: '',
    remember: true,
  });
  const onFinish = (values: any) => {
    console.log('Success:', values);
    if (formState.username === 'wangxuanlv' && formState.password === 'wangxuanlv') {
      goExam()
    } else {
      showError()
    }
  };

  const showErrorFlag = ref(false)
  const showError = () => {
    showErrorFlag.value = true
  }

  const hiddenError = () => {
    showErrorFlag.value = false
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

</script>

<template>
  <div class="login-container">
    <a-alert v-show="showErrorFlag" message="用户名或密码错误!" type="error" />
    <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
    >
      <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 5, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 5, span: 16 }">
        <a-button type="primary" html-type="submit">Login</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style>
.login-container {
  max-width: 50vw;
}
</style>
