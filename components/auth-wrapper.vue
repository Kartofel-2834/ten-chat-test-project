<template>
  <div
    class="w-full min-h-[100vh] max-h-[100vh] overflow-hidden grid grid-rows-1 grid-cols-2"
  >
    <main
      class="flex flex-col items-center justify-center text-base-text w-fit min-w-[480px] max-w-2/3 mx-auto"
    >
      <slot name="content" />
    </main>

    <aside
      class="bg-primary text-primary-text flex flex-col items-center justify-center pt-4 pb-[58px]"
    >
      <div
        class="grid grid-rows-1 grid-cols-1 items-center justify-items-center"
      >
        <span
          class="bg-auth-circle-a rounded-full w-[606px] h-[606px] col-start-1 col-end-2 row-start-1 row-end-2"
        />
        <span
          class="bg-auth-circle-b rounded-full w-[528px] h-[528px] col-start-1 col-end-2 row-start-1 row-end-2"
        />
        <div
          v-if="!!slots?.intro"
          class="col-start-1 col-end-2 row-start-1 row-end-2"
        >
          <slot name="intro" />
        </div>
      </div>

      <div class="py-[50px]">
        <h3 class="text-center text-xl font-bold">
          <slot name="title" />
        </h3>
        <p class="text-center text-primary-text/75 text-base font-medium">
          <slot name="description" />
        </p>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { useSlots } from "vue";

const slots = useSlots();
</script>
