<template>
  <label
    :class="{ 'text-primary': isFocused, 'text-primary/20': !isFocused }"
    class="grid grid-rows-1 grid-cols-1 items-center w-full cursor-text"
  >
    <div
      class="col-start-1 col-end-2 row-start-1 row-end-2 z-10 pl-[15px] pr-[25px] text-inherit"
    >
      <slot />
    </div>

    <input
      :value="currentValue"
      :type="realType"
      :placeholder="placeholder"
      :class="type === 'password' ? 'pr-[60px]' : 'pr-[20px]'"
      class="font-inter col-start-1 col-end-2 row-start-1 row-end-2 text-input text-base-text py-[20px] pl-[60px] w-full outline-0 border-2 rounded-[10px] bg-secondary/10 border-primary/20 focus:border-primary ease-out transition-colors duration-200"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
    />

    <icon-eye
      v-if="type === 'password'"
      :class="{
        'text-primary': !isPassword,
        'text-primary/20': isPassword,
      }"
      class="col-start-1 col-end-2 row-start-1 row-end-2 justify-self-end cursor-pointer z-10 mr-[15px]"
      @click.prevent="toggleType"
    />
  </label>
</template>

<script setup>
const emit = defineEmits(["update:modelValue", "change"]);

const props = defineProps({
  value: { type: String, default: "" },
  modelValue: { type: String, default: "" },
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
});

const realType = ref(props.type);
const isFocused = ref(false);

const isPassword = computed(() => realType.value === "password");
const currentValue = computed(() => props.value || props.modelValue);

function onBlur() {
  isFocused.value = false;
}

function onFocus() {
  isFocused.value = true;
}

function onInput(event) {
  emit("change", event.target.value);
  emit("update:modelValue", event.target.value);
}

function toggleType() {
  realType.value = realType.value === "text" ? "password" : "text";
}
</script>
