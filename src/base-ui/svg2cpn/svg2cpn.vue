<template>
  <div class="svg-icon" v-html="svg"></div>
</template>

<script setup>
import { computed } from "vue";
// const { svg } = require("@/utils/registerSvg");
// import data from "@/utils/registerSvg";
const props = defineProps({
  iconName: {
    type: String,
    default: "order",
  },
  //对不同区域的 icon 样式调整，如字体大小
  className: {
    type: String,
    default: "order",
  },
  width: {
    default: "100%",
  },
  height: {
    default: "100%",
  },
  color: {
    type: String,
    default: "currentColor",
  },
});
const icon = process.env.SVG_ICON;
const svg = computed(() => icon[props.iconName]);
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 100%;
  height: 100%;
  fill: red; /*此属性为更改svg颜色属性设置*/
  vertical-align: text-top;
  color: currentColor;
  :deep(path) {
    fill: v-bind(color);
  }
}
:deep(svg) {
  width: v-bind(width);
  height: v-bind(height);
}
</style>
