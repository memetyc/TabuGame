import { useState, useEffect, useRef } from 'react';
import { IoMdClose, IoMdCheckmark, IoIosArrowForward } from "react-icons/io";


// Kelimeler listesi (düzgün formatta, fazladan diziyi kaldırdık)
const words = [
    { word: "HECE", forbidden: ["Kelime", "Harf", "Ses", "Okumak", "Yazı"] },
    { word: "KÜSMEK", forbidden: ["Darılmak", "Kızmak", "Konuşmak", "Tartışmak", "Kavga"] },
    { word: "AVİZE", forbidden: ["Lamba", "Kristal", "Tavan", "Işık", "Aydınlık"] },
    { word: "KOORDİNAT", forbidden: ["Yer", "Enlem", "Boylam", "Belirtmek", "Vermek"] },
    { word: "TERİM", forbidden: ["Kelime", "Anlam", "Fatih", "Sanat", "Kavram"] },
    { word: "SOYUT", forbidden: ["Duyu", "Algılamak", "Görülmeyen", "İsim", "Somut"] },
    { word: "BASKÜL", forbidden: ["Tartı", "Kilo", "Ağır", "Ölçü", "Hafif"] },
    { word: "HALÜSİNASYON", forbidden: ["Hayal", "Gerçek", "Görmek", "İllüzyon", "Serap"] },
    { word: "ARMAĞAN", forbidden: ["Hediye", "Vermek", "Almak", "Doğum günü", "Sevindirmek"] },
    { word: "ANTİKA", forbidden: ["Müzayede", "Zengin", "Eski", "Tablo", "Tarihi"] },
    { word: "ADEM ELMASI", forbidden: ["Erkek", "Gırtlak", "Çıkıntı", "Boğaz", "Havva"] },
    { word: "SATRANÇ", forbidden: ["Şah-Mat", "Kale", "Vezir", "Piyon", "Fil"] },
    { word: "PARAŞÜT", forbidden: ["Uçak", "Atlamak", "Uçmak", "Balon", "Hava"] },
    { word: "TİYATRO", forbidden: ["Oyuncu", "Sahne", "Perde", "Oyun", "Suflör"] },
    { word: "DOST", forbidden: ["Güven", "Samimi", "Dürüst", "Arkadaş", "Ahlaklı"] },
    { word: "ANAHTAR", forbidden: ["Kilit", "Metal", "Kasa", "Kapı", "Çilingir"] },
    { word: "KEDİ", forbidden: ["Pati", "Fare", "Tüy", "Kuyruk", "Hayvan"] },
    { word: "BONKÖR", forbidden: ["Eli Açık", "Cömert", "Para", "Gönlü Zengin", "Harcamak"] },
    { word: "FİDAN", forbidden: ["Ağaç", "Büyümek", "Küçük", "Orman", "Dikmek"] },
    { word: "PRATİK", forbidden: ["Kolay", "Zekâ", "Çabuk", "Hızlı", "Çözüm"] },
    { word: "MESAİ", forbidden: ["Saat", "İş", "Fazla", "Akşam", "Kalmak"] },
    { word: "AKROSTİŞ", forbidden: ["Şiir", "Mısra", "İsim", "İlk", "Kıta"] },
    { word: "BAMBU", forbidden: ["Sazlık", "Mobilya", "Ağaç", "Masa", "Sandalye"] },
    { word: "YABANİ", forbidden: ["Vahşi", "İlkel", "Hayat", "Orman", "Hayvan"] },
    { word: "YELPAZE", forbidden: ["Sıcak", "Rüzgar", "Yaz", "Kadın", "Sallamak"] },
    { word: "ÇUVAL", forbidden: ["Torba", "Doldurmak", "Yem", "Un", "Koymak"] },
    { word: "AJANDA", forbidden: ["Defter", "İş", "Yazmak", "Gün", "Toplantı"] },
    { word: "İŞTAH", forbidden: ["Acıkmak", "Kesilmek", "Açmak", "Lezzet", "Yemek"] },
    { word: "İHALE", forbidden: ["Belediye", "Girmek", "Açmak", "Yolsuzluk", "Kazanmak"] },
    { word: "HİLE", forbidden: ["Aldatmak", "Kandırmak", "Oyun", "Yapmak", "Kumar"] },
    { word: "HALAY", forbidden: ["Düğün", "Çekmek", "Oynamak", "Mendil", "Mahmut Tuncer"] },
    { word: "PLAKET", forbidden: ["Ödül", "Tören", "Başarı", "Vermek", "Teşekkür"] },
    { word: "STAJ", forbidden: ["Öğrenci", "Çalışmak", "Üniversite", "Tecrübe", "İş"] },
    { word: "TECRÜBE", forbidden: ["İş", "Kazanmak", "Çalışmak", "Deneyim", "Yıl"] },
    { word: "MACUN", forbidden: ["Cam", "Pencere", "Tutmak", "Diş", "Mesir"] },
    { word: "MIZIKÇI", forbidden: ["Çocuk", "Küsmek", "Darılmak", "Bozmak", "Oyun"] },
    { word: "ÇAVDAR", forbidden: ["Arpa", "Tahıl", "Buğday", "Kepek", "Ekmek"] },
    { word: "PERFORMANS", forbidden: ["Değerlendirme", "Başarı", "Ders", "Ödev", "Yüksek"] },
    { word: "ÇEKİÇ", forbidden: ["Tokmak", "Çivi", "Tahta", "Metal", "Darbe"] },
    { word: "MİRAS", forbidden: ["Baba", "Maddi", "Manevi", "Vasiyet", "Paylaşmak"] },
    { word: "KİLİT", forbidden: ["Anahtar", "Kapı", "Güvenlik", "Şifre", "Çilingir"] },
    { word: "KAMPÜS", forbidden: ["Üniversite", "Öğrenci", "Ders", "Bina", "Fakülte"] },
    { word: "ŞEMSİYE", forbidden: ["Yağmur", "Islanmak", "Güneş", "Taşımak", "Korunmak"] },
    { word: "BULMACA", forbidden: ["Gazete", "Kelime", "Çözmek", "Zeka", "Sorular"] },
    { word: "BALTA", forbidden: ["Odun", "Kesmek", "Ağaç", "Alet", "Demir"] },
    { word: "DEFTER", forbidden: ["Kağıt", "Okul", "Yazı", "Sayfa", "Kalem"] },
    { word: "PİYANO", forbidden: ["Müzik", "Tuş", "Nota", "Çalmak", "Konser"] },
    { word: "DİNOZOR", forbidden: ["Tarih", "Fosil", "Jurassic", "Kertenkele", "Büyük"] },
    { word: "HARİTA", forbidden: ["Yol", "Kroki", "Ülke", "Şehir", "Dünya"] },
    { word: "FENER", forbidden: ["Işık", "Gece", "Deniz", "El", "Elektrik"] },
    { word: "VİZE", forbidden: ["Pasaport", "Seyahat", "Ülke", "Giriş", "İzin"] },
    { word: "KÜVET", forbidden: ["Banyo", "Su", "Sabun", "Temizlik", "Yatmak"] },
    { word: "SİHİRBAZ", forbidden: ["Gösteri", "Hokus Pokus", "Şapka", "Numara", "İllüzyon"] },
    { word: "DÜRBÜN", forbidden: ["Bakmak", "Göz", "Yakınlaştırmak", "Görmek", "Uzak"] },
    { word: "FIRIN", forbidden: ["Ekmek", "Sıcak", "Hamur", "Pişirmek", "Kürek"] },
    { word: "KONTAK", forbidden: ["Anahtar", "Araba", "Çalıştırmak", "Elektrik", "Düğme"] },
    { word: "MAKAS", forbidden: ["Kesmek", "Kağıt", "Saç", "Metal", "Kumaş"] },
    { word: "KÖPRÜ", forbidden: ["Nehir", "Bağlantı", "Karşı", "Geçiş", "İnşaat"] },
    { word: "ŞİFRE", forbidden: ["Kod", "Bilgisayar", "Gizli", "Harf", "Rakam"] },
    { word: "BAVUL", forbidden: ["Valiz", "Seyahat", "Taşımak", "Kıyafet", "Bagaj"] },
    { word: "TABELA", forbidden: ["Yol", "Bilgi", "Reklam", "Dükkan", "Görmek"] },
    { word: "FOTOĞRAF", forbidden: ["Kamera", "Çekmek", "Anı", "Görüntü", "Albüm"] },
    { word: "KİTAP", forbidden: ["Sayfa", "Okumak", "Yazar", "Roman", "Bilgi"] },
    { word: "TARİH", forbidden: ["Geçmiş", "Olay", "Zaman", "Yıl", "Kronoloji"] },
    { word: "DANS", forbidden: ["Müzik", "Hareket", "Sahne", "Oynamak", "Bale"] },
    { word: "MÜHENDİS", forbidden: ["Teknik", "Plan", "Proje", "İnşaat", "Bilim"] },
    { word: "KUŞ", forbidden: ["Kanat", "Uçmak", "Gaga", "Tüy", "Ötmek"] },
    { word: "ARABA", forbidden: ["Tekerlek", "Motor", "Yakıt", "Trafik", "Hız"] },
    { word: "SAAT", forbidden: ["Zaman", "Kol", "Dakika", "Göstergeler", "Alarm"] },
    { word: "UZAY", forbidden: ["Gezegen", "Astronot", "Dünya", "Boşluk", "Yıldız"] },
    { word: "KOMUTAN", forbidden: ["Asker", "Rütbe", "Lider", "Savaş", "Ordu"] },
    { word: "ŞEKER", forbidden: ["Tatlı", "Beyaz", "Çay", "Şurup", "Karbonhidrat"] },
    { word: "SİNEK", forbidden: ["Böcek", "Uçmak", "Vızıldamak", "Rahatsız", "Pencere"] },
    { word: "GÖLGE", forbidden: ["Işık", "Karartı", "Güneş", "Yansıma", "Siluet"] },
    { word: "KORNA", forbidden: ["Ses", "Araba", "Bastırmak", "Trafik", "Uyarı"] },
    { word: "MAYMUN", forbidden: ["Ağaç", "Muz", "Zeki", "Hayvan", "Orman"] },
    { word: "FUTBOL", forbidden: ["Top", "Gol", "Maç", "Takım", "Hakem"] },
    { word: "ÇADIR", forbidden: ["Kamp", "Dağ", "Kurmak", "Bez", "Uyku"] },
    { word: "BİLGİSAYAR", forbidden: ["Teknoloji", "Ekran", "İnternet", "Klavye", "Fare"] },
    { word: "KARANLIK", forbidden: ["Gece", "Görünmez", "Korku", "Loş", "Ay"] },
    { word: "İNCİ", forbidden: ["Deniz", "Beyaz", "Değerli", "Kolye", "Midye"] },
    { word: "KAYIK", forbidden: ["Deniz", "Sandal", "Tahta", "Kürek", "Balıkçı"] },
    { word: "KELEBEK", forbidden: ["Kanat", "Uçmak", "Renkli", "Böcek", "Çiçek"] },
    { word: "KALEM", forbidden: ["Yazmak", "Kağıt", "Mürekkep", "Silgi", "Defter"] },
    { word: "TELEVİZYON", forbidden: ["Ekran", "Kumanda", "Kanal", "İzlemek", "Ses"] },
    { word: "AYNA", forbidden: ["Yansıma", "Cam", "Bakmak", "Güzellik", "Kırılmak"] },
    { word: "MASA", forbidden: ["Sandalye", "Tahta", "Üstünde", "Yemek", "Oturmak"] },
    { word: "KOLTUK", forbidden: ["Oturmak", "Yumuşak", "Salon", "Kanepe", "Dinlenmek"] },
    { word: "CAM", forbidden: ["Pencere", "Şeffaf", "Kırılmak", "Bardak", "Gözlük"] },
    { word: "KAPI", forbidden: ["Açmak", "Kapatmak", "Anahtar", "Giriş", "Çıkış"] },
    { word: "TELEFON", forbidden: ["Aramak", "Mesaj", "Ekran", "Şarj", "Konuşmak"] },
    { word: "ÇİÇEK", forbidden: ["Bahçe", "Koku", "Renk", "Vazo", "Sulama"] },
    { word: "GÜNEŞ", forbidden: ["Işık", "Sıcak", "Gökyüzü", "Yaz", "Doğmak"] },
    { word: "AY", forbidden: ["Gece", "Gökyüzü", "Yıldız", "Hilal", "Dolunay"] },
    { word: "YILDIZ", forbidden: ["Gece", "Gökyüzü", "Parlamak", "Uzay", "Dilek"] },
    { word: "DENİZ", forbidden: ["Su", "Dalga", "Balık", "Kumsal", "Mavi"] },
    { word: "DAĞ", forbidden: ["Tepe", "Yüksek", "Kar", "Tırmanmak", "Doğa"] },
    { word: "ORMAN", forbidden: ["Ağaç", "Yeşil", "Hayvan", "Doğa", "Yürümek"] },
    { word: "RÜZGAR", forbidden: ["Esinti", "Hava", "Soğuk", "Yaprak", "Uçurmak"] },
    { word: "YAĞMUR", forbidden: ["Su", "Islanmak", "Damla", "Şemsiye", "Hava"] },
    { word: "KAR", forbidden: ["Soğuk", "Beyaz", "Kış", "Yağmak", "Kardan Adam"] },
    { word: "SANDALYE", forbidden: ["Oturmak", "Masa", "Tahta", "Ayak", "Sırt"] },
    { word: "BARDAK", forbidden: ["Su", "İçmek", "Cam", "Plastik", "Doldurmak"] },
    { word: "KAŞIK", forbidden: ["Yemek", "Çorba", "Çatal", "Metal", "Tutmak"] },
    { word: "ÇATAL", forbidden: ["Yemek", "Kaşık", "Bıçak", "Tabak", "Batırmak"] },
    { word: "BIÇAK", forbidden: ["Kesmek", "Metal", "Çatal", "Yemek", "Keskin"] },
    { word: "TABAK", forbidden: ["Yemek", "Yuvarlak", "Çatal", "Kaşık", "Servis"] },
    { word: "ÇAY", forbidden: ["İçmek", "Sıcak", "Bardak", "Şeker", "Dem"] },
    { word: "KAHVE", forbidden: ["İçmek", "Sıcak", "Fincan", "Kafein", "Uyanmak"] },
    { word: "EKMEK", forbidden: ["Yemek", "Fırın", "Un", "Dilmek", "Kahvaltı"] },
    { word: "PEYNİR", forbidden: ["Yemek", "Süt", "Beyaz", "Kahvaltı", "Ekmek"] },
    { word: "ZEYTİN", forbidden: ["Yemek", "Siyah", "Yeşil", "Kahvaltı", "Ağaç"] },
    { word: "BALIK", forbidden: ["Deniz", "Yemek", "Kılçık", "Ağ", "Pişirmek"] },
    { word: "TAVUK", forbidden: ["Yemek", "Kanat", "Et", "Çiftlik", "Pişirmek"] },
    { word: "ET", forbidden: ["Yemek", "Kırmızı", "Pişirmek", "Mangal", "Protein"] },
    { word: "PİLAV", forbidden: ["Yemek", "Pirinç", "Tencere", "Kaşık", "Beyaz"] },
    { word: "MAKARNA", forbidden: ["Yemek", "Un", "Haşlamak", "Sos", "Tabak"] },
    { word: "KAVUN", forbidden: ["Meyve", "Yaz", "Tatlı", "Kesmek", "Sarı"] },
    { word: "KARPUZ", forbidden: ["Meyve", "Yaz", "Kırmızı", "Kesmek", "Çekirdek"] },
    { word: "ÜZÜM", forbidden: ["Meyve", "Bağ", "Siyah", "Yeşil", "Yemek"] },
    { word: "PORTAKAL", forbidden: ["Meyve", "Turuncu", "Suyu", "Vitamin", "Kabuk"] },
    { word: "MUZ", forbidden: ["Meyve", "Sarı", "Tatlı", "Kabuk", "Maymun"] },
    { word: "ELMA", forbidden: ["Meyve", "Kırmızı", "Yeşil", "Ağaç", "Yemek"] },
    { word: "KİRAZ", forbidden: ["Meyve", "Kırmızı", "Çekirdek", "Ağaç", "Yaz"] },
    { word: "ÇİLEK", forbidden: ["Meyve", "Kırmızı", "Tatlı", "Reçel", "Yaz"] },
    { word: "PASTA", forbidden: ["Tatlı", "Krem", "Doğum günü", "Kesmek", "Yemek"] },
    { word: "DONDURMA", forbidden: ["Tatlı", "Soğuk", "Yaz", "Kaşık", "Erimek"] },
    { word: "ÇİKOLATA", forbidden: ["Tatlı", "Kakao", "Yemek", "Kahverengi", "Şeker"] },
    { word: "SİMİT", forbidden: ["Yemek", "Susam", "Fırın", "Kahvaltı", "Yuvarlak"] },
    { word: "BOREK", forbidden: ["Yemek", "Hamur", "Peynir", "Fırın", "Kahvaltı"] },
    { word: "KEK", forbidden: ["Tatlı", "Fırın", "Yumurta", "Un", "Yemek"] },
    { word: "KURABİYE", forbidden: ["Tatlı", "Fırın", "Çay", "Kıtır", "Yemek"] },
];


