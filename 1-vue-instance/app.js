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



// ## A. Vue 3 Temelleri

// **Vue.createApp()**: Bir Vue uygulaması başlatır. İçine `data()`, `methods`, `computed`, `watch` gibi bölümler ekleyebiliriz. `mount('#app')` ile DOM’daki kök elemana bağlarız.

// **Reaktiflik**: `data()` içindeki değerler (ör. `title`, `content`, `eduflow`) şablonda (`{{ }}`) veya özellik bağlamalarında (`:href`, `:target`) kullanıldığında **reaktif** olur. Değer değişirse, arayüz otomatik güncellenir.

// **Şablon Söz Dizimi**:

// * **Metin interpolasyonu**: `{{title}}`
// * **Özellik bağlama**: `v-bind:href="..."` veya kısayol `:href="..."`
// * **Olay bağlama**: `v-on:click="..."` veya kısayol `@click="..."`

// **Yöntemler (methods)**: Şablondan çağrılabilen fonksiyonlardır. Örneğin, `changeTitle('...')` tıklandığında `this.title` güncellenir.

// **Event Nesnesi**: Olay bağlamalarında (örn. `@mousemove="updateCoords"`), fonksiyon ilk parametre olarak `event` alır. `event.currentTarget`, olayı dinleyen öğeyi; `event.target` ise tıklanan/üzerinde hareket edilen alt öğeyi ifade eder.

// ## C. İyileştirme ve En İyi Uygulamalar

// # 3) Karşılaştırma Tablosu (Bu Panoya Yorum/Not Olarak Eklemeye Uygun)

// | Konu                          | Örnek                                       | Ne Yapar?                                                                            | Notlar                                                                  |
// | ----------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
// | Metin interpolasyonu          | `{{ title }}`                               | Reaktif metni DOM’da gösterir                                                        | Salt metin içindir; HTML için `v-html` gerekir (XSS’e dikkat).          |
// | Özellik bağlama – uzun        | `v-bind:href="eduflow.url"`                 | HTML özelliğine Vue ifadesi bağlar                                                   | Uzun yazım; okunaklı ama daha fazla yazım.                              |
// | Özellik bağlama – kısa        | `:href="eduflow.url"`                       | Yukarıdakinin kısayolu                                                               | Projede genelde kısayol tercih edilir.                                  |
// | Olay bağlama – uzun           | `v-on:click="changeTitle('..')"`            | Olay yakalayıp metodu çalıştırır                                                     | Uzun yazım.                                                             |
// | Olay bağlama – kısa           | `@click="changeTitle('..')"`                | Yukarıdakinin kısayolu                                                               | Yaygın tercih.                                                          |
// | event.target vs currentTarget | `event.target` / `event.currentTarget`      | `target` tıklanan alt öğe olabilir; `currentTarget` dinleyicinin bağlı olduğu öğedir | Bu örnekte kutuyu güvenle referans almak için `currentTarget` daha iyi. |
// | Inline stil güncelleme        | `box.style.backgroundColor = ...`           | JS ile doğrudan stil değişimi                                                        | Küçük demolar için tamam; büyüyünce `:style` ile reaktif stil önerilir. |
// | Erişilebilirlik               | `<a title="...">`                           | İpucu/araç bilgisi sağlar                                                            | `<a>` için `alt` hatalıdır; `title` veya `aria-label` kullanın.         |
// | Güvenlik                      | `target="_blank" rel="noopener noreferrer"` | Yeni sekme açarken güvenlik/performans sağlar                                        | `rel` eklemeyi unutmayın.                                               |

// ---


// Temel (Kesin Bilmen Gerek)
// 	1.	{{ }} interpolasyonu ile v-bind arasındaki fark nedir?
// – {{ }} sadece metin düğümünde kullanılır.
// – v-bind (:prop) HTML özelliğine değer bağlar.
// 	2.	v-on ile @ farkı nedir?
// – Aynıdır; @ kısayoldur. v-on:click ≡ @click.
// 	3.	data() neden fonksiyon döner?
// – Her bileşen için ayrı state olsun diye.
// 	4.	Reaktiflik nedir?
// – Data değişince Vue otomatik DOM’u günceller.
// 	5. mount('#app') ne yapar?
// – Vue uygulamasını DOM’daki köke bağlar. Bir sayfada birden fazla Vue app olabilir.

// ⸻

// Orta (Bilirsen Artı Puan)
// 	6.	event.target ile event.currentTarget farkı?
// – target: Olayın çıktığı en alt öğe.
// – currentTarget: Dinleyicinin bağlı olduğu öğe.
// – Genelde currentTarget daha güvenlidir.
// 	7.	Inline stil yerine :style veya :class neden?
// – Daha okunabilir, koşullu kullanım kolay, bakım ve test edilebilirlik yüksek.
// 	8.	target="_blank" neden riskli, nasıl çözülür?
// – Güvenlik açığı yaratır (window.opener).
// – Çözüm: rel="noopener noreferrer".
// 	9.	methods ile computed farkı nedir?
// – computed: Cache’lenir, sadece bağımlı değer değişince çalışır.
// – methods: Her çağrıldığında yeniden çalışır.
// 	10.	v-model ne yapar?
// – Input ile data arasında çift yönlü bağ kurar.

// <input v-model="title" placeholder="Başlık gir..." />


// ⸻

// İleri (Bonus – Bileceksen Süper)
// 	11.	Options API ve Composition API farkı?
// – Options: data/methods ayrı bloklarda.
// – Composition: setup() içinde mantık gruplanır, büyük projelerde daha okunur.
// 	12.	Lifecycle hook örneği?
// – onMounted(() => console.log('Yüklendi')).
// 	13.	ref ile reactive farkı?
// – ref: Tekil değer (string, number).
// – reactive: Nesne/array gibi karmaşık yapılar.
// 	14.	Emit ile props nasıl çalışır?
// – Parent → child’a veri aktarmak için props.
// – Child → parent’a haber göndermek için emit.
// 	15.	State management (Vuex/Pinia) ne işe yarar? (Bonus)
// – Büyük projede global state yönetimi sağlar.

