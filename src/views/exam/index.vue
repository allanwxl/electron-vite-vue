<script setup lang="ts">
import { LeftOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import http from '../../http/index'
import { useRouter } from "vue-router";
import { onMounted, ref } from 'vue'

const router = useRouter();
const examName = ref('')
const options = ref([])
const fieldNames = {
  label: 'examTitle',
  value: 'examTitle'
}

onMounted(async () => {
  await http.post('/login', {"username":"admin","password":"admin","uuid":""}).then((res: any) => {
    if (res.code === 0) {
      localStorage.setItem('token', res.data.token)
        // {
        //   "code": 0,
        //     "msg": "success",
        //     "data": {
        //   "token": "8553ff87027b2308dd662efeb3552021",
        //       "expire": 43200
        //    }
        // }
    }
  })
  await http.get(`/exam/examinfo/page?order=&orderField=&page=1&limit=10&govDeptId=&examTitle=&_t=${new Date().getTime()}`).then((res: any) => {
    console.log(res)
    options.value = res.data.list
    // {
    //   "code": 0,
    //     "msg": "success",
    //     "data": {
    //       "total": 122,
    //       "list": [
        //     {
        //       "id": null,
        //       "govDeptId": "",
        //       "examTitle": "202304一窗通办业务水平测试（2）",
        //       "examInfo": "单选题：20道。多选题：4道。问答题：0道。满分：100分。",
        //       "examBeginDate": "2023-04-25 16:35:00",
        //       "examFinishDate": null,
        //       "questionId": null,
        //       "questionScore": null,
        //       "creator": null,
        //       "createDate": null,
        //       "updater": null,
        //       "updateDate": null,
        //       "questionType1": null,
        //       "questionType1Score": null,
        //       "questionType2": null,
        //       "questionType2Score": null,
        //       "questionType3": null,
        //       "questionType3Score": null,
        //       "totalScore": null,
        //       "examDateTime": "2023-04-25 16:35:00 ～ 2023-04-25 17:20:00",
        //       "examShowType": "2"
        //     },
  })
})

// 按照考试题目查询考试题
const changeExamName = () => {
  http.get(`/exam/examemployee/${examName}?_t=${new Date().getTime()}`).then((res: any) => {
    // console.log(res.data)
    getAnswer(res.data)
    // {
    //   "code": 0,
    //     "msg": "success",
    //     "data": {
    //   "examTitle": "202304一窗通办业务水平测试（2）",
    //       "examInfo": "单选题：20道。多选题：4道。问答题：0道。满分：100分。",
    //       "singleList": [
  })
}
const getAnswer = (result: { singleList: { questionAnswer: string; }[]; poolList: { questionAnswer: string; }[]; }) => {
  result.singleList.forEach((el: { questionAnswer: string; }) => {
    console.log(el.questionAnswer)
  })

  result.poolList.forEach((el: { questionAnswer: string; }) => {
    console.log(el.questionAnswer)
  })
}
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
    <span>请选择考试题目: </span>
    <a-select
      v-model:value="examName"
      style="width: 200px"
      :options="options"
      :fieldNames="fieldNames"
      @change="changeExamName"
    ></a-select>
  </div>
</template>

<style>
</style>