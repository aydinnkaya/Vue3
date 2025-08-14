const app = Vue.createApp({
    data() {
        return {
            fullName: null,
        }
    },
    methods: {
        updateValue(event) {
            console.log(event.target.value); 
            this.fullName = event.target.value; // Update fullName with the input value // fullName'ı giriş değeri ile güncelle
        }
    },
}).mount('#app'); 