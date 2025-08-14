const app = Vue.createApp({ // Vue instance Constructor // Vue örneği oluşturucu
    data() { // Data function returns an object that contains the data properties // Data fonksiyonu, veri özelliklerini içeren bir nesne döndürür
        return {
            count: 0, // Initialize count to 0 // Sayacı 0 olarak başlat
        };
    },
    methods: { // Methods section // Metotlar bölümü
        increment() { // Method to increment the count // Sayacı artıran metot
            this.count++; // Increment the count by 1 // Sayacı 1 artır
        },
        decrement() { // Method to decrement the count // Sayacı azaltan metot
            this.count--; // Decrement the count by 1 // Sayacı 1 azalt
        }
    },
}).mount('#app'); // Mounts the Vue instance to the DOM element with id 'app' // Vue örneğini 'app' id'li DOM elementine bağlar