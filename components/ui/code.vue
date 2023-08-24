<template>
  <label class="flex justify-between w-full">
    <div
      v-for="(value, index) in length"
      :key="value"
      :class="
        !currentValue[index]
          ? 'text-base-text/30 border-primary/50 '
          : 'text-base-text border-primary'
      "
      class="font-inter w-[64px] h-[64px] text-[32px] rounded-[10px] flex justify-center items-center bg-secondary/10 border-2 duration-200 ease-out transition-all"
    >
      {{ currentValue[index] || "-" }}
    </div>

    <input type="number" class="hidden" />
  </label>
</template>

<script setup>
const emit = defineEmits(["change", "update:modelValue"]);

const props = defineProps({
  value: { type: String, default: "" },
  modelValue: { type: String, default: "" },
  length: { type: Number, default: 6 },
});

const currentValue = computed(() => {
  const result = props.value || props.modelValue;
  const digitsOnly = result.replace(/[^0-9]/gm, "");

  if (digitsOnly !== result) {
    changeValue(digitsOnly);
  }

  return digitsOnly;
});

function changeValue(newValue) {
  emit("change", newValue);
  emit("update:modelValue", newValue);
}

async function onKeydown(event) {
  const { key, ctrlKey } = event;

  if (key === "Backspace") {
    changeValue(currentValue.value.slice(0, -1));
    return;
  }

  if (/[0-9]/.test(key) && currentValue.value.length < props.length) {
    changeValue(currentValue.value + key);
    return;
  }

  if (ctrlKey && key === "v") {
    const buffer = await navigator.clipboard.readText();

    if (typeof buffer !== "string") return;

    changeValue(buffer.replace(/[^0-9]/gm, ""));
  }
}

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
});
</script>
