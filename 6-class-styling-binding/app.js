const { createApp } = Vue;

createApp({
  data() {
    return {
      currentColor: "red",
    };
  },
  methods: {
    changeColor(color) {
      this.currentColor = color;
    },
  },
}).mount("#app");
