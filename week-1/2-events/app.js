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

// 1) VUE 3 TEMELLERİ (Bu dosyada gösteriliyor)
//      - Tek doğruluk kaynağı: data() içindeki state
//      - İki yönlü bağlama: v-model (input’larda)
//      - Tek yönlü bağlama: :value + @input (daha manuel kontrol)
//      - computed: türetilmiş değerler (cache’lenir)
//      - watch: yan etkiler; bir değeri izleyip tepki ver
//      - event modifiers: @submit.prevent, @click.stop
//      - v-model modifiers: .trim, .number, .lazy

//   2) SIK YAPILAN HATALAR
//      - Aynı state’i birden fazla yerde bağımsız güncellemek → UI senkron dışı kalır.
//      - v-model ile :value/@input’u karıştırıp farklı state’lere yazmak.
//      - Input’a value verirken state’i güncellememek (tek yönlü akış bozulur).
//      - Key kullanmadan v-for yapmak (diff sorunları).
//      - Asenkron işlemler için try/catch ve loading/disabled durumlarını unutmamak.

//   3) MÜLAKATTA ÇIKABİLECEK SORULAR (+ kısa ipuçları)
//      - v-model nasıl çalışır?
//        * Cevap: İçeride :value bağlar ve @input (ya da ilgili event) ile değeri günceller. İki yönlü binding sağlar.
//      - :value + @input ile v-model farkı?
//        * Cevap: :value+@input manuel kontrol; v-model kısayol ve daha az boilerplate. İnce kontrol gerekirse manuel yaklaşım iyi.
//      - computed vs watch ne zaman?
//        * Cevap: computed türetilmiş, saf değer ve cache’lenir; template’te kullanılır. watch yan etkiler içindir (API çağrısı, localStorage yazma).
//      - reactive ile ref farkı?
//        * Cevap: ref tek primitive/değer; reactive nesne/array için. Template’te ref.value otomatik açılır.
//      - Event bubbling ve @click.stop/@submit.prevent?
//        * Cevap: Olay yukarı çıkar; .stop durdurur, .prevent default davranışı engeller (form submit).
//      - Debounce/throttle nedir?
//        * Cevap: Yoğun olayları (input/scroll) seyrekleştirerek performans artışı (debounce son çağrıyı, throttle belirli aralıkları çalıştırır).
//      - XSS’e karşı Vue güvenli mi?
//        * Cevap: Varsayılan {{ }} binding güvenlidir (escape eder). v-html kullanımı dikkat ister; güvenilmeyen HTML’yi sanitize et.
//      - SPA’de SEO nasıl?
//        * Cevap: SSR/SSG (Nuxt), meta etiketleri, sitemap, içerik render stratejileri.
//      - Flex vs Grid?
//        * Cevap: Flex tek boyutlu akış; Grid iki boyutlu yerleşim.
//      - Promise vs async/await?
//        * Cevap: async/await Promise’ların söz dizimsel şekeridir; try/catch ile daha okunaklı hata yönetimi.

//   4) MİNİ EGZERSİZLER
//      - [ ] Input’a .trim ve .lazy ekle, anında değil blur’da güncellensin.
//      - [ ] fullName’i parçalayıp firstName/lastName computed’ları yaz.
//      - [ ] Add butonunda boş ise disabled yap; dolu ise listeye ekle.
//      - [ ] LocalStorage’a son ismi kaydet ve açılışta oku (watch ile).

//   5) KOD İNCELEME (REVIEW) CHECKLIST
//      - [ ] Tek doğruluk kaynağı korunuyor mu?
//      - [ ] Bileşenler küçük ve tek sorumluluğa sahip mi?
//      - [ ] Erişilebilirlik: <label for>, aria-label, buton type’ları doğru mu?
//      - [ ] Hatalar yakalanıyor mu? (try/catch, boş durumlar)
//      - [ ] Performans: gereksiz watch/computed var mı? debounce gerekli mi?
//      - [ ] Değişken adları açık ve tutarlı mı? (camelCase)
//      - [ ] CSS çakışmaları/specificity çöplüğü var mı?