function GameScreen({ currentTeam, setCurrentTeam, team1Score, setTeam1Score, team2Score, setTeam2Score, setGameState }) {
    const [timeLeft, setTimeLeft] = useState(120); // 2 dakika = 120 saniye
    const [currentWordIndex, setCurrentWordIndex] = useState(null); // İlk kelimeyi rastgele seçmek için
    const [usedIndices, setUsedIndices] = useState([]); // Kullanılmış kelimeleri takip etmek
    const [isPaused, setIsPaused] = useState(false); // Oyun durdu mu?

    const timerRef = useRef(null);


    const successSound = new Audio('/success.mp3')
    const unSuccessSound = new Audio('/unsuccess.mp3')
    successSound.volume = 0.08;
    unSuccessSound.volume = 0.03;
    // Rastgele kelime seçme fonksiyonu
    const getRandomWordIndex = () => {
        if (usedIndices.length >= words.length) {
            setGameState('end')
            return null
        }
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * words.length);

        } while (usedIndices.includes(randomIndex));
        setCurrentWordIndex(randomIndex)
        setUsedIndices(prev => [...prev, randomIndex])
    };

    // İlk kelimeyi oyun başladığında veya kelime değiştiğinde seç
    useEffect(() => {
        getRandomWordIndex()
    }, []);


    // Zamanlayıcı
    useEffect(() => {
        if (!isPaused && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        }

        return () => clearInterval(timerRef.current);
    }, [isPaused]);

    useEffect(() => {
        if (timeLeft === 0) {
            setIsPaused(true);
            clearInterval(timerRef.current);
        }
    }, [timeLeft])


    const handleCorrect = () => {
        if (currentTeam === 'blue') setTeam1Score(prev => prev + 1);
        else setTeam2Score(prev => prev + 1);
        getRandomWordIndex()
        successSound.play()
    };



    const handleSkip = () => {
        getRandomWordIndex()
    };

    const handleForbidden = () => {
        if (currentTeam === 'blue') setTeam1Score(prev => (prev > 0 ? prev - 1 : 0));
        else setTeam2Score(prev => (prev > 0 ? prev - 1 : 0));
        getRandomWordIndex()
        unSuccessSound.play()
    };

    const handleNextTeam = () => {
        setCurrentTeam(currentTeam === 'blue' ? 'red' : 'blue'); // Takımı değiştir
        setTimeLeft(120); // Süreyi sıfırla
        setIsPaused(false); // Oyunu başlat
        getRandomWordIndex()
    };

    const handleStop = () => {
        setIsPaused(prev => !prev)
        if (!isPaused) {
            clearInterval(timerRef.current);
        }
        handleSkip()
    }

    return (
        <div className={` flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4`}>
            <p className="text-lg text-gray-600">
                Kullanılan Kelimeler: <span className="font-semibold">{usedIndices.length}/{words.length}</span>
            </p>
            <div className="text-center ">
                <h2 className={`text-3xl font-bold mb-2 ${currentTeam === 'blue' ? 'text-blue-600' : 'text-red-600'}`}>
                    Takım {currentTeam === 'blue' ? 'Mavi' : 'Kırmızı'}
                </h2>                <p className={`text-lg ${timeLeft <= 10 && timeLeft != 0 ? 'text-red-500 animate-ping' : 'text-gray-600'}`}>
                    Kalan Süre: <span className="font-semibold">{timeLeft} saniye</span>
                </p>
                <div className='flex justify-between my-3'>
                    <p className={`${currentTeam == 'blue' ? 'bg-blue-600' : 'bg-blue-200'} text-xl flex justify-center items-center  w-12 h-12  rounded-full text-white`}>
                        <span className="font-semibold   flex justify-center items-center w-12 h-12 rounded-full text-white">{team1Score}</span>
                    </p>
                    <p className={`${currentTeam == 'red' ? 'bg-red-600' : 'bg-red-200'} text-xl flex justify-center items-center  w-12 h-12  rounded-full text-white`}>
                        <span className="font-semibold  ">{team2Score}</span>
                    </p>

                </div>

            </div>

            {timeLeft > 0 ? (
                <div className={`card w-full max-w-md bg-white shadow-xl  relative  `}>
                   
                        <div className={`${isPaused && 'blur-lg pointer-events-none'} p-6 `}>
                            <h3 className="text-2xl font-bold text-center text-primary mb-4">
                                {currentWordIndex !== null && words[currentWordIndex]?.word ? words[currentWordIndex].word : "Kelimeler Bitti"}
                            </h3>

                            <ul className="text-center font-bold text-gray-700 ">
                                {currentWordIndex !== null && words[currentWordIndex]?.forbidden.map((forbiddenWord, index) => (
                                    <li key={index} className="text-lg">{forbiddenWord}</li>
                                ))}
                            </ul>


                            <div className="flex gap-4 justify-center mt-5">
                                <button onClick={handleForbidden} className="btn btn-lg btn-error">
                                    <IoMdClose size={30} />

                                </button>
                                <button onClick={handleSkip} className="btn btn-lg  btn-warning">
                                    <IoIosArrowForward size={30} />

                                </button>

                                <button onClick={handleCorrect} className="btn btn-lg  btn-success">
                                    <IoMdCheckmark size={30} />
                                </button>
                            </div>
                        </div>
                        {
                            isPaused && <p className='absolute text-2xl  bg-neutral text-white text-center font-bold left-1/2 top-1/2 w-full p-3 -translate-1/2'>Oyun durduruldugunda kelime otomatik olarak değiştirilir </p>
                        }

                        <div className='p-6 pt-0'>
                            <button onClick={handleStop} className='btn btn-neutral w-full mt-4'>{isPaused ? 'Oyunu Başlat' : 'Oyunu Durdur'}</button>
                        </div>
                   
                </div>
            ) : (
                <div className="card w-full max-w-md bg-white shadow-xl p-6 mb-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Süre Bitti!</h3>
                    <p className="text-lg text-gray-600 mb-4">Telefonu diğer takıma verin.</p>
                    <button onClick={handleNextTeam} className="btn btn-neutral">
                        Takımı Değiştir ve Başlat
                    </button>
                </div>
            )}
        </div>
    );
}

export default GameScreen;