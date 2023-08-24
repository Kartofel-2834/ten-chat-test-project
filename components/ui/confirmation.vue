<template>
  <ui-modal :opened="opened" @close="cancel">
    <h2 class="font-bold text-4xl mx-8 mt-4 mb-10">
      <slot name="title">Are you sure?</slot>
    </h2>

    <p class="text-center text-lg mb-8">
      <slot name="description" />
    </p>

    <div class="grid grid-cols-[1fr_1fr] gap-8 w-full">
      <slot v-if="!withoutCancel" name="cancel">
        <ui-button theme="danger" @click="cancel">No</ui-button>
      </slot>

      <slot name="submit">
        <ui-button @click="submit">Yes</ui-button>
      </slot>
    </div>
  </ui-modal>
</template>

<script setup>
const emit = defineEmits(["submit", "cancel", "close", "update:opened"]);

const props = defineProps({
  opened: { type: Boolean, default: false },
  withoutCancel: { type: Boolean, default: false },
  closeOnSubmit: { type: Boolean, default: true },
});

function close() {
  emit("close");
  emit("update:opened", false);
}

function cancel() {
  close();
  emit("cancel");
}

function submit() {
  if (props.closeOnSubmit) close();
  emit("submit");
}
</script>