//   6) EK BİLGİ
//      - v-model input’larda event tipine göre çalışır: text input’ta 'input', checkbox’ta 'change' vs.
//      - Modifiers:
//        v-model.trim   => baş/son boşlukları kırpar
//        v-model.number => sayıya çevirir
//        v-model.lazy   => 'change' event’inde (blur) günceller

/*

1) Temel Vue Kavramları
------------------------
- data()        : Uygulamanın state (veri) kaynağıdır.
- methods       : Event (buton tıklama, input girme) için yazılan fonksiyonlar.
- computed      : Diğer state’lerden türetilmiş, cache’lenen değerler.
- watch         : Bir değeri izler, değişince yan etki yapar (API çağır, localStorage yaz).
- v-model       : İki yönlü veri bağlama (input ↔ state).
- :value + @input: v-model’in manuel hali. Daha fazla kontrol için kullanılır.
- directive     : Vue’nun özel HTML nitelikleri (v-if, v-for, v-bind(:), v-on(@)).

2) Reactivity (Tepkisellik)
----------------------------
- Vue’de data içindeki değer değişince DOM otomatik güncellenir.
- Tek doğruluk kaynağı (single source of truth) → state sadece data()’da tutulmalı.
- DOM’u elle güncellemek gerekmez, Vue halleder.

3) Mülakat Soruları ve Kısa Cevapları
-------------------------------------

Q: v-model nedir, nasıl çalışır?
A: v-model iki yönlü veri bağlama sağlar. İçeride aslında :value ve @input kombinasyonudur.

Q: v-model ile :value + @input farkı nedir?
A: v-model kısayoldur; basit kullanım için. :value + @input daha manuel kontrol sağlar (ör. özel doğrulama, debounce).

Q: computed ile watch farkı nedir?
A: computed → saf türetilmiş değer, cache’lenir, template’te kullanılır.
   watch    → yan etkiler için (API çağrısı, localStorage yazma).

Q: reactive ile ref farkı nedir?
A: ref → tek değer/primitive için (ref(0)).
   reactive → object/array için (reactive({})).
   Template içinde ref.value otomatik açılır.

Q: Vue event modifiers nedir?
A: .prevent → default davranışı engeller (form submit).
   .stop    → bubbling’i durdurur.
   Örnek: @submit.prevent

Q: v-model modifiers nedir?
A: .trim   → baş/son boşlukları siler.
   .number → sayıya çevirir.
   .lazy   → blur olduğunda günceller (her input değil).

Q: computed neden cache’lenir?
A: Aynı değer tekrar kullanıldığında yeniden hesaplamaz, performans artar.

Q: watch yerine computed ne zaman?
A: Eğer değer sadece DOM’da gösterilecekse computed. 
   Yan etki (API, localStorage) gerekiyorsa watch.

Q: Vue XSS’e karşı güvenli mi?
A: Evet, {{ }} ile bağlama otomatik escape eder. Ama v-html kullanırken dikkat gerekir.

Q: Vue lifecycle hook nedir?
A: Bileşenin yaşam döngüsündeki özel aşamalara girilen fonksiyonlar.
   Örnek: mounted(), created(), unmounted().

Q: SPA (Single Page Application) nedir?
A: Sayfa tek kez yüklenir, içerik JavaScript ile dinamik güncellenir.
   Avantaj: Hızlı deneyim.
   Dezavantaj: SEO zorluğu, ilk yükleme ağır olabilir.

4) Junior İçin Temel Hatırlatmalar
----------------------------------
- “Tek doğruluk kaynağı” kuralına uy.
- Erişilebilirlik (a11y) unutma: <label for="...">, aria-label
- Input ve butonlarda type tanımla.
- Kod okunabilirliği → camelCase, açık değişken adları.
- Git öğren: küçük commit, açıklayıcı mesaj.
- Temel JS array methodları → map, filter, reduce.
*/