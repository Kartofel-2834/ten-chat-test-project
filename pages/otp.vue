<template>
  <auth-wrapper>
    <template #intro>
      <img src="/images/otp-intro.png" />
    </template>

    <template #title> It's just OTP verification </template>

    <template #description>
      You are one step away from recovering your password.
    </template>

    <template #content>
      <h1 class="text-heading font-bold w-full">Enter OTP</h1>
      <h4 class="text-xl text-subtitle-text w-full font-normal">
        Sent OTP on <span class="text-primary font-semibold">%email%</span>
      </h4>

      <nuxt-link
        class="lined-link self-start cursor text-primary font-bold cursor-pointer mt-[5px]"
      >
        Change email
      </nuxt-link>

      <ui-code v-model="otpCode" class="my-[25px]" />

      <ui-button class="w-[95%]"> Submit </ui-button>
    </template>
  </auth-wrapper>
</template>

<script setup>
import { ref } from "vue";

const otpCode = ref("");
</script>
