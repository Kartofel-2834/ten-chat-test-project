<template>
  <nuxt-layout name="auth">
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
        Sent OTP on
        <span class="text-primary font-semibold">
          {{ registrationStore.data.email || "email" }}
        </span>
      </h4>

      <nuxt-link
        to="/registration"
        class="lined-link self-start cursor text-primary font-bold cursor-pointer mt-[5px]"
      >
        Change email
      </nuxt-link>

      <ui-code v-model="otpCode" class="my-[25px]" />

      <ui-button
        :disabled="otpCode.length < 6"
        class="w-[95%]"
        @click="onSubmit"
      >
        Submit
      </ui-button>
    </template>
  </nuxt-layout>
</template>

<script setup>
// Utils
import sleep from "~/utils/sleep";

// Store
import { useRegistrationStore } from "~/stores/registration";

// API
import { useLogin } from "~/composables/auth";

const registrationStore = useRegistrationStore();
const router = useRouter();

const otpCode = ref("");

async function onSubmit() {
  const { username, password } = registrationStore.data;

  try {
    await useLogin(username, password);
    await sleep(2500);
    router.push("/login");
  } catch (err) {}
}
</script>
