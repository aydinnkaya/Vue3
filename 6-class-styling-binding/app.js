const { createApp } = Vue;

createApp({
  data() {
    return {
      showBorder: false,
      redBG: false,
      bgColor: "cyan",
    };
  },
  computed: {
    boxClasses() {
      return { border: this.showBorder, red: this.redBG };
    }
  },
}).mount("#app");


/*
👉 :style, elemente inline stil bağlar (style attribute).
👉 :class, elemente CSS class’ları bağlar.

Genelde :style → dinamik tek seferlik değerlerde,
:class → önceden tanımlanmış, tekrar kullanılacak stillerde tercih edilir.

 Özellik                         :style                                                                                     :class
Ne ekler?                        Inline CSS (style=”…”)                                                                      CSS class (class=”…”)
Nerede kullanılır?               Dinamik stil değerlerinde (renk, boyut, margin)                                              Önceden CSS dosyasında tanımlanmış kurallarda
Örnek kullanım                   :style="{ backgroundColor: bgColor }"                                                     :class="{ red: isRed }"
Esneklik                         Her stil değeri anlık değişebilir                                                     Daha düzenli, tekrar kullanılabilir
 

*/