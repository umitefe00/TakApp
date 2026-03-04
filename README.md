Harika! En zor kısmını, o inatçı emülatörü dize getirerek başardın. Şov başlıyor! 2 saatlik bu yoğun "challenge" sürecinde yaşadığımız teknik zorlukları ve çözümleri README dosyasına eklemek, hocanın gözünde senin "problem çözme" yeteneğini (troubleshooting) kanıtlayacak ve puanını artıracaktır.

Aşağıdaki metni kopyalayıp projenin ana dizinindeki README.md dosyasına yapıştır. YouTube linkini ve GitHub linkini eklemeyi unutma!

🩺 TAK (Temiz Aralıklı Kateterizasyon) Mobil Uygulaması
Bu uygulama, 2 saatlik "Yerelde Uygulama Geliştirme Challenge" kapsamında, atanan özel moodboard tasarımına sadık kalınarak geliştirilmiş bir sağlık asistanı prototipidir.

🎯 Proje Amacı ve Çözüm
Problem: TAK işlemi uygulayan hastaların süreçle ilgili bilgi eksikliği ve uzmanlara ulaşma zorluğu.

Çözüm: Hastaların sorularına anında yanıt bulabileceği (SSS), hızlıca hasta kaydı oluşturabileceği ve uzman iletişim bilgilerine ulaşabileceği kullanıcı dostu bir platform.

Tasarım İlhamı: Atanan panodaki medikal güven hissi veren mavi tonlar ve beyaz minimalist kart yapısı temel alınmıştır.

🛠️ Kullanılan Teknolojiler & Mimari
Framework: React Native + Expo

Navigasyon: Expo Router (File-based Routing)

State Yönetimi: React Hooks (useState)

Simülasyon: Android Studio (Pixel 3a - API 28)

📂 Uygulama Özellikleri (5 Ekran)
Ana Sayfa: Kategori bazlı yönlendirme menüsü.

Sıkça Sorulan Sorular: Akordeon yapısında, state yönetimi ile çalışan dinamik soru-cevap listesi.

Hasta Kaydı: Form kontrolü (Error handling) ve sahte API isteği (Loading state) barındıran kayıt ekranı.

Hakkında: Uygulamanın vizyonunu ve sürüm bilgilerini içeren bilgilendirme sayfası.

İletişim: Uzman hemşire bilgilerini içeren hızlı erişim ekranı.

🔧 Geliştirme Süreci ve Teknik Mücadele (Troubleshooting)
Challenge süresince yerel geliştirme ortamında (Android Studio) karşılaşılan teknik engeller başarıyla aşılmıştır:

Emülatör Optimizasyonu: API 36 gibi ağır sürümler yerine, sistem kaynaklarını verimli kullanan API 28 (Pie) sürümüne geçiş yapılarak stabilite sağlanmıştır.

ADB Yetkilendirme: Sanal cihaz üzerindeki "Unauthorized" hatası, Geliştirici Seçenekleri ve ADB server (kill/start) müdahaleleriyle çözülmüştür.

Network & Tunneling: Yerel ağ (LAN) ve Ngrok tünel bağlantıları test edilerek fiziksel cihaz ve emülatör senkronizasyonu sağlanmıştır.

🎥 Uygulama Tanıtım Videosu
Uygulamanın tüm özelliklerini ve akışını içeren 1 dakikalık tanıtım videosu:
👉 [https://www.youtube.com/shorts/UtuOgLVTD-8]

⚙️ Kurulum ve Çalıştırma
Repoyu klonlayın: git clone https://github.com/KULLANICI_ADIN/REPO_ADIN.git

Bağımlılıkları yükleyin: npm install

Projeyi başlatın: npx expo start

Emülatör için a tuşuna basın.
