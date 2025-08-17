const app = Vue.createApp({
  data() {
    return {
      title: "Reactivity Examples",
    };
  },
  beforeCreate() {
    console.log("beforeCreate: data ve methods henüz tanımlanmadı");
  },

  created() {
    console.log(" created calisti")
  },
  beforeMount() {
    console.log(" beforeMount calisti")
  },
  mounted() {
    console.log("mounted calisti")
  },
  beforeUpdate() {
    console.log("beforeUpdate calisti")
  },
  updated() {
    console.log("updated calisti")
  },
  beforeUnmount() {
    console.log(" beforeUnmount calisti")
  },
  unmounted() {
    console.log("unmounted calisti")
  },
});
app.mount("#app");

// **** Bir element e erişmek isityorsak başlatmadan önce bunu crated da değil mounted de yapmamız gerekecek
// Elbette! Vue.js'in yaşam döngüsü (Lifecycle), bir bileşenin (component) **oluşmasından
//  yok edilmesine kadar geçen süreci** ifade eder. Bu süreçte Vue, belirli aşamalarda bazı
//  **yaşam döngüsü kancalarını (lifecycle hooks)** otomatik olarak tetikler. Bu kancalar sayesinde, 
// belirli zamanlarda özel işlemler yapabiliriz (örneğin: veri çekme, temizlik, loglama vb.).

// ---

// ## 🔄 Vue.js Yaşam Döngüsü (Vue Lifecycle) Aşamaları

// Vue bileşeni DOM'a yerleştirilmeden önce, yerleştirildikten sonra ve kaldırılmadan önce olmak üzere çeşitli aşamalardan geçer:

// ---

// ### ✅ 1. **beforeCreate**

// * Bileşen daha oluşturulmadan hemen önce çağrılır.
// * `data`, `methods`, `computed` gibi özellikler henüz tanımlanmamıştır.
// * **Kullanım amacı:** İlk ayarlardan önce çalışacak kodlar (örneğin hata ayıklama/loglama).

// beforeCreate() {
//   console.log("beforeCreate: data ve methods henüz tanımlanmadı");
// }

// ---

// ### ✅ 2. **created**

// * Bileşen oluşturuldu, `data`, `methods`, `computed` özellikleri tanımlandı.
// * DOM henüz oluşturulmadı (yani henüz sayfada bir şey görünmez).
// * **Kullanım amacı:** API'den veri çekmek, veri işlemek.

// created() {
//   console.log("created: data tanımlı, DOM hazır değil");
// }

// ---

// ### ✅ 3. **beforeMount**

// * Template derlenmiş, ama henüz DOM’a yerleştirilmemiştir.
// * `el` (DOM elemanı) henüz bağlı değildir.
// * **Kullanım amacı:** DOM'a bağlanmadan önce son hazırlıklar.

// beforeMount() {
//   console.log("beforeMount: template hazır, DOM'a yerleştirilmek üzere");
// }
// ```

// ---

// ### ✅ 4. **mounted**

// * Bileşen DOM’a yerleştirildi, kullanıcı artık sayfada görebilir.
// * **Kullanım amacı:** DOM üzerinde işlem yapmak, üçüncü parti kütüphanelerle çalışmak (örneğin: grafik, harita).

// mounted() {
//   console.log("mounted: bileşen DOM'a yerleştirildi");
// }
// ```

// ---

// ### ✅ 5. **beforeUpdate**

// * Veri (`data`) değiştiğinde ve DOM güncellenmeden hemen önce çalışır.
// * **Kullanım amacı:** Değişiklik öncesi veri saklamak veya analiz yapmak.


// beforeUpdate() {
//   console.log("beforeUpdate: veri değişti, DOM henüz güncellenmedi");
// }
// ```

// ---

// ### ✅ 6. **updated**

// * DOM, veri değişikliğine göre yeniden güncellendi.
// * **Kullanım amacı:** DOM güncellemesi sonrası kontroller yapmak.


// updated() {
//   console.log("updated: DOM güncellendi");
// }
// ```

// ---

// ### ✅ 7. **beforeUnmount** *(Vue 3'te)*

// * Bileşen DOM'dan kaldırılmadan hemen önce çalışır.
// * **Kullanım amacı:** Temizlik işlemleri, event listener'ları kaldırmak.

// beforeUnmount() {
//   console.log("beforeUnmount: bileşen kaldırılacak");
// }

// ---

// ### ✅ 8. **unmounted** *(Vue 3'te)*

// * Bileşen DOM'dan tamamen kaldırıldı.
// * **Kullanım amacı:** Bellek yönetimi, socket bağlantısı kapatma vb.


// unmounted() {
//   console.log("unmounted: bileşen tamamen kaldırıldı");
// }

// ---

// ## 🎯 Özet Görsel: (Metinsel)


// beforeCreate ➡️ created ➡️ beforeMount ➡️ mounted
//         🔁 (data değişirse)
//         beforeUpdate ➡️ updated
//         🗑️ beforeUnmount ➡️ unmounted

// ---

// ## 🧠 Ne zaman hangisini kullanmalıyım?

// | Hook            | Ne zaman kullanılır?                    | Örnek                         |
// | --------------- | --------------------------------------- | ----------------------------- |
// | `created`       | Veri çekerken (API, localStorage)       | Axios ile veri çekme          |
// | `mounted`       | DOM’a müdahale gerektiğinde             | Grafik çizimi, harita yükleme |
// | `beforeUpdate`  | Değişiklik öncesi eski değerleri tutmak | Eski değeri loglama           |
// | `updated`       | DOM güncellendikten sonra işlem         | Scroll ayarı                  |
// | `beforeUnmount` | Temizlik işlemleri                      | Event kaldırma                |
// | `unmounted`     | Tamamen silindiğinde                    | Bellek boşaltma               |

// ---

// İstersen bu yaşam döngüsünü bir örnek uygulamayla gösterebilirim (örneğin: butona tıklayıp veri değiştirerek `updated` tetiklenmesini sağlama). Hazır mısın?
