<template>
  <div v-alerter="$alerterArg">
    <nuxt-page />
    <span class="hidden">{{ $alerterArg.messages }}</span>
  </div>
</template>