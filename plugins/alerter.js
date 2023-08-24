import sleep from "~/utils/sleep";

function renderMessages(messages = [], dropMessage) {
  const root = document.getElementById("alerter");

  root.innerHTML = "";

  let index = 0;

  for (const message of messages) {
    const messageElement = getMessageElement(message, dropMessage);

    messageElement.style.zIndex = 50 + index * 10;

    if (index === messages.length - 1) {
      messageElement.style.opacity = 1;
    } else {
      messageElement.style.opacity = 0.7;
      messageElement.style.transform = `translateY(30px)`;
    }

    index++;
    root.append(messageElement);
  }
}

function getMessageElement(message, dropMessage) {
  const result = document.createElement("div");

  result.onclick = () => dropMessage(message.id);
  result.innerText = message.text;
  result.id = `alerter-message-${message.id}`;
  result.className =
    "cursor-default animate-popup bg-white rounded-[10px] p-8 text-xl font-semibold text-base-text border-[3px] " +
    getMessageTheme(message.type);

  return result;
}

function getMessageTheme(messageType) {
  switch (messageType) {
    case "info":
      return "border-primary";
    case "danger":
      return "border-danger";
    case "success":
      return "border-success";
  }
}

const directive = {
  mounted(element, binding) {
    const root = document.createElement("div");
    root.id = "alerter";
    root.className =
      "fixed flex flex-col z-50 bottom-0 right-0 mr-8 mb-8 duration-200 ease-out transition-all";

    element.append(root);
  },

  updated(element, binding) {
    const { messages, dropMessage } = binding.value;

    if (!Array.isArray(messages.value)) return;

    renderMessages(messages.value, dropMessage);
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("alerter", directive);

  const messages = ref([]);

  const alert = {
    async message(text, type) {
      const id = Date.now();

      messages.value.push({ id, text, type });
      await sleep(3000);
      dropMessage(id);
    },

    info(text) {
      this.message(text, "info");
    },

    error(text) {
      this.message(text, "danger");
    },

    success(text) {
      this.message(text, "success");
    },
  };

  function dropMessage(messageId) {
    const index = messages.value.findIndex(
      (message) => message.id === messageId
    );

    if (index < 0) return;

    messages.value.splice(index, 1);
  }

  return {
    provide: {
      alerterArg: { messages, dropMessage },
      alert,
    },
  };
});
