 Bir Soru
 
 Sorun: 
    Eğitim ve öğretim hayatında eğiticilerin planlanmaları ve denetlenmeleri genel bir sorun oluşturmaktadır. Bu sorunun daha iyi çözümlenebilmesi amacıyla, var olan sistem içerisinde eğitmenin süreçlerini ve ders içeriklerinin işlendiği zaman aralığının ve ders içeriğindeki zenginliği tespit etmek gerekmektedir.

 Çözüm:
    Süreç içerisinde bulunan eğitimcilerin değerlendirilmesini sağlamak, ancak bu değerlendirmeyi öğrencinin ve  eğitimcini farketmeyeceği şekilde planlamak gerekmekte. Bu değerlendirme ile eğiticinin süreçlerinin ilerlediği, zamansal ve içeriksel sel olarak yeterli olup olmadığını ölçebileceğiz.
 
 Yaklaşım:
    Eğitimci belirli bir zaman aralığında belirli bir müfredat konusunu ve belirlenen bir içerik ile işlemek zorunda. Ve bu işlenen bilgi içeriği ve zamanı süresinde öğrenciler bu bilgilere daha sıcak ve hakim duruma olurlar. Eğer bu süreç içerisinde ilgili müfredat konusu hakkında öğrencilere ufak çokdan seçmeli sorular yöneltirsek, alınan cevaplara bağlı olarak konunun işlenip işlenmediği, içeriğinin zenginliği hakkına fikir sahibi olabiliriz.
    Tabiki burada her öğrencinin anlatılan her bilgiyi kavrayabildiği yada öğrendiği kanısına kapılmadan verilen cevaplar değerlendirilmeli. Belirli oranlar ve sapmalar bu süreçte kriter olarak belilenmeli ve % sel olarak başarılar ortaya konmalıdır. Bu başarı yüzdeleri ile de eğitmcinin kalitesi direk eşleştirilmemeli, şartlar zaman ve öğrenci kaliteleri de ağırlıklı olarak oranlamaya katılmalıdır.

 Süreç: 
    Eğitimcinin konuyu işlemiş olması beklenen sürenin bitişi ile öğrencilere belirli olmayan bir aralık ve zaman diliminde, çokdan seçmeli ufak soruların tabletlerine Push notification ile düşmesi sağlanmalı, öğrencilere cevaplaması için ortalama bir süre verilmeli, her başarılı soru için öğrenciyi daha çok ve iyi cevaplamaya yöneltici bir yöntem seçilmeli, + vermek gibi. Toplanan sonuçların öğretmenin müfredatı zaman ve içerik olarak karılaştırılmalı. buna ek oalrak sınıfın genel olarak durumu da tüm eğitimcileri oranıyla belirlenmeli. bu belirlenen değerler ile genel başarılar hesaplanmalı.

Uygulama çözümlemesi: (Uygulamanın büyüklüğü ve kullanıcı sayısı için ortalama olarak bir il içi kullanıcı sayısı)

Başlangıçta sistemin 4 ksımı olması planlanabilir(Sonraki süreçlerde sistem yoğunluğu ve ihtiyaçlara göre bu ayrıştırma artabilir):
    1- Client (Mobil cihaz öğrenci + eğitimci)
    2- Client (Yönetim Paneli Arayüzü + raporlama tool ları)
    3- Sürekli çalışan ve belirli/belirsiz aralık ve zamanlarda push tetikleyen sistem
    4- MiddleWare (WebApi + controller katmanı) (Client lara servis desteği sunar)

Client uygulamalarının yazımı için : React - Native (Mobil cihazlar) 
    1- İçeriğin sadeliği
    2- Çok özel bir component yapısının kullanılmaması
    3- Hem Ios hem  Android desteğinin olması
    4- Code Push özelliği ile anlık deploy yapılabilmesi

 Client Yönetim paneli : Asp.Net 
    1- Gerekli durumlarda serverside için kullanılan kütüphanelerin ortak kullanılabilmesi
    2- Kullanılabilirlik,hızlı geliştirme ve düzenleme ortamı
    3- Ürün uyumluluğu

Sürekli çalışan tetikleyici : c# 
    1- Gerekli durumlarda serverside için kullanılan kütüphanelerin ortak kullanılabilmesi
    2- Kullanılabilirlik,hızlı geliştirme ve düzenleme ortamı
    3- Ürün uyumluluğu
    4- Firebase için event tracker modullerinin hazır sunulması

Server Side için: c# ve Microsoft WebApi (Session desteği ile)
    1- REST desteği ile platform bağımsız çağrılabilir (neden webapi)
    2- Session desteği ile sadece tokenbased auth yerine session controlled operasyon yapılabilir
    3- Session desteği ile client a gerekli yeterli bilgi dönerek client bussiness ortadan kaldırlır.
    4- sadece client olarak uygulamaları değil aynı zamanda http get put post desteği ile browser isteklerine de cevap verebilir.
    5- Neden c# ve microsoft, kullanılabilirliğinin ve comminity desteğinin olması ve hızlı geliştirilebilir bir ortam sunması.

Database : MSSql (en yakın Oracle db, ancak linq desteği olması ve microsoft ürünleri arası uyumluluk tercih sebebi)

Uygulama içerikleri:
    Yönetim Paneli 
        1- çoklu rolleri destekleyen kullanıcı yapısı olmalıdır. 
            a- eğitici/öğrenci durumları gözlemle ve raporlama
            b- içerik girişlerinin yapıldığı sistem (sorular)
            c- kullanıcı ve rol yönetimi içeren bir sistem yönetimi
            d- katsayılar ve oranların belirlendiği bir sistem yönetimi
        2- rollere bağlı içeriklerin yönetilmesi için configurasyonlar yapılmalı
        3- clientların istekleri ve bilgileri izlenebilmeli
    Client lar 
        1- push düşmeden öğrenciye eski soru ve cevaplarının gösterilmesi
        2- "+" larının durumunu ve genel sıralamadaki ortalama yerinin gösterimi
        3- yeni soru isteme
        4- push düşen soruyu cevaplama
    Servis tarafı ise 
        1- Mobil client lar için takip sistemi
        2- tüm istemcilere isteklerini cevabının sunulması (Mobil Client, Panel, Servis)
NOT:  kaynak kodun derlenebilmesi için aşağıdaki kurulama ihtiyaç var 
    npm i react-navigation


