import { ref } from "vue";
import { defineStore } from "pinia";

export const useRegistrationStore = defineStore("registrationForm", () => {
  const data = ref({ email: "", username: "" });

  function update(payload) {
    data.value = { ...data.value, ...payload };
  }

  return {
    data,
    update,
  };
});
