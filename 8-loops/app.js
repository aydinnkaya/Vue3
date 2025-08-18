const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "Vue Bootcamp Hafta 1", completed: false },
        { id: 2, text: "Vue Bootcamp Hafta 2", completed: false },
        { id: 3, text: "Vue Bootcamp Hafta 3", completed: false },
        { id: 4, text: "Vue Bootcamp Hafta 4", completed: false },
        { id: 5, text: "Vue Bootcamp Hafta 5", completed: false },
        { id: 6, text: "Vue Bootcamp Hafta 6", completed: false },
        { id: 7, text: "Vue Bootcamp Hafta 7", completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
        completed: false,
      });
      event.target.value = "";
    },
    removeItem(todoItem) {
      this.todoList = this.todoList.filter((todo) => todo !== todoItem);
    },
  },
  computed: {
    completedItemCount() {
      return this.todoList.filter((t) => t.completed).length;
    },
    unCompletedItemCount() {
      return this.todoList.filter((t) => !t.completed).length;
    },
  },
}).mount("#app");


// ⸻

// 📘 Vue Todo App Dokümantasyonu

// 1. Projenin Amacı

// Bu proje, Vue 3 kullanarak basit bir Todo Listesi (yapılacaklar listesi) uygulaması geliştirmeyi amaçlamaktadır.
// Kullanıcı şunları yapabilir:
// 	•	Yeni görev eklemek
// 	•	Görevi tamamlanmış olarak işaretlemek
// 	•	Görevi silmek
// 	•	Kaç görev tamamlandı / tamamlanmadı bilgisini görmek

// ⸻

// 2. Kod Yapısı

// Kod 3 temel bölümden oluşur:
// 	1.	data() – Uygulamanın verileri (state)
// 	2.	methods – Kullanıcı etkileşimleri (işlemler)
// 	3.	computed – Türetilmiş veriler (otomatik hesaplanan değerler)

// Vue uygulaması #app id’li HTML elemanına bağlanır (mount("#app")).

// ⸻

// 3. Data Bölümü

// data() {
//   return {
//     todoList: [
//       { id: 1, text: "Vue Bootcamp Hafta 1", completed: false },
//       { id: 2, text: "Vue Bootcamp Hafta 2", completed: false },
//       ...
//     ],
//   };
// },

// 	•	todoList: Bir dizi (array), her eleman bir todo nesnesi.
// 	•	Her todo nesnesinin 3 özelliği vardır:
// 	•	id → benzersiz kimlik (sayısal değer)
// 	•	text → yapılacak görev açıklaması
// 	•	completed → görev yapıldı mı? (true veya false)

// ⸻

// 4. Methods Bölümü

// 4.1 addTodo(event)

// addTodo(event) {
//   this.todoList.push({
//     id: new Date().getTime(),
//     text: event.target.value,
//     completed: false,
//   });
//   event.target.value = "";
// },

// 	•	event.target.value → input alanına yazılan görev metnini alır.
// 	•	Yeni bir todo nesnesi oluşturup todoList dizisine ekler.
// 	•	event.target.value = "" → input alanını temizler.

// 📌 Örnek: Kullanıcı “Alışveriş yap” yazıp Enter’a basarsa, listeye şu nesne eklenir:

// { id: 1675522331123, text: "Alışveriş yap", completed: false }


// ⸻

// 4.2 removeItem(todoItem)

// removeItem(todoItem) {
//   this.todoList = this.todoList.filter((todo) => todo !== todoItem);
// },

// 	•	Parametre olarak silinecek görev nesnesini alır (todoItem).
// 	•	filter ile yeni bir liste oluşturur → sadece todoItem dışındakiler kalır.
// 	•	Böylece seçilen görev silinmiş olur.

// 📌 Örnek:
// Mevcut liste: [ "Ödev yap", "Kitap oku" ]
// removeItem("Ödev yap") → sonuç: [ "Kitap oku" ]

// ⸻

// 5. Computed Bölümü

// 5.1 completedItemCount

// completedItemCount() {
//   return this.todoList.filter((t) => t.completed).length;
// },

// 	•	todoList üzerinde completed = true olanları süzer.
// 	•	Kaç tane olduğunu (length) döner.
// 	•	Tamamlanan görev sayısını gösterir.

// 📌 Örnek:
// Liste = [ {completed:true}, {completed:false}, {completed:true} ]
// Sonuç = 2

// ⸻

// 5.2 unCompletedItemCount

