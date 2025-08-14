const app = Vue.createApp({ // Vue instance Constructor // Vue örneği oluşturucu
    data() { // Data function returns an object that contains the data properties // Data fonksiyonu, veri özelliklerini içeren bir nesne döndürür
        // Data properties are reactive and can be used in the template // Veri özellikleri reaktiftir ve şablonda kullanılabilir
        // They can also be accessed in methods and computed properties // Ayrıca metotlarda ve hesaplanmış özelliklerde erişilebilir
        return {
            title: 'Vue.js 1',
            content: 'Vue.js is a progressive JavaScript framework for building user interfaces.',
            eduflow: {
                title: 'Eduflow',
                target: '_blank',
                description: 'Eduflow is a platform for creating and managing online courses.',
                url: 'https://eduflow.com',
                alt: 'Eduflow Logo',
                logo: 'https://eduflow.com/logo.png'
            },
        };
    },
    methods: { // Methods section // Metotlar bölümü
        // Methods are functions that can be called from the template or other methods // Metotlar, şablondan veya diğer metotlardan çağrılabilen fonksiyonlardır
        changeTitle(pTitle) { // Method to change the title // Başlığı değiştiren metot
            // Methods can change the data properties of the Vue instance // Metotlar, Vue örneğinin veri özelliklerini değiştirebilir
            this.title = pTitle; // Change the title data property // title veri özelliğini değiştir
        },

        updateCoords(event) { // Method to update coordinates // Koordinatları güncelleyen metot
            // In JavaScript, an event object is created when a user does something (e.g., click, mouse move, key press) // JavaScript'te bir kullanıcı bir şey yaptığında (örneğin, tıklama, fare hareketi, tuşa basma) bir event nesnesi oluşturulur
            // and sent to the relevant event handler // ve ilgili olay dinleyicisine gönderilir
            // console.log(event); // Log the event object to the console // Olay nesnesini konsola yazdır
            // This method is called when the mouse moves over the box // Bu metot, fare kutunun üzerinde hareket ettiğinde çağrılır
            const box = event.target; // Get the target element // Hedef elementi al
            const rect = box.getBoundingClientRect(); // Get the bounding rectangle of the element // Elementin sınırlayıcı dikdörtgenini al
            const x = event.clientX - rect.left; // Calculate x coordinate relative to the box // Kutunun solundan x koordinatını hesapla
            const y = event.clientY - rect.top; // Calculate y coordinate relative to the box // Kutunun üstünden y koordinatını hesapla
            console.log(`X: ${x}, Y: ${y}`); // Log the coordinates to the console // Koordinatları konsola yazdır
            box.style.backgroundColor = `rgb(${x % 255}, ${y % 255}, 150)`; // Change the background color based on coordinates // Arka plan rengini koordinatlara göre değiştir
        }
    },
}).mount('#app'); // Mounts the Vue instance to the DOM element with id 'app' // Vue örneğini 'app' id'li DOM elementine bağlar 