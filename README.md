# Tabu Oyunu


Tabu Oyunu, klasik kelime tahmin oyununu dijital bir platforma taşıyan eğlenceli bir uygulamadır. İki takım (**Mavi** ve **Kırmızı**) sırayla kelimeleri tahmin etmeye çalışır. Her kelimenin **5 yasaklı kelimesi** vardır ve bu kelimeleri kullanmadan takım arkadaşlarınıza ana kelimeyi tarif etmeniz gerekir. Oyun, **mobil cihazlar için optimize edilmiş bir arayüz** sunar ve telefon el değiştirerek oynanır.

## [Oyunu Hemen Oyna!](https://tabu-game.vercel.app/)

## Özellikler
- **İki Takımlı Oyun:** Mavi ve Kırmızı takımlar arasında rekabet.
- **Zaman Sınırı:** Her takımın kelimeleri tahmin etmek için **2 dakikası var** (*test için 5 saniye*).
- **Puanlama Sistemi:** Doğru tahminler için **+1**, yasaklı kelime kullanıldığında **-1 puan**.
- **Rastgele Kelime Seçimi:** 131 Türkçe kelime ve her birinin 5 yasaklı kelimesi.
- **Mobil Uyumluluk:** Telefonla oynanabilmesi için **manuel takım değişimi**.
- **Modern Arayüz:** Tailwind CSS ve DaisyUI ile tasarlanmış **şık ve kullanıcı dostu tasarım**.
- **İkonlar:** Butonlarda anlamayı kolaylaştıran **react-icons** kullanımı.

## Nasıl Oynanır?
1. Oyunu başlatın ve ilk takımı (**Mavi** veya **Kırmızı**) seçin.
2. Süre başladığında, ana kelimeyi takım arkadaşlarınıza tarif edin, ancak **yasaklı kelimeleri kullanmaktan kaçının**.
3. Doğru (**✅**) butonuna basarak puan kazanın, Geç (**➡️**) ile kelimeyi atlayın veya Yasaklı Kelime (**❌**) ile puan kaybedin.
4. Süre bittiğinde **"Süre Bitti!"** ekranı görünür. Telefonu diğer takıma verin ve **"Takımı Değiştir ve Başlat"** butonuna basın.
5. Tüm kelimeler bittiğinde oyun **otomatik olarak sonuç ekranına geçer**.

## Kurulum
Bu oyunu yerel makinenizde çalıştırmak isterseniz aşağıdaki adımları izleyin:

### Gereksinimler
- **Node.js** (v16 veya üstü)
- **npm** veya **yarn**

### Adımlar
1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/kullanici-adi/tabu-game.git
   cd tabu-game
   ```
   *(Not: Kendi GitHub reposunu oluşturup linki buraya eklemelisin.)*

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```
   Oyun varsayılan olarak **http://localhost:5173** adresinde çalışır.

4. **Üretim sürümünü oluşturmak için:**
   ```bash
   npm run build
   ```

## Kullanılan Teknolojiler
- **React:** Kullanıcı arayüzü için.
- **Vite:** Hızlı geliştirme ve build aracı.
- **Tailwind CSS:** Stil için.
- **DaisyUI:** Tailwind tabanlı UI bileşenleri.
- **React Icons:** Buton ikonları için.

## Katkıda Bulunma
Oyun **açık kaynaklıdır** ve katkılarınızı bekler! Yeni kelimeler eklemek, tasarımı geliştirmek veya hata düzeltmeleri için:

1. Bu depoyu **forklayın**.
2. Değişikliklerinizi yapın ve bir **pull request** gönderin.

## Lisans
Bu proje **MIT Lisansı** ile lisanslanmıştır.

## İletişim
Sorularınız veya önerileriniz için:

📧 **E-posta:** [memetycaliskan@gmail.com](mailto:memetycaliskan@gmail.com)  
💻 **GitHub:** [memetyc](https://github.com/memetyc)