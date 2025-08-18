const app = Vue.createApp({
  data() {
    return {
      search: "",
      itemList: [
        "Elma",
        "Armut",
        "Muz",
        "Kivi",
        "Ananas",
        "Portakal",
        "Mandalina",
        "Üzüm",
      ],
    };
  },
  methods: {
    searchListsItem() {
      // Bu method'da ekstra işlemler yapabilirsiniz
      // Örneğin: analytics, logging, vb.
      console.log("Arama yapıldı:", this.search);

      // Arama sonuçlarını göstermek için bir alert
      if (this.filteredList.length === 0 && this.search.trim() !== "") {
        alert("Arama kriterinize uygun meyve bulunamadı!");
      }
    },
  },
  computed: {
    filteredList() {
      if (this.search.trim() === "") {
        return this.itemList;
      }

      // Türkçe karakter desteği ve büyük/küçük harf duyarsız arama
      return this.itemList.filter((item) =>
        item
          .toLowerCase()
          .replace("ğ", "g")
          .replace("ü", "u")
          .replace("ş", "s")
          .replace("ı", "i")
          .replace("ö", "o")
          .replace("ç", "c")
          .includes(
            this.search
              .toLowerCase()
              .replace("ğ", "g")
              .replace("ü", "u")
              .replace("ş", "s")
              .replace("ı", "i")
              .replace("ö", "o")
              .replace("ç", "c")
          )
      );
    },
  },
}).mount("#app");


// ### 1. **Bu uygulamada `computed` ile `methods` farkı nedir?**

// **Cevap:**
// `computed` özellikler, Vue tarafından önbelleğe alınır ve sadece bağımlılıkları değiştiğinde yeniden hesaplanır. Bu uygulamada `filteredList`, arama terimi değişmediği sürece tekrar hesaplanmaz. `methods` ise her çağrıldığında yeniden çalışır. Yani `filteredList` performans açısından daha verimlidir.

// ---

// ### 2. **Türkçe karakterleri normalize etmenin amacı nedir?**

// **Cevap:**
// Türkçe'deki özel karakterler (ç, ş, ğ, ö, ü, ı) standart Latin karakterlerden farklıdır. Bu yüzden `"armut"` araması `"Armut"` veya `"Üzüm"` gibi kelimeleri bulamayabilir. Normalize ederek hem kullanıcı deneyimi artırılır hem de hatalı eşleşmeler önlenir.

// ---

// ### 3. **`searchListsItem` methodu neden `filteredList`'i kullanıyor?**

// **Cevap:**
// Bu method, arama sonucunda hiçbir eşleşme bulunamazsa kullanıcıyı bilgilendirmek için `filteredList`'i kontrol eder. Çünkü filtrelenmiş veriye ihtiyaç duyar. Bu sayede `alert()` fonksiyonu ile kullanıcıya arama sonucunun boş olduğu bildiriliyor.

// ---

// ### 4. **Kullanıcı sadece boşluk girerse ne olur?**

// **Cevap:**
// `this.search.trim()` kullanıldığı için sadece boşluk içeren arama terimleri temizlenir ve tüm liste (`itemList`) döner. Bu, gereksiz arama işlemlerini engeller ve kullanıcıya tüm meyve listesini gösterir.

// ---

// ### 5. **Uygulamada performansı artırmak için başka ne yapılabilir?**

// **Cevap:**

// * Normalize işlemleri için tekrar eden `.replace()` zinciri bir yardımcı fonksiyona taşınabilir.
// * Liste büyükse ve sürekli filtreleme gerekiyorsa debounce mekanizması eklenerek fazla işlem yapılması engellenebilir.

// ---

// ### 6. **Vue 3'te `.mount("#app")` ne işe yarar?**

// **Cevap:**
// Bu komut, Vue uygulamasının hangi HTML öğesi üzerine bağlanacağını belirtir. Burada `id="app"` olan HTML öğesi Vue bileşeni tarafından kontrol edilir hale gelir.

// ---

// ### 7. **Kodu nasıl bileşenlere ayırarak daha modüler hale getirirsiniz?**

// **Cevap:**

// * Arama kutusunu ayrı bir bileşene (`SearchBar.vue`)
// * Listeyi ayrı bir bileşene (`FruitList.vue`)
// * Uyarı mesajını da küçük bir bileşene ayırabiliriz.
//   Bu şekilde kod daha okunabilir, test edilebilir ve yeniden kullanılabilir hale gelir.