// unCompletedItemCount() {
//   return this.todoList.filter((t) => !t.completed).length;
// },

// 	•	todoList üzerinde completed = false olanları süzer.
// 	•	Kaç tane olduğunu (length) döner.
// 	•	Tamamlanmamış görev sayısını gösterir.

// 📌 Örnek:
// Liste = [ {completed:true}, {completed:false}, {completed:false} ]
// Sonuç = 2

// ⸻

// 6. mount

// }).mount("#app");

// 	•	Vue uygulamasını DOM’da id="app" olan HTML elementine bağlar.
// 	•	Artık bu elementin içindeki tüm dinamik içerikleri Vue kontrol eder.

// ⸻

// 7. Çalışma Akışı
// 	1.	Sayfa açılır → todoList içindeki hazır görevler listelenir.
// 	2.	Kullanıcı input’a görev yazıp Enter’a basar → addTodo çalışır → yeni görev eklenir.
// 	3.	Kullanıcı görev yanındaki kutucuğu işaretler → todo.completed = true olur → görev yeşil görünür.
// 	4.	Kullanıcı “Sil” butonuna basar → removeItem çalışır → görev listeden çıkar.
// 	5.	Vue, computed değerleri otomatik günceller → “tamamlanan/tamamlanmayan görev sayısı” değişir.

// ⸻

// 8. Özet

// Bu uygulama, Vue’nun şu temel özelliklerini öğretir:
// 	•	Reaktif veri (data)
// 	•	Kullanıcı etkileşimleri (methods)
// 	•	Türetilmiş veriler (computed)
// 	•	v-for, v-model, v-bind, v-on (@click, @keydown.enter)

// Bu yapı sayesinde çok az kodla güçlü bir yapılacaklar listesi geliştirilmiş olur.

// ⸻

// 📌 Bu dökümanı ister PDF, ister Markdown formatında da sana hazırlayabilirim.

// 👉 İstersen ben sana bu dökümanı ders notu gibi görselli (şekilli örneklerle) hazırlayayım mı, yoksa böyle metin açıklama senin için yeterli mi?







// ⸻

// 🔹 Basit Seviye (10 Soru)

// 1. Vue nedir?
// 👉 Vue, kullanıcı arayüzleri geliştirmek için kullanılan, reaktif (reactive) ve bileşen tabanlı (component-based) bir JavaScript framework’üdür.

// ⸻

// 2. v-model ne işe yarar?
// 👉 v-model, input elementleri ile Vue’daki state arasında iki yönlü veri bağlama (two-way data binding) sağlar.

// ⸻

// 3. v-for direktifi ne işe yarar?
// 👉 Bir dizi veya obje üzerinde döngü kurup, her elemanı DOM’a render etmeye yarar.

// ⸻

// 4. :key neden önemlidir?
// 👉 Vue’nun virtual DOM algoritmasının elemanları doğru şekilde takip etmesini sağlar. Her döngü elemanına benzersiz :key vermek gerekir.

// ⸻

// 5. Vue uygulaması nasıl başlatılır?
// 👉 const app = Vue.createApp({...}).mount('#app')

// ⸻

// 6. methods ve computed arasındaki fark nedir?
// 👉 methods: her çağrıldığında tekrar çalışır.
// 👉 computed: sadece bağımlı olduğu veri değiştiğinde yeniden hesaplanır, aksi halde cache’den değer döner.

// ⸻

// 7. Vue’da event (olay) dinleme nasıl yapılır?
// 👉 @click="fonksiyonAdi", @keydown.enter="addTodo" gibi.

// ⸻

// 8. data() neden fonksiyon olarak tanımlanır?
// 👉 Her bileşen örneği için ayrı state kopyası dönsün diye. (Tek bir nesne olursa tüm örnekler aynı datayı paylaşır.)

// ⸻

// 9. Vue’da bir öğeyi görünür/gizli yapmak için hangi direktif kullanılır?
// 👉 v-if (koşullu render) veya v-show (display CSS kontrolü).

// ⸻

// 10. Vue’da interpolation nedir?
// 👉 {{ değişken }} söz dizimiyle datayı HTML içinde göstermektir.

// ⸻

// 🔸 Orta Seviye (10 Soru)

// 1. computed yerine neden methods kullanmamalıyız?
// 👉 methods her render’da yeniden çalışır, computed sadece bağımlı veri değişince çalışır → performans artar.

// ⸻

// 2. Vue’da class’ları dinamik olarak nasıl bağlarız?
// 👉

