<template>
  <auth-wrapper>
    <template #intro>
      <img class="translate-y-16" src="/images/registration-intro.png" />
    </template>

    <template #title> Join us! </template>

    <template #description>
      Just go through the boring process of creating an account.
    </template>

    <template #content>
      <h1 class="text-heading font-bold w-full">Create your account</h1>
      <h4 class="text-xl text-subtitle-text w-full font-normal">
        Unlock all Features!
      </h4>

      <div class="flex flex-col mt-[25px] gap-[10px] w-full">
        <ui-input v-model="form.email" placeholder="User">
          <icon-user />
        </ui-input>

        <ui-input v-model="form.username" placeholder="Email">
          <icon-email />
        </ui-input>

        <ui-input
          v-model="form.password"
          type="password"
          placeholder="Password"
        >
          <icon-shield />
        </ui-input>

        <ui-input
          v-model="form.passwordConfirmation"
          type="password"
          placeholder="Confirm Password"
        >
          <icon-shield />
        </ui-input>
      </div>

      <div
        class="flex gap-[5px] w-full mt-[10px] mb-[25px] cursor-pointer"
        @click="toggleTerms"
      >
        <ui-checkbox :value="terms" />
        <span> Accept </span>
        <nuxt-link to="/" class="lined-link text-primary font-bold" @click.stop>
          terms and conditions
        </nuxt-link>
      </div>

      <ui-button>Sign up</ui-button>

      <p class="flex gap-[5px] text-base mt-[20px]">
        <span>You have account?</span>
        <nuxt-link to="/" class="lined-link text-primary font-bold">
          Login now
        </nuxt-link>
      </p>
    </template>
  </auth-wrapper>
</template>

<script setup>
import { ref } from "vue";

const terms = ref(false);
const form = ref({
  email: "",
  username: "",
  password: "",
  passwordConfirmation: "",
});

function toggleTerms() {
  terms.value = !terms.value;
}
</script>
