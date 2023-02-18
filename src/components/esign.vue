<template>
  <div class="esign">
    <vue-esign
      ref="esign"
      :width="800"
      :height="300"
      :isCrop="isCrop"
      :lineWidth="lineWidth"
      :lineColor="lineColor"
      v-model:bgColor="bgColor" />
    <div class="btn-box">
      <el-button @click="handleReset">清空画板</el-button>
      <el-button @click="handleGenerate">上传签名</el-button>
    </div>
  </div>
</template>
<script setup>
import { imgUpload } from "@/service/public/public";
import { dataURLToFile } from "@/utils/uitls";
import { API_BASE_URL } from "@/service/request/config";
import { ref } from "vue";

const lineWidth = 6;
const lineColor = "#000000";
const bgColor = "";
const resultImg = ref();
const isCrop = false;
const esign = ref();
const emit = defineEmits(["update:img"]);
const handleReset = () => {
  esign.value.reset();
};

const handleGenerate = () => {
  esign.value
    .generate()
    .then(async (res) => {
      resultImg.value = res;
      const result = await imgUpload(dataURLToFile(res, "签名.png"));
      emit("update:img", API_BASE_URL + "/" + result.data.fileInfo.fileUrl);
      emit("change", API_BASE_URL + "/" + result.data.fileInfo.fileUrl);
    })
    .catch((err) => {
      alert(err); // 画布没有签字时会执行这里 'Not Signned'
    });
};
</script>
<style lang="scss" scoped>
.esign {
  border: 1px solid #eaeaea;

  .btn-box {
    text-align: end;
  }
}
</style>