// <div :class="{ active: isActive, error: hasError }"></div>


// ⸻

// 3. Vue’da watch ne işe yarar?
// 👉 Belirli bir data/computed özelliği değiştiğinde yan etkiler (async çağrı, console log vb.) çalıştırmak için kullanılır.

// ⸻

// 4. Vue’da event parametresi nasıl alınır?
// 👉 @click="myFunc($event)" veya methods: { myFunc(event) {...} }

// ⸻

// 5. Bir todoyu silerken neden genelde id üzerinden silmek tercih edilir?
// 👉 Referans eşitliği sorunlarını önlemek için → this.todoList = this.todoList.filter(t => t.id !== id)

// ⸻

// 6. Vue Lifecycle Hooks nedir?
// 👉 Bileşenlerin yaşam döngüsünde belirli noktalarda çalışan fonksiyonlardır (örn: mounted(), created()).

// ⸻

// 7. v-if ile v-show arasındaki fark nedir?
// 👉 v-if: DOM’a gerçekten ekler/kaldırır.
// 👉 v-show: sadece CSS display: none yapar. Performans açısından kullanım senaryoları farklıdır.

// ⸻

// 8. Vue’da iki yönlü binding sadece input’larda mı çalışır?
// 👉 Hayır, v-model özelleştirilmiş component’lerde de kullanılabilir (örneğin custom select component).

// ⸻

// 9. Vue’da props nedir?
// 👉 Parent bileşenden child bileşene veri göndermenin yoludur.

// ⸻

// 10. Vue’da emit nedir?
// 👉 Child bileşenin parent’a event göndermesidir (this.$emit('eventName', data)).

// ⸻

// 🔹 Zor Seviye (10 Soru)

// 1. Vue’nun reaktivite sistemi nasıl çalışır?
// 👉 Vue, Proxy (Vue 3) veya Object.defineProperty (Vue 2) kullanarak objelerdeki property değişimlerini izler ve DOM’u otomatik günceller.

// ⸻

// 2. Virtual DOM nedir?
// 👉 Vue, DOM’un hafif bir kopyasını bellekte tutar. Veri değişince önce virtual DOM güncellenir, sonra diff algoritmasıyla gerçek DOM’a minimum değişiklik yansıtılır.

// ⸻

// 3. Vue’da key reuse (anahtar yeniden kullanımı) sorunu nedir?
// 👉 Döngüde aynı key kullanılırsa, Vue DOM elemanlarını yanlış eşleştirir → hatalı render. Çözüm: her eleman için benzersiz :key.

// ⸻

// 4. Computed property içinde side-effect (yan etki) yapmak neden yanlış?
// 👉 Computed sadece değer hesaplamalıdır. API çağrısı gibi yan etkiler watch veya methods’ta yapılmalı.

// ⸻

// 5. Vue’da reactive array üzerinde doğrudan indeks ataması neden sorun çıkarabilir?
// 👉 Vue 2’de this.arr[index] = value reaktif olmayabilir. Vue.set(this.arr, index, value) veya splice kullanılır. (Vue 3’te Proxy ile bu sorun yok.)

// ⸻

// 6. Vuex nedir, neden kullanılır?
// 👉 Vue’nun state management kütüphanesi. Büyük projelerde data’yı component’ler arası paylaşmak için merkezi yönetim sağlar.

// ⸻

// 7. Composition API ile Options API arasındaki fark nedir?
// 👉 Options API (data, methods, computed), kodu kategorilere göre ayırır.
// 👉 Composition API (setup()) reaktif değişkenleri, fonksiyonları tek yerde toplar, daha okunabilir ve yeniden kullanılabilir hale getirir.

// ⸻

// 8. Vue’da slot nedir?
// 👉 Parent’tan gelen HTML içeriğini child component içinde belirlenen yerlere yerleştirmeye yarar.

// ⸻

// 9. Vue’da async computed nasıl yapılır?
// 👉 Normal computed async olamaz. Bunun için watch + data veya üçüncü parti paket (ör. vue-async-computed) kullanılır.

// ⸻

// 10. Vue’da performans optimizasyonu için hangi yöntemler kullanılır?
// 👉
// 	•	v-once → bir kere render et, değişmez.
// 	•	computed ile cache.
// 	•	Büyük listelerde virtual scrolling.
// 	•	Gereksiz re-render’ları önlemek için key’leri doğru yönetmek.
// 	•	Lazy load (component splitting).
