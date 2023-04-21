<template>
  <div class="h-full p-2">
    <div class="grid grid-cols-4 gap-0.25 h-full border border-solid b-rd-2 p-2.5 unocss">
      <div class="w-80 h-80 bg-#f5f5f5 dark:bg-#000 flex flex-col justify-between overflow-hidden relative">
        <Transition
          mode="out-in"
          enter-active-class="animate-fade-in-down animate-duration-100"
          leave-active-class="animate-fade-out-down animate-duration-100">
          <span v-if="isShow">animate-rubber-band-one</span>
          <span v-else>animate-rubber-band-two</span>
        </Transition>
        <div class="absolute bottom-0">
          <div class="flex items-center">
            <div class="text-my-primary">自定义颜色</div>
            <div @click="handleTheme" class="i-carbon-sun dark:i-carbon-moon text-4 dark:c-#fff"></div>
          </div>

          <el-button type="primary" @click="hanldeClick">切换动画</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useColorMode } from "@vueuse/core";

const mode = useColorMode(); // Ref<'dark' | 'light'>

const isShow = ref(true);
const hanldeClick = () => {
  isShow.value = !isShow.value;
};
const handleTheme = () => {
  if (mode.value == "dark") {
    mode.value = "light";
    return;
  }
  mode.value = "dark";
};
</script>
<style scoped>
.unocss {
}
</style>
