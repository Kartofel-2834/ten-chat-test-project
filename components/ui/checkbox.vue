<template>
  <div
    :class="currentValue ? 'border-primary' : 'border-subtitle-text'"
    class="flex justify-center items-center w-5 h-5 rounded-[4px] border-2 cursor-pointer text-primary"
    @click="onClick"
  >
    <icon-check
      :class="currentValue ? 'scale-100' : 'scale-0'"
      class="transition-all duration-200 ease-out"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";

const emit = defineEmits(["update:modelValue", "change"]);

const props = defineProps({
  value: { type: Boolean, default: false },
  modelValue: { type: Boolean, default: false },
});

const currentValue = computed(() => props.value || props.modelValue);

function onClick() {
  emit("update:modelValue", !currentValue.value);
  emit("change", !currentValue.value);
}
</script>
