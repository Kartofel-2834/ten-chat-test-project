<template>
  <button
    :class="themeClass"
    class="font-inter uppercase text-white text-xl font-bold w-full p-5 rounded-[10px] hover:opacity-80 active:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed duration-200 ease-out transition-all"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  theme: { type: String, default: "primary" },
});

const themeClass = computed(() => {
  switch (props.theme) {
    case "common":
      return "bg-common";
    case "danger":
      return "bg-danger";
  }

  return "bg-primary";
});
</script>
