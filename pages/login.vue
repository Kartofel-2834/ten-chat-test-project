<template>
  <nuxt-layout name="auth">
    <template #intro>
      <img src="/images/login-intro.png" />
    </template>

    <template #title> Connect with any device. </template>

    <template #description>
      Everything you need is an internet connection.
    </template>

    <template #content>
      <h1 class="text-heading font-bold">Login to your Account</h1>
      <h4 class="lined-title text-subtitle-text my-[25px]">with email</h4>

      <div class="flex flex-col gap-[10px] w-full mb-[25px]">
        <ui-input v-model="form.email" placeholder="Email">
          <icon-email />
        </ui-input>

        <ui-input
          v-model="form.password"
          type="password"
          placeholder="Password"
        >
          <icon-shield />
        </ui-input>
      </div>

      <ui-button :disabled="!isFormValid" @click="onSubmit">Log in</ui-button>

      <p class="flex gap-[7px] text-base mt-[20px]">
        <span>Don't have account?</span>
        <nuxt-link to="/registration" class="lined-link text-primary font-bold">
          Create an account
        </nuxt-link>
      </p>
    </template>
  </nuxt-layout>
</template>

<script setup>
// API
import { useLogin } from "~/composables/auth";

const form = ref({ email: "", password: "" });

const isFormValid = computed(() => !!(form.value.email && form.value.password));

async function onSubmit() {
  const { email, password } = form.value;

  try {
    await useLogin(email, password);
  } catch (err) {
    console.log(err);
  }
}
</script>
