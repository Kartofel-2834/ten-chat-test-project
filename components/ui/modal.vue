<template>
  <div
    v-show="showed"
    :class="{ 'opacity-0': hidden }"
    class="flex fixed z-30 items-center justify-center w-full h-full bg-black/20 top-0 left-0 duration-200 ease-out transition-all"
    @click="close"
  >
    <div
      :class="{ 'translate-y-1/4': hidden }"
      class="flex flex-col items-center w-fit max-w-[40vw] bg-white rounded-[10px] p-8 duration-200 ease-out transition-all"
      @click.stop
    >
      <slot :close="close" :open="open" />
    </div>
  </div>
</template>

<script setup>
// Utils
import sleep from "~/utils/sleep";

const emit = defineEmits(["close", "open", "update:opened"]);

const props = defineProps({
  opened: { type: Boolean, default: false },
});

const hidden = ref(true);
const showed = ref(false);

async function close() {
  hidden.value = true;
  await sleep(250);
  showed.value = false;

  emit("close");
  emit("update:opened", false);
}

async function open() {
  showed.value = true;
  await sleep(50);
  hidden.value = false;

  emit("open");
  emit("update:opened", true);
}

watch(
  () => props.opened,
  () => {
    if (props.opened) {
      open();
    } else {
      close();
    }
  },
  { immediate: true }
);
</script>
