<template>
  <nuxt-layout name="auth">
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
        <ui-input v-model="form.username" placeholder="User">
          <icon-user />
        </ui-input>

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
        <ui-checkbox :value="form.terms" />
        <span> Accept </span>

        <nuxt-link
          to="/login"
          class="lined-link text-primary font-bold cursor-pointer"
          @click.stop
        >
          terms and conditions
        </nuxt-link>
      </div>

      <nuxt-link
        :class="{ 'pointer-events-none': !isFormValid }"
        to="/otp"
        class="w-full"
      >
        <ui-button :disabled="!isFormValid" @click="onSubmit">
          Sign up
        </ui-button>
      </nuxt-link>

      <p class="flex gap-[5px] text-base mt-[20px]">
        <span>You have account?</span>
        <nuxt-link
          class="lined-link text-primary font-bold cursor-pointer"
          to="/login"
        >
          Login now
        </nuxt-link>
      </p>
    </template>
  </nuxt-layout>

  <ui-confirmation :opened="!!routeJumpLink" @cancel="routeJumpLink = ''">
    <template #description> all entered data will be lost </template>

    <template #cancel="{ cancel }">
      <ui-button @click="cancel"> No </ui-button>
    </template>

    <template #submit>
      <nuxt-link :to="routeJumpLink">
        <ui-button theme="common"> Ok </ui-button>
      </nuxt-link>
    </template>
  </ui-confirmation>
</template>

<script setup>
// Store
import { useRegistrationStore } from "~/stores/registration";

const registrationStore = useRegistrationStore();
const routeJumpLink = ref("");

const form = ref({
  email: registrationStore.data.email,
  username: registrationStore.data.username,
  password: "",
  passwordConfirmation: "",
  terms: false,
});

const isFormValid = computed(() => {
  const data = form.value;

  for (const field in data) {
    if (!data[field]) return false;
  }

  return data.password === data.passwordConfirmation;
});

function toggleTerms() {
  form.value.terms = !form.value.terms;
}

function onSubmit() {
  registrationStore.update(form.value);
}

onBeforeRouteLeave((to, from, next) => {
  const isFormEmpty = Object.keys(form.value).every((key) => !form.value[key]);

  if (isFormEmpty || routeJumpLink.value) {
    return next();
  }

  routeJumpLink.value = to.fullPath;
  next(false);
});
</script>
