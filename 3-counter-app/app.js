const app = Vue.createApp({
  // Vue instance Constructor // Vue örneği oluşturucu
  data() {
    // Data function returns an object that contains the data properties // Data fonksiyonu, veri özelliklerini içeren bir nesne döndürür
    return {
      count: 0,
      count2: 0 // Initialize count to 0 // Sayacı 0 olarak başlat
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    increment2() {
      this.count2++;
    },
    decrement2() {
      this.count2--;
    }
  },

  computed: { //closure makes it reactive // closure, reaktif hale getirir
    // Computed properties are used to calculate derived state // Hesaplanmış özellikler, türetilmiş durumu hesaplamak için kullanılır
    counterResult() {
      return this.count > 5 ? "Bigger than 5" : "Smaller than 5"; // Return the current count // Geçerli sayacı döndür
    },
    counter2Result() {
      return this.count2 > 5 ? "Bigger than 5" : "Smaller than 5"; // Return the current count // Geçerli sayacı döndür
    }
  },
  watch: { // data da bulunan değişiklikleri izler // Watches for changes in data
    // Watchers are used to perform side effects when data changes // İzleyiciler, veri değiştiğinde yan etkiler gerçekleştirmek için kullanılır
    count(newValue, oldValue) {
      console.log(`Count changed from ${oldValue} to ${newValue}`); // Log the change in count // Sayı değişikliğini günlüğe kaydet
    },
    count2(newValue, oldValue) {
      console.log(`Count2 changed from ${oldValue} to ${newValue}`); // Log the change in count2 // Sayı2 değişikliğini günlüğe kaydet
    },
    
     counterResult(newValue, oldValue) {
      console.log(`Count changed from ${oldValue} to ${newValue}`); // Log the change in count // Sayı değişikliğini günlüğe kaydet
    },
     counter2Result(newValue, oldValue) {
       console.log(`Count2 changed from ${oldValue} to ${newValue}`); // Log the change in count2 // Sayı2 değişikliğini günlüğe kaydet
    }
  }
}).mount("#app"); // Mounts the Vue instance to the DOM element with id 'app' // Vue örneğini 'app' id'li DOM elementine bağlar

/*
    computed, watch ve methods arasındaki farklar ve davranışları:

    1. computed (Hesaplanmış Özellikler):
        - computed özellikler, bir veya birden fazla veri (data) özelliğine bağlı olarak türetilmiş değerler üretir.
        - Değerleri önbelleğe alınır ve sadece bağımlı oldukları veri değiştiğinde yeniden hesaplanır.
        - Genellikle template içinde gösterilecek veya başka bir yerde kullanılacak dinamik değerler için kullanılır.
        - Her zaman bir değer (result) döndürmelidir.
        - Örnek: counterResult ve counter2Result, count ve count2 değerlerine bağlı olarak "Bigger than 5" veya "Smaller than 5" döndürür.

    2. watch (İzleyiciler):
        - watch, belirli bir veri veya hesaplanmış özelliği izler ve değiştiğinde bir yan etki (side effect) gerçekleştirir.
        - Genellikle API çağrısı, localStorage güncellemesi veya loglama gibi işlemler için kullanılır.
        - Her değişiklikte tetiklenir, önbelleğe alınmaz.
        - Bir değer döndürmez, sadece yan etki gerçekleştirir.
        - Örnek: count ve count2 değiştiğinde konsola eski ve yeni değerleri yazdırır.

    3. methods (Metodlar):
        - methods, bir olay tetiklendiğinde (örneğin butona tıklama) çalıştırılan fonksiyonlardır.
        - Genellikle veri güncelleme, işlem başlatma veya kullanıcı etkileşimi için kullanılır.
        - Her çağrıldığında yeniden çalışır, önbelleğe alınmaz.
        - İsterse değer döndürebilir, isterse sadece işlem yapabilir.
        - Örnek: increment ve decrement fonksiyonları, count ve count2 değerlerini artırır veya azaltır.

    Karşılaştırma:
        - computed: Türetilmiş, önbelleğe alınan, template için ideal, her zaman değer döndürür.
        - watch: Yan etkiler için, veri değişimini izler, değer döndürmez.
        - methods: Olay tabanlı, kullanıcı etkileşimi veya doğrudan işlem için, isteğe bağlı değer döndürebilir.

    Mülakatta çıkabilecek sorular ve cevapları:

    Soru: computed ile methods arasındaki fark nedir?
    Cevap: computed özellikler, bağımlı oldukları veriler değiştiğinde otomatik olarak ve önbelleğe alınarak yeniden hesaplanır, her zaman bir değer döndürür. Methods ise her çağrıldığında çalışır, önbelleğe alınmaz ve isteğe bağlı olarak değer döndürebilir.

    Soru: watch ne zaman kullanılır?
    Cevap: watch, veri veya hesaplanmış özellik değiştiğinde yan etki (örneğin API çağrısı, loglama) gerçekleştirmek için kullanılır. Değer döndürmez, sadece yan etki yapar.

    Soru: computed ve watch arasındaki temel fark nedir?
    Cevap: computed, türetilmiş bir değer üretir ve template içinde kullanılır; watch ise veri değişimini izler ve yan etki gerçekleştirir.

    Soru: computed özelliği neden her zaman bir değer döndürmelidir?
    Cevap: Çünkü computed, template veya başka bir yerde kullanılacak türetilmiş bir değeri temsil eder. Döndürmezse hata oluşur.

    Soru: watch ile computed birlikte kullanılabilir mi? Ne zaman tercih edilir?
    Cevap: Evet, birlikte kullanılabilir. computed ile türetilmiş bir değer üretip, watch ile bu değerdeki değişikliklere tepki verebilirsiniz. Yan etki gerektiğinde watch tercih edilir.

    Soru: methods içinde veri güncellemesi ile computed arasındaki ilişki nedir?
    Cevap: methods ile veri güncellendiğinde, computed özellikler otomatik olarak güncellenir ve template'de yeni değer gösterilir.

    Soru: computed ve methods performans açısından nasıl karşılaştırılır?
    Cevap: computed özellikler önbelleğe alındığı için gereksiz yere tekrar hesaplanmaz, performans açısından avantajlıdır. Methods ise her çağrıldığında yeniden çalışır.

    Soru: watch ile async işlemler nasıl yönetilir?
    Cevap: watch fonksiyonları async olabilir, örneğin veri değiştiğinde API çağrısı yapmak için kullanılabilir.

    Soru: computed içinde veri güncellenebilir mi?
    Cevap: computed fonksiyonları sadece değer döndürür, veri güncellemesi yapılmaz. Veri güncellemesi için methods veya events kullanılır.

    Soru: watch ile birden fazla veri nasıl izlenir?
    Cevap: watch, birden fazla veri veya hesaplanmış özelliği izleyebilir. Dizi veya fonksiyon ile birden fazla bağımlılık tanımlanabilir.

    Soru: computed property setter nedir ve ne zaman kullanılır?
    Cevap: computed property'lerde getter ve setter tanımlanabilir. Setter ile computed özelliğe değer atandığında ilgili veriyi güncelleyebilirsiniz.

    Soru: watch immediate ve deep seçenekleri nedir?
    Cevap: immediate ile watcher ilk tanımlandığında hemen tetiklenir. deep ile nesne veya dizi gibi derin veri yapıları izlenebilir.

    Soru: methods ile computed arasında template kullanımı açısından fark nedir?
    Cevap: computed özellikler template içinde doğrudan kullanılabilir, methods ise genellikle event ile tetiklenir ve template'de fonksiyon olarak çağrılır.
*/