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


const columns = [
  {
    title: '部门编号',
    dataIndex: 'govDeptId',
  },
  {
    title: '题目',
    dataIndex: 'questionTitle',
  },
  {
    title: '选项',
    dataIndex: 'questionOption',
    ellipsis: true
  },
  {
    title: '题型',
    dataIndex: 'questionType',
  },
  {
    title: '答案',
    dataIndex: 'questionAnswer',
  },
  {
    title: '更新时间',
    dataIndex: 'updateDate',
  },
];

const data = ref([])

const getTableData = async () => {
  await http.get('/posts/getAllMess').then((res: any) => {
    data.value = res
  })
}
onMounted(async () => {
  await getTableData()
})
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
    <a-table :columns="columns" :data-source="data" :scroll="{ y: 500 }" bordered class="data-table" >
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'questionType'">
          <span>{{ text === 1 ? '单选' : '多选' }}</span>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style scoped>
.data-table :deep(.ant-table-container) {
  border-bottom: 1px solid #f0f0f0;
}
</style>