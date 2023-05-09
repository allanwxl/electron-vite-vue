<script setup lang="ts">
import { LeftOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import http from '../../http/index'
import { useRouter } from "vue-router";
import { onMounted, ref } from 'vue'


const router = useRouter();
const examName = ref('')
type optionType = {
  examBeginDate: number;
  examTitle: string;
};
const options = ref<optionType[]>([
  // {
  //   "examTitle": "202304一窗通办业务水平测试（2）"
  // },
  // {
  //   "examTitle": "202304一窗通办业务水平测试（1）"
  // }
])
const fieldNames = {
  label: 'examTitle',
  value: 'examTitle'
}
const answerStr = ref('')
const data =
    {
      "code": 0,
      "msg": "success",
      "data": {
        "examTitle": "202304一窗通办业务水平测试（2）",
        "examInfo": "单选题：20道。多选题：4道。问答题：0道。满分：100分。",
        "singleList": [
          {
            "questionType": 1,
            "questionId": "1597449230894821377",
            "questionTitle": "换国籍证时，如捕捞证过期怎么办",
            "questionScore": 4,
            "questionOption": [
              "A.先办理国籍证手续，再重新换发捕捞证",
              "B.先办理捕捞证手续，再重新换发国籍证"
            ],
            "questionAnswer": "B",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1650665548745601026",
            "questionTitle": "纸质核名也需要提交什么（     ）",
            "questionScore": 4,
            "questionOption": [
              "A.提交核名的告知承诺书",
              "B.无需提交其他材料",
              "C.无须线下核名",
              "D.以上都不对"
            ],
            "questionAnswer": "A",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1650662341596213249",
            "questionTitle": "商品房买卖合同中的商品房预售许可证号需要和（）的号一致",
            "questionScore": 4,
            "questionOption": [
              "A.预售房许可证",
              "B.国有土地使用证",
              "C.建设用地规划许可证",
              "D.建设工程规划许可证"
            ],
            "questionAnswer": "A",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1640599392773009410",
            "questionTitle": "渔船过户的，新船主户口下（）米以下渔船总数量不能超过2条",
            "questionScore": 4,
            "questionOption": [
              "A.24",
              "B.12",
              "C.6"
            ],
            "questionAnswer": "B",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1650664992828354561",
            "questionTitle": "变财务负责人不能启动（      ）业务",
            "questionScore": 4,
            "questionOption": [
              "A.变更法人业务",
              "B.变更财务负责人",
              "C.变更股东",
              "D.以上都不对"
            ],
            "questionAnswer": "B",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1640595054931537921",
            "questionTitle": "捕捞证过期渔民想要换证应该如何办理",
            "questionScore": 4,
            "questionOption": [
              "A.直接注销新办即可",
              "B.可正常换证",
              "C.先去局里处理后再注销新办"
            ],
            "questionAnswer": "C",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1650664589579579393",
            "questionTitle": "一般注销业务中注销申请书由（       ） 签字",
            "questionScore": 4,
            "questionOption": [
              "A.法人",
              "B.经理",
              "C.清算组组长",
              "D.监事"
            ],
            "questionAnswer": "C",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1650678354295451650",
            "questionTitle": "华侨不能新办内资公司",
            "questionScore": 4,
            "questionOption": [
              "A.对",
              "B.错"
            ],
            "questionAnswer": "B",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1650664471098880001",
            "questionTitle": "办理市场局业务的办事人为经办人（            ）",
            "questionScore": 4,
            "questionOption": [
              "A.法人",
              "B.股东",
              "C.必须和公司登记备案申请书中委托书处贴身份证复印件的人为同一人",
              "D.没有要求"
            ],
            "questionAnswer": "C",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1650674866509377537",
            "questionTitle": "企业股东身份证号码在系统中是原15位的，现新身份证变成18位的其中有数字变化（不是普通15位升18位的），可以办个简单变联络人的业务，才能变更股东身份证号码，必须要提供什么材料是。",
            "questionScore": 4,
            "questionOption": [
              "A公安局提供的变更证明",
              "B户口本",
              "C结婚证"
            ],
            "questionAnswer": "A",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1650664289200304130",
            "questionTitle": "股东变更人名，走（      ）业务",
            "questionScore": 4,
            "questionOption": [
              "A.变更  ",
              "B.备案",
              "C.不需要启动业务",
              "D.以上都对"
            ],
            "questionAnswer": "A",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1331040195179761666",
            "questionTitle": "培训学校专职教师人数不得少于几人？",
            "questionScore": 4,
            "questionOption": [
              "A 1人",
              "B 2人",
              "C 3人",
              "D 4人"
            ],
            "questionAnswer": "C",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1650664710543306754",
            "questionTitle": "企业变更（   ），看新股东是不是外资、及里面的股东有没有外资，外资相对控股（大于50%）需要提供外资负面清单承诺书",
            "questionScore": 4,
            "questionOption": [
              "A.名称",
              "B.住所",
              "C.变更股东或范围",
              "D.注册资本"
            ],
            "questionAnswer": "C",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1650664094681067522",
            "questionTitle": "经营范围有私募基金、私募基金管理人、创业投资字样的经营范围，须（       ）",
            "questionScore": 4,
            "questionOption": [
              "A.可以直接经营",
              "B.这几项不给",
              "C.在中国证券投资基金业协会完成登记备案后方可从事经营活动",
              "D.没有要求"
            ],
            "questionAnswer": "C",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1613393358677667841",
            "questionTitle": "幼儿园变更举办者谁出具会计师事务所出具财务清算报告",
            "questionScore": 4,
            "questionOption": [
              "A.原举办者  ",
              "B.法人   ",
              "C.园长"
            ],
            "questionAnswer": "A",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1650665436480860161",
            "questionTitle": "变更股东和跨区迁址可以同时办理吗？（未清税）",
            "questionScore": 4,
            "questionOption": [
              "A.可以同时办理",
              "B.需要分开办理",
              "C.无须办理",
              "D.以上都不对"
            ],
            "questionAnswer": "B",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1650662808522911746",
            "questionTitle": "装修后的效果图不要只有（）的效果图了",
            "questionScore": 4,
            "questionOption": [
              "A.牌匾",
              "B.带脚手架",
              "C.带围挡",
              "D.带吊车"
            ],
            "questionAnswer": "A",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1628580647326248961",
            "questionTitle": "营利性民办非学历教育学校名称格式是？",
            "questionScore": 4,
            "questionOption": [
              "A为‘大连市+区市县+字号+培训类别+培训中心",
              "B为‘大连市+先导区名称+字号+培训类别+培训中心+有限公司",
              "C为‘大连市+区市县或先导区名称+字号+培训类别+培训中心（培训学校）+有限公司",
              "D为‘大连市+区市县或先导区名称+字号+培训类别+培训学校"
            ],
            "questionAnswer": "C",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1650665674016878594",
            "questionTitle": "合伙企业有新的新合伙人入伙时，新的合伙人住所需注意什么（     ）",
            "questionScore": 4,
            "questionOption": [
              "A合伙人的住址需要填写",
              "B合伙人的地址必须空着",
              "C无要求",
              "D以上都不对"
            ],
            "questionAnswer": "A",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 1,
            "questionId": "1650662579513913346",
            "questionTitle": "租赁合同中写的是代理人签字则可以需要由（）签字",
            "questionScore": 4,
            "questionOption": [
              "A.财务负责人",
              "B.代理人",
              "C.执行董事",
              "D.经理"
            ],
            "questionAnswer": "B",
            "answer": null,
            "answer2": []
          }
        ],
        "poolList": [
          {
            "questionType": 2,
            "questionId": "1650674476971782146",
            "questionTitle": "股权被（      ）申请变更股权登记的，暂不列入查验个人所得税完税凭证信息查验范围",
            "questionScore": 5,
            "questionOption": [
              "A司法部门强制过户",
              "B行政部门强制过户",
              "C以股权抵偿债务",
              "D以股权对外投资或进行其他非货币性交易"
            ],
            "questionAnswer": "AB",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 2,
            "questionId": "1650674107088695297",
            "questionTitle": "自然人发生(        )在申请变更股权登记时均须查验个人所得税完税凭证信息。",
            "questionScore": 5,
            "questionOption": [
              "A出售股权、",
              "B公司回购股权、",
              "C以股权抵偿债务、",
              "D以上都对"
            ],
            "questionAnswer": "ABCD",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 2,
            "questionId": "1650673076921495553",
            "questionTitle": "公司在设立是住所材料中如是拍卖的房子，要什么房产证明材料。",
            "questionScore": 5,
            "questionOption": [
              "A拍卖的确认书",
              "B发票",
              "C旧房证",
              "D竞拍书"
            ],
            "questionAnswer": "AB",
            "answer": null,
            "answer2": []
          },
          {
            "questionType": 2,
            "questionId": "1650667035634757634",
            "questionTitle": "企业变更股东或范围，看新股东是不是外资、及里面的股东有没有外资，外资相对控股（）需要提供外资负面清单承诺书",
            "questionScore": 5,
            "questionOption": [
              "A.大于10%",
              "B.大于20%",
              "C.大于50%",
              "D.大于80%"
            ],
            "questionAnswer": "CD",
            "answer": null,
            "answer2": []
          }
        ],
        "qaList": []
      }
    }

onMounted(async () => {
  // options.value = [
  //   {
  //     "id": null,
  //     "govDeptId": "",
  //     "examTitle": "202304一窗通办业务水平测试（2）",
  //     "examInfo": "单选题：20道。多选题：4道。问答题：0道。满分：100分。",
  //     "examBeginDate": "2023-04-25 16:35:00",
  //     "examFinishDate": null,
  //     "questionId": null,
  //     "questionScore": null,
  //     "creator": null,
  //     "createDate": null,
  //     "updater": null,
  //     "updateDate": null,
  //     "questionType1": null,
  //     "questionType1Score": null,
  //     "questionType2": null,
  //     "questionType2Score": null,
  //     "questionType3": null,
  //     "questionType3Score": null,
  //     "totalScore": null,
  //     "examDateTime": "2023-04-25 16:35:00 ～ 2023-04-25 17:20:00",
  //     "examShowType": "2"
  //   }
  // ]
  // getAnswer(data.data)
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
  // console.log(examName.value)
  http.get(`/exam/examemployee/${examName.value}?_t=${new Date().getTime()}`).then((res: any) => {
    // console.log(res.data)
    getAnswer(res.data)
    // {
    //   "code": 0,
    //    "msg": "success",
    //    "data": {
    //       "examTitle": "202304一窗通办业务水平测试（2）",
    //       "examInfo": "单选题：20道。多选题：4道。问答题：0道。满分：100分。",
    //       "singleList": [
  })
}



const getAnswer = (result: { singleList: { questionAnswer: string; }[]; poolList: { questionAnswer: string; }[]; }) => {
  answerStr.value = ''
  result.singleList.forEach((el: { questionAnswer: string; }) => {
    console.log(el.questionAnswer)
    answerStr.value += el.questionAnswer
  })

  result.poolList.forEach((el: { questionAnswer: string; }) => {
    console.log(el.questionAnswer)
    answerStr.value += `/${el.questionAnswer}`
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
      style="width: 500px"
      @change="changeExamName"
    >
      <a-select-option v-for="(option, index) in options" :key="index" :value="`${option.examTitle}`">
        {{ `${option.examTitle}(${option.examBeginDate})` }}
      </a-select-option>
    </a-select>
  </div>
  <div class="mt-10px">
    <span>{{ answerStr }}</span>
  </div>
</template>

<style>
</style>