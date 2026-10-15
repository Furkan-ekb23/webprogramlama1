> **Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı çevrilmiş ve derlenmiştir. Orijinal dokümantasyon kaynakları (MDN Web Docs, Vue.js, Three.js vb.) kendi orijinal lisanslarına (CC-BY-SA, MIT) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

# Çeviri: MDN — JavaScript ile Dinamik Betik Yazımı ve JavaScript Çerçeveleri (Dynamic scripting with JavaScript & JavaScript frameworks and libraries)

**Konu:** 02 - JavaScript Temelleri & Çerçeveler → *Dynamic scripting with JavaScript* (JavaScript ile dinamik betik yazımı) (Bölüm 1–33) + *JavaScript frameworks and libraries* (JavaScript çerçeveleri ve kütüphaneleri) (Bölüm 34–42)
**Kaynak:** [MDN Web Docs — Learn web development → Core](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core)
**Lisans:** MDN içeriği [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/) lisanslıdır, © Mozilla Contributors. Bu belge, MDN sayfalarının birebir Türkçe çevirisidir.

> **Çeviri hakkında:** Her sayfa, MDN'deki orijinal sayfanın tüm bölümleri, notları, kod örnekleri ve **resimleri** ile birlikte birebir çevrilmiştir. Kod örnekleri değiştirilmemiştir. Resimler, MDN'nin kaynak deposundan ([mdn/content](https://github.com/mdn/content), commit `225dfb4`) gösterilmektedir. Teknik terimlerin İngilizcesi ilk geçtikleri yerde parantez içinde verilmiştir.

## İçindekiler

- **Modül 1: JavaScript ile Dinamik Betik Yazımı (Dynamic scripting with JavaScript)**
  - 1\. JavaScript Nedir? (What is JavaScript?)
  - 2\. JavaScript'e İlk Adım (A first splash into JavaScript)
  - 3\. Ne Ters Gitti? JavaScript Sorunlarını Giderme (What went wrong? Troubleshooting JavaScript)
  - 4\. İhtiyacınız Olan Bilgileri Saklamak — Değişkenler (Storing the information you need — Variables)
  - 5\. Becerilerinizi Test Edin: Değişkenler (Test your skills: Variables)
  - 6\. JavaScript'te Temel Matematik — Sayılar ve Operatörler (Basic math in JavaScript — numbers and operators)
  - 7\. Becerilerinizi Test Edin: Matematik (Test your skills: Math)
  - 8\. Metinlerle Çalışmak — JavaScript'te Dizeler (Handling text — strings in JavaScript)
  - 9\. Kullanışlı Dize Metotları (Useful string methods)
  - 10\. Becerilerinizi Test Edin: Dizeler (Test your skills: Strings)
  - 11\. Diziler (Arrays)
  - 12\. Becerilerinizi Test Edin: Diziler (Test your skills: Arrays)
  - 13\. Görev: Saçma Hikâye Oluşturucu (Challenge: Silly story generator)
  - 14\. Kodunuzda Kararlar Vermek — Koşullu İfadeler (Making decisions in your code — conditionals)
  - 15\. Becerilerinizi Test Edin: Koşullu İfadeler (Test your skills: Conditionals)
  - 16\. Kodu Döngüye Sokmak (Looping code)
  - 17\. Becerilerinizi Test Edin: Döngüler (Test your skills: Loops)
  - 18\. Fonksiyonlar — Yeniden Kullanılabilir Kod Blokları (Functions — reusable blocks of code)
  - 19\. Kendi Fonksiyonunuzu Oluşturun (Build your own function)
  - 20\. Fonksiyon Dönüş Değerleri (Function return values)
  - 21\. Becerilerinizi Test Edin: Fonksiyonlar (Test your skills: Functions)
  - 22\. Olaylara Giriş (Introduction to events)
  - 23\. Olay Kabarcıklanması (Event bubbling)
  - 24\. Becerilerinizi Test Edin: Olaylar (Test your skills: Events)
  - 25\. JavaScript Nesne Temelleri (JavaScript object basics)
  - 26\. Becerilerinizi Test Edin: Nesne Temelleri (Test your skills: Object basics)
  - 27\. DOM Betik Yazımına Giriş (DOM scripting introduction)
  - 28\. Görev: Resim Galerisi (Challenge: Image gallery)
  - 29\. JavaScript ile Ağ İstekleri Yapmak (Making network requests with JavaScript)
  - 30\. JSON ile Çalışmak (Working with JSON)
  - 31\. Becerilerinizi Test Edin: JSON (Test your skills: JSON)
  - 32\. Görev: Ev Verileri Kullanıcı Arayüzü Oluşturmak (Challenge: Building a house data UI)
  - 33\. JavaScript Hata Ayıklama ve Hata İşleme (JavaScript debugging and error handling)
- **Modül 2: JavaScript Çerçeveleri ve Kütüphaneleri (JavaScript frameworks and libraries)**
  - 34\. İstemci Tarafı Çerçevelere Giriş (Introduction to client-side frameworks)
  - 35\. Çerçevelerin Ana Özellikleri (Framework main features)
  - 36\. React'e Başlarken (Getting started with React)
  - 37\. React ToDo Uygulamamıza Başlamak (Beginning our React ToDo app)
  - 38\. React Uygulamamızı Bileşenlere Ayırmak (Componentizing our React app)
  - 39\. React Etkileşimi: Olaylar ve Durum (React interactivity: Events and state)
  - 40\. React Etkileşimi: Düzenleme, Filtreleme, Koşullu İşleme (React interactivity: Editing, filtering, conditional rendering)
  - 41\. React'te Erişilebilirlik (Accessibility in React)
  - 42\. React Kaynakları (React resources)

---

# Modül 1: JavaScript ile Dinamik Betik Yazımı (Dynamic scripting with JavaScript)

**Kaynak:** [Dynamic scripting with JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting)

JavaScript; öğrenilecek pek çok farklı özelliği, stili ve tekniği ve üzerine inşa edilmiş çok sayıda API ve aracıyla devasa bir konudur. Bu modül, çekirdek dilin temellerine ve onu çevreleyen bazı kilit konulara odaklanır — bu konuları öğrenmek size üzerine çalışabileceğiniz sağlam bir temel kazandıracaktır.

## Ön koşullar

Bu modüle başlamadan önce daha önceden herhangi bir JavaScript bilgisine sahip olmanız gerekmez, ancak kurstaki önceki modülleri çalışmış olmalısınız. En azından [HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content) ve [CSS'in temel esaslarını](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics) bilmelisiniz.

> [!NOTE]
> Dosya oluşturamadığınız bir bilgisayar, tablet veya başka bir cihaz üzerinde çalışıyorsanız, kodu [CodePen](https://codepen.io/) veya [JSFiddle](https://jsfiddle.net/) gibi çevrim içi bir düzenleyicide (editor) çalıştırmayı deneyebilirsiniz.

## Eğitimler ve görevler

- **[JavaScript nedir?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)**: MDN'nin yeni başlayanlar için JavaScript kursuna hoş geldiniz! Bu ilk makalede JavaScript'e üst düzeyden bakacak, "nedir?" ve "ne yapıyor?" gibi soruları yanıtlayacak ve JavaScript'in amacını rahatça anladığınızdan emin olacağız.
- **[JavaScript'e ilk adım](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/A_first_splash)**: Artık JavaScript teorisi ve onunla neler yapabileceğiniz hakkında bir şeyler öğrendiğinize göre, tamamen uygulamalı bir eğitim aracılığıyla size JavaScript'in temel özellikleri üzerine hızlandırılmış bir kurs vereceğiz. Burada adım adım basit bir "Sayıyı tahmin et" oyunu oluşturacaksınız.
- **[Ne ters gitti? JavaScript sorunlarını giderme](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong)**: Önceki makalede "Sayıyı tahmin et" oyununu oluşturduğunuzda çalışmadığını görmüş olabilirsiniz. Hiç korkmayın — bu makale, JavaScript programlarındaki hataları nasıl bulacağınıza ve düzelteceğinize dair bazı basit ipuçları sunarak bu tür sorunlar yüzünden saçınızı başınızı yolmaktan sizi kurtarmayı amaçlar.
- **[İhtiyacınız olan bilgileri saklamak — Değişkenler](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)**: Son birkaç makaleyi okuduktan sonra artık JavaScript'in ne olduğunu, sizin için neler yapabileceğini, onu diğer web teknolojileriyle birlikte nasıl kullandığınızı ve ana özelliklerinin üst düzeyden nasıl göründüğünü biliyor olmalısınız. Bu makalede gerçek temellere inecek ve JavaScript'in en temel yapı taşları olan Değişkenler (Variables) ile nasıl çalışılacağına bakacağız.
- **[JavaScript'te temel matematik — sayılar ve operatörler](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math)**: Kursun bu noktasında JavaScript'te matematiği tartışıyoruz — sayıları istediğimizi yapacak şekilde başarıyla işlemek için operatörleri (operators) ve diğer özellikleri nasıl birleştirebileceğimizi ele alıyoruz.
- **[Metinlerle çalışmak — JavaScript'te dizeler](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings)**: Sırada dikkatimizi dizelere (strings) çevireceğiz — programlamada metin parçalarına böyle denir. Bu makalede, JavaScript öğrenirken dizeler hakkında gerçekten bilmeniz gereken tüm yaygın konulara bakacağız; örneğin dizeler oluşturmak, dizelerdeki tırnak işaretlerini kaçırmak (escaping) ve dizeleri birbirine birleştirmek.
- **[Kullanışlı dize metotları](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Useful_string_methods)**: Artık dizelerin en temel özelliklerine baktığımıza göre, vitesi bir kademe yükseltelim ve yerleşik metotlarla (built-in methods) dizeler üzerinde ne gibi yararlı işlemler yapabileceğimizi düşünmeye başlayalım; örneğin bir metin dizesinin uzunluğunu bulmak, dizeleri birleştirmek ve bölmek, bir dizedeki bir karakteri başkasıyla değiştirmek ve daha fazlası.
- **[Diziler (Arrays)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays)**: Bu derste dizilere (arrays) bakacağız — bir veri öğeleri listesini tek bir değişken adı altında saklamanın düzenli bir yolu. Burada bunun neden yararlı olduğuna bakacak, ardından bir dizinin nasıl oluşturulacağını, bir dizide saklanan öğelerin nasıl alınacağını, ekleneceğini ve kaldırılacağını ve bunun yanı sıra daha fazlasını keşfedeceğiz.
- **[Görev: Saçma hikâye oluşturucu](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Silly_story_generator)** <sup>Görev</sup>: Bu görevde (challenge), bu modülde şimdiye kadar edindiğiniz bilgilerden bazılarını alıp rastgele saçma hikâyeler üreten eğlenceli bir uygulama oluşturmak için uygulamanız istenmektedir. Bu süreçte değişkenler, matematik, dizeler ve diziler konusundaki bilgilerinizi test edeceğiz.
- **[Kodunuzda kararlar vermek — koşullu ifadeler](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals)**: Herhangi bir programlama dilinde, kodun farklı girdilere bağlı olarak kararlar vermesi ve buna göre eylemler gerçekleştirmesi gerekir. Örneğin bir oyunda, oyuncunun can sayısı 0 ise oyun biter. Bir hava durumu uygulamasında, uygulamaya sabah bakılıyorsa bir gün doğumu grafiği gösterilir; gece vaktiyse yıldızlar ve bir ay gösterilir. Bu makalede, koşullu ifadeler (conditional statements) olarak adlandırılan yapıların JavaScript'te nasıl çalıştığını keşfedeceğiz.
- **[Kodu döngüye sokmak](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops)**: Programlama dilleri, birden fazla temel hesaplamadan tamamlamanız gereken çok sayıda benzer iş öğesinin bulunduğu hemen hemen her duruma kadar, tekrarlayan görevleri hızla tamamlamak için çok kullanışlıdır. Burada JavaScript'te bu tür ihtiyaçları karşılayan mevcut döngü (loop) yapılarına bakacağız.
- **[Fonksiyonlar — yeniden kullanılabilir kod blokları](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions)**: Kodlamadaki bir diğer temel kavram da **fonksiyonlardır (functions)**; bunlar, tek bir görevi yerine getiren bir kod parçasını tanımlanmış bir blok içinde saklamanıza ve ardından aynı kodu birden çok kez yazmak zorunda kalmak yerine, ihtiyaç duyduğunuz her an tek bir kısa komut kullanarak o kodu çağırmanıza olanak tanır. Bu makalede temel sözdizimi, fonksiyonların nasıl çağrılacağı ve tanımlanacağı, kapsam (scope) ve parametreler (parameters) gibi fonksiyonların arkasındaki temel kavramları keşfedeceğiz.
- **[Kendi fonksiyonunuzu oluşturun](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Build_your_own_function)**: Temel teorinin büyük kısmı önceki makalede ele alındığından, bu makale pratik deneyim sunar. Burada kendi özel fonksiyonunuzu oluşturarak biraz pratik yapacaksınız. Bu süreçte fonksiyonlarla çalışmanın bazı yararlı ayrıntılarını da açıklayacağız.
- **[Fonksiyon dönüş değerleri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Return_values)**: Fonksiyonlar hakkında tartışmamız gereken son bir temel kavram daha var — dönüş değerleri (return values). Bazı fonksiyonlar önemli bir değer döndürmez, ancak bazıları döndürür. Değerlerinin ne olduğunu, bunları kodunuzda nasıl kullanacağınızı ve fonksiyonların yararlı değerler döndürmesini nasıl sağlayacağınızı anlamak önemlidir. Aşağıda bunların hepsini ele alacağız.
- **[Olaylara giriş](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events)**: Bu makalede, olayları (events) çevreleyen bazı önemli kavramları tartışıyor ve tarayıcılarda nasıl çalıştıklarının temellerine bakıyoruz.
- **[Olay kabarcıklanması (Event bubbling)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling)**: Bu makale; başka bir öğeyi içeren bir öğeye dinleyici (listener) eklediğinizde ve ardından içerilen öğede bir olay gerçekleştiğinde neler olduğuyla ilgili olan olay kabarcıklanması (event bubbling), olay yakalama (event capture) ve olay yetkilendirmesi (event delegation) kavramlarını tanıtır.
- **[Görev: Resim galerisi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Image_gallery)** <sup>Görev</sup>: Artık JavaScript'in temel yapı taşlarına baktığımıza göre, pek çok web sitesinde göreceğiniz oldukça yaygın bir öğeyi — JavaScript destekli bir resim galerisini — size oluşturtarak döngüler, fonksiyonlar, koşullu ifadeler ve olaylar konusundaki bilgilerinizi test edeceğiz.
- **[Nesne temelleri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics)**: Bu makalede temel JavaScript nesne (object) sözdizimine bakacak ve kursta daha önce gördüğümüz bazı JavaScript özelliklerini yeniden ziyaret ederek, şimdiye kadar uğraştığınız özelliklerin birçoğunun aslında birer nesne olduğu gerçeğini bir kez daha vurgulayacağız.
- **[DOM betik yazımına giriş](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting)**: Web sayfaları ve uygulamaları yazarken yapmak isteyeceğiniz en yaygın şeylerden biri, belge yapısını bir şekilde değiştirmektir. Bu işlem genellikle HTML ve biçimlendirme bilgilerini kontrol etmeye yönelik yerleşik tarayıcı API'lerinden oluşan bir küme aracılığıyla Belge Nesne Modeli'ni (Document Object Model, DOM) işleyerek yapılır. Bu makalede sizi **DOM betik yazımı (DOM scripting)** ile tanıştıracağız.
- **[JavaScript ile ağ istekleri yapmak](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Network_requests)**: Modern web sitelerinde ve uygulamalarında bir diğer çok yaygın görev de, tamamen yeni bir sayfa yüklemek zorunda kalmadan bir web sayfasının bölümlerini güncellemek amacıyla sunucudan tekil veri öğelerini almak için ağ istekleri (network requests) yapmaktır. Görünüşte küçük olan bu ayrıntı, sitelerin performansı ve davranışı üzerinde devasa bir etki yaratmıştır; bu nedenle bu makalede kavramı açıklayacak ve bunu mümkün kılan teknolojilere bakacağız.
- **[JSON ile çalışmak](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON)**: JavaScript Nesne Gösterimi (JavaScript Object Notation, JSON), JavaScript nesne sözdizimine dayalı olarak yapılandırılmış verileri temsil etmek için kullanılan standart, metin tabanlı bir biçimdir. Web uygulamalarında veri iletmek için (örneğin bir web sayfasında görüntülenebilmesi için sunucudan istemciye bazı veriler göndermek veya tam tersi) yaygın olarak kullanılır. Onunla oldukça sık karşılaşacaksınız; bu nedenle bu makalede, içindeki verilere erişebilmeniz için JSON'ı ayrıştırmak (parsing) ve JSON oluşturmak da dahil olmak üzere JavaScript kullanarak JSON ile çalışmak için ihtiyacınız olan her şeyi size veriyoruz.
- **[Görev: Ev verileri kullanıcı arayüzü oluşturmak](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/House_data_UI)** <sup>Görev</sup>: Bu görevde, bir emlak web sitesindeki ev arama sayfası için biraz JavaScript yazmanızı sağlayacağız. Bu; JSON verilerini getirmeyi (fetching), sağlanan form kontrollerine girilen değerlere göre bu verileri filtrelemeyi ve bu verileri kullanıcı arayüzünde (UI) işlemeyi (rendering) içerecektir. Bu süreçte koşullu ifadeler, döngüler, diziler ve dizi metotları ve daha fazlası konusundaki bilgilerinizi de test edeceğiz.
- **[JavaScript hata ayıklama ve hata işleme](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript)**: Bu derste, JavaScript'te hata ayıklama (debugging) konusuna geri döneceğiz (bu konuya ilk olarak [Ne ters gitti?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong) makalesinde bakmıştık). Burada hataların izini sürme tekniklerini daha derinlemesine inceleyecek, ancak aynı zamanda sorunları daha en başta önleyerek nasıl savunmacı kod yazılacağına (defensive coding) ve kodunuzdaki hataların nasıl işleneceğine (error handling) de bakacağız.

## Becerilerinizi test edin

Bir sonraki konuya geçmeden önce en önemli bilgileri aklınızda tutup tutmadığınızı kontrol etmek için eğitim makalelerinin arasına yerleştirilmiş "Becerilerinizi test edin" ("Test your skills") makaleleri bulacaksınız. Bunların hepsini bir arada keşfetmek isterseniz, [Becerilerinizi test edin: JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills) sayfasında listelenmiş olarak bulabilirsiniz.

## Ayrıca bakınız

- **[Scrimba: JavaScript Öğrenin (Learn JavaScript)](https://scrimba.com/learn-javascript-c0v?via=mdn)** <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>: [Scrimba'nın](https://scrimba.com/?via=mdn) _Learn JavaScript_ kursu, 140'tan fazla etkileşimli kodlama görevini çözdürerek ve aralarında bir oyun, bir tarayıcı eklentisi (extension) ve hatta bir mobil uygulamanın da bulunduğu projeler oluşturtarak size JavaScript öğretir. Scrimba, bilgili eğitmenlerin sunduğu eğlenceli etkileşimli dersler içerir.
- **[JavaScript Öğrenin (Learn JavaScript)](https://learnjavascript.online/)**: Web geliştiricisi olmayı hedefleyenler için mükemmel bir kaynak — Otomatik bir değerlendirme sisteminin rehberliğinde, kısa dersler ve etkileşimli testlerle JavaScript'i etkileşimli bir ortamda öğrenin. İlk 40 ders ücretsizdir ve kursun tamamı küçük bir tek seferlik ödemeyle sunulmaktadır.

---

## 1. JavaScript Nedir? (What is JavaScript?)

**Kaynak:** [What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)

MDN'nin yeni başlayanlar için JavaScript kursuna hoş geldiniz!
Bu makalede JavaScript'e üst düzeyden bakacak, "Nedir?" ve "Onunla neler yapabilirsiniz?" gibi soruları yanıtlayacak ve JavaScript'in amacını rahatça anladığınızdan emin olacağız.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme hedefleri:</th>
      <td>
        <ul>
          <li>JavaScript nedir ve bir web sitesine nasıl uyum sağlar.</li>
          <li>JavaScript ile neler yapabilirsiniz.</li>
          <li>Bir web sayfasına JavaScript eklemek.</li>
          <li>JavaScript içinde yorum satırları (comments) yazmak.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Üst düzey bir tanım

JavaScript, web sayfalarında karmaşık özellikler uygulamanıza olanak tanıyan bir betik (scripting) veya programlama dilidir — bir web sayfası orada öylece durup bakmanız için statik bilgiler göstermekten daha fazlasını yaptığı her an — zamanında içerik güncellemeleri göstermek, etkileşimli haritalar, hareketli 2B/3B grafikler, kayan video müzik kutuları vb. — işin içinde muhtemelen JavaScript olduğundan emin olabilirsiniz.
Standart web teknolojileri katmanlı pastasının üçüncü katmanıdır; bu katmanlardan ikisini ([HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content) ve [CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)) Öğrenme Alanı'nın (Learning Area) diğer bölümlerinde çok daha ayrıntılı olarak ele almıştık.

![Standart web teknolojilerinin üç katmanı; HTML, CSS ve JavaScript](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/what_is_javascript/cake.png)

- [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML), web içeriğimizi yapılandırmak ve ona anlam vermek için kullandığımız işaretleme dilidir (markup language); örneğin paragrafları, başlıkları ve veri tablolarını tanımlamak ya da sayfaya resim ve videolar gömmek.
- [CSS](https://developer.mozilla.org/en-US/docs/Glossary/CSS), HTML içeriğimize stil uygulamak için kullandığımız bir stil kuralları dilidir; örneğin arka plan renklerini ve yazı tiplerini ayarlamak ve içeriğimizi birden çok sütun halinde yerleştirmek.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript), dinamik olarak güncellenen içerik oluşturmanıza, multimedyayı kontrol etmenize, resimleri canlandırmanıza ve hemen hemen diğer her şeyi yapmanıza olanak tanıyan bir betik dilidir. (Tamam, her şeyi değil, ancak birkaç satır JavaScript koduyla başarabilecekleriniz şaşırtıcıdır.)

Bu üç katman birbirinin üzerine güzelce inşa edilir. Örnek olarak bir düğmeyi (button) ele alalım. Ona yapı ve amaç kazandırmak için HTML kullanarak işaretleyebiliriz:

```css hidden live-sample___string-concat-name-html live-sample___string-concat-name-css live-sample___string-concat-name-js
html {
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  font-size: 1.4em;
}
```

```html live-sample___string-concat-name-html live-sample___string-concat-name-css live-sample___string-concat-name-js
<button>Player 1: Chris</button>
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Ardından güzel görünmesini sağlamak için karışıma biraz CSS ekleyebiliriz:

```css live-sample___string-concat-name-css live-sample___string-concat-name-js
button {
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 2px solid rgb(200 200 0 / 60%);
  background-color: rgb(0 217 217 / 60%);
  color: rgb(100 0 0 / 100%);
  box-shadow: 1px 1px 2px rgb(0 0 200 / 40%);
  border-radius: 10px;
  padding: 3px 10px;
  cursor: pointer;
}
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Ve son olarak, dinamik davranış uygulamak için biraz JavaScript ekleyebiliriz:

```js live-sample___string-concat-name-js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Metin etiketine tıklamayı, açılan iletişim kutusuna (dialog box) bir ad girmeyi ve OK ("Tamam") düğmesine basmayı deneyin.

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

JavaScript bundan çok daha fazlasını yapabilir — neler yapabileceğini daha ayrıntılı olarak keşfedelim.

> [!NOTE]
> Devam etmeden önce, neden daha bu erken aşamada kolları sıvayıp Scrimba'dan bir görevle işe dalmıyorsunuz? [Bir karşılama mesajı oluşturun (Render a welcome message)](https://scrimba.com/learn-javascript-c0v/~0n?via=mdn) <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> dersine göz atın. Bu kodu nasıl yazacağınızı bilmiyorsanız hiç endişelenmeyin; bazı yanıtlar bulmak için web'de arama yapmayı deneyebilir veya etkileşimli dersin (scrim) sonunda çözümü görüntüleyebilirsiniz.

### Peki gerçekte neler yapabilir?

Çekirdek istemci tarafı (client-side) JavaScript dili, şu gibi şeyleri yapmanıza olanak tanıyan bazı yaygın programlama özelliklerinden oluşur:

- Yararlı değerleri değişkenlerin (variables) içinde saklamak. Örneğin yukarıdaki örnekte, yeni bir ad girilmesini istiyor ve ardından bu adı `name` adlı bir değişkende saklıyoruz.
- Metin parçaları (programlamada "dizeler" ("strings") olarak bilinir) üzerinde işlemler. Yukarıdaki örnekte "Player 1: " dizesini alıyor ve tam metin etiketini (örneğin "Player 1: Chris") oluşturmak için onu `name` değişkeniyle birleştiriyoruz.
- Bir web sayfasında meydana gelen belirli olaylara (events) yanıt olarak kod çalıştırmak. Yukarıdaki örneğimizde düğmeye ne zaman tıklandığını algılamak ve ardından metin etiketini güncelleyen kodu çalıştırmak için bir [`click`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) olayı kullandık.
- Ve çok daha fazlası!

Ancak daha da heyecan verici olan, istemci tarafı JavaScript dilinin üzerine inşa edilen işlevselliktir. **Uygulama Programlama Arayüzleri** (**Application Programming Interfaces** — **API'ler**) olarak adlandırılan yapılar, JavaScript kodunuzda kullanmanız için size ekstra süper güçler sağlar.

API'ler, bir geliştiricinin aksi takdirde uygulanması zor veya imkânsız olacak programları uygulamasına olanak tanıyan hazır kod yapı taşları kümeleridir.
Hazır mobilya kitlerinin ev inşası için yaptığının aynısını programlama için yaparlar — bir kitaplık yapmak için önceden kesilmiş panelleri alıp birbirine vidalamak; tasarımı kendiniz çıkarmaktan, gidip doğru ahşabı bulmaktan, tüm panelleri doğru boyut ve şekilde kesmekten, doğru boyuttaki vidaları bulmaktan ve _sonra_ bir kitaplık yapmak için bunları bir araya getirmekten çok daha kolaydır.

Genellikle iki kategoriye ayrılırlar.

![İki API kategorisi; 3. taraf API'ler tarayıcının yanında ve tarayıcı API'leri tarayıcının içinde gösterilmiştir](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/what_is_javascript/browser.png)

**Tarayıcı API'leri (Browser APIs)** web tarayıcınızın içine yerleşiktir ve çevredeki bilgisayar ortamından veri sunabilir ya da yararlı karmaşık işler yapabilir. Örneğin:

- [DOM (Document Object Model — Belge Nesne Modeli) API'si](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), HTML ve CSS'i işlemenize; HTML oluşturmanıza, kaldırmanıza ve değiştirmenize, sayfanıza dinamik olarak yeni stiller uygulamanıza vb. olanak tanır.
  Örneğin bir sayfada bir açılır pencerenin (popup window) belirdiğini veya bazı yeni içeriklerin görüntülendiğini (yukarıdaki basit demomuzda gördüğümüz gibi) her gördüğünüzde, bu iş başındaki DOM'dur.
- [Geolocation API'si (Coğrafi Konum API'si)](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API), coğrafi bilgileri alır.
  [Google Haritalar'ın (Google Maps)](https://www.google.com/maps) konumunuzu bulup bir harita üzerinde işaretleyebilmesi bu sayededir.
- [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) ve [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) API'leri, hareketli 2B ve 3B grafikler oluşturmanıza olanak tanır.
  İnsanlar bu web teknolojilerini kullanarak harika şeyler yapıyor — bkz. [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) ve [webglsamples](https://webglsamples.org/).
- [`HTMLMediaElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) ve [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) gibi [Ses ve Video API'leri (Audio and Video APIs)](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Audio_and_video_delivery), multimedya ile gerçekten ilginç şeyler yapmanıza olanak tanır; örneğin doğrudan bir web sayfasında ses ve video oynatmak ya da web kameranızdan video alıp başka birinin bilgisayarında görüntülemek (fikir edinmek için basit [Snapshot demomuzu](https://chrisdavidmills.github.io/snapshot/) deneyin).

**Üçüncü taraf API'ler (Third-party APIs)** varsayılan olarak tarayıcının içine yerleşik değildir ve genellikle kodlarını ve bilgilerini Web üzerinde bir yerden almanız gerekir. Örneğin:

- [Bluesky API'si](https://bsky.network/), en son gönderilerinizi web sitenizde görüntülemek gibi şeyler yapmanıza olanak tanır.
- [Google Maps API'si](https://developers.google.com/maps/) ve [OpenStreetMap API'si](https://wiki.openstreetmap.org/wiki/API), web sitenize özel haritalar gömmenize ve buna benzer diğer işlevlere olanak tanır.

> [!NOTE]
> Bu API'ler ileri düzeydir ve bu modülde bunların hiçbirini ele almayacağız. Bunlar hakkında çok daha fazlasını [İstemci tarafı web API'leri modülümüzde (Client-side web APIs module)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs) öğrenebilirsiniz.

Daha pek çok şey de mevcuttur! Ancak henüz aşırı heyecanlanmayın. 24 saat JavaScript çalıştıktan sonra bir sonraki Facebook, Google Haritalar veya Instagram'ı inşa edemeyeceksiniz — önce ele alınması gereken pek çok temel konu var. Ve işte bu yüzden buradasınız — devam edelim!

### JavaScript sayfanızda ne yapıyor?

Burada gerçekten bazı kodlara bakmaya başlayacağız ve bunu yaparken, sayfanızda biraz JavaScript çalıştırdığınızda gerçekte neler olduğunu keşfedeceğiz.

Bir web sayfasını bir tarayıcıda yüklediğinizde neler olduğunun hikâyesini kısaca özetleyelim (ilk olarak [CSS nedir?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#how_is_css_applied_to_html) makalemizde bahsedilmişti). Web sayfanızı tarayıcınızda yüklediğinizde, kodunuzu (HTML, CSS ve JavaScript) bir yürütme ortamının (execution environment — tarayıcı sekmesi) içinde çalıştırırsınız. Bu, ham maddeleri (kodu) alan ve bir ürün (web sayfası) çıkaran bir fabrika gibidir.

![Sayfa yüklendiğinde tarayıcı sekmesinde içeriği oluşturmak için HTML, CSS ve JavaScript kodu bir araya gelir](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/what_is_javascript/execution.png)

JavaScript'in çok yaygın bir kullanımı, bir kullanıcı arayüzünü güncellemek amacıyla Belge Nesne Modeli API'si (yukarıda bahsedildiği gibi) aracılığıyla HTML ve CSS'i dinamik olarak değiştirmektir.

#### Tarayıcı güvenliği

Her tarayıcı sekmesinin, içinde kod çalıştırmak için kendine ait ayrı bir kovası vardır (bu kovalara teknik terimlerle "yürütme ortamları" ("execution environments") denir) — bu, çoğu durumda her sekmedeki kodun tamamen ayrı çalıştırıldığı ve bir sekmedeki kodun başka bir sekmedeki — veya başka bir web sitesindeki — kodu doğrudan etkileyemeyeceği anlamına gelir.
Bu iyi bir güvenlik önlemidir — durum böyle olmasaydı, korsanlar diğer web sitelerinden bilgi çalmak için kod yazmaya ve buna benzer kötü şeylere başlayabilirdi.

> [!NOTE]
> Farklı web siteleri/sekmeler arasında güvenli bir şekilde kod ve veri göndermenin yolları vardır, ancak bunlar bu kursta ele almayacağımız ileri düzey tekniklerdir.

#### JavaScript çalışma sırası

Tarayıcı bir JavaScript bloğuyla karşılaştığında, onu genellikle sırasıyla, yukarıdan aşağıya doğru çalıştırır.
Bu, şeyleri hangi sırayla koyduğunuza dikkat etmeniz gerektiği anlamına gelir.
Örneğin, ilk örneğimizde gördüğümüz JavaScript bloğuna geri dönelim:

```js
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Burada önce `updateName()` adlı bir kod bloğu tanımlıyoruz (bu tür yeniden kullanılabilir kod bloklarına **fonksiyonlar (functions)** denir); bu blok kullanıcıdan yeni bir ad ister ve bu adı bir düğmenin metnine ekler. Ardından `document.querySelector` kullanarak bir düğmeye olan başvuruyu (reference) saklarız ve düğmeye tıklandığında `updateName()` fonksiyonunun çalıştırılması için `addEventListener` kullanarak ona bir olay dinleyici (event listener) bağlarız.

`const button = ...` ve `button.addEventListener(...)` satırlarının sırasını değiştirecek olsaydınız, kod artık çalışmazdı — bunun yerine [tarayıcı geliştirici konsolunda (browser developer console)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) döndürülen bir hata alırdınız — `Uncaught ReferenceError: Cannot access 'button' before initialization`.
Bu, `button` nesnesinin henüz başlatılmadığı (initialized), dolayısıyla ona bir olay dinleyici ekleyemeyeceğimiz anlamına gelir.

> [!NOTE]
> [Yukarı çekme (hoisting)](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) gibi davranışlar nedeniyle JavaScript'in tam olarak yukarıdan aşağıya doğru sırayla çalıştığı her zaman doğru değildir; ancak şimdilik, öğeleri kullanabilmeniz için genellikle önce tanımlanmaları gerektiğini aklınızda bulundurun. Bu yaygın bir hata kaynağıdır.

#### Yorumlanan ve derlenen kod karşılaştırması

Programlama bağlamında **yorumlanan (interpreted)** ve **derlenen (compiled)** terimlerini duyabilirsiniz.
Yorumlanan dillerde kod yukarıdan aşağıya doğru çalıştırılır ve kodun çalıştırılmasının sonucu hemen döndürülür.
Tarayıcı kodu çalıştırmadan önce onu farklı bir biçime dönüştürmeniz gerekmez.
Kod, programcı dostu metin biçiminde alınır ve doğrudan oradan işlenir.

Öte yandan derlenen diller, bilgisayar tarafından çalıştırılmadan önce başka bir biçime dönüştürülür (derlenir).
Örneğin C/C++, daha sonra bilgisayar tarafından çalıştırılan makine koduna derlenir.
Program, orijinal program kaynak kodundan üretilmiş ikili (binary) bir biçimden yürütülür.

JavaScript hafif, yorumlanan bir programlama dilidir.
Web tarayıcısı JavaScript kodunu orijinal metin biçiminde alır ve betiği doğrudan oradan çalıştırır.
Teknik açıdan bakıldığında, çoğu modern JavaScript yorumlayıcısı (interpreter) performansı artırmak için aslında **tam zamanında derleme (just-in-time compiling)** adlı bir teknik kullanır; JavaScript kaynak kodu, mümkün olduğunca hızlı çalıştırılabilmesi için betik kullanılırken daha hızlı, ikili bir biçime derlenir.
Ancak derleme işlemi önceden değil çalışma zamanında (run time) gerçekleştirildiği için JavaScript yine de yorumlanan bir dil olarak kabul edilir.

Her iki dil türünün de avantajları vardır, ancak bunları şu anda tartışmayacağız.

#### Sunucu tarafı ve istemci tarafı kod karşılaştırması

Özellikle web geliştirme bağlamında **sunucu tarafı (server-side)** ve **istemci tarafı (client-side)** kod terimlerini de duyabilirsiniz.
İstemci tarafı kod, kullanıcının bilgisayarında çalıştırılan koddur — bir web sayfası görüntülendiğinde, sayfanın istemci tarafı kodu indirilir, ardından tarayıcı tarafından çalıştırılır ve görüntülenir.
Bu modülde açıkça **istemci tarafı JavaScript** hakkında konuşuyoruz.

Öte yandan sunucu tarafı kod sunucuda çalıştırılır, ardından sonuçları indirilir ve tarayıcıda görüntülenir.
Popüler sunucu tarafı web dillerine örnek olarak PHP, Python, Ruby, C# ve hatta JavaScript verilebilir!
JavaScript de, örneğin popüler Node.js ortamında, bir sunucu tarafı dili olarak kullanılabilir — sunucu tarafı JavaScript hakkında daha fazla bilgiyi [Dinamik Web Siteleri – Sunucu tarafı programlama (Dynamic Websites – Server-side programming)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side) konumuzda bulabilirsiniz.

#### Dinamik ve statik kod karşılaştırması

**Dinamik (dynamic)** kelimesi hem istemci tarafı JavaScript'i hem de sunucu tarafı dilleri tanımlamak için kullanılır — gerektiğinde yeni içerik üreterek, farklı koşullarda farklı şeyler göstermek üzere bir web sayfasının/uygulamasının görünümünü güncelleme yeteneğini ifade eder.
Sunucu tarafı kod, sunucuda dinamik olarak yeni içerik üretir (örneğin bir veritabanından veri çekerek); buna karşılık istemci tarafı JavaScript, istemcideki tarayıcının içinde dinamik olarak yeni içerik üretir (örneğin yeni bir HTML tablosu oluşturup onu sunucudan istenen verilerle doldurmak ve ardından tabloyu kullanıcıya gösterilen bir web sayfasında görüntülemek).
İki bağlamda anlam biraz farklıdır ama birbiriyle ilişkilidir ve her iki yaklaşım (sunucu tarafı ve istemci tarafı) genellikle birlikte çalışır.

Dinamik olarak güncellenen hiçbir içeriği olmayan bir web sayfası **statik (static)** olarak adlandırılır — her zaman aynı içeriği gösterir.

### Sayfanıza JavaScript'i nasıl eklersiniz?

JavaScript, HTML sayfanıza CSS'e benzer bir şekilde uygulanır.
CSS, HTML'e harici stil sayfaları uygulamak için [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link) öğelerini ve dahili stil sayfaları uygulamak için [`<style>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/style) öğelerini kullanırken, JavaScript'in HTML dünyasında yalnızca tek bir dosta ihtiyacı vardır — [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) öğesi. Bunun nasıl çalıştığını öğrenelim.

> [!NOTE]
> Scrimba'nın [JavaScript dosyamızı kurmak (Setting up our JavaScript file)](https://scrimba.com/learn-javascript-c0v/~03?via=mdn) <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> adlı etkileşimli eğitimi, HTML'inize JavaScript eklemenin birkaç farklı yolunu adım adım anlatır.

#### Dahili (Internal) JavaScript

1. Her şeyden önce, yerel dosya sisteminizde yeni bir HTML dosyası oluşturun ve aşağıdaki içeriği ona ekleyin:
   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Apply JavaScript example</title>
     </head>
     <body>
       <button>Click me</button>
     </body>
   </html>
   ```
2. Dosyayı web tarayıcınızda ve metin düzenleyicinizde açın. HTML'in tıklanabilir bir düğme içeren basit bir web sayfası oluşturduğunu göreceksiniz.
3. Ardından metin düzenleyicinize gidin ve gövdenizin (body) en altına — kapanış `</body>` etiketinizin hemen önüne — aşağıdakini ekleyin:

   ```html
   <script>
     // JavaScript goes here
   </script>
   ```

   Web belgelerinizdeki kodun genellikle sayfada göründüğü sırayla yüklendiğini ve yürütüldüğünü unutmayın. JavaScript'i en alta yerleştirerek tüm HTML öğelerinin yüklenmesini sağlamış oluruz. (Ayrıca aşağıdaki [Betik yükleme stratejileri](#betik-yükleme-stratejileri) bölümüne bakın.)

4. Şimdi sayfanın daha ilginç bir şey yapmasını sağlamak için [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) öğemizin içine biraz JavaScript ekleyeceğiz — "// JavaScript goes here" satırının hemen altına aşağıdaki kodu ekleyin:

   ```js
   function createParagraph() {
     const para = document.createElement("p");
     para.textContent = "You clicked the button!";
     document.body.appendChild(para);
   }

   const buttons = document.querySelectorAll("button");

   for (const button of buttons) {
     button.addEventListener("click", createParagraph);
   }
   ```

5. Dosyanızı kaydedin ve tarayıcıyı yenileyin — artık düğmeye tıkladığınızda yeni bir paragrafın oluşturulduğunu ve aşağıya yerleştirildiğini görmelisiniz.

Örnek şu şekilde işlenmelidir (render):

```html hidden live-sample___apply-javascript-internal
<button>Click me</button>

<script>
  function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll("button");

  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }
</script>
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Örneğiniz çalışmıyor gibi görünüyorsa, adımların üzerinden tekrar geçin ve her şeyi doğru yaptığınızı kontrol edin.

- Yerel dosyanızı bir `.html` dosyası olarak kaydettiniz mi?
- [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) öğenizi `</body>` etiketinin hemen önüne eklediniz mi?
- JavaScript'i tam olarak gösterildiği gibi girdiniz mi? **JavaScript büyük/küçük harfe duyarlıdır (case sensitive) ve çok titizdir; bu nedenle sözdizimini tam olarak gösterildiği gibi girmeniz gerekir, aksi takdirde çalışmayabilir.**

#### Harici (External) JavaScript

Bu harika çalışıyor, peki ya JavaScript'imizi harici bir dosyaya koymak isteseydik? Şimdi bunu keşfedelim.

1. Önce HTML dosyanızla aynı dizinde yeni bir dosya oluşturun. Ona `script.js` adını verin — JavaScript olarak tanınmasını sağlayan şey bu olduğundan `.js` dosya adı uzantısına sahip olduğundan emin olun.
2. [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) öğenizi HTML dosyasından kaldırın, ardından kapanış `</head>` etiketinin hemen önüne aşağıdakini ekleyin (böylece tarayıcı dosyayı, en altta olduğu duruma göre daha erken yüklemeye başlayabilir):

   ```html
   <script type="module" src="script.js"></script>
   ```

3. `script.js` dosyasının içine aşağıdaki JavaScript'i ekleyin:

   ```js live-sample___apply-javascript-external
   function createParagraph() {
     const para = document.createElement("p");
     para.textContent = "You clicked the button!";
     document.body.appendChild(para);
   }

   const buttons = document.querySelectorAll("button");

   for (const button of buttons) {
     button.addEventListener("click", createParagraph);
   }
   ```

4. Kaydedin ve tarayıcınızı yenileyin. Düğmeye tıklamanın hiçbir etkisi olmadığını keşfedeceksiniz ve tarayıcınızın konsolunu kontrol ederseniz `Cross-origin request blocked` benzeri bir hata göreceksiniz. Bunun nedeni, pek çok harici kaynak gibi JavaScript modüllerinin de HTML ile [aynı kökenden (same origin)](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy) yüklenmesinin gerekmesi ve `file://` URL'lerinin bu koşulu sağlamamasıdır. Bu sorunu çözmek için iki çözüm vardır:
   - Önerdiğimiz çözüm [yerel bir test sunucusu kurmaktır](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Sunucu programı çalışırken ve `apply-javascript-external.html` ile `script.js` dosyalarını `8000` numaralı bağlantı noktasında (port) sunarken, tarayıcınızı açın ve `http://localhost:8000` adresine gidin.
   - Yerel bir sunucu çalıştıramıyorsanız, `<script type="module" src="script.js"></script>` yerine `<script defer src="script.js"></script>` de kullanabilirsiniz. Daha fazla bilgi için aşağıdaki [Betik yükleme stratejileri](#betik-yükleme-stratejileri) bölümüne bakın. Ancak eğitimin diğer bölümlerinde kullandığımız özelliklerin her halükârda yerel bir HTTP sunucusu gerektirebileceğini unutmayın.

Web sayfası tıpkı daha önceki gibi çalışır, ancak artık JavaScript'imiz harici bir dosyadadır:

```html hidden live-sample___apply-javascript-external
<button>Click me</button>
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Harici JavaScript, kodunuzu düzenlemek ve birden çok HTML dosyasında yeniden kullanılabilir hale getirmek açısından genellikle iyi bir şeydir.
Ayrıca içine yığılmış devasa betik yığınları olmadığında HTML'i okumak daha kolaydır.

#### Satır içi (Inline) JavaScript işleyicileri

Bazen HTML'in içinde yaşayan gerçek JavaScript kodu parçalarıyla karşılaşacağınızı unutmayın.
Şuna benzer görünebilir:

```js example-bad
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}
```

```html example-bad
<button onclick="createParagraph()">Click me!</button>
```

Bu kod, önceki iki bölümde gösterilen sürümlerle tamamen aynı işlevselliğe sahiptir; tek farkı, [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) öğesinin düğmeye basıldığında fonksiyonun çalışmasını sağlamak için satır içi bir `onclick` işleyicisi (handler) içermesidir.

**Ancak lütfen bunu yapmayın.** HTML'inizi JavaScript ile kirletmek kötü bir uygulamadır ve verimsizdir — JavaScript'in uygulanmasını istediğiniz her düğmeye `onclick="createParagraph()"` özniteliğini (attribute) eklemeniz gerekir.

#### Bunun yerine addEventListener kullanmak

HTML'inize JavaScript dahil etmek yerine saf bir JavaScript yapısı kullanın.
`querySelectorAll()` fonksiyonu bir sayfadaki tüm düğmeleri seçmenize olanak tanır.
Ardından düğmeler üzerinde döngü kurarak `addEventListener()` yardımıyla her birine bir işleyici atayabilirsiniz.
Bunun kodu aşağıda gösterilmiştir:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Bu, `onclick` özniteliğinden biraz daha uzun olabilir, ancak sayfada kaç tane olursa olsun ya da kaç tane eklenip kaldırılırsa kaldırılsın tüm düğmeler için çalışacaktır.
JavaScript'in değiştirilmesine gerek yoktur.

> [!NOTE]
> Kendi `apply-javascript.html` sürümünüzü düzenlemeyi deneyin ve dosyaya birkaç düğme daha ekleyin.
> Yeniden yüklediğinizde, tüm düğmelerin tıklandığında bir paragraf oluşturduğunu görmelisiniz.
> Çok hoş, değil mi?

#### Betik yükleme stratejileri

Bir sayfadaki tüm HTML, göründüğü sırayla yüklenir.
Sayfadaki öğeleri (veya daha doğrusu [Belge Nesne Modeli'ni (Document Object Model)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)) işlemek için JavaScript kullanıyorsanız, JavaScript üzerinde bir şey yapmaya çalıştığınız HTML'den önce yüklenir ve ayrıştırılırsa (parsed) kodunuz çalışmayacaktır.

JavaScript'inizin yalnızca HTML ayrıştırıldıktan sonra çalışmasını sağlamak için birkaç farklı strateji vardır:

- Yukarıdaki dahili JavaScript örneğinde, betik öğesi belgenin gövdesinin (body) en altına yerleştirilmiştir ve bu nedenle yalnızca HTML gövdesinin geri kalanı ayrıştırıldıktan sonra çalıştırılır.
- Yukarıdaki harici JavaScript örneğinde, betik öğesi HTML gövdesi ayrıştırılmadan önce belgenin baş (head) bölümüne yerleştirilmiştir. Ancak `<script type="module">` kullandığımız için kod bir [modül (module)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) olarak ele alınır ve tarayıcı JavaScript modüllerini yürütmeden önce tüm HTML'in işlenmesini bekler. (Harici betikleri gövdenin en altına da yerleştirebilirsiniz. Ancak çok fazla HTML varsa ve ağ yavaşsa, tarayıcının betiği getirmeye ve yüklemeye başlaması bile çok zaman alabilir; bu nedenle harici betikleri head bölümüne yerleştirmek genellikle daha iyidir.)
- Yine de belge head bölümünde modül olmayan betikler kullanmak istiyorsanız — ki bu tüm sayfanın görüntülenmesini engelleyebilir ve HTML ayrıştırılmadan önce yürütüldüğü için hatalara neden olabilir:
  - Harici betikler için [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) öğesine `defer` (veya HTML'in hazır olmasına ihtiyacınız yoksa `async`) özniteliğini eklemelisiniz.
  - Dahili betikler için kodu bir [`DOMContentLoaded` olay dinleyicisi (event listener)](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) içine sarmalamalısınız.

  Bu, şu noktada eğitimin kapsamı dışındadır; ancak çok eski tarayıcıları desteklemeniz gerekmiyorsa bunu yapmak zorunda değilsiniz ve bunun yerine doğrudan `<script type="module">` kullanabilirsiniz.

### Yorum satırları

HTML ve CSS'te olduğu gibi, JavaScript kodunuzun içine de tarayıcı tarafından yok sayılacak ve diğer geliştiricilere kodun nasıl çalıştığına dair talimatlar sağlamak için (ve altı ay sonra kodunuza geri dönüp ne yaptığınızı hatırlayamadığınızda sizin için) var olan yorum satırları (comments) yazmak mümkündür.
Yorum satırları çok kullanışlıdır ve özellikle daha büyük uygulamalar için bunları sık sık kullanmalısınız.
İki türü vardır:

- Tek satırlık bir yorum, çift eğik çizgiden (`//`) sonra yazılır, örneğin:

  ```js
  // I am a comment
  ```

- Çok satırlık bir yorum, `/*` ve `*/` dizeleri arasına yazılır, örneğin:

  ```js
  /*
    I am also
    a comment
  */
  ```

Örneğin, son demomuzun JavaScript koduna şu şekilde yorum satırlarıyla açıklamalar ekleyebiliriz:

```js
// Function: creates a new paragraph and appends it to the bottom of the HTML body.

function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

/*
  1. Get references to all the buttons on the page in an array format.
  2. Loop through all the buttons and add a click event listener to each one.

  When any button is pressed, the createParagraph() function will be run.
*/

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

> [!NOTE]
> Genel olarak daha fazla yorum satırı daha az yorum satırından iyidir; ancak kendinizi değişkenlerin ne olduğunu açıklamak için (belki de değişken adlarınız daha sezgisel olmalıdır) ya da çok basit işlemleri açıklamak için (belki de kodunuz aşırı karmaşıktır) çok sayıda yorum satırı eklerken bulursanız dikkatli olmalısınız.

### Özet

İşte böyle, JavaScript dünyasına ilk adımınızı attınız.
Neden JavaScript kullanacağımıza ve onunla ne tür şeyler yapabileceğinize alışmanızı sağlamak için yalnızca teoriyle başladık.
Bu süreçte birkaç kod örneği gördünüz ve diğer şeylerin yanı sıra JavaScript'in web sitenizdeki geri kalan kodla nasıl uyum sağladığını öğrendiniz.

JavaScript şu anda biraz göz korkutucu görünebilir, ancak endişelenmeyin — bu kursta, ilerledikçe anlam kazanacak basit adımlarla size rehberlik edeceğiz.
Bir sonraki makalede doğrudan uygulamaya dalacak, hemen işe koyulup kendi JavaScript örneklerinizi oluşturmanızı sağlayacağız.

---

## 2. JavaScript'e İlk Adım (A first splash into JavaScript)

**Kaynak:** [A first splash into JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/A_first_splash)

Artık JavaScript ve onunla neler yapabileceğiniz hakkında biraz teori öğrendiğinize göre, basit bir JavaScript programının nasıl oluşturulacağını görebilmeniz için size uygulamalı bir eğitimle rehberlik edeceğiz. Burada adım adım basit bir "Sayıyı tahmin et" ("Guess the number") oyunu oluşturacaksınız.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Bir programcı gibi düşünmek.</li>
          <li>JavaScript yazmanın nasıl bir şey olduğunu deneyimlemek.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> [İlk JavaScript değişkeninizi yazın (Write your first JavaScript variable)](https://scrimba.com/learn-javascript-c0v/~04?via=mdn) dersiyle başlayan Scrimba<sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, size JavaScript'in temellerini adım adım anlatan yararlı etkileşimli dersler sunar.

Burada beklentileri gerçekten çok net belirlemek istiyoruz: Bu makalenin sonunda JavaScript'i öğrenmeniz ya da sizden yazmanızı istediğimiz tüm kodları anlamanız beklenmiyor. Bunun yerine, JavaScript'in özelliklerinin birlikte nasıl çalıştığına ve JavaScript yazmanın nasıl hissettirdiğine dair size bir fikir vermek istiyoruz. Sonraki makalelerde burada gösterilen tüm özellikleri çok daha ayrıntılı olarak yeniden ziyaret edeceksiniz, bu yüzden hepsini hemen anlamazsanız endişelenmeyin!

> [!NOTE]
> JavaScript'te göreceğiniz kod özelliklerinin birçoğu diğer programlama dillerindekilerle aynıdır — fonksiyonlar, döngüler vb. Kod sözdizimi (syntax) farklı görünür, ancak kavramlar büyük ölçüde hâlâ aynıdır.

### "Sayı tahmin oyunu" örneğimizle tanışın

Bu makalede size aşağıda görebileceğiniz oyunu nasıl oluşturacağınızı göstereceğiz:

```html hidden live-sample___guess-the-number
<h1>Number guessing game</h1>

<p>
  We have selected a random number between 1 and 100. See if you can guess it in
  10 turns or fewer. We'll tell you if your guess was too high or too low.
</p>

<div class="form">
  <label for="guessField">Enter a guess: </label>
  <input
    type="number"
    min="1"
    max="100"
    required
    id="guessField"
    class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
</div>

<div class="resultParas">
  <p class="guesses"></p>
  <p class="lastResult"></p>
  <p class="lowOrHi"></p>
</div>
```

```css hidden live-sample___guess-the-number
html {
  font-family: sans-serif;
}

body {
  width: 50%;
  max-width: 800px;
  min-width: 480px;
  margin: 0 auto;
}

.form input[type="number"] {
  width: 200px;
}

.lastResult {
  color: white;
  padding: 3px;
}
```

```js hidden live-sample___guess-the-number
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }

  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Oynamayı bir deneyin — devam etmeden önce oyuna aşina olun.

### Bir programcı gibi düşünmek

Programlamada öğrenmesi en zor şeylerden biri, öğrenmeniz gereken sözdizimi değil, gerçek dünyadaki sorunları çözmek için onu nasıl uygulayacağınızdır. Bir programcı gibi düşünmeye başlamanız gerekir — bu genellikle programınızın ne yapması gerektiğine dair açıklamalara bakmayı, bu şeyleri başarmak için hangi kod özelliklerinin gerektiğini çözmeyi ve bunların birlikte nasıl çalışmasını sağlayacağınızı bulmayı içerir.

Bu; sıkı çalışma, programlama sözdizimiyle deneyim ve pratik — artı biraz da yaratıcılık — karışımını gerektirir. Ne kadar çok kod yazarsanız o kadar iyi olursunuz. Beş dakika içinde "programcı beyni" geliştireceğinize söz veremeyiz, ancak hem burada hem de kursun geri kalanı boyunca bir programcı gibi düşünme pratiği yapmanız için size bolca fırsat vereceğiz.

### İlk tasarım özeti

Patronunuzun bu oyunu oluşturmanız için size aşağıdaki tasarım özetini (brief) verdiğini hayal edelim:

> Basit bir "sayıyı tahmin et" tarzı oyun oluşturmanı istiyorum. Oyun 1 ile 100 arasında rastgele bir sayı seçmeli, ardından oyuncuyu 10 tur içinde sayıyı tahmin etmeye davet etmelidir. Her turdan sonra oyuncuya haklı mı yoksa haksız mı olduğu ve eğer yanıldıysa tahmininin çok mu düşük yoksa çok mu yüksek olduğu söylenmelidir. Ayrıca oyuncuya daha önce hangi sayıları tahmin ettiğini de söylemelidir. Oyuncu doğru tahmin ettiğinde ya da tur hakkı bittiğinde oyun sona erecektir. Oyun bittiğinde oyuncuya tekrar oynamaya başlama seçeneği sunulmalıdır.

Bu özete baktığımızda yapabileceğimiz ilk şey, mümkün olduğunca bir programcı zihniyetiyle onu basit, uygulanabilir görevlere ayırmaya başlamaktır:

1. 1 ile 100 arasında rastgele bir sayı üret.
2. Oyuncunun kaçıncı turda olduğunu kaydet. 1'den başlat.
3. Oyuncuya sayının ne olduğunu tahmin etmesi için bir yol sağla.
4. Bir tahmin gönderildiğinde, kullanıcının önceki tahminlerini görebilmesi için önce onu bir yere kaydet.
5. Ardından doğru sayı olup olmadığını kontrol et.
6. Doğruysa:
   1. Tebrik mesajı göster.
   2. Oyuncunun daha fazla tahmin girebilmesini engelle (bu, oyunu bozacaktır).
   3. Oyuncunun oyunu yeniden başlatmasına olanak tanıyan kontrolü göster.

7. Yanlışsa ve oyuncunun kalan tur hakkı varsa:
   1. Oyuncuya yanıldığını ve tahmininin çok mu yüksek yoksa çok mu düşük olduğunu söyle.
   2. Başka bir tahmin girmesine izin ver.
   3. Tur sayısını 1 artır.

8. Yanlışsa ve oyuncunun kalan tur hakkı yoksa:
   1. Oyuncuya oyunun bittiğini (game over) söyle.
   2. Oyuncunun daha fazla tahmin girebilmesini engelle (bu, oyunu bozacaktır).
   3. Oyuncunun oyunu yeniden başlatmasına olanak tanıyan kontrolü göster.

9. Oyun yeniden başladığında, oyun mantığının ve kullanıcı arayüzünün (UI) tamamen sıfırlandığından emin ol, ardından 1. adıma geri dön.

Şimdi ilerleyelim; örneği oluşturup bir yandan da JavaScript özelliklerini keşfederken bu adımları nasıl koda dönüştürebileceğimize bakalım.

### İlk kurulum

Bu eğitime başlamak için, kod düzenleyicinizi kullanarak yeni bir HTML dosyasında aşağıdaki kodun yerel bir kopyasını oluşturmanızı istiyoruz.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />

    <title>Number guessing game</title>

    <style>
      html {
        font-family: sans-serif;
      }

      body {
        width: 50%;
        max-width: 800px;
        min-width: 480px;
        margin: 0 auto;
      }

      .form input[type="number"] {
        width: 200px;
      }

      .lastResult {
        color: white;
        padding: 3px;
      }
    </style>
  </head>

  <body>
    <h1>Number guessing game</h1>

    <p>
      We have selected a random number between 1 and 100. See if you can guess
      it in 10 turns or fewer. We'll tell you if your guess was too high or too
      low.
    </p>

    <div class="form">
      <label for="guessField">Enter a guess: </label>
      <input
        type="number"
        min="1"
        max="100"
        required
        id="guessField"
        class="guessField" />
      <input type="submit" value="Submit guess" class="guessSubmit" />
    </div>

    <div class="resultParas">
      <p class="guesses"></p>
      <p class="lastResult"></p>
      <p class="lowOrHi"></p>
    </div>

    <script>
      // Your JavaScript goes here
    </script>
  </body>
</html>
```

Dosyayı metin düzenleyicinizde açık tutun ve ayrıca web tarayıcınızda da açın. Şu anda basit bir başlık, talimatlar içeren bir paragraf ve bir tahmin girmek için bir form göreceksiniz, ancak form şu anda hiçbir şey yapmayacaktır.

Tüm JavaScript kodunuzu HTML'in alt kısmındaki [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) öğesinin içine ekleyeceksiniz:

```html
<script>
  // Your JavaScript goes here
</script>
```

### Verilerimizi saklamak için değişkenler eklemek

Başlayalım. Her şeyden önce, [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) öğenizin içine aşağıdaki satırları ekleyin:

```js
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
```

Kodun bu bölümü, programımızın kullanacağı verileri saklamak için ihtiyaç duyduğumuz değişkenleri (variables) (ve sabitleri — constants) kurar.

Değişkenler temelde değerler (sayılar veya metin dizeleri gibi) için adlardır. Bir değişkeni `let` anahtar sözcüğü ve ardından değişkeninize vermek istediğiniz adla oluşturursunuz.

Sabitler de değerleri adlandırmak için kullanılır, ancak değişkenlerin aksine bir kez ayarlandıktan sonra değeri değiştiremezsiniz. Bu durumda, kullanıcı arayüzümüzün bölümlerine olan başvuruları (references) saklamak için sabitleri kullanıyoruz. Bu öğelerin bazılarının içindeki metin değişebilir, ancak her sabit her zaman başlatıldığı aynı HTML öğesine başvurur. Bir sabiti `const` anahtar sözcüğü ve ardından sabit için bir adla oluşturursunuz.

Bir değişkene veya sabite, eşittir işareti (`=`) ve ardından ona vermek istediğiniz değeri yazarak bir değer atayabilirsiniz.

Örneğimizde:

- İlk değişkene — `randomNumber` — matematiksel bir algoritma kullanılarak hesaplanan, 1 ile 100 arasında rastgele bir sayı atanır.
- İlk üç sabitin her biri, HTML'imizdeki sonuç paragraflarına bir başvuru saklamak için yapılmıştır ve kodun ilerleyen kısımlarında paragraflara değer eklemek için kullanılır (oyunu yeniden başlattığımızda daha sonra sıfırlamak amacıyla üçünü birden seçmek için kullanılan bir `<div>` öğesinin içinde olduklarına dikkat edin):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Sonraki iki sabit, form metin girdisine ve gönder (submit) düğmesine olan başvuruları saklar ve daha sonra tahminin gönderilmesini işlemek için kullanılır.

  ```html
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- Son iki değişkenimiz ise 1 değerinde bir tahmin sayısını (oyuncunun kaç tahmin yaptığını takip etmek için kullanılır) ve henüz var olmayan (ancak daha sonra var olacak) bir sıfırlama düğmesine olan başvuruyu saklar.

### Fonksiyonlar

Ardından, önceki JavaScript kodunuzun altına aşağıdakini ekleyin:

```js
function checkGuess() {
  console.log("I am a placeholder");
}
```

Fonksiyonlar (functions), bir kez yazıp tekrar tekrar çalıştırabileceğiniz, kodu defalarca tekrarlama ihtiyacından kurtaran yeniden kullanılabilir kod bloklarıdır. Fonksiyonları tanımlamanın birkaç yolu vardır, ancak şimdilik basit bir tür üzerinde yoğunlaşacağız. Burada `function` anahtar sözcüğünü, ardından bir adı ve sonuna konulan parantezleri kullanarak bir fonksiyon tanımladık. Ondan sonra iki süslü parantez (`{ }`) koyduk. Süslü parantezlerin içine, fonksiyonu her çağırdığımızda çalıştırmak istediğimiz tüm kodlar girer.

Kodu çalıştırmak istediğimizde, fonksiyonun adını ve ardından parantezleri yazarız.

Şimdi bunu deneyelim. Kodunuzu kaydedin ve tarayıcınızda sayfayı yenileyin. Ardından [geliştirici araçları JavaScript konsoluna (developer tools JavaScript console)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) gidin ve aşağıdaki satırı girin:

```js
checkGuess();
```

<kbd>Return</kbd>/<kbd>Enter</kbd> tuşuna bastıktan sonra konsola `I am a placeholder` yazdırıldığını görmelisiniz; kodumuzda onu her çağırdığımızda bir yer tutucu (placeholder) mesajı çıktı olarak veren bir fonksiyon tanımlamış olduk.

### Metin dizeleri

Dizeler (strings) metni temsil etmek için kullanılır. Bir dize değişkenini zaten görmüştük: aşağıdaki kodda `"I am a placeholder"` bir dizedir:

```js
function checkGuess() {
  console.log("I am a placeholder");
}
```

Dizeleri çift tırnak (`"`) veya tek tırnak (`'`) kullanarak bildirebilirsiniz (declare), ancak tek bir dize bildiriminin başlangıcı ve sonu için aynı biçimi kullanmalısınız: `"I am a placeholder'` yazamazsınız.

Dizeleri ters tırnak (backticks — `` ` ``) kullanarak da bildirebilirsiniz. Bu şekilde bildirilen dizelere _şablon değişmezleri (template literals)_ denir ve bazı özel nitelikleri vardır. Özellikle, içlerine başka değişkenleri ve hatta ifadeleri (expressions) gömebilirsiniz:

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

Bu size dizeleri birbirine birleştirmek için bir mekanizma sağlar.

### Koşullu ifadeler

**Koşullu (conditional)** kod blokları, belirli bir koşulun doğru olup olmamasına bağlı olarak kodu seçici bir şekilde çalıştırmanıza olanak tanır. Biraz bir fonksiyona benzerler ama farklıdırlar. Örneğimize ekleme yaparak koşullu ifadeleri keşfedelim.

Sanırım `checkGuess()` fonksiyonumuzun yalnızca bir yer tutucu mesajı tükürmesini istemediğimizi rahatlıkla söyleyebiliriz. Bir oyuncunun tahmininin doğru olup olmadığını kontrol etmesini ve uygun şekilde yanıt vermesini istiyoruz.

Bu noktada, mevcut `checkGuess()` fonksiyonunuzu bunun yerine şu sürümle değiştirin:

```js
function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses:";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
```

Bu epey fazla kod — üf! Her bölümün üzerinden geçelim ve ne yaptığını açıklayalım.

- İlk satır `userGuess` adlı bir sabit bildirir ve değerini metin alanının içine girilen geçerli değere ayarlar. Ayrıca değerin kesinlikle bir sayı olduğundan emin olmak için bu değeri yerleşik `Number()` yapıcısından (constructor) geçiririz.
- Ardından, ilk koşullu kod bloğumuzla karşılaşırız. Koşullu bloğun en basit biçimi `if` anahtar sözcüğüyle, ardından bazı parantezlerle ve ardından bazı süslü parantezlerle başlar. Parantezlerin içine bir test ekleriz. Test `true` döndürürse süslü parantezlerin içindeki kodu çalıştırırız. Döndürmezse çalıştırmayız ve bir sonraki kod parçasına geçeriz. Bu durumda, `guessCount` değişkeninin `1` değerine eşit olup olmadığını (yani bunun oyuncunun ilk denemesi olup olmadığını) test ederiz:

  ```js
  guessCount === 1;
  ```

  Eşitse, guesses paragrafının metin içeriğini `Previous guesses:` değerine eşit yaparız. Değilse yapmayız.

- Ardından, geçerli `userGuess` değerini aralarında bir boşluk bırakarak `guesses` paragrafının sonuna eklemek için bir şablon değişmezi (template literal) kullanırız.
- Sonraki blok birkaç kontrol yapar:
  - İlk `if (){ }`, kullanıcının tahmininin JavaScript kodumuzun en üstünde ayarlanan `randomNumber` değerine eşit olup olmadığını kontrol eder. Eşitse oyuncu doğru tahmin etmiştir ve oyun kazanılmıştır; bu yüzden oyuncuya hoş bir yeşil renkle bir tebrik mesajı gösteririz, Düşük/Yüksek tahmin bilgi kutusunun içeriğini temizleriz ve daha sonra tartışacağımız `setGameOver()` adlı bir fonksiyonu çalıştırırız.
  - Şimdi bir `else if (){ }` yapısı kullanarak sonuncusunun sonuna başka bir test zincirledik. Bu test, bu turun kullanıcının son turu olup olmadığını kontrol eder. Öyleyse program önceki bloktakiyle aynı şeyi yapar, ancak tebrik mesajı yerine bir oyun bitti (game over) mesajı gösterir.
  - Bu kodun sonuna zincirlenen son blok (`else { }`), yalnızca diğer iki testten hiçbirinin true döndürmemesi durumunda (oyuncu doğru tahmin etmemiştir ama daha tahmin hakkı kalmıştır) çalıştırılan kodu içerir. Bu durumda ona yanıldığını söyleriz, ardından tahminin cevaptan daha mı yüksek yoksa daha mı düşük olduğunu kontrol etmek için başka bir koşullu test gerçekleştiririz ve daha yüksek ya da daha düşük olduğunu söylemek üzere duruma uygun ek bir mesaj görüntüleriz.

- Fonksiyondaki son üç satır bizi bir sonraki tahminin gönderilmesine hazırlar. Oyuncunun tur hakkını kullanması için `guessCount` değişkenine 1 ekleriz (`++` bir artırma işlemidir — 1 artırır) ve form metin alanındaki değeri boşaltıp bir sonraki tahminin girilmesine hazır olmak üzere tekrar ona odaklanırız (`focus`).

### Olaylar

Bu noktada güzelce uygulanmış bir `checkGuess()` fonksiyonumuz var, ancak onu henüz çağırmadığımız için hiçbir şey yapmayacaktır. İdeal olarak, "Submit guess" ("Tahmini gönder") düğmesine basıldığında onu çağırmak isteriz ve bunu yapmak için bir **olay (event)** kullanmamız gerekir. Olaylar tarayıcıda gerçekleşen şeylerdir — bir düğmeye tıklanması, bir sayfanın yüklenmesi, bir videonun oynatılması vb. — ve bunlara yanıt olarak kod blokları çalıştırabiliriz. **Olay dinleyicileri (event listeners)** belirli olayları gözlemler ve bir olayın tetiklenmesine yanıt olarak çalışan **olay işleyici fonksiyonları (event handler functions)** çağırır.

`checkGuess()` fonksiyonunuzun altına aşağıdaki satırı ekleyin:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Burada `guessSubmit` düğmesine bir olay dinleyici ekliyoruz. Bu, iki girdi değeri (_argümanlar (arguments)_ olarak adlandırılır) alan bir metottur — bir dize olarak dinlediğimiz olayın türü (bu durumda `click`) ve olay gerçekleştiğinde çalıştırmak istediğimiz fonksiyon (bu durumda `checkGuess()`). Onu [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) içine yazarken parantezleri belirtmemize gerek olmadığına dikkat edin.

Şimdi kodunuzu kaydedip yenilemeyi deneyin; örneğiniz — bir noktaya kadar — çalışmalıdır. Şu anki tek sorun, doğru cevabı tahmin ederseniz veya tahmin hakkınız biterse oyunun bozulacak olmasıdır; çünkü oyun bittiğinde çalıştırılması gereken `setGameOver()` fonksiyonunu henüz tanımlamadık. Şimdi eksik kodumuzu ekleyelim ve örnek işlevselliğini tamamlayalım.

### Oyun işlevselliğini tamamlamak

Kodumuzun en altına `setGameOver()` fonksiyonunu ekleyelim ve ardından üzerinden geçelim. Bunu şimdi, geri kalan JavaScript kodunuzun altına ekleyin:

```js
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}
```

- İlk iki satır, `disabled` özelliklerini `true` olarak ayarlayarak form metin girdisini ve düğmesini devre dışı bırakır. Bu gereklidir; çünkü bunu yapmasaydık kullanıcı oyun bittikten sonra daha fazla tahmin gönderebilirdi ve bu da işleri karıştırırdı.
- Sonraki üç satır yeni bir [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) öğesi üretir, metin etiketini "Start new game" ("Yeni oyun başlat") olarak ayarlar ve onu mevcut HTML'imizin en altına ekler.
- Son satır, yeni düğmemize tıklandığında `resetGame()` adlı bir fonksiyonun çalıştırılması için yeni düğmemiz üzerinde bir olay dinleyici ayarlar.

Şimdi `resetGame()` fonksiyonunu da tanımlamamız gerekiyor! Aşağıdaki kodu yine JavaScript kodunuzun en altına ekleyin:

```js
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

Bu oldukça uzun kod bloğu, oyuncunun bir kez daha deneyebilmesi için her şeyi tamamen oyunun başındaki haline sıfırlar.

Özellikle şunları yapar:

- `guessCount` değerini tekrar 1'e ayarlar.
- Bilgi paragraflarındaki tüm metni boşaltır. `<div class="resultParas"></div>` içindeki tüm paragrafları seçeriz, ardından her birinin üzerinde döngü kurarak `textContent` özelliklerini `""` (boş bir dize) olarak ayarlarız.
- Sıfırlama düğmesini kodumuzdan kaldırır.
- Form öğelerini yeniden etkinleştirir ve yeni bir tahminin girilmesine hazır olmak üzere metin alanını boşaltıp ona odaklanır.
- `lastResult` paragrafından arka plan rengini kaldırır.
- Yalnızca aynı sayıyı tekrar tahmin etmemeniz için yeni bir rastgele sayı üretir!

**Bu noktada, tamamen çalışan temel bir oyununuz olmalıdır — tebrikler!**

Bu makalede şimdi yapmamız gereken tek şey, fark etmemiş olsanız bile zaten görmüş olduğunuz birkaç önemli kod özelliğinden daha bahsetmektir.

### Döngüler

Yukarıda, programlamada çok önemli bir kavram olan ve belirli bir koşul sağlanana kadar bir kod parçasını tekrar tekrar çalıştırmaya devam etmenize olanak tanıyan **Döngülerden (Loops)** bahsettik.

Bunun ne anlama geldiğini size göstermek için temel bir örneği keşfedelim. [Tarayıcı geliştirici araçları JavaScript konsolunuza](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) tekrar gidin, aşağıdaki kodu içine yapıştırın ve <kbd>Enter</kbd>/<kbd>Return</kbd> tuşuna basın:

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

Ne oldu? Konsolunuzda `'apples', 'bananas', 'cherries'` dizeleri yazdırıldı.

Bunun nedeni döngüdür. `const fruits = ['apples', 'bananas', 'cherries'];` satırı, bir değerler koleksiyonu (bu durumda dizeler) olan bir dizi (array) oluşturur.

Ardından dizideki her öğeyi almak ve üzerinde biraz JavaScript çalıştırmak için bir [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) döngüsü kullanırız. `for (const fruit of fruits)` satırı şunu söyler:

1. `fruits` içindeki ilk değeri al ve onu `fruit` adlı bir değişkende sakla.
2. `{}` süslü parantezleri arasındaki kodu çalıştır (bu durumda `fruit` değerini konsola yazdırır).
3. Bir sonraki dizi değerini `fruit` içinde sakla ve `fruits` dizisinin sonuna ulaşana kadar 2. adımı tekrarla.

Şimdi sayı tahmin oyunumuzdaki döngüye bakalım — aşağıdakiler `resetGame()` fonksiyonunun içinde bulunabilir:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

Bu kod, [`querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) metodunu kullanarak `<div class="resultParas">` içindeki tüm paragrafların bir listesini içeren bir değişken oluşturur, ardından her birinin üzerinde döngü kurarak her birinin metin içeriğini kaldırır.

`resetPara` bir sabit olsa bile `textContent` gibi dahili özelliklerini değiştirebildiğimize dikkat edin.

### Özet

Örneği oluşturmak için hepsi bu kadar. Sona ulaştınız — aferin! Son kodunuzu deneyin ya da [bitmiş sürümümüzle buradan oynayın](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Örneğin kendi sürümünüzü çalıştıramazsanız, onu [kaynak koduyla](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html) karşılaştırarak kontrol edin.

Bir sonraki ders de yardımcı olabilir — orada, bu süreçte "Sayıyı tahmin et" oyununa tekrar atıfta bulunarak JavaScript kodu yazarken nelerin ters gidebileceğini tartışıyoruz.

---

## 3. Ne Ters Gitti? JavaScript Sorunlarını Giderme (What went wrong? Troubleshooting JavaScript)

**Kaynak:** [What went wrong? Troubleshooting JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong)

Önceki makalede "Sayıyı tahmin et" oyununu oluşturduğunuzda çalışmadığını görmüş olabilirsiniz. Hiç korkmayın — bu makale, JavaScript programlarındaki hataları nasıl bulacağınıza ve düzelteceğinize dair bazı ipuçları sunarak bu tür sorunlar yüzünden saçınızı başınızı yolmaktan sizi kurtarmayı amaçlar.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış, JavaScript yazma konusunda temel deneyim.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>JavaScript'te meydana gelebilecek hata türlerini anlamak.</li>
          <li>Hataları ayıklamak (debug) için <code>console.log()</code> kullanmak.</li>
          <li>Tarayıcı Geliştirici Araçları (DevTools) JavaScript konsolunu kullanma konusunda temel deneyim.</li>
          <li>JavaScript hata mesajlarına ve anlamlarına temel düzeyde aşinalık.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Hata türleri

Genel olarak konuşursak, kodda yanlış bir şey yaptığınızda karşılaşacağınız üç ana hata türü vardır:

- **Sözdizimi hataları (Syntax errors)**: Bunlar kodunuzdaki, programın hiç çalışmamasına veya yarı yolda çalışmayı durdurmasına neden olan yazım hatalarıdır — genellikle size bazı hata mesajları da sağlanır. Doğru araçlara aşina olduğunuz ve hata mesajlarının ne anlama geldiğini bildiğiniz sürece bunları düzeltmek genellikle çok zor değildir!
- **Mantık hataları (Logic errors)**: Bunlar sözdiziminin aslında doğru olduğu, ancak kodun olmasını amaçladığınız şey olmadığı hatalardır; yani program başarıyla çalışır ancak yanlış sonuçlar verir. Sizi hatanın kaynağına yönlendirecek bir hata mesajı genellikle bulunmadığından, bunları düzeltmek çoğu zaman sözdizimi hatalarından daha zordur.
- **Çalışma zamanı hataları (Runtime errors)**: Bunlar kodun doğru sözdizimine sahip olduğu, dolayısıyla çalışmaya başlayabildiği, ancak çalışırken bir şeylerin ters gittiği durumlarda meydana gelir. Örneğin, aslında bir fonksiyon olmayan bir şeyi çağırmaya çalışmak bir çalışma zamanı hatasına neden olacaktır. Sözdizimi iyidir, ancak işlemin kendisi gerçekleştirilemez.

Tamam, işler _o kadar_ da basit değil — daha derine indikçe başka ayırt edici unsurlar da vardır. Ancak kariyerinizin bu erken aşamasında yukarıdaki sınıflandırmalar iş görecektir. Bir sonraki bölümde bu türlere bakacağız.

### Hatalı bir örnek

Başlamak için sayı tahmin oyunumuza geri dönelim — ancak bu kez bazı kasıtlı hatalar içeren bir sürümü keşfedeceğiz. GitHub'a gidin ve kendinize [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) dosyasının yerel bir kopyasını oluşturun ([buradan canlı çalışırken](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) görün).

1. Başlamak için yerel kopyayı en sevdiğiniz metin düzenleyicinin ve tarayıcınızın içinde açın.
2. Oyunu oynamayı deneyin — "Submit guess" ("Tahmini gönder") düğmesine bastığınızda çalışmadığını fark edeceksiniz!

> [!NOTE]
> Oyun örneğinin çalışmayan kendi sürümüne sahip olabilirsiniz ve onu düzeltmek isteyebilirsiniz! Yine de burada öğrettiğimiz teknikleri öğrenebilmeniz için makaleyi bizim sürümümüzle çalışmanızı isteriz. Ardından geri dönüp kendi örneğinizi düzeltmeyi deneyebilirsiniz.

Bu noktada, herhangi bir hata bildirip bildirmediğini görmek için geliştirici konsoluna danışalım, ardından bunları düzeltmeye çalışalım. Aşağıda nasıl yapılacağını öğreneceksiniz.

### Konsolda bildirilen hataları düzeltmek

Kursun önceki bölümlerinde, [geliştirici araçları JavaScript konsoluna](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) bazı basit JavaScript komutları yazmanızı sağlamıştık (bunu tarayıcınızda nasıl açacağınızı hatırlayamıyorsanız, nasıl yapılacağını öğrenmek için önceki bağlantıyı izleyin). Daha da yararlı olan şey, tarayıcının JavaScript motoruna beslenen JavaScript'in içinde bir hata olduğunda konsolun size hata mesajları vermesidir. Şimdi ava çıkalım.

1. `number-game-errors.html` dosyasını açtığınız sekmeye gidin ve JavaScript konsolunuzu açın. Aşağıdaki satırlara benzer bir hata mesajı görmelisiniz: ![Firefox'ta "Number guessing game" demo sayfası. JavaScript konsolunda bir hata görünüyor: "X TypeError: guessSubmit.addeventListener is not a function [Learn More] (number-game-errors.html:87:19)".](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/what_went_wrong/not-a-function.png)
2. Hata mesajının ilk satırı şudur:

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:87:19
   ```

   - İlk kısım olan `Uncaught TypeError: guessSubmit.addeventListener is not a function`, bize neyin ters gittiği hakkında bir şey söylüyor.
   - İkinci kısım olan `number-game-errors.html:87:19` ise hatanın kodun neresinden geldiğini söylüyor: "number-game-errors.html" dosyasının 87. satırı, 19. karakteri.

3. Kod düzenleyicimizde 87. satıra bakarsak şu satırı buluruz:

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. Hata mesajı "guessSubmit.addeventListener is not a function" ("guessSubmit.addeventListener bir fonksiyon değildir") diyor; bu da JavaScript yorumlayıcısının çağırdığımız fonksiyonu tanımadığı anlamına gelir. Çoğu zaman bu hata mesajı aslında bir şeyi yanlış yazdığımız anlamına gelir. Bir sözdizimi parçasının doğru yazılışından emin değilseniz MDN'den bakın. Şu anda bunu yapmanın en iyi yolu, en sevdiğiniz arama motorunda "mdn _özellik-adı_" şeklinde arama yapmaktır. Bu durumda size biraz zaman kazandıracak bir kısayol: [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).
5. Dolayısıyla bu sayfaya baktığımızda hata, fonksiyon adını yanlış yazmış olmamız gibi görünüyor! Bu bir sözdizimi hatasıdır. JavaScript'in büyük/küçük harfe duyarlı olduğunu unutmayın; bu nedenle yazılıştaki veya büyük/küçük harf kullanımındaki en ufak bir farklılık hataya neden olacaktır. `addeventListener` ifadesini `addEventListener` olarak değiştirmek bunu çözecektir. Bunu şimdi yapın.

> [!NOTE]
> Bu hata hakkında daha fazla ayrıntı için [TypeError: "x" is not a function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function) başvuru sayfamıza bakın.

#### Bir çalışma zamanı hatasını düzeltmek

1. Sayfanızı kaydedin ve yenileyin; hatanın kaybolduğunu görmelisiniz.
2. Şimdi bir tahmin girmeyi dener ve Submit guess ("Tahmini gönder") düğmesine basarsanız, başka bir hata göreceksiniz! ![Aynı "Number guessing game" demosunun ekran görüntüsü. Bu kez konsolda "X TypeError: lowOrHi is null" yazan farklı bir hata görünüyor.](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/what_went_wrong/variable-is-null.png)
3. Bu kez bildirilen hata şudur:

   ```plain
   Uncaught TypeError: can't access property "textContent", lowOrHi is null
   ```

   Kullandığınız tarayıcıya bağlı olarak burada farklı bir mesaj görebilirsiniz. Yukarıdaki mesaj Firefox'un size göstereceği mesajdır, ancak örneğin Chrome size şunu gösterecektir:

   ```plain
   Uncaught TypeError: Cannot set properties of null (setting 'textContent')
   ```

   Bu aynı hatadır, ancak farklı tarayıcılar onu farklı şekilde tanımlar.

   > [!NOTE]
   > Bu hata bir fonksiyonun içinde (`checkGuess() { }` bloğu) meydana geldiği için sayfa yüklendiğinde görünmedi. İlerideki [fonksiyonlar makalemizde](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions) daha ayrıntılı olarak öğreneceğiniz gibi, fonksiyonların içindeki kod, fonksiyonların dışındaki koddan ayrı bir kapsamda (scope) çalışır. Bu durumda kod çalıştırılmamıştı ve `checkGuess()` fonksiyonu 87. satır tarafından çalıştırılana kadar hata fırlatılmamıştı.

4. Hatada verilen satır numarası 79'dur. 79. satıra bir göz atın; aşağıdaki kodu göreceksiniz:

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. Bu satır `lowOrHi` değişkeninin `textContent` özelliğini bir metin dizesine ayarlamaya çalışıyor, ancak `lowOrHi` içermesi gereken şeyi içermediği için çalışmıyor. Bunun neden böyle olduğuna bakalım — kodda diğer `lowOrHi` örneklerini aramayı deneyin. Bulacağınız en erken örnek 51. satırdadır:

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. Bu noktada değişkenin, belgenin HTML'indeki bir öğeye olan başvuruyu içermesini sağlamaya çalışıyoruz. Bu satır çalıştıktan sonra değişkenin ne içerdiğine bakalım. 54. satıra aşağıdaki kodu ekleyin:

   ```js
   console.log(lowOrHi);
   ```

   Bu kod, 51. satırda ayarlamaya çalıştıktan sonra `lowOrHi` değerini konsola yazdıracaktır. Daha fazla bilgi için [`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/console/log_static) sayfasına bakın.

7. Kaydedin ve yenileyin; artık `console.log()` sonucunu konsolunuzda görmelisiniz. ![Aynı demonun ekran görüntüsü. Konsolda yalnızca "null" yazan bir günlük (log) deyimi görünüyor.](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/what_went_wrong/console-log-output.png) Beklendiği gibi, bu noktada `lowOrHi` değişkeninin değeri `null`'dır ve bu da Firefox'un `lowOrHi is null` hata mesajıyla örtüşmektedir. Dolayısıyla 51. satırda kesinlikle bir sorun var. [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null) değeri "hiçbir şey" veya "değer yok" anlamına gelir. Yani `lowOrHi` değişkenini bir öğe başvurusuna ayarlayan kodumuzda bir şeyler ters gidiyor.

8. Sorunun ne olabileceğini düşünelim. 51. satır, bir CSS seçicisiyle (selector) bir öğe başvurusu seçmek için [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) metodunu kullanıyor. Dosyamızda daha yukarılara baktığımızda söz konusu paragrafı bulabiliriz:

   ```html
   <p class="lowOrHi"></p>
   ```

9. Yani burada nokta (`.`) ile başlayan bir sınıf seçicisine (class selector) ihtiyacımız var. Ancak 51. satırda `querySelector()` metoduna geçirilen seçicide nokta yok. Sorun bu olabilir! 51. satırda `lowOrHi` ifadesini `.lowOrHi` olarak değiştirmeyi deneyin.
10. Tekrar kaydedip yenilemeyi deneyin; `console.log()` deyiminiz artık istediğimiz `<p>` öğesini döndürmelidir. Üf! Bir hata daha düzeltildi! `console.log()` satırınızı şimdi silebilir veya daha sonra başvurmak üzere tutabilirsiniz — seçim sizin.

> [!NOTE]
> Bu hata hakkında daha fazla ayrıntı için [TypeError: "x" is (not) "y"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_type) başvuru sayfamıza bakın.

#### Başka bir sözdizimi hatasını düzeltmek

1. Şimdi oyunu tekrar baştan sona oynamayı denerseniz daha başarılı olmalısınız — ya doğru sayıyı tahmin ederek ya da tahmin haklarınızı tüketerek oyunu bitirene kadar oyun kesinlikle sorunsuz oynanmalıdır.
2. O noktada oyun tekrar başarısız olur ve başlangıçta aldığımız aynı hata dışarı tükürülür — "TypeError: resetButton.addeventListener is not a function"! Ancak bu kez 95. satırdan geldiği belirtilmektedir.
3. 95 numaralı satıra baktığımızda burada da aynı hatayı yaptığımızı görmek kolaydır. `addeventListener` ifadesini tekrar `addEventListener` olarak değiştirmemiz gerekiyor. Bunu şimdi yapın.

### Bir mantık hatası

Bu noktada oyun sorunsuz bir şekilde oynanmalıdır. Ancak birkaç kez oynadıktan sonra, oyunun tahmin etmeniz gereken "rastgele" sayı olarak her zaman 1'i seçtiğini kuşkusuz fark edeceksiniz. Kesinlikle oyunun oynanmasını istediğimiz şekil bu değil!

Oyun mantığında bir yerlerde kesinlikle bir sorun var — oyun bir hata döndürmüyor; yalnızca doğru çalışmıyor.

1. `randomNumber` değişkenini ve rastgele sayının ilk ayarlandığı satırları arayın. Oyunun başında tahmin etmek istediğimiz rastgele sayıyı saklayan örnek 47 numaralı satır civarında olmalıdır:

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. Ve sonraki her oyundan önce rastgele sayıyı üreten satır da 114. satır civarındadır:

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. Bu satırların gerçekten sorun olup olmadığını kontrol etmek için tekrar dostumuz `console.log()`'a başvuralım — yukarıdaki iki satırın her birinin hemen altına aşağıdaki satırı ekleyin:

   ```js
   console.log(randomNumber);
   ```

4. Kaydedin ve yenileyin, ardından birkaç oyun oynayın — konsola yazdırıldığı her noktada `randomNumber` değerinin 1'e eşit olduğunu göreceksiniz.

#### Mantığın üzerinden geçmek

Bunu düzeltmek için bu satırın nasıl çalıştığını düşünelim. Önce, 0 ile 1 arasında rastgele bir ondalık sayı (örneğin 0.5675493843) üreten [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) metodunu çağırıyoruz.

```js
Math.random();
```

Ardından, `Math.random()` çağrısının sonucunu, kendisine geçirilen sayıyı en yakın tam sayıya aşağı yuvarlayan [`Math.floor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) metodundan geçiriyoruz. Sonra da bu sonuca 1 ekliyoruz:

```js
Math.floor(Math.random()) + 1;
```

0 ile 1 arasındaki rastgele bir ondalık sayıyı aşağı yuvarlamak her zaman 0 döndürecektir, dolayısıyla buna 1 eklemek her zaman 1 döndürecektir. Rastgele sayıyı aşağı yuvarlamadan önce 100 ile çarpmamız gerekir. Aşağıdaki kod bize 0 ile 99 arasında rastgele bir sayı verecektir:

```js
Math.floor(Math.random() * 100);
```

Bu nedenle, bize 1 ile 100 arasında rastgele bir sayı vermesi için 1 eklemek istiyoruz:

```js
Math.floor(Math.random() * 100) + 1;
```

Her iki satırı da bu şekilde güncellemeyi deneyin, ardından kaydedin ve yenileyin — oyun artık amaçlandığı gibi oynanmalıdır!

### Diğer yaygın hatalar

Kodunuzda karşılaşacağınız başka yaygın hatalar da vardır. Bu bölüm bunların çoğunu vurgulamaktadır.

#### İlk yanlış tahminden sonra oyun bitiyor

Bu, atama (assignment) ve katı eşitlik (strict equality) operatörlerini birbirine karıştırmanın bir başka belirtisi olabilir. Örneğin, `checkGuess()` içindeki şu satırı:

```js
} else if (guessCount === 10) {
```

şununla değiştirseydik:

```js
} else if (guessCount = 10) {
```

Test her zaman `true` döndürür ve programın ilk yanlış tahminden sonra `setGameOver()` fonksiyonunu çalıştırmasına neden olurdu. Dikkatli olun!

#### SyntaxError: missing ) after argument list

Bu oldukça basittir — genellikle bir fonksiyon/metot çağrısının sonundaki kapanış parantezini atladığınız anlamına gelir.

> [!NOTE]
> Bu hata hakkında daha fazla ayrıntı için [SyntaxError: missing ) after argument list](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list) başvuru sayfamıza bakın.

#### SyntaxError: missing : after property id

Bu hata genellikle yanlış biçimlendirilmiş bir JavaScript nesnesiyle (object) ilgilidir, ancak bu durumda şu satırı:

```js
function checkGuess() {
```

şununla değiştirerek bu hatayı almayı başardık:

```js
function checkGuess( {
```

Bu, tarayıcının fonksiyonun içeriğini fonksiyona bir argüman olarak geçirmeye çalıştığımızı düşünmesine neden oldu. O parantezlere dikkat edin!

#### SyntaxError: missing } after function body

Bu kolaydır — genellikle bir fonksiyondan veya koşullu yapıdan bir süslü parantezi atladığınız anlamına gelir. Bu hatayı, `checkGuess()` fonksiyonunun alt kısmına yakın kapanış süslü parantezlerinden birini silerek aldık.

#### SyntaxError: expected expression, got '_string_' veya SyntaxError: string literal contains an unescaped line break

Bu hatalar genellikle bir dize değerinin açılış veya kapanış tırnak işaretini atladığınız anlamına gelir. Yukarıdaki ilk hatada _string_ yerine, bir dizenin başındaki tırnak işareti yerine tarayıcının karşılaştığı beklenmedik karakter(ler) yazacaktır. İkinci hata ise dizenin bir tırnak işaretiyle sonlandırılmadığı anlamına gelir.

Tüm bu hatalar için, adım adım incelemede baktığımız örnekleri nasıl ele aldığımızı düşünün. Bir hata ortaya çıktığında, size verilen satır numarasına bakın, o satıra gidin ve neyin yanlış olduğunu fark edip edemediğinizi görün. Hatanın mutlaka o satırda olmayabileceğini ve hatanın yukarıda belirttiğimiz aynı sorundan kaynaklanmayabileceğini aklınızda bulundurun!

> [!NOTE]
> Bu hatalar hakkında daha fazla ayrıntı için [SyntaxError: Unexpected token](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token) ve [SyntaxError: string literal contains an unescaped line break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/String_literal_EOL) başvuru sayfalarımıza bakın.

### Özet

İşte karşınızda, basit JavaScript programlarındaki hataları çözmenin temelleri. Kodunuzda neyin yanlış olduğunu bulmak her zaman bu kadar basit olmayacaktır, ancak bu en azından size birkaç saatlik uyku kazandıracak ve özellikle öğrenme yolculuğunuzun erken aşamalarında işler yolunda gitmediğinde biraz daha hızlı ilerlemenize yardımcı olacaktır.

### Ayrıca bakınız

- Burada listelenmeyen daha pek çok hata türü vardır; bunların ne anlama geldiğini ayrıntılı olarak açıklayan bir başvuru kaynağı derliyoruz — bkz. [JavaScript hata başvurusu (JavaScript error reference)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors).
- Bu makaleyi okuduktan sonra kodunuzda nasıl düzelteceğinizden emin olmadığınız herhangi bir hatayla karşılaşırsanız yardım alabilirsiniz! [İletişim kanallarında (communication channels)](https://developer.mozilla.org/en-US/docs/MDN/Community/Communication_channels) yardım isteyin. Bize hatanızın ne olduğunu söyleyin, size yardımcı olmaya çalışalım. Kodunuzun bir dökümü de yararlı olacaktır.

---

## 4. İhtiyacınız Olan Bilgileri Saklamak — Değişkenler (Storing the information you need — Variables)

**Kaynak:** [Storing the information you need — Variables](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)

Son birkaç makaleyi okuduktan sonra artık JavaScript'in ne olduğunu, sizin için neler yapabileceğini, onu diğer web teknolojileriyle birlikte nasıl kullandığınızı ve ana özelliklerinin üst düzeyden nasıl göründüğünü biliyor olmalısınız. Bu makalede gerçek temellere inecek ve JavaScript'in en temel yapı taşları olan Değişkenler (Variables) ile nasıl çalışılacağına bakacağız.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Değişkenlerin ne olduğu ve neden bu kadar önemli oldukları.</li>
          <li><code>let</code> ile değişken bildirmek (declaring), onları değerlerle başlatmak (initializing) ve yeni değerlerle yeniden atamak (reassigning).</li>
          <li><code>const</code> ile sabitler (constants) oluşturmak.</li>
          <li>Değişkenler ve sabitler arasındaki fark ve her birini ne zaman kullanacağınız.</li>
          <li>Değişken adlandırmada en iyi uygulamalar.</li>
          <li>Değişkenlerde saklanabilen farklı değer türleri — dizeler (strings), sayılar (numbers), 부울/mantıksal değerler (booleans), diziler (arrays) ve nesneler (objects).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### İhtiyacınız olan araçlar

Bu makale boyunca, içeriği ne kadar anladığınızı test etmek için kod satırları yazmanız istenecektir. Bir masaüstü tarayıcı kullanıyorsanız, örnek kodunuzu yazmak için en iyi yer tarayıcınızın JavaScript konsoludur (bu araca nasıl erişeceğiniz hakkında daha fazla bilgi için [Tarayıcı geliştirici araçları nelerdir](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) sayfasına bakın).

### Değişken nedir?

Bir değişken (variable), bir toplama işleminde kullanabileceğimiz bir sayı veya bir cümlenin parçası olarak kullanabileceğimiz bir dize (string) gibi bir değer için bir kaptır (container).

#### Değişken örneği

Bir örneğe bakalım:

```html
<button id="button_A">Press me</button>
<h3 id="heading_A"></h3>
```

```js
const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.textContent = `${count} clicks so far`;
  count += 1;
};
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Bu örnekte düğmeye basmak biraz kod çalıştırır. İlk olarak, düğmenin kendisindeki metni değiştirir. İkinci olarak, düğmeye kaç kez basıldığını belirten bir mesaj gösterir. Sayı bir değişkende saklanır. Kullanıcı düğmeye her bastığında, değişkendeki sayı bir artacaktır.

#### Değişken olmadan

Bunun neden bu kadar yararlı olduğunu anlamak için, sayımı saklamak üzere bir değişken kullanmadan bu örneği nasıl yazacağımızı düşünelim. Sonuçta şuna benzer bir şey ortaya çıkardı:

```html example-bad
<button id="button_B">Press me</button>
<h3 id="heading_B"></h3>
```

```js example-bad
const buttonB = document.querySelector("#button_B");
const headingB = document.querySelector("#heading_B");

buttonB.onclick = () => {
  buttonB.textContent = "Try again!";
  headingB.textContent = "1 click so far";
};
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Kullandığımız sözdizimini (henüz!) tam olarak anlamayabilirsiniz, ancak ana fikri anlayabilmelisiniz. Bir değişken olmadan, düğmeye kaç kez tıklandığını bilmemizin bir yolu yoktur. Hiçbir bilgi hatırlanamadığında kullanıcıya gösterilen mesaj hızla anlamsız hale gelecektir.

Değişkenler son derece mantıklıdır ve JavaScript hakkında daha fazla şey öğrendikçe ikinci doğanız haline gelmeye başlayacaklardır.

Değişkenlerle ilgili özel bir şey, yalnızca dizeleri ve sayıları değil, hemen hemen her şeyi içerebilmeleridir. Değişkenler ayrıca karmaşık verileri ve hatta harika şeyler yapmak için tüm fonksiyonları bile içerebilir. İlerledikçe bu konuda daha fazla şey öğreneceksiniz.

> [!NOTE]
> Değişkenlerin değerler içerdiğini söylüyoruz. Bu, yapılması gereken önemli bir ayrımdır. Değişkenler değerlerin kendisi değildir; değerler için kaplardır. Onları içine bir şeyler saklayabileceğiniz küçük karton kutular gibi düşünebilirsiniz.

![JavaScript değişkenlerinin örneklerini gösteren üç adet 3 boyutlu karton kutunun ekran görüntüsü. Her kutu, çeşitli JavaScript veri türlerini temsil eden varsayımsal değerler içerir. Örnek değerler sırasıyla "Bob", true ve 35'tir.](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/variables/boxes.png)

### Bir değişken bildirmek

Bir değişkeni kullanmak için önce onu oluşturmanız gerekir — daha doğrusu, buna değişkeni bildirmek (declaring the variable) deriz. Bunu yapmak için `let` anahtar sözcüğünü ve ardından değişkeninize vermek istediğiniz adı yazarız:

```js
let myName;
let myAge;
```

Burada `myName` ve `myAge` adında iki değişken oluşturuyoruz. Bu satırları web tarayıcınızın konsoluna yazmayı deneyin. Ondan sonra, kendi seçtiğiniz adlarla bir (veya iki) değişken oluşturmayı deneyin.

> [!NOTE]
> JavaScript'te tüm kod talimatları noktalı virgülle (`;`) bitmelidir — kodunuz tek satırlar için doğru çalışabilir, ancak birden fazla kod satırını bir arada yazarken muhtemelen çalışmayacaktır. Bunu eklemeyi alışkanlık haline getirmeye çalışın.

Bu değerlerin artık yürütme ortamında (execution environment) var olup olmadığını yalnızca değişkenin adını yazarak test edebilirsiniz, örneğin:

```js
myName;
myAge;
```

Şu anda hiçbir değerleri yoktur; boş kaplardır. Değişken adlarını girdiğinizde `undefined` (tanımsız) değerinin döndürüldüğünü görmelisiniz. Eğer var değillerse bir hata mesajı alırsınız — şunu yazmayı deneyin:

```js
scoobyDoo;
```

> [!NOTE]
> Var olan ancak tanımlanmış bir değeri olmayan bir değişkeni, hiç var olmayan bir değişkenle karıştırmayın — bunlar çok farklı şeylerdir. Yukarıda gördüğünüz kutu benzetmesinde, var olmamak bir değerin içine girebileceği bir kutunun (değişkenin) olmaması anlamına gelir. Tanımlanmış bir değerin olmaması ise bir kutunun olduğu, ancak içinde hiçbir değerin bulunmadığı anlamına gelir.

### Bir değişkeni başlatmak

Bir değişkeni bildirdikten sonra onu bir değerle başlatabilirsiniz (initialize). Bunu değişken adını, ardından bir eşittir işaretini (`=`), ardından da ona vermek istediğiniz değeri yazarak yaparsınız. Örneğin:

```js
myName = "Chris";
myAge = 37;
```

Şimdi konsola geri dönüp bu satırları yazmayı deneyin. Her durumda, değişkene atadığınız değerin bunu doğrulamak için konsolda döndürüldüğünü görmelisiniz. Yine, değişken değerlerinizi adlarını konsola yazarak döndürebilirsiniz — şunları tekrar deneyin:

```js
myName;
myAge;
```

Bir değişkeni aynı anda hem bildirebilir hem de başlatabilirsiniz, şu şekilde:

```js
let myDog = "Rover";
```

İki işlemi iki ayrı satırda yapmaktan daha hızlı olduğu için çoğu zaman yapacağınız şey muhtemelen budur.

### var hakkında bir not

Muhtemelen `var` anahtar sözcüğünü kullanarak değişken bildirmenin farklı bir yolunu da göreceksiniz:

```js
var myName;
var myAge;
```

JavaScript ilk oluşturulduğunda değişken bildirmenin tek yolu buydu. `var`'ın tasarımı kafa karıştırıcı ve hataya açıktır. Bu nedenle JavaScript'in modern sürümlerinde, `var`'dan biraz farklı çalışan ve bu süreçte onun sorunlarını düzelten, değişken oluşturmaya yönelik yeni bir anahtar sözcük olan `let` oluşturuldu.

Aşağıda birkaç basit fark açıklanmaktadır. Şimdi tüm farklara girmeyeceğiz, ancak JavaScript hakkında daha fazla şey öğrendikçe bunları keşfetmeye başlayacaksınız (şimdi gerçekten onlar hakkında okumak istiyorsanız, [let başvuru sayfamıza](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) göz atmaktan çekinmeyin).

Başlangıç olarak, bir değişkeni bildiren ve başlatan çok satırlı bir JavaScript programı yazarsanız, aslında bir değişkeni başlattıktan sonra `var` ile bildirebilirsiniz ve yine de çalışacaktır. Örneğin:

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> [!NOTE]
> Bu, bir JavaScript konsoluna tek tek satırlar yazarken çalışmaz; yalnızca bir web belgesinde birden çok JavaScript satırı çalıştırırken çalışır.

Bu, **yukarı çekme (hoisting)** sayesinde çalışır — konu hakkında daha fazla ayrıntı için [var hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#hoisting) bölümünü okuyun.

Yukarı çekme artık `let` ile çalışmaz. Yukarıdaki örnekte `var`'ı `let` olarak değiştirseydik, bir hatayla başarısız olurdu. Bu iyi bir şeydir — bir değişkeni başlattıktan sonra bildirmek kafa karıştırıcı, anlaşılması daha zor bir kodla sonuçlanır.

İkinci olarak, `var` kullandığınızda aynı değişkeni istediğiniz kadar çok kez bildirebilirsiniz, ancak `let` ile bunu yapamazsınız. Aşağıdaki kod çalışacaktır:

```js
var myName = "Chris";
var myName = "Bob";
```

Ancak aşağıdaki kod ikinci satırda bir hata fırlatacaktır:

```js example-bad
let myName = "Chris";
let myName = "Bob";
```

Bunun yerine şunu yapmanız gerekir:

```js
let myName = "Chris";
myName = "Bob";
```

Yine, bu mantıklı bir dil kararıdır. Değişkenleri yeniden bildirmek için hiçbir neden yoktur — bu yalnızca işleri daha kafa karıştırıcı hale getirir.

Bu nedenlerden ve daha fazlasından dolayı, kodunuzda `var` yerine `let` kullanmanızı öneririz. Açıkça çok eski tarayıcılar için destek yazmıyorsanız, tüm modern tarayıcılar 2015'ten beri `let`'i desteklediği için artık `var` kullanmak için hiçbir neden yoktur.

> [!NOTE]
> Bu kodu tarayıcınızın konsolunda deniyorsanız, buradaki kod bloklarının her birini bir bütün olarak kopyalayıp yapıştırmayı tercih edin. [Chrome'un konsolunda](https://docs.google.com/document/d/1NP_FnHr4WCZRp7exgUklvNiXrH3nujcfwvp2pzMQ8-0/edit#heading=h.7y5hynxk52e9), `let` ve `const` ile değişkenlerin yeniden bildirilmesine izin verilen bir özellik vardır:
>
> ```plain
> > let myName = "Chris";
>   let myName = "Bob";
> // As one input: SyntaxError: Identifier 'myName' has already been declared
>
> > let myName = "Chris";
> > let myName = "Bob";
> // As two inputs: both succeed
> ```

### Bir değişkeni güncellemek

Bir değişken bir değerle başlatıldıktan sonra, ona farklı bir değer vererek o değeri değiştirebilir (veya güncelleyebilirsiniz). Konsolunuza aşağıdaki satırları girmeyi deneyin:

```js
myName = "Bob";
myAge = 40;
```

#### Değişken adlandırma kuralları üzerine bir ek bilgi

Bir değişkene hemen hemen istediğiniz her adı verebilirsiniz, ancak sınırlamalar vardır. Genel olarak yalnızca Latin karakterlerini (0-9, a-z, A-Z) ve alt çizgi (`_`) karakterini kullanmaya bağlı kalmalısınız.

- Hatalara neden olabilecekleri veya uluslararası bir kitle için anlaşılması zor olabileceği için başka karakterler kullanmamalısınız.
- Değişken adlarının başında alt çizgi kullanmayın — bu, belirli JavaScript yapılarında belirli şeyleri ifade etmek için kullanılır, dolayısıyla kafa karıştırıcı olabilir.
- Değişkenlerin başında sayı kullanmayın. Buna izin verilmez ve hataya neden olur.
- Bağlı kalınabilecek güvenli bir kural [küçük deve hörgücü yazımıdır (lower camel case)](https://developer.mozilla.org/en-US/docs/Glossary/Camel_case); burada birden fazla kelimeyi birbirine yapıştırır, ilk kelimenin tamamı için küçük harf kullanır ve ardından gelen kelimelerin ilk harfini büyük yazarsınız. Makalede şimdiye kadar değişken adlarımız için bunu kullandık.
- Değişken adlarını sezgisel yapın, böylece içerdikleri verileri tanımlasınlar. Yalnızca tek harfler/sayılar ya da koca uzun ifadeler kullanmayın.
- Değişkenler büyük/küçük harfe duyarlıdır — dolayısıyla `myage`, `myAge`'den farklı bir değişkendir.
- Son bir nokta: Değişken adlarınız olarak JavaScript'in ayrılmış sözcüklerini (reserved words) kullanmaktan da kaçınmanız gerekir — bununla JavaScript'in gerçek sözdizimini oluşturan kelimeleri kastediyoruz! Yani `var`, `function`, `let` ve `for` gibi kelimeleri değişken adı olarak kullanamazsınız. Tarayıcılar bunları farklı kod öğeleri olarak tanır ve bu nedenle hatalar alırsınız.

> [!NOTE]
> Kaçınılması gereken ayrılmış anahtar sözcüklerin oldukça eksiksiz bir listesini [Sözcüksel dilbilgisi — anahtar sözcükler (Lexical grammar — keywords)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sayfasında bulabilirsiniz.

İyi ad örnekleri:

```plain example-good
age
myAge
init
initialColor
finalOutputValue
audio1
audio2
```

Kötü ad örnekleri:

```plain example-bad
1
a
_12
myage
MYAGE
var
Document
skjfndskjfnbdskjfb
thisisareallylongvariablenameman
```

Yukarıdaki rehberliği aklınızda tutarak şimdi birkaç değişken daha oluşturmayı deneyin.

### Değişken türleri

Değişkenlerde saklayabileceğimiz birkaç farklı veri türü (data types) vardır. Bu bölümde bunları kısaca açıklayacağız, ardından gelecek makalelerde bunlar hakkında daha ayrıntılı bilgi edineceksiniz.

#### Sayılar (Numbers)

Değişkenlerde, ister 30 gibi tam sayıları (integers olarak da adlandırılır) ister 2.456 gibi ondalık sayıları (floats veya kayan noktalı sayılar — floating point numbers olarak da adlandırılır) olsun, sayıları saklayabilirsiniz. Diğer bazı programlama dillerinin aksine JavaScript'te değişken türlerini bildirmeniz gerekmez. Bir değişkene sayı değeri verdiğinizde tırnak işareti eklemezsiniz:

```js
let myAge = 17;
```

#### Dizeler (Strings)

Dizeler metin parçalarıdır. Bir değişkene dize değeri verdiğinizde, onu tek veya çift tırnak işaretleri içine sarmalamanız gerekir; aksi takdirde JavaScript onu başka bir değişken adı olarak yorumlamaya çalışır.

```js
let dolphinGoodbye = "So long and thanks for all the fish";
```

#### Mantıksal değerler (Booleans)

Mantıksal değerler (Booleans) doğru/yanlış değerleridir — iki değere sahip olabilirler: `true` veya `false`. Bunlar genellikle bir koşulu test etmek için kullanılır ve ardından duruma göre kod çalıştırılır. Örneğin basit bir durum şöyle olurdu:

```js
let iAmAlive = true;
```

Oysa gerçekte daha çok şu şekilde kullanılır:

```js
let test = 6 < 3;
```

Bu, 6'nın 3'ten küçük olup olmadığını test etmek için "küçüktür" operatörünü (`<`) kullanmaktadır. Tahmin edebileceğiniz gibi `false` döndürür, çünkü 6, 3'ten küçük değildir! Kursun ilerleyen bölümlerinde bu tür operatörler hakkında çok daha fazla şey öğreneceksiniz.

#### Diziler (Arrays)

Bir dizi (array), köşeli parantezler içine alınmış ve virgüllerle ayrılmış birden çok değer içeren tek bir nesnedir. Konsolunuza aşağıdaki satırları girmeyi deneyin:

```js
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

Bu diziler tanımlandıktan sonra, her değere dizi içindeki konumuna göre erişebilirsiniz. Şu satırları deneyin:

```js
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

Köşeli parantezler, döndürülmesini istediğiniz değerin konumuna karşılık gelen bir dizin (index) değeri belirtir. JavaScript'teki dizilerin sıfır tabanlı (zero-indexed) olduğunu fark etmiş olabilirsiniz: ilk öğe 0 dizinindedir.

#### Nesneler (Objects)

Programlamada bir nesne (object), gerçek hayattaki bir nesneyi modelleyen bir kod yapısıdır. Bir kutuyu temsil eden ve onun genişliği, uzunluğu ve yüksekliği hakkında bilgiler içeren bir nesneniz olabilir ya da bir kişiyi temsil eden ve onun adı, boyu, kilosu, hangi dili konuştuğu, ona nasıl merhaba deneceği ve daha fazlası hakkında veriler içeren bir nesneniz olabilir.

Konsolunuza aşağıdaki satırı girmeyi deneyin:

```js
let dog = { name: "Spot", breed: "Dalmatian" };
```

Nesnede saklanan bilgileri almak için aşağıdaki sözdizimini kullanabilirsiniz:

```js
dog.name;
```

### Dinamik tipleme

JavaScript "dinamik tipli bir dildir" ("dynamically typed language"); bu, diğer bazı dillerin aksine bir değişkenin hangi veri türünü (sayılar, dizeler, diziler vb.) içereceğini belirtmeniz gerekmediği anlamına gelir.

Örneğin, bir değişken bildirir ve ona tırnak işaretleri içine alınmış bir değer verirseniz, tarayıcı değişkene bir dize olarak muamele eder:

```js
let myString = "Hello";
```

Tırnak işaretleri içine alınan değer yalnızca rakamlardan oluşsa bile yine de bir dizedir — bir sayı değildir — bu yüzden dikkatli olun:

```js
let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;
```

Yukarıdaki dört satırı konsolunuza tek tek girmeyi deneyin ve sonuçların ne olduğunu görün. [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) adlı özel bir operatör kullandığımızı fark edeceksiniz — bu, kendisinden sonra yazdığınız değişkenin veri türünü döndürür. İlk çağrıldığında `string` döndürmelidir, çünkü o noktada `myNumber` değişkeni bir dize olan `'500'` değerini içermektedir. İkinci kez çağırdığınızda ne döndürdüğüne bir bakın ve görün.

### JavaScript'te sabitler

Değişkenlerin yanı sıra sabitler (constants) de bildirebilirsiniz. Bunlar değişkenler gibidir, ancak şu farkları vardır:

- onları bildirdiğinizde başlatmanız gerekir.
- başlattıktan sonra onlara yeni bir değer atayamazsınız.

Örneğin, `let` kullanarak bir değişkeni başlatmadan bildirebilirsiniz:

```js
let count;
```

Bunu `const` kullanarak yapmaya çalışırsanız bir hata görürsünüz:

```js example-bad
const count;
```

Benzer şekilde, `let` ile bir değişkeni başlatabilir ve ardından ona yeni bir değer atayabilirsiniz (buna değişkeni _yeniden atamak (reassigning)_ da denir):

```js
let count = 1;
count = 2;
```

Bunu `const` kullanarak yapmaya çalışırsanız bir hata görürsünüz:

```js example-bad
const count = 1;
count = 2;
```

JavaScript'teki bir sabitin her zaman aynı değeri adlandırması gerekse de, adlandırdığı değerin içeriğini değiştirebileceğinizi unutmayın. Bu, sayılar veya mantıksal değerler (booleans) gibi basit türler için yararlı bir ayrım değildir, ancak bir nesneyi düşünün:

```js
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"
```

`const` kullanılarak bildirilen bir nesnenin özelliklerini (properties) güncelleyebilir, ekleyebilir veya kaldırabilirsiniz; çünkü nesnenin içeriği değişmiş olsa bile sabit hâlâ aynı nesneyi işaret etmektedir:

```js
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"
```

### Ne zaman const ve ne zaman let kullanılmalı

`const` ile `let` ile yapabildiğiniz kadar çok şey yapamıyorsanız, neden `let` yerine onu kullanmayı tercih edesiniz? Aslında `const` çok kullanışlıdır. Bir değeri adlandırmak için `const` kullanırsanız, kodunuza bakan herkese bu adın asla farklı bir değere atanmayacağını söyler. Bu adı her gördüklerinde neye atıfta bulunduğunu bileceklerdir.

Bu kursta, ne zaman `let` ve ne zaman `const` kullanılacağı konusunda aşağıdaki ilkeyi benimsiyoruz:

_Yapabildiğinizde `const` kullanın, mecbur kaldığınızda `let` kullanın._

Bu, bir değişkeni bildirdiğinizde başlatabiliyorsanız ve daha sonra yeniden atamanız gerekmiyorsa onu bir sabit yapmanız gerektiği anlamına gelir.

### Özet

Şimdiye kadar JavaScript değişkenleri ve bunların nasıl oluşturulacağı hakkında makul miktarda bilgi sahibi olmalısınız. Bir sonraki makalede, bu bilgileri ne kadar iyi anladığınızı ve aklınızda tuttuğunuzu kontrol etmek için kullanabileceğiniz bazı testler vereceğiz.

---

## 5. Becerilerinizi Test Edin: Değişkenler (Test your skills: Variables)

**Kaynak:** [Test your skills: Variables](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Variables)

Bu beceri testinin amacı, [İhtiyacınız olan bilgileri saklamak — Değişkenler](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables) makalemizi anlayıp anlamadığınızı değerlendirmenize yardımcı olmaktır.

> [!NOTE]
> Yardım almak için [Becerilerinizi test edin](https://developer.mozilla.org/en-US/docs/Learn_web_development#test_your_skills) kullanım kılavuzumuzu okuyun. Ayrıca [iletişim kanallarımızdan](https://developer.mozilla.org/en-US/docs/MDN/Community/Communication_channels) birini kullanarak da bize ulaşabilirsiniz.

### Etkileşimli görev

Her şeyden önce size, [öğrenme ortağımız](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds) [Scrimba](https://scrimba.com/home) tarafından oluşturulan eğlenceli, etkileşimli bir değişkenler görevi veriyoruz.

Gömülü etkileşimli dersi (scrim) izleyin ve talimatları izleyip kodu düzenleyerek zaman çizelgesindeki (küçük hayalet simgesi) görevi tamamlayın. İşiniz bittiğinde, eğitmenin çözümünün sizinkiyle nasıl eşleştiğini kontrol etmek için dersi izlemeye devam edebilirsiniz.

<mdn-scrim-inline url="https://scrimba.com/learn-javascript-c0v/~011" scrimtitle="Variables practice" survey="true"></scrim-inline>

### Değişkenler 1

Bu görevi tamamlamak için, mevcut `myName` değişkeninde saklanan değeri kendi adınızla düzeltecek yeni bir satır ekleyin.

<!-- Code shared across examples -->

```html hidden live-sample___variables-1 live-sample___variables-2 live-sample___variables-1-finish live-sample___variables-2-finish
<section></section>
```

```css hidden live-sample___variables-1 live-sample___variables-2 live-sample___variables-1-finish live-sample___variables-2-finish
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

Görevin başlangıç noktası şu şekilde görünür:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___variables-1
let myName = "Paul";

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para = document.createElement("p");
para.textContent = myName;
section.appendChild(para);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü göstermek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

myName = "Chris";

// Don't edit the code below here!
// ...
```

```js hidden live-sample___variables-1-finish
let myName = "Paul";

myName = "Chris";

const section = document.querySelector("section");
const para = document.createElement("p");
para.textContent = myName;
section.appendChild(para);
```

</details>

### Değişkenler 2

Şimdilik son görev — bu durumda size içinde iki hata bulunan mevcut bir kod verilmektedir. Sonuç paneli `Chris` adını ve Chris'in 20 yıl sonra kaç yaşında olacağına dair bir ifadeyi çıktı olarak vermelidir. Sorunu çözmenizi ve çıktıyı düzeltmenizi istiyoruz.

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___variables-2
// Fix the following code

const myName = "Default";
myName = "Chris";

let myAge = "42";

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü göstermek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// Turn the const into a let, so the value can be changed
let myName = "Default";
myName = "Chris";

// myAge needs to have a number datatype
let myAge = 42;

// Don't edit the code below here!
// ...
```

```js hidden live-sample___variables-2-finish
let myName = "Default";
myName = "Chris";
let myAge = 42;

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

### Ayrıca bakınız

Scrimba'dan [Pratik zamanı - Bölüm 3: let ve const (Practice time - Part 3: let and const)](https://scrimba.com/learn-javascript-c0v/~059?via=mdn) <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> dersine göz atın: `let` ve `const` ile ilgili birden fazla test sunan etkileşimli bir görev.

---

## 6. JavaScript'te Temel Matematik — Sayılar ve Operatörler (Basic math in JavaScript — numbers and operators)

**Kaynak:** [Basic math in JavaScript — numbers and operators](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math)

Kursun bu noktasında JavaScript'te matematiği tartışıyoruz — sayıları istediğimizi yapacak şekilde başarıyla işlemek için [operatörleri (operators)](https://developer.mozilla.org/en-US/docs/Glossary/Operator) ve diğer özellikleri nasıl kullanabileceğimizi ele alıyoruz.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>JavaScript'te toplama, çıkarma, çarpma ve bölme gibi temel sayı işlemleri.</li>
          <li>Sayıların dize (string) olarak tanımlandıklarında sayı olmadıkları ve hesaplamaların yanlış gitmesine neden olabilecekleri.</li>
          <li><code>Number()</code> ile dizeleri sayılara dönüştürmek.</li>
          <li>Operatör önceliği (Operator precedence).</li>
          <li>Artırma ve azaltma (Incrementing and decrementing).</li>
          <li>Atama ve karşılaştırma operatörleri (Assignment and comparison operators).</li>
          <li><code>Math.random()</code>, <code>Math.floor()</code> ve <code>Math.ceil()</code> gibi temel Math nesnesi metotları.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Herkes matematiği sever

Tamam, belki de sevmez. Bazılarımız matematiği sever, bazılarımız okulda çarpım tablosunu ve bölme işlemini öğrenmek zorunda kaldığımızdan beri matematikten nefret etmiştir ve bazılarımız da bu ikisinin arasında bir yerde durur. Ancak hiçbirimiz matematiğin onsuz pek uzağa gidemeyeceğimiz, hayatın temel bir parçası olduğunu inkâr edemeyiz. Bu, özellikle JavaScript (veya bu bağlamda herhangi bir başka dil) programlamayı öğrenirken geçerlidir — yaptığımız işlerin o kadar büyük bir kısmı sayısal verileri işlemeye, yeni değerler hesaplamaya vb. dayanır ki JavaScript'in tam donanımlı bir matematik fonksiyonları kümesine sahip olduğunu öğrenmek sizi şaşırtmayacaktır.

Bu makale yalnızca şu anda bilmeniz gereken temel kısımları tartışmaktadır.

#### Sayı türleri

Programlamada, hepimizin çok iyi bildiği mütevazı ondalık sayı sistemi bile düşündüğünüzden daha karmaşıktır. Farklı ondalık sayı türlerini tanımlamak için farklı terimler kullanırız, örneğin:

- **Tam sayılar (Integers)**, kesirli kısmı olmayan sayılardır. Pozitif veya negatif olabilirler; örneğin 10, 400 veya -5.
- **Kayan noktalı sayılar (Floating point numbers — floats)**, ondalık noktalara ve ondalık basamaklara sahiptir; örneğin 12.5 ve 56.7786543.

Hatta farklı sayı sistemi türlerimiz bile vardır! Ondalık sistem (decimal) 10 tabanlıdır (yani her basamakta 0–9 arası rakamları kullanır), ancak şu gibi şeylerimiz de vardır:

- **İkili (Binary)** — Bilgisayarların en düşük seviyeli dili; 0'lar ve 1'ler.
- **Sekizli (Octal)** — 8 tabanlıdır, her basamakta 0–7 arası rakamları kullanır.
- **Onaltılı (Hexadecimal)** — 16 tabanlıdır, her basamakta 0–9 arası rakamları ve ardından a–f arası harfleri kullanır. [CSS'te renkleri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_rgb_values) ayarlarken bu sayılarla daha önce karşılaşmış olabilirsiniz.

**Beyninizin erimesinden endişelenmeye başlamadan önce, hemen orada durun!** Başlangıç olarak, bu kurs boyunca yalnızca ondalık sayılara bağlı kalacağız; diğer türler hakkında düşünmeye başlamanız — eğer hiç gerekirse — nadiren gerekecektir.

İkinci iyi haber ise, diğer bazı programlama dillerinin aksine JavaScript'in temel sayıları — hem tam sayıları hem de ondalık sayıları — temsil etmek için yalnızca tek bir veri türüne sahip olmasıdır. Tahmin ettiniz, [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number). Bu, JavaScript'te hangi tür sayılarla uğraşıyor olursanız olun, onları aynı şekilde ele aldığınız anlamına gelir.

> [!NOTE]
> JavaScript'in çok ama çok büyük tam sayılar için kullanılan ikinci bir sayı türü olan [BigInt](https://developer.mozilla.org/en-US/docs/Glossary/BigInt) vardır. Ancak bu kursta yalnızca `Number` değerleriyle ilgileneceğiz.

#### Hepsi benim için sayı

İhtiyacımız olan temel sözdizimiyle yeniden tanışmak için hızlıca bazı sayılarla oynayalım. Aşağıda listelenen komutları [geliştirici araçları JavaScript konsolunuza](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) girin.

1. Her şeyden önce, birkaç değişken bildirelim ve bunları sırasıyla bir tam sayı ve bir kayan noktalı sayı ile başlatalım, ardından her şeyin yolunda olduğunu kontrol etmek için değişken adlarını tekrar yazalım:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Sayı değerleri tırnak işaretleri olmadan yazılır — devam etmeden önce sayı içeren birkaç değişken daha bildirmeyi ve başlatmayı deneyin.
3. Şimdi orijinal değişkenlerimizin her ikisinin de aynı veri türünde olduğunu kontrol edelim. JavaScript'te bunu yapan [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) adlı bir operatör vardır. Aşağıdaki iki satırı gösterildiği gibi girin:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Her iki durumda da `"number"` değerinin döndürüldüğünü görmelisiniz — bu, farklı sayıların farklı veri türlerine sahip olduğu ve onlarla farklı şekillerde başa çıkmak zorunda kaldığımız bir duruma kıyasla işleri bizim için çok daha kolay hale getirir. Üf!

#### Kullanışlı Number metotları

Bir örneği (instance) JavaScript'inizde kullanacağınız tüm standart sayıları temsil eden [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) nesnesi, sayıları işlemek için çeşitli metotlar sağlar. Şimdilik yalnızca temelleri ele almak istediğimiz için bunları burada ayrıntılı olarak incelemiyoruz; ancak bu modülü birkaç kez okuduktan sonra, nelerin mevcut olduğunu öğrenmek için nesne başvuru sayfalarına gitmeye değer.

Örneğin, sayınızı sabit sayıda ondalık basamağa yuvarlamak için [`toFixed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) metodunu kullanın. Tarayıcınızın [konsoluna](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) aşağıdaki satırları yazın:

```js
const lotsOfDecimal = 1.7665849587;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

#### Sayı veri türlerine dönüştürmek

Bazen dize (string) türü olarak saklanan bir sayıyla karşılaşabilirsiniz ki bunu hesaplamalarda kullanmak zordur. Bu durum en yaygın olarak bir [form](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms) girdisine veri girildiğinde ve [girdi türü metin (text) olduğunda](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/text) meydana gelir. Bu sorunu çözmenin bir yolu vardır — aynı değerin sayı sürümünü döndürmek için dize değerini [`Number()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) yapıcısına (constructor) geçirmek.

Örneğin, konsolunuza şu satırları yazmayı deneyin:

```js
let myNumber = "74";
myNumber += 3;
```

Sonuç olarak 77 değil 743 elde edersiniz, çünkü `myNumber` aslında bir dize olarak tanımlanmıştır. Bunu aşağıdakini yazarak test edebilirsiniz:

```js
typeof myNumber;
```

Hesaplamayı düzeltmek için şunu yapabilirsiniz:

```js
let myNumber = "74";
myNumber = Number(myNumber) + 3;
```

Sonuç o zaman başlangıçta beklendiği gibi 77 olur.

### Aritmetik operatörler

Aritmetik operatörler (Arithmetic operators), JavaScript'te matematiksel hesaplamalar yapmak için kullanılır:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Operatör</th>
      <th scope="col">Ad</th>
      <th scope="col">Amaç</th>
      <th scope="col">Örnek</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>+</code></td>
      <td>Toplama (Addition)</td>
      <td>İki sayıyı birbirine ekler.</td>
      <td><code>6 + 9</code></td>
    </tr>
    <tr>
      <td><code>-</code></td>
      <td>Çıkarma (Subtraction)</td>
      <td>Sağdaki sayıyı soldaki sayıdan çıkarır.</td>
      <td><code>20 - 15</code></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>Çarpma (Multiplication)</td>
      <td>İki sayıyı birbiriyle çarpar.</td>
      <td><code>3 * 7</code></td>
    </tr>
    <tr>
      <td><code>/</code></td>
      <td>Bölme (Division)</td>
      <td>Soldaki sayıyı sağdaki sayıya böler.</td>
      <td><code>10 / 5</code></td>
    </tr>
    <tr>
      <td><code>%</code></td>
      <td>Kalan (Remainder — bazen modül / modulo olarak adlandırılır)</td>
      <td>
        <p>
          Soldaki sayıyı sağdaki sayıya eşit birden fazla tam sayı parçasına böldükten sonra geriye kalan kalanı döndürür.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (3, 8'in içinde iki kez olduğundan ve geriye 2 kaldığından 2 döndürür).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Üs alma (Exponent)</td>
      <td>
        Bir <code>taban (base)</code> sayısını <code>üs (exponent)</code> kuvvetine yükseltir; yani <code>taban</code> sayısının kendisiyle <code>üs</code> kez çarpılmasıdır.
      </td>
      <td>
        <code>5 ** 2</code> (<code>5 * 5</code> ile aynı olan <code>25</code> değerini döndürür).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Bazen aritmetik işlemlerde yer alan sayılardan [işlenenler (operands)](https://developer.mozilla.org/en-US/docs/Glossary/Operand) olarak bahsedildiğini görürsünüz.

> [!NOTE]
> Bazen üslerin, çok benzer bir şekilde çalışan daha eski [`Math.pow()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) metodu kullanılarak ifade edildiğini görebilirsiniz. Örneğin `Math.pow(7, 3)` ifadesinde `7` taban ve `3` üstür, dolayısıyla ifadenin sonucu `343` olur. `Math.pow(7, 3)` ifadesi `7**3` ile eşdeğerdir.

Size muhtemelen temel matematiği öğretmemize gerek yok, ancak bunun JavaScript'te nasıl temsil edildiğine dair anlayışınızı test etmek istiyoruz. Sözdizimine aşina olmak için aşağıdaki örnekleri [geliştirici araçları JavaScript konsolunuza](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) girmeyi deneyin.

1. İlk olarak, şu gibi kendi basit örneklerinizden bazılarını girmeyi deneyin:

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Ayrıca değişkenlerin içinde bazı sayılar bildirmeyi ve başlatmayı deneyebilir ve bunları toplama işlemlerinde kullanmayı deneyebilirsiniz — değişkenler işlem için tuttukları değerler gibi davranacaktır. Örneğin:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Bu bölüm için son olarak, şu gibi daha karmaşık ifadeler girmeyi deneyin:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Bu son hesaplama kümesinin bazı kısımları size beklediğiniz sonucu vermeyebilir; aşağıdaki bölüm bunun nedenini ele almaktadır.

#### Operatör önceliği

`num2` değişkeninin 50 değerini ve `num1` değişkeninin 10 değerini tuttuğunu varsayarak (yukarıda ilk belirtildiği gibi), yukarıdaki son örneğe bakalım:

```js
num2 + num1 / 8 + 2;
```

Bir insan olarak bunu _"50 artı 10 eşittir 60"_, ardından _"8 artı 2 eşittir 10"_ ve son olarak _"60 bölü 10 eşittir 6"_ şeklinde okuyabilirsiniz.

Ancak tarayıcı _"10 bölü 8 eşittir 1.25"_, ardından _"50 artı 1.25 artı 2 eşittir 53.25"_ işlemini yapar.

Bunun nedeni **operatör önceliğidir (operator precedence)** — bir hesaplamanın (programlamada bir _ifade (expression)_ olarak adlandırılır) sonucu hesaplanırken bazı operatörler diğerlerinden önce uygulanır. JavaScript'teki operatör önceliği temel matematiktekiyle aynıdır — bu durumda önce çarpma ve bölme, ardından toplama ve çıkarma yapılır ve hesaplama soldan sağa doğru değerlendirilir.

Operatör önceliğini geçersiz kılmak istiyorsanız, önce ele alınması gereken kısımların etrafına parantez koyabilirsiniz. Dolayısıyla 6 sonucunu elde etmek için şunu yapabilirdik:

```js
(num2 + num1) / (8 + 2);
```

Bunu test etmek için önceki satırı konsola girmeyi deneyin.

Bir ifade üs alma operatörünü (`**`) içeriyorsa, parantez içindeki ifadelerden sonra ancak diğer [aritmetik operatörlerden](#aritmetik-operatörler) önce değerlendirilir. Örneğin:

```js
2 + 3 ** 2;
```

Bunu konsola girdiğinizde tarayıcı _"3 üssü 2 eşittir 9"_, ardından _"2 artı 9 eşittir 11"_ işlemini yapar.

Parantez içindeki ifadelerin üs alma işleminden önce nasıl değerlendirildiğini göstermek için aşağıdaki ifadeleri konsola girmeyi deneyin:

```js
4 + 2 ** 3;
(4 + 2) ** 3;
```

İlk durumda tarayıcı _"2 üssü 3 eşittir 8"_, ardından _"8 artı 4"_ işlemini yapar. İkinci durumda ise _"4 artı 2 eşittir 6"_, ardından _"6 üssü 3"_ işlemini yapar.

> [!NOTE]
> Tüm JavaScript operatörlerinin ve önceliklerinin tam listesi [Operatör önceliği (Operator precedence)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) sayfasında bulunabilir.

### Artırma ve azaltma operatörleri

Bazen sayısal bir değişken değerini tekrar tekrar bir artırmak veya bir azaltmak isteyeceksiniz. Bu, artırma (`++`) ve azaltma (`--`) operatörleri kullanılarak rahatlıkla yapılabilir. [JavaScript'e ilk adım](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/A_first_splash) makalemizdeki "Sayıyı tahmin et" oyunumuzda, her turdan sonra kullanıcının kaç tahmin hakkı kaldığını takip etmek amacıyla `guessCount` değişkenimize 1 eklediğimizde `++` kullanmıştık.

```js
guessCount++;
```

Bunlarla konsolunuzda oynamayı deneyelim. Başlangıç olarak, bunları doğrudan bir sayıya uygulayamayacağınızı unutmayın; bu garip görünebilir, ancak burada değerin kendisi üzerinde işlem yapmıyor, bir değişkene güncellenmiş yeni bir değer atıyoruz. Aşağıdaki kod bir hata döndürecektir:

```js example-bad
3++;
```

Yani yalnızca mevcut bir değişkeni artırabilirsiniz. Şunu deneyin:

```js
let num1 = 4;
num1++;
```

Tamam, 2 numaralı tuhaflık! Bunu yaptığınızda 4 değerinin döndürüldüğünü göreceksiniz — bunun nedeni tarayıcının geçerli değeri döndürmesi ve _ardından_ değişkeni artırmasıdır. Değişken değerini tekrar döndürürseniz artırılmış olduğunu görebilirsiniz:

```js
num1;
```

Aynı şey `--` için de geçerlidir: aşağıdakini deneyin

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Operatörü değişkenin sonu yerine başına koyarak tarayıcının bunu tam tersi şekilde yapmasını — önce değişkeni artırıp/azaltmasını ve _ardından_ değeri döndürmesini — sağlayabilirsiniz. Yukarıdaki örnekleri tekrar deneyin, ancak bu kez `++num1` ve `--num2` kullanın.

### Atama operatörleri

Atama operatörleri (Assignment operators), bir değişkene değer atayan operatörlerdir. En temel olanını, `=`, zaten pek çok kez kullandık — soldaki değişkene sağda belirtilen değeri atar:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Ancak kodunuzu daha düzenli ve daha verimli tutmak için yararlı kısayollar sağlayan daha karmaşık türler de vardır. En yaygın olanları aşağıda listelenmiştir:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Operatör</th>
      <th scope="col">Ad</th>
      <th scope="col">Amaç</th>
      <th scope="col">Örnek</th>
      <th scope="col">Kısayol karşılığı</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>+=</code></td>
      <td>Toplama ataması (Addition assignment)</td>
      <td>
        Sağdaki değeri soldaki değişken değerine ekler, ardından yeni değişken değerini döndürür
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>Çıkarma ataması (Subtraction assignment)</td>
      <td>
        Sağdaki değeri soldaki değişken değerinden çıkarır ve yeni değişken değerini döndürür
      </td>
      <td><code>x -= 3;</code></td>
      <td><code>x = x - 3;</code></td>
    </tr>
    <tr>
      <td><code>*=</code></td>
      <td>Çarpma ataması (Multiplication assignment)</td>
      <td>
        Soldaki değişken değerini sağdaki değerle çarpar ve yeni değişken değerini döndürür
      </td>
      <td><code>x *= 3;</code></td>
      <td><code>x = x * 3;</code></td>
    </tr>
    <tr>
      <td><code>/=</code></td>
      <td>Bölme ataması (Division assignment)</td>
      <td>
        Soldaki değişken değerini sağdaki değere böler ve yeni değişken değerini döndürür
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Nasıl çalıştıkları hakkında bir fikir edinmek için yukarıdaki örneklerden bazılarını konsolunuza yazmayı deneyin. Her durumda, ikinci satırı yazmadan önce sonucu tahmin edip edemediğinizi görün.

Her ifadenin sağ tarafında diğer değişkenleri de gönül rahatlığıyla kullanabileceğinizi unutmayın, örneğin:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Mevcut pek çok [başka atama operatörü](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators) vardır, ancak şimdi öğrenmeniz gereken temel olanlar bunlardır.

### Bir canvas kutusunu boyutlandırmak

Bu alıştırmada, bir kutunun boyutunu değiştirmek için bazı sayıları ve operatörleri işleyeceksiniz. Kutu, [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) adlı bir tarayıcı API'si kullanılarak çizilir. Bunun nasıl çalıştığı konusunda endişelenmenize gerek yok — şimdilik yalnızca matematiğe odaklanın. Kutunun (piksel cinsinden) genişliği ve yüksekliği, başlangıçta her ikisine de 50 değeri verilen `x` ve `y` değişkenleri tarafından tanımlanır.

```html hidden live-sample___canvas-exercise
<canvas id="my-canvas" width="400" height="200"></canvas>
<p></p>
```

```js live-sample___canvas-exercise
const canvas = document.getElementById("my-canvas");
const para = document.querySelector("p");
const ctx = canvas.getContext("2d");

// Edit the following two lines ONLY
let x = 50;
let y = 50;

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "green";
ctx.fillRect(10, 10, x, y);
para.textContent = `The rectangle is ${x}px wide and ${y}px high.`;
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

**"Play"** ("Çalıştır") düğmesine tıklayarak yukarıdaki örneği MDN Playground'da açın, ardından her durumda belirli operatörleri ve/veya değerleri kullanarak kutunun belirli boyutlara büyümesini/küçülmesini sağlamak için aşağıdaki talimatlar listesini izleyin:

- `x`'i hesaplayan satırı, kutu yine `50px` genişliğinde olacak ancak 50 değeri 43 ve 7 sayıları ve bir aritmetik operatör kullanılarak hesaplanacak şekilde değiştirin.
- `y`'yi hesaplayan satırı, kutu `75px` yüksekliğinde olacak ancak 75 değeri 25 ve 3 sayıları ve bir aritmetik operatör kullanılarak hesaplanacak şekilde değiştirin.
- `x`'i hesaplayan satırı, kutu `100px` genişliğinde olacak ancak 100 değeri üç sayı ve çıkarma ile bölme operatörleri kullanılarak hesaplanacak şekilde değiştirin.
- `y`'yi hesaplayan satırı, kutu `200px` yüksekliğinde olacak ancak 200 değeri 2 sayısı, `x` ve çarpma operatörü kullanılarak hesaplanacak şekilde değiştirin.

Kodu bozarsanız endişelenmeyin. Her zaman Reset ("Sıfırla") düğmesine basıp baştan başlayabilirsiniz.

### Karşılaştırma operatörleri

Bazen doğru/yanlış (`true`/`false`) testleri çalıştırmak ve ardından sonuca bağlı olarak uygun şekilde hareket etmek isteriz — bunu yapmak için **karşılaştırma operatörlerini (comparison operators)** kullanırız.

| Operatör | Ad | Amaç | Örnek |
| -------- | ------------------------ | ---------------------------------------------------------------------------- | ------------- |
| `===` | Katı eşitlik (Strict equality) | Soldaki ve sağdaki değerlerin birbiriyle birebir aynı olup olmadığını test eder | `5 === 2 + 4` |
| `!==` | Katı eşitsizlik (Strict-non-equality) | Soldaki ve sağdaki değerlerin birbiriyle birebir aynı **olmadığını** test eder | `5 !== 2 + 3` |
| `<` | Küçüktür (Less than) | Soldaki değerin sağdakinden daha küçük olup olmadığını test eder. | `10 < 6` |
| `>` | Büyüktür (Greater than) | Soldaki değerin sağdakinden daha büyük olup olmadığını test eder. | `10 > 20` |
| `<=` | Küçük veya eşittir (Less than or equal to) | Soldaki değerin sağdakinden daha küçük veya ona eşit olup olmadığını test eder. | `3 <= 2` |
| `>=` | Büyük veya eşittir (Greater than or equal to) | Soldaki değerin sağdakinden daha büyük veya ona eşit olup olmadığını test eder. | `5 >= 4` |

> [!NOTE]
> Bazı kişilerin eşitlik ve eşitsizlik testlerinde `==` ve `!=` kullandığını görebilirsiniz. Bunlar JavaScript'te geçerli operatörlerdir, ancak `===`/`!==` operatörlerinden farklıdırlar. İlk sürümler değerlerin aynı olup olmadığını test eder ancak veri türlerini test etmez. İkinci, katı (strict) sürümler ise hem değerlerin hem de veri türlerinin eşitliğini test eder. Katı sürümler daha az hatayla sonuçlanma eğilimindedir, bu nedenle onları kullanmanızı öneririz.

Bu değerlerden bazılarını bir konsola girmeyi denerseniz, hepsinin `true`/`false` değerleri — geçen makalede bahsettiğimiz o mantıksal değerleri (booleans) — döndürdüğünü göreceksiniz. Bunlar kodumuzda kararlar vermemize olanak tanıdıkları için çok kullanışlıdır ve bir seçim yapmak istediğimiz her seferde kullanılırlar. Örneğin mantıksal değerler şunlar için kullanılabilir:

- Bir özelliğin açık mı yoksa kapalı mı olduğuna bağlı olarak bir düğme üzerinde doğru metin etiketini görüntülemek.
- Bir oyun bittiyse oyun bitti (game over) mesajı veya oyun kazanıldıysa bir zafer mesajı görüntülemek.
- Hangi tatil sezonu olduğuna bağlı olarak doğru mevsimsel kutlama mesajını görüntülemek.
- Hangi yakınlaştırma düzeyinin seçildiğine bağlı olarak bir haritayı yakınlaştırmak veya uzaklaştırmak.

Gelecek bir makalede koşullu ifadelere baktığımızda bu tür mantıkların nasıl kodlanacağına bakacağız. Şimdilik hızlı bir örneğe bakalım:

```html live-sample___conditional
<button>Start machine</button>
<p>The machine is stopped.</p>
```

```js live-sample___conditional
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

`updateBtn()` fonksiyonunun içinde eşitlik operatörünün kullanıldığını görebilirsiniz. Bu durumda iki matematiksel ifadenin aynı değere sahip olup olmadığını test etmiyoruz — bir düğmenin metin içeriğinin belirli bir dizeyi içerip içermediğini test ediyoruz — ancak bu yine de aynı ilkeyi kullanır. Düğmeye basıldığında metin içeriği "Start machine" ("Makineyi başlat") ise, etiketini "Stop machine" ("Makineyi durdur") olarak değiştirir ve etiketi uygun şekilde güncelleriz. Düğmeye basıldığında metin içeriği "Stop machine" ise görünümü tekrar eski haline döndürürüz.

> [!NOTE]
> İki durum arasında geçiş yapan bu tür bir kontrole genellikle **aç/kapa düğmesi (toggle)** denir. İki durum arasında geçiş yapar — ışık açık ve ışık kapalı, yürü ve koş vb.

### Özet

Bu makalede, JavaScript'teki sayılar hakkında şimdilik bilmeniz gereken temel bilgileri ele aldık. JavaScript öğreniminiz boyunca sayıları her zaman göreceksiniz, bu yüzden bu konuyu şimdiden aradan çıkarmak iyi bir fikirdir. Matematikten hoşlanmayan insanlardan biriyseniz, bu bölümün oldukça kısa olduğu gerçeğiyle teselli bulabilirsiniz.

Bir sonraki makalede, bu bilgileri ne kadar iyi anladığınızı ve aklınızda tuttuğunuzu kontrol etmek için size bazı testler vereceğiz.

### Ayrıca bakınız

- [Sayılar ve dizeler (Numbers and strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [İfadeler ve operatörler (Expressions and operators)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)

---

## 7. Becerilerinizi Test Edin: Matematik (Test your skills: Math)

**Kaynak:** [Test your skills: Math](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Math)

Bu sayfadaki testlerin amacı, [JavaScript'te temel matematik — sayılar ve operatörler](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math) makalesini anlayıp anlamadığınızı değerlendirmenize yardımcı olmaktır.

> [!NOTE]
> Yardım almak için [Becerilerinizi test edin](https://developer.mozilla.org/en-US/docs/Learn_web_development#test_your_skills) kullanım kılavuzumuzu okuyun. Ayrıca [iletişim kanallarımızdan](https://developer.mozilla.org/en-US/docs/MDN/Community/Communication_channels) birini kullanarak da bize ulaşabilirsiniz.

### Matematik 1

Temel matematik operatörleri hakkındaki bilginizi test ederek başlayalım.
Dört sayısal değer oluşturacak, ikisini birbiriyle toplayacak, birini diğerinden çıkaracak, ardından sonuçları çarpacaksınız.
Son olarak, bu değerin bir çift sayı olduğunu kanıtlamak için bir test yazacaksınız.

Görevi tamamlamak için:

1. Sayı içeren dört değişken oluşturun. Değişkenlere mantıklı adlar verin.
2. İlk iki değişkeni birbiriyle toplayın ve sonucu başka bir değişkende saklayın.
3. Dördüncü değişkeni üçüncü değişkenden çıkarın ve sonucu başka bir değişkende saklayın.
4. **2.** ve **3.** adımlardaki sonuçları çarpın ve sonucu `finalResult` adlı bir değişkende saklayın.
5. [Aritmetik operatörlerden](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators) birini kullanarak `finalResult` değerinin bir çift sayı olup olmadığını kontrol edin. Sonucu (çift için `0`, tek için `1`) `evenOddResult` adlı bir değişkende saklayın.

Bu testi geçmek için `finalResult` değişkeni `48` değerine ve `evenOddResult` değişkeni `0` değerine sahip olmalıdır.

<!-- Code shared across examples -->

```html hidden live-sample___math-1 live-sample___math-2 live-sample___math-3 live-sample___math-1-finish live-sample___math-2-finish live-sample___math-3-finish
<section></section>
```

```css hidden live-sample___math-1 live-sample___math-2 live-sample___math-3 live-sample___math-1-finish live-sample___math-2-finish live-sample___math-3-finish
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

Görevin başlangıç noktası şu şekilde görünür:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___math-1
let finalResult;
let evenOddResult;

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const finalResultCheck =
  finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para2 = document.createElement("p");
const evenOddResultCheck =
  evenOddResult === 0
    ? "The final result is even!"
    : "The final result is odd. Hrm.";
para2.textContent = evenOddResultCheck;
section.appendChild(para1);
section.appendChild(para2);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü göstermek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

const number1 = 4;
const number2 = 8;
const number3 = 12;
const number4 = 8;

const additionResult = number1 + number2;
const subtractionResult = number3 - number4;

finalResult = additionResult * subtractionResult;

evenOddResult = finalResult % 2;

// Don't edit the code below here!
// ...
```

```js hidden live-sample___math-1-finish
let finalResult;
let evenOddResult;

const number1 = 4;
const number2 = 8;
const number3 = 12;
const number4 = 8;

const additionResult = number1 + number2;
const subtractionResult = number3 - number4;

finalResult = additionResult * subtractionResult;

evenOddResult = finalResult % 2;

const section = document.querySelector("section");
const para1 = document.createElement("p");
const finalResultCheck =
  finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para2 = document.createElement("p");
const evenOddResultCheck =
  evenOddResult === 0
    ? "The final result is even!"
    : "The final result is odd. Hrm.";
para2.textContent = evenOddResultCheck;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

### Matematik 2

İkinci görevde size sonuçları `result` ve `result2` değişkenlerinde saklanan iki hesaplama verilmektedir.
Hesaplamaları almanız, bunları çarpmanız ve sonucu iki ondalık basamağa biçimlendirmeniz gerekmektedir.

Görevi tamamlamak için:

1. `result` ve `result2` değişkenlerini çarpın ve sonucu tekrar `result` değişkenine atayın (atama kısayolunu kullanın).
2. `result` değerini iki ondalık basamağa sahip olacak şekilde biçimlendirin ve `finalResult` adlı bir değişkende saklayın.
3. `typeof` kullanarak `finalResult` değişkeninin veri türünü kontrol edin. Eğer bir `string` (dize) ise, onu `number` (sayı) türüne dönüştürün ve sonucu `finalNumber` adlı bir değişkende saklayın.

Bu testi geçmek için `finalNumber` değişkeni `4633.33` sonucuna sahip olmalıdır. Doğru çıktıyı elde etmek için operatör önceliğini dikkate almanız ve girdi ifadelerine bazı parantezler eklemeniz veya değiştirmeniz gerekebilir.

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___math-2
// Final result should be 4633.33

let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Your finalResult is ${finalResult}`;
const para2 = document.createElement("p");
const finalNumberCheck =
  isNaN(finalNumber) === false
    ? "finalNumber is a number type. Well done!"
    : `Oops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;
section.appendChild(para1);
section.appendChild(para2);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü göstermek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js-nolint
// Final result should be 4633.33

let result = (7 + 13 / 9) + 7;
let result2 = 100 / 2 * 6;

result *= result2;

const finalResult = result.toFixed(2);

const finalNumber = Number(finalResult);

// Don't edit the code below here!
// ...
```

```js hidden live-sample___math-2-finish
let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;

result *= result2;
const finalResult = result.toFixed(2);
const finalNumber = Number(finalResult);

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Your finalResult is ${finalResult}`;
const para2 = document.createElement("p");
const finalNumberCheck =
  isNaN(finalNumber) === false
    ? "finalNumber is a number type. Well done!"
    : `Oops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

### Matematik 3

Bu makalenin son görevinde bazı testler yazmanızı istiyoruz.

Görevi tamamlamak için:

1. Her biri bir ifade ve iki değişkenden oluşan üç grup vardır. Her biri için, yapılan ifadeyi kanıtlayan veya çürüten bir test yazın.
2. Bu testlerin sonuçlarını sırasıyla `weightComparison`, `heightComparison` ve `pwdMatch` adlı değişkenlerde saklayın.

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___math-3
// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;
// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;
// Statement 3: The two passwords match
const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const weightTest = weightComparison
  ? "True — elephants do weigh less than mice!?"
  : "False — of course an elephant is heavier than a mouse!";
const heightTest = heightComparison
  ? "True — an ostrich is indeed taller than a duck!"
  : "False — apparently a duck is taller than an ostrich!?";
const pwdTest = pwdMatch
  ? "True — the passwords match."
  : "False — the passwords do not match; please check them";
para1.textContent = weightTest;
section.appendChild(para1);
para2.textContent = heightTest;
section.appendChild(para2);
para3.textContent = pwdTest;
section.appendChild(para3);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü göstermek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js-nolint
// ...
// Don't edit the code above here!

const weightComparison = eleWeight < mouseWeight;
const heightComparison = ostrichHeight > duckHeight;
const pwdMatch = pwd1 === pwd2;

// Don't edit the code below here!
// ...
```

```js hidden live-sample___math-3-finish
// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;
// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;
// Statement 3: The two passwords match
const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";

const weightComparison = eleWeight < mouseWeight;
const heightComparison = ostrichHeight > duckHeight;
const pwdMatch = pwd1 === pwd2;

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const weightTest = weightComparison
  ? "True — elephants do weigh less than mice!?"
  : "False — of course an elephant is heavier than a mouse!";
const heightTest = heightComparison
  ? "True — an ostrich is indeed taller than a duck!"
  : "False — apparently a duck is taller than an ostrich!?";
const pwdTest = pwdMatch
  ? "True — the passwords match."
  : "False — the passwords do not match; please check them";
para1.textContent = weightTest;
section.appendChild(para1);
para2.textContent = heightTest;
section.appendChild(para2);
para3.textContent = pwdTest;
section.appendChild(para3);
```

</details>

---

## 8. Metinlerle Çalışmak — JavaScript'te Dizeler (Handling text — strings in JavaScript)

**Kaynak:** [Handling text — strings in JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings)

Sırada dikkatimizi dizelere (strings) çevireceğiz — programlamada metin parçalarına böyle denir. Bu makalede, JavaScript öğrenirken dizeler hakkında gerçekten bilmeniz gereken tüm yaygın konulara bakacağız; örneğin dizeler oluşturmak, dizelerdeki tırnak işaretlerini kaçırmak (escaping) ve dizeleri birbirine birleştirmek.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Dize değişmezleri (string literals) oluşturmak.</li>
          <li>Tırnak işaretlerinin eşleşmesi gerekliliği.</li>
          <li>Dize birleştirme (String concatenation).</li>
          <li>Dizelerdeki karakterleri kaçırmak (Escaping characters).</li>
          <li>Değişkenleri kullanmak ve çok satırlı şablon değişmezleri de dahil olmak üzere şablon değişmezleri (Template literals).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Kelimelerin gücü

Kelimeler insanlar için çok önemlidir — iletişim kurma şeklimizin büyük bir parçasıdırlar. Web, insanların iletişim kurmasına ve bilgi paylaşmasına olanak tanımak üzere tasarlanmış büyük ölçüde metin tabanlı bir ortam olduğundan, üzerinde görünen kelimeler üzerinde kontrole sahip olmamız bizim için yararlıdır. [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML) metne yapı ve anlam sağlar, [CSS](https://developer.mozilla.org/en-US/docs/Glossary/CSS) onu hassas bir şekilde biçimlendirmemize olanak tanır ve JavaScript de dizeleri (strings) işlemek için pek çok özellik sunar. Bunlar arasında özel karşılama mesajları ve istemler (prompts) oluşturmak, gerektiğinde doğru metin etiketlerini göstermek, terimleri istenen sıraya göre sıralamak ve çok daha fazlası yer alır.

Kursta şimdiye kadar size gösterdiğimiz programların hemen hemen hepsi biraz dize işleme içermiştir.

### Dizeleri bildirmek

İlk bakışta dizeler sayılara benzer şekilde ele alınır, ancak daha derine indiğinizde bazı dikkate değer farklar görmeye başlarsınız. Kendimizi alıştırmak için [tarayıcı geliştirici konsoluna](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) bazı temel satırlar girerek başlayalım.

Başlamak için aşağıdaki satırları girin:

```js
const string = "The revolution will not be televised.";
console.log(string);
```

Tıpkı sayılarla yaptığımız gibi, bir değişken bildiriyor, onu bir dize değeriyle başlatıyor ve ardından değeri döndürüyoruz. Buradaki tek fark, bir dize yazarken değeri tırnak işaretleriyle çevrelemek zorunda olmanızdır.

Bunu yapmazsanız veya tırnak işaretlerinden birini atlarsanız bir hata alırsınız. Aşağıdaki satırları girmeyi deneyin:

```js example-bad
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
```

Bu satırlar çalışmaz çünkü etrafında tırnak işareti olmayan herhangi bir metin bir değişken adı, özellik adı, ayrılmış sözcük veya benzeri bir şey olarak yorumlanır. Tarayıcı tırnak içine alınmamış metni tanımazsa bir hata fırlatılır (örneğin "missing; before statement"). Tarayıcı bir dizenin nerede başladığını algılayabiliyor ancak (eksik ikinci tırnak işareti nedeniyle) sonunu bulamıyorsa, "unterminated string literal" ("sonlandırılmamış dize değişmezi") hatası bildirebilir ya da konsolda yeni bir satıra atlayıp dizeyi orada bitirmenizi bekleyebilir. Programınız bu tür hatalar veriyorsa, geri dönün ve eksik tırnak işaretiniz olmadığından emin olmak için tüm dizelerinizi kontrol edin.

Daha önce `string` değişkenini tanımladıysanız aşağıdaki kod çalışacaktır — şimdi deneyin:

```js
const badString = string;
console.log(badString);
```

`badString` artık `string` ile aynı değere sahip olacak şekilde ayarlanmıştır.

#### Tek tırnak, çift tırnak ve ters tırnak

JavaScript'te dizelerinizi sarmalamak için tek tırnak (`'`), çift tırnak (`"`) veya ters tırnak (backticks — `` ` ``) seçebilirsiniz. Aşağıdakilerin hepsi çalışacaktır:

```js-nolint
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);
```

Bir dizenin başlangıcı ve sonu için aynı karakteri kullanmalısınız, aksi takdirde bir hata alırsınız:

```js-nolint example-bad
const badQuotes = 'This is not allowed!";
```

Tek tırnak kullanılarak bildirilen dizeler ile çift tırnak kullanılarak bildirilen dizeler aynıdır ve hangisini kullanacağınız kişisel tercihinize bağlıdır — bununla birlikte bir stil seçip kodunuzda tutarlı bir şekilde onu kullanmak iyi bir uygulamadır.

Ters tırnak kullanılarak bildirilen dizeler, [_şablon değişmezi (template literal)_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) olarak adlandırılan özel bir dize türüdür. Şablon değişmezleri çoğunlukla normal dizelerle aynı şekilde davranır, ancak bazı özel nitelikleri vardır:

- İçlerine [JavaScript gömebilirsiniz](#javascript-gömmek).
- Şablon değişmezlerini [birden çok satırda](#çok-satırlı-dizeler) bildirebilirsiniz.

### JavaScript gömmek

Bir şablon değişmezinin içinde, JavaScript değişkenlerini veya ifadelerini `${ }` içine sarmalayabilirsiniz ve sonuç dizeye dahil edilecektir:

```js
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"
```

İki değişkeni birbirine birleştirmek için aynı tekniği kullanabilirsiniz:

```js
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
```

Dizeleri bu şekilde birbirine birleştirmeye _birleştirme (concatenation)_ denir.

#### Bağlam içinde birleştirme

Birleştirmenin iş başında kullanılmasına bir göz atalım:

```html live-sample___string-concat
<button>Press me</button>
<div id="greeting"></div>
```

```js live-sample___string-concat
const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Burada, kullanıcıdan bir açılır iletişim kutusu (popup dialog box) aracılığıyla bir soruyu yanıtlamasını isteyen ve ardından girdiği metni verilen bir değişkenin — bu durumda `name` — içinde saklayan [`window.prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) fonksiyonunu kullanıyoruz. Ardından bu adı genel bir karşılama mesajının içine yerleştiren bir dize görüntülüyoruz.

#### "+" kullanarak birleştirme

`${}` yapısını normal dizelerle değil, yalnızca şablon değişmezleriyle kullanabilirsiniz. Normal dizeleri `+` operatörünü kullanarak birleştirebilirsiniz:

```js
const greeting2 = "Hello";
const name2 = "Bob";
console.log(greeting2 + ", " + name2); // "Hello, Bob"
```

Ancak şablon değişmezleri genellikle size daha okunabilir bir kod sağlar:

```js
const greeting3 = "Howdy";
const name3 = "Ramesh";
console.log(`${greeting3}, ${name3}`); // "Howdy, Ramesh"
```

#### Dizelere ifadeler dahil etmek

Şablon değişmezlerine yalnızca değişkenleri değil, JavaScript ifadelerini (expressions) de dahil edebilirsiniz ve sonuçlar sonuca dahil edilecektir:

```js
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."
```

### Çok satırlı dizeler

Şablon değişmezleri kaynak kodundaki satır sonlarına (line breaks) saygı duyar, bu nedenle birden çok satıra yayılan dizeleri şu şekilde yazabilirsiniz:

```js
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

Normal bir dize kullanarak eşdeğer çıktıyı elde etmek için dizeye satır sonu karakterleri (`\n`) eklemeniz gerekirdi:

```js
const newline2 = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline2);

/*
One day you finally knew
what you had to do, and began,
*/
```

Daha fazla örnek ve ileri düzey özelliklerin ayrıntıları için [Şablon değişmezleri (Template literals)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) başvuru sayfamıza bakın.

### Dizelere tırnak işaretleri dahil etmek

Dizelerin başlangıcını ve sonunu belirtmek için tırnak işaretleri kullandığımıza göre, dizelere gerçek tırnak işaretlerini nasıl dahil edebiliriz? Şunun çalışmayacağını biliyoruz:

```js-nolint example-bad
const badQuotes = "She said "I think so!"";
```

Yaygın bir seçenek, dizeyi bildirmek için diğer karakterlerden birini kullanmaktır:

```js-nolint
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
```

Bir diğer seçenek de sorunlu tırnak işaretini _kaçırmaktır (escape)_. Karakterleri kaçırmak, kodun bir parçası olarak değil metin olarak tanındıklarından emin olmak için onlara bir şey yapmamız anlamına gelir. JavaScript'te bunu karakterin hemen önüne bir ters eğik çizgi (backslash — `\`) koyarak yaparız. Şunu deneyin:

```js-nolint
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

Diğer özel karakterleri eklemek için de aynı tekniği kullanabilirsiniz. Daha fazla ayrıntı için [Kaçış dizileri (Escape sequences)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) bölümüne bakın.

### Sayılar ve dizeler karşılaştırması

Bir dize ile bir sayıyı birleştirmeye çalıştığımızda ne olur? Konsolumuzda deneyelim:

```js
const coolBandName = "Front ";
const number = 242;
console.log(coolBandName + number); // "Front 242"
```

Bunun bir hata döndürmesini bekleyebilirsiniz, ancak gayet güzel çalışır. Sayıların dizeler olarak nasıl görüntülenmesi gerektiği oldukça iyi tanımlanmıştır, bu nedenle tarayıcı sayıyı otomatik olarak bir dizeye dönüştürür ve iki dizeyi birleştirir.

Bir dizeye dönüştürmek istediğiniz sayısal bir değişkeniniz veya bir sayıya dönüştürmek istediğiniz bir dize değişkeniniz varsa, aşağıdaki iki yapıyı kullanabilirsiniz:

- [`Number()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) fonksiyonu, kendisine geçirilen her şeyi yapabiliyorsa bir sayıya dönüştürür. Aşağıdakini deneyin:

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  // number
  ```

- Tersine, [`String()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String) fonksiyonu argümanını bir dizeye dönüştürür. Şunu deneyin:

  ```js
  const myNum2 = 123;
  const myString2 = String(myNum2);
  console.log(typeof myString2);
  // string
  ```

Bu yapılar bazı durumlarda gerçekten çok kullanışlı olabilir. Örneğin, bir kullanıcı bir formun metin alanına bir sayı girerse bu bir dizedir. Ancak bu sayıyı bir şeye eklemek istiyorsanız onun bir sayı olmasına ihtiyacınız olacaktır; dolayısıyla bunu halletmek için onu `Number()` fonksiyonundan geçirebilirsiniz. [Sayı Tahmin Oyunumuzda](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html), `checkGuess` fonksiyonunda tam olarak bunu yapmıştık.

### Özet

Böylece JavaScript'te dizelerin en temel özelliklerini ele almış olduk. Bir sonraki makalede bunun üzerine inşa edecek, JavaScript'te dizeler için mevcut olan yerleşik metotlardan bazılarına ve dizelerimizi tam istediğimiz biçime sokmak üzere işlemek için bunları nasıl kullanabileceğimize bakacağız.

---

## 9. Kullanışlı Dize Metotları (Useful string methods)

**Kaynak:** [Useful string methods](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Useful_string_methods)

Artık dizelerin en temel özelliklerine baktığımıza göre, vitesi bir kademe yükseltelim ve yerleşik metotlarla (built-in methods) dizeler üzerinde ne gibi yararlı işlemler yapabileceğimizi düşünmeye başlayalım; örneğin bir metin dizesinin uzunluğunu bulmak, dizeleri birleştirmek ve bölmek, bir dizedeki bir karakteri başkasıyla değiştirmek ve daha fazlası.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış. <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings">Dize temelleri</a> bilgisi.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
          JavaScript'in içine yerleşik yaygın özellikleri (properties) ve metotları (methods) kullanarak dize işleme.
      </td>
    </tr>
  </tbody>
</table>

### Nesne olarak dizeler

JavaScript'te çoğu değer sanki birer nesneymiş (objects) gibi kullanılabilir. Örneğin şunu kullanarak bir dize oluşturduğunuzda:

```js
const string = "This is my string";
```

değişkenin kendisi bir nesne olmasa da, özelliklere erişirken bir nesne olarak kullanılabilmesi sayesinde kendisi için kullanılabilir çok sayıda özelliğe ve metoda sahiptir. [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) nesnesi sayfasına gider ve sayfanın yan tarafındaki listeye aşağı doğru bakarsanız bunu görebilirsiniz!

**Şimdi, beyniniz erimeye başlamadan önce endişelenmeyin!** Öğrenme yolculuğunuzun başlarında bunların çoğunu bilmenize gerçekten gerek yok. Ancak potansiyel olarak oldukça sık kullanacağınız ve burada inceleyeceğimiz birkaç tanesi vardır.

[Tarayıcı geliştirici konsoluna](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) bazı örnekler girelim.

### Bir dizenin uzunluğunu bulmak

Bu kolaydır — [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) özelliğini kullanırsınız. Aşağıdaki satırları girmeyi deneyin:

```js
const browserType = "mozilla";
browserType.length;
```

Bu, 7 sayısını döndürmelidir, çünkü "mozilla" 7 karakter uzunluğundadır. Bu pek çok nedenden dolayı kullanışlıdır; örneğin bir dizi adın uzunluklarını bulup bunları uzunluk sırasına göre görüntülemek isteyebilirsiniz ya da bir kullanıcının bir form alanına girdiği kullanıcı adı belirli bir uzunluğun üzerindeyse çok uzun olduğunu ona bildirmek isteyebilirsiniz.

### Belirli bir dize karakterini almak

Bununla bağlantılı olarak, **köşeli parantez gösterimini (square bracket notation)** kullanarak bir dizenin içindeki herhangi bir karakteri döndürebilirsiniz — bu, değişken adınızın sonuna köşeli parantezler (`[]`) eklediğiniz anlamına gelir. Köşeli parantezlerin içine döndürmek istediğiniz karakterin numarasını eklersiniz; örneğin ilk harfi almak için şunu yaparsınız:

```js
browserType[0];
```

Unutmayın: bilgisayarlar 1'den değil, 0'dan saymaya başlar!

_Herhangi_ bir dizenin son karakterini almak için, bu tekniği yukarıda baktığımız `length` özelliğiyle birleştirerek aşağıdaki satırı kullanabiliriz:

```js
browserType[browserType.length - 1];
```

"mozilla" dizesinin uzunluğu 7'dir, ancak sayım 0'dan başladığı için son karakterin konumu 6'dır; `length-1` kullanmak bize son karakteri verir.

### Bir dizenin bir alt dize içerip içermediğini test etmek

Bazen daha büyük bir dizenin içinde daha küçük bir dizenin bulunup bulunmadığını bulmak isteyeceksiniz (genellikle _bir dizenin içinde bir alt dizenin (substring) bulunup bulunmadığı_ deriz). Bu, tek bir [parametre (parameter)](https://developer.mozilla.org/en-US/docs/Glossary/Parameter) — aramak istediğiniz alt dizeyi — alan [`includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) metodu kullanılarak yapılabilir.

Dize alt dizeyi içeriyorsa `true`, aksi takdirde `false` döndürür.

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
```

Çoğu zaman bir dizenin belirli bir alt dizeyle başlayıp başlamadığını veya bitip bitmediğini bilmek isteyeceksiniz. Bu, kendisi için iki özel metot bulunacak kadar yaygın bir ihtiyaçtır: [`startsWith()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) ve [`endsWith()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith):

```js
const browserType = "mozilla";

if (browserType.startsWith("zilla")) {
  console.log("It starts with zilla!");
} else {
  console.log("It DOESN'T start with zilla!");
}
```

```js
const browserType = "mozilla";

if (browserType.endsWith("zilla")) {
  console.log("It ends with zilla!");
} else {
  console.log("It DOESN'T end with zilla!");
}
```

### Bir dizede bir alt dizenin konumunu bulmak

[`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) metodunu kullanarak daha büyük bir dizenin içindeki bir alt dizenin konumunu bulabilirsiniz. Bu metot iki [parametre (parameters)](https://developer.mozilla.org/en-US/docs/Glossary/Parameter) alır – aramak istediğiniz alt dize ve aramanın başlangıç noktasını belirten isteğe bağlı bir parametre.

Dize alt dizeyi içeriyorsa, `indexOf()` alt dizenin ilk geçtiği yerin dizinini (index) döndürür. Dize alt dizeyi içermiyorsa, `indexOf()` `-1` döndürür.

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

`0`'dan başlayarak dizenin başından itibaren (boşluklar dahil) karakter sayısını sayarsanız, `"developers"` alt dizesinin ilk geçtiği yer `20` dizinindedir.

```js
console.log(tagline.indexOf("x")); // -1
```

Öte yandan bu kod `-1` döndürür, çünkü `x` karakteri dizede mevcut değildir.

Artık bir alt dizenin ilk geçtiği yeri nasıl bulacağınızı bildiğinize göre, sonraki geçtiği yerleri nasıl bulursunuz? Bunu, metoda ikinci parametre olarak önceki geçtiği yerin dizininden daha büyük bir değer geçirerek yapabilirsiniz.

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

Burada metoda `21` dizininden (`firstOccurrence + 1`) başlayarak `"developers"` alt dizesini aramasını söylüyoruz ve o da `35` dizinini döndürüyor.

### Bir dizeden bir alt dize çıkarmak

[`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) metodunu kullanarak bir dizeden bir alt dize çıkarabilirsiniz. Ona şunları geçirirsiniz:

- çıkarmaya başlanacak dizin
- çıkarmanın durdurulacağı dizin. Bu hariç tutulur (exclusive), yani bu dizindeki karakter çıkarılan alt dizeye dahil edilmez.

Örneğin:

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

`1` dizinindeki karakter `"o"` ve 4 dizinindeki karakter `"l"`'dir. Böylece `"o"`'dan başlayıp `"l"`'nin hemen önünde biten tüm karakterleri çıkarırız ve bu da bize `"ozi"` verir.

Bir dizede belirli bir karakterden sonraki kalan tüm karakterleri çıkarmak istediğinizi biliyorsanız, ikinci parametreyi eklemeniz gerekmez. Bunun yerine, yalnızca dizedeki kalan karakterleri çıkarmak istediğiniz karakter konumunu eklemeniz yeterlidir. Aşağıdakini deneyin:

```js
browserType.slice(2); // "zilla"
```

Bu `"zilla"` döndürür — bunun nedeni 2 numaralı karakter konumunun `"z"` harfi olmasıdır ve ikinci bir parametre eklemediğiniz için döndürülen alt dize, dizedeki kalan tüm karakterler olmuştur.

> [!NOTE]
> `slice()` metodunun başka seçenekleri de vardır; başka neler öğrenebileceğinizi görmek için [`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) sayfasını inceleyin.

### Büyük/küçük harf durumunu değiştirmek

[`toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) ve [`toUpperCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) dize metotları bir dize alır ve tüm karakterleri sırasıyla küçük veya büyük harfe dönüştürür. Bu, örneğin kullanıcı tarafından girilen tüm verileri bir veritabanında saklamadan önce standartlaştırmak (normalize) istiyorsanız yararlı olabilir.

Ne olduğunu görmek için aşağıdaki satırları girmeyi deneyelim:

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

### Bir dizenin bölümlerini güncellemek

[`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) metodunu kullanarak bir dizenin içindeki bir alt dizeyi başka bir alt dizeyle değiştirebilirsiniz.

Bu örnekte iki parametre sağlıyoruz — değiştirmek istediğimiz dize ve onu kendisiyle değiştirmek istediğimiz dize:

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

Pek çok dize metodu gibi `replace()` metodunun da üzerinde çağrıldığı dizeyi değiştirmediğine, bunun yerine yeni bir dize döndürdüğüne dikkat edin. Orijinal `browserType` değişkenini güncellemek istiyorsanız şuna benzer bir şey yapmanız gerekir:

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

Ayrıca yeniden atama yaptığımız için artık `browserType` değişkenini `const` ile değil `let` kullanarak bildirmemiz gerektiğine de dikkat edin.

Bu biçimdeki `replace()` metodunun yalnızca alt dizenin ilk geçtiği yeri değiştirdiğini unutmayın. Tüm geçtiği yerleri değiştirmek istiyorsanız [`replaceAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) kullanabilirsiniz:

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

### Öğrenme görevleri

Bu bölümde, biraz dize işleme kodu yazma konusunda şansınızı denemenizi sağlayacağız. Aşağıdaki her alıştırmada bir dizeler dizimiz (array of strings) ve dizideki her değeri işleyip madde işaretli bir listede görüntüleyen bir döngümüz (loop) var. Şu anda dizileri veya döngüleri anlamanıza gerek yok — bunlar gelecek makalelerde açıklanacaktır. Her durumda yapmanız gereken tek şey, dizeleri istediğimiz biçimde çıktı olarak verecek kodu yazmaktır.

Canlı örneğin üst kısmındaki **"Play"** ("Çalıştır") düğmesini kullanarak her örneği MDN Playground içinde açın, ardından sorunu çözmek için talimatları izleyin. Takılırsanız, her durumda canlı örneğin altında çözümleri görüntüleyebilirsiniz.

Bir hata yaparsanız ve tekrar çalışmasını sağlayamazsanız kodu sıfırlamak için MDN Playground'daki "Reset" ("Sıfırla") düğmesini kullanabilirsiniz.

#### Kutlama mesajlarını filtrelemek

İlk alıştırmada sizi basit bir şeyle başlatacağız — bir tebrik kartı mesajları dizimiz var, ancak bunları yalnızca Noel (Christmas) mesajlarını listeleyecek şekilde ayıklamak istiyoruz. Her dizeyi test etmek ve yalnızca bir Noel mesajıysa listede yazdırmak için `if ()` yapısının içine bir koşullu test doldurmanızı istiyoruz.

Her durumda mesajın bir Noel mesajı olup olmadığını nasıl test edebileceğinizi düşünün. Tüm bu mesajlarda hangi dize mevcuttur ve mevcut olup olmadığını test etmek için hangi metodu kullanabilirsiniz?

```html hidden live-sample___string-methods-1
<ul></ul>
```

```js live-sample___string-methods-1
const list = document.querySelector("ul");
const greetings = [
  "Happy Birthday!",
  "Merry Christmas my love",
  "A happy Christmas to all the family",
  "You're all I want for Christmas",
  "Get well soon",
];

for (const greeting of greetings) {
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greeting) {
    const listItem = document.createElement("li");
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü göstermek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şu şekilde görünmelidir:

```js
const list = document.querySelector("ul");
const greetings = [
  "Happy Birthday!",
  "Merry Christmas my love",
  "A happy Christmas to all the family",
  "You're all I want for Christmas",
  "Get well soon",
];

for (const greeting of greetings) {
  if (greeting.includes("Christmas")) {
    const listItem = document.createElement("li");
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}
```

</details>

#### Büyük/küçük harf kullanımını düzeltmek

Bu alıştırmada Birleşik Krallık'taki şehirlerin adları yer almaktadır, ancak büyük/küçük harf kullanımı tamamen karışmış durumdadır. İlk harfin büyük olması dışında tamamı küçük harf olacak şekilde bunları değiştirmenizi istiyoruz. Bunu yapmanın iyi bir yolu şudur:

1. `city` değişkeninde bulunan dizenin tamamını küçük harfe dönüştürün ve yeni bir değişkende saklayın.
2. Bu yeni değişkendeki dizenin ilk harfini alın ve başka bir değişkende saklayın.
3. Bu son değişkeni bir alt dize olarak kullanarak, küçük harfli dizenin ilk harfini, küçük harfli dizenin büyük harfe dönüştürülmüş ilk harfiyle değiştirin. Bu değiştirme işleminin sonucunu başka bir yeni değişkende saklayın.
4. `result` değişkeninin değerini `city` değil, nihai sonuca eşit olacak şekilde değiştirin.

> [!NOTE]
> Bir ipucu — dize metotlarının parametreleri dize değişmezleri (string literals) olmak zorunda değildir; değişkenler ve hatta üzerinde bir metot çağrılan değişkenler de olabilirler.

```html hidden live-sample___string-methods-2
<ul></ul>
```

```js live-sample___string-methods-2
const list = document.querySelector("ul");
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  // write your code just below here

  const result = city;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü göstermek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şu şekilde görünmelidir:

```js
const list = document.querySelector("ul");
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  const lower = city.toLowerCase();
  const firstLetter = lower.slice(0, 1);
  const capitalized = lower.replace(firstLetter, firstLetter.toUpperCase());
  const result = capitalized;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

</details>

#### Eski parçalardan yeni dizeler oluşturmak

Bu son alıştırmada dizi, İngiltere'nin kuzeyindeki tren istasyonları hakkında bilgi içeren dizeler barındırmaktadır. Dizeler; üç harfli istasyon kodunu, ardından makine tarafından okunabilen bazı verileri, ardından bir noktalı virgülü ve ardından insan tarafından okunabilen istasyon adını içeren veri öğeleridir. Örneğin:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

İstasyon kodunu ve adını çıkarmak ve bunları aşağıdaki yapıya sahip bir dizede bir araya getirmek istiyoruz:

```plain
MAN: Manchester Piccadilly
```

Bunu şu şekilde yapmanızı öneririz:

1. Üç harfli istasyon kodunu çıkarın ve yeni bir değişkende saklayın.
2. Noktalı virgülün karakter dizin (index) numarasını bulun.
3. Noktalı virgül karakter dizin numarasını referans noktası olarak kullanarak insan tarafından okunabilen istasyon adını çıkarın ve yeni bir değişkende saklayın.
4. Nihai dizeyi oluşturmak için iki yeni değişkeni ve bir dize değişmezini birleştirin (concatenate).
5. `result` değişkeninin değerini `station` değil, nihai dize olacak şekilde değiştirin.

```html hidden live-sample___string-methods-3
<ul></ul>
```

```js live-sample___string-methods-3
const list = document.querySelector("ul");
const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
  // write your code just below here

  const result = station;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü göstermek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şu şekilde görünmelidir:

```js
const list = document.querySelector("ul");
const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
  const code = station.slice(0, 3);
  const semiColonIndex = station.indexOf(";");
  const name = station.slice(semiColonIndex + 1);
  const result = `${code}: ${name}`;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

</details>

### Özet

Programlamada kelimelerle ve cümlelerle başa çıkabilmenin çok önemli olduğu gerçeğinden kaçamazsınız — özellikle de web siteleri tamamen insanlarla iletişim kurmakla ilgili olduğundan JavaScript'te. Bu makale size dizeleri işlemek hakkında şimdilik bilmeniz gereken temelleri verdi. Bu bilgiler, gelecekte daha karmaşık konulara geçerken çok işinize yarayacaktır.

Bir sonraki makalede, dizeler ve dize metotları hakkında sağladığımız bilgileri ne kadar iyi anladığınızı ve aklınızda tuttuğunuzu kontrol etmek için kullanabileceğiniz bazı testler vereceğiz.

---

## 10. Becerilerinizi Test Edin: Dizeler (Test your skills: Strings)

**Kaynak:** [Test your skills: Strings](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Strings)

Bu beceri testinin amacı, [Metinlerle çalışmak — JavaScript'te dizeler](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings) ve [Kullanışlı dize metotları](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Useful_string_methods) makalelerimizi anlayıp anlamadığınızı değerlendirmenize yardımcı olmaktır.

> [!NOTE]
> Yardım almak için [Becerilerinizi test edin](https://developer.mozilla.org/en-US/docs/Learn_web_development#test_your_skills) kullanım kılavuzumuzu okuyun. Ayrıca [iletişim kanallarımızdan](https://developer.mozilla.org/en-US/docs/MDN/Community/Communication_channels) birini kullanarak da bize ulaşabilirsiniz.

### Dizeler 1

İlk dizeler (strings) görevimizde küçükten başlıyoruz. `quoteStart` adlı bir değişkenin içinde ünlü bir alıntının yarısına zaten sahipsiniz ve onu tamamlamanızı istiyoruz.

Görevi tamamlamak için:

1. Alıntının diğer yarısını araştırıp bulun ve `quoteEnd` adlı bir değişkenin içinde örneğe ekleyin.
2. Alıntının tamamını içeren tek bir dize oluşturmak için iki dizeyi birbirine birleştirin (concatenate). Sonucu `finalQuote` adlı bir değişkenin içine kaydedin.
3. Bu noktada bir hata aldığınızı göreceksiniz. Alıntının tamamının doğru şekilde görüntülenmesi için `quoteStart` ile ilgili sorunu düzeltebilir misiniz?

<!-- Code shared across examples -->

```html hidden live-sample___strings-1 live-sample___strings-2 live-sample___strings-3 live-sample___strings-4 live-sample___strings-1-finish live-sample___strings-2-finish live-sample___strings-3-finish live-sample___strings-4-finish
<section></section>
```

```css hidden live-sample___strings-1 live-sample___strings-2 live-sample___strings-3 live-sample___strings-4 live-sample___strings-1-finish live-sample___strings-2-finish live-sample___strings-3-finish live-sample___strings-4-finish
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js-nolint live-sample___strings-1
const quoteStart = 'Don't judge each day by the harvest you reap ';

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js-nolint
// You need to escape the quote
const quoteStart = 'Don\'t judge each day by the harvest you reap ';

const quoteEnd = "but by the seeds that you plant.";

const finalQuote = `${quoteStart}${quoteEnd}`;

// Don't edit the code below here!
// ...
```

```js hidden live-sample___strings-1-finish
const quoteStart = "Don't judge each day by the harvest you reap ";

const quoteEnd = "but by the seeds that you plant.";

const finalQuote = `${quoteStart}${quoteEnd}`;

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);
```

</details>

### Dizeler 2

Bu görevde size iki dize içeren `quote` ve `substring` adlı iki değişken verilmektedir.

Görevi tamamlamak için:

1. Alıntının uzunluğunu alın ve `quoteLength` adlı bir değişkende saklayın.
2. `substring` değerinin `quote` içinde göründüğü dizin (index) konumunu bulun ve bu değeri `index` adlı bir değişkende saklayın.
3. Sahip olduğunuz değişkenlerin ve mevcut dize özelliklerinin/metotlarının bir kombinasyonunu kullanarak orijinal alıntıyı "I do not like green eggs and ham." şeklinde kırpın ve bunu `revisedQuote` adlı bir değişkende saklayın.

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___strings-2
const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
section.innerHTML = " ";
const para1 = document.createElement("p");
para1.textContent = `The quote is ${quoteLength} characters long.`;
const para2 = document.createElement("p");
para2.textContent = revisedQuote;
section.appendChild(para1);
section.appendChild(para2);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

const quoteLength = quote.length;
const index = quote.indexOf(substring);
const revisedQuote = quote.slice(0, index + substring.length + 1);

// Don't edit the code below here!
// ...
```

```js hidden live-sample___strings-2-finish
const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";

const quoteLength = quote.length;
const index = quote.indexOf(substring);
const revisedQuote = quote.slice(0, index + substring.length + 1);

const section = document.querySelector("section");
section.innerHTML = " ";
const para1 = document.createElement("p");
para1.textContent = `The quote is ${quoteLength} characters long.`;
const para2 = document.createElement("p");
para2.textContent = revisedQuote;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

### Dizeler 3

Sonraki dize görevinde, önceki görevin sonunda elde ettiğiniz aynı alıntı size verilmektedir, ancak biraz bozulmuş durumdadır! Onu düzeltmenizi ve güncellemenizi istiyoruz.

Görevi tamamlamak için:

1. Büyük/küçük harf kullanımını doğru tümce düzenine (ilk harfin büyük olması dışında tamamı küçük harf) değiştirin. Yeni alıntıyı `fixedQuote` adlı bir değişkende saklayın.
2. `fixedQuote` içinde, "green eggs and ham" ifadesini gerçekten sevmediğiniz başka bir yiyecekle değiştirin.
3. Yapılması gereken küçük bir düzeltme daha var — alıntının sonuna bir nokta ekleyin ve son sürümü `finalQuote` adlı bir değişkende kaydedin.

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___strings-3
const quote = "I dO nOT lIke gREen eGgS anD HAM";

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

let fixedQuote = quote.toLowerCase();
const firstLetter = fixedQuote.slice(0, 1);
fixedQuote = fixedQuote.replace(firstLetter, firstLetter.toUpperCase());
fixedQuote = fixedQuote.replace("green eggs and ham", "pickled onions");
const finalQuote = `${fixedQuote}.`;

// Don't edit the code below here!
// ...
```

```js hidden live-sample___strings-3-finish
const quote = "I dO nOT lIke gREen eGgS anD HAM";

let fixedQuote = quote.toLowerCase();
const firstLetter = fixedQuote.slice(0, 1);
fixedQuote = fixedQuote.replace(firstLetter, firstLetter.toUpperCase());
fixedQuote = fixedQuote.replace("green eggs and ham", "pickled onions");
const finalQuote = `${fixedQuote}.`;

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);
```

</details>

### Dizeler 4

Son dize görevinde size bir teoremin adını, iki sayısal değeri ve tamamlanmamış bir dizeyi (eklenmesi gereken kısımlar yıldız işaretleriyle (`*`) işaretlenmiştir) verdik. Dizenin değerini değiştirmenizi istiyoruz.

Görevi tamamlamak için:

1. Dizeyi normal bir dize değişmezinden (string literal) bir şablon değişmezine (template literal) dönüştürün.
2. Dört yıldız işaretini dört adet şablon değişmezi gömülü ifadesiyle (embedded expressions) değiştirin. Bunlar şunlar olmalıdır:
   1. Teoremin adı.
   2. Sahip olduğumuz iki sayı değeri.
   3. Diğer iki kenar uzunluğunun sahip olduğumuz iki değerle aynı olduğunu varsayarak, bir dik üçgenin hipotenüsünün uzunluğu. Elimizdekilerden bunu nasıl hesaplayacağınızı araştırmanız gerekecektir. Hesaplamayı yer tutucunun (placeholder) içinde yapın.

Görevin başlangıç noktası şu şekilde görünür:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___strings-4
const theorem = "Pythagorean theorem";

const a = 5;
const b = 8;

// Don't edit the code above here!

// Edit the string literal
const myString =
  "Using *, we can work out that if the two shortest sides of a right-angled triangle have lengths of * and *, the length of the hypotenuse is *.";

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

const myString = `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b},
  the length of the hypotenuse is ${Math.sqrt(a ** 2 + b ** 2)}.`;

// Don't edit the code below here!
// ...
```

```js hidden live-sample___strings-4-finish
const theorem = "Pythagorean theorem";

const a = 5;
const b = 8;

const myString = `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b},
  the length of the hypotenuse is ${Math.sqrt(a ** 2 + b ** 2)}.`;

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);
```

</details>

---

## 11. Diziler (Arrays)

**Kaynak:** [Arrays](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays)

Bu derste dizilere (arrays) — bir veri öğeleri listesini tek bir değişken adı altında saklamanın düzenli bir yoluna — bakacağız. Burada bunun neden yararlı olduğuna bakacak, ardından bir [dizi (`Array`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) oluşturmayı, bir dizide saklanan öğeleri almayı, eklemeyi ve kaldırmayı ve daha fazlasını keşfedeceğiz.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış; önceki derslerde ele alındığı şekliyle sayılar ve dizeler gibi temel veri türlerine aşinalık.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Dizinin ne olduğu — bir değişkenler listesini tutan bir yapı.</li>
          <li>Dizilerin sözdizimi — <code>[a, b, c]</code> ve erişimci (accessor) sözdizimi, <code>myArray[x]</code>.</li>
          <li><code>myArray[x] = y</code> ile dizi değerlerini değiştirmek.</li>
          <li><code>length</code>, <code>push()</code>, <code>pop()</code>, <code>join()</code> ve <code>split()</code> gibi yaygın özellikler ve metotlar kullanarak dizi işleme.</li>
          <li><code>forEach()</code>, <code>map()</code> ve <code>filter()</code> gibi gelişmiş dizi metotları.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Dizi nedir?

Diziler (arrays) genellikle "liste benzeri nesneler" olarak tanımlanır; temelde bir listede saklanan birden çok değeri içeren tekil nesnelerdir. Dizi nesneleri değişkenlerde saklanabilir ve diğer herhangi bir değer türüyle hemen hemen aynı şekilde ele alınabilir; aradaki fark, listenin içindeki her değere ayrı ayrı erişebilmemiz ve listeyle üzerinde döngü kurup her değere aynı şeyi yapmak gibi son derece yararlı ve verimli işler yapabilmemizdir. Belki bir dizide saklanan bir dizi ürün öğemiz ve bunların fiyatları vardır ve hepsinin üzerinde döngü kurup bunları bir faturaya yazdırmak, bu sırada tüm fiyatları toplayıp toplam fiyatı en alta yazdırmak istiyoruzdur.

Dizilerimiz olmasaydı her öğeyi ayrı bir değişkende saklamamız, ardından yazdırma ve toplama işlemini yapan kodu her öğe için ayrı ayrı çağırmamız gerekirdi. Bunu yazmak çok daha uzun sürer, daha az verimli ve hataya daha açık olurdu. Faturaya eklenecek 10 öğemiz olsaydı bu zaten sinir bozucu olurdu; peki ya 100 öğe veya 1000 öğe olsaydı? Makalenin ilerleyen kısımlarında bu örneğe geri döneceğiz.

Önceki makalelerde olduğu gibi, [tarayıcı geliştirici konsoluna](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) bazı örnekler girerek dizilerin gerçek temellerini öğrenelim.

> [!NOTE]
> Scrimba'nın [Ek bilgi: Dizilere giriş (Aside: Intro to arrays)](https://scrimba.com/the-frontend-developer-career-path-c0j/~06e?via=mdn) etkileşimli dersi (scrim) <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, örnek incelemeleri ve bilginizi test edecek bir görevle dizilere yararlı ve etkileşimli bir giriş sunar.

### Diziler oluşturmak

Diziler köşeli parantezlerden ve virgüllerle ayrılmış öğelerden oluşur.

1. Bir alışveriş listesini bir dizide saklamak istediğimizi varsayalım. Aşağıdaki kodu konsola yapıştırın:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. Yukarıdaki örnekte her öğe bir dizedir, ancak bir dizide çeşitli veri türlerini — dizeleri, sayıları, nesneleri ve hatta diğer dizileri — saklayabiliriz. Ayrıca tek bir dizide veri türlerini karıştırabiliriz de — kendimizi bir dizide yalnızca sayıları, başka bir dizide ise yalnızca dizeleri saklamakla sınırlamak zorunda değiliz. Örneğin:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Devam etmeden önce birkaç örnek dizi oluşturun.

### Bir dizinin uzunluğunu bulmak

Bir dizinin uzunluğunu (içinde kaç öğe olduğunu), bir dizenin (karakter cinsinden) uzunluğunu bulduğunuzla tamamen aynı şekilde — [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) özelliğini kullanarak — öğrenebilirsiniz. Aşağıdakini deneyin:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

### Dizi öğelerine erişmek ve onları değiştirmek

Diziler [dizinlenmiş koleksiyonlardır (indexed collections)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections). Bir dizideki öğeler sıfırdan başlayarak numaralandırılır. Bu numaraya öğenin _dizini (index)_ denir. Dolayısıyla ilk öğenin dizini 0, ikincisinin dizini 1 ve bu şekilde devam eder. [Bir dizedeki harflere eriştiğiniz](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character) aynı şekilde, köşeli parantez gösterimini kullanarak ve öğenin dizinini sağlayarak dizideki tekil öğelere erişebilirsiniz.

1. Konsolunuza aşağıdakini girin:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping[0]);
   // returns "bread"
   ```

2. Ayrıca tek bir dizi öğesine yeni bir değer vererek dizideki bir öğeyi değiştirebilirsiniz. Şunu deneyin:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping[0] = "tahini";
   console.log(shopping);
   // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > [!NOTE]
   > Daha önce de söylemiştik ama yalnızca bir hatırlatma olarak — JavaScript dizileri sıfırdan başlayarak dizinler!

3. Bir dizinin içindeki bir diziye çok boyutlu dizi (multidimensional array) dendiğini unutmayın. Kendisi de başka bir dizinin içinde olan bir dizinin içindeki bir öğeye, iki köşeli parantez kümesini birbirine zincirleyerek erişebilirsiniz. Örneğin, `random` dizisinin içindeki üçüncü öğe olan dizinin içindeki öğelerden birine erişmek için (önceki bölüme bakın), şuna benzer bir şey yapabiliriz:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Devam etmeden önce dizi örneklerinizde birkaç değişiklik daha yapmayı deneyin. Biraz kurcalayın ve neyin çalışıp neyin çalışmadığını görün.

### Bir dizideki öğelerin dizinini bulmak

Bir öğenin dizinini bilmiyorsanız [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) metodunu kullanabilirsiniz.
`indexOf()` metodu argüman olarak bir öğe alır ve ya öğenin dizinini ya da öğe dizide yoksa `-1` değerini döndürür:

```js
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
```

### Öğe eklemek

Bir dizinin sonuna bir veya daha fazla öğe eklemek için [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) metodunu kullanabiliriz. Dizinizin sonuna eklemek istediğiniz bir veya daha fazla öğeyi parantez içine dahil etmeniz gerektiğini unutmayın.

```js
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]
```

Metot çağrısı tamamlandığında dizinin yeni uzunluğu döndürülür. Yeni dizi uzunluğunu bir değişkende saklamak isteseydiniz şuna benzer bir şey yapabilirdiniz:

```js
const cities = ["Manchester", "Liverpool"];
const newLength = cities.push("Bristol");
console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength); // 3
```

Dizinin başına bir öğe eklemek için [`unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) kullanın:

```js
const cities = ["Manchester", "Liverpool"];
cities.unshift("Edinburgh");
console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]
```

### Öğe kaldırmak

Diziden son öğeyi kaldırmak için [`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) kullanın.

```js
const cities = ["Manchester", "Liverpool"];
cities.pop();
console.log(cities); // [ "Manchester" ]
```

`pop()` metodu kaldırılan öğeyi döndürür. O öğeyi yeni bir değişkende kaydetmek için şunu yapabilirsiniz:

```js
const cities = ["Manchester", "Liverpool"];
const removedCity = cities.pop();
console.log(removedCity); // "Liverpool"
```

Bir diziden ilk öğeyi kaldırmak için [`shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) kullanın:

```js
const cities = ["Manchester", "Liverpool"];
cities.shift();
console.log(cities); // [ "Liverpool" ]
```

Bir öğenin dizinini biliyorsanız [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) kullanarak onu diziden kaldırabilirsiniz:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]
```

Bu `splice()` çağrısında, ilk argüman öğeleri kaldırmaya nereden başlanacağını, ikinci argüman ise kaç öğenin kaldırılması gerektiğini söyler. Dolayısıyla birden fazla öğeyi kaldırabilirsiniz:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]
```

### Her öğeye erişmek

Çok sık olarak dizideki her öğeye erişmek isteyeceksiniz. Bunu [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) deyimini kullanarak yapabilirsiniz:

```js
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
```

Bazen bir dizideki her öğeye aynı şeyi yapmak ve geriye değiştirilmiş öğeleri içeren bir dizi bırakmak isteyeceksiniz. Bunu [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) kullanarak yapabilirsiniz. Aşağıdaki kod bir sayılar dizisi alır ve her sayıyı iki katına çıkarır:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

`map()` metoduna bir fonksiyon veririz ve `map()` dizideki her öğe için öğeyi içine geçirerek fonksiyonu bir kez çağırır. Ardından her fonksiyon çağrısından gelen dönüş değerini yeni bir diziye ekler ve son olarak yeni diziyi döndürür.

Bazen yalnızca orijinal dizideki belirli bir testi geçen öğeleri içeren yeni bir dizi oluşturmak isteyeceksiniz. Bunu [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) kullanarak yapabilirsiniz. Aşağıdaki kod bir dizeler dizisi alır ve yalnızca 8 karakterden daha uzun olan dizeleri içeren bir dizi döndürür:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

`map()` metodunda olduğu gibi, `filter()` metoduna bir fonksiyon veririz ve `filter()` dizideki her öğe için öğeyi içine geçirerek bu fonksiyonu çağırır. Fonksiyon `true` döndürürse öğe yeni bir diziye eklenir. Son olarak yeni diziyi döndürür.

### Dizeler ve diziler arasında dönüştürme

Çoğu zaman karşınıza büyük ve uzun bir dizenin içinde yer alan bazı ham veriler çıkacaktır ve yararlı öğeleri daha kullanışlı bir biçime ayırmak, ardından onlara bir veri tablosunda görüntülemek gibi işlemler yapmak isteyebilirsiniz. Bunu yapmak için [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) metodunu kullanabiliriz. En basit biçimiyle bu metot tek bir parametre — dizeyi kendisinden ayırmak istediğiniz karakteri — alır ve ayırıcının arasındaki alt dizeleri bir dizideki öğeler olarak döndürür.

> [!NOTE]
> Tamam, bu teknik olarak bir dizi metodu değil bir dize metodudur, ancak buraya çok iyi uyduğu için onu dizilerle birlikte koyduk.

1. Nasıl çalıştığını görmek için bununla biraz oynayalım. Önce konsolunuzda bir dize oluşturun:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Şimdi onu her virgülden bölelim:

   ```js
   const cities = data.split(",");
   cities;
   ```

3. Son olarak, yeni dizinizin uzunluğunu bulmayı ve ondan bazı öğeleri almayı deneyin:

   ```js
   cities.length;
   cities[0]; // the first item in the array
   cities[1]; // the second item in the array
   cities[cities.length - 1]; // the last item in the array
   ```

4. [`join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) metodunu kullanarak tam tersi yönde de gidebilirsiniz. Aşağıdakini deneyin:

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. Bir diziyi dizeye dönüştürmenin bir başka yolu da [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) metodunu kullanmaktır. `toString()` bir parametre almadığı için tartışmasız `join()` metodundan daha basittir, ancak daha sınırlayıcıdır. `join()` ile farklı ayırıcılar belirtebilirsiniz, oysa `toString()` her zaman virgül kullanır. (4. Adımı virgülden farklı bir karakterle çalıştırmayı deneyin.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

### Ürünleri yazdırmak

Sıra sizde. Bu alıştırmada daha önce açıkladığımız örneğe geri döneceksiniz — bir faturaya ürün adlarını ve fiyatlarını yazdırmak, ardından fiyatları toplayıp en alta yazdırmak. Bunu yapacak mantığı uygulamak için aşağıdaki adımları izleyin.

1. Örneği MDN Playground'da düzenlemek için aşağıdaki kod bloğunda **"Play"** ("Çalıştır") düğmesine tıklayın.
2. `// Part 1` yorumunun altında, her biri iki nokta üst üste ile ayrılmış bir ürün adı ve fiyat içeren bir dizi dize bulunmaktadır. Bunları yorum satırı olmaktan çıkarmanızı (uncomment) ve `products` adlı bir diziye dönüştürmenizi istiyoruz.
3. `// Part 2` yorumunun altında, `products` dizisindeki her öğenin üzerinden geçmek için bir `for...of()` döngüsü başlatın.
4. `// Part 3` yorumunun altında, geçerli dizi öğesini (`name:price`) biri adı, diğeri fiyatı içeren iki ayrı öğeye bölen bir kod satırı yazmanızı istiyoruz. Bunu nasıl yapacağınızdan emin değilseniz biraz yardım için [Kullanışlı dize metotları](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Useful_string_methods) makalesine danışın ya da daha iyisi bu makalenin [Dizeler ve diziler arasında dönüştürme](#dizeler-ve-diziler-arasında-dönüştürme) bölümüne bakın.
5. Yukarıdaki kod satırının bir parçası olarak, fiyatı bir dizeden bir sayıya dönüştürmek de isteyeceksiniz. Bunu nasıl yapacağınızı hatırlayamıyorsanız [ilk dizeler makalesine](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings) göz atın.
6. Kodun en üstünde oluşturulan ve `0` değeri verilen `total` adlı bir değişken vardır. Döngünün içinde (`// Part 4` altında), kodun sonunda faturaya doğru toplamın yazdırılması için döngünün her yinelemesinde (iteration) geçerli öğe fiyatını bu toplama ekleyen bir satır eklemenizi istiyoruz. Bunu yapmak için bir [atama operatörüne](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math#assignment_operators) ihtiyacınız olabilir.
7. Her öğe için doğru bilgilerin faturaya yazdırılması amacıyla, `// Part 5` sonrasındaki satırı `itemText` değişkeni her durumda "geçerli öğe adı — $geçerli öğe fiyatı" (örneğin "Shoes — $23.99") değerine eşit olacak şekilde değiştirmenizi istiyoruz. Bu, şimdiye kadar öğrenme materyalini takip ettiyseniz size tanıdık gelmesi gereken temel dize birleştirmedir (string concatenation).
8. Son olarak, `// Part 6` yorumunun altına `for...of()` döngüsünün sonunu işaretlemek için bir `}` eklemeniz gerekecektir.

Bir hata yaparsanız MDN Playground'daki _Reset_ ("Sıfırla") düğmesini kullanarak çalışmanızı temizleyebilirsiniz. Gerçekten takılırsanız canlı çıktının altında çözümü görüntüleyebilirsiniz.

```html hidden live-sample___arrays-1
<h2>Live output</h2>

<div class="output">
  <ul></ul>

  <p></p>
</div>
```

```css hidden live-sample___arrays-1
.output {
  min-height: 100px;
}
```

```js live-sample___arrays-1
const list = document.querySelector(".output ul");
const totalBox = document.querySelector(".output p");
let total = 0;
list.textContent = "";
totalBox.textContent = "";
// Part 1
// "Underpants:6.99",
// "Socks:5.99",
// "T-shirt:14.99",
// "Trousers:31.99",
// "Shoes:23.99",

// Part 2

// Part 3

// Part 4

// Part 5
let itemText = 0;

const listItem = document.createElement("li");
listItem.textContent = itemText;
list.appendChild(listItem);

// Part 6

totalBox.textContent = `Total: $${total.toFixed(2)}`;
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şu şekilde görünmelidir:

```js
const list = document.querySelector(".output ul");
const totalBox = document.querySelector(".output p");
let total = 0;
list.textContent = "";
totalBox.textContent = "";

const products = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];

for (const product of products) {
  const subArray = product.split(":");
  const name = subArray[0];
  const price = Number(subArray[1]);
  total += price;
  const itemText = `${name} — $${price}`;

  const listItem = document.createElement("li");
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = `Total: $${total.toFixed(2)}`;
```

</details>

### Önceki 5 aramayı saklamak

Pratiğin akmaya devam etmesi için bir alıştırma daha tamamlamanızı sağlayalım.

[`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) ve [`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) gibi dizi metotları için iyi bir kullanım alanı, bir web uygulamasında o anda etkin olan öğelerin kaydını tuttuğunuz zamandır. Örneğin hareketli bir sahnede, o anda görüntülenen arka plan grafiklerini temsil eden bir nesneler diziniz olabilir ve performans veya kalabalık nedenleriyle aynı anda yalnızca 50 tanesinin görüntülenmesini isteyebilirsiniz. Yeni nesneler oluşturulup diziye eklendikçe, istenen sayıyı korumak için daha eski olanlar diziden silinebilir.

Bu örnekte çok daha basit bir kullanım göstereceğiz — burada size bir arama kutusu olan sahte bir arama sitesi veriyoruz. Fikir şu ki, arama kutusuna terimler girildiğinde önceki en üst 5 arama terimi listede görüntülenir. Terim sayısı 5'i aştığında, en üste her yeni terim eklendiğinde son terim silinmeye başlar; böylece her zaman önceki 5 terim görüntülenir.

> [!NOTE]
> Gerçek bir arama uygulamasında muhtemelen önceki aramalara dönmek için önceki arama terimlerine tıklayabilirdiniz ve uygulama gerçek arama sonuçlarını görüntülerdi! Şimdilik işleri yalnızca basit tutuyoruz.

Örneği tamamlamak için şunları yapmanızı istiyoruz:

1. Örneği MDN Playground'da düzenlemek için aşağıdaki kod bloğunda **"Play"** ("Çalıştır") düğmesine tıklayın.
2. `// Part 1` yorumunun altına, arama girdisine girilen geçerli değeri dizinin başına ekleyen bir satır ekleyin. Bu değer `searchInput.value` kullanılarak alınabilir.
3. `// Part 2` yorumunun altına, o anda dizinin sonunda bulunan değeri kaldıran bir satır ekleyin.

Bir hata yaparsanız MDN Playground'daki _Reset_ ("Sıfırla") düğmesini kullanarak çalışmanızı temizleyebilirsiniz. Gerçekten takılırsanız canlı çıktının altında çözümü görüntüleyebilirsiniz.

```html hidden live-sample___arrays-2
<div class="output">
  <label for="search-box">Enter a search term: </label>
  <input id="search-box" type="search" />
  <button>Search</button>

  <ul></ul>
</div>
```

```css hidden live-sample___arrays-2
.output {
  margin: 1rem;
}
```

```js live-sample___arrays-2
const list = document.querySelector(".output ul");
const searchInput = document.querySelector(".output input");
const searchBtn = document.querySelector(".output button");

list.textContent = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.addEventListener("click", () => {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== "") {
    // Part 1

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.textContent = "";

    // loop through the array, and display all the search terms in the list
    for (const itemText of myHistory) {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= MAX_HISTORY) {
      // Part 2
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = "";
    searchInput.focus();
  }
});
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şu şekilde görünmelidir:

```js
const list = document.querySelector(".output ul");
const searchInput = document.querySelector(".output input");
const searchBtn = document.querySelector(".output button");

list.textContent = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.addEventListener("click", () => {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== "") {
    myHistory.unshift(searchInput.value);

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.textContent = "";

    // loop through the array, and display all the search terms in the list
    for (const itemText of myHistory) {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= MAX_HISTORY) {
      myHistory.pop();
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = "";
    searchInput.focus();
  }
});
```

</details>

### Özet

Bu makaleyi baştan sona okuduktan sonra, dizilerin son derece kullanışlı göründüğüne katılacağınızdan eminiz; JavaScript'te her yerde, çoğu zaman bir dizideki her öğeye aynı şeyi yapmak amacıyla döngülerle (loops) birlikte karşınıza çıktıklarını göreceksiniz. Modülün ilerleyen kısımlarında size döngüler hakkında her şeyi öğreteceğiz.

Bir sonraki makalede, diziler hakkında sağladığımız bilgileri ne kadar iyi anladığınızı ve aklınızda tuttuğunuzu kontrol etmek için kullanabileceğiniz bazı testler vereceğiz.

### Ayrıca bakınız

- [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array): `Array` nesnesi başvuru sayfası, bu sayfada tartışılan özelliklere ve diğer pek çok `Array` özelliğine dair ayrıntılı bir başvuru kılavuzu sağlar.

---

## 12. Becerilerinizi Test Edin: Diziler (Test your skills: Arrays)

**Kaynak:** [Test your skills: Arrays](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Arrays)

Bu beceri testinin amacı, [Diziler (Arrays)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays) makalemizi anlayıp anlamadığınızı değerlendirmenize yardımcı olmaktır.

> [!NOTE]
> Yardım almak için [Becerilerinizi test edin](https://developer.mozilla.org/en-US/docs/Learn_web_development#test_your_skills) kullanım kılavuzumuzu okuyun. Ayrıca [iletişim kanallarımızdan](https://developer.mozilla.org/en-US/docs/MDN/Community/Communication_channels) birini kullanarak da bize ulaşabilirsiniz.

### Etkileşimli görev

Her şeyden önce size, [öğrenme ortağımız](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds) [Scrimba](https://scrimba.com/home) tarafından oluşturulan eğlenceli, etkileşimli bir diziler görevi veriyoruz.

Gömülü etkileşimli dersi (scrim) izleyin ve talimatları izleyip kodu düzenleyerek zaman çizelgesindeki (küçük hayalet simgesi) görevi tamamlayın. İşiniz bittiğinde, eğitmenin çözümünün sizinkiyle nasıl eşleştiğini kontrol etmek için dersi izlemeye devam edebilirsiniz.

<mdn-scrim-inline url="https://scrimba.com/learn-javascript-c0v/~05e" scrimtitle="Render images from an array" survey="true"></scrim-inline>

> [!NOTE]
> Kurs boyunca henüz açıkça ele almadığınız JavaScript özelliklerine dayandığı göz önüne alındığında, bu görev biraz sınırları zorlayan bir hedeftir. Elinizden gelenin en iyisini yapın ve emin olmadığınız her şey hakkında çevrim içi bilgi arayın.

### Diziler 1

Bu görev size bazı temel dizi pratikleri sunar:

1. Üç öğeden oluşan bir dizi oluşturun ve onu `myArray` adlı bir değişkende saklayın. Öğeler istediğiniz herhangi bir şey olabilir — en sevdiğiniz yiyeceklere veya müzik gruplarına ne dersiniz?
2. Ardından, köşeli parantez gösterimini ve atamayı kullanarak dizideki ilk iki öğeyi değiştirin.
3. Son olarak, dizinin başına yeni bir öğe ekleyin.

<!-- Code shared across examples -->

```html hidden live-sample___arrays-1 live-sample___arrays-2 live-sample___arrays-3 live-sample___arrays-4 live-sample___arrays-1-finish live-sample___arrays-2-finish live-sample___arrays-3-finish live-sample___arrays-4-finish
<section></section>
```

```css hidden live-sample___arrays-1 live-sample___arrays-2 live-sample___arrays-3 live-sample___arrays-4 live-sample___arrays-1-finish live-sample___arrays-2-finish live-sample___arrays-3-finish live-sample___arrays-4-finish
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___arrays-1
// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
section.appendChild(para1);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
const myArray = ["cats", "dogs", "chickens"];

myArray[0] = "horses";
myArray[1] = "pigs";

myArray.unshift("crocodiles");

// Don't edit the code below here!
// ...
```

```js hidden live-sample___arrays-1-finish
const myArray = ["cats", "dogs", "chickens"];

myArray[0] = "horses";
myArray[1] = "pigs";

myArray.unshift("crocodiles");

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
section.appendChild(para1);
```

</details>

### Diziler 2

Şimdi başka bir göreve geçelim. Burada size üzerinde çalışmanız için bir dize verilmektedir.

Görevi tamamlamak için:

1. Bu süreçte `+` karakterlerini kaldırarak dizeyi bir diziye dönüştürün. Sonucu `myArray` adlı bir değişkende kaydedin.
2. Dizinin uzunluğunu `arrayLength` adlı bir değişkende saklayın.
3. Dizideki son öğeyi `lastItem` adlı bir değişkende saklayın.

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___arrays-2
const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
const para2 = document.createElement("p");
para2.textContent = `The length of the array is ${arrayLength}.`;
const para3 = document.createElement("p");
para3.textContent = `The last item in the array is "${lastItem}".`;
section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

let myArray = myString.split("+");

let arrayLength = myArray.length;

let lastItem = myArray[arrayLength - 1];

// Don't edit the code below here!
// ...
```

```js hidden live-sample___arrays-2-finish
const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
let myArray = myString.split("+");
let arrayLength = myArray.length;
let lastItem = myArray[arrayLength - 1];

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
const para2 = document.createElement("p");
para2.textContent = `The length of the array is ${arrayLength}.`;
const para3 = document.createElement("p");
para3.textContent = `The last item in the array is "${lastItem}".`;
section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);
```

</details>

### Diziler 3

Bu dizi görevi için size bir başlangıç dizisi sağlıyoruz ve biraz ters yönde çalışacaksınız. Şunları yapmanız gerekiyor:

1. Dizideki son öğeyi kaldırın.
2. Dizinin sonuna iki yeni ad ekleyin.
3. Dizideki her öğenin üzerinde yineleme (iterate) yapın ve adın sonuna parantez içinde dizin numarasını ekleyin, örneğin `Ryu (0)`. Bunu nasıl yapacağımızı Diziler makalesinde öğretmediğimizi unutmayın, dolayısıyla biraz araştırma yapmanız gerekecektir.
4. Son olarak, `" - "` ayırıcısıyla dizi öğelerini `myString` adlı tek bir dizede birleştirin.

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___arrays-3
const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

myArray.pop();

myArray.push("Zangief");
myArray.push("Ibuki");

myArray.forEach((element, index) => {
  const newElement = `${element} (${index})`;
  myArray[index] = newElement;
});

const myString = myArray.join(" - ");

// Don't edit the code below here!
// ...
```

```js hidden live-sample___arrays-3-finish
const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

myArray.pop();

myArray.push("Zangief");
myArray.push("Ibuki");

myArray.forEach((element, index) => {
  const newElement = `${element} (${index})`;
  myArray[index] = newElement;
});

const myString = myArray.join(" - ");

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);
```

</details>

### Diziler 4

Bu dizi görevi için size bazı kuşların adlarını listeleyen bir başlangıç dizisi sağlıyoruz.

Görevi tamamlamak için:

1. `"Eagles"` öğesinin dizinini bulun ve `"Eagles"` öğesini kaldırmak için bunu kullanın.
2. Bu diziden, orijinal dizideki yalnızca adları "E" harfiyle başlayan kuşları içeren `eBirds` adlı yeni bir dizi oluşturun. Bir dizenin belirli bir karakterle başlayıp başlamadığını kontrol etmek için [`startsWith()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) metodunun harika bir yol olduğunu unutmayın.

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___arrays-4
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = eBirds;
section.appendChild(para1);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

const eaglesIndex = birds.indexOf("Eagles");
birds.splice(eaglesIndex, 1);

function startsWithE(bird) {
  return bird.startsWith("E");
}
const eBirds = birds.filter(startsWithE);

// Don't edit the code below here!
// ...
```

```js hidden live-sample___arrays-4-finish
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

const eaglesIndex = birds.indexOf("Eagles");
birds.splice(eaglesIndex, 1);

function startsWithE(bird) {
  return bird.startsWith("E");
}
const eBirds = birds.filter(startsWithE);

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = eBirds;
section.appendChild(para1);
```

</details>

---

## 13. Görev: Saçma Hikâye Oluşturucu (Challenge: Silly story generator)

**Kaynak:** [Challenge: Silly story generator](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Silly_story_generator)

Bu görevde (challenge), bu modülde şimdiye kadar edindiğiniz bilgilerden bazılarını alıp rastgele saçma hikâyeler üreten eğlenceli bir uygulama oluşturmak için uygulamanız istenmektedir. Bu süreçte değişkenler, matematik, dizeler ve diziler konusundaki bilgilerinizi test edeceğiz. İyi eğlenceler!

### Başlangıç noktası

Başlamak için aşağıdaki kod panellerinden birindeki **Play** ("Çalıştır") düğmesine tıklayarak sağlanan örneği MDN Playground'da açın. Ardından JavaScript işlevselliğini tamamlamak için [Proje özeti](#proje-özeti) bölümündeki talimatları izleyeceksiniz.

```html live-sample___silly-story-start live-sample___silly-story-finish
<div>
  <label for="custom-name">Enter custom name:</label>
  <input id="custom-name" type="text" placeholder="" />
</div>
<fieldset>
  <legend>Choose locale:</legend>
  <label for="us">US</label
  ><input id="us" type="radio" name="uk-us" value="us" checked />
  <label for="uk">UK</label
  ><input id="uk" type="radio" name="uk-us" value="uk" />
</fieldset>
<div>
  <button class="generate">Generate random story</button>
</div>
<!-- Thanks a lot to Willy Aguirre for his help with the code for this assessment -->
<p class="story"></p>
```

```css hidden live-sample___silly-story-start live-sample___silly-story-finish
body {
  font: 1.2em / 1.5 system-ui;
  margin: 0 auto;
  width: 500px;
}

fieldset {
  border: 0;
}

fieldset,
legend {
  padding: 0;
  margin: 0;
}

input[type="text"] {
  margin-top: 5px;
  padding: 5px;
  width: 50%;
  display: block;
}

div,
fieldset {
  margin-top: 20px;
}

p {
  margin-top: 10px;
  background: #ffc125;
  padding: 20px;
  visibility: hidden;
}
```

```js live-sample___silly-story-start
// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

// Willy the Goblin
// Big Daddy
// Father Christmas

// the soup kitchen
// Disneyland
// the White House

// spontaneously combusted
// melted into a puddle on the sidewalk
// turned into a slug and slithered away

// Partial return random string function

function returnRandomStoryString() {
  // It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  if (customName.value !== "") {
    const name = customName.value;
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);
  }

  // TODO: replace "" with the correct expression
  story.textContent = "";
  story.style.visibility = "visible";
}
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

### Proje özeti

Size birkaç metin dizesi ve JavaScript fonksiyonu sağlandı; bunu aşağıdakileri yapan çalışan bir programa dönüştürmek için gerekli JavaScript kodunu yazmanız gerekiyor:

- "Generate random story" ("Rastgele hikâye oluştur") düğmesine basıldığında saçma bir hikâye oluşturur.
- Oluştur düğmesine basılmadan önce "Enter custom name" ("Özel ad girin") metin alanına özel bir ad girilmişse, hikâyedeki varsayılan "Bob" adını yalnızca bu durumda özel adla değiştirir.
- Oluştur düğmesine basılmadan önce UK (Birleşik Krallık) radyo düğmesi işaretlenmişse, hikâyedeki varsayılan ABD ağırlık ve sıcaklık miktarlarını ve birimlerini Birleşik Krallık karşılıklarına dönüştürür.
- Düğmeye her basıldığında yeni bir rastgele saçma hikâye oluşturur.

#### Başlangıç değişkenleri ve fonksiyonları

JavaScript'te, "Complete variable definitions and random function" yorumunun altında, şunlara olan başvuruları saklayan üç sabitiniz vardır:

- "Enter custom name" metin alanı: `customName`.
- "Generate random story" düğmesi: `generateBtn`.
- HTML gövdesinin alt kısmında hikâyenin içine kopyalanacağı [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p) öğesi: `story`.

Buna ek olarak, girdi olarak bir dizi alan ve dizinin içinde saklanan öğelerden birini rastgele döndüren `randomValueFromArray()` adlı bir fonksiyonunuz vardır.

"Raw text strings" yorumunun altında, programımıza girdi görevi görecek, yorum satırı haline getirilmiş bazı metin dizeleri vardır. Bu dizeleri yorum satırı olmaktan çıkarmanızı (uncomment) ve şu şekilde sabitlerin içinde saklamanızı istiyoruz:

1. İlk üç dize kümesini `characters` adlı bir dizinin içinde saklayın.
2. İkinci üç dize kümesini `places` adlı bir dizinin içinde saklayın.
3. Üçüncü üç dize kümesini `events` adlı bir dizinin içinde saklayın.

#### `returnRandomStoryString()` fonksiyonunu tamamlamak

"Partial return random string function" yorumunun altında, yorum satırı haline getirilmiş uzun bir metin dizesi ve `storyText` adlı bir değeri döndüren bir `return` deyimi içeren, kısmen tamamlanmış bir `returnRandomStoryString()` fonksiyonunuz vardır.

Bu fonksiyonu tamamlamak için:

1. Uzun metin dizesini yorum satırı olmaktan çıkarın ve `storyText` adlı bir değişkenin içinde saklayın. Bu bir şablon değişmezi (template literal) olmalıdır.
2. Şablon değişmezinin hemen üstüne `randomCharacter`, `randomPlace` ve `randomEvent` adlı üç sabit ekleyin. Bunlar sırasıyla `characters`, `places` ve `events` dizilerinden rastgele bir dize döndürmesi gereken üç `randomValueFromArray()` çağrısına eşit olacak şekilde ayarlanmalıdır.
3. Şablon değişmezinde `:insertx:`, `:inserty:` ve `:insertz:` örneklerini sırasıyla `randomCharacter`, `randomPlace` ve `randomEvent` içeren gömülü ifadelerle (embedded expressions) değiştirin.

#### `generateStory()` fonksiyonunu tamamlamak

"Event listener and partial generate function definition" yorumunun altında birkaç kod öğeniz vardır:

- Temsil ettiği düğmeye tıklandığında `generateStory()` fonksiyonunun çalıştırılması için `generateBtn` değişkenine bir `click` olay dinleyicisi (event listener) ekleyen bir satır.
- Kısmen tamamlanmış bir `generateStory()` fonksiyon tanımı. Görevin geri kalanında, bu fonksiyonu tamamlamak ve düzgün çalışmasını sağlamak için içindeki satırları dolduracaksınız.

Fonksiyonu tamamlamak için şu adımları izleyin:

1. `newStory` adlı yeni bir değişken oluşturun ve değerini bir `returnRandomStoryString()` çağrısına eşit olacak şekilde ayarlayın. Bu fonksiyon, düğmeye her basıldığında yeni bir rastgele hikâye oluşturabilmemiz için gereklidir. `newStory` değişkenini doğrudan `storyText` değerine ayarlasaydık, yeni bir hikâyeyi yalnızca bir kez oluşturabilirdik.
2. İlk `if` bloğunun içine, `newStory` dizesinde bulunan `Bob` adını `name` değişkeniyle değiştirmek için bir dize değiştirme metodu çağrısı ekleyin. Bu blokta "Eğer `customName` metin girdisine bir değer girilmişse, hikâyedeki `Bob` adını bu özel adla değiştir" diyoruz.
3. İkinci `if` bloğunun içinde, `uk` radyo düğmesinin seçilip seçilmediğini kontrol ediyoruz. Seçilmişse, hikâyedeki ağırlık ve sıcaklık değerlerini pound ve Fahrenheit'tan stone ve Celsius'a dönüştürmek istiyoruz. Yapmanız gerekenler şunlardır:
   1. Pound'u stone'a ve Fahrenheit'ı Celsius'a dönüştürme formüllerini araştırıp bulun.
   2. `weight` sabitini tanımlayan satırın içinde, `300` değerini 300 pound'u stone'a dönüştüren bir hesaplamayla değiştirin. Genel `Math.round()` çağrısının sonucunun sonuna `" stone"` ifadesini birleştirin (concatenate).
   3. `temperature` değişkenini tanımlayan satırın içinde, `94` değerini 94 Fahrenheit'ı Celsius'a dönüştüren bir hesaplamayla değiştirin. Genel `Math.round()` çağrısının sonucunun sonuna `" Celsius"` ifadesini birleştirin.
   4. İki değişken tanımının hemen altına, `300 pounds` ifadesini `weight` değişkeninin içeriğiyle ve `94 Fahrenheit` ifadesini `temperature` değişkeninin içeriğiyle değiştiren iki dize değiştirme satırı daha ekleyin.
4. Son olarak, fonksiyonun sondan bir önceki satırında, `story` değişkeninin (paragrafa başvuran) `textContent` özelliğini `newStory` değerine eşit yapın.

### İpuçları ve püf noktaları

- HTML ve CSS'i hiçbir şekilde düzenlemenize gerek yoktur.
- [`Math.round()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round), bir hesaplamanın sonucunu en yakın tam sayıya yuvarlayan yerleşik bir JavaScript metodudur.
- Değiştirilmesi gereken üç dize örneği vardır. `replace()` metodunu veya başka bir çözümü kullanabilirsiniz.

### Örnek

Tamamlanmış uygulamanız aşağıdaki canlı örnek gibi çalışmalıdır:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodu şuna benzer görünmelidir:

```js live-sample___silly-story-finish
// Complete variable definitions and random function

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Solution: Raw text strings

const characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const places = ["the soup kitchen", "Disneyland", "the White House"];
const events = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and slithered away",
];

// Solution: Partial return random string function

function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  let storyText = `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`;

  return storyText;
}

// Solution: Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature = `${Math.round((94 - 32) * (5 / 9))} Celsius`;
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
```

</details>

---

## 14. Kodunuzda Kararlar Vermek — Koşullu İfadeler (Making decisions in your code — conditionals)

**Kaynak:** [Making decisions in your code — conditionals](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals)

Herhangi bir programlama dilinde, kodun farklı girdilere bağlı olarak kararlar vermesi ve buna göre eylemler gerçekleştirmesi gerekir. Örneğin bir oyunda, oyuncunun can sayısı 0 ise oyun biter. Bir hava durumu uygulamasında, uygulamaya sabah bakılıyorsa bir gün doğumu grafiği gösterilir; gece vaktiyse yıldızlar ve bir ay gösterilir. Bu makalede, koşullu ifadeler (conditional statements) olarak adlandırılan yapıların JavaScript'te nasıl çalıştığını keşfedeceğiz.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış, önceki derslerde ele alındığı şekliyle JavaScript temellerine aşinalık.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Koşullu ifadenin ne olduğunu anlamak — bir test sonucuna bağlı olarak farklı kod yollarını çalıştırmaya yarayan bir kod yapısı.</li>
          <li><code>if</code>/<code>else</code>/<code>else if</code> kullanarak koşulları uygulamak.</li>
          <li>Testler oluşturmak için karşılaştırma operatörlerini kullanmak.</li>
          <li>Testlerde VE (AND), VEYA (OR) ve DEĞİL (NOT) mantığını uygulamak.</li>
          <li>Switch deyimleri.</li>
          <li>Üçlü (ternary) operatörler.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Tek bir şartla alabilirsin!

İnsanlar (ve diğer hayvanlar) küçükten ("bir kurabiye mi yemeliyim yoksa iki mi?") büyüğe ("kendi ülkemde kalıp ailemin çiftliğinde mi çalışmalıyım, yoksa Amerika'ya taşınıp astrofizik mi okumalıyım?") hayatlarını etkileyen kararları her zaman verirler.

Koşullu ifadeler (conditional statements), yapılması gereken seçimden (örneğin, "bir kurabiye mi yoksa iki mi"), bu seçimlerin sonucunda ortaya çıkan duruma kadar (belki "bir kurabiye yedim" seçiminin sonucu "hâlâ aç hissettim" olabilir ve "iki kurabiye yedim" seçiminin sonucu da "tok hissettim ama annem tüm kurabiyeleri yediğim için beni azarladı" olabilir) bu tür karar verme süreçlerini JavaScript'te temsil etmemize olanak tanır.

![Üzerinde 'Cookies' yazan bir kurabiye kavanozu tutan bir insana benzeyen çizgi film karakteri. Karakterin başının üzerinde bir soru işareti var. İki konuşma balonu bulunuyor. Soldaki konuşma balonunda bir kurabiye var. Sağdaki konuşma balonunda iki kurabiye var. Birlikte ele alındığında karakterin bir kurabiye mi yoksa iki kurabiye mi istediğine karar vermeye çalıştığını ima ediyor.](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/conditionals/cookie-choice-small.png)

### if...else deyimleri

JavaScript'te açık ara en yaygın kullanacağınız koşullu ifade türüne bakalım — mütevazı [`if...else` deyimi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).

#### Temel if...else sözdizimi

Temel `if...else` sözdizimi şu şekilde görünür:

```js
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}
```

Burada şunlar var:

1. `if` anahtar sözcüğü ve ardından bazı parantezler.
2. Parantezlerin içine yerleştirilmiş, test edilecek bir koşul (tipik olarak "bu değer şu diğer değerden daha mı büyük?" veya "bu değer var mı?"). Koşul, modülün önceki kısımlarında tartıştığımız [karşılaştırma operatörlerinden](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) yararlanır ve `true` veya `false` döndürür.
3. İçinde biraz kod bulunan bir süslü parantez kümesi — bu istediğimiz herhangi bir kod olabilir ve yalnızca koşul `true` döndürürse çalışır.
4. `else` anahtar sözcüğü.
5. İçinde biraz daha kod bulunan başka bir süslü parantez kümesi — bu istediğimiz herhangi bir kod olabilir ve yalnızca koşul `true` değilse — veya başka bir deyişle koşul `false` ise — çalışır.

Bu kod insanlar tarafından oldukça kolay okunabilir — "**eğer (if)** **koşul (condition)** `true` döndürürse A kodunu çalıştır, **değilse (else)** B kodunu çalıştır" demektedir.

`else` anahtar sözcüğünü ve ikinci süslü parantez bloğunu dahil etmek zorunda olmadığınızı unutmamalısınız — aşağıdaki de tamamen geçerli bir koddur:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Ancak burada dikkatli olmanız gerekir — bu durumda ikinci kod bloğu koşullu ifade tarafından kontrol edilmez, dolayısıyla koşulun `true` ya da `false` döndürmesinden bağımsız olarak **her zaman** çalışır. Bu mutlaka kötü bir şey değildir, ancak istediğiniz şey olmayabilir — çoğu zaman her ikisini birden değil, bir kod bloğunu _veya_ diğerini çalıştırmak istersiniz.

Son bir nokta olarak, önerilmese de bazen `if...else` deyimlerinin süslü parantezler olmadan yazıldığını görebilirsiniz:

```js example-bad
if (condition) doSomething();
else doSomethingElse();
```

Bu sözdizimi tamamen geçerlidir, ancak kod bloklarını sınırlamak için süslü parantezleri kullanırsanız ve birden çok satır ile girinti (indentation) kullanırsanız kodu anlamak çok daha kolaydır.

#### Gerçek bir örnek

Bu sözdizimini daha iyi anlamak için gerçek bir örnek düşünelim. Annesi veya babası tarafından bir ev işinde yardım istenen bir çocuk hayal edin. Ebeveyn şöyle diyebilir: "Hey tatlım! Gidip alışverişi yaparak bana yardım edersen, istediğin o oyuncağı alabilmen için sana biraz ekstra harçlık vereceğim." JavaScript'te bunu şu şekilde temsil edebiliriz:

```js
let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
```

Gösterildiği şekliyle bu kod her zaman `shoppingDone` değişkeninin `false` döndürmesiyle sonuçlanır, bu da zavallı çocuğumuz için hayal kırıklığı anlamına gelir. Çocuk alışverişi yaptıysa ebeveynin `shoppingDone` değişkenini `true` olarak ayarlaması için bir mekanizma sağlamak bize kalmıştır.

Örneğin:

```html hidden live-sample___allowance-updater
<label for="shopping-check">Has the shopping been done? </label>
<input type="checkbox" id="shopping-check" />

<p></p>
```

```js hidden live-sample___allowance-updater
const checkBox = document.querySelector("input");
const para = document.querySelector("p");
let shoppingDone = false;

checkBox.addEventListener("change", () => {
  if (shoppingDone === false) {
    shoppingDone = true;
  } else {
    shoppingDone = false;
  }
  updateAllowance();
});

function updateAllowance() {
  let childAllowance;
  if (shoppingDone === true) {
    childAllowance = 10;
  } else {
    childAllowance = 5;
  }

  para.textContent = `Child has earned $${childAllowance} this week.`;
}

updateAllowance();
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Önceki örneğin tam kaynak kodunu görmek için Play ("Çalıştır") düğmesine tıklayarak onu MDN Playground'da açın.

#### else if

Son örnek bize iki seçenek veya sonuç sundu — peki ya ikiden fazlasını istiyorsak?

`if...else` yapınıza ekstra seçenekler/sonuçlar zincirlemenin bir yolu vardır — `else if` kullanmak. Her ekstra seçenek, `if () { }` ile `else { }` arasına konulacak ek bir blok gerektirir — basit bir hava durumu tahmini uygulamasının parçası olabilecek aşağıdaki daha kapsamlı örneğe göz atın:

```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```js
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

1. Burada farklı hava durumu seçimleri yapmamıza olanak tanıyan bir HTML [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select) öğemiz ve basit bir paragrafımız var.
2. JavaScript'te hem [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select) hem de [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p) öğelerine bir başvuru saklıyoruz ve değeri değiştirildiğinde `setWeather()` fonksiyonunun çalıştırılması için `<select>` öğesine bir olay dinleyici ekliyoruz.
3. Bu fonksiyon çalıştırıldığında, önce `choice` adlı bir değişkeni `<select>` öğesinde seçilen geçerli değere ayarlarız. Ardından `choice` değerinin ne olduğuna bağlı olarak paragrafın içinde farklı metinler göstermek için bir koşullu ifade kullanırız. Bir `if () { }` bloğunda test edilen ilki hariç tüm koşulların `else if () { }` bloklarında nasıl test edildiğine dikkat edin.
4. `else { }` bloğunun içindeki en son seçenek temelde bir "son çare" seçeneğidir — koşulların hiçbiri `true` değilse içindeki kod çalıştırılacaktır. Bu durumda, örneğin bir kullanıcı başlangıçta gösterilen "--Make a choice--" yer tutucu seçeneğini yeniden seçmeye karar verirse, hiçbir şey seçilmediğinde paragraftaki metni boşaltmaya yarar.

#### Karşılaştırma operatörleri üzerine bir not

Karşılaştırma operatörleri, koşullu ifadelerimizin içindeki koşulları test etmek için kullanılır. Karşılaştırma operatörlerine ilk olarak [JavaScript'te temel matematik — sayılar ve operatörler](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) makalemizde bakmıştık. Seçeneklerimiz şunlardır:

- `===` ve `!==` — bir değerin başka bir değerle birebir aynı olup olmadığını veya aynı olmadığını test eder.
- `<` ve `>` — bir değerin başka bir değerden küçük mü yoksa büyük mü olduğunu test eder.
- `<=` ve `>=` — bir değerin başka bir değerden küçük veya ona eşit mi, yoksa büyük veya ona eşit mi olduğunu test eder.

Mantıksal (`true`/`false` — boolean) değerleri test etmekten ve tekrar tekrar karşılaşacağınız yaygın bir kalıptan özellikle bahsetmek istedik. `false`, `undefined`, `null`, `0`, `NaN` veya boş bir dize (`''`) olmayan herhangi bir değer, bir koşullu ifade olarak test edildiğinde aslında `true` döndürür; bu nedenle `true` olup olmadığını ve hatta var olup olmadığını (yani tanımsız — undefined — olmadığını) test etmek için bir değişken adını tek başına kullanabilirsiniz. Örneğin:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

Ve ebeveyni için bir ev işi yapan çocuk hakkındaki önceki örneğimize dönersek, onu şu şekilde yazabilirsiniz:

```js
let shoppingDone = false;
let childAllowance;

// We don't need to explicitly specify 'shoppingDone === true'
if (shoppingDone) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
```

#### İç içe if...else

Bir `if...else` deyimini başka bir tanesinin içine koymak — onları iç içe yerleştirmek (nesting) — tamamen uygundur. Örneğin, sıcaklığın ne olduğuna bağlı olarak ek bir seçenekler kümesi göstermek üzere hava durumu tahmini uygulamamızı güncelleyebiliriz:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```

Kodun tamamı birlikte çalışsa bile, her `if...else` deyimi diğerinden tamamen bağımsız olarak çalışır.

#### Mantıksal operatörler: VE, VEYA ve DEĞİL

İç içe `if...else` deyimleri yazmadan birden çok koşulu test etmek istiyorsanız, [mantıksal operatörler (logical operators)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) size yardımcı olabilir. Koşullarda kullanıldığında ilk ikisi şunları yapar:

- `&&` — VE (AND); tüm ifadenin `true` döndürmesi için her birinin ayrı ayrı `true` olarak değerlendirilmesi gerekecek şekilde iki veya daha fazla ifadeyi birbirine zincirlemenize olanak tanır.
- `||` — VEYA (OR); tüm ifadenin `true` döndürmesi için içlerinden birinin veya daha fazlasının ayrı ayrı `true` olarak değerlendirilmesi gerekecek şekilde iki veya daha fazla ifadeyi birbirine zincirlemenize olanak tanır.

Size bir VE (AND) örneği vermek gerekirse, önceki örnek kod parçacığı şu şekilde yeniden yazılabilir:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

Yani örneğin ilk kod bloğu yalnızca `choice === 'sunny'` _ve_ `temperature < 86` ifadeleri `true` döndürürse çalıştırılacaktır.

Hızlı bir VEYA (OR) örneğine bakalım:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

`!` operatörüyle ifade edilen son mantıksal operatör türü olan DEĞİL (NOT), bir ifadeyi olumsuzlamak (negate) için kullanılabilir. Yukarıdaki örnekte onu VEYA ile birleştirelim:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

Bu kod parçacığında, VEYA ifadesi `true` döndürürse DEĞİL operatörü onu olumsuzlayacak ve böylece genel ifade `false` döndürecektir.

İstediğiniz yapıda, istediğiniz kadar çok mantıksal ifadeyi birleştirebilirsiniz. Aşağıdaki örnek, içindeki kodu yalnızca her iki VEYA ifadesi de true döndürürse (bu da genel VE ifadesinin true döndüreceği anlamına gelir) yürütür:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Koşullu ifadelerde mantıksal VEYA operatörünü kullanırken yapılan yaygın bir hata, değerini kontrol ettiğiniz değişkeni bir kez belirtmeye çalışmak ve ardından `true` döndürmesi için olabileceği değerlerin `||` (VEYA) operatörleriyle ayrılmış bir listesini vermektir. Örneğin:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

Bu durumda, 7 (veya sıfır olmayan herhangi bir başka değer) her zaman `true` olarak değerlendirildiğinden `if ()` içindeki koşul her zaman true olarak değerlendirilecektir. Bu koşul aslında "eğer x 5'e eşitse veya 7 doğruysa — ki her zaman öyledir" demektedir. Mantıksal olarak istediğimiz şey bu değildir! Bunun çalışmasını sağlamak için her VEYA operatörünün her iki tarafında da tam bir test belirtmeniz gerekir:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

### switch deyimleri

`if...else` deyimleri koşullu kodu etkinleştirme işini iyi yapar, ancak dezavantajları da yok değildir. Esas olarak birkaç seçeneğinizin olduğu ve her birinin çalıştırılması için makul miktarda kod gerektirdiği ve/veya koşulların karmaşık olduğu (örneğin, birden çok mantıksal operatör) durumlar için iyidirler. Yalnızca bir değişkeni belirli bir değer seçeneğine ayarlamak veya bir koşula bağlı olarak belirli bir ifadeyi yazdırmak istediğiniz durumlar için, özellikle de çok sayıda seçeneğiniz varsa, sözdizimi biraz hantal olabilir.

Böyle bir durumda [`switch` deyimleri](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) dostunuzdur — girdi olarak tek bir ifade/değer alırlar ve ardından bu değerle eşleşen bir tane bulana kadar çeşitli seçeneklere bakarlar ve onunla birlikte gelen ilgili kodu yürütürler. Size bir fikir vermek için işte biraz daha sözde kod (pseudocode):

```js
switch (expression) {
  case choice1:
    // run this code
    break;

  case choice2:
    // run this code instead
    break;

  // include as many cases as you like

  default:
    // actually, just run this code
    break;
}
```

Burada şunlar var:

1. `switch` anahtar sözcüğü ve ardından bir parantez kümesi.
2. Parantezlerin içinde bir ifade veya değer.
3. `case` anahtar sözcüğü, ardından ifadenin/değerin olabileceği bir seçenek ve ardından iki nokta üst üste.
4. Seçenek ifadeyle eşleşirse çalıştırılacak biraz kod.
5. Bir `break` deyimi ve ardından bir noktalı virgül. Önceki seçenek ifadeyle/değerle eşleşirse, tarayıcı kod bloğunu burada yürütmeyi durdurur ve switch deyiminin altında görünen koda geçer.
6. İstediğiniz kadar başka durum (`case` — 3–5. maddeler).
7. `default` anahtar sözcüğü ve ardından durumlardan biriyle (3–5. maddeler) tamamen aynı kod kalıbı; tek farkı `default` sonrasında bir seçenek olmaması ve zaten blokta bundan sonra çalışacak hiçbir şey olmadığı için `break` deyimine ihtiyacınız olmamasıdır. Bu, seçeneklerin hiçbiri eşleşmezse çalışan varsayılan seçenektir.

> [!NOTE]
> `default` bölümünü dahil etmek zorunda değilsiniz — ifadenin bilinmeyen bir değere eşit olma ihtimali yoksa onu güvenle atlayabilirsiniz. Ancak böyle bir ihtimal varsa, bilinmeyen durumları ele almak için onu dahil etmeniz gerekir.

#### Bir switch örneği

Gerçek bir örneğe göz atalım — hava durumu tahmini uygulamamızı bunun yerine bir switch deyimi kullanacak şekilde yeniden yazacağız:

```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```js
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
}
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

### Üçlü operatör

Bazı örneklerle oynamanızı sağlamadan önce size tanıtmak istediğimiz son bir sözdizimi parçası var. [Üçlü (ternary) veya koşullu operatör](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator), bir koşulu test eden ve `true` ise bir değeri/ifadeyi, `false` ise başka bir tanesini döndüren küçük bir sözdizimi parçasıdır — bu bazı durumlarda yararlı olabilir ve bir `true`/`false` koşulu aracılığıyla aralarında seçim yapılan iki seçeneğiniz varsa bir `if...else` bloğundan çok daha az kod kaplayabilir. Sözde kod şu şekilde görünür:

```js-nolint
condition ? run this code : run this code instead
```

Bir örneğe bakalım:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Burada `isBirthday` adlı bir değişkenimiz var — eğer bu `true` ise konuğumuza mutlu yıllar mesajı veririz; değilse ona standart günlük selamlamayı veririz.

#### Üçlü operatör örneği

Üçlü operatör yalnızca değişken değerlerini ayarlamak için değildir; fonksiyonları veya kod satırlarını da — istediğiniz her şeyi — çalıştırabilirsiniz. Aşağıdaki canlı örnek, site için biçimlendirmenin bir üçlü operatör kullanılarak uygulandığı basit bir tema seçiciyi göstermektedir.

```html
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>
```

```js
const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value === "black"
    ? update("black", "white")
    : update("white", "black"),
);
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Burada bir tema (siyah veya beyaz) seçmek için bir [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select) öğemiz, artı bir web sitesi başlığını görüntülemek için basit bir [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) öğemiz var. Ayrıca parametre (girdi) olarak iki renk alan `update()` adlı bir fonksiyonumuz var. Web sitesinin arka plan rengi sağlanan ilk renge, metin rengi ise sağlanan ikinci renge ayarlanır.

Son olarak, üçlü operatör içeren bir fonksiyonu çalıştırmaya yarayan bir [onchange](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) olay dinleyicimiz de var. Bir test koşuluyla başlar — `select.value === 'black'`. Bu `true` döndürürse `update()` fonksiyonunu siyah ve beyaz parametreleriyle çalıştırırız, bu da siyah bir arka plan rengi ve beyaz bir metin rengi elde etmemiz anlamına gelir. `false` döndürürse `update()` fonksiyonunu beyaz ve siyah parametreleriyle çalıştırırız, bu da site renklerinin tersine çevrildiği anlamına gelir.

### Temel bir takvim uygulamak

Bu örnekte, temel bir takvim uygulamasını bitirmemize yardımcı olacaksınız. Kodda şunlara sahipsiniz:

- Kullanıcının farklı aylar arasında seçim yapmasına olanak tanıyan bir [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select) öğesi.
- `<select>` menüsünde seçilen değerin ne zaman değiştirildiğini algılamak için bir `change` olay işleyicisi.
- Takvimi çizen ve [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) öğesinde doğru ayı görüntüleyen `createCalendar()` adlı bir fonksiyon.

Örneği tamamlamak için:

1. Örneği MDN Playground'da düzenlemek için aşağıdaki kod bloğunda **"Play"** ("Çalıştır") düğmesine tıklayın.
2. `createCalendar()` fonksiyonunun içine, `// ADD CONDITIONAL HERE` yorumunun hemen altına bir koşullu ifade yazın. Şunları yapmalıdır:
   1. Seçilen aya bakmalıdır (`choice` değişkeninde saklanır. Bu, değer değiştikten sonraki `<select>` öğesi değeri olacaktır, örneğin "January").
   2. `days` değişkenini seçilen aydaki gün sayısına eşit olacak şekilde atamalıdır. Bunu yapmak için yılın her ayındaki gün sayısına bakmanız gerekecektir. Bu örneğin amaçları doğrultusunda artık yılları yok sayabilirsiniz.

İpuçları:

- Birden çok ayı tek bir koşulda gruplamak için mantıksal VEYA (`||`) kullanmanız önerilir; birçoğu aynı gün sayısını paylaşır.
- Hangi gün sayısının en yaygın olduğunu düşünün ve bunu varsayılan değer olarak kullanın.

Bir hata yaparsanız MDN Playground'daki _Reset_ ("Sıfırla") düğmesini kullanarak çalışmanızı temizleyebilirsiniz. Gerçekten takılırsanız canlı çıktının altında çözümü görüntüleyebilirsiniz.

```html hidden live-sample___conditionals-1
<label for="month">Select month: </label>
<select id="month">
  <option value="January">January</option>
  <option value="February">February</option>
  <option value="March">March</option>
  <option value="April">April</option>
  <option value="May">May</option>
  <option value="June">June</option>
  <option value="July">July</option>
  <option value="August">August</option>
  <option value="September">September</option>
  <option value="October">October</option>
  <option value="November">November</option>
  <option value="December">December</option>
</select>

<h1></h1>

<ul></ul>
```

```css hidden live-sample___conditionals-1
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}

* {
  box-sizing: border-box;
}

ul {
  padding-left: 0;
}

li {
  display: block;
  float: left;
  width: 25%;
  border: 2px solid white;
  padding: 5px;
  height: 40px;
  background-color: #4a2db6;
  color: white;
}
```

```js live-sample___conditionals-1
const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  // ADD CONDITIONAL HERE

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "January";
createCalendar("January");
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şu şekilde görünmelidir:

```js
const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  if (month === "February") {
    days = 28;
  } else if (
    month === "April" ||
    month === "June" ||
    month === "September" ||
    month === "November"
  ) {
    days = 30;
  }

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "January";
createCalendar("January");
```

</details>

### Daha fazla renk seçeneği eklemek

Bu örnekte, daha önce gördüğümüz üçlü operatör örneğini alacak ve web sitesine daha fazla seçenek uygulamamıza olanak tanımak için üçlü operatörü bir switch deyimine dönüştüreceksiniz. [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select) öğesine bakın — bu kez iki değil beş tema seçeneğine sahip olduğunu göreceksiniz.

Örneği tamamlamak için:

1. Örneği MDN Playground'da düzenlemek için aşağıdaki kod bloğunda **"Play"** ("Çalıştır") düğmesine tıklayın.
2. `// ADD SWITCH STATEMENT` yorumunun hemen altına bir switch deyimi ekleyin:
   1. Girdi ifadesi olarak `choice` değişkenini kabul etmelidir.
   2. Her durum (`case`) için seçenek, seçilebilecek olası `<option>` değerlerinden birine, yani `white`, `black`, `purple`, `yellow` veya `psychedelic` değerine eşit olmalıdır. Seçenek değerlerinin küçük harfli olduğuna, canlı çıktıda görüntülendiği şekliyle seçenek _etiketlerinin_ ise büyük harfle başladığına dikkat edin. Kodunuzda küçük harfli değerleri kullanmalısınız.
   3. Her durum için `update()` fonksiyonu çalıştırılmalı ve kendisine ilki arka plan rengi, ikincisi metin rengi için olmak üzere iki renk değeri geçirilmelidir. Renk değerlerinin dizeler olduğunu, dolayısıyla tırnak işaretleri içine sarmalanmaları gerektiğini unutmayın.

Bir hata yaparsanız MDN Playground'daki _Reset_ ("Sıfırla") düğmesini kullanarak çalışmanızı temizleyebilirsiniz. Gerçekten takılırsanız canlı çıktının altında çözümü görüntüleyebilirsiniz.

```html hidden live-sample___conditionals-2
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
  <option value="purple">Purple</option>
  <option value="yellow">Yellow</option>
  <option value="psychedelic">Psychedelic</option>
</select>

<h1>This is my website</h1>
```

```css hidden live-sample___conditionals-2
html {
  font-family: sans-serif;
  height: 95%;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  height: inherit;
}
```

```js live-sample___conditionals-2
const select = document.querySelector("select");
const html = document.querySelector("html");

select.addEventListener("change", () => {
  const choice = select.value;

  // ADD SWITCH STATEMENT
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şu şekilde görünmelidir:

```js
const select = document.querySelector("select");
const html = document.querySelector("html");

select.addEventListener("change", () => {
  const choice = select.value;

  switch (choice) {
    case "black":
      update("black", "white");
      break;
    case "white":
      update("white", "black");
      break;
    case "purple":
      update("purple", "white");
      break;
    case "yellow":
      update("yellow", "purple");
      break;
    case "psychedelic":
      update("lime", "purple");
      break;
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
```

</details>

### Özet

Şu anda JavaScript'teki koşullu yapılar hakkında gerçekten bilmeniz gereken her şey bu kadar! Bir sonraki makalede, bu bilgileri ne kadar iyi anladığınızı ve aklınızda tuttuğunuzu kontrol etmek için kullanabileceğiniz bazı testler vereceğiz.

### Ayrıca bakınız

- [Karşılaştırma operatörleri (Comparison operators)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math#comparison_operators)
- [Ayrıntılı olarak koşullu ifadeler (Conditional statements in detail)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [if...else başvurusu (if...else reference)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Koşullu (üçlü) operatör başvurusu (Conditional (ternary) operator reference)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

---

## 15. Becerilerinizi Test Edin: Koşullu İfadeler (Test your skills: Conditionals)

**Kaynak:** [Test your skills: Conditionals](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Conditionals)

Bu beceri testinin amacı, [Kodunuzda kararlar vermek — koşullu ifadeler](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals) makalemizi anlayıp anlamadığınızı değerlendirmenize yardımcı olmaktır.

> [!NOTE]
> Yardım almak için [Becerilerinizi test edin](https://developer.mozilla.org/en-US/docs/Learn_web_development#test_your_skills) kullanım kılavuzumuzu okuyun. Ayrıca [iletişim kanallarımızdan](https://developer.mozilla.org/en-US/docs/MDN/Community/Communication_channels) birini kullanarak da bize ulaşabilirsiniz.

### Koşullu İfadeler 1

Bu görevde size iki değişken verilmektedir:

- `season` — mevcut mevsimin ne olduğunu söyleyen bir dize içerir.
- `response` — başlatılmamış (uninitialized) olarak başlar, ancak daha sonra çıktı paneline yazdırılacak bir yanıtı saklamak için kullanılır.

Görevi tamamlamak için:

1. `season` değişkeninin "summer" dizesini içerip içermediğini kontrol eden ve içeriyorsa `response` değişkenine kullanıcıya mevsim hakkında uygun bir mesaj veren bir dize atayan bir koşullu ifade oluşturun. İçermiyorsa, `response` değişkenine kullanıcıya hangi mevsimde olduğumuzu bilmediğimizi söyleyen genel bir dize atamalıdır.
2. `season` değişkeninin "winter" dizesini içerip içermediğini kontrol eden ve yine `response` değişkenine uygun bir dize atayan başka bir koşullu ifade ekleyin.

<!-- Code shared across examples -->

```html hidden live-sample___conditionals-1 live-sample___conditionals-2 live-sample___conditionals-3 live-sample___conditionals-1-finish live-sample___conditionals-2-finish live-sample___conditionals-3-finish
<section></section>
```

```css hidden live-sample___conditionals-1 live-sample___conditionals-2 live-sample___conditionals-3 live-sample___conditionals-1-finish live-sample___conditionals-2-finish live-sample___conditionals-3-finish
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___conditionals-1
let season = "summer";
let response;

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);
```

Güncellenmiş çıktınızın başlangıç durumu şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
let season = "summer";
let response;

if (season === "summer") {
  response = "It's probably nice and warm where you are; enjoy the sun!";
} else if (season === "winter") {
  response = "I hope you are not too cold. Put some warm clothes on!";
} else {
  response =
    "I don't know what the season is where you are. Hope you are well.";
}

// Don't edit the code below here!
// ...
```

```js hidden live-sample___conditionals-1-finish
let season = "summer";
let response;

if (season === "summer") {
  response = "It's probably nice and warm where you are; enjoy the sun!";
} else if (season === "winter") {
  response = "I hope you are not too cold. Put some warm clothes on!";
} else {
  response =
    "I don't know what the season is where you are. Hope you are well.";
}

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);
```

</details>

### Koşullu İfadeler 2

Bu görev için size üç değişken verilmektedir:

- `machineActive`: Yanıt makinesinin açık olup olmadığını belirten bir gösterge içerir (`true`/`false`).
- `score`: Hayali bir oyundaki puanınızı içerir. Bu puan, ne kadar başarılı olduğunuzu belirten bir yanıt sağlayan yanıt makinesine beslenir.
- `response`: Başlatılmamış olarak başlar, ancak daha sonra çıktı paneline yazdırılacak bir yanıtı saklamak için kullanılır.

Görevi tamamlamak için:

1. Makinenin açık olup olmadığını kontrol eden ve açık değilse `response` değişkenine kullanıcıya makineyi açmasını söyleyen bir mesaj koyan bir `if...else` yapısı oluşturun.
2. İlk `if...else` yapısının içine, makine açıksa `score` değerinin ne olduğuna bağlı olarak `response` değişkenine uygun mesajlar koyan başka bir `if...else` yapısı yerleştirin (nest). Farklı koşullu testler (ve ortaya çıkan yanıtlar) şunlardır:
   - 0'dan küçük veya 100'den büyük puan — "This is not possible, an error has occurred."
   - 0 ila 19 arası puan — "That was a terrible score — total fail!"
   - 20 ila 39 arası puan — "You know some things, but it's a pretty bad score. Needs improvement."
   - 40 ila 69 arası puan — "You did a passable job, not bad!"
   - 70 ila 89 arası puan — "That's a great score, you really know your stuff."
   - 90 ila 100 arası puan — "What an amazing score! Did you cheat? Are you for real?"

Kodunuzu girdikten sonra, çalışıp çalışmadığını görmek için `machineActive` değerini `true` olarak ve `score` değerini birkaç farklı değere değiştirmeyi deneyin.
Bu alıştırmanın kapsamı doğrultusunda, `machineActive` değişkeninin değerinden bağımsız olarak `Your score is __` dizesinin ekranda kalacağını lütfen unutmayın.

Görevin başlangıç noktası şu şekilde görünür:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___conditionals-2
let response;
let score = 75;
let machineActive = false;

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = `Your score is ${score}`;
para2.textContent = response;
section.appendChild(para1);
section.appendChild(para2);
```

Güncellenmiş çıktınızın başlangıç durumu şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
let response;
let score = 75;
let machineActive = false;

if (machineActive) {
  if (score < 0 || score > 100) {
    response = "This is not possible, an error has occurred.";
  } else if (score >= 0 && score < 20) {
    response = "That was a terrible score — total fail!";
  } else if (score >= 20 && score < 40) {
    response =
      "You know some things, but it's a pretty bad score. Needs improvement.";
  } else if (score >= 40 && score < 70) {
    response = "You did a passable job, not bad!";
  } else if (score >= 70 && score < 90) {
    response = "That's a great score, you really know your stuff.";
  } else if (score >= 90 && score <= 100) {
    response = "What an amazing score! Did you cheat? Are you for real?";
  }
} else {
  response = "The machine is turned off. Turn it on to process your score.";
}

// Don't edit the code below here!
// ...
```

```js hidden live-sample___conditionals-2-finish
let response;
let score = 75;
let machineActive = false;

if (machineActive) {
  if (score < 0 || score > 100) {
    response = "This is not possible, an error has occurred.";
  } else if (score >= 0 && score < 20) {
    response = "That was a terrible score — total fail!";
  } else if (score >= 20 && score < 40) {
    response =
      "You know some things, but it's a pretty bad score. Needs improvement.";
  } else if (score >= 40 && score < 70) {
    response = "You did a passable job, not bad!";
  } else if (score >= 70 && score < 90) {
    response = "That's a great score, you really know your stuff.";
  } else if (score >= 90 && score <= 100) {
    response = "What an amazing score! Did you cheat? Are you for real?";
  }
} else {
  response = "The machine is turned off. Turn it on to process your score.";
}

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = `Your score is ${score}`;
para2.textContent = response;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

### Koşullu İfadeler 3

Son görev için size dört değişken verilmektedir:

- `machineActive`: Giriş (login) makinesinin açık olup olmadığını belirten bir gösterge içerir (`true`/`false`).
- `pwd`: Kullanıcının giriş parolasını içerir.
- `machineResult`: Başlatılmamış olarak başlar, ancak daha sonra kullanıcıya makinenin açık olup olmadığını bildiren ve çıktı paneline yazdırılacak olan bir yanıtı saklamak için kullanılır.
- `pwdResult`: Başlatılmamış olarak başlar, ancak daha sonra kullanıcıya giriş denemesinin başarılı olup olmadığını bildiren ve çıktı paneline yazdırılacak olan bir yanıtı saklamak için kullanılır.

Görevi tamamlamak için:

1. Makinenin açık olup olmadığını kontrol eden ve `machineResult` değişkenine kullanıcıya makinenin açık mı yoksa kapalı mı olduğunu söyleyen bir mesaj koyan bir `if...else` yapısı oluşturun.
2. Makine açıksa, `pwd` değerinin `cheese` değerine eşit olup olmadığını kontrol eden ikinci bir koşullu ifadenin de çalışmasını istiyoruz. Eşitse, `pwdResult` değişkenine kullanıcıya başarıyla giriş yaptığını söyleyen bir dize atamalıdır. Eşit değilse, `pwdResult` değişkenine kullanıcıya giriş denemesinin başarılı olmadığını söyleyen farklı bir dize atamalıdır. Bunu bir `if...else` yapısı olmayan bir şey kullanarak tek bir satırda yapmanızı istiyoruz.

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___conditionals-3
let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = machineResult;
para2.textContent = pwdResult;
section.appendChild(para1);
section.appendChild(para2);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

if (machineActive) {
  machineResult = "Machine is active. Trying login.";
  pwdResult =
    pwd === "cheese"
      ? "Login successful."
      : "Password incorrect; login failed.";
} else {
  machineResult = "Machine is inactive. Activate and try logging in again.";
}

// Don't edit the code below here!
// ...
```

```js hidden live-sample___conditionals-3-finish
let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

if (machineActive) {
  machineResult = "Machine is active. Trying login.";
  pwdResult =
    pwd === "cheese"
      ? "Login successful."
      : "Password incorrect; login failed.";
} else {
  machineResult = "Machine is inactive. Activate and try logging in again.";
}

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = machineResult;
para2.textContent = pwdResult;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

---

## 16. Kodu Döngüye Sokmak (Looping code)

**Kaynak:** [Looping code](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops)

Programlama dilleri, birden fazla temel hesaplamadan tamamlamanız gereken çok sayıda benzer iş öğesinin bulunduğu hemen hemen her duruma kadar, tekrarlayan görevleri hızla tamamlamak için çok kullanışlıdır. Burada JavaScript'te bu tür ihtiyaçları karşılayan mevcut döngü (loop) yapılarına bakacağız.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış, önceki derslerde ele alındığı şekliyle JavaScript temellerine aşinalık.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Döngülerin amacını anlamak — her yineleme (iteration) için aynı kodu tekrarlamadan çok benzer bir şeyi defalarca yapmanıza olanak tanıyan bir kod yapısı.</li>
          <li><code>for</code> ve <code>while</code> gibi genel döngü türleri.</li>
          <li><code>for...of</code> ve <code>map()</code> gibi yapılarla koleksiyonlar üzerinde döngü kurmak.</li>
          <li>Döngülerden çıkmak (breaking out) ve devam etmek (continuing).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Döngüler neden yararlıdır?

Döngüler tamamen aynı şeyi tekrar tekrar yapmakla ilgilidir. Çoğu zaman kod, döngünün her dönüşünde biraz farklı olacaktır ya da aynı kod farklı değişkenlerle çalışacaktır.

#### Döngü kodu örneği

Bir [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/canvas) öğesi üzerine 100 rastgele daire çizmek istediğimizi varsayalım (farklı rastgele kümeleri görmek üzere örneği tekrar tekrar çalıştırmak için _Update_ ("Güncelle") düğmesine basın):

```html hidden
<button>Update</button> <canvas></canvas>
```

```css hidden
html {
  width: 100%;
  height: inherit;
  background: #dddddd;
}

canvas {
  display: block;
}

body {
  margin: 0;
}

button {
  position: absolute;
  top: 5px;
  left: 5px;
}
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Bu örneği uygulayan JavaScript kodu şöyledir:

```js
const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI,
    );
    ctx.fill();
  }
}

btn.addEventListener("click", draw);
```

#### Döngülü ve döngüsüz karşılaştırması

Şimdilik tüm kodu anlamanıza gerek yok, ancak kodun gerçekten 100 daireyi çizen kısmına bakalım:

```js
for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = "rgb(255 0 0 / 50%)";
  ctx.arc(
    random(canvas.width),
    random(canvas.height),
    random(50),
    0,
    2 * Math.PI,
  );
  ctx.fill();
}
```

Temel fikri anlamış olmalısınız — her biri sayfada rastgele bir konuma bir daire çizen bu kodun 100 yinelemesini (iteration) çalıştırmak için bir döngü kullanıyoruz. Kodda daha önce tanımlanan `random(x)`, `0` ile `x-1` arasında bir tam sayı döndürür.
İster 100 daire, ister 1000, ister 10.000 daire çiziyor olalım, ihtiyaç duyulan kod miktarı aynı olacaktır.
Yalnızca tek bir sayının değişmesi gerekir.

Burada bir döngü kullanmıyor olsaydık, çizmek istediğimiz her daire için aşağıdaki kodu tekrarlamamız gerekirdi:

```js
ctx.beginPath();
ctx.fillStyle = "rgb(255 0 0 / 50%)";
ctx.arc(
  random(canvas.width),
  random(canvas.height),
  random(50),
  0,
  2 * Math.PI,
);
ctx.fill();
```

Bu çok sıkıcı ve bakımı zor bir hale gelirdi.

### Bir koleksiyon üzerinde döngü kurmak

Bir döngü kullandığınız çoğu zaman, bir öğeler koleksiyonunuz olacak ve her öğeyle bir şey yapmak isteyeceksiniz.

Bir koleksiyon türü, bu kursun [Diziler (Arrays)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays) bölümünde tanıştığımız [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) (Dizi) yapısıdır.
Ancak JavaScript'te [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) ve [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) dahil olmak üzere başka koleksiyonlar da vardır.

#### for...of döngüsü

Bir koleksiyon üzerinde döngü kurmak için temel araç [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) döngüsüdür:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

Bu örnekte `for (const cat of cats)` şunu söyler:

1. `cats` koleksiyonu verildiğinde, koleksiyondaki ilk öğeyi al.
2. Onu `cat` değişkenine ata ve ardından `{}` süslü parantezleri arasındaki kodu çalıştır.
3. Bir sonraki öğeyi al ve koleksiyonun sonuna ulaşana kadar 2. Adımı tekrarla.

#### map() ve filter()

JavaScript ayrıca koleksiyonlar için daha özelleşmiş döngülere de sahiptir; burada bunlardan ikisinden bahsedeceğiz.

Bir koleksiyondaki her öğeye bir şey yapmak ve değiştirilmiş öğeleri içeren yeni bir koleksiyon oluşturmak için `map()` kullanabilirsiniz:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Burada [`cats.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) içine bir fonksiyon geçiririz ve `map()` dizideki her öğe için öğeyi içine geçirerek fonksiyonu bir kez çağırır. Ardından her fonksiyon çağrısından gelen dönüş değerini yeni bir diziye ekler ve son olarak yeni diziyi döndürür. Bu durumda sağladığımız fonksiyon öğeyi büyük harfe dönüştürür, dolayısıyla ortaya çıkan dizi tüm kedilerimizi büyük harfle içerir:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Bir koleksiyondaki her öğeyi test etmek ve yalnızca eşleşen öğeleri içeren yeni bir koleksiyon oluşturmak için [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) kullanabilirsiniz:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

Bu `map()` metoduna çok benzer, ancak içine geçirdiğimiz fonksiyon bir [mantıksal değer (boolean)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables#booleans) döndürür: eğer `true` döndürürse öğe yeni diziye dahil edilir.
Fonksiyonumuz öğenin "L" harfiyle başladığını test eder, dolayısıyla sonuç yalnızca adları "L" ile başlayan kedileri içeren bir dizidir:

```js-nolint
[ "Leopard", "Lion" ]
```

Hem `map()` hem de `filter()` metotlarının sıklıkla, [Fonksiyonlar (Functions)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions) dersimizde öğreneceğiniz _fonksiyon ifadeleriyle (function expressions)_ birlikte kullanıldığını unutmayın.
Fonksiyon ifadelerini kullanarak yukarıdaki örneği çok daha компакт (derli toplu) olacak şekilde yeniden yazabiliriz:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

### Standart for döngüsü

Yukarıdaki "daire çizme" örneğinde, üzerinde döngü kuracağınız bir öğeler koleksiyonunuz yoktur: gerçekten yalnızca aynı kodu 100 kez çalıştırmak istersiniz.
Böyle bir durumda [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) döngüsünü kullanabilirsiniz.
Bunun sözdizimi şöyledir:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Burada şunlar var:

1. `for` anahtar sözcüğü ve ardından bazı parantezler.
2. Parantezlerin içinde noktalı virgüllerle ayrılmış üç öğemiz vardır:
   1. Bir **başlatıcı (initializer)** — bu genellikle bir sayıya ayarlanan ve döngünün kaç kez çalıştığını saymak için artırılan bir değişkendir.
      Bazen **sayaç değişkeni (counter variable)** olarak da adlandırılır.
   2. Bir **koşul (condition)** — bu, döngünün döngü yapmayı ne zaman durdurması gerektiğini tanımlar.
      Genellikle bir karşılaştırma operatörü içeren bir ifadedir; çıkış koşulunun sağlanıp sağlanmadığını görmeye yarayan bir testtir.
   3. Bir **son ifade (final-expression)** — bu, döngü tam bir yinelemeden her geçtiğinde her zaman değerlendirilir (veya çalıştırılır).
      Genellikle sayaç değişkenini artırmaya (veya bazı durumlarda azaltmaya) ve böylece onu koşulun artık `true` olmadığı noktaya yaklaştırmaya yarar.

3. Bir kod bloğu içeren bazı süslü parantezler — bu kod, döngü her yineleme yaptığında çalıştırılacaktır.

> [!NOTE]
> Scrimba'dan<sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> [Ek bilgi: Döngüler (Aside: Loops)](https://scrimba.com/learn-javascript-c0v/~02a?via=mdn), `for` döngüsü sözdiziminin yararlı ve etkileşimli bir analizini sunar.

#### Kareleri hesaplamak

Bunların ne yaptığını daha net görselleştirebilmemiz için gerçek bir örneğe bakalım.

```html hidden
<button id="calculate">Calculate</button>
<button id="clear">Clear</button>
<pre id="results"></pre>
```

```js
const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));
```

Bu bize aşağıdaki çıktıyı verir:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Bu kod 1'den 9'a kadar olan sayıların karelerini hesaplar ve sonucu yazar. Kodun kalbi, hesaplamayı gerçekleştiren `for` döngüsüdür.

`for (let i = 1; i < 10; i++)` satırını üç parçasına ayıralım:

1. `let i = 1`: sayaç değişkeni olan `i`, `1`'den başlar. Sayaç için `let` kullanmamız gerektiğine dikkat edin, çünkü döngüde her döndüğümüzde onu `i++` ile (ki bu bir yeniden atamadır) artırıyoruz.
2. `i < 10`: `i`, `10`'dan küçük olduğu sürece döngüde dönmeye devam et.
3. `i++`: döngünün her dönüşünde `i`'ye bir ekle.

Döngünün içinde, `i`'nin geçerli değerinin karesini, yani `i * i` değerini hesaplarız. Yaptığımız hesaplamayı ve sonucu ifade eden bir dize oluşturur ve bu dizeyi çıktı metnine ekleriz. Ayrıca eklediğimiz bir sonraki dizenin yeni bir satırda başlaması için `\n` ekleriz. Dolayısıyla:

1. İlk çalışmada `i = 1`'dir, dolayısıyla `1 x 1 = 1` ekleyeceğiz.
2. İkinci çalışmada `i = 2`'dir, dolayısıyla `2 x 2 = 4` ekleyeceğiz.
3. Ve bu şekilde devam eder…
4. `i`, `10`'a eşit olduğunda döngüyü çalıştırmayı durduracağız ve doğrudan döngünün altındaki bir sonraki kod parçasına geçerek yeni bir satıra `Finished!` mesajını yazdıracağız.

#### for döngüsüyle koleksiyonlar üzerinde döngü kurmak

Bir koleksiyon üzerinde yineleme yapmak için `for...of` döngüsü yerine bir `for` döngüsü kullanabilirsiniz.

Yukarıdaki `for...of` örneğimize tekrar bakalım:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

Bu kodu şu şekilde yeniden yazabilirdik:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
```

Bu döngüde `i`'yi `0`'dan başlatıyoruz ve `i` dizinin uzunluğuna (`length`) ulaştığında duruyoruz.
Ardından döngünün içinde, dizideki her öğeye sırayla erişmek için `i`'yi kullanıyoruz.

Bu gayet iyi çalışır ve JavaScript'in erken sürümlerinde `for...of` mevcut değildi, dolayısıyla bir dizi üzerinde yineleme yapmanın standart yolu buydu.
Ancak kodunuza hata (bug) sokmak için daha fazla ihtimal sunar. Örneğin:

- ilk dizi dizininin (index) 1 değil sıfır olduğunu unutarak `i`'yi `1`'den başlatabilirsiniz.
- son dizi dizininin `length - 1`'de olduğunu unutarak `i <= cats.length` koşulunda durabilirsiniz.

Bunun gibi nedenlerden dolayı, yapabiliyorsanız genellikle `for...of` kullanmak en iyisidir.

Bazen bir dizi üzerinde yineleme yapmak için yine de bir `for` döngüsü kullanmanız gerekir.
Örneğin, aşağıdaki kodda kedilerimizi listeleyen bir mesajı bir [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p) öğesine yazdırmak istiyoruz:

```html hidden live-sample___for-of-loop-cats live-sample___for-loop-cats live-sample___while-loop-cats live-sample___do-while-loop-cats
<p></p>
```

```js live-sample___for-of-loop-cats
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const pElem = document.querySelector("p");

let myFavoriteCats = "My favorite big cats are ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

pElem.textContent = myFavoriteCats;
```

Nihai çıktı cümlesi pek iyi biçimlendirilmemiştir:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Dilbilgisi açısından doğru bir cümleyi tercih ederiz; bu da son kediyi farklı şekilde ele almak anlamına gelir:

```plain
My favorite big cats are Leopard, Serval, Jaguar, Tiger, Caracal, and Lion.
```

Bunu yapmak için son döngü yinelemesinde olduğumuzu bilmemiz gerekir ve bunu yapmak için de bir `for` döngüsü kullanabilir ve `i`'nin değerini inceleyebiliriz:

```js live-sample___for-loop-cats
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const pElem = document.querySelector("p");

let myFavoriteCats = "My favorite big cats are ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

pElem.textContent = myFavoriteCats;
```

Bu bize istediğimiz çıktıyı verir:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

### break ile döngülerden çıkmak

Tüm yinelemeler tamamlanmadan önce bir döngüden çıkmak istiyorsanız [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) deyimini kullanabilirsiniz.
Bununla önceki makalede [switch deyimlerine](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) baktığımızda zaten tanışmıştık — bir switch deyiminde girdi ifadesiyle eşleşen bir durumla karşılaşıldığında, `break` deyimi switch deyiminden hemen çıkar ve ondan sonraki koda geçer.

Döngülerde de durum aynıdır — bir `break` deyimi döngüden hemen çıkacak ve tarayıcının onu izleyen koda geçmesini sağlayacaktır.

Diyelim ki bir kişiler ve telefon numaraları dizisinde arama yapmak ve yalnızca bulmak istediğimiz numarayı döndürmek istedik?
Önce biraz basit HTML — aranacak bir ad girmemize olanak tanıyan bir metin [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) öğesi, bir arama göndermek için bir [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) öğesi ve sonuçları içinde görüntülemek için bir [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p) öğesi:

```html
<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>
```

Şimdi JavaScript'e geçelim:

```js
const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

1. Her şeyden önce bazı değişken tanımlarımız var — her öğesi iki nokta üst üste ile ayrılmış bir ad ve telefon numarası içeren bir dize olan bir iletişim bilgileri dizimiz var.
2. Ardından, basıldığında aramayı gerçekleştirmek ve sonuçları döndürmek üzere biraz kod çalıştırılması için düğmeye (`btn`) bir olay dinleyici bağlıyoruz.
3. Metin girdisine girilen değeri `searchName` adlı bir değişkende saklarız, ardından bir sonraki aramaya hazır olmak üzere metin girdisini boşaltır ve tekrar ona odaklanırız.
   Aramaların büyük/küçük harfe duyarsız (case-insensitive) olması için dize üzerinde [`toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) metodunu da çalıştırdığımıza dikkat edin.
4. Şimdi ilginç kısma, `for...of` döngüsüne geçelim:
   1. Döngünün içinde önce geçerli kişiyi iki nokta üst üste karakterinden böleriz ve ortaya çıkan iki değeri `splitContact` adlı bir dizide saklarız.
   2. Ardından `splitContact[0]` değerinin (kişinin adı, yine [`toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) ile küçük harfe dönüştürülmüş olarak) girilen `searchName` değerine eşit olup olmadığını test etmek için bir koşullu ifade kullanırız.
      Eşitse, kişinin numarasının ne olduğunu bildirmek için paragrafa bir dize gireriz ve döngüyü sonlandırmak için `break` kullanırız.

5. Döngüden sonra bir kişi ayarlayıp ayarlamadığımızı kontrol ederiz ve ayarlamadıysak paragraf metnini "Contact not found." olarak ayarlarız.

### continue ile yinelemeleri atlamak

[continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) deyimi `break` ile benzer şekilde çalışır, ancak döngüden tamamen çıkmak yerine döngünün bir sonraki yinelemesine atlar.
Girdi olarak bir sayı alan ve yalnızca tam sayıların kareleri olan sayıları döndüren başka bir örneğe bakalım.

HTML temelde son örnekle aynıdır — basit bir sayısal girdi ve çıktı için bir paragraf.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Döngünün kendisi biraz farklı olsa da JavaScript de çoğunlukla aynıdır:

```js
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});
```

Çıktı şöyledir:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

1. Bu durumda girdi bir sayı (`num`) olmalıdır. `for` döngüsüne 1'den başlayan bir sayaç (bu durumda 0 ile ilgilenmediğimiz için), sayaç girilen `num` değerinden daha büyük hale geldiğinde döngünün duracağını söyleyen bir çıkış koşulu ve sayaca her seferinde 1 ekleyen bir yineleyici (iterator) verilir.
2. Döngünün içinde, [`Math.sqrt(i)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) kullanarak her sayının karekökünü buluruz, ardından en yakın tam sayıya aşağı yuvarlandığında kendisiyle aynı olup olmadığını test ederek karekökün bir tam sayı olup olmadığını kontrol ederiz ([`Math.floor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) metodunun kendisine geçirilen sayıya yaptığı şey budur).
3. Karekök ile aşağı yuvarlanmış karekök birbirine eşit değilse (`!==`), bu karekökün bir tam sayı olmadığı anlamına gelir, dolayısıyla onunla ilgilenmiyoruzdur. Böyle bir durumda, sayıyı hiçbir yere kaydetmeden bir sonraki döngü yinelemesine atlamak için `continue` deyimini kullanırız.
4. Karekök bir tam sayıysa `if` bloğunu tamamen atlarız, dolayısıyla `continue` deyimi yürütülmez; bunun yerine geçerli `i` değerini artı bir boşluğu paragraf içeriğinin sonuna birleştiririz.

### while ve do...while

JavaScript'te mevcut olan tek genel döngü türü `for` değildir. Aslında başka pek çok döngü vardır ve şimdi bunların hepsini anlamanız gerekmese de, biraz farklı bir şekilde çalışan aynı özellikleri tanıyabilmeniz için diğer birkaç tanesinin yapısına göz atmaya değer.

İlk olarak [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) döngüsüne bir göz atalım. Bu döngünün sözdizimi şöyle görünür:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Bu, `for` döngüsüne çok benzer bir şekilde çalışır; tek farkı, başlatıcı (initializer) değişkeninin döngüden önce ayarlanması ve son ifadenin (final-expression), bu iki öğenin parantezlerin içine dahil edilmesi yerine çalıştırılacak koddan sonra döngünün içine dahil edilmesidir.
Koşul, önünde `for` yerine `while` anahtar sözcüğü bulunan parantezlerin içine dahil edilir.

Aynı üç öğe hâlâ mevcuttur ve hâlâ for döngüsünde oldukları aynı sırayla tanımlanırlar.
Bunun nedeni, koşulun doğru olup olmadığını kontrol edebilmeniz için önce tanımlanmış bir başlatıcınızın olması gerekmesidir.
Son ifade daha sonra döngünün içindeki kod çalıştıktan sonra (bir yineleme tamamlandığında) çalıştırılır; bu da yalnızca koşul hâlâ doğruysa gerçekleşecektir.

Kediler listesi örneğimize, ancak bir while döngüsü kullanacak şekilde yeniden yazılmış haliyle tekrar bir göz atalım:

```js live-sample___while-loop-cats
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const pElem = document.querySelector("p");

let myFavoriteCats = "My favorite big cats are ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

pElem.textContent = myFavoriteCats;
```

Bu yine beklendiği gibi aynı şekilde çalışır:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

[`do...while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) döngüsü çok benzerdir, ancak while yapısı üzerinde bir çeşitleme sağlar:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

Bu durumda başlatıcı yine döngü başlamadan önce ilk sırada gelir. Anahtar sözcük doğrudan çalıştırılacak kodu ve son ifadeyi içeren süslü parantezlerden önce gelir.

Bir `do...while` döngüsü ile bir `while` döngüsü arasındaki temel fark, _`do...while` döngüsünün içindeki kodun her zaman en az bir kez yürütülmesidir_. Bunun nedeni koşulun döngünün içindeki koddan sonra gelmesidir. Dolayısıyla o kodu her zaman çalıştırırız, ardından tekrar çalıştırmamız gerekip gerekmediğini görmek için kontrol ederiz. `while` ve `for` döngülerinde kontrol önce gelir, bu nedenle kod hiç yürütülmeyebilir.

Kedi listeleme örneğimizi bir `do...while` döngüsü kullanacak şekilde tekrar yeniden yazalım:

```js live-sample___do-while-loop-cats
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const pElem = document.querySelector("p");

let myFavoriteCats = "My favorite big cats are ";

let i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

pElem.textContent = myFavoriteCats;
```

Yine, bu beklendiği gibi aynı şekilde çalışır:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

> [!WARNING]
> Her türlü döngüde, koşulun sonunda false haline gelmesi için başlatıcının artırıldığından veya duruma göre azaltıldığından emin olmalısınız.
> Aksi takdirde döngü sonsuza kadar devam edecek ve ya tarayıcı onu durmaya zorlayacak ya da çökecektir. Buna **sonsuz döngü (infinite loop)** denir.

### Bir fırlatma geri sayımı uygulamak

Bu alıştırmada, çıktı kutusuna 10'dan الفırlatma'ya (Blastoff) kadar basit bir fırlatma geri sayımı yazdırmanızı istiyoruz.

Alıştırmayı tamamlamak için:

1. Örneği MDN Playground'da düzenlemek için aşağıdaki kod bloğunda **"Play"** ("Çalıştır") düğmesine tıklayın.
2. 10'dan 0'a kadar döngü kuracak kodu ekleyin. Size bir başlatıcı sağladık — `let i = 10;`.
3. Her yineleme için yeni bir paragraf oluşturun ve onu `const output = document.querySelector('.output');` kullanarak seçtiğimiz çıktı `<div>` öğesine ekleyin. Yorum satırları içinde size döngünün içinde bir yerde kullanılması gereken üç kod satırı sağladık:
   1. `const para = document.createElement('p');` — yeni bir paragraf oluşturur.
   2. `output.appendChild(para);` — paragrafı çıktı `<div>` öğesine ekler.
   3. `para.textContent =` — paragrafın içindeki metni eşittir işaretinden sonra sağ tarafa koyduğunuz her şeye eşit yapar.
4. Aşağıda listelenen farklı yineleme sayıları için, gerekli metni paragrafın içine ekleyecek kodu yazın (bir koşullu ifadeye ve birden çok `para.textContent =` satırına ihtiyacınız olacaktır):
   1. Sayı 10 ise paragrafa "Countdown 10" yazdırın.
   2. Sayı 0 ise paragrafa "Blast off!" yazdırın.
   3. Başka herhangi bir sayı için paragrafa yalnızca sayıyı yazdırın.
5. Bir yineleyici (iterator) eklemeyi unutmayın! Ancak bu örnekte her yinelemeden sonra yukarı değil aşağı doğru sayıyoruz, dolayısıyla `i++` **istemezsiniz** — aşağı doğru nasıl yineleme yaparsınız?

> [!NOTE]
> Döngüyü yazmaya başlarsanız (örneğin `(while(i>=0)`), bitiş koşulunu henüz girmediğiniz için tarayıcı sonsuz bir döngüye takılabilir. Bu yüzden buna dikkat edin. Bu sorunla başa çıkmak için kodunuzu bir yorum satırı içinde yazmaya başlayabilir ve bitirdikten sonra yorum satırını kaldırabilirsiniz.

Bir hata yaparsanız MDN Playground'daki _Reset_ ("Sıfırla") düğmesini kullanarak çalışmanızı temizleyebilirsiniz. Gerçekten takılırsanız canlı çıktının altında çözümü görüntüleyebilirsiniz.

```html hidden live-sample___loops-1
<div class="output"></div>
```

```css hidden live-sample___loops-1
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}

.output {
  height: 410px;
  overflow: auto;
}
```

```js live-sample___loops-1
const output = document.querySelector(".output");
output.textContent = "";

// let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
const output = document.querySelector(".output");
output.textContent = "";

let i = 10;

while (i >= 0) {
  const para = document.createElement("p");
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = "Blast off!";
  } else {
    para.textContent = i;
  }

  output.appendChild(para);

  i--;
}
```

</details>

### Bir davetli listesini doldurmak

Bu alıştırmada, bir dizide saklanan adların bir listesini almanızı ve bunları bir davetli listesine koymanızı istiyoruz. Ancak iş o kadar da kolay değil — Phil ve Lola'yı içeri almak istemiyoruz çünkü açgözlü ve kabadırlar ve her zaman tüm yiyecekleri yerler! Biri kabul edilecek davetliler, diğeri reddedilecek davetliler için olmak üzere iki listemiz var.

Alıştırmayı tamamlamak için:

1. Örneği MDN Playground'da düzenlemek için aşağıdaki kod bloğunda **"Play"** ("Çalıştır") düğmesine tıklayın.
2. `people` dizisi üzerinde yineleme yapacak bir döngü yazın.
3. Her döngü yinelemesi sırasında, bir koşullu ifade kullanarak geçerli dizi öğesinin "Phil" veya "Lola" değerine eşit olup olmadığını kontrol edin:
   1. Eşitse, dizi öğesini ardından bir virgül ve bir boşluk gelecek şekilde `refused` paragrafının `textContent` özelliğinin sonuna birleştirin.
   2. Eşit değilse, dizi öğesini ardından bir virgül ve bir boşluk gelecek şekilde `admitted` paragrafının `textContent` özelliğinin sonuna birleştirin.

Size halihazırda şunları sağladık:

- `refused.textContent +=` — `refused.textContent` sonuna bir şey birleştirecek olan bir satırın başlangıcı.
- `admitted.textContent +=` — `admitted.textContent` sonuna bir şey birleştirecek olan bir satırın başlangıcı.

Ekstra bonus soru — yukarıdaki görevleri başarıyla tamamladıktan sonra elinizde virgüllerle ayrılmış iki ad listesi kalacaktır, ancak bunlar düzensiz olacaktır — her birinin sonunda bir virgül bulunacaktır. Her durumda son virgülü kesip atan ve sona bir nokta ekleyen satırların nasıl yazılacağını çözebilir misiniz?
Yardım için [Kullanışlı dize metotları](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Useful_string_methods) makalesine bir göz atın.

Bir hata yaparsanız MDN Playground'daki _Reset_ ("Sıfırla") düğmesini kullanarak çalışmanızı temizleyebilirsiniz. Gerçekten takılırsanız canlı çıktının altında çözümü görüntüleyebilirsiniz.

```html hidden live-sample___loops-2
<div class="output">
  <p class="admitted">Admit:</p>
  <p class="refused">Refuse:</p>
</div>
```

```css hidden live-sample___loops-2
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}

.output {
  height: 100px;
  overflow: auto;
}
```

```js live-sample___loops-2
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here

// refused.textContent += ...;
// admitted.textContent += ...;
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");

admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

for (const person of people) {
  if (person === "Phil" || person === "Lola") {
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }
}

refused.textContent = `${refused.textContent.slice(0, -2)}.`;
admitted.textContent = `${admitted.textContent.slice(0, -2)}.`;
```

</details>

### Hangi döngü türünü kullanmalısınız?

Bir dizi veya bunu destekleyen başka bir nesne üzerinde yineleme yapıyorsanız ve her öğenin dizin (index) konumuna erişmeniz gerekmiyorsa, `for...of` en iyi seçimdir. Okuması daha kolaydır ve ters gidebilecek daha az şey vardır.

Diğer kullanımlar için `for`, `while` ve `do...while` döngüleri büyük ölçüde birbirinin yerine kullanılabilir.
Hepsi aynı sorunları çözmek için kullanılabilir ve hangisini kullanacağınız büyük ölçüde kişisel tercihinize — hangisini hatırlaması en kolay veya en sezgisel bulduğunuza — bağlı olacaktır.
En azından başlangıç olarak `for` döngüsünü öneririz, çünkü her şeyi hatırlamak için muhtemelen en kolayı odur — başlatıcı, koşul ve son ifadenin hepsi düzgün bir şekilde parantezlerin içine girmek zorundadır, bu nedenle nerede olduklarını görmek ve onları atlamadığınızı kontrol etmek kolaydır.

Hepsine tekrar bir göz atalım.

Önce `for...of`:

```js-nolint
for (const item of array) {
  // code to run
}
```

`for`:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

`while`:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

ve son olarak `do...while`:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

> [!NOTE]
> İleri düzey/özelleşmiş durumlarda yararlı olan ve bu makalenin kapsamı dışında kalan başka döngü türleri/özellikleri de vardır. Döngü öğreniminizde daha ileri gitmek istiyorsanız ileri düzey [Döngüler ve yineleme kılavuzumuzu (Loops and iteration guide)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) okuyun.

### Özet

Bu makale size JavaScript'te kodu döngüye sokmanın arkasındaki temel kavramları ve mevcut farklı seçenekleri açıkladı.
Artık döngülerin tekrarlayan kodlarla başa çıkmak için neden iyi bir mekanizma olduğu konusunda netleşmiş ve kendi örneklerinizde onları kullanmak için can atıyor olmalısınız!

Bir sonraki makalede, bu bilgileri ne kadar iyi anladığınızı ve aklınızda tuttuğunuzu kontrol etmek için kullanabileceğiniz bazı testler vereceğiz.

### Ayrıca bakınız

- [Ayrıntılı olarak döngüler ve yineleme (Loops and iteration in detail)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of başvurusu (for...of reference)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [for deyimi başvurusu (for statement reference)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) ve [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) başvuruları
- [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) ve [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) başvuruları

---

## 17. Becerilerinizi Test Edin: Döngüler (Test your skills: Loops)

**Kaynak:** [Test your skills: Loops](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Loops)

Bu beceri testinin amacı, [Kodu döngüye sokmak (Looping code)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops) makalemizi anlayıp anlamadığınızı değerlendirmenize yardımcı olmaktır.

> [!NOTE]
> Yardım almak için [Becerilerinizi test edin](https://developer.mozilla.org/en-US/docs/Learn_web_development#test_your_skills) kullanım kılavuzumuzu okuyun. Ayrıca [iletişim kanallarımızdan](https://developer.mozilla.org/en-US/docs/MDN/Community/Communication_channels) birini kullanarak da bize ulaşabilirsiniz.

### DOM işleme: yararlı kabul edilir

Aşağıdaki sorulardan bazıları, onları tamamlamak için biraz [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM) işleme (manipulation) kodu yazmanızı gerektirir — örneğin yeni HTML öğeleri oluşturmak, metin içeriklerini belirli dize değerlerine eşit olacak şekilde ayarlamak ve bunları sayfadaki mevcut öğelerin içine yerleştirmek — hepsi JavaScript aracılığıyla.

Kursta bunu henüz açıkça öğretmedik, ancak bundan yararlanan bazı örnekler görmüş olacaksınız ve soruları başarıyla yanıtlamak için hangi DOM API'lerine ihtiyacınız olduğu konusunda biraz araştırma yapmanızı istiyoruz. İyi bir başlangıç noktası [DOM betik yazımına giriş (DOM scripting introduction)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) eğitimimizdir.

### Döngüler 1

İlk döngü görevimizde, sağlanan `myArray` içindeki tüm öğeler üzerinde yineleme yapan ve bunları liste öğelerinin ([`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li) öğeleri) içinde ekrana yazdıran temel bir döngü yazmanızı istiyoruz. Bunlar sağlanan `list` öğesine eklenmelidir.

<!-- Code shared across examples -->

```html hidden live-sample___loops-1 live-sample___loops-2 live-sample___loops-3 live-sample___loops-1-finish live-sample___loops-2-finish live-sample___loops-3-finish
<section></section>
```

```css hidden live-sample___loops-1 live-sample___loops-2 live-sample___loops-3 live-sample___loops-1-finish live-sample___loops-2-finish live-sample___loops-3-finish
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___loops-1
const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
const list = document.createElement("ul");
const section = document.querySelector("section");
section.appendChild(list);

// Don't edit the code above here!

// Add your code here
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

for (let item of myArray) {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  list.appendChild(listItem);
}
```

```js hidden live-sample___loops-1-finish
const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
const list = document.createElement("ul");
const section = document.querySelector("section");
section.appendChild(list);

for (let item of myArray) {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  list.appendChild(listItem);
}
```

</details>

### Döngüler 2

Bu sonraki görevde, bir ad verildiğinde adları ve telefon numaralarını içeren bir [nesneler (objects)](https://developer.mozilla.org/en-US/docs/Glossary/Object) dizisinde arama yapan ve adı bulursa adı ve telefon numarasını bir paragrafa çıktı olarak veren basit bir program yazmanızı istiyoruz.

Başlangıç olarak size üç değişken verilmektedir:

- `name`: Aranacak bir ad içerir.
- `para`: Sonuçları bildirmek için kullanılacak olan bir paragrafa başvuru içerir.
- `phonebook`: Aranacak telefon rehberi kayıtlarını içerir.

> [!NOTE]
> Henüz nesneler hakkında okumadıysanız endişelenmeyin! Şimdilik bilmeniz gereken tek şey bir üye-değer çiftine nasıl erişileceğidir. Nesneler hakkında [JavaScript nesne temelleri (JavaScript object basics)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics) eğitiminde okuyabilirsiniz.

Görevi tamamlamak için:

1. (`phonebook`) dizisi üzerinde yineleme yapan ve sağlanan `name` değerini arayan bir döngü yazın. Önceki görevde kullanmadığınız bir döngü türü kullanmalısınız.
2. `name` bulunursa, onu ve ilişkili `number` değerini "&lt;name>'s number is &lt;number>." biçiminde sağlanan paragrafın (`para`) `textContent` özelliğine yazın. Ondan sonra, döngü tamamlanmadan önce döngüden çıkın.
3. Nesnelerin hiçbiri `name` değerini içermiyorsa, sağlanan paragrafın `textContent` özelliğine "Name not found in the phonebook" yazdırın.

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___loops-2
const name = "Mustafa";
const para = document.createElement("p");

const phonebook = [
  { name: "Chris", number: "1549" },
  { name: "Li Kang", number: "9634" },
  { name: "Anne", number: "9065" },
  { name: "Francesca", number: "3001" },
  { name: "Mustafa", number: "6888" },
  { name: "Tina", number: "4312" },
  { name: "Bert", number: "7780" },
  { name: "Jada", number: "2282" },
];

const section = document.querySelector("section");
section.appendChild(para);

// Don't edit the code above here!

// Add your code here
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

for (let i = 0; i < phonebook.length; i++) {
  if (phonebook[i].name === name) {
    para.textContent = `${phonebook[i].name}'s number is ${phonebook[i].number}.`;
    break;
  }

  if (i === phonebook.length - 1) {
    para.textContent = "Name not found in the phonebook";
  }
}
```

```js hidden live-sample___loops-2-finish
const name = "Mustafa";
const para = document.createElement("p");

const phonebook = [
  { name: "Chris", number: "1549" },
  { name: "Li Kang", number: "9634" },
  { name: "Anne", number: "9065" },
  { name: "Francesca", number: "3001" },
  { name: "Mustafa", number: "6888" },
  { name: "Tina", number: "4312" },
  { name: "Bert", number: "7780" },
  { name: "Jada", number: "2282" },
];

const section = document.querySelector("section");
section.appendChild(para);

for (let i = 0; i < phonebook.length; i++) {
  if (phonebook[i].name === name) {
    para.textContent = `${phonebook[i].name}'s number is ${phonebook[i].number}.`;
    break;
  }

  if (i === phonebook.length - 1) {
    para.textContent = "Name not found in the phonebook";
  }
}
```

</details>

### Döngüler 3

Bu son görevde, sağlanan test fonksiyonunu kullanarak hangilerinin asal sayı olduğunu görmek için `500`'den `2`'ye kadar her sayıyı test edecek ve asal sayıları yazdıracaksınız.

Size şunlar sağlanmaktadır:

- `i`: `500` değeriyle başlar; bir yineleyici olarak kullanılması amaçlanmıştır.
- `para`: Sonuçları bildirmek için kullanılacak olan bir paragrafa başvuru içerir.
- `isPrime()`: Kendisine bir sayı geçirildiğinde sayı bir asal sayıysa `true`, değilse `false` döndüren bir fonksiyon.

Görevi tamamlamak için:

1. `500`'den `2`'ye kadar her sayı üzerinde yineleme yapan (1 asal sayı olarak sayılmaz) ve her biri üzerinde sağlanan `isPrime()` fonksiyonunu çalıştıran bir döngü yazın.
2. Asal sayı olmayan her sayı için bir sonraki döngü yinelemesine devam edin (`continue`). Asal sayı _olan_ her sayı için, onu bir tür ayırıcıyla birlikte paragrafın `textContent` özelliğine ekleyin.

Önceki iki görevde kullanmadığınız bir döngü türü kullanmalısınız.

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js live-sample___loops-3
let i = 500;
const para = document.createElement("p");
const section = document.querySelector("section");
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

section.appendChild(para);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

do {
  if (isPrime(i)) {
    para.textContent += `${i}, `;
  }
  i--;
} while (i > 1);

// Don't edit the code below here!
// ...
```

```js hidden live-sample___loops-3-finish
let i = 500;
const para = document.createElement("p");
const section = document.querySelector("section");
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

do {
  if (isPrime(i)) {
    para.textContent += `${i}, `;
  }
  i--;
} while (i > 1);

section.appendChild(para);
```

</details>

---

## 18. Fonksiyonlar — Yeniden Kullanılabilir Kod Blokları (Functions — reusable blocks of code)

**Kaynak:** [Functions — reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions)

Kodlamadaki bir diğer temel kavram da **fonksiyonlardır (functions)**; bunlar, tek bir görevi yerine getiren bir kod parçasını tanımlanmış bir blok içinde saklamanıza ve ardından aynı kodu birden çok kez yazmak zorunda kalmak yerine, ihtiyaç duyduğunuz her an tek bir kısa komut kullanarak o kodu çağırmanıza olanak tanır. Bu makalede temel sözdizimi, fonksiyonların nasıl çağrılacağı ve tanımlanacağı, kapsam (scope) ve parametreler gibi temel fonksiyon kavramlarını keşfedeceğiz.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış, önceki derslerde ele alındığı şekliyle JavaScript temellerine aşinalık.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Fonksiyonların amacı — ihtiyaç duyulan her yerde çağrılabilen yeniden kullanılabilir kod bloklarının oluşturulmasını sağlamak.</li>
          <li>Fonksiyonlar JavaScript'te her yerde kullanılır.</li>
          <li>Bazı fonksiyonlar tarayıcının içine yerleşiktir, bazıları ise kullanıcı tanımlıdır.</li>
          <li>Fonksiyonlar ve metotlar arasındaki fark.</li>
          <li>Fonksiyonları çağırmak (invoking).</li>
          <li>İsimsiz (anonymous) fonksiyonlar ve ok (arrow) fonksiyonları.</li>
          <li>Fonksiyon parametrelerini tanımlamak ve fonksiyon çağrılarına argümanlar geçirmek.</li>
          <li>Küresel (global) kapsam ve fonksiyon/blok kapsamı.</li>
          <li>Geri çağırma (callback) fonksiyonlarının ne olduğuna dair bir anlayış.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Fonksiyonları nerede bulurum?

JavaScript'te her yerde fonksiyonları bulacaksınız. Aslında kursta şimdiye kadar hep fonksiyonları kullanıyorduk; yalnızca onlar hakkında pek fazla konuşmamıştık. Ancak şimdi fonksiyonlar hakkında açıkça konuşmaya ve sözdizimlerini keşfetmeye başlamamızın zamanı geldi.

Bir çift parantez — `()` — içeren bir JavaScript yapısından yararlandığınız ve [for döngüsü](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while veya do...while döngüsü](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) ya da [if...else deyimi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) gibi yaygın bir dil yapısı **kullanmadığınız** hemen hemen her an, bir fonksiyondan yararlanıyorsunuzdur.

### Yerleşik tarayıcı fonksiyonları

Bu kursta yerleşik (built-in) tarayıcı fonksiyonlarını yoğun bir şekilde kullandık.

Bir metin dizesini her işlediğimizde, örneğin:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
```

Veya bir diziyi her işlediğimizde:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

Veya her rastgele sayı ürettiğimizde:

```js
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

Bir _fonksiyon_ kullanıyorduk!

> [!NOTE]
> Gerekirse işlevselliklerine yeniden aşina olmak için bu satırları tarayıcınızın JavaScript konsoluna girmekten çekinmeyin.

JavaScript dili, tüm o kodu kendiniz yazmadan yararlı şeyler yapmanıza olanak tanıyan pek çok yerleşik fonksiyona sahiptir. Aslında yerleşik bir tarayıcı fonksiyonunu **çağırdığınızda (invoke)** (çalıştırmak veya yürütmek için süslü bir kelime) çağırdığınız kodun bir kısmı JavaScript'te yazılamazdı — bu fonksiyonların birçoğu, JavaScript gibi web dilleriyle değil büyük ölçüde C++ gibi düşük seviyeli sistem dilleriyle yazılmış olan arka plan tarayıcı kodunun bölümlerini çağırmaktadır.

Bazı yerleşik tarayıcı fonksiyonlarının çekirdek JavaScript dilinin parçası olmadığını aklınızda bulundurun — bazıları, daha da fazla işlevsellik sağlamak için varsayılan dilin üzerine inşa edilen tarayıcı API'lerinin parçası olarak tanımlanmıştır (daha fazla açıklama için [kursumuzun bu erken bölümüne](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) bakın). İlerideki bir modülde tarayıcı API'lerini kullanmaya daha ayrıntılı olarak bakacağız.

### Fonksiyonlar ve metotlar karşılaştırması

Nesnelerin parçası olan **fonksiyonlara** **metotlar (methods)** denir; nesneler hakkında modülün ilerleyen kısımlarında bilgi edineceksiniz. Şimdilik yalnızca metotlar ve fonksiyonlar arasındaki olası kafa karışıklıklarını gidermek istedik — Web'deki ilgili kaynaklara baktıkça her iki terimle de karşılaşmanız muhtemeldir.

Şimdiye kadar kullandığımız yerleşik kod her iki biçimde de karşımıza çıkar: **fonksiyonlar** ve **metotlar.** Yerleşik fonksiyonların yanı sıra yerleşik nesnelerin ve bunlara karşılık gelen metotların tam listesini [JavaScript başvuru kaynağımızda](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) kontrol edebilirsiniz.

Kursta şimdiye kadar pek çok **özel fonksiyon (custom functions)** da gördünüz — tarayıcının içinde değil, kodunuzda tanımlanan fonksiyonlar. Hemen arkasından parantezler gelen özel bir ad gördüğünüz her an, özel bir fonksiyon kullanıyordunuz. Döngüler makalemizdeki [100 rastgele daire](https://developer.mozilla.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops#looping_code_example) örneğinde, şu şekilde görünen özel bir `draw()` fonksiyonu dahil etmiştik:

```js
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

Bu fonksiyon bir [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/canvas) öğesinin içine 100 rastgele daire çizer. Bunu her yapmak istediğimizde, tekrarlamak istediğimiz her seferde tüm o kodu baştan yazmak zorunda kalmak yerine fonksiyonu şu şekilde çağırabiliriz:

```js
draw();
```

Fonksiyonlar istediğiniz herhangi bir kodu, hatta diğer fonksiyon çağrılarını bile içerebilir. Örneğin yukarıda görülen `draw()` fonksiyonu, aşağıdaki kodla tanımlanan `random()` fonksiyonunu üç kez çağırır:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Bu fonksiyona ihtiyacımız vardı çünkü tarayıcının yerleşik [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) fonksiyonu yalnızca 0 ile 1 arasında rastgele bir ondalık sayı üretir. Biz ise 0 ile belirtilen bir sayı arasında rastgele bir tam sayı istiyorduk.

### Fonksiyonları çağırmak

Şimdiye kadar bu konuda muhtemelen netleşmişsinizdir, ancak her ihtimale karşı belirtelim: bir fonksiyon tanımlandıktan sonra onu gerçekten kullanmak için çalıştırmanız — veya çağırmanız (invoke) — gerekir. Bu, kodda bir yere fonksiyonun adını ve ardından parantezleri ekleyerek yapılır.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Bir fonksiyon oluşturmanın bu biçimi _fonksiyon bildirimi (function declaration)_ olarak da bilinir. Her zaman yukarı çekilir (hoisted), yani fonksiyonu tanımının üstünde çağırabilirsiniz ve sorunsuz çalışacaktır.

### Fonksiyon argümanları ve parametreleri

Bazı fonksiyonlar onları çağırdığınızda **argümanlar (arguments)** gerektirir — fonksiyonun işini düzgün yapabilmesi için fonksiyon parantezlerinin içine dahil edilmesi gereken değerler.

Ayrıca _argümanlar_ ile sıklıkla birbirinin yerine kullanılan **parametreler (parameters)** terimini de duyacaksınız. Gayriresmî tartışmalarda bu genellikle sorun değildir, ancak farklı anlamları vardır. Parametreler bir fonksiyon tanımında listelenen değişkenlerdir; argümanlar ise fonksiyon çağrıldığında parametreleri temsil etmek üzere fonksiyona geçirilen değerlerdir.

Bazı örneklere bakalım. [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) fonksiyonu herhangi bir argüman gerektirmez. Çağrıldığında her zaman 0 ile 1 arasında rastgele bir sayı döndürür:

```js
const myNumber = Math.random();
```

Ancak dize [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) fonksiyonu iki argümana ihtiyaç duyar — ana dizede bulunacak alt dize ve o dizenin kendisiyle değiştirileceği alt dize:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Birden çok parametre veya argüman belirtmeniz gerektiğinde bunları virgüllerle ayırırsınız.

#### İsteğe bağlı parametreler

Bazen parametreler isteğe bağlı (optional) olarak tanımlanır — fonksiyonu çağırırken karşılık gelen argümanları belirtmek zorunda değilsinizdir. Belirtmezseniz fonksiyon genellikle varsayılan bir değer kullanır. Örnek olarak, dizi [`join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) fonksiyonunun parametresi isteğe bağlıdır:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Birleştirme/sınırlama karakterini belirtmek için hiçbir argüman dahil edilmezse varsayılan olarak virgül kullanılır.

#### Varsayılan parametreler

Bir fonksiyon yazıyorsanız ve isteğe bağlı parametreler tanımlamak istiyorsanız, parametrenin adından sonra `=` ve ardından varsayılan değeri ekleyerek varsayılan değerler (default values) belirtebilirsiniz:

```js
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```

### İsimsiz fonksiyonlar ve ok fonksiyonları

Şimdiye kadar fonksiyonları yalnızca şu şekilde oluşturduk:

```js
function myFunction() {
  alert("hello");
}
```

Ancak adı olmayan bir fonksiyon da oluşturabilirsiniz:

```js
(function () {
  alert("hello");
});
```

Buna adı olmadığı için **isimsiz fonksiyon (anonymous function)** denir. Bir fonksiyon argüman olarak başka bir fonksiyon almayı beklediğinde isimsiz fonksiyonları sıkça görürsünüz. Bu durumda argüman olarak genellikle isimsiz bir fonksiyon geçirilir.

> [!NOTE]
> Bir fonksiyon oluşturmanın bu biçimi _fonksiyon ifadesi (function expression)_ olarak da bilinir. Fonksiyon bildirimlerinin aksine fonksiyon ifadeleri yukarı çekilmez (not hoisted).

#### İsimsiz fonksiyon örneği

Örneğin, kullanıcı bir metin kutusuna yazı yazdığında biraz kod çalıştırmak istediğinizi varsayalım. Bunu yapmak için metin kutusunun [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) fonksiyonunu çağırabilirsiniz. Bu fonksiyon en az iki argüman bekler:

- Dinlenecek olayın adı; bu durumda [`keydown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) olayıdır
- Olay gerçekleştiğinde çalıştırılacak bir fonksiyon.

Kullanıcı bir tuşa bastığında, tarayıcı sağladığınız fonksiyonu çağıracak ve ona kullanıcının bastığı belirli tuş da dahil olmak üzere bu olay hakkında bilgiler içeren bir parametre geçirecektir:

```js
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
```

Ayrı bir `logKey()` fonksiyonu tanımlamak yerine `addEventListener()` içine isimsiz bir fonksiyon geçirebilirsiniz:

```js
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

#### Ok fonksiyonları

Bunun gibi isimsiz bir fonksiyon geçirirseniz, kullanabileceğiniz **ok fonksiyonu (arrow function)** adlı alternatif bir biçim vardır. `function(event)` yerine `(event) =>` yazarsınız:

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

Fonksiyon yalnızca tek bir argüman alıyorsa etrafındaki parantezleri atlayabilirsiniz:

```js-nolint
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});
```

Son olarak, fonksiyonunuz yalnızca bir `return` deyimi olan tek bir satır içeriyorsa, süslü parantezleri ve `return` anahtar sözcüğünü atlayabilir ve ifadeyi örtük olarak (implicitly) döndürebilirsiniz. Aşağıdaki örnekte, orijinal dizideki her değeri iki katına çıkarmak için `Array`'in [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) metodunu kullanıyoruz:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

`map()` metodu dizideki her öğeyi verilen fonksiyona geçirir, ardından fonksiyonun dönüş değerini alır ve onu yeni bir diziye ekler.

Ok fonksiyonu çok özlüdür (concise); `map()` kodumuzu normal bir isimsiz geri çağırma (callback) fonksiyonu kullanacak şekilde yeniden yazmak şöyle görünürdü:

```js
const doubled = originals.map(function (item) {
  return item * 2;
});
```

`addEventListener()` örneğini yeniden yazmak için de aynı özlü ok fonksiyonu sözdizimini kullanabilirsiniz:

```js-nolint
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`)
);
```

Bu durumda, `undefined` olan `console.log()` değeri geri çağırma fonksiyonundan örtük olarak döndürülür.

Kodunuzu daha kısa ve daha okunabilir hale getirebildikleri için ok fonksiyonlarını kullanmanızı öneririz. Daha fazla bilgi edinmek için [JavaScript kılavuzundaki ok fonksiyonları bölümüne](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#arrow_functions) ve [ok fonksiyonları başvuru sayfamıza](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) bakın.

> [!NOTE]
> Ok fonksiyonları ile normal fonksiyonlar arasında bazı ince farklar vardır. Bunlar bu giriş eğitiminin kapsamı dışındadır ve burada tartıştığımız durumlarda bir fark yaratmaları pek olası değildir. Daha fazla bilgi edinmek için [ok fonksiyonu başvuru belgelerine](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) bakın.

#### Ok fonksiyonu canlı örneği

Yukarıda tartıştığımız `keydown` örneğinin tam çalışan bir sürümü şöyledir:

HTML:

```html
<input id="textBox" type="text" />
<div id="output"></div>
```

JavaScript:

```js
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

Sonuç - metin kutusuna yazmayı deneyin ve çıktıyı görün:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

### Fonksiyon kapsamı ve çakışmalar

Fonksiyonlarla uğraşırken önemli bir kavram olan [kapsam (scope)](https://developer.mozilla.org/en-US/docs/Glossary/Scope) hakkında biraz konuşalım. Bir fonksiyon oluşturduğunuzda, fonksiyonun içinde tanımlanan değişkenler ve diğer şeyler kendilerine ait ayrı bir **kapsamın (scope)** içindedir. Bu, kendilerine ait ayrı bölmelerinde kilitli oldukları ve fonksiyonun dışındaki koddan ulaşılamaz oldukları anlamına gelir.

Tüm fonksiyonlarınızın dışındaki en üst düzeye **küresel kapsam (global scope)** denir. Küresel kapsamda tanımlanan değerlere kodun her yerinden erişilebilir.

JavaScript esas olarak güvenlik ve organizasyon nedeniyle bu şekilde çalışır. Bazen değişkenlere kodun her yerinden erişilebilmesini istemezsiniz. Başka bir yerden çağrılan harici betikler aynı değişken adlarını kullanırlarsa kodunuzu karıştırabilir ve çakışmalara yol açarak sorunlara neden olabilirler. Bu kötü niyetle veya yalnızca kazara yapılabilir.

Örneğin, iki harici JavaScript dosyasına başvuran bir HTML dosyanız olduğunu ve her ikisinin de aynı adı kullanan tanımlanmış bir değişkene ve fonksiyona sahip olduğunu varsayalım:

```html
<!-- Excerpt from the HTML -->
<script src="first.js"></script>
<script src="second.js"></script>
<script>
  greeting();
</script>
```

```js
// first.js
const name = "Chris";
function greeting() {
  alert(`Hello ${name}: welcome to our company.`);
}
```

```js
// second.js
const name = "Zaptec";
function greeting() {
  alert(`Our company is called ${name}.`);
}
```

Bu örneği [GitHub üzerinde canlı çalışırken](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) görebilirsiniz (ayrıca [kaynak koduna](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions) bakın). Aşağıdaki açıklamayı okumadan önce onu ayrı bir tarayıcı sekmesinde yükleyin.

- Örnek bir tarayıcıda işlendiğinde, önce `Hello Chris: welcome to our company.` görüntüleyen bir uyarı kutusu (alert box) göreceksiniz; bu, ilk betik dosyasının içinde tanımlanan `greeting()` fonksiyonunun dahili betiğin içindeki `greeting()` çağrısı tarafından çağrıldığı anlamına gelir.
- Ancak ikinci betik hiç yüklenmez ve çalışmaz ve konsola bir hata yazdırılır: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Bunun nedeni `name` sabitinin `first.js` içinde zaten bildirilmiş olması ve aynı kapsamda aynı sabiti iki kez bildiremeyeceğinizdir. İkinci betik yüklenmediği için `second.js` içindeki `greeting()` fonksiyonu çağrılmak üzere mevcut değildir.
- `second.js` içinden `const name = "Zaptec";` satırını kaldırıp sayfayı yeniden yükleseydik her iki betik de yürütülürdü. Uyarı kutusu artık `Our company is called Chris.` derdi. Bir fonksiyon _yeniden bildirilirse (redeclared)_, kaynak sırasındaki son bildirim kullanılır. Önceki bildirimlerin üzerine fiilen yazılır.

Kodunuzun bölümlerini fonksiyonların içine kilitlemek bu tür sorunları önler ve en iyi uygulama (best practice) olarak kabul edilir.

Bu biraz bir apartman binasına benzer:

- Her daire, fonksiyon kapsamına benzer şekilde orada yaşayan insanlara özeldir — bir fonksiyonun içindeki kod, kendi içinde tanımlanan değişkenlere ve fonksiyonlara erişebilir, ancak o fonksiyonun dışındaki kod erişemez. Herkesin diğer herkesin dairesine erişimi olsaydı sorunlar ortaya çıkardı — insanların eşyaları taşınabilir, kırılabilir veya çalınabilirdi!
- Binanın ayrıca havuz, spor salonu veya dinlenme odası gibi herkesin erişimine açık ortak alanları da olabilir. Bu, küresel kapsam gibidir — orada bildirilen her şeye her fonksiyondan erişilebilir. Herkes ortak yaşam alanlarını kullanabilir, ki bu da mantıklıdır.

#### Kapsamla oynamak

Kapsamı göstermek için gerçek bir örneğe bakalım.

1. İlk olarak, yerel dosya sisteminizde yeni bir HTML dosyası oluşturun ve aşağıdaki kodu içine koyun:

   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Function scope example</title>
     </head>
     <body>
       <script>
         const x = 1;

         function a() {
           const y = 2;
         }

         function b() {
           const z = 3;
         }

         function output(value) {
           const para = document.createElement("p");
           document.body.appendChild(para);
           para.textContent = `Value: ${value}`;
         }
       </script>
     </body>
   </html>
   ```

   Bu kod, `a()` ve `b()` adlı iki fonksiyon ve ikisi fonksiyonların içinde, biri küresel kapsamda tanımlanan üç değişken — `x`, `y` ve `z` — içerir. Ayrıca tek bir argüman alan ve bunu sayfadaki bir paragrafa çıktı olarak veren `output()` adlı üçüncü bir fonksiyon içerir.

2. Örneği bir tarayıcıda ve metin düzenleyicinizde açın.

3. Tarayıcı geliştirici araçlarınızda JavaScript konsolunu açın. JavaScript konsolunda aşağıdaki komutu girin:

   ```js
   output(x);
   ```

   Tarayıcı görüntü alanına (viewport) `x` değişkeninin değerinin yazdırıldığını görmelisiniz.

4. Şimdi konsolunuza aşağıdakileri girmeyi deneyin:

   ```js
   output(y);
   output(z);
   ```

   Bunların her ikisi de konsola "[ReferenceError: y is not defined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined)" benzeri bir hata fırlatmalıdır. Neden böyle? Fonksiyon kapsamı yüzünden: `y` ve `z`, `a()` ve `b()` fonksiyonlarının içine kilitlenmiştir, bu nedenle küresel kapsamdan çağrıldığında `output()` onlara erişemez.

5. Peki ya başka bir fonksiyonun içinden çağrıldığında? `a()` ve `b()` fonksiyonlarını şu şekilde görünecek biçimde düzenlemeyi deneyin:

   ```js
   function a() {
     const y = 2;
     output(y);
   }

   function b() {
     const z = 3;
     output(z);
   }
   ```

   Kodu kaydedin ve tarayıcınızda yeniden yükleyin, ardından JavaScript konsolundan `a()` ve `b()` fonksiyonlarını çağırmayı deneyin:

   ```js
   a();
   b();
   ```

   Tarayıcı görüntü alanında `y` ve `z` değerlerinin yazdırıldığını görmelisiniz. Bu gayet iyi çalışır, çünkü `output()` fonksiyonu diğer fonksiyonların içinde, yazdırdığı değişkenlerin tanımlandığı aynı kapsamda çağrılmaktadır. `output()` fonksiyonunun kendisi küresel kapsamda tanımlandığı için her yerden kullanılabilir.

6. Şimdi kodunuzu şu şekilde güncellemeyi deneyin:

   ```js
   function a() {
     const y = 2;
     output(x);
   }

   function b() {
     const z = 3;
     output(x);
   }
   ```

7. Kaydedin ve tekrar yeniden yükleyin ve JavaScript konsolunuzda şunu tekrar deneyin:

   ```js
   a();
   b();
   ```

   Hem `a()` hem de `b()` çağrıları tarayıcı görüntü alanına x değerini yazdırmalıdır. Bunlar gayet iyi çalışır, çünkü `output()` çağrıları `x`'in tanımlandığı aynı kapsamda olmasa bile `x` küresel bir değişkendir — her yerde, tüm kodların içinde kullanılabilir.

8. Son olarak, kodunuzu şu şekilde güncellemeyi deneyin:

   ```js
   function a() {
     const y = 2;
     output(z);
   }

   function b() {
     const z = 3;
     output(y);
   }
   ```

9. Kaydedin ve tekrar yeniden yükleyin ve JavaScript konsolunuzda şunu tekrar deneyin:

   ```js
   a();
   b();
   ```

   Bu kez `a()` ve `b()` çağrıları konsola o sinir bozucu [ReferenceError: _değişken adı_ is not defined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined) hatasını fırlatacaktır — bunun nedeni `output()` çağrılarının ve yazdırmaya çalıştıkları değişkenlerin aynı fonksiyon kapsamlarında olmamasıdır — değişkenler bu fonksiyon çağrıları için fiilen görünmezdir.

> [!NOTE]
> [ReferenceError: "x" is not defined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined) hatası karşılaşacağınız en yaygın hatalardan biridir. Bu hatayı alırsanız ve söz konusu değişkeni tanımladığınızdan eminseniz, hangi kapsamda olduğunu kontrol edin.

##### Döngü ve koşullu ifade kapsamı üzerine bir ek bilgi

[Koşullu ifadelerin](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals) ve [döngülerin](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops) içinde bildirilen değerlerin kapsamının, değerleri `let` ve `const` ile bildirirken fonksiyon kapsamıyla aynı şekilde çalıştığını belirtmekte fayda vardır. Örneğin, yukarıdaki örneğe aşağıdaki blokları ekleseydiniz:

```js
if (x === 1) {
  const c = 4;
  let d = 5;
}

for (let i = 0; i <= 1; i++) {
  const e = 6;
  let f = 7;
}
```

`output(c)`, `output(d)`, `output(e)` veya `output(f)` çağrısı yapmak, daha önce görülen aynı **"ReferenceError: [değişken-adı] is not defined"** hatasıyla sonuçlanırdı. `output()` fonksiyonu bu değişkenlere erişemez çünkü kendi kapsamlarının içine kilitlenmişlerdir.

Eski `var` anahtar sözcüğü farklı çalışır. Eğer `c`, `d`, `e` ve `f` değişkenleri `var` kullanılarak bildirilmiş olsaydı:

```js
if (x === 1) {
  var c = 4;
  var d = 5;
}

for (let i = 0; i <= 1; i++) {
  var e = 6;
  var f = 7;
}
```

Küresel kapsama yukarı çekilirlerdi (hoisted); dolayısıyla bunları konsola çıktı olarak vermek (örneğin `output(c)` ile) çalışırdı. Ancak fonksiyonların içinde `var` ile bildirilen değişkenlerin kapsamı yine de bu fonksiyonlarla sınırlıdır.

Bu tutarsızlık kafa karışıklığına ve hatalara neden olabilir ve `var` yerine `let` ve `const` kullanılması gerekmesinin bir başka nedenidir.

### Özet

Bu makale fonksiyonların arkasındaki temel kavramları keşfetti ve uygulamaya geçip kendi özel fonksiyonunuzu oluşturma adımlarında size rehberlik edeceğimiz bir sonraki makaleye zemin hazırladı.

### Ayrıca bakınız

- [Ayrıntılı fonksiyonlar kılavuzu (Functions detailed guide)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) — burada yer almayan bazı ileri düzey özellikleri kapsar.
- [Fonksiyonlar başvurusu (Functions reference)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [Daha az kod yazmak için fonksiyonları kullanmak (Using functions to write less code)](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> - Fonksiyonlara yararlı bir giriş sunan etkileşimli bir ders.

---

## 19. Kendi Fonksiyonunuzu Oluşturun (Build your own function)

**Kaynak:** [Build your own function](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Build_your_own_function)

Temel teorinin büyük kısmı önceki makalede ele alındığından, bu makale pratik deneyim sunar. Burada kendi özel fonksiyonunuzu oluşturarak biraz pratik yapacaksınız. Bu süreçte fonksiyonlarla çalışmanın bazı yararlı ayrıntılarını da açıklayacağız.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış, önceki derste ele alındığı şekliyle JavaScript fonksiyon temellerine aşinalık.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Kendi özel fonksiyonlarınızı oluşturma deneyimi.</li>
          <li>Fonksiyonlarınıza parametreler eklemek.</li>
          <li>Fonksiyonunuzu çağırmak.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Bir fonksiyon oluşturalım

Oluşturacağımız özel fonksiyonun adı `displayMessage()` olacak. Bir web sayfasında özel bir mesaj kutusu görüntüleyecek ve bir tarayıcının yerleşik [`alert()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) fonksiyonunun özelleştirilmiş bir yedeği olarak işlev görecek. Bunu daha önce görmüştük, ancak hafızamızı bir tazeleyelim. İstediğiniz herhangi bir sayfada, tarayıcınızın JavaScript konsoluna aşağıdakini yazın:

```js
alert("This is a message");
```

`alert()` fonksiyonu tek bir argüman alır — uyarı kutusunda görüntülenen dize. Mesajı değiştirmek için dizeyi değiştirmeyi deneyin.

`alert()` fonksiyonu sınırlıdır: mesajı değiştirebilirsiniz, ancak renk veya simge gibi başka herhangi bir şeyi kolayca değiştiremezsiniz. Daha eğlenceli olacağı kanıtlanacak bir tane oluşturacağız.

### Temel fonksiyon

Başlangıç olarak, temel bir fonksiyonu bir araya getirelim.

> [!NOTE]
> Fonksiyon adlandırma kuralları için [değişken adlandırma kuralları](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables#an_aside_on_variable_naming_rules) ile aynı kuralları izlemelisiniz. Bu sorun değildir, çünkü onları birbirinden ayırt edebilirsiniz — fonksiyon adları arkalarında parantezlerle görünür, değişkenler ise görünmez.

1. Yerel dosya sisteminizde yeni bir HTML dosyası oluşturarak ve aşağıdaki kodu ona ekleyerek başlayın:

   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Function start</title>
       <style>
         .msgBox {
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);
           width: 200px;
           border-radius: 10px;
           background-color: #eeeeee;
           background-image: linear-gradient(
             to bottom,
             rgb(0 0 0 / 0),
             rgb(0 0 0 / 0.1)
           );
         }

         .msgBox p {
           line-height: 1.5;
           padding: 10px 20px;
           color: #333333;
         }

         .msgBox button {
           background: none;
           border: none;
           position: absolute;
           top: 0;
           right: 0;
           font-size: 1.1rem;
           color: #aaaaaa;
         }
       </style>
     </head>
     <body>
       <button>Display message box</button>

       <script></script>
     </body>
   </html>
   ```

   HTML basittir — gövde (body) yalnızca tek bir `<button>` içerir. Ayrıca özel mesaj kutusunu biçimlendirmek için biraz temel CSS ve JavaScript'imizi içine koymak için boş bir [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) öğesi sağladık.

2. Ardından, `<script>` öğesinin içine aşağıdakini ekleyin:

   ```js
   function displayMessage() {
     // …
   }
   ```

   Bir fonksiyon tanımladığımız anlamına gelen `function` anahtar sözcüğüyle başlıyoruz. Bunu fonksiyonumuza vermek istediğimiz ad, bir parantez kümesi ve bir süslü parantez kümesi izler. Fonksiyonumuza vermek istediğimiz tüm parametreler parantezlerin içine, fonksiyonu çağırdığımızda çalışan kod ise süslü parantezlerin içine girer.

3. Son olarak, süslü parantezlerin içine aşağıdaki kodu ekleyin:

   ```js
   const body = document.body;

   const panel = document.createElement("div");
   panel.setAttribute("class", "msgBox");
   body.appendChild(panel);

   const msg = document.createElement("p");
   msg.textContent = "This is a message box";
   panel.appendChild(msg);

   const closeBtn = document.createElement("button");
   closeBtn.textContent = "x";
   panel.appendChild(closeBtn);

   closeBtn.addEventListener("click", () => body.removeChild(panel));
   ```

#### Fonksiyon kodunu açıklamak

Bu, üzerinden geçilmesi gereken epey fazla bir koddur, bu yüzden size adım adım rehberlik edeceğiz.

İlk satır, küresel [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) nesnesinin [`body`](https://developer.mozilla.org/en-US/docs/Web/API/Document/body) özelliğini almak üzere [DOM API'sini](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) kullanarak [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/body) öğesini seçer ve daha sonra üzerinde işlemler yapabilmemiz için bunu `body` adlı bir sabite atar:

```js
const body = document.body;
```

Sonraki bölüm, bir [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) öğesi oluşturmak ve ona olan bir başvuruyu `panel` adlı bir sabitte saklamak için [`Document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) adlı bir DOM API fonksiyonunu kullanır. Bu öğe, mesaj kutumuzun dış kabı (outer container) olacaktır.

Ardından, panelimizde `msgBox` değerine sahip bir `class` özniteliği ayarlamak için [`Element.setAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) adlı bir başka DOM API fonksiyonunu kullanırız. Bu, öğeyi biçimlendirmeyi kolaylaştırmak içindir — sayfadaki CSS'e bakarsanız, mesaj kutusunu ve içeriğini biçimlendirmek için bir `.msgBox` sınıf seçicisi kullandığımızı göreceksiniz.

Son olarak, daha önce sakladığımız `body` sabiti üzerinde, bir öğeyi diğerinin alt öğesi (child) olarak içine yerleştiren [`Node.appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) adlı bir DOM fonksiyonunu çağırırız. `<body>` öğesinin içine eklemek istediğimiz alt öğe olarak panel `<div>` öğesini belirtiriz. Bunu yapmamız gerekir çünkü oluşturduğumuz öğe sayfada kendi kendine görünmeyecektir — onu nereye koyacağımızı belirtmemiz gerekir.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Sonraki iki bölüm, iki yeni öğe — bir [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p) ve bir [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) — oluşturmak ve bunları panel `<div>` öğesinin alt öğeleri olarak sayfaya eklemek için daha önce gördüğümüz aynı `createElement()` ve `appendChild()` fonksiyonlarından yararlanır. Paragrafın içine bir mesaj ve düğmenin içine bir "x" eklemek için bir öğenin metin içeriğini temsil eden [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) özelliklerini kullanırız. Bu düğme, kullanıcı mesaj kutusunu kapatmak istediğinde tıklanması/etkinleştirilmesi gereken şey olacaktır.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Son olarak, kullanıcı "close" ("kapat") düğmesine tıkladığında çağrılacak bir fonksiyon eklemek için [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) metodunu çağırırız. Kod, mesaj kutusunu kapatmak için panelin tamamını sayfadan silecektir.

Kısaca, `addEventListener()` metodu sayfadaki herhangi bir öğe üzerinde çağrılabilir ve kendisine genellikle iki argüman geçirilir: bir olayın adı ve olay gerçekleştiğinde çalıştırılacak bir fonksiyon. Bu durumda olay adı `click`'tir, yani kullanıcı düğmeye tıkladığında fonksiyon çalışacaktır. [Olaylar makalemizde](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events) olaylar hakkında çok daha fazla şey öğreneceksiniz. Fonksiyonun içindeki kod, `<body>` öğesinin belirli bir alt öğesini — bu durumda panel `<div>` öğesini — kaldırmak istediğimizi belirtmek için [`removeChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) metodunu kullanır.

```js
closeBtn.addEventListener("click", () => body.removeChild(panel));
```

Temelde bu kod bloğunun tamamı şu şekilde görünen bir HTML bloğu üretmekte ve onu sayfaya eklemektedir:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Bu, üzerinde çalışılması gereken epey fazla bir koddu — şu anda her bir parçasının tam olarak nasıl çalıştığını hatırlamıyorsanız çok fazla endişelenmeyin! Burada odaklanmak istediğimiz ana kısım fonksiyonun yapısı ve kullanımıdır, ancak bu örnek için ilginç bir şey göstermek istedik.

### Fonksiyonu çağırmak

Artık fonksiyon tanımınızı `<script>` öğenize gayet güzel yazdınız, ancak olduğu haliyle hiçbir şey yapmayacaktır.

1. Onu çağırmak için fonksiyonunuzun altına aşağıdaki satırı eklemeyi deneyin:

   ```js
   displayMessage();
   ```

   Bu satır fonksiyonu çağırır (invokes) ve hemen çalışmasını sağlar. Kodunuzu kaydedip tarayıcıda yeniden yüklediğinizde, küçük mesaj kutusunun yalnızca bir kez olmak üzere hemen belirdiğini göreceksiniz. Ne de olsa onu yalnızca bir kez çağırıyoruz.

2. Şimdi örnek sayfada tarayıcı geliştirici araçlarınızı açın, JavaScript konsoluna gidin ve satırı orada tekrar yazın; tekrar belirdiğini göreceksiniz! Bu çok eğlenceli — artık istediğimiz her an çağırabileceğimiz yeniden kullanılabilir bir fonksiyonumuz var.

Ancak muhtemelen mesaj kutusunun kullanıcı ve sistem eylemlerine yanıt olarak görünmesini isteriz. Gerçek bir uygulamada böyle bir mesaj kutusu muhtemelen yeni verilerin mevcut olmasına, bir hatanın meydana gelmiş olmasına, kullanıcının profilini silmeye çalışmasına ("bundan emin misiniz?") veya kullanıcının yeni bir kişi eklemesine ve işlemin başarıyla tamamlanmasına vb. yanıt olarak çağrılırdı.

Bu demoda, kullanıcı düğmeye tıkladığında mesaj kutusunun görünmesini sağlayacağız.
Bunun çalışmasını sağlamak için izlemeniz gereken adımlar şunlardır:

1. Eklediğiniz önceki satırı (`displayMessage();`) silin.
2. `<button>` öğesini seçin ve ona olan bir başvuruyu bir sabitte saklayın. Fonksiyon tanımının üstüne, kodunuza aşağıdaki satırı ekleyin:

   ```js
   const btn = document.querySelector("button");
   ```

3. Düğme tıklamaları için fonksiyonumuzu çağıran bir olay dinleyici oluşturun. `const btn =` satırından sonra aşağıdaki satırı ekleyin:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   `closeBtn` öğemizin tıklama olayı işleyicisine benzer bir şekilde, burada bir düğmeye tıklanmasına yanıt olarak biraz kod çağırıyoruz. Ancak bu durumda, biraz kod içeren isimsiz bir fonksiyon çağırmak yerine `displayMessage()` fonksiyonumuzu adıyla çağırıyoruz.

4. Son olarak, sayfayı kaydedip yenilemeyi deneyin — artık düğmeye tıkladığınızda mesaj kutusunun göründüğünü görmelisiniz.

Fonksiyon adından sonra parantezleri neden dahil etmediğimizi merak ediyor olabilirsiniz. Bunun nedeni fonksiyonu hemen değil — yalnızca düğmeye tıklandıktan sonra — çağırmak istememizdir. Satırı şuna değiştirmeyi denerseniz:

```js example-bad
btn.addEventListener("click", displayMessage());
```

ve kaydedip yeniden yüklerseniz, düğmeye tıklanmadan mesaj kutusunun göründüğünü göreceksiniz! Bu bağlamdaki parantezlere bazen "fonksiyon çağırma operatörü (function invocation operator)" denir. Onları yalnızca fonksiyonu geçerli kapsamda hemen çalıştırmak istediğinizde kullanırsınız.

Son deneyi denediyseniz, devam etmeden önce son değişikliği geri aldığınızdan emin olun.

> [!NOTE]
> Fonksiyonlarla daha fazla pratik yapmak için Scrimba<sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> görevi olan [İlk fonksiyonunuzu yazın (Write your first function)](https://scrimba.com/fullstack-path-c0fullstack/~04h?via=mdn) dersine göz atın.

### Fonksiyonu parametrelerle geliştirmek

Olduğu haliyle fonksiyon hâlâ pek kullanışlı değildir — her seferinde yalnızca aynı varsayılan mesajı göstermek istemeyiz. Bazı parametreler ekleyerek fonksiyonumuzu geliştirelim ve onu bazı farklı seçeneklerle çağırmamıza olanak tanıyalım.

1. Her şeyden önce, fonksiyonun ilk satırını şundan:

   ```js
   function displayMessage() {
   ```

   şuna güncelleyin:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Artık fonksiyonu çağırdığımızda, mesaj kutusunda görüntülenecek mesajı ve ne tür bir mesaj olduğunu belirtmek için parantezlerin içinde iki değişken değeri sağlayabiliriz.

2. İlk parametreden yararlanmak için fonksiyonunuzun içindeki aşağıdaki satırı:

   ```js
   msg.textContent = "This is a message box";
   ```

   şuna güncelleyin:

   ```js
   msg.textContent = msgText;
   ```

3. Son ama bir o kadar da önemli olarak, artık güncellenmiş bir mesaj metni içerecek şekilde fonksiyon çağrınızı güncellemeniz gerekir. Aşağıdaki satırı:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   şu bloğa değiştirin:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Çağırdığımız fonksiyon için parantezlerin içinde parametreler belirtmek istiyorsak, onu doğrudan çağıramayız — doğrudan kapsamda olmaması ve dolayısıyla hemen çağrılmaması için onu isimsiz bir fonksiyonun içine koymamız gerekir. Artık düğmeye tıklanana kadar çağrılmayacaktır.

4. Kodu yeniden yükleyin ve tekrar deneyin; kutuda farklı mesajların görüntülenmesini sağlamak için artık parametrenin içindeki mesajı da değiştirebilmeniz dışında yine gayet güzel çalıştığını göreceksiniz!

#### Daha karmaşık bir parametre

Sıra bir sonraki parametrede. Bu biraz daha fazla çalışma gerektirecek — onu, `msgType` parametresinin neye ayarlandığına bağlı olarak fonksiyon farklı bir simge ve farklı bir arka plan rengi görüntüleyecek şekilde ayarlayacağız.

1. Her şeyden önce, bu alıştırma için gereken simgeleri ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) ve [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) GitHub'dan indirin. Her durumda indirme düğmesine tıklayın ve bunları HTML dosyanızla aynı konuma kaydedin.

   > [!NOTE]
   > Uyarı (warning) ve sohbet (chat) simgeleri ilk olarak iconfinder.com adresinde bulunmuş ve Nazarrudin Ansyari tarafından tasarlanmıştır — Teşekkürler! (Gerçek simge sayfaları o zamandan beri taşınmış veya kaldırılmıştır.)

2. Ardından, HTML dosyanızın içindeki CSS'i bulun. Simgelere yer açmak için birkaç değişiklik yapacağız. İlk olarak, `.msgBox` genişliğini şundan:

   ```css
   width: 200px;
   ```

   şuna güncelleyin:

   ```css
   width: 242px;
   ```

3. Ardından, `.msgBox p { }` kuralının içinde aşağıdaki satırı:

   ```css
   padding: 10px 20px;
   ```

   şuna güncelleyin:

   ```css
   padding: 10px 20px 10px 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. Şimdi simgeleri görüntülemeyi ele almak için `displayMessage()` fonksiyonumuza kod eklememiz gerekiyor. Fonksiyonunuzun kapanış süslü parantezinin (`}`) hemen üstüne aşağıdaki bloğu ekleyin:

   ```js
   if (msgType === "warning") {
     msg.style.backgroundImage = "url(warning.png)";
     panel.style.backgroundColor = "red";
   } else if (msgType === "chat") {
     msg.style.backgroundImage = "url(chat.png)";
     panel.style.backgroundColor = "aqua";
   } else {
     msg.style.paddingLeft = "20px";
   }
   ```

   Burada, `msgType` parametresi `"warning"` olarak ayarlanmışsa uyarı simgesi görüntülenir ve panelin arka plan rengi kırmızıya ayarlanır. Eğer `"chat"` olarak ayarlanmışsa sohbet simgesi görüntülenir ve panelin arka plan rengi su mavisine (aqua blue) ayarlanır. `msgType` parametresi hiç ayarlanmamışsa (veya farklı bir şeye ayarlanmışsa), kodun `else { }` kısmı devreye girer ve paragrafa varsayılan iç boşluk (padding) verilir, simge verilmez ve arka plan panel rengi de ayarlanmaz. Bu, hiçbir `msgType` parametresi sağlanmazsa varsayılan bir durum sağlar, yani bunun isteğe bağlı bir parametre olduğu anlamına gelir!

5. Güncellenmiş fonksiyonumuzu test edelim; `displayMessage()` çağrısını şundan:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   şunlardan birine güncellemeyi deneyin:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Your inbox is almost full — delete some mails", "warning"),
   );

   btn.addEventListener("click", () =>
     displayMessage("Brian: Hi there, how are you today?", "chat"),
   );
   ```

   (Artık o kadar da) küçük (olmayan) fonksiyonumuzun ne kadar kullanışlı hale geldiğini görebilirsiniz.

### Nihai sonuç

Yukarıdaki tüm adımları izlediyseniz örneğiniz şu şekilde işlenmelidir (render):

```html hidden live-sample___final-result
<button>Display message box</button>
```

```css hidden live-sample___final-result
.msgBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 242px;
  border-radius: 10px;
  background-color: #eeeeee;
  background-image: linear-gradient(
    to bottom,
    rgb(0 0 0 / 0),
    rgb(0 0 0 / 0.1)
  );
}

.msgBox p {
  line-height: 1.5;
  padding: 10px 20px 10px 82px;
  background-position: 25px center;
  background-repeat: no-repeat;
  color: #333333;
}

.msgBox button {
  background: none;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.1rem;
  color: #aaaaaa;
}
```

```js hidden live-sample___final-result
const btn = document.querySelector("button");
btn.addEventListener("click", () =>
  displayMessage("Brian: Hi there, how are you today?", "chat"),
);

function displayMessage(msgText, msgType) {
  const body = document.body;

  const panel = document.createElement("div");
  panel.setAttribute("class", "msgBox");
  body.appendChild(panel);

  const msg = document.createElement("p");
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "x";
  panel.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => body.removeChild(panel));

  if (msgType === "warning") {
    msg.style.backgroundImage = "url(warning.png)";
    panel.style.backgroundColor = "red";
  } else if (msgType === "chat") {
    msg.style.backgroundImage = "url(chat.png)";
    panel.style.backgroundColor = "aqua";
  } else {
    msg.style.paddingLeft = "20px";
  }
}
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

> [!NOTE]
> Örneği çalıştırmakta sorun yaşıyorsanız, kodunuzu tamamlanmış sürümümüzle karşılaştırmaktan çekinmeyin — tam kaynak kodunu MDN Playground'da görüntülemek için işlenmiş örnekteki Play ("Çalıştır") düğmesine tıklayın.

### Özet

Sona ulaştığınız için tebrikler! Bu makale sizi, biraz daha çalışmayla gerçek bir projeye aktarılabilecek pratik bir özel fonksiyon oluşturmanın tüm sürecinden geçirdi. Bir sonraki makalede, bir diğer temel ilişkili kavramı — dönüş değerlerini (return values) — açıklayarak fonksiyonları tamamlayacağız.

---

## 20. Fonksiyon Dönüş Değerleri (Function return values)

**Kaynak:** [Function return values](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Return_values)

Fonksiyonlar hakkında tartışmamız gereken son bir temel kavram daha var — dönüş değerleri (return values). Bazı fonksiyonlar önemli bir değer döndürmez, ancak bazıları döndürür. Değerlerinin ne olduğunu, bunları kodunuzda nasıl kullanacağınızı ve fonksiyonların yararlı değerler döndürmesini nasıl sağlayacağınızı anlamak önemlidir. Aşağıda bunların hepsini ele alacağız.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış, önceki derste ele alındığı şekliyle JavaScript fonksiyon temellerine aşinalık.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Dönüş değerlerinin ne olduğu.</li>
          <li>Mevcut fonksiyonların dönüş değerlerinin nasıl kullanılacağı.</li>
          <li>Kendi fonksiyonlarınıza dönüş değerleri eklemek.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Dönüş değerleri nedir?

**Dönüş değerleri (return values)** tam olarak kulağa geldiği gibidir — bir fonksiyonun tamamlandığında döndürdüğü değerler. Dönüş değerleri hakkında açıkça düşünmemiş olsanız bile onlarla zaten birkaç kez karşılaştınız.

Tanıdık bir örneğe (bu serideki [önceki bir makaleden](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions)) geri dönelim:

```js
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

[`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) fonksiyonu `myText` dizesi üzerinde çağrılır ve kendisine iki parametre geçirilir:

- Bulunacak alt dize (`"cold"`).
- Onun yerine konulacak dize (`"warm"`).

Fonksiyon tamamlandığında (çalışmayı bitirdiğinde), bir değer döndürür; bu değer, değiştirmenin yapıldığı yeni bir dizedir. Yukarıdaki kodda, bu dönüş değerinin sonucu `newString` değişkeninde kaydedilir.

[`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) fonksiyonunun MDN başvuru sayfasına bakarsanız, [dönüş değeri (return value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value) adlı bir bölüm görürsünüz. Fonksiyonlar tarafından hangi değerlerin döndürüldüğünü bilmek ve anlamak çok yararlıdır, bu nedenle mümkün olan her yerde bu bilgiyi dahil etmeye çalışıyoruz.

Bazı fonksiyonlar herhangi bir değer döndürmez. (Bu durumlarda başvuru sayfalarımız dönüş değerini [`void`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) veya [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) olarak listeler.) Örneğin, [önceki makalenin örneğinde](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Build_your_own_function#final_result) oluşturduğumuz `displayMessage()` fonksiyonunda, fonksiyon çağrıldığında belirli bir değer döndürülmez. Yalnızca ekranda bir yerde bir kutunun belirmesini sağlar — hepsi bu!

Genel olarak bir dönüş değeri, fonksiyonun bir tür hesaplamada ara adım olduğu durumlarda kullanılır. Bir fonksiyon tarafından hesaplanması gereken bazı değerleri içeren nihai bir sonuca ulaşmak istersiniz. Fonksiyon değeri hesapladıktan sonra, bir değişkende saklanabilmesi için sonucu döndürebilir; siz de bu değişkeni hesaplamanın bir sonraki aşamasında kullanabilirsiniz.

### Bir değer nasıl döndürülür?

Özel bir fonksiyondan bir değer döndürmek için [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) anahtar sözcüğünü kullanmanız gerekir. Bunu iş başında zaten birkaç kez gördünüz. [100 rastgele daire](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops#looping_code_example) örneğimize tekrar dönersek, her dairenin _x-koordinatı_, _y-koordinatı_ ve _yarıçapı_ için rastgele bir değer üretmek amacıyla her döngü yinelemesinin (iteration) içinde bir `random()` fonksiyonuna üç çağrı yapılır. `random()` fonksiyonu bir parametre — bir tam sayı — alır ve `0` ile o sayı arasında rastgele bir tam sayı döndürür. Şu şekilde görünür:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Bu şu şekilde de yazılabilirdi:

```js
function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}
```

Ancak ilk sürümü yazmak daha hızlıdır ve daha derli topludur (compact).

Fonksiyon her çağrıldığında `Math.floor(Math.random() * number)` hesaplamasının sonucunu döndürüyoruz. Bu dönüş değeri fonksiyonun çağrıldığı noktada görünür ve kod devam eder.

Dolayısıyla aşağıdakini yürüttüğünüzde:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

Üç `random()` çağrısı sırasıyla `500`, `200` ve `35` değerlerini döndürdüyse, satır aslında sanki şuymuş gibi çalıştırılacaktır:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Satırdaki fonksiyon çağrıları önce çalıştırılır ve satırın kendisi yürütülmeden önce fonksiyon çağrılarının yerine dönüş değerleri konulur.

### Fonksiyon dönüş değerlerini uygulamak

Dönüş değerleri içeren bazı fonksiyonlar yazmayı deneyelim. Bu fonksiyon bir metin alanına bir sayı girmenize olanak tanıyacak ve o sayının karesini, küpünü ve faktöriyelini çıktı olarak verecektir.

1. Yerel dosya sisteminizde yeni bir HTML oluşturun ve aşağıdaki içeriği ona ekleyin:

   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Function library example</title>
       <style>
         input {
           font-size: 2em;
           margin: 10px 1px 0;
         }
       </style>
     </head>
     <body>
       <input class="numberInput" type="text" />
       <p></p>

       <script>
         const input = document.querySelector(".numberInput");
         const para = document.querySelector("p");
       </script>
     </body>
   </html>
   ```

   Bu, bir metin [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) alanı ve bir paragraf içeren temel bir HTML sayfasıdır. Ayrıca her iki HTML öğesine olan bir başvuruyu iki değişkende sakladığımız bir [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) öğesi de vardır. Bu sayfa metin kutusuna bir sayı girmenize ve aşağıda onunla ilgili farklı sayıları görüntülemenize olanak tanıyacaktır.

2. Mevcut iki satırın altına, bu `<script>` öğesine bazı fonksiyonlar ekleyin:

   ```js
   function squared(num) {
     return num * num;
   }

   function cubed(num) {
     return num * num * num;
   }

   function factorial(num) {
     if (num < 0) return undefined;
     if (num === 0) return 1;
     let x = num - 1;
     while (x > 1) {
       num *= x;
       x--;
     }
     return num;
   }
   ```

   `squared()` ve `cubed()` fonksiyonları oldukça açıktır — parametre olarak verilen sayının karesini veya küpünü döndürürler. `factorial()` fonksiyonu ise verilen sayının [faktöriyelini](https://en.wikipedia.org/wiki/Factorial) döndürür.

3. Mevcut fonksiyonların altına aşağıdaki olay işleyicisini (event handler) ekleyerek metin girdisine girilen sayı hakkındaki bilgileri yazdırmanın bir yolunu dahil edin:

   ```js
   input.addEventListener("change", () => {
     const num = parseFloat(input.value);
     if (isNaN(num)) {
       para.textContent = "You need to enter a number!";
     } else {
       para.textContent = `${num} squared is ${squared(num)}. `;
       para.textContent += `${num} cubed is ${cubed(num)}. `;
       para.textContent += `${num} factorial is ${factorial(num)}. `;
     }
   });
   ```

4. Kodunuzu kaydedin, bir tarayıcıda yükleyin ve deneyin.

Yukarıdaki 3. adımda yer alan `addEventListener()` fonksiyonu için bazı açıklamalar şunlardır:

- Bir `change` olay dinleyicisi (event listener) ekleyerek, bu fonksiyon metin girdisinde `change` olayı her tetiklendiğinde — yani metin `input` alanına yeni bir değer girildiğinde ve gönderildiğinde (bir değer girin, ardından <kbd>Tab</kbd> veya <kbd>Return</kbd> tuşuna basarak girdiden odağı kaldırın) — çalışır. Bu isimsiz fonksiyon çalıştığında, `input` içindeki değer `num` sabitinde saklanır.
- `if` deyimi, girilen değer bir sayı değilse bir hata mesajı yazdırır. Koşul, `isNaN(num)` ifadesinin `true` döndürüp döndürmediğini kontrol eder. [`isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) fonksiyonu `num` değerinin bir sayı olmadığını (Not a Number) test eder — öyleyse `true`, değilse `false` döndürür.
- Koşul `false` döndürürse `num` değeri bir sayıdır ve fonksiyon paragraf öğesinin içine sayının kare, küp ve faktöriyel değerlerini belirten bir cümle yazdırır. Cümle, gerekli değerleri hesaplamak için `squared()`, `cubed()` ve `factorial()` fonksiyonlarını çağırır.

#### Nihai sonuç

Tamamlandığında örnek şu şekilde işlenmelidir (render):

```html
<input class="numberInput" type="text" />
<p></p>
```

```css
input {
  font-size: 2em;
  margin: 10px 1px 0;
}
```

```js
const input = document.querySelector(".numberInput");
const para = document.querySelector("p");

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  let x = num;
  while (x > 1) {
    num *= x - 1;
    x--;
  }

  return num;
}

input.addEventListener("change", () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "You need to enter a number!";
  } else {
    para.textContent = `${num} squared is ${squared(num)}. `;
    para.textContent += `${num} cubed is ${cubed(num)}. `;
    para.textContent += `${num} factorial is ${factorial(num)}. `;
  }
});
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Metin alanına bir sayı girmeyi deneyin ve Return/Enter tuşuna basın.

> [!NOTE]
> Örneği çalıştırmakta sorun yaşıyorsanız, kodunuzu tamamlanmış sürümümüzle karşılaştırarak kontrol edin — tam kaynak kodunu MDN Playground'da görmek için işlenmiş örnekteki Play ("Çalıştır") düğmesine basın.

#### Kendi fonksiyonlarınızdan bazılarını ekleyin!

Bu noktada, kendinize ait birkaç fonksiyon yazmayı ve bunları kütüphaneye eklemeyi denemenizi istiyoruz. Sayının kareköküne veya küpköküne ne dersiniz? Ya da belirli bir yarıçapa sahip bir dairenin çevresine?

Fonksiyonlarla ilgili bazı ekstra ipuçları:

- Fonksiyonların içine _hata işleme (error handling)_ yazmanın başka bir örneğine bakın. Gerekli tüm parametrelerin doğrulandığını ve isteğe bağlı tüm parametrelerin sağlanan bir tür varsayılan değere sahip olduğunu kontrol etmek genellikle iyi bir fikirdir. Bu şekilde programınızın hata fırlatma olasılığı daha düşük olacaktır.
- Bir _fonksiyon kütüphanesi (function library)_ oluşturma fikri üzerinde düşünün. Programlama kariyerinizde ilerledikçe aynı tür şeyleri tekrar tekrar yapmaya başlayacaksınız. Bu tür işleri yapmak için kendi yardımcı fonksiyonlar (utility functions) kütüphanenizi oluşturmak iyi bir fikirdir. Bunları yeni kodlara kopyalayabilir, hatta ihtiyaç duyduğunuz her yerde doğrudan HTML sayfalarına uygulayabilirsiniz.

### Özet

İşte karşınızda — fonksiyonlar eğlencelidir, çok kullanışlıdır ve sözdizimleri ve işlevsellikleri açısından konuşulacak çok şey olsa da oldukça anlaşılırdırlar.

Bir sonraki makalede, son birkaç makalede fonksiyonlar hakkında size verdiğimiz tüm bilgileri ne kadar iyi anladığınızı ve aklınızda tuttuğunuzu kontrol etmek için kullanabileceğiniz bazı testler vereceğiz.

### Ayrıca bakınız

- [Derinlemesine fonksiyonlar (Functions in-depth)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) — fonksiyonlarla ilgili daha ileri düzey bilgileri kapsayan ayrıntılı bir kılavuz.
- [JavaScript'te geri çağırma fonksiyonları (Callback functions in JavaScript)](https://www.impressivewebs.com/callback-functions-javascript/) — yaygın bir JavaScript kalıbı, bir fonksiyonu başka bir fonksiyona _argüman olarak_ geçirmektir. Daha sonra ilk fonksiyonun içinde çağrılır. Bu, bu kursun kapsamının biraz dışındadır ancak çok geçmeden incelenmeye değerdir.

---

## 21. Becerilerinizi Test Edin: Fonksiyonlar (Test your skills: Functions)

**Kaynak:** [Test your skills: Functions](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Functions)

Bu beceri testinin amacı, [Fonksiyonlar — yeniden kullanılabilir kod blokları](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions), [Kendi fonksiyonunuzu oluşturun](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Build_your_own_function) ve [Fonksiyon dönüş değerleri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Return_values) makalelerimizi anlayıp anlamadığınızı değerlendirmenize yardımcı olmaktır.

> [!NOTE]
> Yardım almak için [Becerilerinizi test edin](https://developer.mozilla.org/en-US/docs/Learn_web_development#test_your_skills) kullanım kılavuzumuzu okuyun. Ayrıca [iletişim kanallarımızdan](https://developer.mozilla.org/en-US/docs/MDN/Community/Communication_channels) birini kullanarak da bize ulaşabilirsiniz.

### DOM işleme: yararlı kabul edilir

Aşağıdaki sorulardan bazıları, onları tamamlamak için biraz [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM) işleme (manipulation) kodu yazmanızı gerektirir — örneğin yeni HTML öğeleri oluşturmak, metin içeriklerini belirli dize değerlerine eşit olacak şekilde ayarlamak ve bunları sayfadaki mevcut öğelerin içine yerleştirmek — hepsi JavaScript aracılığıyla.

Kursta bunu henüz açıkça öğretmedik, ancak bundan yararlanan bazı örnekler görmüş olacaksınız ve soruları başarıyla yanıtlamak için hangi DOM API'lerine ihtiyacınız olduğu konusunda biraz araştırma yapmanızı istiyoruz. İyi bir başlangıç noktası [DOM betik yazımına giriş (DOM scripting introduction)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) eğitimimizdir.

### Etkileşimli görev

Her şeyden önce size, [öğrenme ortağımız](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds) [Scrimba](https://scrimba.com/home) tarafından oluşturulan, fonksiyon dönüş değerlerini içeren eğlenceli, etkileşimli bir görev veriyoruz.

Gömülü etkileşimli dersi (scrim) izleyin ve talimatları izleyip kodu düzenleyerek zaman çizelgesindeki (küçük hayalet simgesi) görevi tamamlayın. İşiniz bittiğinde, eğitmenin çözümünün sizinkiyle nasıl eşleştiğini kontrol etmek için dersi izlemeye devam edebilirsiniz.

<mdn-scrim-inline url="https://scrimba.com/learn-javascript-c0v/~02h" scrimtitle="Returning values in functions" survey="true"></scrim-inline>

### Fonksiyonlar 1

İlk fonksiyonlar görevimizi tamamlamak için:

1. Sağlanan diziden (`names`) rastgele bir adı sağlanan paragrafa (`para`) yazdıran bir fonksiyon — `chooseName()` — tanımlayın.
2. `chooseName()` fonksiyonunu bir kez çağırın.

```html
<p></p>
```

```css
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

// Don't edit the code above here!

// Add your code here
```

Güncellenmiş kodunuz rastgele bir ad çıktı olarak vermelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

function chooseName() {
  const randomNumber = Math.floor(Math.random() * names.length);
  const choice = names[randomNumber];
  para.textContent = choice;
}

chooseName();
```

```js
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

function chooseName() {
  const randomNumber = Math.floor(Math.random() * names.length);
  const choice = names[randomNumber];
  para.textContent = choice;
}

chooseName();
```

</details>

### Fonksiyonlar 2

Bu görev, sağlanan beş girdi değişkenine dayanarak sağlanan `<canvas>` öğesi (başvuru değişkeni `canvas`, bağlam `ctx` içinde mevcuttur) üzerine bir dikdörtgen çizen bir fonksiyon oluşturmanızı gerektirir:

- `x` — dikdörtgenin x koordinatı.
- `y` — dikdörtgenin y koordinatı.
- `width` — dikdörtgenin genişliği.
- `height` — dikdörtgenin yüksekliği.
- `color` — dikdörtgenin rengi.

Görevin başlangıç noktası şu şekilde görünür (`<canvas>` içinde henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```html
<canvas width="240" height="160"></canvas>
```

```css
canvas {
  border: 1px solid black;
}
```

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";

// Don't edit the code above here!

// Add your code here
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

function drawSquare(x, y, width, height, color) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

drawSquare(x, y, width, height, color);
```

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";

function drawSquare(x, y, width, height, color) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

drawSquare(x, y, width, height, color);
```

</details>

### Fonksiyonlar 3

Bu görevde, üzerinde üç iyileştirme yapmak amacıyla Görev 1'de ortaya konan soruna geri dönüyorsunuz.

Görevi tamamlamak için:

1. Rastgele sayıyı üreten kodu, rastgele sayının aralarında olması gereken iki genel sınırı parametre olarak alan ve sonucu döndüren `random()` adlı ayrı bir fonksiyona dönüştürerek yeniden düzenleyin (refactor).
2. `chooseName()` fonksiyonunu rastgele sayı fonksiyonundan yararlanacak, içinden seçim yapılacak diziyi bir parametre olarak alacak (böylece daha esnek hale gelecek) ve sonucu döndürecek şekilde güncelleyin.
3. Döndürülen sonucu paragrafın (`para`) `textContent` özelliğine yazdırın.

Görevin başlangıç noktası şu şekilde görünür:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

// Don't edit the code above here!

// Update the code below here

function chooseName() {
  const randomNumber = Math.floor(Math.random() * names.length);
  const choice = names[randomNumber];
  para.textContent = choice;
}

chooseName();
```

Başlangıç noktasıyla aynı göründüğü için bu görevde tamamlanmış içerik sağlamadık. Kod yalnızca yeniden düzenlenmiştir (refactored).

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function chooseName(array) {
  const choice = array[random(0, array.length)];
  return choice;
}

para.textContent = chooseName(names);
```

```js
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function chooseName(array) {
  const choice = array[random(0, array.length)];
  return choice;
}

para.textContent = chooseName(names);
```

</details>

### Fonksiyonlar 4

Bu görevde bir adlar dizimiz var ve yalnızca 5 karakterden daha kısa olan adları içeren bir dizi elde etmek için [`Array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) kullanıyoruz. Filtreye şu anda `isShort()` adlı isimlendirilmiş bir fonksiyon geçirilmektedir. Bu fonksiyon adın uzunluğunu kontrol eder; ad 5 karakterden daha kısaysa `true`, aksi takdirde `false` döndürür.

Görevi tamamlamak için kodu, `isShort()` içindeki işlevsellik bunun yerine doğrudan `filter()` çağrısının içine bir ok fonksiyonu (arrow function) olarak dahil edilecek şekilde güncelleyin. Onu ne kadar derli toplu (compact) hale getirebileceğinizi görün.

Görevin başlangıç noktası şu şekilde görünür:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

// Don't edit the code above here!

// Update the code below here

function isShort(name) {
  return name.length < 5;
}

const shortNames = names.filter(isShort);
para.textContent = shortNames;
```

Başlangıç noktasıyla aynı göründüğü için bu görevde tamamlanmış içerik sağlamadık. Kod yalnızca yeniden düzenlenmiştir.

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

// Update the code below here

const shortNames = names.filter((name) => name.length < 5);
para.textContent = shortNames;
```

```js
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

const shortNames = names.filter((name) => name.length < 5);
para.textContent = shortNames;
```

</details>

---

## 22. Olaylara Giriş (Introduction to events)

**Kaynak:** [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events)

Olaylar (events), programladığınız sistemde gerçekleşen ve kodunuzun onlara tepki verebilmesi için sistemin size bildirdiği şeylerdir.
Örneğin, kullanıcı bir web sayfasındaki bir düğmeye tıklarsa, bir bilgi kutusu görüntüleyerek bu eyleme tepki vermek isteyebilirsiniz.
Bu makalede olayları çevreleyen bazı önemli kavramları tartışıyor ve tarayıcılarda nasıl çalıştıklarının temellerine bakıyoruz.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış, önceki derslerde ele alındığı şekliyle JavaScript temellerine aşinalık.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Olayların ne olduğu — önemli bir şey gerçekleştiğinde tarayıcı tarafından tetiklenen ve geliştiricinin buna yanıt olarak biraz kod çalıştırabildiği bir sinyal.</li>
          <li><code>addEventListener()</code> (ve <code>removeEventListener()</code>) ve olay işleyici özelliklerini kullanarak olay işleyicileri (event handlers) kurmak.</li>
          <li>Satır içi olay işleyici öznitelikleri ve bunları neden kullanmamanız gerektiği.</li>
          <li>Olay nesneleri (Event objects).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Olay nedir?

Olaylar (events), programladığınız sistemde gerçekleşen şeylerdir — sistem, bir olay meydana geldiğinde bir tür sinyal üretir (veya "tetikler" — "fires") ve olay meydana geldiğinde bir eylemin otomatik olarak gerçekleştirilebilmesi (yani biraz kodun çalıştırılması) için bir mekanizma sağlar.
Olaylar tarayıcı penceresinin içinde tetiklenir ve içinde bulunan belirli bir öğeye bağlanma eğilimindedir. Bu tek bir öğe, bir öğeler kümesi, geçerli sekmede yüklü olan HTML belgesi veya tüm tarayıcı penceresi olabilir.
Meydana gelebilecek pek çok farklı olay türü vardır.

Örneğin:

- Kullanıcı belirli bir öğeyi seçer, ona tıklar veya imleci onun üzerine getirir (hover).
- Kullanıcı klavyede bir tuşa basar.
- Kullanıcı tarayıcı penceresini yeniden boyutlandırır veya kapatır.
- Bir web sayfasının yüklenmesi tamamlanır.
- Bir form gönderilir.
- Bir video oynatılır, duraklatılır veya biter.
- Bir hata meydana gelir.

Bundan (ve [olay dizinine (event index)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events#event_index) göz atmaktan), tetiklenebilecek **çok fazla** olay olduğu sonucunu çıkarabilirsiniz.

Bir olaya tepki vermek için ona bir **olay dinleyici (event listener)** bağlarsınız. Bu, olayın tetiklenmesini dinleyen bir kod özelliğidir. Olay tetiklendiğinde, olayın tetiklenmesine yanıt vermek üzere (olay dinleyici tarafından başvurulan veya onun içinde yer alan) bir **olay işleyici (event handler)** fonksiyonu çağrılır. Böyle bir kod bloğu bir olaya yanıt olarak çalışacak şekilde kurulduğunda, **bir olay işleyici kaydettiğimizi (registering an event handler)** söyleriz.

#### Bir örnek: tıklama olayını işlemek

Aşağıdaki örnekte sayfada tek bir [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) öğemiz var:

```html
<button>Change color</button>
```

```css
button {
  margin: 10px;
}
```

Ardından biraz JavaScript kodumuz var. Buna bir sonraki bölümde daha ayrıntılı olarak bakacağız, ancak şimdilik yalnızca şunu söyleyebiliriz: düğmenin `"click"` olayına bir olay dinleyici ekler ve içerilen işleyici fonksiyonu sayfa arka planını rastgele bir renge ayarlayarak olaya tepki verir:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

Örnek çıktı aşağıdaki gibidir. Düğmeye tıklamayı deneyin:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

### addEventListener() kullanmak

Son örnekte gördüğümüz gibi, olayları tetikleyebilen nesnelerin bir [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) metodu vardır ve olay dinleyicileri eklemek için önerilen mekanizma budur.

Son örnekteki koda daha yakından bakalım:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

HTML [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) öğesi, kullanıcı ona tıkladığında bir `click` olayı tetikleyecektir. Bir olay dinleyici eklemek için üzerinde `addEventListener()` metodunu çağırırız; bu metot iki parametre alır:

- `click` olayını dinlemek istediğimizi belirtmek için `"click"` dizesi. Düğmeler, kullanıcı faresini düğmenin üzerine getirdiğinde [`"mouseover"`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event) veya düğmeye odaklanılmışken kullanıcı bir tuşa bastığında [`"keydown"`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) gibi başka pek çok olayı da tetikleyebilir.
- olay gerçekleştiğinde çağrılacak bir fonksiyon. Bizim durumumuzda tanımlanan isimsiz fonksiyon rastgele bir RGB rengi üretir ve sayfa [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/body) öğesinin [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) özelliğini bu renge ayarlar.

Ayrıca ayrı bir isimlendirilmiş fonksiyon oluşturabilir ve `addEventListener()` metodunun ikinci parametresinde ona şu şekilde başvurabilirsiniz:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);
```

#### Diğer olayları dinlemek

Bir `<button>` öğesi tarafından tetiklenebilecek pek çok farklı olay vardır. Deney yapalım.

İlk olarak, yerel dosya sisteminizde yeni bir HTML dosyası oluşturun ve aşağıdaki kodu ona ekleyin:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Random color example — addEventListener()</title>
    <style>
      button {
        margin: 10px;
      }
    </style>
  </head>
  <body>
    <button>Change color</button>
    <script>
      const btn = document.querySelector("button");

      function random(number) {
        return Math.floor(Math.random() * (number + 1));
      }

      btn.addEventListener("click", () => {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
      });
    </script>
  </body>
</html>
```

Tarayıcınızda açın ve biraz kurcalayın. Bu yalnızca zaten oynadığınız basit rastgele renk örneğinin bir kopyasıdır.

Şimdi `click` ifadesini sırayla aşağıdaki farklı değerlere değiştirmeyi ve sonuçları tarayıcıda gözlemlemeyi deneyin:

- [`focus`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event) ve [`blur`](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) — Düğmeye odaklanıldığında ve odak kaldırıldığında renk değişir; düğmeye odaklanmak için Tab tuşuna basmayı ve odağı düğmeden uzaklaştırmak için tekrar Tab tuşuna basmayı deneyin.
  Bunlar genellikle odaklanıldığında form alanlarını doldurma hakkında bilgi görüntülemek veya bir form alanı yanlış bir değerle doldurulursa bir hata mesajı görüntülemek için kullanılır.
- [`dblclick`](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event) — Renk yalnızca düğmeye çift tıklandığında değişir.
- [`mouseover`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event) ve [`mouseout`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event) — Renk sırasıyla fare işaretçisi düğmenin üzerine geldiğinde veya işaretçi düğmenin üzerinden ayrıldığında değişir.

`click` gibi bazı olaylar hemen hemen her öğede kullanılabilir. Diğerleri ise daha spesifiktir ve yalnızca belirli durumlarda yararlıdır: örneğin [`play`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play_event) olayı yalnızca [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video) gibi oynatma işlevselliğine sahip öğelerde kullanılabilir.

#### Dinleyicileri kaldırmak

`addEventListener()` kullanarak bir olay dinleyici eklediyseniz, isterseniz onu tekrar kaldırabilirsiniz. Bunu yapmanın en yaygın yolu [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) metodunu kullanmaktır. Örneğin, aşağıdaki satır daha önce gördüğümüz `click` olay işleyicisini kaldıracaktır:

```js
btn.removeEventListener("click", changeBackground);
```

Basit, küçük programlar için eski, kullanılmayan olay işleyicilerini temizlemek gerekli değildir; ancak daha büyük, daha karmaşık programlar için verimliliği artırabilir.
Ayrıca olay işleyicilerini kaldırma yeteneği, aynı düğmenin farklı koşullarda farklı eylemler gerçekleştirmesini sağlamanıza olanak tanır: yapmanız gereken tek şey işleyicileri eklemek veya kaldırmaktır.

#### Tek bir olay için birden çok dinleyici eklemek

Farklı işleyiciler sağlayarak [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) metoduna birden fazla çağrı yaparak, tek bir olaya yanıt olarak çalışan birden çok işleyici fonksiyonuna sahip olabilirsiniz:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Artık öğeye tıklandığında her iki fonksiyon da çalışacaktır.

### Diğer olay dinleyici mekanizmaları

Olay işleyicilerini kaydetmek için `addEventListener()` kullanmanızı öneririz. En güçlü metottur ve daha karmaşık programlarla en iyi şekilde ölçeklenir. Ancak görebileceğiniz olay işleyicileri kaydetmenin iki yolu daha vardır: _olay işleyici özellikleri (event handler properties)_ ve _satır içi olay işleyicileri (inline event handlers)_.

#### Olay işleyici özellikleri

Olayları tetikleyebilen nesneler (düğmeler gibi) genellikle adı `on` ve ardından bir olayın adı olan özelliklere de sahiptir. Örneğin, öğelerin bir `onclick` özelliği vardır.
Buna **olay işleyici özelliği (event handler property)** denir. Olayı dinlemek için işleyici fonksiyonunu özelliğe atayabilirsiniz.

Örneğin, rastgele renk örneğini şu şekilde yeniden yazabiliriz:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};
```

İşleyici özelliğini isimlendirilmiş bir fonksiyona da ayarlayabilirsiniz:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```

Olay işleyici özelliklerinin `addEventListener()` metoduna kıyasla dezavantajları vardır. En önemlilerinden biri, [tek bir olay için birden fazla dinleyici ekleyememenizdir](#tek-bir-olay-için-birden-çok-dinleyici-eklemek). Aşağıdaki kalıp çalışmaz, çünkü özellik değerini ayarlamaya yönelik sonraki tüm girişimler öncekilerin üzerine yazacaktır:

```js
element.onclick = function1;
element.onclick = function2;
```

#### Satır içi olay işleyicileri — bunları kullanmayın

Kodunuzda şuna benzer bir kalıp da görebilirsiniz:

```html
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

Web'de bulunan en eski olay işleyici kaydetme yöntemi, yukarıda gösterilen gibi [_olay işleyici HTML özniteliklerini (event handler HTML attributes)_](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes#event_handler_attributes) (veya _satır içi olay işleyicilerini_) içeriyordu — öznitelik değeri, olay gerçekleştiğinde çalıştırmak istediğiniz JavaScript kodunu içerir.
Yukarıdaki örnek aynı sayfadaki bir [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) öğesinin içinde tanımlanan bir fonksiyonu çağırır, ancak doğrudan özniteliğin içine de JavaScript ekleyebilirsiniz, örneğin:

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Olay işleyici özelliklerinin birçoğu için HTML özniteliği karşılıkları bulabilirsiniz; ancak bunları kullanmamalısınız — kötü uygulama (bad practice) olarak kabul edilirler.
Gerçekten hızlı bir şey yapıyorsanız bir olay işleyici özniteliği kullanmak kolay görünebilir, ancak hızla yönetilemez ve verimsiz hale gelirler.

Başlangıç olarak, okunması zorlaştığı için HTML'iniz ile JavaScript'inizi birbirine karıştırmak iyi bir fikir değildir. JavaScript'inizi ayrı tutmak iyi bir uygulamadır ve ayrı bir dosyadaysa onu birden çok HTML belgesine uygulayabilirsiniz.

Tek bir dosyada bile satır içi olay işleyicileri iyi bir fikir değildir.
Tek bir düğme sorun değildir, peki ya 100 düğmeniz olsaydı? Dosyaya 100 öznitelik eklemeniz gerekirdi; bu hızla bir bakım kâbusuna dönüşürdü.
JavaScript ile, kaç tane olursa olsun sayfadaki tüm düğmelere şuna benzer bir şey kullanarak kolayca bir olay işleyici fonksiyonu ekleyebilirsiniz:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Son olarak, pek çok yaygın sunucu yapılandırması bir güvenlik önlemi olarak satır içi JavaScript'e izin vermeyecektir.

**HTML olay işleyici özniteliklerini asla kullanmamalısınız** — bunlar güncelliğini yitirmiştir ve bunları kullanmak kötü bir uygulamadır.

### Olay nesneleri

Bazen bir olay işleyici fonksiyonunun içinde `event`, `evt` veya `e` gibi bir adla belirtilmiş bir parametre görürsünüz.
Buna **olay nesnesi (event object)** denir ve ekstra özellikler ve bilgiler sağlamak amacıyla olay işleyicilerine otomatik olarak geçirilir.
Örneğin, rastgele renk örneğimizi bir olay nesnesi içerecek şekilde yeniden yazalım:

```html
<button>Change color</button>
```

```css
button {
  margin: 10px;
  font-size: 300%;
  padding: 30px;
}
```

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);
```

Aşağıda canlı çalışan bu örneğe göz atın. Evet, `<button>` öğesini gerçekten çok büyük yaptık!

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Fonksiyona bir olay nesnesi olan **e**'yi dahil ediyoruz ve düğmenin kendisi olan `e.target` üzerinde bir arka plan rengi stili ayarlıyoruz.
Olay nesnesinin `target` (hedef) özelliği her zaman olayın üzerinde meydana geldiği öğeye bir başvurudur.
Dolayısıyla bu örnekte sayfa üzerinde değil, düğme üzerinde rastgele bir arka plan rengi ayarlıyoruz.

> [!NOTE]
> Olay nesnesi için istediğiniz herhangi bir adı kullanabilirsiniz — yalnızca olay işleyici fonksiyonunun içinde başvurabileceğiniz bir ad seçmeniz gerekir.
> Kısa ve hatırlaması kolay olduğu için geliştiriciler tarafından yaygın olarak `e`, `evt` ve `event` kullanılır.
> Tutarlı olmak — kendi içinizde ve mümkünse başkalarıyla — her zaman iyidir.

#### Olay nesnelerinin ekstra özellikleri

Çoğu olay nesnesi, olay nesnesi üzerinde kullanılabilen standart bir özellikler ve metotlar kümesine sahiptir; tam liste için [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) nesnesi başvurusuna bakın.

Bazı olay nesneleri, o belirli olay türüyle ilgili ekstra özellikler ekler. Örneğin, kullanıcı bir tuşa bastığında [`keydown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) olayı tetiklenir. Olay nesnesi, hangi tuşa basıldığını size söyleyen bir `key` özelliğine sahip özelleşmiş bir `Event` nesnesi olan [`KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) nesnesidir:

```html
<input id="textBox" type="text" />
<div id="output"></div>
```

```js
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
```

```css
div {
  margin: 0.5rem 0;
}
```

Metin kutusuna yazmayı deneyin ve çıktıyı görün:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

### Varsayılan davranışı engellemek

Bazen bir olayın varsayılan olarak yaptığı şeyi yapmasını engellemek istediğiniz bir durumla karşılaşırsınız.
En yaygın örnek bir web formu, örneğin özel bir kayıt formudur.
Bilgileri doldurup gönder (submit) düğmesine tıkladığınızda, doğal davranış verilerin işlenmek üzere sunucudaki belirli bir sayfaya gönderilmesi ve tarayıcının bir tür "başarı mesajı" sayfasına (veya başka bir sayfa belirtilmemişse aynı sayfaya) yönlendirilmesidir.

Sorun, kullanıcı verileri doğru şekilde göndermediğinde ortaya çıkar — bir geliştirici olarak sunucuya gönderimi engellemek ve neyin yanlış olduğunu ve işleri düzeltmek için ne yapılması gerektiğini söyleyen bir hata mesajı vermek istersiniz.
Bazı tarayıcılar otomatik form verisi doğrulama özelliklerini destekler, ancak birçoğu desteklemediği için bunlara güvenmemeniz ve kendi doğrulama kontrollerinizi uygulamanız önerilir.
Bir örneğe bakalım.

İlk olarak, adınızı ve soyadınızı girmenizi gerektiren basit bir HTML formu:

```html
<form action="#">
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text" />
  </div>
  <div>
    <input id="submit" type="submit" />
  </div>
</form>
<p></p>
```

```css
div {
  margin-bottom: 10px;
}
```

Şimdi biraz JavaScript — burada [`submit`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) olayı (submit olayı bir form gönderildiğinde form üzerinde tetiklenir) için bir işleyicinin içinde metin alanlarının boş olup olmadığını test eden temel bir kontrol uyguluyoruz.
Boşlarsa, olay nesnesi üzerinde — form gönderimini durduran — [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) fonksiyonunu çağırırız ve ardından kullanıcıya neyin yanlış olduğunu söylemek için formumuzun altındaki paragrafta bir hata mesajı görüntüleriz:

```js
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
});
```

Açıkçası bu oldukça zayıf bir form doğrulamasıdır — örneğin kullanıcının alanlara girilen boşluklarla veya sayılarla formu doğrulamasını engellemez — ancak örnek amaçları için yeterlidir.

Tam örneği [canlı çalışırken](https://mdn.github.io/learning-area/javascript/building-blocks/preventdefault/) görebilirsiniz — orada deneyin. [Kaynak koduna](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/preventdefault/) da bakın.

### Yalnızca web sayfaları değil

Olaylar JavaScript'e özgü değildir — çoğu programlama dilinin bir tür olay modeli vardır ve modelin çalışma şekli çoğu zaman JavaScript'in yönteminden farklıdır.
Aslında web sayfaları için JavaScript'teki olay modeli, diğer ortamlarda kullanıldığı şekliyle JavaScript için olay modelinden farklıdır.

Örneğin [Node.js](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs), geliştiricilerin ağ ve sunucu tarafı uygulamaları oluşturmak için JavaScript kullanmasına olanak tanıyan çok popüler bir JavaScript çalışma zamanı ortamıdır (runtime).
[Node.js olay modeli](https://nodejs.org/api/events.html), olayları dinlemek için dinleyicilere (listeners) ve periyodik olarak olaylar yaymak için yayıcılara (emitters) dayanır — kulağa o kadar farklı gelmez, ancak kod oldukça farklıdır; bir olay dinleyici kaydetmek için `on()` ve bir kez çalıştıktan sonra kaydını silen bir olay dinleyici kaydetmek için `once()` gibi fonksiyonlardan yararlanır.
Node.js [HTTP connect olayı belgeleri](https://nodejs.org/api/http.html#event-connect) iyi bir örnek sunar.

Ayrıca [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) adlı bir teknolojiyi kullanarak çapraz tarayıcı eklentileri (add-ons) — tarayıcı işlevselliği geliştirmeleri — oluşturmak için de JavaScript kullanabilirsiniz.
Olay modeli web olayları modeline benzer, ancak biraz farklıdır — olay dinleyici özellikleri [deve hörgücü yazımıyla (camel case)](https://developer.mozilla.org/en-US/docs/Glossary/Camel_case) yazılır (`onmessage` yerine `onMessage` gibi) ve `addListener` fonksiyonuyla birleştirilmeleri gerekir.
Bir örnek için [`runtime.onMessage`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) sayfasına bakın.

Öğreniminizin bu aşamasında bu tür diğer ortamlar hakkında hiçbir şey anlamanıza gerek yoktur; yalnızca olayların farklı programlama ortamlarında farklılık gösterebileceğini netleştirmek istedik.

### Özet

Bu bölümde olayların ne olduğunu, olayların nasıl dinleneceğini ve onlara nasıl yanıt verileceğini öğrendik.

Şimdiye kadar bir web sayfasındaki öğelerin diğer öğelerin içine yerleştirilebildiğini (nested) gördünüz. Örneğin [Varsayılan davranışı engellemek](#varsayılan-davranışı-engellemek) örneğinde, [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) öğelerinin içine yerleştirilmiş, bunların da sırasıyla bir [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form) öğesinin içine yerleştirildiği bazı metin kutularımız var. `<form>` öğesine bir tıklama olayı dinleyicisi bağlandığında ve kullanıcı metin kutularından birinin içine tıkladığında ne olur? İlişkili olay işleyici fonksiyonu, bir sonraki derste ele alınan _olay kabarcıklanması (event bubbling)_ adlı bir süreç aracılığıyla yine de tetiklenir.

---

## 23. Olay Kabarcıklanması (Event bubbling)

**Kaynak:** [Event bubbling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling)

Bir web sayfasının _öğelerden (elements)_ — başlıklar, metin paragrafları, resimler, düğmeler vb. — oluştuğunu ve bu öğelerin başına gelen olayları dinleyebileceğinizi gördük. Örneğin bir düğmeye bir dinleyici ekleyebilirsiniz ve kullanıcı düğmeye tıkladığında bu dinleyici çalışacaktır.

Ayrıca bu öğelerin birbirinin _içine yerleştirilebildiğini (nested)_ de gördük: örneğin bir [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) öğesi bir [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) öğesinin içine yerleştirilebilir. Bu durumda `<div>` öğesine _üst (parent)_ öğe, `<button>` öğesine ise _alt (child)_ öğe deriz.

Bu bölümde **olay kabarcıklanmasına (event bubbling)** bakacağız — bu, bir üst öğeye bir olay dinleyici eklediğinizde ve kullanıcı alt öğeye tıkladığında gerçekleşen şeydir.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış, önceki derslerde ele alındığı şekliyle JavaScript temellerine aşinalık.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Olay kabarcıklanması (event bubbling) veya olay yakalama (event capture) aracılığıyla elde edilen olay yetkilendirmesi (event delegation).</li>
          <li><code>stopPropagation()</code> ile olay yetkilendirmesini durdurmak.</li>
          <li>Olay nesnesinden olay hedeflerine (event targets) erişmek.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Olay kabarcıklanmasıyla tanışmak

Bir örnek aracılığıyla olay kabarcıklanmasını tanıtalım ve tanımlayalım.

#### Bir üst öğede dinleyici ayarlamak

Şunun gibi bir web sayfası düşünün:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Burada düğme başka bir öğenin, bir [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) öğesinin içindedir. Buradaki `<div>` öğesinin içerdiği öğenin **üst öğesi (parent)** olduğunu söyleriz. Üst öğeye bir tıklama olayı işleyicisi ekler ve ardından düğmeye tıklarsak ne olur?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Kullanıcı düğmeye tıkladığında üst öğenin bir tıklama olayı tetiklediğini göreceksiniz:

```plain
You clicked on a DIV element
```

Bu mantıklıdır: düğme `<div>` öğesinin içindedir, dolayısıyla düğmeye tıkladığınızda örtük olarak içinde bulunduğu öğeye de tıklamış olursunuz.

#### Kabarcıklanma örneği

Düğmeye _ve_ üst öğeye olay dinleyicileri eklersek ne olur?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Düğmeye, onun üst öğesine (`<div>`) ve her ikisini de içeren [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/body) öğesine tıklama olayı işleyicileri eklemeyi deneyelim:

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Kullanıcı düğmeye tıkladığında her üç öğenin de bir tıklama olayı tetiklediğini göreceksiniz:

```plain
You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
```

Bu durumda:

- önce düğme üzerindeki tıklama tetiklenir.
- ardından üst öğesi (`<div>` öğesi) üzerindeki tıklama gelir.
- ardından `<div>` öğesinin üst öğesi (`<body>` öğesi) üzerindeki tıklama gelir.

Bunu, olayın tıklanan en içteki öğeden yukarı doğru **kabarcıklandığını (bubbles up)** söyleyerek tanımlarız.

Bu davranış yararlı olabilir ve aynı zamanda beklenmedik sorunlara da yol açabilir. Sonraki bölümlerde yol açtığı bir sorunu görecek ve çözümünü bulacağız.

#### Video oynatıcı örneği

Bu örnekte sayfamız başlangıçta gizli olan bir video ve "Display video" ("Videoyu görüntüle") etiketli bir düğme içeriyor. Aşağıdaki etkileşimi istiyoruz:

- Kullanıcı "Display video" düğmesine tıkladığında videoyu içeren kutuyu göster, ancak videoyu henüz oynatmaya başlama.
- Kullanıcı videonun üzerine tıkladığında videoyu oynatmaya başla.
- Kullanıcı kutunun içinde videonun dışında herhangi bir yere tıkladığında kutuyu gizle.

HTML şu şekilde görünür:

```html
<button>Display video</button>

<div class="hidden">
  <video>
    <source src="/shared-assets/videos/flower.webm" type="video/webm" />
    <p>
      Your browser doesn't support HTML video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
  </video>
</div>
```

Şunları içerir:

- bir `<button>` öğesi.
- başlangıçta bir `class="hidden"` özniteliğine sahip olan bir `<div>` öğesi.
- `<div>` öğesinin içine yerleştirilmiş bir `<video>` öğesi.

`"hidden"` sınıfı ayarlanmış öğeleri gizlemek için CSS kullanıyoruz.

```css
div {
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}

.hidden {
  display: none;
}

div video {
  padding: 40px;
  display: block;
  width: 400px;
  margin: 40px auto;
}
```

JavaScript şu şekilde görünür:

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));
```

Bu kod üç adet `'click'` olay dinleyicisi ekler:

- biri `<button>` üzerinde; `<video>` öğesini içeren `<div>` öğesini gösterir.
- biri `<video>` üzerinde; videoyu oynatmaya başlar.
- biri `<div>` üzerinde; videoyu gizler.

Bunun nasıl çalıştığına bakalım:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Düğmeye tıkladığınızda kutunun ve içerdiği videonun gösterildiğini görmelisiniz. Ancak daha sonra videoya tıkladığınızda video oynamaya başlar, fakat kutu tekrar gizlenir!

Video `<div>` öğesinin içindedir — onun bir parçasıdır — dolayısıyla videoya tıklamak olay işleyicilerinin _her ikisini de_ çalıştırarak bu davranışa neden olur.

#### `stopPropagation()` ile sorunu düzeltmek

Son bölümde gördüğümüz gibi, olay kabarcıklanması bazen sorunlar yaratabilir, ancak bunu önlemenin bir yolu vardır.
[`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) nesnesinin üzerinde [`stopPropagation()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) adlı kullanılabilir bir fonksiyon vardır; bu fonksiyon bir olay işleyicinin içinde çağrıldığında olayın başka herhangi bir öğeye doğru yukarı kabarcıklanmasını engeller.

JavaScript'i şu şekilde değiştirerek mevcut sorunumuzu düzeltebiliriz:

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});

box.addEventListener("click", () => box.classList.add("hidden"));
```

Burada yaptığımız tek şey, `<video>` öğesinin `'click'` olayı işleyicisinde olay nesnesi üzerinde `stopPropagation()` çağırmaktır. Bu, o olayın kutuya doğru yukarı kabarcıklanmasını durduracaktır. Şimdi düğmeye ve ardından videoya tıklamayı deneyin:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

```html
<button>Display video</button>

<div class="hidden">
  <video>
    <source src="/shared-assets/videos/flower.webm" type="video/webm" />
    <p>
      Your browser doesn't support HTML video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
  </video>
</div>
```

```css
div {
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}

.hidden {
  display: none;
}

div video {
  padding: 40px;
  display: block;
  width: 400px;
  margin: 40px auto;
}
```

### Olay yakalama

Olay yayılımının (event propagation) alternatif bir biçimi _olay yakalamadır (event capture)_. Bu, olay kabarcıklanması gibidir ancak sıra tersine çevrilmiştir: olayın önce hedeflenen en içteki öğede ve ardından sırasıyla daha az iç içe geçmiş öğelerde tetiklenmesi yerine, olay önce _en az iç içe geçmiş_ öğede ve ardından hedefe ulaşılana kadar sırasıyla daha fazla iç içe geçmiş öğelerde tetiklenir.

Olay yakalama varsayılan olarak devre dışıdır. Onu etkinleştirmek için `addEventListener()` içinde `capture` seçeneğini geçirmeniz gerekir.

Bu örnek, `capture` seçeneğini kullanmış olmamız dışında daha önce gördüğümüz [kabarcıklanma örneği](#kabarcıklanma-örneği) ile tıpatıp aynıdır:

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick, { capture: true });
container.addEventListener("click", handleClick, { capture: true });
button.addEventListener("click", handleClick);
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Bu durumda mesajların sırası tersine çevrilir: önce `<body>` olay işleyicisi, ardından `<div>` olay işleyicisi ve ardından `<button>` olay işleyicisi tetiklenir:

```plain
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Neden hem yakalama hem de kabarcıklanma ile uğraşılsın ki? Tarayıcıların şimdikinden çok daha az çapraz uyumlu olduğu o kötü eski günlerde, Netscape yalnızca olay yakalamayı, Internet Explorer ise yalnızca olay kabarcıklanmasını kullanıyordu. W3C davranışı standartlaştırmaya ve bir fikir birliğine varmaya karar verdiğinde, modern tarayıcıların uyguladığı, her ikisini de içeren bu sistemle sonuçlandılar.

Varsayılan olarak neredeyse tüm olay işleyicileri kabarcıklanma aşamasında (bubbling phase) kaydedilir ve bu çoğu zaman daha mantıklıdır.

### Olay yetkilendirmesi

Son bölümde olay kabarcıklanmasının neden olduğu bir soruna ve bunun nasıl düzeltileceğine baktık. Ancak olay kabarcıklanması yalnızca sinir bozucu değildir: çok yararlı da olabilir. Özellikle **olay yetkilendirmesini (event delegation)** mümkün kılar. Bu uygulamada, kullanıcı çok sayıdaki alt öğeden herhangi biriyle etkileşime girdiğinde biraz kodun çalışmasını istediğimizde, olay dinleyiciyi her alt öğede ayrı ayrı ayarlamak zorunda kalmak yerine onların üst öğesinde ayarlarız ve üzerlerinde gerçekleşen olayların üst öğelerine doğru kabarcıklanmasını sağlarız.

Kullanıcı bir düğmeye tıkladığında tüm sayfanın arka plan rengini ayarladığımız [ilk örneğimize](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events#an_example_handling_a_click_event) geri dönelim.
Bunun yerine sayfanın 16 karoya (tile) bölündüğünü ve kullanıcı o karoya tıkladığında her karonun rastgele bir renge ayarlanmasını istediğimizi varsayalım.

HTML şöyledir:

```html
<div id="container">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
</div>
```

Karoların boyutunu ve konumunu ayarlamak için biraz CSS'imiz var:

```css
#container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
}
```

Şimdi JavaScript'te her karo için bir tıklama olayı işleyicisi ekleyebilirdik. Ancak çok daha basit ve daha verimli bir seçenek, tıklama olayı işleyicisini üst öğede ayarlamak ve kullanıcı bir karoya tıkladığında işleyicinin yürütülmesini sağlamak için olay kabarcıklanmasına güvenmektir:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});
```

Çıktı aşağıdaki gibidir (üzerinde etrafa tıklamayı deneyin):

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

> [!NOTE]
> Bu örnekte, olayın hedefi olan öğeyi (yani en içteki öğeyi) almak için `event.target` kullanıyoruz. Bu olayı işleyen öğeye (bu durumda container) erişmek isteseydik `event.currentTarget` kullanabilirdik.

### `target` ve `currentTarget`

Bu sayfada tanıttığımız örneklere yakından bakarsanız, tıklanan öğeye erişmek için olay nesnesinin iki farklı özelliğini kullandığımızı görürsünüz. [Bir üst öğede dinleyici ayarlamak](#bir-üst-öğede-dinleyici-ayarlamak) bölümünde [`event.currentTarget`](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget) kullanıyoruz. Ancak [Olay yetkilendirmesi](#olay-yetkilendirmesi) bölümünde [`event.target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) kullanıyoruz.

Aradaki fark şudur: `target` olayın ilk olarak üzerinde tetiklendiği öğeye başvururken, `currentTarget` bu olay işleyicinin bağlanmış olduğu öğeye başvurur.

Bir olay yukarı doğru kabarcıklanırken `target` aynı kalırken, `currentTarget` hiyerarşideki farklı öğelere bağlanmış olay işleyicileri için farklı olacaktır.

Yukarıdaki [Kabarcıklanma örneğini](#kabarcıklanma-örneği) biraz uyarlarsak bunu görebiliriz. Daha öncekiyle aynı HTML'i kullanıyoruz:

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Hem `target` hem de `currentTarget` özelliklerini yazdırmamız dışında JavaScript neredeyse aynıdır:

```js
const output = document.querySelector("#output");
function handleClick(e) {
  const logTarget = `Target: ${e.target.tagName}`;
  const logCurrentTarget = `Current target: ${e.currentTarget.tagName}`;
  output.textContent += `${logTarget}, ${logCurrentTarget}\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
```

Düğmeye tıkladığımızda, olay işleyici ister düğmenin kendisine, ister `<div>` öğesine, ister `<body>` öğesine bağlı olsun, `target` özelliğinin her seferinde düğme öğesi olduğuna dikkat edin. Ancak `currentTarget`, o anda olay işleyicisini çalıştırdığımız öğeyi tanımlar:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Yukarıdaki [Olay yetkilendirmesi](#olay-yetkilendirmesi) örneğimizde görüldüğü gibi, `target` özelliği olay yetkilendirmesinde yaygın olarak kullanılır.

### Özet

Artık bu erken aşamada web olayları hakkında bilmeniz gereken her şeyi biliyor olmalısınız. Bahsedildiği gibi, olaylar aslında çekirdek JavaScript dilinin bir parçası değildir — tarayıcı Web API'lerinde tanımlanırlar.

Bir sonraki makalede, olaylar hakkında size verdiğimiz tüm bilgileri ne kadar iyi anladığınızı ve aklınızda tuttuğunuzu kontrol etmek için kullanabileceğiniz bazı testler vereceğiz.

### Ayrıca bakınız

- **[domevents.dev](https://domevents.dev/)**: Keşif yoluyla DOM Olay sisteminin davranışı hakkında bilgi edinmeyi sağlayan yararlı bir etkileşimli oyun alanı uygulaması.
- **[DOM olayları (DOM events)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events)**: Olayları anlamak ve işlemek için kapsamlı bir kılavuz.
- **[Olay sırası (Event order)](https://www.quirksmode.org/js/events_order.html)**: Peter-Paul Koch tarafından yakalama ve kabarcıklanmanın mükemmel derecede ayrıntılı bir tartışması.

---

## 24. Becerilerinizi Test Edin: Olaylar (Test your skills: Events)

**Kaynak:** [Test your skills: Events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Events)

Bu beceri testinin amacı, [Olaylara giriş](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events) makalemizi anlayıp anlamadığınızı değerlendirmenize yardımcı olmaktır.

> [!NOTE]
> Yardım almak için [Becerilerinizi test edin](https://developer.mozilla.org/en-US/docs/Learn_web_development#test_your_skills) kullanım kılavuzumuzu okuyun. Ayrıca [iletişim kanallarımızdan](https://developer.mozilla.org/en-US/docs/MDN/Community/Communication_channels) birini kullanarak da bize ulaşabilirsiniz.

### DOM işleme: yararlı kabul edilir

Aşağıdaki sorulardan bazıları, onları tamamlamak için biraz [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM) işleme kodu yazmanızı gerektirir — örneğin yeni HTML öğeleri oluşturmak, metin içeriklerini belirli dize değerlerine eşit olacak şekilde ayarlamak ve bunları sayfadaki mevcut öğelerin içine yerleştirmek — hepsi JavaScript aracılığıyla.

Kursta bunu henüz açıkça öğretmedik, ancak bundan yararlanan bazı örnekler görmüş olacaksınız ve soruları başarıyla yanıtlamak için hangi DOM API'lerine ihtiyacınız olduğu konusunda biraz araştırma yapmanızı istiyoruz. İyi bir başlangıç noktası [DOM betik yazımına giriş](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) eğitimimizdir.

### Olaylar 1

Olaylarla ilgili ilk görevimiz, tıklandığında metin etiketini güncelleyen bir [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) içerir. HTML değiştirilmemelidir; yalnızca JavaScript değiştirilmelidir.

Görevi tamamlamak için, üzerine tıklandığında düğmenin (`btn`) içindeki metnin değişmesine ve tekrar tıklandığında eski haline dönmesine neden olan bir olay dinleyici oluşturun.

Görevin başlangıç noktası şu şekilde görünür:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```css
p {
  color: purple;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}

button {
  display: block;
  margin: 20px 0 20px 20px;
}

canvas {
  border: 1px solid black;
}
```

```html
<button class="off">Machine is off</button>
```

```js
const btn = document.querySelector("button");

// Add your code here
```

Güncellenmiş örnek şu şekilde davranmalıdır (düğmeye basmayı deneyin):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (btn.className === "on") {
    btn.textContent = "Machine is off";
    btn.className = "off";
  } else {
    btn.textContent = "Machine is on";
    btn.className = "on";
  }
});
```

</details>

### Olaylar 2

Şimdi klavye olaylarına bakacağız.

Bu görevi tamamlamak için, klavyede WASD tuşlarına basıldığında daireyi sağlanan canvas etrafında hareket ettiren bir olay dinleyici oluşturun. Daire, girdi olarak aşağıdaki parametreleri alan `drawCircle()` fonksiyonuyla çizilir:

- `x` — dairenin x koordinatı.
- `y` — dairenin y koordinatı.
- `size` — dairenin yarıçapı.

> [!WARNING]
> Kodunuzu test ederken, klavye komutlarınızı denemeden önce canvas üzerine odaklanmanız gerekecektir (örneğin üzerine tıklayın veya klavyeyle Tab tuşuna basarak ona gelin). Aksi takdirde çalışmayacaklardır.

Görevin başlangıç noktası şu şekilde görünür:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```html
<canvas width="480" height="320" tabindex="0"> </canvas>
```

```css
* {
  box-sizing: border-box;
}

canvas {
  border: 1px solid black;
}
```

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, size) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);
// Don't edit the code above here!

// Add your code here
```

Güncellenmiş örnek şu şekilde davranmalıdır (üzerine tıklayın ve ardından klavye kontrollerini deneyin):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      x -= 5;
      break;
    case "d":
      x += 5;
      break;
    case "w":
      y -= 5;
      break;
    case "s":
      y += 5;
      break;
  }

  drawCircle(x, y, size);
});
```

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, size) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      x -= 5;
      break;
    case "d":
      x += 5;
      break;
    case "w":
      y -= 5;
      break;
    case "s":
      y += 5;
      break;
  }

  drawCircle(x, y, size);
});
```

</details>

### Olaylar 3

Olaylarla ilgili bir sonraki görev, olay kabarcıklanması (event bubbling) bilginizi test eder. `<button>` öğelerinin üst öğesi (`<div class="button-bar"> … </div>`) üzerinde, düğmelerden herhangi birine tıklanarak çağrıldığında `button-bar` arka planını düğmenin `data-color` özniteliğinde bulunan renge ayarlayacak bir olay dinleyici ayarlamanızı istiyoruz.

Tüm düğmeler üzerinde döngü kurmadan ve her birine kendi olay dinleyicisini vermeden bunu çözmenizi istiyoruz.

Görevin başlangıç noktası şu şekilde görünür:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```html
<div class="button-bar">
  <button data-color="red">Red</button>
  <button data-color="yellow">Yellow</button>
  <button data-color="green">Green</button>
  <button data-color="purple">Purple</button>
</div>
```

```css
* {
  box-sizing: border-box;
}

html,
body,
.button-bar {
  height: 100%;
}

.button-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

button {
  padding: 5px 10px;
}
```

```js
const buttonBar = document.querySelector(".button-bar");

// Add your code here
```

Güncellenmiş örnek şu şekilde davranmalıdır (düğmelere tıklamayı deneyin):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
const buttonBar = document.querySelector(".button-bar");

function setColor(e) {
  buttonBar.style.backgroundColor = e.target.getAttribute("data-color");
}

buttonBar.addEventListener("click", setColor);
```

</details>

---

## 25. JavaScript Nesne Temelleri (JavaScript object basics)

**Kaynak:** [JavaScript object basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics)

Bu makalede temel JavaScript nesne (object) sözdizimine bakacak ve kursta daha önce gördüğümüz bazı JavaScript özelliklerini yeniden ziyaret ederek, şimdiye kadar uğraştığınız özelliklerin birçoğunun aslında birer nesne olduğu gerçeğini bir kez daha vurgulayacağız.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış, önceki derslerde ele alındığı şekliyle JavaScript temellerine aşinalık.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>JavaScript'te çoğu şeyin nesne olduğunu ve JavaScript'e her dokunduğunuzda muhtemelen nesneleri kullandığınızı anlamak.</li>
          <li>Temel sözdizimi: Nesne değişmezleri (object literals), özellikler (properties) ve metotlar (methods), nesnelerin içine nesneler ve diziler yerleştirmek.</li>
          <li>Yeni bir nesne oluşturmak için yapıcıları (constructors) kullanmak.</li>
          <li>Nesne kapsamı ve <code>this</code>.</li>
          <li>Özelliklere ve metotlara erişmek — köşeli parantez ve nokta sözdizimi.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Nesne temelleri

Bir nesne (object), birbiriyle ilişkili verilerin ve/veya işlevselliğin bir koleksiyonudur.
Bunlar genellikle birkaç değişkenden ve fonksiyondan (nesnelerin içinde olduklarında bunlara özellikler — properties — ve metotlar — methods — denir) oluşur.
Neye benzediklerini anlamak için bir örnek üzerinden ilerleyelim.

Başlangıç olarak, yerel dosya sisteminizde yeni bir HTML dosyası oluşturun ve aşağıdaki kodu ona ekleyin:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Object-oriented JavaScript example</title>
  </head>

  <body>
    <p>
      This example requires you to enter commands in your browser's JavaScript
      console (see
      <a
        href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools"
        >What are browser developer tools</a
      >
      for more information).
    </p>

    <script></script>
  </body>
</html>
```

Bu çok az şey içerir — içine kaynak kodumuzu yazmamız için bir [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) öğesi. Bunu temel nesne sözdizimini keşfetmek için bir temel olarak kullanacağız. Bu örnekle çalışırken [geliştirici araçları JavaScript konsolunuz](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) açık ve bazı komutlar yazmaya hazır olmalıdır.

JavaScript'teki pek çok şeyde olduğu gibi, bir nesne oluşturmak çoğu zaman bir değişkeni tanımlamak ve başlatmakla başlar. `<script></script>` etiketlerinizin içine aşağıdaki satırı girmeyi, ardından kaydedip yenilemeyi deneyin:

```js
const person = {};
```

Şimdi tarayıcınızın [JavaScript konsolunu](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) açın, içine `person` girin ve <kbd>Enter</kbd>/<kbd>Return</kbd> tuşuna basın. Aşağıdaki satırlardan birine benzer bir sonuç almalısınız:

```plain
[object Object]
Object { }
{ }
```

Tebrikler, az önce ilk nesnenizi oluşturdunuz. İş tamam! Ancak bu boş bir nesnedir, dolayısıyla onunla pek bir şey yapamayız. Dosyamızdaki JavaScript nesnesini şu şekilde görünecek biçimde güncelleyelim:

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

Kaydedip yeniledikten sonra, tarayıcı geliştirici araçlarınızdaki JavaScript konsoluna aşağıdakilerden bazılarını girmeyi deneyin:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Artık nesnenizin içinde bazı veriler ve işlevsellikler var ve hoş, basit bir sözdizimiyle bunlara erişebiliyorsunuz!

Peki burada neler oluyor? Bir nesne, her birinin bir adı (örneğin yukarıdaki `name` ve `age`) ve bir değeri (örneğin `['Bob', 'Smith']` ve `32`) olan birden çok üyeden (members) oluşur. Her ad/değer çifti bir virgülle ayrılmalıdır ve her durumda ad ve değer iki nokta üst üste ile ayrılır. Sözdizimi her zaman şu kalıbı izler:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Bir nesne üyesinin değeri hemen hemen her şey olabilir — person nesnemizde bir sayımız, bir dizimiz ve iki fonksiyonumuz var. İlk iki öğe veri öğeleridir ve nesnenin **özellikleri (properties)** olarak adlandırılır. Son iki öğe ise nesnenin o verilerle bir şey yapmasına olanak tanıyan fonksiyonlardır ve nesnenin **metotları (methods)** olarak adlandırılır.

Nesnenin üyeleri fonksiyon olduğunda daha basit bir sözdizimi vardır. `bio: function ()` yerine `bio()` yazabiliriz. Şunun gibi:

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

Bundan sonra bu daha kısa sözdizimini kullanacağız.

Bunun gibi bir nesne, **nesne değişmezi (object literal)** olarak adlandırılır — nesneyi oluştururken içeriğini kelimenin tam anlamıyla (literally) açıkça yazdık. Bu, daha sonra bakacağımız sınıflardan (classes) örneklenen (instantiated) nesnelere kıyasla farklıdır.

Yapılandırılmış, birbiriyle ilişkili bir dizi veri öğesini bir şekilde aktarmak istediğinizde — örneğin bir veritabanına konulmak üzere sunucuya bir istek gönderirken — bir nesne değişmezi kullanarak bir nesne oluşturmak çok yaygındır. Tek bir nesne göndermek, birkaç öğeyi ayrı ayrı göndermekten çok daha verimlidir ve tekil öğeleri adlarıyla tanımlamak istediğinizde bir diziye kıyasla üzerinde çalışması daha kolaydır.

### Nokta gösterimi

Yukarıda, nesnenin özelliklerine ve metotlarına **nokta gösterimi (dot notation)** kullanarak eriştiniz. Nesne adı (person) **ad alanı (namespace)** olarak hareket eder — nesnenin içindeki herhangi bir şeye erişmek için önce onun girilmesi gerekir. Ardından bir nokta, sonra da erişmek istediğiniz öğeyi yazarsınız — bu basit bir özelliğin adı, bir dizi özelliğinin bir öğesi ya da nesnenin metotlarından birine yapılan bir çağrı olabilir, örneğin:

```js
person.age;
person.bio();
```

#### Nesne özellikleri olarak nesneler

Bir nesne özelliğinin kendisi de bir nesne olabilir. Örneğin, `name` üyesini şundan:

```js
const person = {
  name: ["Bob", "Smith"],
};
```

şuna değiştirmeyi deneyin:

```js
const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  // …
};
```

Bu öğelere erişmek için fazladan adımı başka bir noktayla sona zincirlemeniz yeterlidir. JS konsolunda şunları deneyin:

```js
person.name.first;
person.name.last;
```

Bunu yaparsanız, metot kodunuzun üzerinden geçmeniz ve tüm şu örnekleri:

```js
name[0];
name[1];
```

şuna değiştirmeniz gerekecektir:

```js
name.first;
name.last;
```

Aksi takdirde metotlarınız artık çalışmayacaktır.

### Köşeli parantez gösterimi

Köşeli parantez gösterimi (bracket notation), nesne özelliklerine erişmek için alternatif bir yol sağlar.
Şunun gibi [nokta gösterimi](#nokta-gösterimi) kullanmak yerine:

```js
person.age;
person.name.first;
```

Bunun yerine köşeli parantezler kullanabilirsiniz:

```js
person["age"];
person["name"]["first"];
```

Bu, bir dizideki öğelere erişme şeklinize çok benzer görünür ve temelde aynı şeydir — bir öğeyi seçmek için bir dizin (index) numarası kullanmak yerine, her üyenin değeriyle ilişkili adı kullanırsınız.
Nesnelerin bazen **ilişkisel diziler (associative arrays)** olarak adlandırılmasına şaşmamalı — dizilerin sayıları değerlerle eşlemesiyle aynı şekilde onlar da dizeleri (strings) değerlerle eşler.

Daha özlü ve okunması daha kolay olduğu için nokta gösterimi genellikle köşeli parantez gösterimine tercih edilir.
Ancak köşeli parantez kullanmak zorunda olduğunuz bazı durumlar vardır.
Örneğin, bir nesne özelliği adı bir değişkende tutuluyorsa değere erişmek için nokta gösterimini kullanamazsınız, ancak köşeli parantez gösterimini kullanarak değere erişebilirsiniz.

Aşağıdaki örnekte `logProperty()` fonksiyonu, `propertyName` içinde adlandırılan özelliğin değerini almak için `person[propertyName]` kullanabilir.

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

logProperty("name");
// ["Bob", "Smith"]
logProperty("age");
// 32
```

### Nesne üyelerini ayarlamak

Şimdiye kadar yalnızca nesne üyelerini almaya (veya **get** işlemine) baktık — ayarlamak istediğiniz üyeyi (nokta veya köşeli parantez gösterimi kullanarak) bildirerek nesne üyelerinin değerini şu şekilde **ayarlayabilirsiniz (set)** (güncelleyebilirsiniz):

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Yukarıdaki satırları girmeyi ve ardından nasıl değiştiklerini görmek için üyeleri şu şekilde tekrar almayı deneyin:

```js
person.age;
person["name"]["last"];
```

Üyeleri ayarlamak yalnızca mevcut özelliklerin ve metotların değerlerini güncellemekle kalmaz; tamamen yeni üyeler de oluşturabilirsiniz. JS konsolunda şunları deneyin:

```js
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
```

Artık yeni üyelerinizi test edebilirsiniz:

```js
person["eyes"];
person.farewell();
// "Bye everybody!"
```

Köşeli parantez gösteriminin yararlı bir yönü, yalnızca üye değerlerini değil üye adlarını da dinamik olarak ayarlamak için kullanılabilmesidir. Kullanıcıların iki metin girdisine üye adını ve değerini yazarak kişi verilerinde özel değer türleri saklayabilmelerini istediğimizi varsayalım. Bu değerleri şu şekilde alabiliriz:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Ardından bu yeni üye adını ve değerini `person` nesnesine şu şekilde ekleyebiliriz:

```js
person[myDataName] = myDataValue;
```

Bunu test etmek için, `person` nesnesinin kapanış süslü parantezinin hemen altına, kodunuza aşağıdaki satırları eklemeyi deneyin:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Şimdi kaydedip yenilemeyi ve metin girdinize aşağıdakini girmeyi deneyin:

```js
person.height;
```

Yukarıdaki yöntemi kullanarak bir nesneye özellik eklemek, bir ada işaret eden bir değişken değerini değil yalnızca birebir (literal) üye adını kabul edebilen nokta gösterimiyle mümkün değildir.

### "this" nedir?

Metotlarımızda biraz garip bir şey fark etmiş olabilirsiniz. Örneğin şuna bakın:

```js
const person = {
  // …
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

Muhtemelen "this" kelimesinin ne olduğunu merak ediyorsunuzdur. `this` anahtar sözcüğü tipik olarak kodun içinde yürütüldüğü geçerli nesneye başvurur. Bir nesne metodu bağlamında `this`, metodun üzerinde çağrıldığı nesneye başvurur.

Basitleştirilmiş bir çift person nesnesiyle ne demek istediğimizi gösterelim:

```js
const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};
```

Bu durumda `person1.introduceSelf()` çağrısı "Hi! I'm Chris." çıktısını verir; `person2.introduceSelf()` çağrısı ise "Hi! I'm Deepti." çıktısını verir. Bunun nedeni, metot çağrıldığında `this` anahtar sözcüğünün metodun üzerinde çağrıldığı nesneye başvurması ve bunun da aynı metot tanımının birden çok nesne için çalışmasına olanak tanımasıdır.

Nesne değişmezlerini elle yazarken bu çok büyük ölçüde yararlı değildir, çünkü nesnenin adını (`person1` ve `person2`) kullanmak birebir aynı sonuca yol açar; ancak tek bir nesne tanımından birden fazla nesne oluşturmak için **yapıcıları (constructors)** kullanmaya başladığımızda vazgeçilmez olacaktır ve bir sonraki bölümün konusu da budur.

### Yapıcılarla tanışmak

Nesne değişmezlerini kullanmak yalnızca bir nesne oluşturmanız gerektiğinde iyidir, ancak önceki bölümde olduğu gibi birden fazla oluşturmanız gerekiyorsa ciddi şekilde yetersiz kalırlar. Oluşturduğumuz her nesne için aynı kodu baştan yazmamız gerekir ve nesnenin bazı özelliklerini değiştirmek istersek — bir `height` özelliği eklemek gibi — her nesneyi güncellemeyi hatırlamamız gerekir.

Bir nesnenin "şeklini" — sahip olabileceği metotlar ve özellikler kümesini — tanımlamanın ve ardından yalnızca farklı olan özelliklerin değerlerini güncelleyerek istediğimiz kadar nesne oluşturmanın bir yolunu isteriz.

Bunun ilk sürümü yalnızca bir fonksiyondur:

```js
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}
```

Bu fonksiyon onu her çağırdığımızda yeni bir nesne oluşturur ve döndürür. Nesnenin iki üyesi olacaktır:

- bir `name` özelliği
- bir `introduceSelf()` metodu.

`createPerson()` fonksiyonunun `name` özelliğinin değerini ayarlamak için bir `name` parametresi aldığına, ancak `introduceSelf()` metodunun değerinin bu fonksiyon kullanılarak oluşturulan tüm nesneler için aynı olacağına dikkat edin. Bu, nesne oluşturmak için çok yaygın bir kalıptır.

Artık tanımı yeniden kullanarak istediğimiz kadar nesne oluşturabiliriz:

```js
const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

Bu gayet iyi çalışır ancak biraz uzundur: boş bir nesne oluşturmamız, onu başlatmamız ve döndürmemiz gerekir. Daha iyi bir yol bir **yapıcı (constructor)** kullanmaktır. Bir yapıcı yalnızca [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) anahtar sözcüğü kullanılarak çağrılan bir fonksiyondur. Bir yapıcıyı çağırdığınızda şunları yapacaktır:

- yeni bir nesne oluşturmak
- yapıcı kodunuzda `this` anahtar sözcüğüne başvurabilmeniz için `this`'i yeni nesneye bağlamak (bind)
- yapıcıdaki kodu çalıştırmak
- yeni nesneyi döndürmek.

Yapıcılar, geleneksel olarak (by convention), büyük harfle başlar ve oluşturdukları nesne türüne göre adlandırılır. Dolayısıyla örneğimizi şu şekilde yeniden yazabiliriz:

```js
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}
```

`Person()` fonksiyonunu bir yapıcı olarak çağırmak için `new` kullanırız:

```js
const salva = new Person("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

### Başından beri nesneleri kullanıyordunuz

Bu örneklerin üzerinden geçerken muhtemelen kullandığınız nokta gösteriminin çok tanıdık olduğunu düşünüyordunuz. Bunun nedeni kurs boyunca onu kullanmış olmanızdır! Yerleşik bir tarayıcı API'sini veya JavaScript nesnesini kullanan bir örnek üzerinde her çalıştığımızda nesneleri kullanıyorduk; çünkü bu tür özellikler, kendi temel özel örneklerimizdekilerden daha karmaşık olsalar da burada baktığımız nesne yapılarıyla tamamen aynı türde yapılar kullanılarak inşa edilmiştir.

Yani şunun gibi dize metotları kullandığınızda:

```js
myString.split(",");
```

Bir [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) nesnesi üzerinde kullanılabilen bir metodu kullanıyordunuz. Kodunuzda her dize oluşturduğunuzda, o dize otomatik olarak `String` nesnesinin bir örneği (instance) olarak oluşturulur ve bu nedenle üzerinde kullanılabilen çeşitli yaygın metotlara ve özelliklere sahiptir.

Belge nesne modeline (document object model) şunun gibi satırlar kullanarak eriştiğinizde:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

Bir [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) nesnesi üzerinde kullanılabilen metotları kullanıyordunuz. Yüklenen her web sayfası için, tüm sayfanın yapısını, içeriğini ve URL'si gibi diğer özelliklerini temsil eden `document` adlı bir `Document` örneği oluşturulur. Yine bu, üzerinde kullanılabilen çeşitli yaygın metotlara ve özelliklere sahip olduğu anlamına gelir.

Aynı şey kullandığınız hemen hemen diğer tüm yerleşik nesneler veya API'ler — [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) vb. — için de geçerlidir.

Yerleşik nesnelerin ve API'lerin her zaman otomatik olarak nesne örnekleri oluşturmadığını unutmayın. Örnek olarak, modern tarayıcıların sistem bildirimleri tetiklemesine olanak tanıyan [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API), tetiklemek istediğiniz her bildirim için yapıcıyı kullanarak yeni bir nesne örneği oluşturmanızı (instantiate) gerektirir. JavaScript konsolunuza aşağıdakini girmeyi deneyin:

```js
const myNotification = new Notification("Hello!");
```

### Özet

Artık kendi basit nesnelerinizi oluşturmak da dahil olmak üzere JavaScript'te nesnelerle nasıl çalışılacağına dair iyi bir fikre sahip olmalısınız. Ayrıca nesnelerin birbiriyle ilişkili verileri ve işlevselliği saklamaya yönelik yapılar olarak çok yararlı olduğunu da takdir etmelisiniz — `person` nesnemizdeki tüm özellikleri ve metotları ayrı değişkenler ve fonksiyonlar olarak takip etmeye çalışsaydınız bu verimsiz ve sinir bozucu olurdu ve aynı adlara sahip diğer değişkenler ve fonksiyonlarla çakışma riskine girerdik. Nesneler, bilgileri kendi paketlerinde zarardan uzak ve güvenli bir şekilde kilitli tutmamızı sağlar.

Bir sonraki makalede, tüm bu bilgileri ne kadar iyi anladığınızı ve aklınızda tuttuğunuzu kontrol etmek için kullanabileceğiniz bazı testler vereceğiz.

---

## 26. Becerilerinizi Test Edin: Nesne Temelleri (Test your skills: Object basics)

**Kaynak:** [Test your skills: Object basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Object_basics)

Bu beceri testinin amacı, [JavaScript nesne temelleri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics) makalemizi anlayıp anlamadığınızı değerlendirmenize yardımcı olmaktır.

> [!NOTE]
> Yardım almak için [Becerilerinizi test edin](https://developer.mozilla.org/en-US/docs/Learn_web_development#test_your_skills) kullanım kılavuzumuzu okuyun. Ayrıca [iletişim kanallarımızdan](https://developer.mozilla.org/en-US/docs/MDN/Community/Communication_channels) birini kullanarak da bize ulaşabilirsiniz.

### Nesne temelleri 1

Bu görevde size bir nesne değişmezi (object literal) verilmektedir ve üzerinde biraz çalışma yapmanızı istiyoruz.

Görevi tamamlamak için:

1. Köşeli parantez gösterimini kullanarak `name` özelliğinin değerini `catName` değişkeninin içinde saklayın.
2. Nokta gösterimini kullanarak `greeting()` metodunu çalıştırın (selamlamayı konsola yazdıracaktır).
3. `color` özelliği değerini `black` olarak güncelleyin.

```html
<section></section>
```

```css
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
let para2 = document.createElement("p");
para1.textContent = `The cat's name is ${catName}.`;
para2.textContent = `The cat's color is ${cat.color}.`;
section.appendChild(para1);
section.appendChild(para2);
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

const catName = cat["name"];
cat.greeting();
cat.color = "black";

// Don't edit the code below here!
// ...
```

```js
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

const catName = cat["name"];
cat.greeting();
cat.color = "black";

const section = document.querySelector("section");
let para1 = document.createElement("p");
let para2 = document.createElement("p");
para1.textContent = `The cat's name is ${catName}.`;
para2.textContent = `The cat's color is ${cat.color}.`;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

### Nesne temelleri 2

Sonraki görevimizde, en sevdiğiniz müzik gruplarından birini temsil etmek üzere kendi nesne değişmezinizi oluşturmayı denemenizi istiyoruz.

Görevi tamamlamak için:

1. Aşağıdaki özellikleri içeren `band` adlı bir nesne değişmezi oluşturun:
   - `name`: Grup adını temsil eden bir dize.
   - `nationality`: Grubun geldiği ülkeyi temsil eden bir dize.
   - `genre`: Grubun ne tür müzik çaldığı.
   - `members`: Grubun sahip olduğu üye sayısını temsil eden bir sayı.
   - `formed`: Grubun kurulduğu yılı temsil eden bir sayı.
   - `split`: Grubun dağıldığı yılı temsil eden bir sayı veya hâlâ birliktelerse `false`.
   - `albums`: Grup tarafından yayınlanan albümleri temsil eden bir dizi. Her dizi öğesi aşağıdaki üyeleri içeren bir nesne olmalıdır:
     - `name`: Albümün adını temsil eden bir dize.
     - `released`: Albümün yayınlandığı yılı temsil eden bir sayı.
       > [!NOTE]
       > `albums` dizisine en az iki albüm dahil edin.
2. `bandInfo` değişkenine; adlarını, uyruklarını, aktif oldukları yılları, tarzlarını ve ilk albümlerinin adını ve yayınlanma tarihini ayrıntılarıyla anlatan küçük bir biyografi içerecek bir dize yazın.

Görevin başlangıç noktası şu şekilde görünür (henüz hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js
let bandInfo;

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);
```

Güncellenmiş çıktı şuna benzer görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

const band = {
  name: "Black Sabbath",
  nationality: "British",
  genre: "heavy metal",
  members: 4,
  formed: 1968,
  split: 2025,
  albums: [
    {
      name: "Black Sabbath",
      released: 1970,
    },
    {
      name: "Paranoid",
      released: 1970,
    },
    {
      name: "Master of Reality",
      released: 1971,
    },
    {
      name: "Vol. 4",
      released: 1972,
    },
  ],
};

bandInfo = `The ${band.nationality} ${band.genre} band ${band.name} were active between ${band.formed} and ${band.split}. Their first album, ${band.albums[0].name}, was released in ${band.albums[0].released}.`;

// Don't edit the code below here!
// ...
```

```js
let bandInfo;

const band = {
  name: "Black Sabbath",
  nationality: "British",
  genre: "heavy metal",
  members: 4,
  formed: 1968,
  split: 2025,
  albums: [
    {
      name: "Black Sabbath",
      released: 1970,
    },
    {
      name: "Paranoid",
      released: 1970,
    },
    {
      name: "Master of Reality",
      released: 1971,
    },
    {
      name: "Vol. 4",
      released: 1972,
    },
  ],
};

bandInfo = `The ${band.nationality} ${band.genre} band ${band.name} were active between ${band.formed} and ${band.split}. Their first album, ${band.albums[0].name}, was released in ${band.albums[0].released}.`;

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);
```

</details>

### Nesne temelleri 3

Bu görevde, Nesne temelleri 1'deki `cat` nesne değişmezine geri dönmenizi istiyoruz.

Görevi tamamlamak için:

1. `greeting()` metodunu, tarayıcının konsoluna `"Hello, said Bertie the Cymric."` yazdıracak, ancak adı veya cinsi ne olursa olsun aynı yapıdaki _herhangi bir_ kedi nesnesinde çalışacak şekilde yeniden yazın.
2. Aynı yapıya ve `greeting()` metoduna sahip, ancak farklı bir `name`, `breed` ve `color` değerine sahip `cat2` adlı kendi nesnenizi yazın.
3. Konsola uygun selamlamaları yazdırdıklarını kontrol etmek için her iki `greeting()` metodunu da çağırın.

Görevin başlangıç noktası şu şekilde görünür (hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

// Don't edit the code above here!

// Add your code here
```

DOM'a hiçbir şey yazdırmadığı için bu görevde tamamlanmış içerik sağlamadık. Çıktının tamamı konsola yazdırılır.

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

const cat2 = {
  name: "Elfie",
  breed: "Aphrodite Giant",
  color: "ginger",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

cat.greeting();
cat2.greeting();
```

```js
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

const cat2 = {
  name: "Elfie",
  breed: "Aphrodite Giant",
  color: "ginger",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

cat.greeting();
cat2.greeting();
```

</details>

### Nesne temelleri 4

Görev 3 için yazdığınız kodda, `greeting()` metodu ve özellikleri her kedi için bir kez olmak üzere iki kez tanımlanmıştır. Bu ideal değildir: özellikle, programlamada [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) veya "Kendini Tekrar Etme" ("Don't Repeat Yourself") adı verilen bir ilkeyi ihlal eder. Bu görevde, nesne üyeleri yalnızca bir kez tanımlanacak şekilde kodu iyileştirmenizi istiyoruz.

Görevi tamamlamak için:

1. Kedi örneklerini (instances) tanımlayan bir JavaScript sınıfı (class) oluşturun
2. `cat` ve `cat2` örneklerini oluşturmak için sınıfınızı `new` anahtar sözcüğüyle birlikte kullanın.

Görevin başlangıç noktası şu şekilde görünür (hiçbir şey gösterilmemektedir):

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```js
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

const cat2 = {
  name: "Elfie",
  breed: "Aphrodite Giant",
  color: "ginger",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

// Don't edit the code below here!

cat.greeting();
cat2.greeting();
```

DOM'a hiçbir şey yazdırmadığı için bu görevde tamamlanmış içerik sağlamadık. Çıktının tamamı konsola yazdırılır.

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
class Cat {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }
  greeting() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}

const cat = new Cat("Bertie", "Cymric", "white");
const cat2 = new Cat("Elfie", "Aphrodite Giant", "ginger");

// Don't edit the code below here!
// ...
```

</details>

---

## 27. DOM Betik Yazımına Giriş (DOM scripting introduction)

**Kaynak:** [DOM scripting introduction](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting)

Web sayfaları ve uygulamaları yazarken yapmak isteyeceğiniz en yaygın şeylerden biri, belge yapısını bir şekilde değiştirmektir. Bu işlem genellikle HTML ve biçimlendirme bilgilerini kontrol etmeye yönelik yerleşik tarayıcı API'lerinden oluşan bir küme aracılığıyla Belge Nesne Modeli'ni (Document Object Model — DOM) işleyerek yapılır. Bu makalede sizi **DOM betik yazımı (DOM scripting)** ile tanıştıracağız.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış, önceki derslerde ele alındığı şekliyle JavaScript temellerine aşinalık.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>DOM'un ne olduğu — tarayıcının, belgenin HTML yapısını bir nesneler hiyerarşisi olarak dahili temsil etme şekli.</li>
          <li>JavaScript'te temsil edildiği şekliyle bir web tarayıcısının önemli bölümleri — <code>Navigator</code>, <code>Window</code> ve <code>Document</code>.</li>
          <li>DOM düğümlerinin (nodes) DOM ağacında birbirlerine göre nasıl var olduğu — kök (root), üst (parent), alt (child), kardeş (sibling) ve torun/alt soy (descendant).</li>
          <li>DOM düğümlerine başvurular almak, yeni düğümler oluşturmak, düğümleri ve öznitelikleri eklemek ve kaldırmak.</li>
          <li>JavaScript ile CSS stillerini işlemek.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Bir web tarayıcısının önemli bölümleri

Web tarayıcıları, birçoğu bir web geliştiricisi tarafından JavaScript kullanılarak kontrol edilemeyen veya işlenemeyen çok sayıda hareketli parçaya sahip çok karmaşık yazılım parçalarıdır. Bu tür sınırlamaların kötü bir şey olduğunu düşünebilirsiniz, ancak tarayıcılar çoğunlukla güvenlik etrafında şekillenen iyi nedenlerle kilitlenmiştir. Bir web sitesinin kayıtlı parolalarınıza veya diğer hassas bilgilerinize erişebildiğini ve sanki sizmişsiniz gibi web sitelerine giriş yapabildiğini hayal edin?

Sınırlamalara rağmen Web API'leri bize web sayfalarıyla pek çok harika şey yapmamıza olanak tanıyan çok sayıda işlevselliğe erişim sağlamaya devam eder. Kodunuzda düzenli olarak başvuracağınız gerçekten çok bariz birkaç kısım vardır — bir tarayıcının doğrudan web sayfalarını görüntülemeye dahil olan ana bölümlerini temsil eden aşağıdaki şemayı inceleyin:

![Web tarayıcısının önemli bölümleri; document web sayfasıdır. Window, belgenin tamamını ve ayrıca sekmeyi içerir. Navigator ise pencereyi (belgeyi de içeren) ve diğer tüm pencereleri içeren tarayıcıdır.](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/dom_scripting/document-window-navigator.png)

- **Pencere (window)**, bir web sayfasının içine yüklendiği tarayıcı sekmesini temsil eder; bu, JavaScript'te [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) nesnesiyle temsil edilir. Bu nesne üzerinde kullanılabilen metotları kullanarak pencerenin boyutunu döndürmek (bkz. [`Window.innerWidth`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth) ve [`Window.innerHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight)), o pencereye yüklenen belgeyi işlemek, istemci tarafında o belgeye özgü verileri saklamak (örneğin yerel bir veritabanı veya başka bir depolama mekanizması kullanarak), geçerli pencereye bir [olay işleyici (event handler)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events) bağlamak ve daha fazlası gibi şeyler yapabilirsiniz.
- **Gezgin (navigator)**, tarayıcının web üzerinde var olduğu şekliyle durumunu ve kimliğini temsil eder. JavaScript'te bu, [`Navigator`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) nesnesiyle temsil edilir. Kullanıcının tercih ettiği dil, kullanıcının web kamerasından bir medya akışı vb. gibi şeyleri almak için bu nesneyi kullanabilirsiniz.
- **Belge (document)** (tarayıcılarda DOM ile temsil edilir), pencereye yüklenen gerçek sayfadır ve JavaScript'te [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) nesnesiyle temsil edilir. Belgeyi oluşturan HTML ve CSS hakkındaki bilgileri döndürmek ve işlemek için bu nesneyi kullanabilirsiniz; örneğin DOM'daki bir öğeye başvuru almak, metin içeriğini değiştirmek, ona yeni stiller uygulamak, yeni öğeler oluşturup bunları geçerli öğeye alt öğeler (children) olarak eklemek ve hatta onu tamamen silmek.

Bu makalede çoğunlukla belgeyi işlemeye odaklanacağız, ancak bunun yanı sıra birkaç yararlı parça daha göstereceğiz.

### Belge nesne modeli (Document Object Model)

Kursun önceki bölümlerinde de baktığımız Belge Nesne Modeli (DOM) hakkında kısa bir özet sunalım. Tarayıcı sekmelerinizin her birinde o anda yüklü olan belge bir DOM ile temsil edilir. Bu, HTML yapısına programlama dilleri tarafından kolayca erişilebilmesini sağlayan, tarayıcı tarafından oluşturulmuş bir "ağaç yapısı" ("tree structure") temsilidir — örneğin tarayıcının kendisi bir sayfayı işlerken (render) doğru öğelere biçimlendirme ve diğer bilgileri uygulamak için bunu kullanır ve sizin gibi geliştiriciler de sayfa işlendikten sonra JavaScript ile DOM'u işleyebilir.

> [!NOTE]
> Scrimba'nın [Belge Nesne Modeli (The Document Object Model)](https://scrimba.com/learn-javascript-c0v/~0g?via=mdn) [*MDN öğrenme ortağı*](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds) dersi, "DOM" teriminin ve ne anlama geldiğinin kullanışlı bir incelemesini sunar.

[dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) adresinde bir örnek sayfa oluşturduk ([canlı olarak da görün](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Bunu tarayıcınızda açmayı deneyin — içinde bir resim ve içinde bir bağlantı bulunan bir paragraf bulabileceğiniz bir [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/section) öğesi içeren çok basit bir sayfadır. HTML kaynak kodu şu şekilde görünür:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Simple DOM example</title>
  </head>
  <body>
    <section>
      <img
        src="dinosaur.png"
        alt="A red Tyrannosaurus Rex: A two legged dinosaur
        standing upright like a human, with small arms, and a
        large head with lots of sharp teeth." />
      <p>
        Here we will add a link to the
        <a href="https://www.mozilla.org/">Mozilla homepage</a>
      </p>
    </section>
  </body>
</html>
```

DOM ise şu şekilde görünür:

![Belge Nesne Modeli'nin ağaç yapısı temsili: En üstteki düğüm doctype ve HTML öğesidir. HTML'in alt düğümleri head ve body öğelerini içerir. Her alt öğe bir daldır. Boşluklar dahil tüm metinler de gösterilmektedir.](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/dom_scripting/dom-screenshot.png)

> [!NOTE]
> Bu DOM ağacı şeması Ian Hickson'ın [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) aracı kullanılarak oluşturulmuştur.

Ağaçtaki her girdiye **düğüm (node)** denir. Yukarıdaki şemada bazı düğümlerin öğeleri (`HTML`, `HEAD`, `META` vb. olarak tanımlanır), bazılarının ise metni (`#text` olarak tanımlanır) temsil ettiğini görebilirsiniz. [Başka düğüm türleri de vardır](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType), ancak karşılaşacağınız ana düğümler bunlardır.

Düğümler ayrıca ağaçtaki diğer düğümlere göre konumlarıyla da adlandırılır:

- **Kök düğüm (Root node)**: Ağaçtaki en üst düğümdür; HTML durumunda her zaman `HTML` düğümüdür (SVG ve özel XML gibi diğer işaretleme sözcük dağarcıkları farklı kök öğelere sahip olacaktır).
- **Alt düğüm / Çocuk düğüm (Child node)**: Başka bir düğümün _doğrudan_ içindeki bir düğüm. Örneğin yukarıdaki örnekte `IMG`, `SECTION` düğümünün bir alt düğümüdür.
- **Torun düğüm / Alt soy düğümü (Descendant node)**: Başka bir düğümün içinde _herhangi bir yerde_ bulunan bir düğüm. Örneğin yukarıdaki örnekte `IMG`, `SECTION` düğümünün bir alt düğümüdür ve aynı zamanda bir torunudur (descendant). `IMG`, ağaçta iki seviye altında olduğu için `BODY` düğümünün bir alt düğümü (child) değildir, ancak `BODY` düğümünün bir torunudur (descendant).
- **Üst düğüm / Ebeveyn düğüm (Parent node)**: İçinde başka bir düğüm bulunan bir düğüm. Örneğin yukarıdaki örnekte `BODY`, `SECTION` düğümünün üst düğümüdür.
- **Kardeş düğümler (Sibling nodes)**: DOM ağacında aynı üst düğümün altında aynı seviyede oturan düğümler. Örneğin yukarıdaki örnekte `IMG` ve `P` kardeştir.

DOM ile çalışmaya başlamadan önce bu terminolojiye aşina olmak yararlıdır, çünkü karşılaşacağınız bir dizi kod terimi bunlardan yararlanır. Bunlarla CSS'te de karşılaşacaksınız (örneğin, torun seçici — descendant selector, alt öğe seçici — child selector).

### Biraz temel DOM işleme yapmak

DOM işleme hakkında bilgi edinmeye başlamak için pratik bir örnekle başlayalım.

1. [dom-example.html sayfasının](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) ve onunla birlikte gelen [resmin](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png) yerel bir kopyasını alın.
2. Kapanış `</body>` etiketinin hemen üstüne bir `<script></script>` öğesi ekleyin.
3. DOM içindeki bir öğeyi işlemek için önce onu seçmeniz ve ona olan bir başvuruyu bir değişkenin içinde saklamanız gerekir. Betik öğenizin içine aşağıdaki satırı ekleyin:

   ```js
   const link = document.querySelector("a");
   ```

4. Artık bir değişkende saklanan öğe başvurumuz olduğuna göre, kendisi için kullanılabilir olan özellikleri ve metotları kullanarak onu işlemeye başlayabiliriz (bunlar [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) öğesi durumunda [`HTMLAnchorElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement), onun daha genel üst arayüzü [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) ve bir DOM'daki tüm düğümleri temsil eden [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) gibi arayüzlerde tanımlanır). Her şeyden önce, [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) özelliğinin değerini güncelleyerek bağlantının içindeki metni değiştirelim. Önceki satırın altına aşağıdaki satırı ekleyin:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Ayrıca üzerine tıklandığında yanlış yere gitmemesi için bağlantının işaret ettiği URL'yi de değiştirmeliyiz. Yine en alta aşağıdaki satırı ekleyin:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

JavaScript'teki pek çok şeyde olduğu gibi, bir öğeyi seçmenin ve ona olan bir başvuruyu bir değişkende saklamanın pek çok yolu olduğunu unutmayın. [`Document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) önerilen modern yaklaşımdır. CSS seçicilerini kullanarak öğeleri seçmenize olanak tanıdığı için kullanışlıdır. Yukarıdaki `querySelector()` çağrısı belgede görünen ilk [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) öğesiyle eşleşecektir. Birden çok öğeyle eşleşmek ve onlara bir şeyler yapmak isteseydiniz, belgede seçiciyle eşleşen her öğeyle eşleşen ve onlara olan başvuruları [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) adlı [dizi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays) benzeri bir nesnede saklayan [`Document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) metodunu kullanabilirdiniz.

Öğe başvurularını yakalamak için şu gibi daha eski metotlar da mevcuttur:

- Belirli bir `id` özniteliği değerine sahip bir öğeyi seçen [`Document.getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById), örneğin `<p id="myId">My paragraph</p>`. Kimlik (ID) fonksiyona bir parametre olarak geçirilir, yani `const elementRef = document.getElementById('myId')`.
- Sayfadaki belirli bir türdeki tüm öğeleri (örneğin `<p>`'ler, `<a>`'lar vb.) içeren dizi benzeri bir nesne döndüren [`Document.getElementsByTagName()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName). Öğe türü fonksiyona bir parametre olarak geçirilir, yani `const elementRefArray = document.getElementsByTagName('p')`.

Bu ikisi eski tarayıcılarda `querySelector()` gibi modern metotlardan daha iyi çalışır, ancak o kadar kullanışlı değildir. Bir göz atın ve başka neleri bulabileceğinizi görün!

#### Yeni düğümler oluşturmak ve yerleştirmek

Yukarıdakiler size neler yapabileceğinize dair küçük bir fikir verdi, ancak daha ileri gidelim ve nasıl yeni öğeler oluşturabileceğimize bakalım.

1. Mevcut örneğe geri dönerek, [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/section) öğemize bir başvuru yakalayarak başlayalım — mevcut betiğinizin en altına aşağıdaki kodu ekleyin (diğer satırlarda da aynısını yapın):

   ```js
   const sect = document.querySelector("section");
   ```

2. Şimdi [`Document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) kullanarak yeni bir paragraf oluşturalım ve ona daha önce olduğu gibi biraz metin içeriği verelim:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Artık [`Node.appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) kullanarak yeni paragrafı bölümün sonuna ekleyebilirsiniz:

   ```js
   sect.appendChild(para);
   ```

4. Bu kısım için son olarak, cümleyi güzelce tamamlamak amacıyla bağlantının içinde oturduğu paragrafa bir metin düğümü (text node) ekleyelim. Önce [`Document.createTextNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode) kullanarak metin düğümünü oluşturacağız:

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Şimdi bağlantının içinde bulunduğu paragrafa bir başvuru yakalayacağız ve metin düğümünü ona ekleyeceğiz:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

DOM'a düğüm eklemek için ihtiyacınız olanların çoğu budur — dinamik arayüzler oluştururken bu metotlardan çokça yararlanacaksınız (daha sonra bazı örneklere bakacağız).

#### Öğeleri taşımak ve kaldırmak

Düğümleri taşımak veya onları DOM'dan tamamen silmek istediğiniz zamanlar olabilir. Bu tamamen mümkündür.

İçinde bağlantı bulunan paragrafı bölümün en altına taşımak isteseydik şunu yapabilirdik:

```js
sect.appendChild(linkPara);
```

Bu, paragrafı bölümün en altına doğru taşır. Onun ikinci bir kopyasını oluşturacağını düşünmüş olabilirsiniz, ancak durum böyle değildir — `linkPara` o paragrafın tek ve biricik kopyasına olan bir başvurudur. Bir kopya oluşturup onu da eklemek isteseydiniz, bunun yerine [`Node.cloneNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode) kullanmanız gerekirdi.

Bir düğümü kaldırmak da oldukça basittir; en azından kaldırılacak düğüme ve onun üst düğümüne bir başvurunuz olduğunda. Mevcut durumumuzda yalnızca [`Node.removeChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) metodunu şu şekilde kullanırız:

```js
sect.removeChild(linkPara);
```

Oldukça yaygın olduğu üzere, yalnızca kendisine olan bir başvuruya dayanarak bir düğümü kaldırmak istediğinizde [`Element.remove()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) kullanabilirsiniz:

```js
linkPara.remove();
```

Bu metot eski tarayıcılarda desteklenmez. Bir düğüme kendisini kaldırmasını söyleyecek bir metotları yoktur, dolayısıyla aşağıdakini yapmanız gerekir:

```js
linkPara.parentNode.removeChild(linkPara);
```

Yukarıdaki satırları kodunuza eklemeyi bir deneyin.

#### Stilleri işlemek

CSS stillerini JavaScript aracılığıyla çeşitli şekillerde işlemek mümkündür.

Başlangıç olarak, [`CSSStyleSheet`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet) nesnelerine sahip dizi benzeri bir nesne döndüren [`Document.styleSheets`](https://developer.mozilla.org/en-US/docs/Web/API/Document/styleSheets) özelliğini kullanarak bir belgeye bağlı tüm stil sayfalarının bir listesini alabilirsiniz. Ardından istediğiniz gibi stiller ekleyebilir/kaldırabilirsiniz. Ancak stili işlemenin biraz eski ve zor bir yolu olduğu için bu özellikler üzerinde durmayacağız. Çok daha kolay yollar vardır.

İlk yol, dinamik olarak biçimlendirmek istediğiniz öğelerin üzerine doğrudan satır içi stiller (inline styles) eklemektir. Bu, belgedeki her öğe için satır içi biçimlendirme bilgileri içeren [`HTMLElement.style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) özelliğiyle yapılır. Öğe stillerini doğrudan güncellemek için bu nesnenin özelliklerini ayarlayabilirsiniz.

1. Örnek olarak, devam eden örneğimize şu satırları eklemeyi deneyin:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Sayfayı yeniden yükleyin; stillerin paragrafa uygulandığını göreceksiniz. Tarayıcınızın [Sayfa Denetçisi / DOM denetçisinde (Page Inspector/DOM inspector)](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) o paragrafa bakarsanız, bu satırların gerçekten de belgeye satır içi stiller eklediğini görürsünüz:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> CSS stillerinin JavaScript özelliği sürümlerinin [küçük deve hörgücü yazımıyla (lower camel case)](https://developer.mozilla.org/en-US/docs/Glossary/Camel_case) yazıldığına, CSS sürümlerinin ise kısa çizgili ([kebap yazımı — kebab-case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case)) olduğuna dikkat edin (örneğin `backgroundColor` ve `background-color` karşılaştırması). Bunları birbirine karıştırmadığınızdan emin olun, aksi takdirde çalışmayacaktır.

Belgenizdeki stilleri dinamik olarak işlemenin bir başka yaygın yolu daha vardır; bu da stilleri ayrı bir stil sayfasına yazmak ve bir sınıf adı ekleyerek/kaldırarak bu stillere başvurmaktır.

1. JavaScript'e eklediğiniz önceki beş satırı silin.
2. HTML [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head) bölümünüzün içine aşağıdakini ekleyin:

   ```html
   <style>
     .highlight {
       color: white;
       background-color: black;
       padding: 10px;
       width: 250px;
       text-align: center;
     }
   </style>
   ```

3. Bu sınıf adını öğenize eklemek için öğenin [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) özelliğinin `add()` metodunu kullanın:

   ```js
   para.classList.add("highlight");
   ```

4. Sayfanızı yenileyin; hiçbir değişiklik görmeyeceksiniz — CSS hâlâ paragrafa uygulanmaktadır, ancak bu kez satır içi CSS stilleri olarak değil, ona CSS kuralımız tarafından seçilen bir sınıf verilerek uygulanmıştır.

Hangi yöntemi seçeceğiniz size kalmıştır; her ikisinin de avantajları ve dezavantajları vardır. İlk yöntem daha az kurulum gerektirir ve basit kullanımlar için iyidir; ikinci yöntem ise daha pürüzsüzdür (CSS ve JavaScript'i karıştırmak yoktur, kötü bir uygulama olarak görülen satır içi stiller yoktur). Daha büyük ve daha kapsamlı uygulamalar oluşturmaya başladıkça muhtemelen ikinci yöntemi daha çok kullanmaya başlayacaksınız, ancak bu gerçekten size kalmıştır.

Bu noktada aslında yararlı hiçbir şey yapmadık! Statik içerik oluşturmak için JavaScript kullanmanın hiçbir anlamı yoktur — onu doğrudan HTML'inize yazabilir ve JavaScript kullanmayabilirsiniz. HTML'den daha karmaşıktır ve içeriğinizi JavaScript ile oluşturmanın kendisine bağlı başka sorunları da vardır (arama motorları tarafından okunamaması gibi).

Bir sonraki bölümde DOM API'lerinin daha pratik bir kullanımına bakacağız.

> [!NOTE]
> [dom-example.html demosunun tamamlanmış sürümümüzü](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) GitHub'da bulabilirsiniz ([canlı olarak da görün](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

### Dinamik bir alışveriş listesi oluşturmak

Bu alıştırmada, bir form girdisi ve bir düğme kullanarak öğeler eklemenize olanak tanıyan dinamik bir alışveriş listesi oluşturmanızı istiyoruz. Girdi alanına bir öğe yazıp düğmeye tıkladıktan veya <kbd>Enter</kbd> tuşuna bastıktan sonra şunlar gerçekleşmelidir:

- Öğe listede görünmelidir.
- Her öğenin yanında, tıklandığında öğeyi listeden kaldıran bir düğme bulunmalıdır.
- Girdi alanları temizlenmeli ve bir sonraki öğe girişine hazır olmak üzere odaklanmalıdır.

Tamamlanmış demo aşağıdakine benzer görünecektir — oluşturmadan önce onu deneyin!

```html
<h1>My shopping list</h1>

<form>
  <label for="item">Enter a new item:</label>
  <input type="text" name="item" id="item" />
  <button>Add item</button>
</form>

<ul></ul>
```

```css
li {
  margin-bottom: 10px;
}

li button {
  font-size: 12px;
  margin-left: 20px;
}
```

```js
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const myItem = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";
  list.appendChild(listItem);

  listBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
});
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Alıştırmayı tamamlamak için aşağıdaki adımları izleyin ve listenin yukarıda açıklandığı gibi davrandığından emin olun.

1. Başlamak için [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) başlangıç dosyamızın bir kopyasını indirin ve bir yerde kopyasını oluşturun. Minimal düzeyde CSS'e, bir etiket, girdi ve düğme içeren bir forma, boş bir listeye ve bir [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) öğesine sahip olduğunu göreceksiniz. Tüm eklemelerinizi betiğin içinde yapacaksınız.
2. Liste ([`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul)), [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) ve [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) öğelerine olan başvuruları tutan üç değişken oluşturun.
3. Düğmeye tıklanmasına yanıt olarak çalışacak bir [fonksiyon](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions) oluşturun.
4. Fonksiyon gövdesinin içinde [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) metodunu çağırarak başlayın. Girdi bir form öğesinin içine sarmalandığından, <kbd>Enter</kbd> tuşuna basmak formun gönderilmesini tetikleyecektir. `preventDefault()` çağrısı, bunun yerine listeye yeni bir öğe eklenebilmesi için formun sayfayı yenilemesini engelleyecektir.
5. Girdinin geçerli [değerini (`value`)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/value) bir değişkende saklayarak devam edin.
6. Ardından, değerini boş bir dizeye (`""`) ayarlayarak girdi öğesini temizleyin.
7. Üç yeni öğe — bir liste öğesi ([`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li)), bir [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) ve bir [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) — oluşturun ve bunları değişkenlerde saklayın.
8. Span ve düğmeyi liste öğesinin alt öğeleri (children) olarak ekleyin.
9. Span öğesinin metin içeriğini daha önce kaydettiğiniz girdi değerine ayarlayın ve düğmenin metin içeriğini `Delete` olarak ayarlayın.
10. Liste öğesini listeye ekleyin.
11. **Delete** düğmesine, tıklandığında liste öğesinin tamamını (`<li>...</li>`) kaldıracak şekilde bir olay işleyici bağlayın.
12. Son olarak, bir sonraki alışveriş listesi öğesini girmeye hazır olması için girdi öğesine odaklanmak üzere [`focus()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus) metodunu kullanın.

### Özet

Belge ve DOM işleme çalışmamızın sonuna ulaştık. Bu noktada, belgeleri ve kullanıcının web deneyiminin diğer yönlerini kontrol etmek açısından bir web tarayıcısının önemli bölümlerinin neler olduğunu anlamış olmalısınız. En önemlisi, Belge Nesne Modeli'nin ne olduğunu ve yararlı işlevsellikler oluşturmak için onun nasıl işleneceğini anlamış olmalısınız.

### Ayrıca bakınız

- Belgelerinizi işlemek için kullanabileceğiniz daha pek çok özellik vardır. Başvuru kaynaklarımızdan bazılarına göz atın ve neler keşfedebileceğinizi görün:
  - [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document)
  - [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window)
  - [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node)
  - [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement), [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) vb.
- [DOM Betik Yazımı (DOM Scripting)](https://explainers.dev/dom-scripting/), explainers.dev

---

## 28. Görev: Resim Galerisi (Challenge: Image gallery)

**Kaynak:** [Challenge: Image gallery](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Image_gallery)

Bu görevde (challenge), pek çok web sitesinde göreceğiniz oldukça yaygın bir öğeyi — JavaScript destekli bir resim galerisini — oluşturmanızı sağlayacağız. Bu süreçte döngüler, fonksiyonlar, koşullu ifadeler, olaylar, DOM betik yazımı ve nesne temelleri konusundaki bilgileriniz test edilecektir.

### Başlangıç noktası

Başlamak için aşağıdaki kod panellerinden birindeki **Play** ("Çalıştır") düğmesine tıklayarak sağlanan örneği MDN Playground'da açın. Ardından JavaScript işlevselliğini tamamlamak için [Proje özeti](#proje-özeti) bölümündeki talimatları izleyeceksiniz.

HTML şu şekilde görünür:

```html
<h1>Image gallery example</h1>

<div class="full-img">
  <img
    class="displayed-img"
    src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic1.jpg"
    alt="Closeup of a human eye" />
  <div class="overlay"></div>
  <button class="dark">Darken</button>
</div>

<div class="thumb-bar"></div>
```

Başlangıç JavaScript kodu şu şekilde görünür:

```js
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

```css
body {
  font-family: sans-serif;
  width: 640px;
  margin: 0 auto;
  background-color: lightgray;
}

h1 {
  text-align: center;
}

.full-img {
  position: relative;
  display: block;
  width: 640px;
  height: 480px;
  margin-bottom: 2px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 640px;
  height: 480px;
}

button {
  background: rgb(150 150 150 / 0.6);
  border: 1px solid #999999;
  position: absolute;
  cursor: pointer;
  top: 2px;
  left: 2px;
}

button:hover,
button:focus {
  color: rgb(150 150 150 / 1);
  background-color: black;
}

.thumb-bar {
  display: flex;
  gap: 2px;
  cursor: pointer;
}

.thumb-bar img {
  display: block;
  width: 100px;
  flex: 1;
}

.thumb-bar img:hover,
.thumb-bar img:focus {
  outline: 2px solid blue;
}
```

Kısa olması açısından galeri CSS'ini gizledik, ancak uygulamaya MDN Playground'da baktığınızda onu görebilirsiniz.

### Proje özeti

Size biraz HTML, CSS ve birkaç satır JavaScript kodu sağlandı. Göreviniz aşağıdaki talimatları izleyerek bunu çalışan bir resim galerisine dönüştürmek için gerekli JavaScript kodunu yazmaktır.

Galeri büyük bir resimden ve bir sıra küçük resimden (thumbnails) oluşacaktır. Bir küçük resme tıklandığında veya Tab tuşuyla üzerine gelinip ardından <kbd>Enter</kbd>/<kbd>Return</kbd> tuşuna basıldığında, o küçük resim büyük resim olarak görüntülenmelidir. İlgili `<img>` öğesi de doğru `alt` metniyle güncellenmelidir.

Sol üst köşede, tekrar tekrar basıldığında büyük resmin üzerine kaplanmış olan bir `<div>` öğesinin saydamlığını değiştirerek büyük resmi daha koyu ve daha açık bir renk tonu arasında değiştiren (toggle) bir düğme vardır.

Örneğe gömmeniz gereken resimler ve bunların gerekli `alt` metinleri şunlardır:

- [`pic1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic1.jpg): "Closeup of a human eye".
- [`pic2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic2.jpg): "Rock that looks like a wave".
- [`pic3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic3.jpg): "Purple and white pansies".
- [`pic4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic4.jpg): "Section of wall from a pharaoh's tomb".
- [`pic5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg): "Large moth on a leaf".

#### Bir veri nesnesi oluşturmak

Her şeyden önce, `images` adlı bir nesneler dizisi bildirmenizi istiyoruz. Her nesne iki özellik içermelidir:

- `filename`: Resim dosyasının adı (tam URL değil).
- `alt`: Resmin `alt` metni.

#### Resimleri küçük resim çubuğuna eklemek

Ardından, `images` üzerinde döngü kurmanızı ve biraz DOM betik yazımı kullanarak hepsini `<img>` öğeleri aracılığıyla sayfaya gömmenizi istiyoruz. Bunlar, `thumbBar` sabitinde zaten başvurduğumuz `thumb-bar` sınıfına sahip `<div>` öğesinin alt öğeleri (children) olarak dahil edilmelidir.

1. Her resim dosyasının temel URL'sini (dosya adını içermeyen tüm URL) içeren `baseURL` adlı bir sabit oluşturun.
2. `images` üzerinde döngü kurmak için bir `for ... of` döngüsü oluşturun.
3. Her resim için yeni bir `<img>` öğesi oluşturun.
4. `<img>` kaynağını (`src`), `baseURL` ve `filename` değerlerinin bir kombinasyonu olması gereken resmin URL'sine eşit olacak şekilde ve `alt` özniteliğini de `alt` metnine eşit olacak şekilde ayarlayın.
5. Klavye aracılığıyla odaklanılabilir hale getirmek için `<img>` öğesine başka bir öznitelik ekleyin.
6. `<img>` öğesini `thumbBar` öğesine ekleyin.
7. Tıklandığında, tıklanan resmi tam boyutta görüntüleyen `updateDisplayedImage()` adlı bir fonksiyonun çalıştırılması için `<img>` öğesine bir `click` olay işleyicisi ekleyin. Bu fonksiyonu daha sonra oluşturacaksınız.
8. Klavye aracılığıyla odaklanıldıktan sonra, <kbd>Enter</kbd>/<kbd>Return</kbd> tuşuna (ve başka hiçbir tuşa değil) basılarak tıklanan resmin tam boyutta görüntülenebilmesi için `<img>` öğesine başka bir olay işleyicisi ekleyin. Bu, çözmek için biraz araştırma gerektirecek sınırları zorlayan bir hedeftir (stretch goal).

#### `updateDisplayedImage()` fonksiyonunu oluşturmak

Şimdi etkinleştirilen bir küçük resmi tam boyutta görüntüleyecek fonksiyonu oluşturma zamanı. Tam boyutlu `<img>` öğesine olan bir başvuruyu `displayedImage` sabitinde sakladık.

1. `updateDisplayedImage()` fonksiyonunu tanımlayın.
2. Fonksiyon gövdesinin içinde, `displayedImage` kaynağını etkinleştirilen `<img>` öğesinin kaynağına eşit olacak şekilde ayarlayın.
3. `displayedImage` alt metnini etkinleştirilen `<img>` öğesinin alt metnine eşit olacak şekilde ayarlayın.

#### Koyulaştır/Açıklaştır (Darken/Lighten) düğmesini bağlamak

"Darken/Lighten" `<button>` öğesine olan bir başvuruyu `btn` sabitinde ve tam boyutlu `<img>` öğesinin üzerine kapladığımız saydam `<div>` öğesine olan bir başvuruyu `overlay` sabitinde sakladık. Şunları yapmanızı istiyoruz:

1. İşleyici fonksiyonu olarak ayarlanmış isimsiz bir fonksiyonla `<button>` öğesine bir `click` olay işleyicisi ekleyin.
2. Fonksiyon gövdesinin içine, `<button>` öğesinin üzerinde ayarlanmış bir `dark` sınıfı (`class`) olup olmadığını test eden bir koşullu yapı ekleyin.
3. Tıklandığında `<button>` öğesinin bir `dark` sınıfı varsa, metin içeriğini `Lighten` olarak değiştirin ve `overlay` öğesinin arka plan rengini `rgb(0 0 0 / 0.5)` olarak değiştirin. `<button>` öğesinin `dark` sınıfını kaldırın.
4. Tıklandığında `<button>` öğesinin bir `dark` sınıfı _yoksa_, metin içeriğini `Darken` olarak değiştirin ve `overlay` öğesinin arka plan rengini `rgb(0 0 0 / 0)` olarak değiştirin. `<button>` öğesinin `dark` sınıfını ekleyin.
5. Koşullu yapıdan sonra çalıştırılan tek bir kod satırı kullanarak `dark` sınıfını açıp kapatmanın (toggle) bir yolunu düşünebilir misiniz? Bu da sınırları zorlayan bir başka hedeftir, ancak bir deneyin.

### İpuçları ve püf noktaları

- HTML veya CSS'i değiştirmenize gerek yoktur.

### Örnek

Tamamlanmış uygulamanız aşağıdaki canlı örnek gibi çalışmalıdır:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodu şuna benzer görünmelidir:

```js
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Solution: Create a data object

const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" },
];

// Solution: Loop through the images

// Create a baseURL constant containing the baseURL of the images
const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// Loop through the images using a for...of loop
for (const image of images) {
  // Create a new image element
  const newImage = document.createElement("img");
  // Set the source and alt text for the image
  newImage.src = `${baseURL}${image.filename}`;
  newImage.alt = image.alt;
  // Make the image focusable via the keyboard
  newImage.tabIndex = "0";
  // Append the image as a child of the thumbBar
  thumbBar.appendChild(newImage);
  // Update the display to show the image full size when a thumb is clicked
  newImage.addEventListener("click", updateDisplayedImage);
  // Update the display to show the image full size when the "Enter" key
  // is pressed after it has been focused
  newImage.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      updateDisplayedImage(e);
    }
  });
}

// Solution: Create the updateDisplayedImage() function

function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

// Solution: Wire up the Darken/Lighten button

// Add a click event listener on the button
btn.addEventListener("click", () => {
  // If the button has a "dark" class set,
  // change text to "Lighten" and make the overlay darker
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    // Else, change text to "Darken" and make
    // the overlay lighter
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }
  // Toggle the class ready for the next button press
  btn.classList.toggle("dark");
});
```

</details>

---

## 29. JavaScript ile Ağ İstekleri Yapmak (Making network requests with JavaScript)

**Kaynak:** [Making network requests with JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Network_requests)

Modern web sitelerinde ve uygulamalarında bir diğer çok yaygın görev de, tamamen yeni bir sayfa yüklemek zorunda kalmadan bir web sayfasının bölümlerini güncellemek amacıyla sunucudan tekil veri öğelerini almak için ağ istekleri (network requests) yapmaktır. Görünüşte küçük olan bu ayrıntı, sitelerin performansı ve davranışı üzerinde devasa bir etki yaratmıştır; bu nedenle bu makalede kavramı açıklayacak ve bunu mümkün kılan teknolojilere — özellikle de [Fetch API'sine](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) — bakacağız.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış, önceki derslerde ele alındığı şekliyle JavaScript temellerine aşinalık.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Web üzerindeki açık ara en yaygın eşzamansız (asynchronous) JavaScript kullanım durumu olan eşzamansız ağ istekleri.</li>
          <li>Ağdan getirilen yaygın kaynak türleri: JSON, medya varlıkları, RESTful API'lerden gelen veriler.</li>
          <li>Eşzamansız ağ isteklerini uygulamak için <code>fetch()</code> metodunun nasıl kullanılacağı.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Buradaki sorun nedir?

Bir web sayfası, bir HTML sayfasından ve (genellikle) stil sayfaları, betikler ve resimler gibi çeşitli diğer dosyalardan oluşur. Web üzerinde sayfa yüklemenin temel modeli, tarayıcınızın sayfayı görüntülemek için gereken dosyalar için sunucuya bir veya daha fazla HTTP isteği yapması ve sunucunun istenen dosyalarla yanıt vermesidir. Başka bir sayfayı ziyaret ederseniz tarayıcı yeni dosyaları ister ve sunucu onlarla yanıt verir.

![Geleneksel sayfa yükleme](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/network_requests/traditional-loading.svg)

Bu model pek çok site için mükemmel şekilde çalışır. Ancak çok veri odaklı (data-driven) bir web sitesini düşünün. Örneğin [Vancouver Halk Kütüphanesi (Vancouver Public Library)](https://www.vpl.ca/) gibi bir kütüphane web sitesi. Diğer şeylerin yanı sıra böyle bir siteyi bir veritabanına yönelik bir kullanıcı arayüzü olarak düşünebilirsiniz. Belirli bir kitap türünü aramanıza olanak tanıyabilir veya daha önce ödünç aldığınız kitaplara dayanarak beğenebileceğiniz kitaplar için size öneriler gösterebilir. Bunu yaptığınızda, sayfayı görüntülenecek yeni kitap kümesiyle güncellemesi gerekir. Ancak sayfa üstbilgisi (header), kenar çubuğu (sidebar) ve altbilgi (footer) gibi öğeler de dahil olmak üzere sayfa içeriğinin çoğunun aynı kaldığına dikkat edin.

Burada geleneksel modelle ilgili sorun, yalnızca bir bölümünü güncellememiz gerektiğinde bile sayfanın tamamını getirmemiz ve yüklememiz gerekmesidir. Bu verimsizdir ve kötü bir kullanıcı deneyimiyle sonuçlanabilir.

Bu nedenle geleneksel model yerine pek çok web sitesi, sunucudan veri istemek ve sayfa yüklemesi olmadan sayfa içeriğini güncellemek için JavaScript API'lerini kullanır. Dolayısıyla kullanıcı yeni bir ürün aradığında, tarayıcı yalnızca sayfayı güncellemek için gereken verileri — örneğin görüntülenecek yeni kitaplar kümesini — ister.

![Sayfaları güncellemek için fetch kullanmak](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/network_requests/fetch-update.svg)

Buradaki ana API [Fetch API'sidir](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). Bu, bir sayfada çalışan JavaScript'in belirli kaynakları almak üzere bir sunucuya bir [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) isteği yapmasını sağlar. Sunucu bunları sağladığında, JavaScript tipik olarak [DOM işleme API'lerini](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) kullanarak sayfayı güncellemek için verileri kullanabilir. İstenen veriler genellikle yapılandırılmış verileri aktarmak için iyi bir biçim olan [JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON)'dır, ancak HTML veya yalnızca metin de olabilir.

Bu; Amazon, YouTube, eBay vb. gibi veri odaklı siteler için yaygın bir kalıptır. Bu modelle:

- Sayfa güncellemeleri çok daha hızlıdır ve sayfanın yenilenmesini beklemeniz gerekmez; bu da sitenin daha hızlı ve daha duyarlı hissettirdiği anlamına gelir.
- Her güncellemede daha az veri indirilir, bu da daha az bant genişliği israfı anlamına gelir. Bu, geniş bant bağlantısına sahip bir masaüstünde çok büyük bir sorun olmayabilir, ancak mobil cihazlarda ve her yerde hızlı internet hizmetine sahip olmayan ülkelerde önemli bir sorundur.

> [!NOTE]
> İlk zamanlarda bu genel teknik, XML verileri isteme eğiliminde olduğu için [Eşzamansız (Asynchronous)](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous) JavaScript ve XML ([AJAX](https://developer.mozilla.org/en-US/docs/Glossary/AJAX)) olarak biliniyordu. Bugünlerde durum normalde böyle değildir (JSON isteme olasılığınız daha yüksektir), ancak sonuç hâlâ aynıdır ve "AJAX" terimi tekniği tanımlamak için hâlâ sıklıkla kullanılır.

İşleri daha da hızlandırmak için bazı siteler varlıkları ve verileri ilk istendiklerinde kullanıcının bilgisayarında da saklar; bu da sonraki ziyaretlerde sayfa her ilk yüklendiğinde taze kopyalar indirmek yerine yerel sürümleri kullandıkları anlamına gelir. İçerik yalnızca güncellendiğinde sunucudan yeniden yüklenir.

### Fetch API'si

Bu bölümde Fetch API'sinin birkaç örneği üzerinden geçeceğiz.

Aşağıdaki örnekler belirli bir karmaşıklık düzeyindedir ve Fetch API'sinin bazı gerçek dünya bağlamlarında nasıl kullanılacağını gösterir. Daha önce hiç fetch kullanmadıysanız, çok basit bir giriş incelemesi sunan Scrimba'nın [İlk fetch (First fetch)](https://scrimba.com/frontend-path-c0j/~0lu?via=mdn) [*MDN öğrenme ortağı*](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds) etkileşimli eğitimini çalışarak başlamak isteyebilirsiniz.

#### Metin içeriği getirmek

Bu örnek için birkaç farklı metin dosyasından veri isteyecek ve bunları bir içerik alanını doldurmak için kullanacağız.

Bu dosya serisi sahte veritabanımız olarak hareket edecektir; gerçek bir uygulamada verilerimizi bir veritabanından istemek için PHP, Python veya Node gibi bir sunucu tarafı dili kullanma olasılığımız daha yüksek olurdu. Ancak burada işleri basit tutmak ve bunun istemci tarafı kısmına yoğunlaşmak istiyoruz.

Bu örneğe başlamak için bilgisayarınızdaki yeni bir dizinde [fetch-start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/fetch-start.html) dosyasının ve dört metin dosyasının — [verse1.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse3.txt) ve [verse4.txt](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/verse4.txt) — yerel bir kopyasını oluşturun. Bu örnekte, açılır menüden seçildiğinde şiirin (pekâlâ tanıyabileceğiniz) farklı bir kıtasını (verse) getireceğiz.

[`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) öğesinin hemen içine aşağıdaki kodu ekleyin. Bu kod [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select) ve [`<pre>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/pre) öğelerine olan başvuruları saklar ve kullanıcı yeni bir değer seçtiğinde yeni değerin `updateDisplay()` adlı fonksiyona bir parametre olarak geçirilmesi için `<select>` öğesine bir dinleyici ekler.

```js
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

`updateDisplay()` fonksiyonumuzu tanımlayalım. Her şeyden önce, önceki kod bloğunuzun altına aşağıdakini koyun — bu, fonksiyonun boş kabuğudur.

```js
function updateDisplay(verse) {

}
```

Daha sonra ihtiyacımız olacağı için, yüklemek istediğimiz metin dosyasına işaret eden göreli bir URL (relative URL) oluşturarak fonksiyonumuza başlayacağız. Herhangi bir zamandaki [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select) öğesinin değeri, seçilen [`<option>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option) öğesinin içindeki metinle aynıdır (bir value özniteliğinde farklı bir değer belirtmediğiniz sürece) — örneğin "Verse 1". Karşılık gelen kıta metin dosyası "verse1.txt"dir ve HTML dosyasıyla aynı dizindedir, bu nedenle yalnızca dosya adı yeterli olacaktır.

Ancak web sunucuları büyük/küçük harfe duyarlı olma eğilimindedir ve dosya adında boşluk yoktur. "Verse 1" ifadesini "verse1.txt"ye dönüştürmek için 'V' harfini küçük harfe dönüştürmemiz, boşluğu kaldırmamız ve sonuna ".txt" eklememiz gerekir. Bu işlem [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), [`toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) ve [şablon değişmezi (template literal)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) ile yapılabilir. `updateDisplay()` fonksiyonunuzun içine aşağıdaki satırları ekleyin:

```js
verse = verse.replace(" ", "").toLowerCase();
const url = `${verse}.txt`;
```

Son olarak Fetch API'sini kullanmaya hazırız:

```js
// Call `fetch()`, passing in the URL.
fetch(url)
  // fetch() returns a promise. When we have received a response from the server,
  // the promise's `then()` handler is called with the response.
  .then((response) => {
    // Our handler throws an error if the request did not succeed.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // Otherwise (if the response succeeded), our handler fetches the response
    // as text by calling response.text(), and immediately returns the promise
    // returned by `response.text()`.
    return response.text();
  })
  // When response.text() has succeeded, the `then()` handler is called with
  // the text, and we copy it into the `poemDisplay` box.
  .then((text) => {
    poemDisplay.textContent = text;
  })
  // Catch any errors that might happen, and display a message
  // in the `poemDisplay` box.
  .catch((error) => {
    poemDisplay.textContent = `Could not fetch verse: ${error}`;
  });
```

Burada açımlanacak epeyce şey var.

İlk olarak, Fetch API'sine giriş noktası, URL'yi bir parametre olarak alan [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch) adlı küresel bir fonksiyondur (özel ayarlar için başka bir isteğe bağlı parametre daha alır, ancak burada onu kullanmıyoruz).

Ardından, `fetch()` bir [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) (Söz) döndüren eşzamansız bir API'dir. Bunun ne olduğunu bilmiyorsanız, [eşzamansız JavaScript (asynchronous JavaScript)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS) modülünü ve özellikle de [sözler (promises)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises) dersini okuyun, ardından buraya geri dönün. O makalenin `fetch()` API'sinden de bahsettiğini göreceksiniz!

Dolayısıyla `fetch()` bir promise döndürdüğü için, döndürülen promise nesnesinin [`then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) metodunun içine bir fonksiyon geçiririz. Bu metot, HTTP isteği sunucudan bir yanıt aldığında çağrılacaktır. İşleyicide, isteğin başarılı olup olmadığını kontrol ederiz ve başarılı olmadıysa bir hata fırlatırız (`throw`). Aksi takdirde yanıt gövdesini metin olarak almak için [`response.text()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/text) metodunu çağırırız.

Görünüşe göre `response.text()` metodu _da_ eşzamansızdır; bu nedenle döndürdüğü promise nesnesini döndürürüz ve bu yeni promise nesnesinin `then()` metoduna bir fonksiyon geçiririz. Bu fonksiyon yanıt metni hazır olduğunda çağrılacaktır ve onun içinde `<pre>` bloğumuzu metinle güncelleyeceğiz.

Son olarak, çağırdığımız eşzamansız fonksiyonların herhangi birinde veya onların işleyicilerinde fırlatılan tüm hataları yakalamak için sona bir [`catch()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) işleyicisi zincirleriz.

Olduğu haliyle örnekle ilgili bir sorun, ilk yüklendiğinde şiirin hiçbir kısmını göstermeyecek olmasıdır. Bunu düzeltmek için, varsayılan olarak 1. kıtayı yüklemek ve [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select) öğesinin her zaman doğru değeri gösterdiğinden emin olmak üzere kodunuzun en altına (kapanış `</script>` etiketinin hemen üstüne) aşağıdaki iki satırı ekleyin:

```js
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
```

##### Örneğinizi bir sunucudan sunmak

Örneği yalnızca yerel bir dosyadan çalıştırırsanız modern tarayıcılar HTTP isteklerini çalıştırmayacaktır. Bunun nedeni güvenlik kısıtlamalarıdır (web güvenliği hakkında daha fazla bilgi için [Web sitesi güvenliği (Website security)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) makalesini okuyun).

Bunu aşmak için örneği yerel bir web sunucusu üzerinden çalıştırarak test etmemiz gerekir. Bunu nasıl yapacağınızı öğrenmek için [Yerel bir test sunucusunu nasıl kurarsınız?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) sayfasına bakın.

#### Konserve mağazası (The can store)

Bu örnekte The Can Store adlı örnek bir site oluşturduk — yalnızca konserve ürünler satan kurgusal bir süpermarkettir. Bu [örneği GitHub üzerinde canlı olarak](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/) bulabilir ve [kaynak kodunu görebilirsiniz](https://github.com/mdn/learning-area/tree/main/javascript/apis/fetching-data/can-store).

![Sol sütunda arama seçeneklerini ve sağ sütunda ürün arama sonuçlarını gösteren sahte bir e-ticaret sitesi.](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/network_requests/can-store.png)

Varsayılan olarak site tüm ürünleri görüntüler, ancak bunları kategoriye, arama terimine veya her ikisine göre filtrelemek için sol sütundaki form kontrollerini kullanabilirsiniz.

Ürünleri kategoriye ve arama terimlerine göre filtrelemekle, verilerin kullanıcı arayüzünde doğru şekilde görüntülenmesi için dizeleri işlemekle vb. ilgilenen oldukça karmaşık pek çok kod vardır. Makalede bunların hepsini tartışmayacağız, ancak kodda kapsamlı yorum satırları bulabilirsiniz (bkz. [can-script.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/fetching-data/can-store/can-script.js)).

Ancak Fetch kodunu açıklayacağız.

Fetch kullanan ilk blok JavaScript'in başında bulunabilir:

```js
fetch("products.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => initialize(json))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));
```

`fetch()` fonksiyonu bir promise döndürür. Bu başarıyla tamamlanırsa, ilk `.then()` bloğunun içindeki fonksiyon ağdan döndürülen `response` (yanıt) nesnesini içerir.

Bu fonksiyonun içinde şunları yaparız:

- sunucunun bir hata ([`404 Not Found`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404) gibi) döndürmediğini kontrol ederiz. Döndürdüyse hatayı fırlatırız.
- yanıt üzerinde [`json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) metodunu çağırırız. Bu, verileri bir [JSON nesnesi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON) olarak alacaktır. `response.json()` tarafından döndürülen promise nesnesini döndürürüz.

Ardından döndürülen o promise nesnesinin `then()` metoduna bir fonksiyon geçiririz. Bu fonksiyona yanıt verilerini JSON olarak içeren bir nesne geçirilecektir; biz de bunu `initialize()` fonksiyonuna geçiririz. Tüm ürünleri kullanıcı arayüzünde görüntüleme sürecini başlatan şey `initialize()` fonksiyonudur.

Hataları işlemek için zincirin sonuna bir `.catch()` bloğu zincirleriz. Bu blok, promise bir nedenden dolayı başarısız olursa çalışır. İçine parametre olarak bir `err` nesnesi geçirilen bir fonksiyon dahil ederiz. Bu `err` nesnesi meydana gelen hatanın doğasını bildirmek için kullanılabilir; bu durumda bunu basit bir `console.error()` ile yaparız.

Ancak eksiksiz bir web sitesi, kullanıcının ekranında bir mesaj görüntüleyerek ve belki de durumu düzeltmek için seçenekler sunarak bu hatayı daha zarif bir şekilde ele alırdı, fakat bizim basit bir `console.error()` çağrısından fazlasına ihtiyacımız yoktur.

Başarısızlık durumunu kendiniz test edebilirsiniz:

1. Örnek dosyaların yerel bir kopyasını oluşturun.
2. Kodu bir web sunucusu üzerinden çalıştırın (yukarıda, [Örneğinizi bir sunucudan sunmak](#örneğinizi-bir-sunucudan-sunmak) bölümünde açıklandığı gibi).
3. Getirilen dosyanın yolunu 'produc.json' gibi bir şeye değiştirin (yanlış yazıldığından emin olun).
4. Şimdi index dosyasını tarayıcınızda (`localhost:8000` aracılığıyla) yükleyin ve tarayıcı geliştirici konsolunuza bakın. "Fetch problem: HTTP error: 404" benzeri bir mesaj göreceksiniz.

İkinci Fetch bloğu `fetchBlob()` fonksiyonunun içinde bulunabilir:

```js
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.blob();
  })
  .then((blob) => showProduct(blob, product))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));
```

Bu, [`json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) kullanmak yerine [`blob()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/blob) kullanmamız dışında öncekiyle hemen hemen aynı şekilde çalışır. Bu durumda yanıtımızı bir resim dosyası olarak döndürmek istiyoruz ve bunun için kullandığımız veri biçimi [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)'dur (terim "Binary Large Object" — "İkili Büyük Nesne" — ifadesinin kısaltmasıdır ve temelde resimler veya video dosyaları gibi büyük dosya benzeri nesneleri temsil etmek için kullanılabilir).

Blob nesnemizi başarıyla aldıktan sonra onu görüntüleyen `showProduct()` fonksiyonumuzun içine geçiririz.

### XMLHttpRequest API'si

Bazen, özellikle daha eski kodlarda, HTTP istekleri yapmak için kullanılan [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) (sıklıkla "XHR" olarak kısaltılır) adlı başka bir API görürsünüz. Bu, Fetch'ten önce gelmiştir ve AJAX'ı uygulamak için yaygın olarak kullanılan ilk API olmuştur. Yapabiliyorsanız Fetch kullanmanızı öneririz: daha basit bir API'dir ve `XMLHttpRequest`'ten daha fazla özelliğe sahiptir. `XMLHttpRequest` kullanan bir örnek üzerinden geçmeyeceğiz, ancak ilk konserve mağazası isteğimizin `XMLHttpRequest` sürümünün nasıl görüneceğini size göstereceğiz:

```js
const request = new XMLHttpRequest();

try {
  request.open("GET", "products.json");

  request.responseType = "json";

  request.addEventListener("load", () => initialize(request.response));
  request.addEventListener("error", () => console.error("XHR error"));

  request.send();
} catch (error) {
  console.error(`XHR error ${request.status}`);
}
```

Bunun beş aşaması vardır:

1. Yeni bir `XMLHttpRequest` nesnesi oluşturun.
2. Onu başlatmak için [`open()`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open) metodunu çağırın.
3. Yanıt başarıyla tamamlandığında tetiklenen [`load`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/load_event) olayına bir olay dinleyici ekleyin. Dinleyicide verilerle `initialize()` fonksiyonunu çağırırız.
4. İstek bir hatayla karşılaştığında tetiklenen [`error`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/error_event) olayına bir olay dinleyici ekleyin.
5. İsteği gönderin.

Ayrıca `open()` veya `send()` tarafından fırlatılan tüm hataları işlemek için her şeyin tamamını [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) bloğunun içine sarmalamamız gerekir.

Umarız Fetch API'sinin buna göre bir gelişme olduğunu düşünüyorsunuzdur. Özellikle hataları iki farklı yerde nasıl işlememiz gerektiğine bakın.

### Özet

Bu makale, sunucudan veri getirmek için Fetch ile çalışmaya nasıl başlanacağını göstermektedir.

### Ayrıca bakınız

Bununla birlikte bu makalede tartışılan ve gerçekten yalnızca yüzeyine dokunulmuş pek çok farklı konu vardır. Bu konular hakkında çok daha fazla ayrıntı için aşağıdaki makaleleri deneyin:

- [Fetch Kullanımı (Using Fetch)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Sözler (Promises)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JSON verileriyle çalışmak (Working with JSON data)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON)
- [HTTP'ye genel bir bakış (An overview of HTTP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
- [Sunucu tarafı web sitesi programlama (Server-side website programming)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side)

---

## 30. JSON ile Çalışmak (Working with JSON)

**Kaynak:** [Working with JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON)

JavaScript Nesne Gösterimi (JavaScript Object Notation — JSON), JavaScript nesne (object) sözdizimine dayalı olarak yapılandırılmış verileri temsil etmek için kullanılan standart, metin tabanlı bir biçimdir. Web uygulamalarında veri iletmek için (örneğin bir web sayfasında görüntülenebilmesi için sunucudan istemciye bazı veriler göndermek veya tam tersi) yaygın olarak kullanılır. Onunla oldukça sık karşılaşacaksınız; bu nedenle bu makalede, içindeki verilere erişebilmeniz için JSON'ı ayrıştırmak (parsing) ve JSON oluşturmak da dahil olmak üzere JavaScript kullanarak JSON ile çalışmak için ihtiyacınız olan her şeyi size veriyoruz.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış, önceki derslerde ele alındığı şekliyle JavaScript temellerine aşinalık.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>JSON'ın ne olduğu — JavaScript nesne sözdizimine dayalı çok yaygın kullanılan bir veri biçimi.</li>
          <li>JSON'ın diziler (arrays) de içerebileceği.</li>
          <li>Web API'lerinde mevcut olan mekanizmaları (örneğin Fetch API'deki <code>Response.json()</code>) kullanarak JSON'ı bir JavaScript nesnesi olarak almak.</li>
          <li>Köşeli parantez ve nokta sözdizimini kullanarak JSON verilerinin içindeki değerlere erişmek.</li>
          <li><code>JSON.parse()</code> ve <code>JSON.stringify()</code> kullanarak nesneler ve metin arasında dönüştürme yapmak.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Hayır, gerçekten, JSON nedir?

[JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON), JavaScript nesne sözdizimini izleyen metin tabanlı bir veri biçimidir.
Yapılandırılmış verileri bir dize (string) olarak temsil eder; bu da verileri bir ağ üzerinden iletmek istediğinizde yararlıdır.
JavaScript nesne değişmezi (object literal) sözdizimine çok benzese de JavaScript'ten bağımsız olarak kullanılabilir. Pek çok programlama ortamı JSON okuma (ayrıştırma — parse) ve üretme yeteneğine sahiptir.
JavaScript'te JSON ayrıştırma ve üretme metotları [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) nesnesi tarafından sağlanır.

> [!NOTE]
> Bir dizeyi yerel (native) bir nesneye dönüştürmeye _serileştirmeden çıkarma (deserialization)_, yerel bir nesneyi ağ üzerinden iletilebilmesi için bir dizeye dönüştürmeye ise _serileştirme (serialization)_ denir.

Bir JSON dizesi kendi dosyasında saklanabilir; bu dosya temelde `.json` uzantısına ve `application/json` [MIME türüne (MIME type)](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) sahip bir metin dosyasıdır.

#### JSON yapısı

Yukarıda açıklandığı gibi JSON, biçimi JavaScript nesne değişmezi biçimine çok benzeyen bir dizedir.
Aşağıdaki kod, bir nesneyi temsil eden geçerli bir JSON dizesidir.
Aynı zamanda geçerli bir JavaScript nesne değişmezi olduğuna da dikkat edin — yalnızca biraz daha fazla [sözdizimi kısıtlaması](#json-sözdizimi-kısıtlamaları) vardır.

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

Bu JSON'ı JavaScript programınıza bir dize olarak yüklerseniz, onu normal bir nesneye ayrıştırabilir (parse) ve ardından [JavaScript nesne temelleri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics) makalesinde baktığımız aynı nokta/köşeli parantez gösterimini kullanarak içindeki verilere erişebilirsiniz.
Örneğin:

```js
superHeroes.homeTown;
superHeroes.members[1].powers[2];
```

1. İlk olarak değişken adımız var — `superHeroes`.
2. Onun içinde `members` özelliğine (property) erişmek istiyoruz, bu yüzden `.members` kullanıyoruz.
3. `members`, nesnelerle doldurulmuş bir dizi içerir. Dizinin içindeki ikinci nesneye erişmek istiyoruz, bu yüzden `[1]` kullanıyoruz.
4. Bu nesnenin içinde `powers` özelliğine erişmek istiyoruz, bu yüzden `.powers` kullanıyoruz.
5. `powers` özelliğinin içinde seçilen kahramanın süper güçlerini içeren bir dizi vardır. Üçüncüsünü istiyoruz, bu yüzden `[2]` kullanıyoruz.

Buradan çıkarılacak ana sonuç, JSON ile çalışmanın gerçekten hiçbir özel yanı olmadığıdır; onu bir JavaScript nesnesine ayrıştırdıktan sonra, aynı nesne değişmezi sözdizimi kullanılarak bildirilen bir nesneyle nasıl çalışıyorsanız onunla da tıpkı öyle çalışırsınız.

> [!NOTE]
> Yukarıda görülen JSON'ı [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) örneğimizde bir değişkenin içinde kullanılabilir hale getirdik ([kaynak koduna](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html) bakın).
> Bunu yüklemeyi ve ardından tarayıcınızın JavaScript konsolu aracılığıyla değişkenin içindeki verilere erişmeyi deneyin.

#### JSON olarak diziler

Yukarıda JSON metninin temelde bir dizenin içindeki bir JavaScript nesnesine benzediğinden bahsetmiştik.
Dizileri de JSON'a/JSON'dan dönüştürebiliriz. Aşağıdaki örnek tamamen geçerli bir JSON'dır:

```json
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

Dizi öğelerine (ayrıştırılmış sürümünde) bir dizi diziniyle (index) başlayarak erişmeniz gerekir; örneğin `superHeroes[0].powers[0]`.

JSON ayrıca tek bir ilkel değer (primitive) de içerebilir. Örneğin `29`, `"Dan Jukes"` veya `true` değerlerinin hepsi geçerli JSON'dır.

#### JSON sözdizimi kısıtlamaları

Daha önce bahsedildiği gibi, her JSON geçerli bir JavaScript değişmezidir (nesne, dizi, sayı vb.). Ancak bunun tersi doğru değildir — tüm JavaScript nesne değişmezleri geçerli JSON değildir.

- JSON yalnızca _serileştirilebilir (serializable)_ veri türlerini içerebilir. Bunun anlamı şudur:
  - İlkel değerler (primitives) için JSON; dize değişmezlerini, sayı değişmezlerini, `true`, `false` ve `null` değerlerini içerebilir. Özellikle `undefined`, `NaN` veya `Infinity` değerlerini içeremez.
  - İlkel olmayan değerler için JSON; nesne değişmezlerini ve dizileri içerebilir, ancak fonksiyonları veya `Date`, `Set` ve `Map` gibi diğer nesne türlerini içeremez. JSON içindeki nesnelerin ve dizilerin de ayrıca geçerli JSON veri türlerini içermesi gerekir.
- Dizeler tek tırnak değil, çift tırnak içine alınmalıdır.
- Sayılar ondalık gösterimle yazılmalıdır.
- Bir nesnenin her özelliği `"key": value` (`"anahtar": değer`) biçiminde olmalıdır. Özellik adları çift tırnak içine alınmış dize değişmezleri olmalıdır. Metotlar gibi özel JavaScript sözdizimlerine izin verilmez; çünkü metotlar fonksiyondur ve fonksiyonlar geçerli JSON veri türleri değildir.
- Nesneler ve diziler [sondaki virgülleri (trailing commas)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) içeremez.
- JSON'da yorum satırlarına izin verilmez.

Yanlış yerleştirilmiş tek bir virgül veya iki nokta üst üste bile bir JSON dosyasını geçersiz kılabilir ve başarısız olmasına neden olabilir.
Kullanmaya çalıştığınız tüm verileri doğrulamaya dikkat etmelisiniz (bununla birlikte, üretici program düzgün çalıştığı sürece bilgisayar tarafından üretilen JSON'ın hata içerme olasılığı daha düşüktür).
[JSONLint](https://jsonlint.com/) veya [JSON-validate](https://www.json-validate.com/) gibi bir uygulama kullanarak JSON'ı doğrulayabilirsiniz.

> [!NOTE]
> Artık bu bölümü baştan sona okuduğunuza göre, temel JSON sözdizimi ve tarayıcınızın geliştirici araçları (devtools) içinde JSON istek verilerinin nasıl görüntüleneceği konusunda bazı yararlı rehberlikler sunan Scrimba'nın [JSON incelemesi (JSON review)](https://scrimba.com/frontend-path-c0j/~0lt?via=mdn) <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> etkileşimli eğitimiyle öğreniminizi desteklemek de isteyebilirsiniz.

### Bir JSON örneği üzerinde çalışmak

Bir web sitesinde JSON biçimli bazı verilerden nasıl yararlanabileceğimizi göstermek için bir örnek üzerinde çalışalım.

#### Başlarken

Başlangıç olarak, [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) ve [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) dosyalarımızın yerel kopyalarını oluşturun.
İkincisi sayfamızı biçimlendirmek için biraz basit CSS içerirken, ilki çok basit gövde HTML'i, artı bu alıştırmada yazacağımız JavaScript kodunu içerecek bir [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) öğesi içerir:

```html-nolint
<header>
...
</header>

<section>
...
</section>

<script>
// JavaScript goes here
</script>
```

JSON verilerimizi GitHub'ımızda, <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json> adresinde kullanılabilir hale getirdik.

JSON'ı betiğimize yükleyecek ve onu şu şekilde görüntülemek için bazı şık DOM işleme (DOM manipulation) yöntemleri kullanacağız:

!["Super hero squad" başlıklı (süslü bir yazı tipiyle) ve "Hometown: Metro City // Formed: 2016" alt başlıklı bir belge resmi. Başlığın altındaki üç sütun sırasıyla "Molecule Man", "Madame Uppercut" ve "Eternal Flame" başlıklıdır. Her sütun kahramanın gizli kimlik adını, yaşını ve süper güçlerini listeler.](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/json/json-superheroes.png)

#### Üst düzey fonksiyon

Üst düzey fonksiyon şu şekilde görünür:

```js
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
```

JSON'ı elde etmek için [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) adlı bir API kullanıyoruz.
Bu API, JavaScript aracılığıyla bir sunucudan kaynakları (örneğin resimler, metin, JSON, hatta HTML parçacıkları) almak üzere ağ istekleri yapmamıza olanak tanır; bu da tüm sayfayı yeniden yüklemek zorunda kalmadan küçük içerik bölümlerini güncelleyebileceğimiz anlamına gelir.

Fonksiyonumuzda ilk dört satır, JSON'ı sunucudan getirmek için Fetch API'sini kullanır:

- GitHub URL'sini saklamak için `requestURL` değişkenini bildiririz
- yeni bir [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) nesnesini başlatmak için URL'yi kullanırız.
- [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch) fonksiyonunu kullanarak ağ isteğini yaparız ve bu da bir [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) nesnesi döndürür
- `Response` nesnesinin [`json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) fonksiyonunu kullanarak yanıtı JSON olarak alırız.

> [!NOTE]
> `fetch()` API'si **eşzamansızdır (asynchronous)**. Eşzamansız fonksiyonlar hakkında ayrıntılı bilgiyi [Eşzamansız JavaScript modülümüzde](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS) öğrenebilirsiniz; ancak şimdilik yalnızca fetch API'sini kullanan fonksiyonun adından önce [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) anahtar sözcüğünü ve eşzamansız fonksiyonlara yapılan çağrılardan önce [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) anahtar sözcüğünü eklememiz gerektiğini söyleyeceğiz.

Tüm bunlardan sonra `superHeroes` değişkeni JSON'a dayalı JavaScript nesnesini içerecektir. Ardından bu nesneyi iki fonksiyon çağrısına geçiriyoruz — ilki `<header>` öğesini doğru verilerle doldururken, ikincisi takımdaki her kahraman için bir bilgi kartı oluşturur ve bunu `<section>` içine ekler.

#### Üstbilgiyi (header) doldurmak

Artık JSON verilerini aldığımıza ve bir JavaScript nesnesine dönüştürdüğümüze göre, yukarıda başvurduğumuz iki fonksiyonu yazarak ondan yararlanalım. Her şeyden önce, önceki kodun altına aşağıdaki fonksiyon tanımını ekleyin:

```js
function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}
```

Burada önce [`createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) ile bir [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) öğesi oluştururuz, [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) özelliğini nesnenin `squadName` özelliğine eşit olacak şekilde ayarlarız, ardından [`appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) kullanarak onu üstbilgiye (header) ekleriz. Ardından bir paragrafla çok benzer bir işlem yaparız: onu oluşturur, metin içeriğini ayarlar ve üstbilgiye ekleriz. Tek fark, metninin nesnenin hem `homeTown` hem de `formed` özelliklerini içeren bir [şablon değişmezine (template literal)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) ayarlanmasıdır.

#### Kahraman bilgi kartlarını oluşturmak

Ardından, süper kahraman kartlarını oluşturan ve görüntüleyen aşağıdaki fonksiyonu kodun en altına ekleyin:

```js
function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
```

Başlangıç olarak, JavaScript nesnesinin `members` özelliğini yeni bir değişkende saklarız. Bu dizi, her kahraman için bilgileri içeren birden çok nesne barındırır.

Ardından, dizideki her nesne üzerinde yineleme (iterate) yapmak için bir [`for...of` döngüsü](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop) kullanırız. Her biri için şunları yaparız:

1. Birkaç yeni öğe oluştururuz: bir `<article>`, bir `<h2>`, üç `<p>` ve bir `<ul>`.
2. `<h2>` öğesini geçerli kahramanın `name` değerini içerecek şekilde ayarlarız.
3. Üç paragrafı kahramanın `secretIdentity`, `age` değerleriyle ve listedeki bilgileri tanıtmak üzere "Superpowers:" diyen bir satırla doldururuz.
4. `powers` özelliğini `superPowers` adlı başka bir yeni sabitte saklarız — bu, geçerli kahramanın süper güçlerini listeleyen bir dizi içerir.
5. Geçerli kahramanın süper güçleri üzerinde döngü kurmak için başka bir `for...of` döngüsü kullanırız — her biri için bir `<li>` öğesi oluşturur, süper gücü içine koyar, ardından `appendChild()` kullanarak `listItem` öğesini `<ul>` öğesinin (`myList`) içine koyarız.
6. Yaptığımız en son şey `<h2>`, `<p>`'ler ve `<ul>` öğelerini `<article>` (`myArticle`) içine eklemek, ardından `<article>` öğesini `<section>` içine eklemektir. Öğelerin eklendiği sıra önemlidir, çünkü HTML içinde görüntülenecekleri sıra budur.

> [!NOTE]
> Örneği çalıştırmakta sorun yaşıyorsanız [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) kaynak kodumuza başvurmayı deneyin ([canlı çalışırken](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html) de görün.)

> [!NOTE]
> JavaScript nesnesine erişmek için kullandığımız nokta/köşeli parantez gösterimini takip etmekte sorun yaşıyorsanız, [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) dosyasını başka bir sekmede veya metin düzenleyicinizde açık tutmak ve JavaScript kodumuza bakarken ona başvurmak yardımcı olabilir.
> Nokta ve köşeli parantez gösterimi hakkında daha fazla bilgi için [JavaScript nesne temelleri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics) makalemize de tekrar başvurmalısınız.

#### Üst düzey fonksiyonu çağırmak

Son olarak, üst düzey `populate()` fonksiyonumuzu çağırmamız gerekir:

```js
populate();
```

### Nesneler ve metin arasında dönüştürme

Yukarıdaki örnek, `response.json()` kullanarak ağ yanıtını doğrudan bir JavaScript nesnesine dönüştürdüğümüz için JavaScript nesnesine erişmek açısından basitti.

Ancak bazen o kadar şanslı olmayız — bazen ham bir JSON dizesi alırız ve onu kendimiz bir nesneye dönüştürmemiz gerekir. Ve ağ üzerinden bir JavaScript nesnesi göndermek istediğimizde, göndermeden önce onu JSON'a (bir dizeye) dönüştürmemiz gerekir. Neyse ki bu iki sorun web geliştirmede o kadar yaygındır ki tarayıcılarda aşağıdaki iki metodu içeren yerleşik bir [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) nesnesi mevcuttur:

- [`parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Parametre olarak bir JSON dizesi kabul eder ve karşılık gelen JavaScript nesnesini döndürür.
- [`stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Parametre olarak bir nesne kabul eder ve eşdeğer JSON dizesini döndürür.

İlkini [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) örneğimizde iş başında görebilirsiniz ([kaynak koduna](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html) bakın) — bu, şu farklar dışında daha önce oluşturduğumuz örnekle tamamen aynı şeyi yapar:

- yanıtın [`text()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/text) metodunu çağırarak yanıtı JSON yerine metin olarak alırız
- ardından metni bir JavaScript nesnesine dönüştürmek için `parse()` kullanırız.

Anahtar kod parçacığı buradadır:

```js
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();

  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
```

Tahmin edebileceğiniz gibi `stringify()` tam tersi şekilde çalışır. İş başında görmek için aşağıdaki satırları tarayıcınızın JavaScript konsoluna tek tek girmeyi deneyin:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Burada bir JavaScript nesnesi oluşturuyor, ne içerdiğini kontrol ediyor, `stringify()` kullanarak onu bir JSON dizesine dönüştürüyor — dönüş değerini yeni bir değişkende kaydediyor — ve ardından tekrar kontrol ediyoruz.

### Özet

Bu derste, JSON'ı nasıl oluşturacağınız ve ayrıştıracağınız ve içinde kilitli olan verilere nasıl erişeceğiniz de dahil olmak üzere programlarınızda JSON kullanmayı size tanıttık. Bir sonraki makalede, tüm bu bilgileri ne kadar iyi anladığınızı ve aklınızda tuttuğunuzu kontrol etmek için kullanabileceğiniz bazı testler vereceğiz.

### Ayrıca bakınız

- [JSON başvurusu (JSON reference)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Fetch API'sine genel bakış (Fetch API overview)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Fetch Kullanımı (Using Fetch)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP istek metotları (HTTP request methods)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)

---

## 31. Becerilerinizi Test Edin: JSON (Test your skills: JSON)

**Kaynak:** [Test your skills: JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/JSON)

Bu beceri testinin amacı, [JSON ile çalışmak](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON) makalemizi anlayıp anlamadığınızı değerlendirmenize yardımcı olmaktır.

> [!NOTE]
> Yardım almak için [Becerilerinizi test edin](https://developer.mozilla.org/en-US/docs/Learn_web_development#test_your_skills) kullanım kılavuzumuzu okuyun. Ayrıca [iletişim kanallarımızdan](https://developer.mozilla.org/en-US/docs/MDN/Community/Communication_channels) birini kullanarak da bize ulaşabilirsiniz.

### JSON 1

Bu makaledeki tek görev, JSON verilerine erişmek ve bunları sayfanızda kullanmakla ilgilidir. Bazı anne kediler ve yavruları hakkındaki JSON verileri [sample.json](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json) dosyasında mevcuttur. JSON, sayfaya bir metin dizesi olarak yüklenir ve `displayCatInfo()` fonksiyonunun `catString` parametresinde kullanılabilir hale getirilir.

Görevi tamamlamak için, `displayCatInfo()` fonksiyonunun eksik kısımlarını doldurarak şunları saklayın:

- Virgüllerle ayrılmış olarak üç anne kedinin adlarını `motherInfo` değişkeninde.
- Toplam yavru kedi sayısını ve kaç tanesinin erkek ve dişi olduğunu `kittenInfo` değişkeninde.

Bu değişkenlerin değerleri daha sonra paragrafların içinde ekrana yazdırılır.

Bazı ipuçları/sorular:

- JSON verileri `displayCatInfo()` fonksiyonunun içinde metin olarak sağlanır. İçinden herhangi bir veri alabilmeniz için önce onu JSON'a ayrıştırmanız (parse) gerekecektir.
- Muhtemelen kediler üzerinde döngü kurmak ve adlarını `motherInfo` değişken dizesine eklemek için bir dış döngü; tüm yavru kediler üzerinde döngü kurmak, tüm/erkek/dişi yavru kedilerin toplamını hesaplamak ve bu ayrıntıları `kittenInfo` değişken dizesine eklemek için de bir iç döngü kullanmak isteyeceksiniz.
- Son anne kedi adının önünde bir "and" ve sonunda bir nokta olmalıdır. JSON'da kaç kedi olursa olsun bunun çalışacağından nasıl emin olursunuz?
- `para1.textContent = motherInfo;` ve `para2.textContent = kittenInfo;` satırları neden betiğin sonunda değil de `displayCatInfo()` fonksiyonunun içindedir? Bunun eşzamansız (async) kodla bir ilgisi vardır.

Görevin başlangıç noktası şu şekilde görünür:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

Bu başlangıç noktasının arka planındaki kod şöyledir:

```html
<p class="one"></p>
<p class="two"></p>
```

```css
p {
  color: purple;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}
```

```js
const para1 = document.querySelector(".one");
const para2 = document.querySelector(".two");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

// Don't edit the code above here!

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here

  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}
```

Güncellenmiş çıktı şu şekilde görünmelidir:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodunuz şuna benzer görünmelidir:

```js
// ...
// Don't edit the code above here!

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  const cats = JSON.parse(catString);

  for (let i = 0; i < cats.length; i++) {
    for (const kitten of cats[i].kittens) {
      total++;
      if (kitten.gender === "m") {
        male++;
      }
    }

    if (i < cats.length - 1) {
      motherInfo += `${cats[i].name}, `;
    } else {
      motherInfo += `and ${cats[i].name}.`;
    }
  }

  kittenInfo = `There are ${total} kittens in total, ${male} males and ${
    total - male
  } females.`;

  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}
```

```js
const para1 = document.querySelector(".one");
const para2 = document.querySelector(".two");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  const cats = JSON.parse(catString);

  for (let i = 0; i < cats.length; i++) {
    for (const kitten of cats[i].kittens) {
      total++;
      if (kitten.gender === "m") {
        male++;
      }
    }

    if (i < cats.length - 1) {
      motherInfo += `${cats[i].name}, `;
    } else {
      motherInfo += `and ${cats[i].name}.`;
    }
  }

  kittenInfo = `There are ${total} kittens in total, ${male} males and ${
    total - male
  } females.`;

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}
```

</details>

---

## 32. Görev: Ev Verileri Kullanıcı Arayüzü Oluşturmak (Challenge: Building a house data UI)

**Kaynak:** [Challenge: Building a house data UI](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/House_data_UI)

Bu görevde (challenge), bir emlak web sitesindeki ev arama/filtreleme sayfası için biraz JavaScript yazmanızı sağlayacağız. Bu; JSON verilerini getirmeyi (fetching), sağlanan form kontrollerine girilen değerlere göre bu verileri filtrelemeyi ve bu verileri kullanıcı arayüzünde (UI) işlemeyi (rendering) içerecektir. Bu süreçte koşullu ifadeler, döngüler, diziler ve dizi metotları ve daha fazlası konusundaki bilgilerinizi de test edeceğiz.

### Başlangıç noktası

Başlamak için aşağıdaki kod panellerinden birindeki **Play** ("Çalıştır") düğmesine tıklayarak sağlanan örneği MDN Playground'da açın. Ardından JavaScript işlevselliğini tamamlamak için [Proje özeti](#proje-özeti) bölümündeki talimatları izleyeceksiniz.

```html
<h1>House search</h1>
<p>
  Search for houses for sale. You can filter your search by street, number of
  bedrooms, and number of bathrooms, or just submit the search with no filters
  to display all available properties.
</p>
<form>
  <div>
    <label for="choose-street">Street:</label>
    <select id="choose-street" name="choose-street">
      <option value="">No street selected</option>
    </select>
  </div>
  <div>
    <label for="choose-bedrooms">Number of bedrooms:</label>
    <select id="choose-bedrooms" name="choose-bedrooms">
      <option value="">Any number of bedrooms</option>
    </select>
  </div>
  <div>
    <label for="choose-bathrooms">Number of bathrooms:</label>
    <select id="choose-bathrooms" name="choose-bathrooms">
      <option value="">Any number of bathrooms</option>
    </select>
  </div>
  <div>
    <button>Search for houses</button>
  </div>
</form>
<p id="result-count">Results returned: 0</p>
<section id="output"></section>
```

```css
body {
  font: 1.1em / 1.5 system-ui;
  width: clamp(480px, 90%, 1200px);
  margin: 0 auto;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.3em;
}

form div {
  display: flex;
  width: 100%;
  max-width: 500px;
  align-items: center;
  margin-bottom: 20px;
}

label[for],
select {
  flex: 1;
}

#output {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 50px;
}

#output article {
  padding: 0 20px;
  background-color: #efefef;
  border: 2px solid #cccccc;
  border-radius: 10px;
}

#output ul {
  list-style-type: none;
  padding-left: 0;
}
```

```js-nolint
const streetSelect = document.getElementById("choose-street");
const bedroomSelect = document.getElementById("choose-bedrooms");
const bathroomSelect = document.getElementById("choose-bathrooms");
const form = document.querySelector("form");

const resultCount = document.getElementById("result-count");
const output = document.getElementById("output");

let houses;

function initializeForm() {

}

function renderHouses(e) {
  // Stop the form submitting
  e.preventDefault();

  // Add rest of code here
}

// Add a submit listener to the <form> element
form.addEventListener("submit", renderHouses);

// Call fetchHouseData() to initialize the app
fetchHouseData();
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

### Proje özeti

Size kullanıcının sokağa, yatak odası sayısına ve banyo sayısına göre ev aramasına olanak tanıyan bir form, artı arama sonuçlarını içerecek birkaç öğe barındıran bir HTML index sayfası sağlandı. Ayrıca bazı sabit ve değişken tanımları ile birkaç iskelet fonksiyon tanımı içeren bir JavaScript dosyası da sağlandı. Göreviniz, ev arama arayüzünün çalışmasını sağlamak için eksik JavaScript kodunu doldurmaktır.

Sağlanan sabit ve değişken tanımları aşağıdaki başvuruları tutar:

- `streetSelect`: "choose-street" `<select>` öğesi.
- `bedroomSelect`: "choose-bedrooms" `<select>` öğesi.
- `bathroomSelect`: "choose-bathrooms" `<select>` öğesi.
- `form`: `<select>` öğelerini içeren genel `<form>` öğesi.
- `resultCount`: Her aramadan sonra döndürülen sonuçların sayısını görüntülemek üzere güncellenen "result-count" `<p>` öğesi.
- `output`: Arama sonuçlarını görüntüleyen "output" `<section>` öğesi.
- `houses`: Başlangıçta boştur, ancak getirilen JSON verilerinin ayrıştırılmasıyla oluşturulan ev verileri nesnesini içerecektir.

İskelet fonksiyonlar şunlardır:

- `initializeForm()`: Bu fonksiyon verileri sorgulayacak ve `<select>` öğelerini aranabilecek olası değerlerle dolduracaktır.
- `renderHouses()`: Bu fonksiyon `<select>` öğesi değerlerine göre verileri filtreleyecek ve sonuçları işleyecektir (render).

#### Verileri getirmek

Yapmanız gereken ilk şey, ev verilerini getirmek ve bunları `houses` değişkeninde saklamak için yeni bir fonksiyon oluşturmaktır.

Bunu yapmak için:

1. Değişken ve sabit tanımlarının hemen altına `fetchHouseData()` adlı yeni bir fonksiyon oluşturun.
2. Fonksiyonun gövdesinin içinde, [https://mdn.github.io/shared-assets/misc/houses.json](https://mdn.github.io/shared-assets/misc/houses.json) adresinde bulunan JSON'ı getirmek için `fetch()` metodunu kullanın. Daha sonraki adımlardan bazılarına hazırlık olarak bu verilerin yapısını incelemelisiniz.
3. Ortaya çıkan söz (promise) çözümlendiğinde, yanıtın `ok` özelliğini kontrol edin. Eğer `false` ise, yanıtın `status` değerini bildiren özel bir hata fırlatın (`throw`).
4. Yanıtın sorunsuz (`ok`) olması koşuluyla, `json()` metodunu kullanarak yanıtı JSON olarak döndürün.
5. Ortaya çıkan söz çözümlendiğinde, `houses` değişkenini `json()` metodunun sonucuna (bu, ev verilerini içeren bir nesneler dizisi olmalıdır) eşit olacak şekilde ayarlayın ve `initializeForm()` fonksiyonunu çağırın.

#### `initializeForm()` fonksiyonunu tamamlamak

Şimdi `initializeForm()` fonksiyonunun içeriğini yazmanız gerekiyor. Bu fonksiyon, `houses` içinde saklanan verileri sorgulayacak ve bunları, filtrelenebilecek tüm farklı değerleri temsil eden `<option>` öğeleriyle `<select>` öğelerini doldurmak için kullanacaktır. Şu anda `<select>` öğeleri yalnızca tüm değerleri temsil eden `""` (boş bir dize) değerine sahip tek bir `<option>` öğesi içermektedir. Kullanıcı, sonuçların o alana göre filtrelenmesini istemiyorsa bu seçeneği seçebilir.

Fonksiyon gövdesinin içine aşağıdakileri yapan kodu yazın:

1. "choose-street" `<select>` öğesinin içinde tüm farklı sokak adları için `<option>` öğeleri oluşturun. Bunu yapmanın birkaç yolu vardır, ancak geçici bir dizi oluşturmanızı ve ardından `houses` içindeki tüm nesneler üzerinde döngü kurmanızı öneririz. Döngünün içinde, geçici dizinizin geçerli evin `street` özelliğini içerip içermediğini kontrol edin. İçermiyorsa onu geçici diziye ekleyin ve "choose-street" `<select>` öğesine değeri olarak `street` özelliğini içeren bir `<option>` ekleyin.
2. "choose-bedrooms" `<select>` öğesinin içinde olası tüm yatak odası sayısı değerleri için seçenekler oluşturun. Bunu yapmak için `houses` dizisi üzerinde döngü kurabilir ve en büyük `bedrooms` değerinin ne olduğunu belirleyebilir, ardından `1`'den o en büyük değere kadar her sayı için "choose-bedrooms" `<select>` öğesine bir `<option>` ekleyen ikinci bir döngü yazabilirsiniz.
3. "choose-bathrooms" `<select>` öğesinin içinde olası tüm banyo sayısı değerleri için seçenekler oluşturun. Bu, önceki adımdakiyle aynı teknik kullanılarak çözülebilir.

> [!NOTE]
> `<option>` öğelerini HTML'in içine doğrudan sabit olarak kodlayabilirdiniz (hardcode), ancak bu yalnızca bu tam veri kümesi için çalışırdı. Sağlanan veri değerlerinden bağımsız olarak formu doğru şekilde dolduracak JavaScript kodu yazmanızı istiyoruz (her ev nesnesinin aynı yapıya sahip olması gerekir).

> [!NOTE]
> HTML öğelerinin içine alt içerik eklemek için `innerHTML` özelliğini kullanabilirdiniz, ancak bunu yapmamanızı öneririz. Sayfanıza eklediğiniz verilere her zaman güvenemezsiniz: Sunucuda düzgün bir şekilde temizlenmemişse (sanitized), kötü niyetli kişiler sayfanızda [Siteler arası betik çalıştırma (Cross-site scripting — XSS)](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS) saldırıları gerçekleştirmek için `innerHTML` özelliğini bir yol olarak kullanabilir. Daha güvenli bir yol `createElement()`, `appendChild()` ve `textContent` gibi DOM betik yazımı özelliklerini kullanmaktır. Alt içeriği kaldırmak için `innerHTML` kullanmak o kadar büyük bir sorun değildir.

#### `renderHouses()` fonksiyonunu tamamlamak

Ardından, `renderHouses()` fonksiyon gövdesini tamamlamanız gerekir. Bu fonksiyon `<select>` öğesi değerlerine göre verileri filtreleyecek ve sonuçları kullanıcı arayüzünde işleyecektir.

1. İlk olarak verileri filtrelemeniz gerekir. Bu muhtemelen en iyi şekilde, yalnızca filtre ölçütleriyle eşleşen dizi öğelerini içeren yeni bir dizi döndüren dizi `filter()` metodu kullanılarak başarılır.
   1. Bu, yazması oldukça karmaşık bir `filter()` fonksiyonudur. Evin `street` özelliğinin "choose-street" `<select>` öğesinin seçilen değerine eşit olup olmadığını, evin `bedrooms` özelliğinin "choose-bedrooms" `<select>` öğesinin seçilen değerine eşit olup olmadığını ve evin `bathrooms` özelliğinin "choose-bathrooms" `<select>` öğesinin seçilen değerine eşit olup olmadığını test etmeniz gerekir.
   2. İlişkili `<select>` değeri `""` (tüm değerleri temsil eden boş dize) ise testin her bileşeninin her zaman `true` döndürmesi gerekir. Bunu her kontrolü "kısa devre yaptırarak" ("short-circuiting") başarabilirsiniz.
   3. Ayrıca her kontrolde veri türlerinin eşleştiğinden de emin olmanız gerekir. Bir form öğesinin değeri her zaman bir dizedir. Nesne özelliği değerleriniz için durum mutlaka böyle değildir. Testin amaçları doğrultusunda veri türlerinin eşleşmesini nasıl sağlayabilirsiniz?
2. Filtrelenen arama sonuçlarının sayısını "Results returned: sayı" dize yapısını kullanarak "result-count" `<p>` öğesine çıktı olarak verin.
3. Hiçbir alt HTML öğesine sahip olmaması için "output" `<section>` öğesini boşaltın. Bunu yapmazsanız, her arama yapıldığında sonuçlar önceki sonuçların yerini almak yerine onların sonuna eklenecektir.
4. `renderHouses()` içinde `renderHouse()` adlı yeni bir fonksiyon oluşturun. Bu fonksiyonun argüman olarak bir ev nesnesi alması ve iki şey yapması gerekir:
   1. Evin `room_sizes` nesnesinin içinde yer alan odaların toplam alanını hesaplamak. Bu, bir sayılar dizisi üzerinde döngü kurup onları toplamak kadar basit değildir, ancak çok da zor değildir.
   2. "output" `<section>` öğesinin içine evin numarasını, sokak adını, yatak odası ve banyo sayısını, toplam oda alanını ve fiyatını içeren bir `<article>` öğesi eklemek. İsterseniz yapıyı değiştirebilirsiniz, ancak şu HTML parçacığına benzer olmasını istiyoruz:
   ```html
   <article>
     <h2>number street name</h2>
     <ul>
       <li>🛏️ Bedrooms: number</li>
       <li>🛀 Bathrooms: number</li>
       <li>Room area: number m²</li>
       <li>Price: £price</li>
     </ul>
   </article>
   ```
5. Filtrelenen dizinin içindeki tüm evler üzerinde döngü kurun ve her birini bir `renderHouse()` çağrısına geçirin.

### İpuçları ve püf noktaları

- HTML veya CSS'i hiçbir şekilde değiştirmenize gerek yoktur.
- Bir değerler dizisindeki en büyük değeri bulmak gibi işler yapmak için `reduce()` dizi fonksiyonu gerçekten çok kullanışlıdır. Oldukça karmaşık olduğu için bu kursta onu öğretmedik, ancak kavradığınızda gerçekten çok güçlüdür. Sınırları zorlayan bir hedef olarak onu araştırmayı ve yanıtınızda kullanmayı deneyin.

### Örnek

Tamamlanmış uygulamanız aşağıdaki canlı örnek gibi çalışmalıdır:

> *(MDN sayfasında bu noktada örneğin canlı çıktısı gösterilir.)*

<details>
<summary>Çözümü görmek için buraya tıklayın</summary>

Tamamlanmış JavaScript kodu şuna benzer görünmelidir:

```js
const streetSelect = document.getElementById("choose-street");
const bedroomSelect = document.getElementById("choose-bedrooms");
const bathroomSelect = document.getElementById("choose-bathrooms");
const form = document.querySelector("form");
const resultCount = document.getElementById("result-count");
const output = document.getElementById("output");

let houses;

// Solution: Fetching the data

function fetchHouseData() {
  fetch("https://mdn.github.io/shared-assets/misc/houses.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      return response.json();
    })
    .then((json) => {
      houses = json;
      initializeForm();
    });
}

// Solution: Completing the initializeForm() function

function initializeForm() {
  // Create options for all the different street names
  const streetArray = [];
  for (let house of houses) {
    if (!streetArray.includes(house.street)) {
      streetArray.push(house.street);
      streetSelect.appendChild(document.createElement("option")).textContent =
        house.street;
    }
  }

  // Create options for all the possible bedroom values
  const largestBedrooms = houses.reduce(
    (largest, house) => (house.bedrooms > largest ? house.bedrooms : largest),
    houses[0].bedrooms,
  );
  let i = 1;
  while (i <= largestBedrooms) {
    bedroomSelect.appendChild(document.createElement("option")).textContent = i;
    i++;
  }

  // Create options for all the possible bathroom values
  const largestBathrooms = houses.reduce(
    (largest, house) => (house.bathrooms > largest ? house.bathrooms : largest),
    houses[0].bathrooms,
  );
  let j = 1;
  while (j <= largestBathrooms) {
    bathroomSelect.appendChild(document.createElement("option")).textContent =
      j;
    j++;
  }
}

// Solution: Completing the renderHouses() function

function renderHouses(e) {
  // Stop the form submitting
  e.preventDefault();

  // Filter the data
  const filteredHouses = houses.filter((house) => {
    // prettier-ignore
    const test = (streetSelect.value === "" ||
                  house.street === streetSelect.value) &&
                 (bedroomSelect.value === "" ||
                  String(house.bedrooms) === bedroomSelect.value) &&
                 (bathroomSelect.value === "" ||
                  String(house.bathrooms) === bathroomSelect.value);
    return test;
  });

  // Output the result count to the "result-count" paragraph
  resultCount.textContent = `Results returned: ${filteredHouses.length}`;

  // Empty the output element
  output.innerHTML = "";

  // Create renderHouse() function
  function renderHouse(house) {
    // Calculate total room size
    let totalArea = 0;
    const keys = Object.keys(house.room_sizes);
    for (let key of keys) {
      totalArea += house.room_sizes[key];
    }

    // Output house to UI
    const articleElem = document.createElement("article");
    articleElem.appendChild(document.createElement("h2")).textContent =
      `${house.house_number} ${house.street}`;
    const listElem = document.createElement("ul");
    listElem.appendChild(document.createElement("li")).textContent =
      `🛏️ Bedrooms: ${house.bedrooms}`;
    listElem.appendChild(document.createElement("li")).textContent =
      `🛀 Bathrooms: ${house.bathrooms}`;
    listElem.appendChild(document.createElement("li")).textContent =
      `Room area: ${totalArea}m²`;
    listElem.appendChild(document.createElement("li")).textContent =
      `Price: £${house.price}`;
    articleElem.appendChild(listElem);
    output.appendChild(articleElem);
  }

  // Pass each house in the filtered array into renderHouse()
  for (let house of filteredHouses) {
    renderHouse(house);
  }
}

// Add a submit listener to the <form> element
form.addEventListener("submit", renderHouses);

// Call fetchHouseData() to initialize the app
fetchHouseData();
```

</details>

---

## 33. JavaScript Hata Ayıklama ve Hata İşleme (JavaScript debugging and error handling)

**Kaynak:** [JavaScript debugging and error handling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript)

Bu derste, JavaScript'te hata ayıklama (debugging) konusuna geri döneceğiz (bu konuya ilk olarak [Ne ters gitti?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong) makalesinde bakmıştık). Burada hataların izini sürme tekniklerini daha derinlemesine inceleyecek ve sorunları daha en başta önleyerek nasıl savunmacı kod yazılacağını (defensive coding) ve kodunuzdaki hataların nasıl işleneceğini (error handling) açıklayacağız.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS'in temelleri</a> hakkında anlayış, önceki derslerde ele alındığı şekliyle JavaScript temellerine aşinalık.</td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Sayfanızda çalışan JavaScript'i incelemek ve ne gibi hatalar ürettiğini görmek için tarayıcı geliştirici araçlarını kullanmak.</li>
          <li>Hata ayıklama için <code>console.log()</code> ve <code>console.error()</code> kullanmak.</li>
          <li>Tarayıcı geliştirici araçlarıyla ileri düzey JavaScript hata ayıklama.</li>
          <li>Koşullu ifadeler (<code>conditionals</code>), <code>try...catch</code> ve <code>throw</code> ile hata işleme.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### JavaScript hata türlerinin özeti

Modülün önceki kısımlarında, [Ne ters gitti?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong) makalesinde, JavaScript programlarında meydana gelebilecek hata türlerine genel olarak baktık ve bunların kabaca iki türe — sözdizimi hataları (syntax errors) ve mantık hataları (logic errors) — ayrılabileceğini söyledik. Ayrıca bazı yaygın JavaScript hata mesajı türlerini anlamlandırmanıza yardımcı olduk ve [`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/console/log_static) deyimlerini kullanarak nasıl basit hata ayıklama yapılacağını gösterdik.

Bu makalede, hataların izini sürmek için mevcut olan araçlara daha derinlemesine bakacak ve ayrıca hataları daha en başta önlemenin yollarını inceleyeceğiz.

### Kodunuzda lint denetimi yapmak

Belirli hataların izini sürmeye çalışmadan önce ilk olarak kodunuzu doğrulamalısınız. Kodunuzun geçerli olduğundan emin olmak için W3C'nin [İşaretleme doğrulama hizmetinden (Markup validation service)](https://validator.w3.org/), [CSS doğrulama hizmetinden (CSS validation service)](https://jigsaw.w3.org/css-validator/) ve [ESLint](https://eslint.org/play/) gibi bir JavaScript lint aracından (linter) yararlanın. Bu işlem muhtemelen bazı hataları ortaya çıkaracaktır; siz de bunları düzelterek kalan hatalara yoğunlaşabilirsiniz.

#### Kod düzenleyici eklentileri

Geçerliliğini kontrol etmek için kodunuzu tekrar tekrar bir web sayfasına kopyalayıp yapıştırmak zorunda kalmak pek kullanışlı değildir. Kodunuzu yazarken hataları bildirmesi için kod düzenleyicinize bir linter eklentisi (plugin) kurmanızı öneririz. Kod düzenleyicinizin eklentiler (plugins veya extensions) listesinde ESLint'i aramayı ve kurmayı deneyin.

### Yaygın JavaScript sorunları

Dikkat etmek isteyeceğiniz birkaç yaygın JavaScript sorunu vardır, örneğin:

- Temel sözdizimi ve mantık sorunları (yine, [JavaScript Sorunlarını Giderme](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong) makalesine göz atın).
- Değişkenlerin vb. doğru kapsamda (scope) tanımlandığından ve farklı yerlerde bildirilen öğeler arasında çakışmalarla karşılaşmadığınızdan emin olmak (bkz. [Fonksiyon kapsamı ve çakışmalar](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) anahtar sözcüğü hakkında, hangi kapsama uygulandığı ve dolayısıyla değerinin amaçladığınız şey olup olmadığı açısından kafa karışıklığı. Hafif bir giriş için ["this" nedir?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) bölümünü okuyabilirsiniz; ayrıca bir `this` kapsamını ayrı bir değişkende kaydetmenin ve ardından işlevselliği doğru `this` kapsamına uyguladığınızdan emin olabilmeniz için iç içe fonksiyonlarda o değişkeni kullanmanın tipik bir kalıbını gösteren [şu örnek](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) gibi örnekleri de incelemelisiniz.
- Küresel bir değişkenle yineleme yapan döngülerin içinde fonksiyonları yanlış kullanmak (daha genel olarak, "kapsamı yanlış anlamak").

> [!NOTE]
> Örneğin, [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) dosyasında ([kaynak koduna](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) bakın), `var` ile tanımlanmış bir değişken kullanarak 10 yineleme üzerinden döngü kuruyoruz ve her seferinde bir paragraf oluşturup ona bir [onclick](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) olay işleyicisi ekliyoruz. Tıklandığında her birinin kendi numarasını (oluşturulduğu zamanki `i` değerini) içeren bir uyarı (alert) mesajı görüntülemesini istiyoruz. Bunun yerine hepsi `i` değerini 11 olarak bildirir — çünkü `for` döngüsü tüm yinelemesini iç içe fonksiyonlar çağrılmadan önce tamamlar.
>
> En kolay çözüm, yineleme değişkenini `var` yerine `let` ile bildirmektir — o zaman fonksiyonla ilişkili `i` değeri her yinelemeye özgü olur. Çalışan bir sürüm için [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) sayfasına ([kaynak koduna](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html) da bakın) göz atın.

- Döndürdükleri değerleri kullanmaya çalışmadan önce [eşzamansız işlemlerin (asynchronous operations)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS) tamamlandığından emin olmak. Bu genellikle _sözlerin (promises)_ nasıl kullanılacağını anlamak anlamına gelir: [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) anahtar sözcüğünü uygun şekilde kullanmak ya da eşzamansız bir çağrının sonucunu işleyecek kodu sözün [`then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) işleyicisinde çalıştırmak. Bu konuya bir giriş için [Sözler (promises) nasıl kullanılır](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises) makalesine bakın.

> [!NOTE]
> [Hatalı JavaScript Kodu: JavaScript Geliştiricilerinin Yaptığı En Yaygın 10 Hata (Buggy JavaScript Code: The 10 Most Common Mistakes JavaScript Developers Make)](https://www.toptal.com/developers/javascript/10-most-common-javascript-mistakes) makalesinde bu yaygın hatalar ve daha fazlası hakkında güzel tartışmalar bulunmaktadır.

### Tarayıcı JavaScript konsolu

Tarayıcı geliştirici araçları, JavaScript'te hata ayıklamak için pek çok yararlı özelliğe sahiptir. Başlangıç olarak, JavaScript konsolu kodunuzdaki hataları bildirecektir.

[fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/) örneğimizin yerel bir kopyasını oluşturun ([kaynak koduna](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken) da bakın).

Konsola bakarsanız bir hata mesajı görürsünüz. Tam ifadeler tarayıcıya bağlıdır, ancak "Uncaught TypeError: heroes is not iterable" benzeri bir şey olacaktır ve başvurulan satır numarası 25'tir. Kaynak koduna bakarsak ilgili kod bölümü şudur:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // …
  }
}
```

Yani kod, (tahmin edebileceğiniz gibi bir [JSON nesnesi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON) olması gereken) `jsonObj` parametresini kullanmaya çalıştığımız anda çöker. Bunun aşağıdaki [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch) çağrısı kullanılarak harici bir `.json` dosyasından getirilmesi gerekmektedir:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Ancak bu başarısız olur.

### Console API'si

Bu kodda neyin yanlış olduğunu zaten biliyor olabilirsiniz, ancak bunu nasıl araştırabileceğinize bakalım. JavaScript kodunun tarayıcının JavaScript konsoluyla etkileşime girmesine olanak tanıyan [Console](https://developer.mozilla.org/en-US/docs/Web/API/console) API'si ile başlayacağız. Kullanılabilir birkaç özelliği vardır; konsola özel bir mesaj yazdıran [`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/console/log_static) ile zaten karşılaştınız.

`fetch()` çağrısının dönüş değerini yazdırmak için şu şekilde bir `console.log()` çağrısı eklemeyi deneyin:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
populateHeader(response);
showHeroes(response);
```

Tarayıcıda sayfayı yenileyin. Bu kez hata mesajından önce konsola yazdırılan yeni bir mesaj göreceksiniz:

```plain
Response value: [object Promise]
```

`console.log()` çıktısı, `fetch()` çağrısının dönüş değerinin JSON verileri değil, bir [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) olduğunu gösterir. `fetch()` fonksiyonu eşzamansızdır: yalnızca ağdan gerçek yanıt alındığında yerine getirilen (fulfilled) bir `Promise` döndürür. Yanıtı kullanabilmemiz için önce `Promise` nesnesinin yerine getirilmesini beklememiz gerekir.

#### `console.error()` ve çağrı yığınları (call stacks)

Kısa bir ara bilgi olarak, hatayı bildirmek için farklı bir konsol metodu — [`console.error()`](https://developer.mozilla.org/en-US/docs/Web/API/console/error_static) — kullanmayı deneyelim. Kodunuzda şu satırı:

```js
console.log(`Response value: ${response}`);
```

şununla değiştirin:

```js
console.error(`Response value: ${response}`);
```

Kodunuzu kaydedin ve tarayıcıyı yenileyin; artık mesajın altındaki yakalanmamış (uncaught) hatayla aynı renk ve simgeyle bir hata olarak bildirildiğini göreceksiniz. Buna ek olarak, mesajın yanında bir genişletme/daraltma oku göreceksiniz. Buna basarsanız, JavaScript dosyasında hatanın kaynaklandığı satırı belirten tek bir satır görürsünüz. Aslında yakalanmamış hata satırında _da_ bu vardır, ancak iki satırı vardır:

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

Bu, daha önce belirttiğimiz gibi hatanın 25. satırdaki `showHeroes()` fonksiyonundan kaynaklandığı anlamına gelir. Kodunuza bakarsanız 10. satırdaki isimsiz çağrının `showHeroes()` fonksiyonunu çağırdığını görürsünüz. Bu satırlar **çağrı yığını (call stack)** olarak adlandırılır ve kodunuzdaki birkaç farklı konumu içeren bir hatanın kaynağının izini sürmeye çalışırken gerçekten çok yararlı olabilir.

`console.error()` çağrısı bu durumda özellikle yararlı değildir, ancak halihazırda mevcut değilse bir çağrı yığını oluşturmak için yararlı olabilir.

#### Hatayı düzeltmek

Her neyse, hatamızı düzeltmeye çalışmaya geri dönelim. `fetch()` çağrısının sonuna [`then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) metodunu zincirleyerek yerine getirilen `Promise` nesnesinden yanıta erişebiliriz. Ardından ortaya çıkan yanıt değerini onu kabul eden fonksiyonlara şu şekilde geçirebiliriz:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Kaydedin ve yenileyin ve kodunuzun çalışıp çalışmadığını görün. Sürprizi bozalım (spoiler alert) — yukarıdaki değişiklik sorunu çözmedi. Ne yazık ki **hâlâ aynı hataya sahibiz**!

> [!NOTE]
> Özetlemek gerekirse, bir şey çalışmadığı ve kodunuzun bir noktasında bir değer olması gereken şey gibi görünmediği her an, değeri yazdırmak ve neler olduğunu görmek için `console.log()`, `console.error()` veya benzer bir başka fonksiyonu kullanabilirsiniz.

### JavaScript hata ayıklayıcısını (debugger) kullanmak

Tarayıcı geliştirici araçlarının daha gelişmiş bir özelliğini kullanarak bu sorunu daha derinlemesine araştıralım: Firefox'taki adıyla [JavaScript hata ayıklayıcısı (JavaScript debugger)](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html).

> [!NOTE]
> Diğer tarayıcılarda da benzer araçlar mevcuttur; Chrome'da [Sources sekmesi](https://developer.chrome.com/docs/devtools/#sources), Safari'de Debugger (bkz. [Safari Web Geliştirme Araçları](https://developer.apple.com/safari/tools/)) vb.

Firefox'ta Debugger sekmesi şu şekilde görünür:

![Firefox hata ayıklayıcısı](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/debugging_javascript/debugger-tab.png)

- Solda, hatalarını ayıklamak istediğiniz betiği seçebilirsiniz (bu durumda yalnızca bir tanemiz var).
- Orta panel seçilen betikteki kodu gösterir.
- Sağ panel geçerli ortam hakkında yararlı ayrıntıları gösterir — _Kesme Noktaları (Breakpoints)_, _Çağrı Yığını (Callstack)_ ve o anda etkin olan _Kapsamlar (Scopes)_.

Bu tür araçların ana özelliği koda kesme noktaları (breakpoints) ekleme yeteneğidir — bunlar kodun yürütülmesinin durduğu noktalardır ve o noktada ortamı geçerli durumunda inceleyebilir ve neler olup bittiğini görebilirsiniz.

Kesme noktalarını kullanmayı keşfedelim:

1. Hata daha öncekiyle aynı satırda — aşağıdaki ekran görüntüsünde 26. satır olan `for (const hero of heroes) {` satırında — fırlatılmaktadır. Ona bir kesme noktası eklemek için orta panelde satır numarasına tıklayın (üzerinde mavi bir okun belirdiğini göreceksiniz).
2. Şimdi sayfayı yenileyin (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>) — tarayıcı o satırda kodun yürütülmesini duraklatacaktır. Bu noktada sağ taraf aşağıdakileri göstermek üzere güncellenecektir:

![Kesme noktasına sahip Firefox hata ayıklayıcısı](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/scripting/debugging_javascript/breakpoint.png)

- _Breakpoints_ altında, ayarladığınız kesme noktasının ayrıntılarını göreceksiniz.
- _Call Stack_ altında birkaç girdi göreceksiniz — bu temelde daha önce `console.error()` bölümünde baktığımız çağrı yığınıyla aynıdır. _Call Stack_, geçerli fonksiyonun çağrılmasına neden olmak üzere çağrılan fonksiyonların bir listesini gösterir. En üstte şu anda içinde bulunduğumuz fonksiyon olan `showHeroes()` ve ikinci olarak `showHeroes()` çağrısını içeren olay işleyici fonksiyonunu saklayan `onload` vardır.
- _Scopes_ altında, baktığımız fonksiyon için o anda etkin olan kapsamı göreceksiniz. Yalnızca üç tanemiz var — `showHeroes`, `block` ve `Window` (küresel kapsam). Yürütme durdurulduğunda kapsam içindeki değişkenlerin değerlerini göstermek için her kapsam genişletilebilir.

Burada çok yararlı bazı bilgiler öğrenebiliriz:

1. `showHeroes` kapsamını genişletin — buradan `heroes` değişkeninin `undefined` olduğunu görebilirsiniz; bu da `jsonObj` nesnesinin `members` özelliğine erişmenin (fonksiyonun ilk satırı) çalışmadığını gösterir.
2. Ayrıca `jsonObj` değişkeninin bir JSON nesnesi değil, bir [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) nesnesi sakladığını da görebilirsiniz.

`showHeroes()` fonksiyonuna verilen argüman, `fetch()` sözünün (promise) kendisiyle yerine getirildiği değerdir. Bu söz JSON biçiminde değildir: bir `Response` nesnesidir. Yanıtın içeriğini bir JSON nesnesi olarak almak için fazladan bir adım gereklidir.

Bu sorunu kendiniz düzeltmeyi denemenizi istiyoruz. Başlamanız için [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) nesnesinin belgelerine bakın. Takılırsanız düzeltilmiş kaynak kodunu <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed> adresinde bulabilirsiniz.

> [!NOTE]
> Debugger sekmesinin burada tartışılmayan başka pek çok yararlı özelliği vardır. Örneğin koşullu kesme noktaları (conditional breakpoints) ve izleme ifadeleri (watch expressions). Çok daha fazla bilgi için [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) sayfasına bakın.

### Kodunuzdaki JavaScript hatalarını işlemek

HTML ve CSS hoşgörülüdür (permissive) — dillerin doğası gereği hatalar ve tanınmayan özellikler çoğu zaman ele alınabilir. Örneğin CSS tanınmayan özellikleri yok sayar ve kodun geri kalanı çoğu zaman çalışmaya devam eder. Ancak JavaScript, HTML ve CSS kadar hoşgörülü değildir; JavaScript motoru hatalarla veya tanınmayan sözdizimiyle karşılaşırsa çoğu zaman hata fırlatır.

Kodunuzdaki JavaScript hatalarını işlemek için yaygın bir stratejiyi keşfedelim. Aşağıdaki bölümler, yerel makinenizde aşağıda gösterilen şablon dosyasının `handling-errors.html` olarak bir kopyasını oluşturup kod parçacıklarını açılış ve kapanış `<script>` ve `</script>` etiketleri arasına ekleyerek, ardından dosyayı bir tarayıcıda açıp geliştirici araçları JavaScript konsolundaki çıktıya bakarak takip edilmek üzere tasarlanmıştır.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Handling JS errors</title>
  </head>
  <body>
    <script>
      // Code goes below this line
    </script>
  </body>
</html>
```

#### Koşullu ifadeler

[JavaScript koşullu ifadelerinin](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals) yaygın bir kullanımı hataları işlemektir. Koşullu ifadeler bir değişkenin değerine bağlı olarak farklı kodlar çalıştırmanıza olanak tanır. Çoğu zaman, değer mevcut değilse veya yanlış türdeyse bir hata fırlatmaktan kaçınmak ya da değer daha sonra sorunlara yol açabilecek yanlış bir sonucun döndürülmesine neden olacaksa bir hatayı yakalamak için bunu savunmacı bir şekilde (defensively) kullanmak isteyeceksiniz.

Bir örneğe bakalım. Kullanıcının inç cinsinden boyunu argüman olarak alan ve metre cinsinden boyunu 2 ondalık basamağa kadar döndüren bir fonksiyonumuz olduğunu varsayalım. Bu şu şekilde görünebilir:

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. Örnek dosyanızın `<script>` öğesinde `height` adlı bir `const` bildirin ve ona `70` değerini atayın:

   ```js
   const height = 70;
   ```

2. Yukarıdaki fonksiyonu önceki satırın altına kopyalayın.

3. Argümanı olarak `height` sabitini geçirerek fonksiyonu çağırın ve dönüş değerini konsola yazdırın:

   ```js
   console.log(inchesToMeters(height));
   ```

4. Örneği bir tarayıcıda yükleyin ve geliştirici araçları JavaScript konsoluna bakın. Konsola `1.78` değerinin yazdırıldığını görmelisiniz.

5. Yani bu tek başına gayet iyi çalışır. Peki ya sağlanan veriler eksik veya yanlışsa ne olur? Şu senaryoları deneyin:
   - `height` değerini `"70"` olarak (yani bir dize olarak ifade edilen `70`) değiştirirseniz, örnek ... yine gayet iyi çalışmalıdır. Bunun nedeni ilk satırdaki hesaplamanın dize değerini bir sayı veri türüne zorlamasıdır (coerces). Bunun gibi basit bir durumda bu sorun değildir, ancak daha karmaşık kodlarda yanlış veriler bazıları ince ve tespit edilmesi zor olan her türlü hataya (bug) yol açabilir!
   - `height` değerini `"70 inches"` veya `["Bob", 70]` ya da [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) gibi bir sayıya zorlanamayacak bir değere değiştirirseniz, örnek sonucu `NaN` olarak döndürmelidir. Bu her türlü soruna neden olabilir; örneğin kullanıcının boyunu web sitesi kullanıcı arayüzünde bir yere dahil etmek istiyorsanız.
   - `height` değerini tamamen kaldırırsanız (satırın başına `//` ekleyerek yorum satırı yapın), konsol "Uncaught ReferenceError: height is not defined" benzeri bir hata gösterecektir ki bu tür hatalar uygulamanızın tamamen durmasına neden olabilir.

   Açıkçası bu sonuçların hiçbiri harika değildir. Kötü verilere karşı kendimizi nasıl savunuruz?

6. Hesaplamayı yapmaya çalışmadan önce verilerin iyi olup olmadığını test etmek için fonksiyonumuzun içine bir koşullu ifade ekleyelim. Mevcut fonksiyonunuzu aşağıdakiyle değiştirmeyi deneyin:

   ```js
   function inchesToMeters(num) {
     if (typeof num !== "number" || Number.isNaN(num)) {
       console.log("A number was not provided. Please correct the input.");
       return undefined;
     }
     const mVal = (num * 2.54) / 100;
     const m2dp = mVal.toFixed(2);
     return m2dp;
   }
   ```

7. Şimdi ilk iki senaryoyu tekrar denerseniz, sorunu çözmek için ne yapılması gerektiği hakkında size bir fikir vermek üzere biraz daha yararlı olan mesajımızın döndürüldüğünü göreceksiniz. Oraya `num` değerini düzeltmek için kod çalıştırmayı denemek de dahil olmak üzere istediğiniz her şeyi koyabilirsiniz, ancak bu önerilmez — bu fonksiyonun tek bir basit amacı vardır ve değeri düzeltmeyi sistemde başka bir yerde ele almalısınız.

   > [!NOTE]
   > `if()` deyiminde önce [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operatörünü kullanarak `num` veri türünün `"number"` olup olmadığını test ederiz, ardından [`Number.isNaN(num)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) çağrısının `false` döndürüp döndürmediğini test ederiz. `num` değerinin `NaN` olarak ayarlanması özel durumuna karşı savunma yapmak için bunu yapmak zorundayız, çünkü `typeof NaN` yine de `"number"` döndürür!

8. Ancak üçüncü senaryoyu tekrar denerseniz, yine yüzünüze fırlatılan "Uncaught ReferenceError: height is not defined" hatasını alırsınız. Bir değerin mevcut olmadığı gerçeğini, o değeri kullanmaya çalışan bir fonksiyonun içinden düzeltemezsiniz.

Bunu nasıl ele alırız? Doğru verileri almadığında fonksiyonumuzun özel bir hata döndürmesini sağlamak daha iyidir. Önce bunun nasıl yapılacağına bakacağız, ardından tüm hataları birlikte ele alacağız.

#### Özel hatalar fırlatmak

[`Error()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) yapıcısıyla (constructor) eşleştirilmiş [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) deyimini kullanarak kodunuzun herhangi bir noktasında özel bir hata fırlatabilirsiniz. Bunu iş başında görelim.

1. Fonksiyonunuzda, fonksiyonunuzun `if` bloğunun içindeki `console.log()` satırını aşağıdaki satırla değiştirin:

   ```js
   throw new Error("A number was not provided. Please correct the input.");
   ```

2. Örneğinizi tekrar çalıştırın, ancak `num` değerinin kötü (yani sayı olmayan) bir değere ayarlandığından emin olun. Bu kez, hatanın kaynağını bulmanıza yardımcı olacak yararlı bir çağrı yığınıyla birlikte özel hatanızın fırlatıldığını görmelisiniz (bununla birlikte mesajın bize hâlâ hatanın "yakalanmamış" ("uncaught") veya "işlenmemiş" ("unhandled") olduğunu söylediğine dikkat edin). Tamam, hatalar sinir bozucudur, ancak bu, fonksiyonu başarıyla çalıştırıp daha sonra sorunlara neden olabilecek sayı olmayan bir değer döndürmekten çok daha yararlıdır.

Peki o zaman tüm bu hataları nasıl işleriz?

#### try...catch

[`try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) deyimi hataları işlemek için özel olarak tasarlanmıştır. Aşağıdaki yapıya sahiptir:

```js
try {
  // Run some code
} catch (error) {
  // Handle any errors
}
```

`try` bloğunun içinde biraz kod çalıştırmayı denersiniz. Bu kod bir hata fırlatılmadan çalışırsa her şey yolundadır ve `catch` bloğu yok sayılır. Ancak bir hata fırlatılırsa `catch` bloğu çalıştırılır; bu blok hatayı temsil eden [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) nesnesine erişim sağlar ve onu işlemek için kod çalıştırmanıza olanak tanır.

Kodumuzda `try...catch` kullanalım.

1. Betiğinizin sonunda `inchesToMeters()` fonksiyonunu çağıran `console.log()` satırını aşağıdaki blokla değiştirin. Artık `console.log()` satırımızı bir `try` bloğunun içinde çalıştırıyor ve döndürdüğü tüm hataları karşılık gelen bir `catch` bloğunun içinde işliyoruz.

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("Insert code to handle the error");
   }
   ```

2. Kaydedin ve yenileyin; artık iki şey görmelisiniz:
   - Hata mesajı ve çağrı yığını daha önceki gibidir, ancak bu kez "uncaught" veya "unhandled" etiketi yoktur.
   - Yazdırılan "Insert code to handle the error" mesajı.

3. Şimdi `num` değerini iyi (sayı) bir değere güncellemeyi deneyin; hiçbir hata mesajı olmadan hesaplamanın sonucunun yazdırıldığını göreceksiniz.

Bu önemlidir — fırlatılan tüm hatalar artık işlenmektedir, dolayısıyla uygulamanın çökmesine neden olmayacaklardır. Hatayı işlemek için istediğiniz herhangi bir kodu çalıştırabilirsiniz. Yukarıda temel bir mesaj yazdırıyoruz, ancak örneğin kullanıcıdan boyunu tekrar girmesini isteyen fonksiyonu çağırabilir, fakat bu kez ondan girdi hatasını düzeltmesini isteyebilirsiniz. Hatta ne tür bir hata döndürüldüğüne bağlı olarak farklı hata işleme kodları çalıştırmak için bir `if...else` deyimi bile kullanabilirsiniz.

#### Özellik algılama (Feature detection)

Özellik algılama, tüm tarayıcılarda desteklenmeyebilecek yeni JavaScript özelliklerini kullanmayı planladığınızda yararlıdır. Özelliği test edebilir, ardından özelliği destekleyen tarayıcılarda ve desteklemeyenlerde kabul edilebilir bir deneyim sağlamak üzere koşullu olarak kod çalıştırabilirsiniz. Hızlı bir örnek olarak, (web tarayıcısının üzerinde çalıştığı cihaz için mevcut konum verilerini sunan) [Geolocation API'si](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) kullanımı için bir ana giriş noktasına sahiptir — küresel [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) nesnesi üzerinde kullanılabilen bir `geolocation` özelliği. Bu nedenle, daha önce gördüğümüze benzer bir `if()` yapısı kullanarak tarayıcının coğrafi konumu destekleyip desteklemediğini algılayabilirsiniz:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

Daha fazla özellik algılama örneğini [UA koklamaya (sniffing) alternatifler](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing) bölümünde bulabilirsiniz.

### Yardım bulmak

JavaScript (ve HTML ile CSS!) ile karşılaşacağınız başka pek çok sorun vardır; bu da çevrim içi yanıtların nasıl bulunacağına dair bilgiyi paha biçilmez kılar.

En iyi destek bilgisi kaynakları arasında MDN, [stackoverflow.com](https://stackoverflow.com/) ve [caniuse.com](https://caniuse.com/) yer alır.

- MDN'yi kullanmak için çoğu kişi hakkında bilgi bulmaya çalıştığı teknolojiyi, artı "mdn" terimini bir arama motorunda aratır; örneğin "mdn HTML video".
- [caniuse.com](https://caniuse.com/), birkaç yararlı harici kaynak bağlantısıyla birlikte destek bilgileri sağlar. Örneğin bkz. <https://caniuse.com/#search=video> (aradığınız özelliği metin kutusuna girmeniz gerekir).
- [stackoverflow.com](https://stackoverflow.com/) (SO), sorular sorabileceğiniz ve diğer geliştiricilerin çözümlerini paylaşmasını sağlayabileceğiniz, önceki gönderilere bakabileceğiniz ve diğer geliştiricilere yardımcı olabileceğiniz bir forum sitesidir. Yeni bir soru göndermeden önce halihazırda bir yanıtın var olup olmadığını görmek için sorunuza bir yanıt arayın. Örneğin SO'da "disabling autofocus on HTML dialog" araması yaptık ve çok hızlı bir şekilde [HTML özniteliklerini kullanarak showModal otomatik odaklamasını devre dışı bırakma (Disable showModal auto-focusing using HTML attributes)](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) başlığına ulaştık.

Bunun dışında, sorununuzun yanıtı için en sevdiğiniz arama motorunda arama yapmayı deneyin. Elinizde belirli hata mesajları varsa bunları aratmak çoğu zaman yararlıdır — diğer geliştiricilerin de sizinle aynı sorunları yaşamış olması muhtemeldir.

### Özet

İşte JavaScript hata ayıklama ve hata işleme bu kadar. Basit, değil mi? Belki o kadar da basit değildir, ancak bu makale karşılaşacağınız JavaScript ile ilgili sorunların üstesinden nasıl geleceğiniz konusunda size en azından bir başlangıç ve bazı fikirler vermelidir.

JavaScript ile dinamik betik yazımı modülü için hepsi bu kadar; sona ulaştığınız için tebrikler! Bir sonraki modülde [JavaScript çerçevelerini ve kütüphanelerini (JavaScript frameworks and libraries)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries) keşfetmenize yardımcı olacağız.

---

# Modül 2: JavaScript Çerçeveleri ve Kütüphaneleri (JavaScript frameworks and libraries)

**Kaynak:** [JavaScript frameworks and libraries](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries)

JavaScript çerçeveleri (frameworks), geliştiricilere ölçeklenebilir, etkileşimli web uygulamaları oluşturmak için denenmiş ve test edilmiş araçlar sağlayan, modern ön yüz (front-end) web geliştirmenin vazgeçilmez bir parçasıdır. Pek çok modern şirket standart araç setlerinin bir parçası olarak çerçeveleri kullanır, bu nedenle pek çok ön yüz geliştirme işi artık çerçeve deneyimi gerektirmektedir. Bu makale dizisi, çerçeveleri öğrenmeye başlamanıza yardımcı olacak rahat bir başlangıç noktası sunar.

Hevesli bir ön yüz geliştiricisi olarak, çerçeveleri öğrenirken nereden başlayacağınızı bulmak zor olabilir — aralarından seçim yapılabilecek o kadar çok çerçeve vardır ki, her zaman yenileri ortaya çıkar, çoğunlukla benzer bir şekilde çalışırlar ancak bazı şeyleri farklı yaparlar ve çerçeveleri kullanırken dikkat edilmesi gereken bazı özel noktalar vardır.

React/ReactDOM veya başka herhangi bir belirli çerçeve hakkında bilmeniz gereken her şeyi eksiksiz bir şekilde öğretmeyi amaçlamıyoruz; çerçeve ekiplerinin kendi belgeleri (ve diğer kaynaklar) bu işi zaten yapmaktadır. Bunun yerine bir adım geri çekilmek ve önce şu gibi daha temel soruları yanıtlamak istiyoruz:

- Neden bir çerçeve kullanmalıyım? Benim için hangi sorunları çözerler?
- Bir çerçeve seçmeye çalışırken hangi soruları sormalıyım? Bir çerçeve kullanmama gerçekten gerek var mı?
- Çerçevelerin hangi özellikleri vardır? Genel olarak nasıl çalışırlar ve çerçevelerin bu özellikleri uygulama biçimleri nasıl farklılık gösterir?
- "Sade" ("vanilla") JavaScript veya HTML ile nasıl bir ilişkileri vardır?

Ondan sonra, kendi başınıza daha derinlere inmeye başlamanız için size yeterli bağlam ve aşinalık sağlamak amacıyla popüler bir çerçeve seçimi olan React'in temellerini kapsayan bazı eğitimler sunacağız. İlerlemenizi ve erişilebilirlik (accessibility) gibi web platformunun temel en iyi uygulamalarını unutmayan pragmatik bir şekilde çerçeveler hakkında bilgi edinmenizi istiyoruz.

> [!NOTE]
> Scrimba'nın [Kütüphaneler/Çerçeveler (Libraries/Frameworks)](https://scrimba.com/learn-react-c0e/~033a?via=mdn) <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> etkileşimli eğitimi; çerçeveler ve kütüphaneler karşılaştırmasının yararlı bir özetini, web üzerindeki kütüphanelerin ve çerçevelerin kısa bir tarihçesini ve özellikle React hakkında bazı arka plan bilgilerini sunar.

## Ön koşullar

İstemci tarafı (client-side) çerçeveleri öğrenmeye geçmeye çalışmadan önce gerçekten ilk olarak çekirdek web dillerinin temellerini öğrenmelisiniz — [HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content), [CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics) ve özellikle [JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting).

Bunun sonucunda kodunuz daha zengin ve daha profesyonel olacaktır ve çerçevelerin üzerine inşa edildiği temel web platformu özelliklerini anlarsanız sorunları daha büyük bir güvenle giderebileceksiniz.

## Giriş eğitimleri

- **[İstemci tarafı çerçevelere giriş](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)**: Çerçevelere bakışımıza alanın genel bir değerlendirmesiyle başlıyor; JavaScript ve çerçevelerin kısa bir tarihçesine, çerçevelerin neden var olduğuna ve bize neler verdiğine, öğrenilecek bir çerçeve seçme hakkında nasıl düşünmeye başlanacağına ve istemci tarafı çerçevelere ne gibi alternatifler olduğuna bakıyoruz.
- **[Çerçevelerin ana özellikleri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Main_features)**: Her büyük JavaScript çerçevesinin DOM'u güncelleme, tarayıcı olaylarını işleme ve keyifli bir geliştirici deneyimi sunma konusunda farklı bir yaklaşımı vardır. Bu makale, çerçevelerin üst düzeyden nasıl çalışma eğiliminde olduğuna ve aralarındaki farklara bakarak "4 büyük" ("the big 4") çerçevenin ana özelliklerini keşfedecektir.

## React eğitimleri

> [!NOTE]
> React eğitimleri en son Ocak 2023'te, React/ReactDOM 18.2.0 ve create-react-app 5.0.1 ile test edilmiştir.
>
> Kodunuzu bizim sürümümüzle karşılaştırarak kontrol etmeniz gerekirse, örnek React uygulaması kodunun tamamlanmış bir sürümünü [todo-react depomuzda](https://github.com/mdn/todo-react) bulabilirsiniz. Çalışan canlı bir sürüm için <https://mdn.github.io/todo-react/> adresine bakın.

- **[React'e başlarken](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)**: Bu makalede React'e merhaba diyeceğiz. Arka planı ve kullanım durumları hakkında biraz ayrıntı keşfedecek, yerel bilgisayarımızda temel bir React araç zinciri (toolchain) kuracak ve bu süreçte React'in nasıl çalıştığı hakkında biraz bilgi edinerek basit bir başlangıç uygulaması oluşturup onunla oynayacağız.
- **[React ToDo uygulamamıza başlamak](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)**: Diyelim ki React'te bir kavram kanıtı (proof-of-concept) oluşturmakla görevlendirildik – kullanıcıların üzerinde çalışmak istedikleri görevleri eklemelerine, düzenlemelerine ve silmelerine ve ayrıca görevleri silmeden tamamlandı olarak işaretlemelerine olanak tanıyan bir uygulama. Bu makale, daha sonra ekleyeceğimiz tekil bileşen tanımlamasına ve etkileşime hazır olacak şekilde temel `App` bileşeni yapısını ve biçimlendirmesini yerine oturturken size adım adım rehberlik edecektir.
- **[React uygulamamızı bileşenlere ayırmak](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_components)**: Bu noktada uygulamamız yekpare bir yapıdır (monolith). Bir şeyler yapmasını sağlamadan önce onu yönetilebilir, açıklayıcı bileşenlere (components) ayırmamız gerekir. React'in neyin bileşen olup neyin olmadığı konusunda katı kuralları yoktur – bu size kalmıştır! Bu makalede, uygulamamızı bileşenlere ayırmanın mantıklı bir yolunu size göstereceğiz.
- **[React etkileşimi: Olaylar ve durum (state)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state)**: Bileşen planımız çıkarıldığına göre, artık uygulamamızı tamamen statik bir kullanıcı arayüzünden gerçekten etkileşime girmemize ve bir şeyleri değiştirmemize olanak tanıyan bir arayüze güncellemeye başlama zamanı geldi. Bu makalede, bu süreçte olayları (events) ve durumu (state) derinlemesine inceleyerek bunu yapacağız.
- **[React etkileşimi: Düzenleme, filtreleme, koşullu işleme](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering)**: (En azından şimdilik) React yolculuğumuzun sonuna yaklaşırken, Todo listesi uygulamamızdaki ana işlevsellik alanlarına son dokunuşları ekleyeceğiz. Bu, mevcut görevleri düzenlemenize ve görev listesini tümü, tamamlananlar ve tamamlanmayanlar arasında filtrelemenize olanak tanımayı içerir. Bu süreçte koşullu kullanıcı arayüzü işlemeye (conditional UI rendering) bakacağız.
- **[React'te erişilebilirlik](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility)**: Son eğitim makalemizde, hem yalnızca klavye kullananlar hem de ekran okuyucu kullanıcıları için kullanılabilirliği artırabilecek ve kafa karışıklığını azaltabilecek React'te odak yönetimi (focus management) de dahil olmak üzere erişilebilirliğe odaklanacağız (kelime oyunu kasıtlıdır).
- **[React kaynakları](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_resources)**: Son makalemiz, öğreniminizde daha ileri gitmek için kullanabileceğiniz bir React kaynakları listesi sunar.

## Diğer çerçeve seçenekleri

Çerçeveleri öğrenmeye React kullanarak başlamak istemiyorsanız, başka bir seçim yapabilirsiniz.

Alternatif olarak aşağıdakilere bakmanızı öneririz:

- [Angular](https://angular.dev/): [Angular eğitimi](https://angular.dev/tutorials/learn-angular) ile başlayın.
- [Ember](https://emberjs.com/): [Ember.js Öğrenme belgeleri](https://emberjs.com/learn/) ile başlayın.
- [Svelte](https://svelte.dev/): [Svelte eğitimi](https://svelte.dev/tutorial/svelte/welcome-to-svelte) ile başlayın.
- [Vue](https://vuejs.org/): [Vue Hızlı Başlangıç](https://vuejs.org/guide/quick-start.html) ile başlayın.

Bunu peşinen söylemek istiyoruz — daha önce bahsedilen çerçeveleri en iyisi olduklarını düşündüğümüz için veya onları herhangi bir şekilde desteklediğimiz için **seçmedik**. Yalnızca yeni bir yazılım öğrenmeye zaman yatırmaya başlarken dikkate alınması gereken aşağıdaki ölçütlerde yüksek puan aldıklarını düşünüyoruz:

- İyi desteklenirler ve bir süre daha ortalıkta olacaklardır: Herhangi bir yazılım aracında olduğu gibi, gelecek hafta sonlandırılma olasılığı olmayan ve iş ararken beceri setinize arzu edilen eklemeler olacak aktif olarak geliştirilen seçeneklere bağlı kalmak iyidir.
- Güçlü toplulukları ve iyi belgeleri vardır: Özellikle yeni başlıyorken, karmaşık bir konuyu öğrenme konusunda yardım alabilmek çok önemlidir.

---

## 34. İstemci Tarafı Çerçevelere Giriş (Introduction to client-side frameworks)

**Kaynak:** [Introduction to client-side frameworks](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)

Çerçevelere (frameworks) bakışımıza alanın genel bir değerlendirmesiyle başlıyor; JavaScript ve çerçevelerin kısa bir tarihçesine, çerçevelerin neden var olduğuna ve bize neler verdiğine, öğrenilecek bir çerçeve seçme hakkında nasıl düşünmeye başlanacağına ve istemci tarafı çerçevelere ne gibi alternatifler olduğuna bakıyoruz.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Çekirdek <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a> ve
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> dillerine aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Üçüncü taraf kodun ne olduğu ve istemci tarafı JavaScript çerçevelerinin nasıl ortaya çıktığı.</li>
          <li>Çerçevelerin hangi sorunları çözdüğü, ne gibi alternatifler olduğu ve bir tanesini seçmeye nasıl yaklaşılacağı.</li>
          <li>Kütüphaneler (libraries) ve çerçeveler (frameworks) arasındaki fark.</li>
          <li>Çerçevelerin ne zaman kullanılması ve ne zaman kullanılmaması gerektiği.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Kütüphanelerin ve çerçevelerin ortaya çıkışı

JavaScript 1996 yılında ilk kez sahneye çıktığında, o zamana kadar statik belgelerden oluşan bir web'e ara sıra etkileşim ve heyecan kattı. Web yalnızca _bir şeyler okunan_ bir yer değil, _bir şeyler yapılan_ bir yer haline geldi. JavaScript'in popülerliği istikrarlı bir şekilde arttı. JavaScript ile çalışan geliştiriciler karşılaştıkları sorunları çözmek için araçlar yazdılar ve çözümlerini başkalarıyla paylaşabilmek için bunları **kütüphaneler (libraries)** adı verilen yeniden kullanılabilir paketler halinde paketlediler. Bu paylaşılan kütüphaneler ekosistemi web'in büyümesini şekillendirmeye yardımcı oldu ve sonunda yerini çerçevelere bıraktı.

Bir **çerçeve (framework)**, yazılımın nasıl inşa edileceği konusunda görüşler (opinions) sunan bir kütüphanedir. Bu görüşler bir uygulamada öngörülebilirlik ve homojenlik sağlar; öngörülebilirlik yazılımın devasa bir boyuta ölçeklenmesine ve yine de bakımının yapılabilir (maintainable) olmasına olanak tanır; öngörülebilirlik ve bakım yapılabilirlik ise yazılımın sağlığı ve uzun ömürlülüğü için vazgeçilmezdir. Modern JavaScript çerçevelerinin ortaya çıkışı, son derece dinamik, etkileşimli uygulamalar oluşturmayı çok daha kolay hale getirmiştir.

JavaScript çerçeveleri, muhtemelen her gün kullandığınız web sitelerinin birçoğu da dahil olmak üzere modern web üzerindeki etkileyici yazılımların büyük kısmına güç verir.

### Piyasada hangi çerçeveler var?

Piyasada pek çok çerçeve vardır, ancak şu anda "dört büyükler" ("big four") olarak aşağıdakiler kabul edilmektedir.

#### Ember

[Ember](https://emberjs.com/), [SproutCore](https://en.wikipedia.org/wiki/SproutCore) projesinde başlayan çalışmaların bir devamı olarak ilk kez Aralık 2011'de yayınlandı. React ve Vue gibi daha modern alternatiflere göre daha az kullanıcısı olan daha eski bir çerçevedir, ancak kararlılığı, topluluk desteği ve bazı zekice kodlama ilkeleri nedeniyle hâlâ hatırı sayılır miktarda popülerliğe sahiptir.

#### Angular

[Angular](https://angular.dev/), Google'daki Angular Ekibi ve bireyler ile şirketlerden oluşan bir topluluk tarafından yönetilen açık kaynaklı bir web uygulaması çerçevesidir. [AngularJS](https://angularjs.org/)'i oluşturan aynı ekip tarafından baştan sona yeniden yazılmıştır. Angular resmî olarak 14 Eylül 2016'da yayınlandı.

Angular, bildirimsel (declarative) HTML şablonları kullanan bileşen tabanlı (component-based) bir çerçevedir. Derleme zamanında (build time), geliştiricilere şeffaf bir şekilde, çerçevenin derleyicisi şablonları optimize edilmiş JavaScript talimatlarına çevirir. Angular, bir sonraki bölümde biraz daha ayrıntılı olarak bakacağımız bir JavaScript üst kümesi (superset) olan [TypeScript](https://www.typescriptlang.org/)'i kullanır.

#### Vue

Orijinal [AngularJS](https://angularjs.org/) projesi üzerinde çalıştıktan ve ondan dersler çıkardıktan sonra Evan You, 2014 yılında [Vue](https://vuejs.org/)'yu yayınladı. Vue dört büyüklerin en gencidir, ancak son zamanlarda popülerliğinde bir artış yaşamıştır.

Vue, Angular gibi, HTML'i kendine ait bazı kodlarla genişletir. Bunun dışında esas olarak modern, standart JavaScript'e dayanır.

#### React

Facebook, [React](https://react.dev/)'i 2013 yılında yayınladı. Bu noktada, şirket içinde pek çok sorununu çözmek için React'i zaten kullanıyordu. Teknik olarak React'in kendisi bir çerçeve _değildir_; kullanıcı arayüzü bileşenlerini işlemek (rendering) için bir kütüphanedir. React, uygulamalar yapmak için _diğer_ kütüphanelerle birlikte kullanılır — React ve [React Native](https://reactnative.dev/) geliştiricilerin mobil uygulamalar yapmasını sağlar; React ve [ReactDOM](https://react.dev/reference/react-dom) web uygulamaları yapmalarını sağlar vb.

React ve ReactDOM çok sık birlikte kullanıldığı için React günlük dilde bir JavaScript çerçevesi olarak anlaşılır. Bu modülü okurken bu günlük dildeki anlayışla çalışacağız.

React, JavaScript'i [JSX](https://react.dev/learn/writing-markup-with-jsx) olarak bilinen HTML benzeri bir sözdizimiyle genişletir.

### Çerçeveler neden vardır?

Çerçevelerin yaratılmasına ilham veren ortamı tartıştık, ancak geliştiricilerin _neden_ onları yapma ihtiyacı hissettiğini pek tartışmadık. Nedenini keşfetmek, önce yazılım geliştirmenin zorluklarını incelemeyi gerektirir.

Yaygın bir uygulama türünü düşünün: Gelecek bölümlerde çeşitli çerçeveler kullanarak uygulamaya bakacağımız bir yapılacaklar listesi (to-do list) oluşturucu. Bu uygulama, kullanıcıların bir görev listesini işlemek, yeni bir görev eklemek ve bir görevi silmek gibi şeyleri yapmasına olanak tanımalıdır; ve bunu, uygulamanın altında yatan verileri güvenilir bir şekilde takip ederken ve güncellerken yapmalıdır. Yazılım geliştirmede bu altta yatan veriler durum (state) olarak bilinir.

Hedeflerimizin her biri tek başına teorik olarak basittir. Onu işlemek için veriler üzerinde yineleme yapabiliriz; yeni bir görev yapmak için bir nesneye ekleme yapabiliriz; bir görevi bulmak, düzenlemek veya silmek için bir tanımlayıcı (identifier) kullanabiliriz. Uygulamanın kullanıcının bu şeylerin _hepsini_ tarayıcı aracılığıyla yapmasına izin vermesi gerektiğini hatırladığımızda bazı çatlaklar görünmeye başlar. **Gerçek sorun şudur: uygulamamızın durumunu (state) her değiştirdiğimizde, eşleşmesi için kullanıcı arayüzünü (UI) güncellememiz gerekir.**

Yapılacaklar listesi uygulamamızın yalnızca _tek_ bir özelliğine bakarak bu sorunun zorluğunu inceleyebiliriz: bir görev listesini işlemek.

### DOM değişikliklerinin ayrıntılı ve uzun yapısı

HTML öğelerini oluşturmak ve bunları uygun zamanda tarayıcıda işlemek şaşırtıcı miktarda kod gerektirir. Durumumuzun (state), (metin girdisi tarafından kontrol edilen) `taskName` özelliğini ve `tasks` listesini içeren bir anahtar-değer deposu olduğunu varsayalım:

```js
const state = {
  taskName: "",
  tasks: [
    {
      id: "todo-0",
      name: "Learn some frameworks!",
    },
  ],
};
```

Bu görevlerden birini kullanıcılarımıza nasıl gösteririz? Her görevi bir liste öğesi olarak — sırasız bir liste öğesinin ([`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul)) içinde bir HTML [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li) öğesi olarak — temsil etmek istiyoruz. Onu nasıl yaparız? Bu şuna benzer görünebilir:

```js
function buildTodoItemEl(id, name) {
  const item = document.createElement("li");
  const span = document.createElement("span");

  span.textContent = name;

  item.id = id;
  item.appendChild(span);
  item.appendChild(buildDeleteButtonEl(id));

  return item;
}
```

Burada `<li>` öğemizi yapmak için [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) metodunu ve ihtiyaç duyduğu özellikleri ve alt öğeleri oluşturmak için birkaç satır daha kodu kullanıyoruz.

Önceki kod parçacığı başka bir oluşturma fonksiyonuna başvurur: `buildDeleteButtonEl()`. Bir liste öğesi oluşturmak için kullandığımız kalıba benzer bir kalıbı izler:

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.addEventListener("click", () => {
    state.tasks = state.tasks.filter((t) => t.id !== id);
    renderTodoList();
  });
  button.textContent = "Delete";

  return button;
}
```

Dikkat edilmesi gereken ilginç kısım, durumu her güncellediğimizde durumumuzun ekranla eşzamanlanması (synced) için `renderTodoList` fonksiyonunu elle çağırmamız gerekmesidir. Öğelerimizi sayfada işleyecek kod şuna benzer olabilir:

```js
const todoFormEl = document.querySelector("#todo-form");
const todoInputEl = document.querySelector("#todo-input");
const todoListEl = document.querySelector("#todo-list");
```

```js
function renderTodoList() {
  const frag = document.createDocumentFragment();
  state.tasks.forEach((task) => {
    const item = buildTodoItemEl(task.id, task.name);
    frag.appendChild(item);
  });

  while (todoListEl.lastChild) {
    todoListEl.removeChild(todoListEl.lastChild);
  }
  todoListEl.appendChild(frag);
}
```

Artık _yalnızca_ kullanıcı arayüzüne — _yalnızca_ DOM'da bir şey işlemeye — adanmış neredeyse otuz satır kodumuz var ve hiçbir noktada daha sonra liste öğelerimizi biçimlendirmek için kullanabileceğimiz sınıflar (classes) eklemiyoruz!

Merak ediyorsanız aşağıda tam çalışan bir demomuz var. Kaynak kodunu oyun alanında (playground) görüntülemek için "Play" ("Çalıştır") düğmesine tıklayabilirsiniz.

```html
<h1>TodoMatic</h1>
<form id="todo-form">
  <label for="todo-input">What needs to be done?</label>
  <input type="text" id="todo-input" autocomplete="on" />
  <button type="submit">Add</button>
</form>
<ul id="todo-list"></ul>
```

```css
* + * {
  margin-top: 0.4rem;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 2rem;
  line-height: 1.25;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Roboto", "Helvetica", "Arial",
    sans-serif;
  color: hsl(0 0 0.13);

  width: 95%;
  max-width: 30em;
  padding-bottom: 2em;
  margin: 0 auto;
}

button,
input[type="text"] {
  font-size: 100%;
  line-height: 1.15;
  font-family: inherit;
  margin: 0;

  padding: 0.5rem;
  border: 1px solid #707070;
  border-radius: 2px;
}

* + button {
  margin-left: 0.4rem;
}

label {
  display: table;
}

ul {
  margin-top: 1.6rem;
  padding-left: 2em;
}

label + input[type="text"] {
  margin-top: 0.4rem;
}
```

```js
function generateUniqueId(prefix = "prefix") {
  return `${prefix}-${Math.floor(Math.random() * Date.now())}`;
}

function createTask(name) {
  return {
    name,
    id: generateUniqueId("todo"),
  };
}

function renderInput() {
  todoInputEl.value = state.taskName;
}

todoInputEl.addEventListener("change", (e) => {
  state.taskName = e.target.value;
});
todoFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  state.tasks = [...state.tasks, createTask(state.taskName)];
  state.taskName = "";
  renderInput();
  renderTodoList();
});
renderInput();
renderTodoList();
```

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Bu örnekte olduğu gibi doğrudan DOM ile çalışmak, DOM'un nasıl çalıştığı hakkında pek çok şeyi anlamayı gerektirir: öğelerin nasıl yapılacağı; özelliklerinin nasıl değiştirileceği; öğelerin birbirinin içine nasıl konulacağı; sayfaya nasıl getirilecekleri. Bu kodların hiçbiri aslında kullanıcı etkileşimlerini işlemez ya da bir görev eklemeyi veya silmeyi ele almaz. Bu özellikleri eklersek, kullanıcı arayüzümüzü doğru zamanda ve doğru şekilde güncellemeyi hatırlamamız gerekir.

JavaScript çerçeveleri bu tür işleri çok daha kolay hale getirmek için yaratılmıştır — daha iyi bir _geliştirici deneyimi (developer experience)_ sağlamak için vardırlar. JavaScript'e yepyeni güçler getirmezler; bugünün web'i için üretim yapabilmeniz amacıyla JavaScript'in güçlerine daha kolay erişmenizi sağlarlar.

Bu bölümde kullanılan JavaScript özellikleri hakkında daha fazlasını okuyun:

- [`Array.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
- [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

### Kullanıcı arayüzleri oluşturmanın başka bir yolu

Her JavaScript çerçevesi, kullanıcı arayüzlerini daha _bildirimsel (declaratively)_ olarak yazmanın bir yolunu sunar. Yani kullanıcı arayüzünüzün nasıl görünmesi gerektiğini tanımlayan kodlar yazmanıza olanak tanırlar ve çerçeve bunu perde arkasında DOM'da gerçekleştirir.

Yeni DOM öğelerini tekrarlı olarak oluşturmaya yönelik sade (vanilla) JavaScript yaklaşımını bir bakışta anlamak zordu. Buna karşılık, aşağıdaki kod bloğu görev listemizi tanımlamak için Vue'yu nasıl kullanabileceğinizi göstermektedir:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Hepsi bu kadar. Bu kod parçacığı neredeyse otuz satırlık kodu altı satıra indirir. Buradaki süslü parantezler ve `v-` öznitelikleri size yabancıysa sorun değil; modülün ilerleyen kısımlarında Vue'ya özgü sözdizimi hakkında bilgi edineceksiniz. Buradan çıkarılacak sonuç, sade JavaScript kodu temsil ettiği kullanıcı arayüzüne benzemezken bu kodun temsil ettiği kullanıcı arayüzüne benzemesidir.

Vue sayesinde kullanıcı arayüzünü oluşturmak için kendi fonksiyonlarımızı yazmak zorunda kalmadık; çerçeve bunu bizim için optimize edilmiş, verimli bir şekilde halledecektir. Buradaki tek rolümüz Vue'ya her öğenin nasıl görünmesi gerektiğini tanımlamaktı. Vue'ya aşina olan geliştiriciler projemize katıldıklarında neler olup bittiğini hızla çözebilirler. Vue bu konuda yalnız değildir: bir çerçeve kullanmak bireysel verimliliğin yanı sıra ekip verimliliğini de artırır.

Sade JavaScript'te buna _benzer_ şeyler yapmak mümkündür. [Şablon değişmezi dizeleri (Template literal strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), nihai öğenin nasıl görüneceğini temsil eden HTML dizeleri yazmayı kolaylaştırır. Yapılacaklar listesi uygulamamız kadar basit bir şey için bu yararlı bir fikir olabilir, ancak binlerce veri kaydını yöneten ve bir kullanıcı arayüzünde bir o kadar benzersiz öğeyi işleyebilecek büyük uygulamalar için bakımı yapılabilir değildir.

### Çerçevelerin bize verdiği diğer şeyler

Çerçeveler tarafından sunulan diğer avantajlardan bazılarına bakalım. Daha önce de ima ettiğimiz gibi, çerçevelerin avantajlarına sade JavaScript'te de ulaşılabilir, ancak bir çerçeve kullanmak bu sorunları kendiniz çözmek zorunda kalmanın tüm bilişsel yükünü ortadan kaldırır.

#### Araçlar (Tooling)

Bu modüldeki çerçevelerin her birinin büyük, aktif bir topluluğu olduğundan, her çerçevenin ekosistemi geliştirici deneyimini iyileştiren araçlar (tooling) sağlar. Bu araçlar test etme (uygulamanızın olması gerektiği gibi davrandığından emin olmak için) veya lint denetimi (kodunuzun hatasız ve stil açısından tutarlı olduğundan emin olmak için) gibi şeyleri eklemeyi kolaylaştırır.

> [!NOTE]
> Web araçları kavramları hakkında daha fazla ayrıntı öğrenmek istiyorsanız [İstemci tarafı araçlara genel bakış (Client-side tooling overview)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Overview) sayfamıza göz atın.

#### Bölmelendirme (Compartmentalization)

Çoğu büyük çerçeve, geliştiricileri kullanıcı arayüzlerinin farklı bölümlerini _bileşenlere (components)_ — birbiriyle iletişim kurabilen, bakımı yapılabilir, yeniden kullanılabilir kod yığınlarına — soyutlamaya teşvik eder. Belirli bir bileşenle ilgili tüm kod tek bir dosyada (veya birkaç belirli dosyada) yaşayabilir; böylece bir geliştirici olarak o bileşende değişiklik yapmak için tam olarak nereye gideceğinizi bilirsiniz. Sade bir JavaScript uygulamasında bunu verimli, ölçeklenebilir bir şekilde başarmak için kendi kurallar kümenizi oluşturmanız gerekirdi. Pek çok JavaScript geliştiricisi, kendi haline bırakılırsa, kullanıcı arayüzünün bir bölümüyle ilgili tüm kodun bir dosyanın her yerine dağıldığı — ya da tamamen başka bir dosyada olduğu — bir durumla karşılaşabilir.

#### Yönlendirme (Routing)

Web'in en temel özelliği kullanıcıların bir sayfadan diğerine gezinmesine olanak tanımasıdır – ne de olsa birbirine bağlı belgelerden oluşan bir ağdır. Tam da bu web sitesinde bir bağlantıyı takip ettiğinizde, tarayıcınız bir sunucuyla iletişim kurar ve sizin için görüntülemek üzere yeni içerik getirir. Bunu yaparken adres çubuğunuzdaki URL değişir. Bu yeni URL'yi kaydedebilir ve daha sonra sayfaya geri dönebilir ya da aynı sayfayı kolayca bulabilmeleri için başkalarıyla paylaşabilirsiniz. Tarayıcınız gezinme geçmişinizi hatırlar ve ileri geri gezinmenize de olanak tanır. Buna **sunucu tarafı yönlendirme (server-side routing)** denir.

Modern web uygulamaları tipik olarak yeni HTML dosyaları getirmez ve işlemez — tek bir HTML kabuğu yüklerler ve kullanıcıları web üzerinde yeni adreslere yönlendirmeden içindeki DOM'u sürekli güncellerler (**tek sayfalık uygulamalar (single page apps)** veya **SPA'lar** olarak adlandırılır). Her yeni sözde web sayfasına genellikle _görünüm (view)_ denir ve varsayılan olarak hiçbir yönlendirme yapılmaz.

Bir SPA yeterince karmaşık olduğunda ve yeterince benzersiz görünüm işlediğinde, uygulamanıza yönlendirme işlevselliği getirmek önemlidir. İnsanlar bir uygulamadaki belirli sayfalara bağlantı verebilmeye, gezinme geçmişlerinde ileri ve geri gidebilmeye vb. alışkındır ve bu standart web özellikleri bozulduğunda deneyimleri zarar görür. Yönlendirme bir istemci uygulaması tarafından bu şekilde ele alındığında, yerinde bir ifadeyle **istemci tarafı yönlendirme (client-side routing)** olarak adlandırılır.

JavaScript'in ve tarayıcının yerel yeteneklerini kullanarak bir yönlendirici (router) yapmak _mümkündür_, ancak popüler, aktif olarak geliştirilen çerçeveler yönlendirmeyi geliştirme sürecinin daha sezgisel bir parçası haline getiren eşlikçi kütüphanelere sahiptir.

### Çerçeveleri kullanırken dikkate alınması gerekenler

Etkili bir web geliştiricisi olmak, iş için en uygun araçları kullanmak anlamına gelir. JavaScript çerçeveleri ön yüz uygulama geliştirmeyi kolaylaştırır, ancak tüm sorunları çözecek sihirli bir değnek değildirler. Bu bölüm, çerçeveleri kullanırken dikkate almanız gereken bazı şeylerden bahseder. Bir çerçeveye hiç ihtiyacınız olmayabileceğini aklınızda bulundurun — sırf kullanmış olmak için bir çerçeve kullanma durumuna düşmemeye dikkat edin.

#### Araca aşinalık

Tıpkı sade JavaScript gibi, çerçeveleri de öğrenmek zaman alır ve kendilerine has tuhaflıkları vardır. Bir proje için bir çerçeve kullanmaya karar vermeden önce, size karşı çalışması yerine sizin için yararlı olacak kadar özelliğini öğrenmeye vaktiniz olduğundan ve ekip arkadaşlarınızın da onunla rahat olduğundan emin olun.

#### Aşırı mühendislik (Overengineering)

Web geliştirme projeniz birkaç sayfadan oluşan kişisel bir portföyse ve bu sayfaların etkileşimli yeteneği çok azsa veya hiç yoksa, bir çerçeve (ve tüm JavaScript kodu) hiç gerekli olmayabilir. Bununla birlikte çerçeveler yekpare değildir ve bazıları küçük projelere diğerlerinden daha uygundur. Smashing Magazine için yazdığı bir makalede Sarah Drasner, bir web sayfasının küçük bölümlerini etkileşimli hale getirmeye yönelik bir araç olarak [Vue'nun jQuery'nin yerini nasıl alabileceği](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/) hakkında yazmaktadır.

#### Daha büyük kod tabanı ve soyutlama

Çerçeveler, perde arkasında DOM etkileşimlerini sizin yerinize hallederek daha bildirimsel kod — ve bazen genel olarak _daha az_ kod — yazmanıza olanak tanır. Bu soyutlama (abstraction) bir geliştirici olarak deneyiminiz için harikadır, ancak bedelsiz değildir. Yazdıklarınızı DOM değişikliklerine çevirmek için çerçevelerin kendi kodlarını çalıştırması gerekir; bu da nihai yazılım parçanızı daha büyük ve çalıştırılması hesaplama açısından daha maliyetli hale getirir.

Biraz ekstra kod kaçınılmazdır ve ağaç sallamayı (tree-shaking — derleme süreci sırasında uygulamada gerçekte kullanılmayan kodların kaldırılması) destekleyen bir çerçeve uygulamalarınızı küçük tutmanıza olanak tanıyacaktır; ancak özellikle cep telefonları gibi ağ/depolama açısından daha kısıtlı cihazlarda uygulamanızın performansını değerlendirirken bu yine de aklınızda bulundurmanız gereken bir faktördür.

Çerçevelerin soyutlaması yalnızca JavaScript'inizi değil, web'in doğasıyla olan ilişkinizi de etkiler. Web için nasıl üretim yaparsanız yapın, nihai sonuç, kullanıcılarınızın en sonunda etkileşime girdiği katman HTML'dir. Tüm uygulamanızı JavaScript'te yazmak HTML'i ve çeşitli etiketlerinin amacını gözden kaçırmanıza neden olabilir ve anlamsal olmayan (un-semantic) ve erişilemez bir HTML belgesi üretmenize yol açabilir. Aslında tamamen JavaScript'e bağımlı olan ve onsuz çalışmayacak kırılgan bir uygulama yazmak mümkündür.

Çerçeveler sorunlarımızın kaynağı değildir. Yanlış önceliklerle her uygulama kırılgan, şişkin ve erişilemez olabilir. Ancak çerçeveler geliştiriciler olarak önceliklerimizi büyütür. Önceliğiniz karmaşık bir web uygulaması yapmaksa bunu yapmak kolaydır. Ancak öncelikleriniz performansı ve erişilebilirliği dikkatle korumuyorsa çerçeveler kırılganlığınızı, şişkinliğinizi ve erişilemezliğinizi büyütecektir. Çerçeveler tarafından büyütülen modern geliştirici öncelikleri, pek çok yerde web'in yapısını tersine çevirmiştir. Sağlam, önce içerik odaklı bir belgeler ağı yerine web artık çoğu zaman JavaScript'i ilk sıraya, kullanıcı deneyimini ise son sıraya koymaktadır.

### Çerçeve odaklı bir web'de erişilebilirlik

Önceki bölümde söylediklerimizin üzerine inşa edelim ve erişilebilirlik hakkında biraz daha konuşalım. Kullanıcı arayüzlerini erişilebilir hale getirmek her zaman biraz düşünmeyi ve çaba göstermeyi gerektirir ve çerçeveler bu süreci karmaşıklaştırabilir. ARIA [canlı bölgeleri (live regions)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) veya odak yönetimi gibi yerel tarayıcı özelliklerine erişmek için çoğu zaman ileri düzey çerçeve API'lerini kullanmanız gerekir.

Bazı durumlarda çerçeve uygulamaları, geleneksel web siteleri için var olmayan erişilebilirlik engelleri yaratır. Bunun en büyük örneği, daha önce bahsedildiği gibi istemci tarafı yönlendirmededir.

Geleneksel (sunucu tarafı) yönlendirmede web'de gezinmenin öngörülebilir sonuçları vardır. Tarayıcı odağı sayfanın en üstüne ayarlamayı bilir ve yardımcı teknolojiler (assistive technologies) sayfanın başlığını duyurur. Yeni bir sayfaya her gittiğinizde bu şeyler gerçekleşir.

İstemci tarafı yönlendirmede tarayıcınız yeni web sayfaları yüklemez, bu nedenle odağı otomatik olarak ayarlaması veya yeni bir sayfa başlığını duyurması gerektiğini bilmez. Çerçeve yazarları bu özellikleri yeniden oluşturan JavaScript kodları yazmaya muazzam zaman ve emek harcamıştır ve o zaman bile hiçbir çerçeve bunu kusursuz bir şekilde yapamamıştır.

Sonuç olarak, _her_ web projesinin en başından itibaren erişilebilirliği dikkate almalısınız; ancak bunu yapmazsanız çerçeveleri kullanan soyutlanmış kod tabanlarının büyük erişilebilirlik sorunlarından muzdarip olma olasılığının daha yüksek olduğunu aklınızda bulundurun.

### Bir çerçeve nasıl seçilir?

Bu modülde tartışılan çerçevelerin her biri web uygulaması geliştirmeye farklı yaklaşımlar getirir. Her biri düzenli olarak gelişmekte veya değişmektedir ve her birinin artıları ve eksileri vardır. Doğru çerçeveyi seçmek ekibe ve projeye bağlı bir süreçtir ve ihtiyaçlarınıza neyin uygun olduğunu ortaya çıkarmak için kendi araştırmanızı yapmalısınız. Bununla birlikte, seçeneklerinizi daha etkili bir şekilde araştırmak için sorabileceğiniz birkaç soru belirledik:

1. Çerçeve hangi tarayıcıları destekliyor?
2. Çerçeve hangi alana özgü dilleri (domain-specific languages) kullanıyor?
3. Çerçevenin güçlü bir topluluğu ve mevcut iyi belgeleri (ve diğer destekleri) var mı?

Bu bölümdeki tablo, her çerçeve tarafından sunulan mevcut _tarayıcı desteğinin_ yanı sıra birlikte kullanılabileceği **alana özgü dillerin** bir bakışta görülebilecek özetini sunar.

Genel anlamda, [alana özgü diller (domain-specific languages — DSL'ler)](https://developer.mozilla.org/en-US/docs/Glossary/DSL/Domain_specific_language), yazılım geliştirmenin belirli alanlarında geçerli olan programlama dilleridir. Çerçeveler bağlamında DSL'ler, o çerçeveyle geliştirmeyi kolaylaştıran JavaScript veya HTML çeşitlemeleridir. En önemlisi, çerçevelerin hiçbiri bir geliştiricinin belirli bir DSL kullanmasını _zorunlu kılmaz_, ancak neredeyse hepsi belirli bir DSL düşünülerek tasarlanmıştır. Bir çerçevenin tercih edilen DSL'sini kullanmamayı seçmek, aksi takdirde geliştirici deneyiminizi iyileştirecek özellikleri kaçırmanız anlamına gelecektir.

Herhangi bir yeni proje için seçim yaparken bir çerçevenin destek matrisini ve DSL'lerini ciddi şekilde dikkate almalısınız. Uyumsuz tarayıcı desteği kullanıcılarınız için bir engel olabilir; uyumsuz DSL desteği ise sizin ve ekip arkadaşlarınız için bir engel olabilir.

| Çerçeve | Tarayıcı desteği | Tercih edilen DSL | Desteklenen DSL'ler | Kaynak |
| :--- | :--- | :--- | :--- | :--- |
| Angular | Modern | TypeScript | HTML tabanlı; TypeScript | [resmî belgeler](https://angular.dev/guide/browser-support) |
| React | Modern | JSX | JSX; TypeScript | [resmî belgeler](https://react.dev/reference/react-dom/client#browser-support) |
| Vue | Modern (Vue 2'de IE9+) | HTML tabanlı | HTML tabanlı, JSX, Pug | [resmî belgeler](https://cli.vuejs.org/guide/browser-compatibility.html) |
| Ember | Modern (Ember sürüm 2.18'de IE9+) | Handlebars | Handlebars, TypeScript | [resmî belgeler](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> "HTML tabanlı" olarak tanımladığımız DSL'lerin resmî adları yoktur. Aslında gerçek DSL'ler değillerdir, ancak standart dışı HTML'dirler, bu nedenle vurgulanmaya değer olduklarına inanıyoruz.

#### Çerçevenin güçlü bir topluluğu var mı?

Topluluk büyüklüğü erişilmesi kolay sayılarla doğrudan ilişkili olmadığı için bu belki de ölçülmesi en zor ölçüttür. Popülerliği hakkında bir fikir edinmek için bir projenin GitHub yıldız sayısını veya haftalık npm indirmelerini kontrol edebilirsiniz, ancak bazen yapılacak en iyi şey birkaç forumda arama yapmak veya diğer geliştiricilerle konuşmaktır. Mesele yalnızca topluluğun büyüklüğü değil, aynı zamanda ne kadar sıcakkanlı ve kapsayıcı olduğu ve mevcut belgelerin ne kadar iyi olduğudur.

#### Web üzerindeki görüşler

Bu konuda yalnızca bizim sözümüze güvenmeyin — web'in her yerinde tartışmalar vardır. Wikimedia Vakfı yakın zamanda ön yüzü için Vue kullanmayı seçti ve [çerçeve benimseme üzerine bir yorum talebi (request for comments — RFC)](https://phabricator.wikimedia.org/T241180) yayınladı. RFC'nin yazarı Eric Gardner, Wikimedia projesinin ihtiyaçlarını ve belirli çerçevelerin ekip için neden iyi seçimler olduğunu ana hatlarıyla belirtmek için zaman ayırdı. Bu RFC, bir ön yüz çerçevesi kullanmayı planlarken kendiniz için yapmanız gereken araştırma türüne harika bir örnek teşkil eder.

[State of JavaScript anketi](https://stateofjs.com/), JavaScript geliştiricilerinden gelen geri bildirimlerin yararlı bir koleksiyonudur. Hem çerçevelerin kullanımı hem de geliştiricilerin onlara yönelik düşünceleri hakkındaki veriler de dahil olmak üzere JavaScript ile ilgili pek çok konuyu kapsar. Şu anda bir çerçevenin popülerliği hakkında fikir edinmenize olanak tanıyan birkaç yıllık veri mevcuttur.

Vue ekibi [Vue'yu diğer popüler çerçevelerle kapsamlı bir şekilde karşılaştırmıştır](https://v2.vuejs.org/v2/guide/comparison.html). Bu karşılaştırmada biraz önyargı olabilir (ki bunu kendileri de belirtmektedir), ancak yine de değerli bir kaynaktır.

### İstemci tarafı çerçevelere alternatifler

Web geliştirme sürecini hızlandıracak araçlar arıyorsanız ve projenizin yoğun istemci tarafı JavaScript gerektirmeyeceğini biliyorsanız, web'i inşa etmek için diğer birkaç çözümden birine yönelebilirsiniz:

- Bir içerik yönetim sistemi (content management system)
- Sunucu tarafı işleme (server-side rendering)
- Bir statik site oluşturucu (static site generator)

#### İçerik yönetim sistemleri

**İçerik yönetim sistemleri** (**Content-management systems** — **CMS'ler**), bir kullanıcının doğrudan kendisi kod yazmadan web için içerik oluşturmasına olanak tanıyan tüm araçlardır. Büyük projeler için, özellikle de sınırlı kodlama yeteneğine sahip içerik yazarlarından girdi gerektiren projeler veya zamandan tasarruf etmek isteyen programcılar için iyi bir çözümdürler. Ancak kurulumları önemli miktarda zaman gerektirir ve bir CMS kullanmak, web sitenizin nihai çıktısı üzerindeki kontrolün en azından bir kısmından vazgeçmeniz anlamına gelir. Örneğin: seçtiğiniz CMS varsayılan olarak erişilebilir içerik oluşturmuyorsa bunu iyileştirmek çoğu zaman zordur.

Birkaç popüler CMS sistemi arasında [WordPress](https://wordpress.com/), [Joomla](https://www.joomla.org/) ve [Drupal](https://new.drupal.org/) yer alır.

#### Sunucu tarafı işleme

**Sunucu tarafı işleme** (**Server-side rendering** — **SSR**), tek sayfalık bir uygulamayı (single-page application) işleme işinin _sunucuya_ ait olduğu bir uygulama mimarisidir. Bu, bir JavaScript uygulaması oluşturmanın en yaygın ve en doğrudan yolu olan _istemci tarafı işlemenin (client-side rendering)_ tam tersidir. İstemciye yalnızca işlenmiş bir HTML dosyası gönderdiğiniz için sunucu tarafı işleme istemcinin cihazı açısından daha kolaydır, ancak istemci tarafında işlenen bir uygulamaya kıyasla kurulumu zor olabilir.

Bu modülde ele alınan tüm çerçeveler istemci tarafı işlemenin yanı sıra sunucu tarafı işlemeyi de destekler. React için [Next.js](https://nextjs.org/), Vue için [Nuxt](https://nuxt.com/) (evet, kafa karıştırıcıdır ve hayır, bu projeler birbiriyle ilişkili değildir!), Ember için [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) ve Angular için [Angular Universal](https://angular.dev/guide/universal) projelerine göz atın.

> [!NOTE]
> Bazı SSR çözümleri topluluk tarafından yazılır ve sürdürülürken, bazıları çerçevenin geliştiricisi tarafından sağlanan "resmî" çözümlerdir.

#### Statik site oluşturucular

[Statik site oluşturucular (Static site generators)](https://developer.mozilla.org/en-US/docs/Glossary/SSG), çok sayfalı bir web sitesinin tüm web sayfalarını — ilgili tüm CSS veya JavaScript dahil olmak üzere — dinamik olarak üreten, böylece bunların istenilen sayıda yerde yayınlanabilmesini sağlayan programlardır. Yayınlama barındırıcısı (host) örneğin bir GitHub pages dalı (branch), bir Netlify örneği veya seçtiğiniz herhangi bir özel sunucu olabilir. Bu yaklaşımın çoğunlukla performans (kullanıcınızın cihazı sayfayı JavaScript ile oluşturmaz; sayfa zaten tamamlanmıştır) ve güvenlik (statik sayfaların daha az saldırı vektörü vardır) etrafında şekillenen bir dizi avantajı vardır. Bu siteler ihtiyaç duydukları yerlerde yine JavaScript kullanabilirler, ancak ona _bağımlı_ değillerdir. Statik site oluşturucuları da diğer her araç gibi öğrenmek için zaman alır ve bu da geliştirme süreciniz için bir engel olabilir.

Statik siteler istediğiniz kadar az veya istediğiniz kadar çok benzersiz sayfaya sahip olabilir. Tıpkı çerçevelerin hızlı bir şekilde istemci tarafı JavaScript uygulamaları yazmanıza güç vermesi gibi, statik site oluşturucular da aksi takdirde tek tek yazacağınız HTML dosyalarını hızlı bir şekilde oluşturmanız için size bir yol sunar. Çerçeveler gibi statik site oluşturucular da geliştiricilerin web sayfalarınızın ortak parçalarını tanımlayan bileşenler yazmasına ve nihai bir sayfa oluşturmak için bu bileşenleri bir araya getirmesine olanak tanır. Statik site oluşturucular bağlamında bu bileşenlere **şablonlar (templates)** denir. Statik site oluşturucular tarafından oluşturulan web sayfaları çerçeve uygulamalarına bile ev sahipliği yapabilir: örneğin statik olarak üretilmiş web sitenizin belirli bir sayfasının, kullanıcınız onu ziyaret ettiğinde bir React uygulamasını başlatmasını istiyorsanız bunu yapabilirsiniz.

Statik site oluşturucular oldukça uzun bir süredir piyasada bulunmaktadır ve sürekli optimizasyon ve yenilik altındadırlar. Çeşitli teknoloji yığınları (stacks) üzerine inşa edilen ve kendine özgü özellikler sunan [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) ve [Gatsby](https://www.gatsbyjs.com/) dahil olmak üzere bir dizi seçenek mevcuttur. [Docusaurus](https://docusaurus.io/) ve [VitePress](https://vitepress.dev/) gibi diğer seçenekler ise şablonlar yerine istemci tarafı çerçeveleri kullanır, ancak benzer şekilde optimize edilmiş statik dosyalar üretir.

Genel olarak statik site oluşturucular hakkında daha fazla bilgi edinmek isterseniz Tatiana Mac'in [Yeni başlayanlar için Eleventy kılavuzuna (Beginner's guide to Eleventy)](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/) göz atın. Serinin ilk makalesinde statik site oluşturucunun ne olduğunu ve web içeriği yayınlamanın diğer yollarıyla nasıl bir ilişkisi olduğunu açıklamaktadır.

### Özet

Ve bu bizi çerçevelere girişimizin sonuna getiriyor — size henüz hiç kod öğretmedik, ancak umarız daha en başta neden çerçeveleri kullanacağınıza ve bir tanesini seçmeye nasıl yaklaşacağınıza dair size yararlı bir arka plan vermiş ve daha fazlasını öğrenip işe koyulmak için sizi heyecanlandırmışızdır!

Bir sonraki makalemiz daha alt bir düzeye iniyor; çerçevelerin sunma eğiliminde olduğu belirli özellik türlerine ve neden çalıştıkları şekilde çalıştıklarına bakıyor.

---

## 35. Çerçevelerin Ana Özellikleri (Framework main features)

**Kaynak:** [Framework main features](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Main_features)

Her büyük JavaScript çerçevesinin DOM'u güncelleme, tarayıcı olaylarını işleme ve keyifli bir geliştirici deneyimi sunma konusunda farklı bir yaklaşımı vardır. Bu makale, çerçevelerin üst düzeyden nasıl çalışma eğiliminde olduğuna ve aralarındaki farklara bakarak "4 büyük" ("the big 4") çerçevenin ana özelliklerini keşfedecektir.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Çekirdek <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a> ve
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> dillerine aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>JavaScript çerçeveleri tarafından sağlanan ana özellikleri anlamak.</td>
    </tr>
  </tbody>
</table>

### Alana özgü diller (Domain-specific languages)

Çoğu çerçeve, uygulamalarınızı oluşturmak için alana özgü dilleri (domain-specific languages — DSL'ler) kullanmanıza olanak tanır. Özellikle React bileşenlerini yazmak için **JSX** kullanımını popülerleştirirken, Ember **Handlebars** kullanır. HTML'in aksine bu diller veri değişkenlerini nasıl okuyacaklarını bilirler ve bu veriler kullanıcı arayüzünüzü yazma sürecini kolaylaştırmak için kullanılabilir.

Angular uygulamaları sıklıkla **TypeScript**'i yoğun bir şekilde kullanır. TypeScript kullanıcı arayüzlerinin yazılmasıyla ilgilenmez, ancak alana özgü bir dildir ve sade (vanilla) JavaScript'e göre önemli farklılıkları vardır.

DSL'ler tarayıcı tarafından doğrudan okunamaz; önce JavaScript veya HTML'e dönüştürülmeleri gerekir. Çerçeve araçları (tooling) genellikle bu adımı ele almak için gereken araçları içerir veya bu adımı içerecek şekilde ayarlanabilir. Bu alana özgü dilleri kullanmadan çerçeve uygulamaları oluşturmak mümkün olsa da, onları benimsemek geliştirme sürecinizi kolaylaştıracak ve bu çerçevelerin etrafındaki topluluklardan yardım bulmayı daha kolay hale getirecektir.

#### JSX

JavaScript ve XML anlamına gelen [JSX](https://react.dev/learn/writing-markup-with-jsx), bir JavaScript ortamına HTML benzeri sözdizimi getiren bir JavaScript uzantısıdır. React uygulamalarında kullanılmak üzere React ekibi tarafından icat edilmiştir, ancak diğer uygulamaları — örneğin Vue uygulamalarını — geliştirmek için de kullanılabilir.

Aşağıda basit bir JSX örneği gösterilmektedir:

```jsx
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

Bu ifade, içinde bir [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) öğesi bulunan bir HTML [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header) öğesini temsil eder. `{subject}` etrafındaki süslü parantezler uygulamaya `subject` sabitinin değerini okumasını ve onu `<h1>` öğemizin içine eklemesini söyler.

React ile kullanıldığında, önceki kod parçacığındaki JSX şuna derlenecektir (compiled):

```js
const subject = "World";
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!"),
);
```

En sonunda tarayıcı tarafından işlendiğinde (rendered), yukarıdaki kod parçacığı şu şekilde görünen bir HTML üretecektir:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

#### Handlebars

[Handlebars](https://handlebarsjs.com/) şablonlama dili Ember uygulamalarına özgü değildir, ancak Ember uygulamalarında yoğun bir şekilde kullanılır. Handlebars kodu HTML'e benzer, ancak başka bir yerden veri çekme seçeneğine sahiptir. Bu veriler, bir uygulamanın en sonunda oluşturduğu HTML'i etkilemek için kullanılabilir.

JSX gibi Handlebars da bir değişkenin değerini enjekte etmek için süslü parantezler kullanır. Handlebars tek bir çift yerine çift süslü parantez (`{{ }}`) kullanır.

Şu Handlebars şablonu verildiğinde:

```html
<header>
  <h1>Hello, {{subject}}!</h1>
</header>
```

Ve şu veriler verildiğinde:

```json
{
  "subject": "World"
}
```

Handlebars şu şekilde HTML oluşturacaktır:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

#### TypeScript

[TypeScript](https://www.typescriptlang.org/), JavaScript'in bir _üst kümesidir (superset)_, yani JavaScript'i genişletir — tüm JavaScript kodları geçerli TypeScript'tir, ancak bunun tersi geçerli değildir. TypeScript, geliştiricilerin kodları üzerinde uygulayabilmelerine olanak tanıdığı katılık (strictness) açısından yararlıdır. Örneğin, `a` ve `b` tam sayılarını alan ve bunların toplamını döndüren bir `add()` fonksiyonunu düşünün.

JavaScript'te bu fonksiyon şu şekilde yazılabilir:

```js
function add(a, b) {
  return a + b;
}
```

Bu kod JavaScript'e alışkın biri için önemsiz görünebilir, ancak yine de daha net olabilirdi. JavaScript dizeleri birbirine birleştirmek (concatenate) için `+` operatörünü kullanmamıza izin verir, dolayısıyla `a` ve `b` birer dize olsaydı bu fonksiyon teknik olarak yine çalışırdı — yalnızca size beklediğiniz sonucu vermeyebilirdi. Peki ya bu fonksiyona yalnızca sayıların geçirilmesine izin vermek isteseydik? TypeScript bunu mümkün kılar:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Burada her parametreden sonra yazılan `: number` ifadesi TypeScript'e hem `a` hem de `b`'nin sayı olması gerektiğini söyler. Bu fonksiyonu kullanacak ve argüman olarak içine `'2'` geçirecek olsaydık, TypeScript derleme sırasında bir hata yükseltir ve hatamızı düzeltmeye zorlanırdık. Bizim için bu hataları yükselten kendi JavaScript kodumuzu yazabilirdik, ancak bu kaynak kodumuzu önemli ölçüde daha uzun ve ayrıntılı (verbose) hale getirirdi. Bu tür kontrolleri bizim yerimize TypeScript'in halletmesine izin vermek muhtemelen daha mantıklıdır.

### Bileşenleri yazmak

Önceki derste bahsedildiği gibi, çoğu çerçevenin bir tür bileşen (component) modeli vardır. React bileşenleri JSX ile, Ember bileşenleri Handlebars ile ve Angular ile Vue bileşenleri ise HTML'i hafifçe genişleten bir şablonlama sözdizimiyle yazılabilir.

Bileşenlerin nasıl yazılması gerektiğine dair görüşleri ne olursa olsun, her çerçevenin bileşenleri ihtiyaç duyabilecekleri harici özellikleri (properties), bileşenin yönetmesi gereken dahili durumu (internal state) ve bir kullanıcının bileşenin işaretlemesi (markup) üzerinde tetikleyebileceği olayları (events) tanımlamanın bir yolunu sunar.

Bu bölümün geri kalanındaki kod parçacıkları örnek olarak React'i kullanacak ve JSX ile yazılacaktır.

#### Özellikler (Properties)

Özellikler veya **props**, bir bileşenin işlenebilmesi (render) için ihtiyaç duyduğu harici verilerdir. Çevrim içi bir dergi için bir web sitesi oluşturduğunuzu ve katkıda bulunan her yazarın çalışması için adının geçtiğinden emin olmanız gerektiğini varsayalım. Her makaleye eşlik edecek bir `AuthorCredit` bileşeni oluşturabilirsiniz. Bu bileşenin yazarın bir portresini ve hakkında kısa bir yazar satırını (byline) görüntülemesi gerekir. Hangi resmi işleyeceğini ve hangi yazar satırını yazdıracağını bilmek için `AuthorCredit` bileşeninin bazı prop'ları kabul etmesi gerekir.

Bu `AuthorCredit` bileşeninin bir React temsili şuna benzer görünebilir:

```jsx
function AuthorCredit(props) {
  return (
    <figure>
      <img src={props.src} alt={props.alt} />
      <figcaption>{props.byline}</figcaption>
    </figure>
  );
}
```

`{props.src}`, `{props.alt}` ve `{props.byline}`, prop'larımızın bileşene ekleneceği yerleri temsil eder. Bu bileşeni işlemek için, işlenmesini istediğimiz yere (ki bu muhtemelen başka bir bileşenin içi olacaktır) şu şekilde kod yazarız:

```jsx
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

Bu, en sonunda tarayıcıda yapısı `AuthorCredit` bileşeninde tanımlandığı şekilde ve içeriği `AuthorCredit` bileşeni çağrısına dahil edilen prop'larda tanımlandığı şekilde olan aşağıdaki [`<figure>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figure) öğesini işleyecektir:

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
  <figcaption>Zelda Schiff is editor-in-chief of the Library Times.</figcaption>
</figure>
```

#### Durum (State)

Önceki bölümde **durum (state)** kavramından bahsetmiştik — sağlam bir durum işleme mekanizması etkili bir çerçevenin anahtarıdır ve her bileşen durumu kontrol edilmesi gereken verilere sahip olabilir. Bu durum, bileşen kullanımda olduğu sürece bir şekilde varlığını sürdürecektir. Prop'lar gibi durum da bir bileşenin nasıl işleneceğini etkilemek için kullanılabilir.

Örnek olarak, kendisine kaç kez tıklandığını sayan bir düğmeyi düşünün. Bu bileşen kendi _sayım (count)_ durumunu takip etmekten sorumlu olmalıdır ve şu şekilde yazılabilir:

```jsx
function CounterButton() {
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}
```

[`useState()`](https://react.dev/reference/react/useState), bir başlangıç veri değeri verildiğinde güncellendikçe o değeri takip edecek olan bir **[React kancasıdır (React hook)](https://react.dev/reference/react)**. Kod başlangıçta tarayıcıda şu şekilde işlenecektir:

```html
<button>Clicked 0 times</button>
```

`useState()` çağrısı, bunu kendiniz yapmak için kod yazmanıza gerek kalmadan uygulama genelinde `count` değerini sağlam bir şekilde takip eder.

#### Olaylar (Events)

Etkileşimli olabilmek için bileşenlerin tarayıcı olaylarına (events) yanıt verme yollarına ihtiyacı vardır, böylece uygulamalarımız kullanıcılarımıza yanıt verebilir. Çerçevelerin her biri, eşdeğer yerel tarayıcı olaylarının adlarına başvuran, tarayıcı olaylarını dinlemek için kendi sözdizimini sağlar.

React'te [`click`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) olayını dinlemek özel bir özellik olan `onClick` özelliğini gerektirir. Tıklamaları sayabilmesi için yukarıdaki `CounterButton` kodumuzu güncelleyelim:

```jsx
function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

Bu sürümde, `count` değerini güncellemek üzere çağırabileceğimiz özel bir `setCount()` fonksiyonu oluşturmak için ek `useState()` işlevselliğini kullanıyoruz. `count` değerini geçerli değeri neyse ona artı bir olarak ayarlamak için `onClick` olay işleyicisinin içinde bu fonksiyonu çağırıyoruz.

### Bileşenleri biçimlendirmek

Her çerçeve bileşenleriniz — veya bir bütün olarak uygulama — için stiller tanımlamanın bir yolunu sunar. Her çerçevenin bir bileşenin stillerini tanımlama yaklaşımı biraz farklı olsa da, hepsi size bunu yapmanın birden çok yolunu verir. Bazı yardımcı modüllerin eklenmesiyle çerçeve uygulamalarınızı [Sass](https://sass-lang.com/) veya [Less](https://lesscss.org/) ile biçimlendirebilir ya da CSS stil sayfalarınızı [PostCSS](https://postcss.org/) ile dönüştürebilirsiniz (transpile).

### Bağımlılıkları işlemek

Tüm büyük çerçeveler bağımlılıkları (dependencies) işlemek — bazen birden çok hiyerarşi düzeyiyle, diğer bileşenlerin içinde bileşenler kullanmak — için mekanizmalar sağlar. Diğer özelliklerde olduğu gibi tam mekanizma çerçeveler arasında farklılık gösterecektir, ancak nihai sonuç aynıdır. Bileşenler standart [JavaScript modül sözdizimini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) veya en azından benzer bir şeyi kullanarak bileşenleri diğer bileşenlerin içine aktarma (`import`) eğilimindedir.

#### Bileşenlerin içinde bileşenler

Bileşen tabanlı kullanıcı arayüzü mimarisinin en önemli faydalarından biri bileşenlerin bir araya getirilebilmesidir (composed). Tıpkı bir web sitesi oluşturmak için HTML etiketlerini birbirinin içine yazabildiğiniz gibi, bir web uygulaması oluşturmak için de bileşenleri diğer bileşenlerin içinde kullanabilirsiniz. Her çerçeve, diğer bileşenleri kullanan (ve dolayısıyla onlara bağımlı olan) bileşenler yazmanıza olanak tanır.

Örneğin, `AuthorCredit` React bileşenimiz bir `Article` bileşeninin içinde kullanılabilir. Bu, `Article` bileşeninin `AuthorCredit` bileşenini içe aktarması (`import`) gerekeceği anlamına gelir.

```js
import AuthorCredit from "./components/AuthorCredit";
```

Bu yapıldıktan sonra `AuthorCredit`, `Article` bileşeninin içinde şu şekilde kullanılabilir:

```jsx
<Article>
  <AuthorCredit />
</Article>
```

#### Bağımlılık enjeksiyonu (Dependency injection)

Gerçek dünya uygulamaları çoğu zaman birden çok iç içe geçme (nesting) düzeyine sahip bileşen yapılarını içerebilir. Çok derin düzeylerde iç içe geçmiş bir `AuthorCredit` bileşeni, bir nedenden dolayı uygulamamızın en kök düzeyinden verilere ihtiyaç duyabilir.

Oluşturduğumuz dergi sitesinin şu şekilde yapılandırıldığını varsayalım:

```jsx
<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>
```

`App` bileşenimiz, `AuthorCredit` bileşenimizin ihtiyaç duyduğu verilere sahiptir. Prop'ları aşağıya geçirmeyi bilmeleri için `Home` ve `Article` bileşenlerini yeniden yazabilirdik, ancak verilerimizin kaynağı ile hedefi arasında çok ama çok fazla düzey varsa bu sıkıcı bir hal alabilir. Ayrıca aşırıdır da: `Home` ve `Article` aslında yazarın portresini veya yazar satırını kullanmaz, ancak bu bilgiyi `AuthorCredit` içine almak istiyorsak buna uyum sağlamaları için `Home` ve `Article` bileşenlerini değiştirmemiz gerekecektir.

Verileri pek çok bileşen katmanı üzerinden geçirme sorununa prop delme (prop drilling) denir ve büyük uygulamalar için ideal değildir.

Prop delmeyi aşmak için çerçeveler, aradaki düzeylerden geçirmeden belirli verileri doğrudan onlara ihtiyaç duyan bileşenlere ulaştırmanın bir yolu olan bağımlılık enjeksiyonu (dependency injection) olarak bilinen işlevselliği sağlar. Her çerçeve bağımlılık enjeksiyonunu farklı bir ad altında ve farklı bir şekilde uygular, ancak etkisi en sonunda aynıdır.

Angular bu sürece [bağımlılık enjeksiyonu (dependency injection)](https://angular.dev/guide/di/dependency-injection) adını verir; Vue'nun [`provide()` ve `inject()` bileşen metotları](https://v2.vuejs.org/v2/api/#provide-inject) vardır; React'in bir [Context API'si](https://react.dev/learn/passing-data-deeply-with-context) vardır; Ember ise durumu [hizmetler (services)](https://guides.emberjs.com/release/services/) aracılığıyla paylaşır.

#### Yaşam döngüsü (Lifecycle)

Bir çerçeve bağlamında bir bileşenin **yaşam döngüsü (lifecycle)**, bir bileşenin DOM'a eklendiği ve ardından tarayıcı tarafından işlendiği (sıklıkla _bağlanma — mounting_ olarak adlandırılır) zamandan DOM'dan kaldırıldığı (sıklıkla _ayrılma — unmounting_ olarak adlandırılır) zamana kadar geçtiği aşamaların bir koleksiyonudur. Her çerçeve bu yaşam döngüsü aşamalarını farklı adlandırır ve hepsi geliştiricilere aynı aşamalara erişim vermez. Tüm çerçeveler aynı genel modeli izler: geliştiricilerin bileşen _bağlandığında (mounts)_, _işlendiğinde (renders)_, _ayrıldığında (unmounts)_ ve bunların arasındaki pek çok aşamada belirli eylemleri gerçekleştirmesine olanak tanırlar.

Kullanıcınız uygulamanızla etkileşime girdikçe en çok kez tekrarlandığı için anlaşılması en kritik aşama _işleme (render)_ aşamasıdır. Bu yeni bilgi ister tarayıcıda olana bir ekleme, ister bir silme, isterse orada olanın bir düzenlemesi olsun, tarayıcının yeni bir şey işlemesi gereken her seferde çalıştırılır.

[Bir React bileşeninin yaşam döngüsüne ait bu şema](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/), kavram hakkında genel bir bakış sunar.

### Öğeleri işlemek

Tıpkı yaşam döngülerinde olduğu gibi, çerçeveler uygulamalarınızı nasıl işledikleri (render) konusunda da farklı ama benzer yaklaşımlar benimser. Hepsi tarayıcınızın DOM'unun o anda işlenmiş sürümünü takip eder ve her biri uygulamanızdaki bileşenler yeniden işlendikçe DOM'un nasıl değişmesi gerektiği konusunda biraz farklı kararlar alır. Çerçeveler bu kararları sizin yerinize aldığı için tipik olarak DOM ile kendiniz etkileşime girmezsiniz. DOM'dan bu soyutlama, DOM'u kendiniz güncellemekten daha karmaşık ve bellek açısından daha yoğundur; ancak bu olmasaydı çerçeveler bilindikleri bildirimsel (declarative) şekilde programlama yapmanıza izin veremezdi.

**Sanal DOM (Virtual DOM)**, tarayıcınızın DOM'u hakkındaki bilgilerin JavaScript belleğinde saklandığı bir yaklaşımdır. Uygulamanız DOM'un bu kopyasını günceller, ardından neyi işleyeceğine karar vermek için onu "gerçek" DOM ile — kullanıcılarınız için gerçekte işlenen DOM ile — karşılaştırır. Uygulama, güncellenen sanal DOM ile o anda işlenmiş olan DOM arasındaki farkları karşılaştırmak için bir "fark" ("diff") oluşturur ve gerçek DOM'a güncellemeler uygulamak için bu farkı kullanır. Hem React hem de Vue bir sanal DOM modeli kullanır, ancak farkları bulurken (diffing) veya işlerken (rendering) birebir aynı mantığı uygulamazlar.

[React belgelerinde Sanal DOM hakkında daha fazlasını okuyabilirsiniz](https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom).

**Artımlı DOM (Incremental DOM)**, neyi işleyeceğine karar vermek için bir DOM farkı oluşturması bakımından sanal DOM'a benzer, ancak JavaScript belleğinde DOM'un tam bir kopyasını oluşturmaması bakımından farklıdır. DOM'un değiştirilmesi gerekmeyen bölümlerini yok sayar. Angular, bu modülde şimdiye kadar tartışılan çerçeveler arasında artımlı DOM kullanan tek çerçevedir.

[Auth0 blogunda Artımlı DOM hakkında daha fazlasını okuyabilirsiniz](https://auth0.com/blog/incremental-dom/).

**Glimmer VM**, Ember'a özgüdür. Ne bir sanal DOM ne de bir artımlı DOM'dur; Ember'ın şablonlarının JavaScript'ten daha kolay ve daha hızlı okunabilen bir tür "bayt koduna" ("byte code") dönüştürüldüğü (transpiled) ayrı bir süreçtir.

### Yönlendirme

[Önceki bölümde bahsedildiği gibi yönlendirme (routing)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#routing), web deneyiminin önemli bir parçasıdır. Çok sayıda görünüme (views) sahip yeterince karmaşık uygulamalarda bozuk bir deneyimden kaçınmak için, bu modülde ele alınan çerçevelerin her biri geliştiricilerin uygulamalarında istemci tarafı yönlendirmeyi uygulamalarına yardımcı olan bir kütüphane (veya birden fazla kütüphane) sağlar.

### Test etme

Tüm uygulamalar, yazılımınızın beklediğiniz şekilde davranmaya devam etmesini sağlayan test kapsamından (test coverage) fayda görür ve web uygulamaları da farklı değildir. Her çerçevenin ekosistemi, testlerin yazılmasını kolaylaştıran araçlar sağlar. Test araçları çerçevelerin kendilerine yerleşik değildir, ancak çerçeve uygulamaları üretmek için kullanılan komut satırı arayüzü araçları uygun test araçlarına erişmenizi sağlar.

Her çerçevenin ekosisteminde hem birim (unit) hem de entegrasyon (integration) testleri için yeteneklere sahip kapsamlı araçlar vardır.

[Testing Library](https://testing-library.com/), React, Vue ve Angular dahil olmak üzere pek çok JavaScript ortamı için araçlara sahip bir test yardımcı programları paketidir. Ember belgeleri [Ember uygulamalarının test edilmesini](https://guides.emberjs.com/release/testing/) kapsar.

İşte React Testing Library yardımıyla yazılan `CounterButton` bileşenimiz için hızlı bir test — düğmenin varlığı ve düğmenin 0, 1 ve 2 kez tıklandıktan sonra doğru metni görüntüleyip görüntülemediği gibi bir dizi şeyi test eder:

```jsx
import { fireEvent, render, screen } from "@testing-library/react";

import CounterButton from "./CounterButton";

it("Renders a semantic button with an initial state of 0", () => {
  render(<CounterButton />);
  const btn = screen.getByRole("button");

  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Clicked 0 times");
});

it("Increments the count when clicked", () => {
  render(<CounterButton />);
  const btn = screen.getByRole("button");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 1 times");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 2 times");
});
```

### Özet

Bu noktada, çerçevelerle uygulamalar oluştururken kullanacağınız gerçek diller, özellikler ve araçlar hakkında daha fazla fikre sahip olmalısınız. Harekete geçmek ve gerçekten biraz kod yazmak için hevesli olduğunuzdan eminim; bir sonraki adımda yapacağınız şey de tam olarak bu!

---

## 36. React'e Başlarken (Getting started with React)

**Kaynak:** [Getting started with React](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)

Bu makalede React'e merhaba diyeceğiz. Arka planı ve kullanım durumları hakkında biraz ayrıntı keşfedecek, yerel bilgisayarımızda temel bir React araç zinciri (toolchain) kuracak ve bu süreçte React'in nasıl çalıştığı hakkında biraz bilgi edinerek basit bir başlangıç uygulaması oluşturup onunla oynayacağız.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Çekirdek <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a> ve
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> dillerine ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">terminale/komut satırına</a> aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
          Yerel bir React geliştirme ortamı kurmak, bir başlangıç uygulaması oluşturmak ve nasıl çalıştığının temellerini anlamak.
      </td>
    </tr>
  </tbody>
</table>

### Merhaba React

Resmî sloganında belirtildiği gibi, [React](https://react.dev/) kullanıcı arayüzleri oluşturmaya yönelik bir kütüphanedir. React bir çerçeve (framework) değildir – web'e bile özel değildir. Belirli ortamlarda işleme (render) yapmak için diğer kütüphanelerle birlikte kullanılır. Örneğin, mobil uygulamalar oluşturmak için [React Native](https://reactnative.dev/) kullanılabilir.

Web için üretim yapmak amacıyla geliştiriciler React'i [ReactDOM](https://react.dev/reference/react-dom) ile birlikte kullanır. React ve ReactDOM sıklıkla diğer gerçek web geliştirme çerçeveleriyle aynı alanlarda tartışılır — ve aynı sorunları çözmek için kullanılır. React'ten bir "çerçeve" olarak bahsettiğimizde, bu günlük dildeki anlayışla çalışıyoruz demektir.

React'in birincil amacı, geliştiriciler kullanıcı arayüzleri oluştururken meydana gelen hataları (bugs) en aza indirmektir. Bunu bileşenlerin (components) — kullanıcı arayüzünün bir bölümünü tanımlayan, kendi kendine yeten, mantıksal kod parçalarının — kullanımı yoluyla yapar. Bu bileşenler tam bir kullanıcı arayüzü oluşturmak üzere bir araya getirilebilir ve React işleme çalışmasının büyük kısmını soyutlayarak sizin kullanıcı arayüzü tasarımına yoğunlaşmanızı sağlar.

### Kullanım durumları

Bu modülde ele alınan diğer çerçevelerin aksine React, kod kuralları veya dosya organizasyonu etrafında katı kurallar dayatmaz. Bu, ekiplerin kendileri için en iyi çalışan kuralları belirlemelerine ve React'i istedikleri herhangi bir şekilde benimsemelerine olanak tanır. React tek bir düğmeyi, bir arayüzün birkaç parçasını veya bir uygulamanın tüm kullanıcı arayüzünü ele alabilir.

React [bir arayüzün küçük parçaları](https://react.dev/learn/add-react-to-an-existing-project) için _kullanılabilse_ de, bir uygulamaya jQuery gibi bir kütüphane ve hatta Vue gibi bir çerçeve kadar kolayca "eklenip bırakılamaz" — tüm uygulamanızı React ile oluşturduğunuzda daha yaklaşılabilirdir.

Buna ek olarak, bir React uygulamasının JSX ile arayüzler yazmak gibi geliştirici deneyimi faydalarının birçoğu bir derleme (compilation) süreci gerektirir. Bir web sitesine Babel gibi bir derleyici eklemek üzerindeki kodun yavaş çalışmasına neden olur, bu nedenle geliştiriciler bu tür araçları çoğu zaman bir derleme adımıyla (build step) kurarlar. React tartışmasız ağır bir araç gereksinimine sahiptir, ancak öğrenilebilir.

Bu makale, modern bir ön yüz derleme aracı olan [Vite](https://vite.dev/) desteğiyle bir uygulamanın tüm kullanıcı arayüzünü işlemek için React kullanma kullanım durumuna odaklanacaktır.

### React, JavaScript'i nasıl kullanır?

React, kalıplarının birçoğu için modern JavaScript özelliklerini kullanır. JavaScript'ten en büyük ayrılışı [JSX](https://react.dev/learn/writing-markup-with-jsx) sözdiziminin kullanımıyla gelir. JSX, HTML benzeri kodun onunla yan yana yaşayabilmesi için JavaScript'in sözdizimini genişletir. Örneğin:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Bu heading sabiti bir **JSX ifadesi (JSX expression)** olarak bilinir. React, uygulamamızda o [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) etiketini işlemek için bunu kullanabilir.

Anlamsal (semantic) nedenlerle başlığımızı bir [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header) etiketi içine sarmalamak istediğimizi varsayalım? JSX yaklaşımı, tıpkı HTML'de yaptığımız gibi öğelerimizi birbirinin içine yerleştirmemize (nest) olanak tanır:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Önceki kod parçacığındaki parantezler JSX'e özgü değildir ve uygulamanız üzerinde hiçbir etkisi yoktur. Size (ve bilgisayarınıza) içerideki birden çok kod satırının aynı ifadenin parçası olduğunu bildiren bir işarettirler. Header ifadesini aynı şekilde şöyle de yazabilirdiniz:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Ancak bu biraz tuhaf görünür, çünkü ifadeyi başlatan [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header) etiketi karşılık gelen kapanış etiketiyle aynı konuma girintilenmemiştir (indented).

Elbette tarayıcınız yardım olmadan JSX'i okuyamaz. Derlendiğinde ([Babel](https://babeljs.io/) veya [Parcel](https://parceljs.org/) gibi bir araç kullanılarak), header ifademiz şu şekilde görünecektir:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Derleme adımını atlamak ve kullanıcı arayüzünüzü kendiniz yazmak için [`React.createElement()`](https://react.dev/reference/react/createElement) kullanmak _mümkündür_. Ancak bunu yaptığınızda JSX'in bildirimsel (declarative) faydasını kaybedersiniz ve kodunuzun okunması daha zor hale gelir. Derleme, geliştirme sürecinde fazladan bir adımdır, ancak React topluluğundaki pek çok geliştirici JSX'in okunabilirliğinin buna değdiğini düşünmektedir. Artı, modern ön yüz geliştirme zaten neredeyse her zaman bir derleme süreci içerir — daha eski tarayıcılarla uyumlu olması için modern sözdizimini alt seviyeye indirmeniz (downlevel) gerekir ve yükleme performansını optimize etmek için kodunuzu [küçültmek (minify)](https://developer.mozilla.org/en-US/docs/Glossary/Minification) isteyebilirsiniz. Babel gibi popüler araçlar kutudan çıktığı haliyle zaten JSX desteğiyle birlikte gelir, dolayısıyla kendiniz istemediğiniz sürece derlemeyi yapılandırmak zorunda kalmazsınız.

JSX, HTML ve JavaScript'in bir karışımı olduğu için bazı geliştiriciler onu sezgisel bulur. Diğerleri ise karma doğasının onu kafa karıştırıcı hale getirdiğini söyler. Ancak bir kez alıştığınızda, kullanıcı arayüzlerini daha hızlı ve sezgisel bir şekilde oluşturmanıza olanak tanıyacak ve başkalarının kod tabanınızı bir bakışta daha iyi anlamasını sağlayacaktır.

JSX hakkında daha fazlasını okumak için React ekibinin [JSX ile İşaretleme Yazmak (Writing Markup with JSX)](https://react.dev/learn/writing-markup-with-jsx) makalesine göz atın.

### İlk React uygulamanızı kurmak

Yeni bir React uygulaması oluşturmanın pek çok yolu vardır. Komut satırı aracılığıyla yeni bir uygulama oluşturmak için Vite'ı kullanacağız.

Bir HTML dosyasına bazı [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) öğeleri kopyalayarak [mevcut bir projeye React eklemek](https://react.dev/learn/add-react-to-an-existing-project) mümkündür, ancak Vite kullanmak uygulamanızı oluşturmaya daha fazla zaman ayırmanıza ve kurulumla uğraşmaya daha az zaman harcamanıza olanak tanıyacaktır.

> [!NOTE]
> Scrimba'nın [İlk React Kodu (First React Code)](https://scrimba.com/learn-react-c0e/~03uo?via=mdn) <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> etkileşimli dersini (scrim) çalışarak _hiçbir_ yerel kurulum yapmadan React kodu yazmaya başlayabilirsiniz.
> Devam etmeden önce denemekten çekinmeyin.

#### Gereksinimler

Vite'ı kullanabilmek için [Node.js](https://nodejs.org/en/)'in kurulu olması gerekir. Vite 5.0 itibarıyla en az Node sürüm 18 veya sonrası gereklidir ve mümkün olduğunda en son uzun süreli destek (long term support — LTS) sürümünü çalıştırmak iyi bir fikirdir. 24 Ekim 2023 itibarıyla Node 20 en son LTS sürümüdür. Node, npm'i (Node paket yöneticisi) içerir.

Node sürümünüzü kontrol etmek için terminalinizde aşağıdakini çalıştırın:

```bash
node -v
```

Node kuruluysa bir sürüm numarası görürsünüz. Kurulu değilse bir hata mesajı görürsünüz. Node'u kurmak için [Node.js web sitesindeki](https://nodejs.org/en/) talimatları izleyin.

npm'e alternatif olarak Yarn paket yöneticisini kullanabilirsiniz, ancak bu eğitim dizisinde npm kullandığınızı varsayacağız. npm ve yarn hakkında daha fazla bilgi için [Paket yönetimi temelleri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) sayfasına bakın.

Windows kullanıyorsanız, bu eğitimde bahsedilen terminal komutlarını kullanabilmek amacıyla Unix/macOS terminaliyle eşdeğerlik sağlamak için bazı yazılımlar kurmanız gerekecektir. **Git Bash** ([git for Windows araç setinin](https://gitforwindows.org/) bir parçası olarak gelir) veya **[Linux için Windows Alt Sistemi (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) uygundur. Bunlar ve genel olarak terminal komutları hakkında daha fazla bilgi için [Komut satırı hızlandırılmış kursu](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) makalesine bakın.

Ayrıca bu eğitimler üzerinde çalışırken React ve ReactDOM'un yalnızca Firefox, Microsoft Edge, Safari veya Chrome gibi oldukça modern bir tarayıcı kümesinde çalışan uygulamalar ürettiğini de aklınızda bulundurun.

Daha fazla bilgi için aşağıdakilere bakın:

- [npm blogunda "npm Hakkında" ("About npm")](https://docs.npmjs.com/about-npm/)
- [npm blogunda "npx ile Tanışın" ("Introducing npx")](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vite belgeleri](https://vite.dev/guide/)

#### Uygulamanızı başlatmak

npm paket yöneticisi, şablonlardan yeni projeler oluşturmanıza olanak tanıyan bir `create` komutuyla birlikte gelir. Vite'ın standart React şablonundan yeni bir uygulama oluşturmak için bunu kullanabiliriz. Makinenizde uygulamanızın yaşamasını istediğiniz yere `cd` ile gittiğinizden emin olun, ardından terminalinizde aşağıdakini çalıştırın:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Bu komut, Vite'ın `react` şablonunu kullanarak bir `moz-todo-react` dizini oluşturur.

> [!NOTE]
> `create` gibi npm komutlarına argümanlar geçirmek için `--` gereklidir ve `--template react` argümanı Vite'a React şablonunu kullanmasını söyler.

Bu komut başarılı olduysa terminaliniz bazı mesajlar yazdırmış olacaktır. Yeni dizininize `cd` ile gitmenizi, uygulamanın bağımlılıklarını yüklemenizi ve uygulamayı yerel olarak çalıştırmanızı isteyen bir metin görmelisiniz. Bu komutlardan ikisiyle başlayalım. Terminalinizde aşağıdakini çalıştırın:

```bash
cd moz-todo-react && npm install
```

İşlem tamamlandığında, uygulamamızı çalıştırmak için yerel bir geliştirme sunucusu başlatmamız gerekir. Burada, sunucu başlar başlamaz uygulamayı tarayıcımızda açmak ve 3000 numaralı bağlantı noktasını (port) kullanmak için Vite'ın varsayılan önerisine bazı komut satırı bayrakları (flags) ekleyeceğiz.

Terminalinizde aşağıdakini çalıştırın:

```bash
npm run dev -- --open --port 3000
```

Sunucu başladığında, React uygulamanızı içeren yeni bir tarayıcı sekmesi görmelisiniz:

![Vite'ın React şablonundan yapılmış bir uygulamayı gösteren, localhost:3000 adresine açık macOS Firefox ekran görüntüsü](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/frameworks_libraries/react_getting_started/default-vite.png)

#### Uygulama yapısı

Vite bize bir React uygulaması geliştirmek için ihtiyacımız olan her şeyi verir. Başlangıç dosya yapısı şu şekilde görünür:

```plain
moz-todo-react
├── README.md
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

**`index.html`** en önemli üst düzey dosyadır. Vite, tarayıcınızın çalıştırabilmesi için kodunuzu bu dosyaya enjekte eder. Eğitimimiz sırasında bu dosyayı düzenlemeniz gerekmeyecektir, ancak uygulamanızın başlığını yansıtması için bu dosyadaki [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title) öğesinin içindeki metni değiştirmelisiniz. Doğru sayfa başlıkları erişilebilirlik için önemlidir.

**`public`** dizini, Vite'ın derleme araçları tarafından işlenmeden doğrudan tarayıcınıza sunulacak statik dosyaları içerir. Şu anda yalnızca bir Vite logosu içermektedir.

**`src`** dizini, uygulamamızın kaynak kodunun yaşadığı yer olduğu için zamanımızın çoğunu geçireceğimiz yerdir. Bu dizindeki bazı JavaScript dosyalarının `.jsx` uzantısıyla bittiğini fark edeceksiniz. Bu uzantı JSX içeren her dosya için gereklidir – Vite'a JSX sözdizimini tarayıcınızın anlayabileceği JavaScript'e dönüştürmesini söyler. `src/assets` dizini tarayıcıda gördüğünüz React logosunu içerir.

`package.json` ve `package-lock.json` dosyaları projemiz hakkında üst veriler (metadata) içerir. Bu dosyalar React uygulamalarına özgü değildir: Vite bizim için `package.json` dosyasını doldurdu ve npm de uygulamanın bağımlılıklarını yüklediğimizde `package-lock.json` dosyasını oluşturdu. Bu eğitimi tamamlamak için bu dosyaları hiç anlamanıza gerek yoktur. Ancak onlar hakkında daha fazla bilgi edinmek isterseniz npm belgelerinde [`package.json`](https://docs.npmjs.com/cli/configuring-npm/package-json/) ve [`package-lock.json`](https://docs.npmjs.com/cli/configuring-npm/package-lock-json/) hakkında okuyabilirsiniz. Ayrıca [Paket yönetimi temelleri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) eğitimimizde de `package.json` dosyasından bahsediyoruz.

#### dev betiğimizi özelleştirmek

Devam etmeden önce, `npm run dev` komutunu her çalıştırdığınızda `--open` ve `--port` bayraklarını geçirmek zorunda kalmamak için `package.json` dosyanızı biraz değiştirmek isteyebilirsiniz. Metin düzenleyicinizde `package.json` dosyasını açın ve `scripts` nesnesini bulun. `"dev"` anahtarını şu şekilde görünecek biçimde değiştirin:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Bu yerindeyken, `npm run dev` komutunu her çalıştırdığınızda uygulamanız tarayıcınızda `http://localhost:3000` adresinde açılacaktır.

> [!NOTE]
> Burada fazladan `--` işaretine ihtiyacınız _yoktur_, çünkü argümanları önceden tanımlanmış bir npm betiği yerine doğrudan `vite` komutuna geçiriyoruz.

### İlk React bileşenimizi keşfetmek — `<App />`

React'te bir **bileşen (component)**, genel uygulamamızın bir bölümünü işleyen yeniden kullanılabilir bir modüldür. Bileşenler büyük veya küçük olabilir, ancak genellikle net bir şekilde tanımlanırlar: tek ve bariz bir amaca hizmet ederler.

Tarayıcımız bizden onu düzenlememizi istediği için `src/App.jsx` dosyasını açalım. Bu dosya ilk bileşenimiz olan `<App />` bileşenini içerir:

```jsx
import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
```

`App.jsx` dosyası üç ana bölümden oluşur: en üstte bazı [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) deyimleri, ortada `App()` fonksiyonu ve en altta bir [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) deyimi. Çoğu React bileşeni bu kalıbı izler.

#### İçe aktarma (Import) deyimleri

Dosyanın en üstündeki `import` deyimleri, `App.jsx` dosyasının başka bir yerde tanımlanmış kodu kullanmasına olanak tanır. Bu deyimlere daha yakından bakalım.

```jsx
import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
```

İlk deyim `react` kütüphanesinden `useState` kancasını (hook) içe aktarır. Kancalar, bir bileşenin içinde React'in özelliklerini kullanmanın bir yoludur. Bu eğitimin ilerleyen kısımlarında kancalar hakkında daha fazla konuşacağız.

Ondan sonra `reactLogo` ve `viteLogo` dosyalarını içe aktarırız. İçe aktarma yollarının sırasıyla `./` ve `/` ile başladığına ve sonunda `.svg` uzantısıyla bittiğine dikkat edin. Bu bize bu içe aktarmaların _yerel (local)_ olduğunu, yani npm paketlerine değil kendi dosyalarımıza başvurduğunu söyler.

Son deyim `<App />` bileşenimizle ilgili CSS'i içe aktarır. Hiçbir değişken adı ve `from` yönergesi olmadığına dikkat edin. Buna [_yan etki içe aktarması (side-effect import)_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) denir — JavaScript dosyasına herhangi bir değer aktarmaz, ancak tarayıcıda kullanılabilmesi için Vite'a başvurulan CSS dosyasını nihai kod çıktısına eklemesini söyler.

#### `App()` fonksiyonu

İçe aktarmalardan sonra, `App` bileşeninin yapısını tanımlayan `App()` adlı bir fonksiyonumuz vardır. JavaScript topluluğunun çoğunluğu `helloWorld` gibi [küçük deve hörgücü yazımı (lower camel case)](https://developer.mozilla.org/en-US/docs/Glossary/Camel_case) adları tercih ederken, React bileşenleri belirli bir JSX öğesinin normal bir HTML etiketi değil bir React bileşeni olduğunu netleştirmek için `HelloWorld` gibi Pascal yazımı (Pascal case veya büyük deve hörgücü yazımı — upper camel case) değişken adları kullanır. `App()` fonksiyonunu `app()` olarak yeniden adlandıracak olsaydınız tarayıcınız bir hata fırlatırdı.

`App()` fonksiyonuna daha yakından bakalım.

```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
```

`App()` fonksiyonu bir JSX ifadesi döndürür. Bu ifade, tarayıcınızın en sonunda DOM'da ne işleyeceğini tanımlar.

`return` anahtar sözcüğünün hemen altında özel bir sözdizimi parçası vardır: `<>`. Bu bir [parçadır (fragment)](https://react.dev/reference/react/Fragment). React bileşenleri tek bir JSX öğesi döndürmek zorundadır ve parçalar (fragments) tarayıcıda rastgele `<div>` öğeleri işlemeden bunu yapmamıza olanak tanır. Pek çok React uygulamasında parçaları göreceksiniz.

#### `export` deyimi

`App()` fonksiyonundan sonra bir kod satırı daha vardır:

```jsx
export default App;
```

Bu dışa aktarma (`export`) deyimi, `App()` fonksiyonumuzu diğer modüller için kullanılabilir hale getirir. Daha sonra bu konuda daha fazla konuşacağız.

### `main` dosyasına geçmek

`<App />` bileşeninin kullanıldığı yer orası olduğu için `src/main.jsx` dosyasını açalım. Bu dosya uygulamamızın giriş noktasıdır ve başlangıçta şu şekilde görünür:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

`App.jsx` dosyasında olduğu gibi, dosya çalışmak için ihtiyaç duyduğu tüm JavaScript modüllerini ve diğer varlıkları içe aktararak başlar.

İlk iki deyim, dosyada daha sonra başvuruldukları için `react` ve `react-dom` kütüphanelerinden `StrictMode` ve `createRoot` öğelerini içe aktarır. Bu kütüphaneleri içe aktarırken bir yol veya uzantı yazmayız çünkü bunlar yerel dosyalar değildir. Aslında `package.json` dosyamızda bağımlılıklar (dependencies) olarak listelenmişlerdir. Bu dersi çalışırken bu ayrıma dikkat edin!

Ardından `App()` fonksiyonumuzu ve tüm uygulamamıza uygulanan küresel stilleri tutan `index.css` dosyasını içe aktarırız.

Sonra uygulamamızın kök düğümünü (root node) tanımlayan `createRoot()` fonksiyonunu çağırırız. Bu fonksiyon, React uygulamamızın içinde işlenmesini istediğimiz DOM öğesini argüman olarak alır. Bu durumda bu, ID değeri `root` olan DOM öğesidir. Son olarak, kökümüzün içinde işlemek istediğimiz JSX ifadesini ona geçirerek `render()` metodunu `createRoot()` çağrısına zincirleriz. Bu JSX ifadesi olarak `<App />` yazarak React'e kök düğümün içinde `App` _bileşenini_ işleyen `App()` _fonksiyonunu_ çağırmasını söylüyoruz.

> [!NOTE]
> `<App />`, özel bir `<React.StrictMode>` bileşeninin içinde işlenir. Bu bileşen geliştiricilerin kodlarındaki olası sorunları yakalamasına yardımcı olur.

İsterseniz bu React API'leri hakkında bilgi edinebilirsiniz:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

### Temiz bir başlangıç yapmak

Uygulamamızı oluşturmaya başlamadan önce Vite'ın bizim için sağladığı kalıp kodların (boilerplate code) bir kısmını sileceğiz.

İlk olarak, bir deney olarak `App.jsx` içindeki [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) öğesini "Hello, World!" yazacak şekilde değiştirin, ardından dosyanızı kaydedin. Bu değişikliğin tarayıcınızda `http://localhost:3000` adresinde çalışan geliştirme sunucusunda hemen işlendiğini fark edeceksiniz. Uygulamanız üzerinde çalışırken bunu aklınızda bulundurun.

Kodun geri kalanını kullanmayacağız! `App.jsx` içeriğini aşağıdakiyle değiştirin:

```jsx
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Hello, World!</h1>
      </header>
    </>
  );
}

export default App;
```

### JSX ile pratik yapmak

Ardından, JSX yazma ve React'te verilerle çalışma konusunda biraz daha rahat hale gelmek için JavaScript becerilerimizi kullanacağız. JSX öğelerine nasıl öznitelik (attributes) ekleneceği, nasıl yorum satırı yazılacağı, değişkenlerden ve diğer ifadelerden içeriğin nasıl işleneceği ve prop'larla bileşenlere nasıl veri geçirileceği hakkında konuşacağız.

#### JSX öğelerine öznitelik eklemek

JSX öğeleri de tıpkı HTML öğeleri gibi özniteliklere sahip olabilir. `App.jsx` dosyanızdaki `<h1>` öğesinin altına şu şekilde bir `<button>` eklemeyi deneyin:

```jsx
<button type="button">Click me!</button>
```

Dosyanızı kaydettiğinizde üzerinde `Click me!` kelimeleri bulunan bir düğme göreceksiniz. Düğme henüz hiçbir şey yapmıyor, ancak yakında uygulamamıza etkileşim ekleme hakkında bilgi edineceğiz.

Bazı öznitelikler HTML karşılıklarından farklıdır. Örneğin HTML'deki `class` özniteliği JSX'te `className` olarak çevrilir. Bunun nedeni `class` kelimesinin JavaScript'te ayrılmış bir sözcük (reserved word) olması ve JSX'in bir JavaScript uzantısı olmasıdır. Düğmenize bir `primary` sınıfı eklemek isteseydiniz bunu şu şekilde yazardınız:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

#### İçerik olarak JavaScript ifadeleri

HTML'in aksine JSX, değişkenleri ve diğer JavaScript ifadelerini diğer içeriklerimizle yan yana yazmamıza olanak tanır. `App.jsx` dosyanızdaki `App()` fonksiyonunun hemen üstünde `subject` adlı bir değişken bildirelim:

```jsx
const subject = "React";
function App() {
  // code omitted for brevity
}
```

Ardından, `<h1>` öğesindeki "World" kelimesini `{subject}` ile değiştirin:

```jsx
<h1>Hello, {subject}!</h1>
```

Dosyanızı kaydedin ve tarayıcınızı kontrol edin. "Hello, React!" ifadesinin işlendiğini görmelisiniz.

`subject` etrafındaki süslü parantezler JSX sözdiziminin bir başka özelliğidir. Süslü parantezler React'e birebir `"subject"` dizesini işlemek yerine `subject` değişkeninin değerini okumak istediğimizi söyler. JSX'te süslü parantezlerin içine geçerli herhangi bir JavaScript ifadesi koyabilirsiniz; React onu değerlendirecek ve ifadenin _sonucunu_ nihai içerik olarak işleyecektir. Aşağıda, üstlerinde her ifadenin ne işleyeceğini açıklayan yorum satırlarıyla birlikte bir dizi örnek yer almaktadır:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {`${subject} :)`}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

JSX'te yorum satırları bile süslü parantezlerin içine yazılır! Bunun nedeni süslü parantezlerin tek bir JavaScript ifadesi içerebilmesi ve yorum satırlarının bir JavaScript ifadesinin parçası olarak geçerli olmasıdır (ve yok sayılırlar). Süslü parantezlerin içinde hem `/* blok yorum sözdizimini */` hem de (sonunda yeni bir satırla birlikte) `// satır yorum sözdizimini` kullanabilirsiniz.

#### Bileşen prop'ları

**Prop'lar (Props)**, bir React bileşenine veri geçirmenin bir aracıdır. Sözdizimleri aslında özniteliklerinkiyle birebir aynıdır: `prop="value"`. Aradaki fark, öznitelikler düz öğelere geçirilirken prop'ların React bileşenlerine geçirilmesidir.

React'te veri akışı tek yönlüdür (unidirectional): prop'lar yalnızca üst (parent) bileşenlerden alt (child) bileşenlere doğru aşağıya geçirilebilir.

`main.jsx` dosyasını açalım ve `<App />` bileşenimize ilk prop'unu verelim.

`<App />` bileşeni çağrısına `Clarice` değerine sahip bir `subject` prop'u ekleyin. İşiniz bittiğinde şuna benzer görünmelidir:

```jsx
<App subject="Clarice" />
```

`App.jsx` dosyasına geri dönüp `App()` fonksiyonunu yeniden ziyaret edelim. `App()` imzasını (signature) parametre olarak `props` kabul edecek şekilde değiştirin ve inceleyebilmeniz için `props` parametresini konsola yazdırın. Ayrıca `subject` sabitini de silin; artık ona ihtiyacımız yok. `App.jsx` dosyanız şu şekilde görünmelidir:

```jsx
function App(props) {
  console.log(props);
  return (
    <>
      {
        // code omitted for brevity
      }
    </>
  );
}
```

Dosyanızı kaydedin ve tarayıcınızı kontrol edin. Hiçbir içeriği olmayan boş bir arka plan göreceksiniz. Bunun nedeni artık tanımlı olmayan bir `subject` değişkenini okumaya çalışmamızdır. `<h1>Hello {subject}!</h1>` satırını yorum satırı haline getirerek bunu düzeltin.

> [!NOTE]
> Kod düzenleyiciniz JSX'i nasıl ayrıştıracağını anlıyorsa (çoğu modern düzenleyici anlar!), daha hızlı yorum satırları oluşturmak için yerleşik yorum kısayolunu — `Ctrl + /` (Windows'ta) veya `Cmd + /` (macOS'ta) — kullanabilirsiniz.

O satır yorum satırı haline getirilmiş olarak dosyayı kaydedin. Bu kez "Click me!" düğmenizin tek başına işlendiğini görmelisiniz. Tarayıcınızın geliştirici konsolunu açarsanız şu şekilde görünen bir mesaj görürsünüz:

```plain
Object { subject: "Clarice" }
```

`subject` nesne özelliği, `<App />` bileşeni çağrımıza eklediğimiz `subject` prop'una karşılık gelir ve `Clarice` dizesi de onun değerine karşılık gelir. React'te bileşen prop'ları her zaman bu şekilde nesneler halinde toplanır.

Uygulamamızdaki hatayı düzeltmek için bu `subject` prop'unu kullanalım. `<h1>Hello, {subject}!</h1>` satırını yorum satırı olmaktan çıkarın (uncomment) ve `<h1>Hello, {props.subject}!</h1>` olarak değiştirin, ardından `console.log()` deyimini silin. Kodunuz şu şekilde görünmelidir:

```jsx
function App(props) {
  return (
    <>
      <header>
        <h1>Hello, {props.subject}!</h1>
        <button type="button" className="primary">
          Click me!
        </button>
      </header>
    </>
  );
}
```

Kaydettiğinizde uygulama artık sizi "Hello, Clarice!" ile selamlamalıdır. `main.jsx` dosyasına geri döner, `subject` değerini düzenler ve kaydederseniz metniniz değişecektir.

Ek pratik yapmak için `main.jsx` içindeki `<App />` bileşeni çağrısına fazladan bir `greeting` prop'u eklemeyi ve bunu `App.jsx` içinde `subject` prop'unun yanında kullanmayı deneyebilirsiniz.

### Özet

Bu bizi yerel olarak nasıl kurulacağı, bir başlangıç uygulamasının nasıl oluşturulacağı ve temellerin nasıl çalıştığı da dahil olmak üzere React'e ilk bakışımızın sonuna getiriyor. Bir sonraki makalede ilk gerçek uygulamamızı — bir yapılacaklar (todo) listesini — oluşturmaya başlayacağız. Ancak bunu yapmadan önce öğrendiğimiz bazı şeyleri özetleyelim.

React'te:

- Bileşenler ihtiyaç duydukları modülleri içe aktarabilir (`import`) ve dosyalarının en altında kendilerini dışa aktarmalıdır (`export`).
- Bileşen fonksiyonları `PascalCase` ile adlandırılır.
- JavaScript ifadelerini `{böyle}` süslü parantezler arasına koyarak JSX içinde işleyebilirsiniz.
- Bazı JSX öznitelikleri, JavaScript'in ayrılmış sözcükleriyle çakışmamaları için HTML özniteliklerinden farklıdır. Örneğin HTML'deki `class`, JSX'te `className` olarak çevrilir.
- Prop'lar bileşen çağrılarının içinde tıpkı öznitelikler gibi yazılır ve bileşenlerin içine geçirilir.

### Ayrıca bakınız

- **[React Öğrenin (Learn React)](https://scrimba.com/learn-react-c0e?via=mdn)** <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>: [Scrimba'nın](https://scrimba.com/?via=mdn) _Learn React_ kursu en üst düzey React 101 kursudur — React'e yeni başlayan herkes için mükemmel bir başlangıç noktasıdır. 140'tan fazla etkileşimli kodlama görevini çözerek ve sekiz eğlenceli proje oluşturarak modern React'in temellerini öğrenin.

---

## 37. React ToDo Uygulamamıza Başlamak (Beginning our React ToDo app)

**Kaynak:** [Beginning our React ToDo app](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)

Diyelim ki React'te bir kavram kanıtı (proof-of-concept) oluşturmakla görevlendirildik – kullanıcıların üzerinde çalışmak istedikleri görevleri eklemelerine, düzenlemelerine ve silmelerine ve ayrıca görevleri silmeden tamamlandı olarak işaretlemelerine olanak tanıyan bir uygulama. Bu makale, daha sonra ekleyeceğimiz tekil bileşen tanımlamasına ve etkileşime hazır olacak şekilde böyle bir uygulamanın temel yapısını ve biçimlendirmesini adım adım anlatacaktır.

> [!NOTE]
> Kodunuzu bizim sürümümüzle karşılaştırarak kontrol etmeniz gerekirse, örnek React uygulaması kodunun tamamlanmış bir sürümünü [todo-react depomuzda](https://github.com/mdn/todo-react) bulabilirsiniz. Çalışan canlı bir sürüm için <https://mdn.github.io/todo-react/> adresine bakın.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Çekirdek <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a> ve
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> dillerine ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">terminale/komut satırına</a> aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        Yapılacaklar listesi örnek çalışmamıza aşinalık ve temel
        <code>App</code> yapısını ve biçimlendirmesini yerine oturtmak.
      </td>
    </tr>
  </tbody>
</table>

### Uygulamamızın kullanıcı hikâyeleri

Yazılım geliştirmede bir kullanıcı hikâyesi (user story), kullanıcının bakış açısından uygulanabilir bir hedeftir. Çalışmamıza başlamadan önce kullanıcı hikâyelerini tanımlamak çalışmamıza odaklanmamıza yardımcı olacaktır. Uygulamamız aşağıdaki hikâyeleri yerine getirmelidir:

Bir kullanıcı olarak şunları yapabilirim:

- bir görev listesini okumak.
- fareyi veya klavyeyi kullanarak bir görev eklemek.
- fareyi veya klavyeyi kullanarak herhangi bir görevi tamamlandı olarak işaretlemek.
- fareyi veya klavyeyi kullanarak herhangi bir görevi silmek.
- fareyi veya klavyeyi kullanarak herhangi bir görevi düzenlemek.
- belirli bir görev alt kümesini görüntülemek: Tüm görevler, yalnızca etkin görevler veya yalnızca tamamlanan görevler.

Bu hikâyeleri tek tek ele alacağız.

### Proje öncesi temizlik

Vite bize projemiz için hiç kullanmayacağımız bazı kodlar verdi. Aşağıdaki terminal komutları yeni projemize yer açmak için bunları silecektir. Uygulamanın kök dizininden başladığınızdan emin olun!

```bash
# Move into the src directory
cd src
# Delete the App.css file and the React logo provided by Vite
rm App.css assets/react.svg
# Empty the contents of App.jsx and index.css
echo -n > App.jsx && echo -n > index.css
# Move back up to the root of the project
cd ..
```

> [!NOTE]
> Yukarıda bahsedilen terminal görevlerini yapmak için sunucunuzu durdurduysanız, `npm run dev` kullanarak onu tekrar başlatmanız gerekecektir.

### Proje başlangıç kodu

Bu proje için bir başlangıç noktası olarak iki şey sağlayacağız: az önce sildiğinizin yerini alacak bir `App()` fonksiyonu ve uygulamanızı biçimlendirmek için biraz CSS.

#### JSX

Aşağıdaki kod parçacığını panonuza kopyalayın, ardından `App.jsx` içine yapıştırın:

```jsx
function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
```

Şimdi `index.html` dosyasını açın ve [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title) öğesinin metnini `TodoMatic` olarak değiştirin. Bu şekilde uygulamamızın en üstündeki [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) ile eşleşecektir.

```html
<title>TodoMatic</title>
```

Tarayıcınız yenilendiğinde şuna benzer bir şey görmelisiniz:

![biçimlendirilmemiş, karmakarışık bir etiket, girdi ve düğme yığını gösteren todo-matic uygulaması](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/frameworks_libraries/react_todo_list_beginning/unstyled-app.png)

Çirkindir ve henüz çalışmamaktadır, ancak sorun değil — birazdan onu biçimlendireceğiz. İlk olarak, sahip olduğumuz JSX'i ve kullanıcı hikâyelerimizle nasıl örtüştüğünü düşünün:

- Yeni bir görev yazmak için bir [`<input type="text">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/text) ve formu göndermek için bir düğme içeren bir [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form) öğemiz var.
- Görevlerimizi filtrelemek için kullanılacak bir düğmeler dizimiz var.
- Bize kaç görev kaldığını söyleyen bir başlığımız var.
- Sırasız bir listede düzenlenmiş 3 görevimiz var. Her görev bir liste öğesidir ([`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li)) ve onu düzenlemek ve silmek için düğmelere ve yapıldı olarak işaretlemek için bir onay kutusuna (checkbox) sahiptir.

Form görevler _yapmamıza_ olanak tanıyacak; düğmeler onları _filtrelememize_ izin verecek; başlık ve liste ise onları _okuma_ yolumuzdur. Bir görevi _düzenlemeye_ yönelik kullanıcı arayüzü şimdilik göze çarpan bir şekilde eksiktir. Sorun değil – onu daha sonra yazacağız.

#### Erişilebilirlik özellikleri

Burada bazı alışılmadık işaretlemeler fark edebilirsiniz. Örneğin:

```jsx
<button type="button" className="btn toggle-btn" aria-pressed="true">
  <span className="visually-hidden">Show </span>
  <span>all</span>
  <span className="visually-hidden"> tasks</span>
</button>
```

Burada `aria-pressed`, yardımcı teknolojilere (ekran okuyucular gibi) düğmenin iki durumdan birinde olabileceğini söyler: `pressed` (basılı) veya `unpressed` (basılı değil). Bunları `on` (açık) ve `off` (kapalı) için benzerlikler olarak düşünün. `"true"` değerini ayarlamak düğmenin varsayılan olarak basılı olduğu anlamına gelir.

Hiçbir CSS dahil etmediğimiz için `visually-hidden` sınıfının henüz hiçbir etkisi yoktur. Ancak stillerimizi yerine oturttuğumuzda, bu sınıfa sahip her öğe gören kullanıcılardan gizlenecek ve yardımcı teknoloji kullanıcıları için hâlâ kullanılabilir olacaktır — bunun nedeni bu kelimelere gören kullanıcılar tarafından ihtiyaç duyulmamasıdır; kendilerine yardımcı olacak ekstra görsel bağlama sahip olmayan yardımcı teknoloji kullanıcıları için düğmenin ne yaptığı hakkında daha fazla bilgi sağlamak üzere oradadırlar.

Daha aşağıda [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul) öğemizi bulabilirsiniz:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  …
</ul>
```

`role` özniteliği, yardımcı teknolojinin bir etiketin ne tür bir öğeyi temsil ettiğini açıklamasına yardımcı olur. Bir `<ul>` varsayılan olarak bir liste gibi ele alınır, ancak eklemek üzere olduğumuz stiller bu işlevselliği bozacaktır. Bu rol, `<ul>` öğesine "liste" anlamını geri kazandıracaktır. Bunun neden gerekli olduğu hakkında daha fazla bilgi edinmek istiyorsanız [Scott O'Hara'nın "Fixing Lists" ("Listeleri Düzeltmek") makalesine](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) göz atabilirsiniz.

`aria-labelledby` özniteliği, yardımcı teknolojilere liste başlığımızı altındaki listenin amacını tanımlayan etiket olarak ele aldığımızı söyler. Bu ilişkilendirmeyi yapmak listeye daha bilgilendirici bir bağlam kazandırır ve bu da yardımcı teknoloji kullanıcılarının listenin amacını daha iyi anlamasına yardımcı olabilir.

Son olarak, liste öğelerimizdeki etiketler ve girdiler JSX'e özgü bazı özniteliklere sahiptir:

```jsx
<div className="c-cb">
  <input id="todo-0" type="checkbox" defaultChecked />
  <label className="todo-label" htmlFor="todo-0">
    Eat
  </label>
</div>
```

`<input />` etiketindeki `defaultChecked` özniteliği React'e bu onay kutusunu başlangıçta işaretlemesini söyler. Normal HTML'de yapacağımız gibi `checked` kullanacak olsaydık, React tarayıcı konsolumuza onay kutusundaki olayları işlemeyle ilgili, kaçınmak istediğimiz bazı uyarılar yazdırırdı. Şimdilik bunun için çok fazla endişelenmeyin — olayları kullanmaya geçtiğimizde bunu daha sonra ele alacağız.

`htmlFor` özniteliği HTML'de kullanılan `for` özniteliğine karşılık gelir. `for` ayrılmış bir sözcük olduğu için JSX'te bir öznitelik olarak `for` kullanamayız, bu nedenle React bunun yerine `htmlFor` kullanır.

#### JSX'teki mantıksal (boolean) öznitelikler üzerine bir not

Önceki bölümdeki `defaultChecked` özniteliği mantıksal (boolean) bir özniteliktir – değeri ya `true` ya da `false` olan bir öznitelik. HTML'de olduğu gibi, mantıksal bir öznitelik mevcutsa `true`, mevcut değilse `false` değerindedir; ifadenin sağ tarafındaki atama isteğe bağlıdır. Değerini süslü parantezler içinde geçirerek açıkça ayarlayabilirsiniz – örneğin `defaultChecked={true}` veya `defaultChecked={false}`.

JSX aslında JavaScript olduğu için mantıksal özniteliklerle ilgili dikkat edilmesi gereken bir tuzak vardır: `defaultChecked="false"` yazmak _mantıksal_ bir değer yerine `"false"` şeklinde bir _dize (string)_ değeri ayarlayacaktır. Boş olmayan dizeler [doğrumsu (truthy)](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) değerlerdir, dolayısıyla React `defaultChecked` değerini `true` olarak kabul edecek ve varsayılan olarak onay kutusunu işaretleyecektir. İstediğimiz şey bu değildir, bu yüzden bundan kaçınmalıyız.

İsterseniz, daha önce görmüş olabileceğiniz ve öğelerin sayfada işlenmesini engelleyen başka bir öznitelik olan [`hidden`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/hidden) ile mantıksal öznitelikler yazma pratiği yapabilirsiniz. Ne olduğunu görmek için `App.jsx` içindeki `<h1>` öğesine `hidden` eklemeyi deneyin, ardından değerini açıkça `{false}` olarak ayarlamayı deneyin. Yine, `hidden="false"` yazmanın doğrumsu bir değerle sonuçlandığını ve dolayısıyla `<h1>` öğesinin _gizleneceğini_ unutmayın. İşiniz bittiğinde bu kodu kaldırmayı unutmayın.

> [!NOTE]
> Daha önceki kod parçacığımızda kullanılan `aria-pressed` özniteliği `"true"` değerine sahiptir, çünkü `aria-pressed`, `checked` özniteliğinin olduğu gibi gerçek bir mantıksal öznitelik değildir.

#### Stillerimizi uygulamak

Aşağıdaki CSS kodunu `src/index.css` içine yapıştırın:

```css
/* Resets */
*,
*::before,
*::after {
  box-sizing: border-box;
}
*:focus-visible {
  outline: 3px dashed #228bec;
  outline-offset: 0;
}
html {
  font: 62.5% / 1.15 sans-serif;
}
h1,
h2 {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
}
button {
  -moz-osx-font-smoothing: inherit;
  -webkit-font-smoothing: inherit;
  appearance: none;
  background: transparent;
  border: none;
  color: inherit;
  font: inherit;
  line-height: normal;
  margin: 0;
  overflow: visible;
  padding: 0;
  width: auto;
}
button::-moz-focus-inner {
  border: 0;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
input[type="text"] {
  border-radius: 0;
}
body {
  background-color: whitesmoke;
  color: #4d4d4d;
  font:
    1.6rem/1.25 "Arial",
    sans-serif;
  margin: 0 auto;
  max-width: 68rem;
  width: 100%;
}
@media screen and (width >= 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/* End resets */
/* Global styles */
.form-group > input[type="text"] {
  display: inline-block;
  margin-top: 0.4rem;
}
.btn {
  border: 0.2rem solid #4d4d4d;
  cursor: pointer;
  padding: 0.8rem 1rem 0.7rem;
  text-transform: capitalize;
}
.btn.toggle-btn {
  border-color: lightgray;
  border-width: 1px;
}
.btn.toggle-btn[aria-pressed="true"] {
  border-color: #4d4d4d;
  text-decoration: underline;
}
.btn__danger {
  background-color: #ca3c3c;
  border-color: #bd2130;
  color: white;
}
.btn__filter {
  border-color: lightgrey;
}
.btn__primary {
  background-color: black;
  color: white;
}
.btn-group {
  display: flex;
  justify-content: space-between;
}
.btn-group > * {
  flex: 1 1 49%;
}
.btn-group > * + * {
  margin-left: 0.8rem;
}
.label-wrapper {
  flex: 0 0 100%;
  margin: 0;
  text-align: center;
}
.visually-hidden {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute !important;
  white-space: nowrap;
  width: 1px;
}
[class*="stack"] > * {
  margin-bottom: 0;
  margin-top: 0;
}
.stack-small > * + * {
  margin-top: 1.25rem;
}
.stack-large > * + * {
  margin-top: 2.5rem;
}
@media screen and (width >= 550px) {
  .stack-small > * + * {
    margin-top: 1.4rem;
  }
  .stack-large > * + * {
    margin-top: 2.8rem;
  }
}
.stack-exception {
  margin-top: 1.2rem;
}
/* End global styles */
/* General app styles */
.todoapp {
  background: white;
  box-shadow:
    0 2px 4px 0 rgb(0 0 0 / 20%),
    0 2.5rem 5rem 0 rgb(0 0 0 / 10%);
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  position: relative;
}
@media screen and (width >= 550px) {
  .todoapp {
    padding: 4rem;
  }
}
.todoapp > * {
  margin-left: auto;
  margin-right: auto;
  max-width: 50rem;
}
.todoapp > form {
  max-width: 100%;
}
.todoapp > h1 {
  display: block;
  margin: 0;
  margin-bottom: 1rem;
  max-width: 100%;
  text-align: center;
}
.label__lg {
  line-height: 1.01567;
  font-weight: 300;
  margin-bottom: 1rem;
  padding: 0.8rem;
  text-align: center;
}
.input__lg {
  border: 2px solid black;
  padding: 2rem;
}
.input__lg:focus-visible {
  border-color: #4d4d4d;
  box-shadow: inset 0 0 0 2px;
}
[class*="__lg"] {
  display: inline-block;
  font-size: 1.9rem;
  width: 100%;
}
[class*="__lg"]:not(:last-child) {
  margin-bottom: 1rem;
}
@media screen and (width >= 620px) {
  [class*="__lg"] {
    font-size: 2.4rem;
  }
}
/* End general app styles */
/* Todo item styles */
.todo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.todo > * {
  flex: 0 0 100%;
}
.todo-text {
  border: 2px solid #565656;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  width: 100%;
}
.todo-text:focus-visible {
  box-shadow: inset 0 0 0 2px;
}
/* End todo item styles */
/* Checkbox styles */
.c-cb {
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  clear: left;
  display: block;
  font-family: "Arial", sans-serif;
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 1.25;
  min-height: 44px;
  padding-left: 40px;
  position: relative;
}
.c-cb > label::before,
.c-cb > input[type="checkbox"] {
  box-sizing: border-box;
  height: 44px;
  left: -2px;
  top: -2px;
  width: 44px;
}
.c-cb > input[type="checkbox"] {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  margin: 0;
  opacity: 0;
  position: absolute;
  z-index: 1;
}
.c-cb > label {
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  touch-action: manipulation;
}
.c-cb > label::before {
  background: transparent;
  border: 2px solid currentColor;
  content: "";
  position: absolute;
}
.c-cb > input[type="checkbox"]:focus-visible + label::before {
  border-width: 4px;
  outline: 3px dashed #228bec;
}
.c-cb > label::after {
  background: transparent;
  border: solid;
  border-width: 0 0 5px 5px;
  border-top-color: transparent;
  box-sizing: content-box;
  content: "";
  height: 7px;
  left: 9px;
  opacity: 0;
  position: absolute;
  top: 11px;
  transform: rotate(-45deg);
  width: 18px;
}
.c-cb > input[type="checkbox"]:checked + label::after {
  opacity: 1;
}
/* End checkbox styles */
```

Kaydedin ve tarayıcınıza geri bakın; uygulamanız artık makul bir biçimlendirmeye sahip olmalıdır.

### Özet

Artık yapılacaklar listesi uygulamamız gerçekten de gerçek bir uygulamaya biraz daha benziyor! Sorun şu ki: aslında hiçbir şey yapmıyor. Bir sonraki bölümde bunu düzeltmeye başlayacağız!

---

## 38. React Uygulamamızı Bileşenlere Ayırmak (Componentizing our React app)

**Kaynak:** [Componentizing our React app](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_components)

Bu noktada uygulamamız yekpare bir yapıdır (monolith). Bir şeyler yapmasını sağlamadan önce onu yönetilebilir, açıklayıcı bileşenlere (components) ayırmamız gerekir. React'in neyin bileşen olup neyin olmadığı konusunda katı kuralları yoktur – bu size kalmıştır! Bu makalede, uygulamamızı bileşenlere ayırmanın mantıklı bir yolunu size göstereceğiz.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Çekirdek <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a> ve
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> dillerine ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">terminale/komut satırına</a> aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        Yapılacaklar listesi uygulamamızı bileşenlere ayırmanın mantıklı bir yolu.
      </td>
    </tr>
  </tbody>
</table>

### İlk bileşenimizi tanımlamak

Biraz pratik yapana kadar bir bileşen tanımlamak zor görünebilir, ancak özü şudur:

- Uygulamanızın bariz bir "yığınını" ("chunk") temsil ediyorsa muhtemelen bir bileşendir
- Sık sık yeniden kullanılıyorsa muhtemelen bir bileşendir.

Bu ikinci madde özellikle değerlidir: ortak kullanıcı arayüzü öğelerinden bir bileşen yapmak, kodunuzu tek bir yerde değiştirmenize ve bu değişiklikleri o bileşenin kullanıldığı her yerde görmenize olanak tanır. Her şeyi hemen bileşenlere ayırmak zorunda da değilsiniz. İkinci maddeyi ilham kaynağı olarak alalım ve kullanıcı arayüzünün en çok yeniden kullanılan, en önemli parçasından bir bileşen yapalım: bir yapılacaklar listesi öğesi.

### Bir `<Todo />` yapmak

Bir bileşen yapmadan önce onun için yeni bir dosya oluşturmalıyız. Aslında yalnızca bileşenlerimiz için bir dizin oluşturmalıyız. Bu komutları çalıştırmadan önce uygulamanızın kök dizininde olduğunuzdan emin olun!

```bash
# create a `components` directory
mkdir src/components
# within `components`, create a file called `Todo.jsx`
touch src/components/Todo.jsx
```

Önceki komutları çalıştırmak için geliştirme sunucunuzu durdurduysanız yeniden başlatmayı unutmayın!

`Todo.jsx` içine bir `Todo()` fonksiyonu ekleyelim. Burada bir fonksiyon tanımlıyor ve onu dışa aktarıyoruz (`export`):

```jsx
function Todo() {}

export default Todo;
```

Şimdiye kadar bu iyi, ancak bileşenimiz yararlı bir şey döndürmelidir! `src/App.jsx` dosyasına geri dönün, sırasız listenin içinden ilk [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li) öğesini kopyalayın ve şu şekilde okunması için `Todo.jsx` içine yapıştırın:

```jsx
function Todo() {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked />
        <label className="todo-label" htmlFor="todo-0">
          Eat
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Eat</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;
```

Artık kullanabileceğimiz bir şeyimiz var. `App.jsx` içinde, `Todo` bileşenini içe aktarmak (`import`) için dosyanın en üstüne aşağıdaki satırı ekleyin:

```jsx
import Todo from "./components/Todo";
```

Bu bileşen içe aktarıldığında, `App.jsx` içindeki tüm `<li>` öğelerini `<Todo />` bileşeni çağrılarıyla değiştirebilirsiniz. `<ul>` öğeniz şu şekilde okunmalıdır:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo />
  <Todo />
  <Todo />
</ul>
```

Uygulamanıza geri döndüğünüzde talihsiz bir şey fark edeceksiniz: listeniz artık ilk görevi üç kez tekrarlıyor!

![Etiket bileşenin içine sabit olarak kodlandığı için tekrarlayan todo bileşenlerine sahip yapılacaklar listesi uygulamamız](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/frameworks_libraries/react_components/todo-list-repeating-todos.png)

Yalnızca yemek yemek (Eat) istemiyoruz; yapacak — yani — başka işlerimiz de var. Sırada farklı bileşen çağrılarının benzersiz içerik işlemesini nasıl sağlayabileceğimize bakacağız.

### Benzersiz bir `<Todo />` yapmak

Bileşenler güçlüdür çünkü kullanıcı arayüzümüzün parçalarını yeniden kullanmamıza ve o kullanıcı arayüzünün kaynağı için tek bir yere başvurmamıza olanak tanırlar. Sorun şu ki, tipik olarak her bileşenin tamamını yeniden kullanmak istemeyiz; çoğu parçayı yeniden kullanmak ve küçük parçaları değiştirmek isteriz. Prop'ların devreye girdiği yer burasıdır.

#### Bir `name` içinde ne var?

Tamamlamak istediğimiz görevlerin adlarını takip etmek için her `<Todo />` bileşeninin benzersiz bir ad işlediğinden emin olmalıyız.

`App.jsx` içinde her `<Todo />` öğesine bir `name` prop'u verin. Daha önce sahip olduğumuz görevlerimizin adlarını kullanalım:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo name="Eat" />
  <Todo name="Sleep" />
  <Todo name="Repeat" />
</ul>
```

Tarayıcınız yenilendiğinde… daha öncekiyle birebir aynı şeyi göreceksiniz. `<Todo />` bileşenimize bazı prop'lar verdik, ancak bunları henüz kullanmıyoruz. `Todo.jsx` dosyasına geri dönelim ve bu durumu düzeltelim.

İlk olarak `Todo()` fonksiyon tanımınızı parametre olarak `props` alacak şekilde değiştirin. Bileşen tarafından doğru şekilde alındıklarını kontrol etmek isterseniz prop'larınızı `console.log()` ile yazdırabilirsiniz.

Bileşeninizin prop'larını aldığından emin olduğunuzda, `props.name` okuyarak her `Eat` geçişini `name` prop'unuzla değiştirebilirsiniz. Unutmayın: `props.name` bir JSX ifadesidir, dolayısıyla onu süslü parantezler içine sarmalamanız gerekecektir.

Tüm bunları bir araya getirdiğimizde `Todo()` fonksiyonunuz şu şekilde okunmalıdır:

```jsx
function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor="todo-0">
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;
```

_Şimdi_ tarayıcınız üç benzersiz görev göstermelidir. Ancak başka bir sorun devam etmektedir: hepsi varsayılan olarak hâlâ işaretlidir.

![Artık bileşenlere prop olarak geçirildikleri için farklı todo etiketlerine sahip yapılacaklar listemiz](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/frameworks_libraries/react_components/todo-list-unique-todos.png)

#### `completed` (tamamlandı) mı?

Orijinal statik listemizde yalnızca `Eat` işaretliydi. Yine, bir `<Todo />` bileşenini oluşturan kullanıcı arayüzünün _çoğunu_ yeniden kullanmak, ancak tek bir şeyi değiştirmek istiyoruz. Bu, başka bir prop için iyi bir iştir! İlk `<Todo />` çağrınıza mantıksal (boolean) bir `completed` prop'u verin ve diğer ikisini oldukları gibi bırakın.

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo name="Eat" completed />
  <Todo name="Sleep" />
  <Todo name="Repeat" />
</ul>
```

Daha önce olduğu gibi, bu prop'ları gerçekten kullanmak için `Todo.jsx` dosyasına geri dönmeliyiz. `<input />` üzerindeki `defaultChecked` özniteliğini değeri `completed` prop'una eşit olacak şekilde değiştirin. İşiniz bittiğinde Todo bileşeninin `<input />` öğesi şu şekilde okunacaktır:

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

Ve tarayıcınız yalnızca `Eat` öğesinin işaretli olduğunu gösterecek şekilde güncellenmelidir:

![Artık farklı işaretli durumlara sahip yapılacaklar listesi uygulamamız - bazı onay kutuları işaretli, diğerleri değil](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/frameworks_libraries/react_components/todo-list-differing-checked-states.png)

Her `<Todo />` bileşeninin `completed` prop'unu değiştirirseniz, tarayıcınız işlenen eşdeğer onay kutularını buna göre işaretleyecek veya işaretini kaldıracaktır.

#### Bana biraz `id` ver lütfen

Hâlâ _başka_ bir sorunumuz daha var: `<Todo />` bileşenimiz her göreve `todo-0` şeklinde bir `id` özniteliği veriyor. Bu birkaç nedenden dolayı kötüdür:

- [`id` öznitelikleri](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/id) benzersiz olmalıdır (CSS, JavaScript vb. tarafından belge parçaları için benzersiz tanımlayıcılar olarak kullanılırlar).
- `id`'ler benzersiz olmadığında [label öğelerinin](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label) işlevselliği bozulabilir.

İkinci sorun şu anda uygulamamızı etkilemektedir. İkinci onay kutusunun yanındaki "Sleep" kelimesine tıklarsanız, "Sleep" onay kutusu yerine "Eat" onay kutusunun durum değiştirdiğini fark edeceksiniz. Bunun nedeni her onay kutusunun `<label>` öğesinin `todo-0` değerinde bir `htmlFor` özniteliğine sahip olmasıdır. `<label>` öğeleri belirli bir `id` özniteliğine sahip yalnızca ilk öğeyi tanır ve bu da diğer etiketlere tıkladığınızda gördüğünüz soruna neden olur.

`<Todo />` bileşenini oluşturmadan önce benzersiz `id` özniteliklerimiz vardı. `i` değerinin her seferinde bir büyüdüğü `todo-i` biçimini izleyerek onları geri getirelim. `id` prop'larını eklemek için `App.jsx` içindeki `Todo` bileşeni örneklerini aşağıdaki gibi güncelleyin:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo name="Eat" id="todo-0" completed />
  <Todo name="Sleep" id="todo-1" />
  <Todo name="Repeat" id="todo-2" />
</ul>
```

> [!NOTE]
> Ataması olmayan bir mantıksal değer (boolean) olduğu için `completed` prop'u burada en sondadır. Bu tamamen stil açısından bir gelenektir. Prop'lar JavaScript nesneleri olduğu ve JavaScript nesneleri sırasız olduğu için prop'ların sırası önemli değildir.

Şimdi `Todo.jsx` dosyasına geri dönün ve `id` prop'undan yararlanın. `<input />` öğesinin `id` özniteliği değerinin yanı sıra `<label>` öğesinin `htmlFor` özniteliği değerinin de yerini alması gerekir:

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

Bu düzeltmeler yerindeyken, her onay kutusunun yanındaki etiketlere tıklamak beklediğimiz şeyi yapacaktır – o etiketlerin yanındaki onay kutularını işaretleyecek ve işaretini kaldıracaktır.

### Şimdiye kadar her şey yolunda mı?

Şimdiye kadar React'ten iyi yararlanıyoruz, ancak daha iyisini yapabiliriz! Kodumuz kendini tekrar ediyor. `<Todo />` bileşenimizi işleyen üç satır yalnızca tek bir farkla neredeyse birebir aynıdır: her prop'un değeri.

JavaScript'in çekirdek yeteneklerinden biriyle kodumuzu temizleyebiliriz: yineleme (iteration). Yinelemeyi kullanmak için önce görevlerimizi yeniden düşünmeliyiz.

### Veri olarak görevler

Görevlerimizin her biri şu anda üç bilgi parçası içermektedir: adı, işaretlenip işaretlenmediği ve benzersiz ID'si. Bu veriler güzel bir şekilde bir nesneye çevrilir. Birden fazla görevimiz olduğu için bir nesneler dizisi bu verileri temsil etmede iyi çalışacaktır.

`src/main.jsx` içinde, son içe aktarmanın altında ancak `ReactDOM.createRoot()` çağrısının üstünde yeni bir `const` bildirin:

```jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
```

> [!NOTE]
> Metin düzenleyicinizde bir [ESLint](https://eslint.org/) eklentisi varsa bu `DATA` sabiti üzerinde bir uyarı görebilirsiniz. Bu uyarı kullandığımız Vite şablonu tarafından sağlanan ESLint yapılandırmasından gelir ve bu kod için geçerli değildir. `DATA` sabitinin üstündeki satıra `// eslint-disable-next-line` ekleyerek uyarıyı güvenle bastırabilirsiniz.

Ardından, `DATA` dizisini `<App />` bileşenine `tasks` adlı bir prop olarak geçireceğiz. `src/main.jsx` içindeki `<App />` bileşeni çağrınızı şu şekilde okunacak biçimde güncelleyin:

```jsx
<App tasks={DATA} />
```

`DATA` dizisi artık App bileşeninin içinde `props.tasks` olarak kullanılabilir. İsterseniz kontrol etmek için onu `console.log()` ile yazdırabilirsiniz.

> [!NOTE]
> `TÜMÜ_BÜYÜK_HARF` (`ALL_CAPS`) sabit adlarının JavaScript'te özel bir anlamı yoktur; diğer geliştiricilere "bu veriler burada tanımlandıktan sonra asla değişmeyecektir" diyen bir gelenektir.

### Yineleme ile işleme

Nesneler dizimizi işlemek için her nesneyi bir `<Todo />` bileşenine dönüştürmemiz gerekir. JavaScript bize öğeleri başka bir şeye dönüştürmek için bir dizi metodu verir: [`Array.prototype.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

`App.jsx` içinde, `App()` fonksiyonunun `return` deyiminin üstünde `taskList` adlı yeni bir `const` oluşturun. `props.tasks` dizisindeki her görevi kendi `name` değerine dönüştürerek başlayalım. `?.` operatörü, yeni bir görev adları dizisi oluşturmaya çalışmadan önce `props.tasks` değerinin `undefined` veya `null` olup olmadığını kontrol etmek için [isteğe bağlı zincirleme (optional chaining)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) yapmamızı sağlar:

```jsx
const taskList = props.tasks?.map((task) => task.name);
```

`<ul>` öğesinin tüm alt öğelerini `taskList` ile değiştirmeyi deneyelim:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>
```

Bu bizi tüm bileşenleri tekrar gösterme yolunda biraz ilerletir, ancak yapmamız gereken daha çok iş var: tarayıcı şu anda her görevin adını düz metin olarak işlemektedir. HTML yapımız — `<li>` ve onun onay kutuları ile düğmeleri — eksiktir!

![Yapılacaklar öğesi etiketlerinin yalnızca tek bir satırda üst üste yığılmış olarak gösterildiği yapılacaklar listesi uygulamamız](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/frameworks_libraries/react_components/todo-list-unstructured-names.png)

Bunu düzeltmek için `map()` fonksiyonumuzdan bir `<Todo />` bileşeni döndürmemiz gerekir — JSX'in JavaScript olduğunu, dolayısıyla onu daha tanıdık diğer tüm JavaScript sözdizimleriyle yan yana kullanabileceğimizi unutmayın. Halihazırda sahip olduğumuz şey yerine aşağıdakini deneyelim:

```jsx
const taskList = props.tasks?.map((task) => <Todo />);
```

Uygulamanıza tekrar bakın; artık görevlerimiz eskiden göründüklerine daha çok benziyor, ancak görevlerin kendilerinin adları eksik. Üzerinde `map` ile döndüğümüz her görevin `<Todo />` bileşenimize geçirmek istediğimiz `id`, `name` ve `completed` özelliklerini içerdiğini unutmayın. Bu bilgileri bir araya getirirsek şu şekilde bir kod elde ederiz:

```jsx
const taskList = props.tasks?.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

Artık uygulama daha önce göründüğü gibi görünüyor ve kodumuz kendini daha az tekrar ediyor.

### Benzersiz anahtarlar (Unique keys)

Artık React görevlerimizi bir diziden işlediğine göre, onları düzgün bir şekilde işleyebilmek için hangisinin hangisi olduğunu takip etmesi gerekir. React her şeyi takip etmek için kendi tahminlerini yapmaya çalışır, ancak `<Todo />` bileşenlerimize bir `key` prop'u geçirerek ona yardımcı olabiliriz. `key`, React tarafından yönetilen özel bir prop'tur – `key` kelimesini başka hiçbir amaç için kullanamazsınız.

Anahtarlar benzersiz olması gerektiğinden, her görev nesnesinin `id` değerini anahtarı olarak yeniden kullanacağız. `taskList` sabitinizi şu şekilde güncelleyin:

```jsx
const taskList = props.tasks?.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));
```

**Yineleme ile işlediğiniz her şeye her zaman benzersiz bir anahtar (`key`) geçirmelisiniz.** Tarayıcınızda bariz hiçbir şey değişmeyecektir, ancak benzersiz anahtarlar kullanmazsanız React konsolunuza uyarılar yazdıracak ve uygulamanız tuhaf davranabilecektir!

### Uygulamanın geri kalanını bileşenlere ayırmak

Artık en önemli bileşenimizi hallettiğimize göre, uygulamamızın geri kalanını da bileşenlere dönüştürebiliriz. Bileşenlerin ya kullanıcı arayüzünün bariz parçaları, ya kullanıcı arayüzünün yeniden kullanılan parçaları ya da her ikisi birden olduğunu hatırlayarak iki bileşen daha yapabiliriz:

- `<Form />`
- `<FilterButton />`

Her ikisine de ihtiyacımız olduğunu bildiğimiz için dosya oluşturma işinin bir kısmını tek bir terminal komutunda birleştirebiliriz. Uygulamanızın kök dizininde olduğunuza dikkat ederek terminalinizde şu komutu çalıştırın:

```bash
touch src/components/{Form,FilterButton}.jsx
```

#### `<Form />`

`components/Form.jsx` dosyasını açın ve aşağıdakileri yapın:

- Bir `Form()` fonksiyonu bildirin ve dosyanın sonunda onu dışa aktarın (`export`).
- `App.jsx` içinden `<form>` etiketlerini ve aralarındaki her şeyi kopyalayın ve bunları `Form()` fonksiyonunun `return` deyiminin içine yapıştırın.

`Form.jsx` dosyanız şu şekilde okunmalıdır:

```jsx
function Form() {
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
```

#### `<FilterButton />`

`Form.jsx` dosyasını oluşturmak için yaptığınız aynı şeyleri `FilterButton.jsx` içinde de yapın, ancak bileşeni `FilterButton()` olarak adlandırın ve `App.jsx` içindeki `<div className="filters btn-group stack-exception">` öğesinin içindeki ilk düğmenin HTML'ini `return` deyiminin içine kopyalayın.

Dosya şu şekilde okunmalıdır:

```jsx
function FilterButton() {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>all </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
```

> [!NOTE]
> Her düğmenin aynı olacağı açısından ilk olarak `<Todo />` bileşeni için yaptığımız aynı hatayı burada da yaptığımızı fark edebilirsiniz. Sorun değil! Bu bileşeni daha sonra, [Filtre düğmelerine geri dönüş](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons) bölümünde düzelteceğiz.

### Tüm bileşenlerimizi içe aktarmak

Yeni bileşenlerimizden yararlanalım. `App.jsx` dosyasının en üstüne birkaç `import` deyimi daha ekleyin ve az önce yaptığımız bileşenlere başvurun. Ardından, bileşenlerimizi işlemesi için `App()` fonksiyonunun `return` deyimini güncelleyin.

İşiniz bittiğinde `App.jsx` şu şekilde okunacaktır:

```jsx
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
```

Bu yerindeyken, React uygulamanız yepyeni bileşenlerinizi kullanarak temelde daha önce olduğuyla aynı şekilde işlenmelidir.

### Özet

Ve bu makale için hepsi bu kadar — uygulamanızı nasıl güzelce bileşenlere ayıracağınız ve bunları verimli bir şekilde nasıl işleyeceğiniz konusunun derinliklerine indik. Sırada React'te olayları (events) işlemeye bakacak ve biraz etkileşim eklemeye başlayacağız.

---

## 39. React Etkileşimi: Olaylar ve Durum (React interactivity: Events and state)

**Kaynak:** [React interactivity: Events and state](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state)

Bileşen planımız çıkarıldığına göre, artık uygulamamızı tamamen statik bir kullanıcı arayüzünden (UI) gerçekten etkileşime girmemize ve bir şeyleri değiştirmemize olanak tanıyan bir arayüze güncellemeye başlama zamanı geldi. Bu makalede, bu süreçte olayları (events) ve durumu (state) derinlemesine inceleyerek bunu yapacak ve sonunda başarıyla görev ekleyip silebildiğimiz ve görevleri tamamlandı olarak değiştirebildiğimiz (toggle) bir uygulama elde edeceğiz.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Çekirdek <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a> ve
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> dillerine ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">terminal/komut satırına</a> aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        React'te olayları ve durumu (state) işlemek ve örnek çalışma uygulamasını etkileşimli hale getirmeye başlamak için bunları kullanmak.
      </td>
    </tr>
  </tbody>
</table>

### Olayları işlemek

Şimdiye kadar yalnızca sade (vanilla) JavaScript yazdıysanız, içinde bazı DOM düğümlerini (nodes) sorguladığınız ve onlara dinleyiciler (listeners) bağladığınız ayrı bir JavaScript dosyasına sahip olmaya alışkın olabilirsiniz. Örneğin, bir HTML dosyasında şu şekilde bir düğme bulunabilir:

```html
<button type="button">Say hi!</button>
```

Ve bir JavaScript dosyasında da şu şekilde biraz kod bulunabilir:

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("hi!");
});
```

JSX'te kullanıcı arayüzünü tanımlayan kod, olay dinleyicilerimizle (event listeners) hemen yan yana yaşar:

```jsx
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>
```

Bu örnekte [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) öğesine bir `onClick` özniteliği (attribute) ekliyoruz. Bu özniteliğin değeri, bir uyarıyı (alert) tetikleyen bir fonksiyondur. Bu, HTML içinde olay dinleyicileri yazmama konusundaki en iyi uygulama (best practice) tavsiyelerine aykırı görünebilir, ancak unutmayın: JSX, HTML değildir.

`onClick` özniteliğinin burada özel bir anlamı vardır: React'e kullanıcı düğmeye tıkladığında belirli bir fonksiyonu çalıştırmasını söyler. Dikkat edilmesi gereken birkaç nokta daha vardır:

- `onClick` ifadesinin [deve hörgücü yazımı (camel-cased)](https://developer.mozilla.org/en-US/docs/Glossary/Camel_case) doğası önemlidir — JSX, `onclick` ifadesini tanımayacaktır (yine bu ifade JavaScript'te ilişkili ancak farklı olan belirli bir amaç için — standart [`onclick`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) işleyici özellikleri için — zaten kullanılmaktadır).
- Tüm tarayıcı olayları JSX'te bu biçimi izler – `on` ve ardından olayın adı.

`Form.jsx` bileşeninden başlayarak bunu uygulamamıza uygulayalım.

#### Form gönderimini işlemek

`Form()` bileşen fonksiyonunun en üstünde (yani `function Form() {` satırının hemen altında), `handleSubmit()` adlı bir fonksiyon oluşturun. Bu fonksiyon [`submit` olayının varsayılan davranışını engellemelidir](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior). Ondan sonra, istediğiniz herhangi bir şeyi söyleyebilecek bir `alert()` tetiklemelidir. Sonuçta şuna benzer görünmelidir:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}
```

Bu fonksiyonu kullanmak için [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form) öğesine bir `onSubmit` özniteliği ekleyin ve değerini `handleSubmit` fonksiyonuna ayarlayın:

```jsx
<form onSubmit={handleSubmit}>{/* … */}</form>
```

Şimdi tarayıcınıza geri döner ve "Add" ("Ekle") düğmesine tıklarsanız, tarayıcınız size "Hello, world!" kelimelerini — veya oraya ne yazmayı seçtiyseniz onu — içeren bir uyarı iletişim kutusu (alert dialog) gösterecektir.

### Geri çağırma prop'ları (Callback props)

React uygulamalarında etkileşim nadiren yalnızca tek bir bileşenle sınırlıdır: bir bileşende gerçekleşen olaylar uygulamanın diğer bölümlerini etkileyecektir. Kendimize yeni görevler oluşturma gücünü vermeye başladığımızda, `<Form />` bileşeninde gerçekleşen şeyler `<App />` içinde işlenen (rendered) listeyi etkileyecektir.

`handleSubmit()` fonksiyonumuzun en sonunda yeni bir görev oluşturmamıza yardımcı olmasını istiyoruz, bu nedenle `<Form />` bileşeninden `<App />` bileşenine bilgi geçirmenin bir yoluna ihtiyacımız var. Standart prop'ları kullanarak üst öğeden alt öğeye (parent to child) veri geçirdiğimiz aynı şekilde alt öğeden üst öğeye (child to parent) veri geçiremeyiz. Bunun yerine, `<App />` içinde formumuzdan girdi olarak bazı veriler bekleyecek bir fonksiyon yazabilir, ardından bu fonksiyonu `<Form />` bileşenine bir prop olarak geçirebiliriz. Prop olarak geçirilen bu fonksiyona **geri çağırma prop'u (callback prop)** denir. Geri çağırma prop'umuza sahip olduğumuzda, `<App />` bileşenine doğru verileri göndermek için onu `<Form />` içinde çağırabiliriz.

#### Geri çağırmalar aracılığıyla form gönderimini işlemek

`App.jsx` içindeki `App()` fonksiyonunun içinde, tek bir `name` parametresine sahip `addTask()` adlı bir fonksiyon oluşturun:

```jsx
function addTask(name) {
  alert(name);
}
```

Ardından, `addTask()` fonksiyonunu `<Form />` bileşenine bir prop olarak geçirin. Prop istediğiniz herhangi bir ada sahip olabilir, ancak daha sonra anlayacağınız bir ad seçin. Fonksiyonun adıyla ve fonksiyonun ne yapacağıyla eşleştiği için `addTask` gibi bir ad işe yarar. `<Form />` bileşeni çağrınız aşağıdaki gibi güncellenmelidir:

```jsx
<Form addTask={addTask} />
```

Bu prop'u kullanmak için `Form.jsx` içindeki `Form()` fonksiyonunun imzasını (signature) parametre olarak `props` kabul edecek şekilde değiştirmeliyiz:

```jsx
function Form(props) {
  // …
}
```

Son olarak, `<Form />` bileşeninizdeki `handleSubmit()` fonksiyonunun içinde bu prop'u kullanabiliriz! Aşağıdaki gibi güncelleyin:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask("Say hello!");
}
```

Tarayıcınızda "Add" düğmesine tıklamak `addTask()` geri çağırma fonksiyonunun çalıştığını kanıtlayacaktır, ancak uyarının bize girdi alanımıza ne yazdığımızı göstermesini sağlayabilseydik çok hoş olurdu! Bir sonraki adımda yapacağımız şey budur.

#### Ek bilgi: adlandırma kuralları üzerine bir not

`addTask()` *fonksiyonu* ile `addTask` *prop'u* arasındaki ilişkinin mümkün olduğunca net kalması için `addTask()` fonksiyonunu `<Form />` bileşenine `addTask` prop'u olarak geçirdik. Ancak prop adlarının belirli bir şey olmak *zorunda* olmadığını aklınızda bulundurun. `addTask()` fonksiyonunu `<Form />` bileşenine şu gibi başka herhangi bir ad altında da geçirebilirdik:

```diff
- <Form addTask={addTask} />
+ <Form onSubmit={addTask} />
```

Bu, `addTask()` fonksiyonunu `<Form />` bileşeni için `onSubmit` prop'u olarak kullanılabilir hale getirirdi. Bu prop `Form.jsx` içinde şu şekilde kullanılabilirdi:

```diff
function handleSubmit(event) {
  event.preventDefault();
- props.addTask("Say hello!");
+ props.onSubmit("Say hello!");
}
```

Burada `on` öneki bize prop'un bir geri çağırma fonksiyonu olduğunu söyler; `Submit` ise bir gönderim (submit) olayının bu fonksiyonu tetikleyeceğine dair ipucumuzdur.

Geri çağırma prop'ları sıklıkla `onSubmit` veya `onClick` gibi tanıdık olay işleyicilerinin adlarıyla eşleşse de, anlamlarını netleştirmeye yardımcı olan hemen hemen her şekilde adlandırılabilirler. Varsayımsal bir `<Menu />` bileşeni, menü açıldığında çalışan bir geri çağırma fonksiyonunun yanı sıra kapatıldığında çalışan ayrı bir geri çağırma fonksiyonu içerebilir:

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

Bu `on*` adlandırma kuralı React ekosisteminde çok yaygındır, bu nedenle öğreniminize devam ederken bunu aklınızda bulundurun. Netlik sağlamak adına, bu eğitimin geri kalanında `addTask` ve benzeri prop adlarına bağlı kalacağız. Bu bölümü okurken herhangi bir prop adını değiştirdiyseniz, devam etmeden önce bunları eski haline getirdiğinizden emin olun!

### Durum (state) ile verileri kalıcı hale getirmek ve değiştirmek

Şimdiye kadar bileşenlerimiz üzerinden veri geçirmek için prop'ları kullandık ve bu işimizi gayet iyi gördü. Ancak artık etkileşimle uğraştığımıza göre, yeni veriler oluşturma, bunları tutma ve daha sonra güncelleme yeteneğine ihtiyacımız var. Prop'lar değiştirilemez (immutable) oldukları için bu iş için doğru araç değildir — bir bileşen kendi prop'larını değiştiremez veya oluşturamaz.

İşte **durum (state)** burada devreye girer. Prop'ları bileşenler arasında iletişim kurmanın bir yolu olarak düşünürsek, durumu da bileşenlere "hafıza" — tutabilecekleri ve gerektiğinde güncelleyebilecekleri bilgiler — vermenin bir yolu olarak düşünebiliriz.

React, bir bileşene durum kazandırmak için yerinde bir şekilde `useState()` olarak adlandırılmış özel bir fonksiyon sağlar.

> [!NOTE]
> `useState()`, her biri bir bileşene yeni işlevsellik eklemek için kullanılabilen **kancalar (hooks)** adlı özel bir fonksiyon kategorisinin parçasıdır. Diğer kancalar hakkında daha sonra bilgi edineceğiz.

`useState()` kullanmak için onu React modülünden içe aktarmamız (`import`) gerekir. `Form.jsx` dosyanızın en üstüne, `Form()` fonksiyon tanımının üstüne aşağıdaki satırı ekleyin:

```jsx
import { useState } from "react";
```

`useState()`, durumun başlangıç değerini belirleyen tek bir argüman alır. Bu argüman bir dize, bir sayı, bir dizi, bir nesne veya başka herhangi bir JavaScript veri türü olabilir. `useState()`, iki öğe içeren bir dizi döndürür. İlk öğe durumun geçerli değeridir; ikinci öğe ise durumu güncellemek için kullanılabilecek bir fonksiyondur.

Bir `name` durumu oluşturalım. `Form()` içinde, `handleSubmit()` fonksiyonunuzun üstüne aşağıdakini yazın:

```jsx
const [name, setName] = useState("Learn React");
```

Bu kod satırında birkaç şey olmaktadır:

- `"Learn React"` değerine sahip bir `name` sabiti tanımlıyoruz.
- İşi `name` değerini değiştirmek olan `setName()` adlı bir fonksiyon tanımlıyoruz.
- `useState()` bu iki şeyi bir dizide döndürür, bu nedenle her ikisini de ayrı değişkenlerde yakalamak için [dizi yapı bozumu (array destructuring)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring) kullanıyoruz.

#### Durumu okumak

`name` durumunu hemen iş başında görebilirsiniz. Formun girdisine bir `value` özniteliği ekleyin ve değerini `name` olarak ayarlayın. Tarayıcınız girdinin içinde "Learn React" ifadesini işleyecektir.

```jsx
<input
  type="text"
  id="new-todo-input"
  className="input input__lg"
  name="text"
  autoComplete="off"
  value={name}
/>
```

İşiniz bittiğinde "Learn React" ifadesini boş bir dizeye değiştirin; başlangıç durumumuz için istediğimiz şey budur:

```jsx
const [name, setName] = useState("");
```

#### Kullanıcı girdisini okumak

`name` değerini değiştirebilmemiz için önce bir kullanıcının girdisini yazarken yakalamamız gerekir. Bunun için `onChange` olayını dinleyebiliriz. Bir `handleChange()` fonksiyonu yazalım ve onu `<input />` öğesi üzerinde dinleyelim.

```jsx
// near the top of the `Form` component
function handleChange() {
  console.log("Typing!");
}

// …

// Down in the return statement
<input
  type="text"
  id="new-todo-input"
  className="input input__lg"
  name="text"
  autoComplete="off"
  value={name}
  onChange={handleChange}
/>;
```

Şu anda girdimizin içine metin girmeye çalıştığınızda değeri değişmeyecektir, ancak tarayıcınız JavaScript konsoluna "Typing!" kelimesini yazdıracaktır; dolayısıyla olay dinleyicimizin girdiye bağlı olduğunu biliyoruz.

Kullanıcının tuş vuruşlarını okumak için girdinin `value` özelliğine erişmeliyiz. Bunu, `handleChange()` fonksiyonunun çağrıldığında aldığı `event` nesnesini okuyarak yapabiliriz. `event` nesnesi de sırasıyla `change` olayını tetikleyen öğeyi temsil eden [bir `target` özelliğine](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) sahiptir. Bu bizim girdimizdir. Dolayısıyla `event.target.value`, girdinin içindeki metindir.

Tarayıcınızın konsolunda görmek için bu değeri `console.log()` ile yazdırabilirsiniz. `handleChange()` fonksiyonunu aşağıdaki gibi güncellemeyi ve sonucu konsolunuzda görmek için girdiye yazmayı deneyin:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

#### Durumu güncellemek

Konsola yazdırmak yeterli değildir — kullanıcının yazdığı şeyi gerçekten saklamak ve girdide işlemek istiyoruz! `console.log()` çağrınızı aşağıda gösterildiği gibi `setName()` olarak değiştirin:

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

Artık girdiye yazdığınızda, tuş vuruşlarınız bekleyebileceğiniz gibi girdiyi dolduracaktır.

Bir adımımız daha var: `handleSubmit()` fonksiyonumuzu argüman olarak `name` ile `props.addTask` çağrısı yapacak şekilde değiştirmemiz gerekiyor. Geri çağırma prop'umuzu hatırlıyor musunuz? Bu, daha sonraki bir tarihte görev listemize ekleyebilmemiz için görevi `App` bileşenine geri göndermeye yarayacaktır. İyi bir uygulama olarak, formunuz gönderildikten sonra girdiyi temizlemelisiniz; bu nedenle bunu yapmak için boş bir dizeyle `setName()` fonksiyonunu tekrar çağıracağız:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

Sonunda tarayıcınızdaki girdi alanına bir şey yazabilir ve _Add_ ("Ekle") düğmesine tıklayabilirsiniz — ne yazdıysanız bir uyarı iletişim kutusunda görünecektir.

`Form.jsx` dosyanız artık şu şekilde okunmalıdır:

```jsx
import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
```

> [!NOTE]
> Bir görev adı girmeden yalnızca `Add` düğmesine basarak boş görevler gönderebildiğinizi fark edeceksiniz. Bunu engellemenin bir yolunu düşünebilir misiniz? Bir ipucu olarak, muhtemelen `handleSubmit()` fonksiyonunun içine bir tür kontrol eklemeniz gerekir.

### Hepsini bir araya getirmek: Bir görev eklemek

Artık olaylar, geri çağırma prop'ları ve kancalarla pratik yaptığımıza göre, bir kullanıcının tarayıcısından yeni bir görev eklemesine olanak tanıyacak işlevselliği yazmaya hazırız.

#### Durum olarak görevler

Görevlerimizi durumda (state) saklayabilmemiz için `useState` kancasını `App.jsx` içine aktarmamız gerekir. `App.jsx` dosyanızın en üstüne aşağıdakini ekleyin:

```jsx
import { useState } from "react";
```

`props.tasks` değerini `useState()` kancasının içine geçirmek istiyoruz – bu, başlangıç durumunu koruyacaktır. `App()` fonksiyon tanımınızın en üstüne aşağıdakini ekleyin:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Artık `taskList` eşlememizi (mapping), `props.tasks` yerine `tasks` eşlemesinin sonucu olacak şekilde değiştirebiliriz. `taskList` sabiti bildiriminiz artık şu şekilde görünmelidir:

```jsx
const taskList = tasks?.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));
```

#### Bir görev eklemek

Artık görev listemizi güncellemek için `addTask()` fonksiyonumuzda kullanabileceğimiz bir `setTasks` kancamız var. Ancak bir sorun var: `addTask()` fonksiyonunun `name` argümanını doğrudan `setTasks` içine geçiremeyiz, çünkü `tasks` bir nesneler dizisidir ve `name` ise bir dizedir. Bunu yapmaya çalışsaydık dizi, dizeyle değiştirilirdi.

Her şeyden önce, `name` değerini mevcut görevlerimizle aynı yapıya sahip bir nesnenin içine koymamız gerekir. `addTask()` fonksiyonunun içinde, diziye eklemek üzere bir `newTask` nesnesi yapacağız.

Ardından kendisine bu yeni görevin eklendiği yeni bir dizi yapmamız ve sonrasında görev verilerinin durumunu bu yeni duruma güncellememiz gerekir. Bunu yapmak için [mevcut diziyi kopyalamak](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array) üzere yayma sözdizimini (spread syntax) kullanabilir ve nesnemizi sona ekleyebiliriz. Daha sonra durumu güncellemek için bu diziyi `setTasks()` içine geçiririz.

Tüm bunları bir araya getirdiğimizde `addTask()` fonksiyonunuz şu şekilde okunmalıdır:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Artık verilerimize bir görev eklemek için tarayıcıyı kullanabilirsiniz! Forma herhangi bir şey yazın ve "Add" düğmesine tıklayın (veya <kbd>Enter</kbd> tuşuna basın); yeni yapılacaklar öğenizin kullanıcı arayüzünde belirdiğini göreceksiniz!

**Ancak başka bir sorunumuz var**: `addTask()` fonksiyonumuz her göreve aynı `id` değerini veriyor. Bu erişilebilirlik açısından kötüdür ve React'in gelecekteki görevleri `key` prop'uyla birbirinden ayırt etmesini imkânsız hale getirir. Aslında React, DevTools konsolunuzda size bir uyarı verecektir — "Warning: Encountered two children with the same key…" ("Uyarı: Aynı anahtara sahip iki alt öğeyle karşılaşıldı…")

Bunu düzeltmemiz gerekiyor. Benzersiz tanımlayıcılar oluşturmak zor bir sorundur – JavaScript topluluğunun bunun için bazı yararlı kütüphaneler yazdığı bir sorun. Çok küçük olduğu ve işe yaradığı için [nanoid](https://github.com/ai/nanoid) kullanacağız.

Uygulamanızın kök dizininde olduğunuzdan emin olun ve aşağıdaki terminal komutunu çalıştırın:

```bash
npm install nanoid
```

> [!NOTE]
> yarn kullanıyorsanız bunun yerine aşağıdakine ihtiyacınız olacaktır: `yarn add nanoid`.

Artık yeni görevlerimiz için benzersiz ID'ler oluşturmak üzere `nanoid` kullanabiliriz. Her şeyden önce, `App.jsx` dosyasının en üstüne aşağıdaki satırı dahil ederek onu içe aktarın:

```jsx
import { nanoid } from "nanoid";
```

Şimdi her görev ID'sinin bir `todo-` öneki artı nanoid tarafından üretilen benzersiz bir dize haline gelmesi için `addTask()` fonksiyonunu güncelleyelim. `newTask` sabiti bildiriminizi şuna güncelleyin:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Her şeyi kaydedin ve uygulamanızı tekrar deneyin — artık yinelenen ID'ler hakkındaki o uyarıyı almadan görevler ekleyebilirsiniz.

### Ara durak: görevleri saymak

Artık yeni görevler ekleyebildiğimize göre bir sorun fark edebilirsiniz: kaç görevimiz olursa olsun başlığımız "3 tasks remaining" ("3 görev kaldı") olarak okunmaktadır! `taskList` uzunluğunu sayarak ve başlığımızın metnini buna göre değiştirerek bunu düzeltebiliriz.

Bunu `App()` tanımınızın içine, return deyiminden önce ekleyin:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

Bu neredeyse doğrudur; tek sorun, listemiz tek bir görev içerdiğinde başlığın yine çoğul "tasks" kelimesini kullanacak olmasıdır. Bunu da bir değişken yapabiliriz. Az önce eklediğiniz kodu aşağıdaki gibi güncelleyin:

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Artık liste başlığının metin içeriğini `headingText` değişkeniyle değiştirebilirsiniz. `<h2>` öğenizi şu şekilde güncelleyin:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

Dosyayı kaydedin, tarayıcınıza geri dönün ve birkaç görev eklemeyi deneyin: sayım artık beklendiği gibi güncellenmelidir.

### Bir görevi tamamlamak

Bir onay kutusuna (checkbox) tıkladığınızda uygun şekilde işaretlendiğini ve işaretinin kaldırıldığını fark edebilirsiniz. HTML'in bir özelliği olarak tarayıcı, bizim yardımımız olmadan hangi onay kutusu girdilerinin işaretli veya işaretsiz olduğunu nasıl hatırlayacağını bilir. Ancak bu özellik bir sorunu gizler: bir onay kutusunun durumunu değiştirmek React uygulamamızdaki durumu (state) değiştirmez. Bu, tarayıcının ve uygulamamızın artık eşzamanlı olmadığı (out-of-sync) anlamına gelir. Tarayıcıyı uygulamamızla tekrar eşzamanlı hale getirmek için kendi kodumuzu yazmamız gerekir.

#### Hatayı (bug) kanıtlamak

Sorunu düzeltmeden önce gerçekleşmesini gözlemleyelim.

`App()` bileşenimizde bir `toggleTaskCompleted()` fonksiyonu yazarak başlayacağız. Bu fonksiyonun bir `id` parametresi olacak, ancak onu henüz kullanmayacağız. Şimdilik dizideki ilk görevi konsola yazdıracağız – tarayıcımızda onu işaretlediğimizde veya işaretini kaldırdığımızda ne olduğunu inceleyeceğiz:

Bunu `taskList` sabiti bildiriminizin hemen üstüne ekleyin:

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

Ardından, `taskList` içinde işlenen her `<Todo />` bileşeninin prop'larına `toggleTaskCompleted` ekleyeceğiz; şu şekilde güncelleyin:

```jsx
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
  />
));
```

Ardından, `Todo.jsx` bileşeninize gidin ve `<input />` öğenize, `props.id` parametresiyle `props.toggleTaskCompleted()` çağrısı yapmak için isimsiz bir fonksiyon kullanması gereken bir `onChange` işleyicisi ekleyin. `<input />` artık şu şekilde görünmelidir:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Her şeyi kaydedip tarayıcınıza geri dönün ve ilk görevimiz olan Eat'in işaretli olduğuna dikkat edin. JavaScript konsolunuzu açın, ardından Eat'in yanındaki onay kutusuna tıklayın. Beklediğimiz gibi işareti kalkar. Ancak JavaScript konsolunuz şuna benzer bir şey yazdıracaktır:

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

Tarayıcıda onay kutusunun işareti kalkar, ancak konsolumuz bize Eat'in hâlâ tamamlanmış (`completed: true`) olduğunu söyler. Sırada bunu düzelteceğiz!

#### Tarayıcıyı verilerimizle eşzamanlamak

`App.jsx` içindeki `toggleTaskCompleted()` fonksiyonumuzu yeniden ziyaret edelim. Yalnızca durumu değiştirilen (toggled) görevin `completed` özelliğini değiştirmesini ve diğerlerinin hepsini olduğu gibi bırakmasını istiyoruz. Bunu yapmak için görev listesi üzerinde `map()` çalıştıracağız ve yalnızca tamamladığımız görevi değiştireceğiz.

`toggleTaskCompleted()` fonksiyonunuzu aşağıdaki gibi güncelleyin:

```jsx
function toggleTaskCompleted(id) {
  const updatedTasks = tasks.map((task) => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      // use object spread to make a new object
      // whose `completed` prop has been inverted
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setTasks(updatedTasks);
}
```

Burada, orijinal `tasks` dizisi üzerinde eşleme yapan bir `updatedTasks` sabiti tanımlıyoruz. Görevin `id` özelliği fonksiyona sağlanan `id` ile eşleşirse, yeni bir nesne oluşturmak için [nesne yayma sözdizimini (object spread syntax)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) kullanırız ve onu döndürmeden önce o nesnenin `completed` özelliğini tersine çeviririz (`!task.completed`). Eşleşmezse orijinal nesneyi döndürürüz.

Ardından durumumuzu güncellemek amacıyla bu yeni diziyle `setTasks()` fonksiyonunu çağırırız.

### Bir görevi silmek

Bir görevi silmek, tamamlanma durumunu değiştirmeye benzer bir kalıbı izleyecektir: durumumuzu güncellemek için bir fonksiyon tanımlamamız, ardından bu fonksiyonu `<Todo />` bileşenine bir prop olarak geçirmemiz ve doğru olay gerçekleştiğinde onu çağırmamız gerekir.

#### `deleteTask` geri çağırma prop'u

Burada `App` bileşeninizde bir `deleteTask()` fonksiyonu yazarak başlayacağız. `toggleTaskCompleted()` gibi bu fonksiyon da bir `id` parametresi alacak ve başlangıç olarak bu `id` değerini konsola yazdıracağız. `toggleTaskCompleted()` altına aşağıdakini ekleyin:

```jsx
function deleteTask(id) {
  console.log(id);
}
```

Ardından, `<Todo />` bileşenleri dizimize bir geri çağırma prop'u daha ekleyin:

```jsx
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
  />
));
```

`Todo.jsx` içinde, "Delete" ("Sil") düğmesine basıldığında `props.deleteTask()` çağrısı yapmak istiyoruz. Durumdan doğru görevi silebilmesi için `deleteTask()` fonksiyonunun kendisini çağıran görevin ID'sini bilmesi gerekir.

`Todo.jsx` içindeki "Delete" düğmesini şu şekilde güncelleyin:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Artık uygulamadaki "Delete" düğmelerinden herhangi birine tıkladığınızda, tarayıcı konsolunuz ilgili görevin ID'sini yazdırmalıdır.

Bu noktada `Todo.jsx` dosyanız şu şekilde görünmelidir:

```jsx
function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;
```

### Görevleri durumdan ve kullanıcı arayüzünden silmek

Artık `deleteTask()` fonksiyonunun doğru şekilde çağrıldığını bildiğimize göre, o görevi hem uygulamanın durumundan hem de görsel olarak uygulama kullanıcı arayüzünden gerçekten silmek için `deleteTask()` içinde `setTasks()` kancamızı çağırabiliriz. `setTasks()` argüman olarak bir dizi beklediğinden, ona mevcut görevleri kopyalayan, ancak ID'si `deleteTask()` içine geçirilenle eşleşen görevi *hariç tutan* yeni bir dizi sağlamalıyız.

Bu, [`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) kullanmak için mükemmel bir fırsattır. Her görevi test edebilir ve `id` prop'u `deleteTask()` içine geçirilen `id` argümanıyla eşleşiyorsa bir görevi yeni diziden hariç tutabiliriz.

`App.jsx` dosyanızın içindeki `deleteTask()` fonksiyonunu aşağıdaki gibi güncelleyin:

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

Uygulamanızı tekrar deneyin. Artık uygulamanızdan bir görevi silebilmelisiniz!

Bu noktada `App.jsx` dosyanız şu şekilde görünmelidir:

```jsx
import { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
```

### Özet

Bir makale için bu kadarı yeterli. Burada size React'in olaylarla nasıl başa çıktığına ve durumu nasıl işlediğine dair tüm ayrıntıları verdik ve görev ekleme, görevleri silme ve görevleri tamamlandı olarak değiştirme işlevselliğini uyguladık. Neredeyse hedefe ulaştık. Bir sonraki makalede mevcut görevleri düzenleme ve görev listesini tümü, tamamlananlar ve tamamlanmayanlar arasında filtreleme işlevselliğini uygulayacağız. Bu süreçte koşullu kullanıcı arayüzü işlemeye (conditional UI rendering) bakacağız.

---

## 40. React Etkileşimi: Düzenleme, Filtreleme, Koşullu İşleme (React interactivity: Editing, filtering, conditional rendering)

**Kaynak:** [React interactivity: Editing, filtering, conditional rendering](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering)

(En azından şimdilik) React yolculuğumuzun sonuna yaklaşırken, Todo listesi uygulamamızdaki ana işlevsellik alanlarına son dokunuşları ekleyeceğiz. Bu, mevcut görevleri düzenlemenize ve görev listesini tümü, tamamlananlar ve tamamlanmayanlar arasında filtrelemenize olanak tanımayı içerir. Bu süreçte koşullu kullanıcı arayüzü işlemeye (conditional UI rendering) bakacağız.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Çekirdek <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a> ve
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> dillerine ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">terminal/komut satırına</a> aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        React'te koşullu işleme (conditional rendering) ve uygulamamızda liste filtreleme ile bir düzenleme kullanıcı arayüzü uygulamak.
      </td>
    </tr>
  </tbody>
</table>

### Bir görevin adını düzenlemek

Bir görevin adını düzenlemek için henüz bir kullanıcı arayüzümüz yok. Birazdan ona geleceğiz. Başlangıç olarak, en azından `App.jsx` içinde bir `editTask()` fonksiyonu uygulayabiliriz. Hedef nesnesini bulmak için bir `id` alacağı için `deleteTask()` fonksiyonuna benzeyecektir, ancak görevin güncelleneceği adı içeren bir `newName` özelliği de alacaktır. Diziden bir şey silmek yerine bazı değişikliklerle yeni bir dizi döndürmek istediğimiz için [`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) yerine [`Array.prototype.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) kullanacağız.

`<App />` bileşeninizin içine, diğer fonksiyonlarla aynı yere `editTask()` fonksiyonunu ekleyin:

```jsx
function editTask(id, newName) {
  const editedTaskList = tasks.map((task) => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      // Copy the task and update its name
      return { ...task, name: newName };
    }
    // Return the original task if it's not the edited task
    return task;
  });
  setTasks(editedTaskList);
}
```

`deleteTask` ile yaptığımız aynı şekilde `editTask` fonksiyonunu `<Todo />` bileşenlerimize bir prop olarak geçirin:

```jsx
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask}
  />
));
```

Şimdi `Todo.jsx` dosyasını açın. Biraz yeniden düzenleme (refactoring) yapacağız.

### Düzenleme için bir kullanıcı arayüzü

Kullanıcıların bir görevi düzenlemesine izin vermek için onlara bunu yapabilecekleri bir kullanıcı arayüzü sağlamamız gerekir. İlk olarak, daha önce `<App />` bileşeniyle yaptığımız gibi `useState` kancasını `<Todo />` bileşenine içe aktarın:

```jsx
import { useState } from "react";
```

Varsayılan değeri `false` olan bir `isEditing` durumu (state) ayarlamak için bunu kullanacağız. `<Todo />` bileşeni tanımınızın en üstünün hemen içine aşağıdaki satırı ekleyin:

```jsx
const [isEditing, setEditing] = useState(false);
```

Ardından, `<Todo />` bileşenini yeniden düşüneceğiz. Şu andan itibaren, şimdiye kadar kullandığı tek şablon yerine olası iki "şablondan" ("templates") birini görüntülemesini istiyoruz:

- Yalnızca bir yapılacak işi görüntülerken kullanılan "görünüm" ("view") şablonu; eğitimde şimdiye kadar kullandığımız şey budur.
- Bir yapılacak işi düzenlerken kullanılan "düzenleme" ("editing") şablonu. Şimdi bunu oluşturmak üzereyiz.

Bu kod bloğunu `Todo()` fonksiyonunun içine, `useState()` kancanızın altına ancak `return` deyiminin üstüne kopyalayın:

```jsx
const editingTemplate = (
  <form className="stack-small">
    <div className="form-group">
      <label className="todo-label" htmlFor={props.id}>
        New name for {props.name}
      </label>
      <input id={props.id} className="todo-text" type="text" />
    </div>
    <div className="btn-group">
      <button type="button" className="btn todo-cancel">
        Cancel
        <span className="visually-hidden">renaming {props.name}</span>
      </button>
      <button type="submit" className="btn btn__primary todo-edit">
        Save
        <span className="visually-hidden">new name for {props.name}</span>
      </button>
    </div>
  </form>
);
const viewTemplate = (
  <div className="stack-small">
    <div className="c-cb">
      <input
        id={props.id}
        type="checkbox"
        defaultChecked={props.completed}
        onChange={() => props.toggleTaskCompleted(props.id)}
      />
      <label className="todo-label" htmlFor={props.id}>
        {props.name}
      </label>
    </div>
    <div className="btn-group">
      <button type="button" className="btn">
        Edit <span className="visually-hidden">{props.name}</span>
      </button>
      <button
        type="button"
        className="btn btn__danger"
        onClick={() => props.deleteTask(props.id)}>
        Delete <span className="visually-hidden">{props.name}</span>
      </button>
    </div>
  </div>
);
```

Artık iki ayrı sabitin içinde tanımlanmış iki farklı şablon yapımız — "edit" ve "view" — var. Bu, `<Todo />` bileşeninin `return` deyiminin artık kendini tekrar ettiği anlamına gelir — o da "view" şablonunun bir tanımını içermektedir. Bileşenin hangi şablonu döndüreceğini ve dolayısıyla kullanıcı arayüzünde hangisinin işleneceğini belirlemek üzere **koşullu işleme (conditional rendering)** kullanarak bunu temizleyebiliriz.

### Koşullu işleme

JSX'te, tarayıcı tarafından neyin işleneceğini değiştirmek için bir koşul kullanabiliriz. JSX'te bir koşul yazmak için bir [üçlü operatör (ternary operator)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) kullanabiliriz.

`<Todo />` bileşenimiz durumunda koşulumuz şudur: "Bu görev düzenleniyor mu?" `Todo()` içindeki `return` deyimini şu şekilde okunacak biçimde değiştirin:

```jsx
return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
```

Tarayıcınız tüm görevlerinizi tıpkı daha önceki gibi işlemelidir. Düzenleme şablonunu görmek için şimdilik kodunuzda varsayılan `isEditing` durumunu `false` değerinden `true` değerine değiştirmeniz gerekecektir; bir sonraki bölümde düzenle düğmesinin bunu değiştirmesini (toggle) sağlamaya bakacağız!

### `<Todo />` şablonları arasında geçiş yapmak

Sonunda, son çekirdek özelliğimizi etkileşimli hale getirmeye hazırız. Başlangıç olarak, şablonlar arasında geçiş yapabilmemiz için bir kullanıcı `viewTemplate` içindeki "Edit" ("Düzenle") düğmesine bastığında `true` değeriyle `setEditing()` fonksiyonunu çağırmak istiyoruz.

`viewTemplate` içindeki "Edit" düğmesini şu şekilde güncelleyin:

```jsx
<button type="button" className="btn" onClick={() => setEditing(true)}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Şimdi aynı `onClick` işleyicisini `editingTemplate` içindeki "Cancel" ("İptal") düğmesine ekleyeceğiz, ancak bu kez bizi görünüm şablonuna geri döndürmesi için `isEditing` durumunu `false` olarak ayarlayacağız.

`editingTemplate` içindeki "Cancel" düğmesini şu şekilde güncelleyin:

```jsx
<button
  type="button"
  className="btn todo-cancel"
  onClick={() => setEditing(false)}>
  Cancel
  <span className="visually-hidden">renaming {props.name}</span>
</button>
```

Bu kod yerindeyken, şablonlar arasında geçiş yapmak için yapılacaklar öğelerinizdeki "Edit" ve "Cancel" düğmelerine basabilmelisiniz.

![Düzenle ve sil düğmelerinin mevcut olduğu görünüm şablonunu gösteren eat yapılacaklar öğesi](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/frameworks_libraries/react_interactivity_filtering_conditional_rendering/view.png)

![Yeni bir ad girmek için bir girdi alanı ve iptal ile kaydet düğmelerinin mevcut olduğu düzenleme şablonunu gösteren eat yapılacaklar öğesi](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/frameworks_libraries/react_interactivity_filtering_conditional_rendering/edit.png)

Bir sonraki adım, düzenleme işlevselliğinin gerçekten çalışmasını sağlamaktır.

### Kullanıcı arayüzünden düzenleme yapmak

Yapmak üzere olduğumuz şeylerin büyük kısmı `Form.jsx` içinde yaptığımız çalışmayı yansıtacaktır: kullanıcı yeni girdi alanımıza yazarken girdiği metni takip etmemiz gerekir; formu gönderdiğinde ise durumumuzu görevin yeni adıyla güncellemek için bir geri çağırma prop'u kullanmamız gerekir.

Yeni adı saklamak ve ayarlamak için yeni bir kanca oluşturarak başlayacağız. Yine `Todo.jsx` içinde, mevcut kancanın altına aşağıdakini koyun:

```jsx
const [newName, setNewName] = useState("");
```

Ardından, yeni adı ayarlayacak bir `handleChange()` fonksiyonu oluşturun; bunu kancaların altına ancak şablonların önüne koyun:

```jsx
function handleChange(e) {
  setNewName(e.target.value);
}
```

Şimdi `editingTemplate` şablonumuzun `<input />` alanını güncelleyeceğiz; bir `newName` `value` özniteliği ayarlayacağız ve `handleChange()` fonksiyonumuzu onun `onChange` olayına bağlayacağız. Aşağıdaki gibi güncelleyin:

```jsx
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
/>
```

Son olarak, düzenleme formunun `onSubmit` olayını işleyecek bir fonksiyon oluşturmamız gerekiyor. `handleChange()` fonksiyonunun hemen altına aşağıdakini ekleyin:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.editTask(props.id, newName);
  setNewName("");
  setEditing(false);
}
```

`editTask()` geri çağırma prop'umuzun, yeni adının yanı sıra düzenlediğimiz görevin ID'sine de ihtiyaç duyduğunu unutmayın.

`editingTemplate` şablonunun `<form>` öğesine aşağıdaki `onSubmit` işleyicisini ekleyerek bu fonksiyonu formun `submit` olayına bağlayın:

```jsx
<form className="stack-small" onSubmit={handleSubmit}>
  {/* … */}
</form>
```

Artık tarayıcınızda bir görevi düzenleyebilmelisiniz. Bu noktada `Todo.jsx` dosyanız şu şekilde görünmelidir:

```jsx
function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}>
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => {
            setEditing(true);
          }}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;
```

### Filtre düğmelerine geri dönüş

Artık ana özelliklerimiz tamamlandığına göre filtre düğmelerimiz hakkında düşünebiliriz. Şu anda "All" ("Tümü") etiketini tekrarlıyorlar ve hiçbir işlevsellikleri yok! `<Todo />` bileşenimizde kullandığımız bazı becerileri şunları yapmak için yeniden uygulayacağız:

- Etkin filtreyi saklamak için bir kanca oluşturmak.
- Kullanıcıların etkin filtreyi tümü, tamamlananlar ve tamamlanmayanlar arasında değiştirmesine olanak tanıyan bir `<FilterButton />` öğeleri dizisi işlemek.

#### Bir filtre kancası eklemek

`App()` fonksiyonunuza bir filtreyi okuyan ve ayarlayan yeni bir kanca ekleyin. Başlangıçta tüm görevlerimiz gösterilmesi gerektiğinden varsayılan filtrenin `All` olmasını istiyoruz:

```jsx
const [filter, setFilter] = useState("All");
```

#### Filtrelerimizi tanımlamak

Şu anda hedefimiz iki yönlüdür:

- Her filtrenin benzersiz bir adı olmalıdır.
- Her filtrenin benzersiz bir davranışı olmalıdır.

Bir JavaScript nesnesi, adları davranışlarla ilişkilendirmek için harika bir yol olacaktır: her anahtar bir filtrenin adıdır; her özellik ise o adla ilişkili davranıştır.

`App.jsx` dosyasının en üstüne, içe aktarmalarımızın altına ancak `App()` fonksiyonumuzun üstüne `FILTER_MAP` adlı bir nesne ekleyelim:

```jsx
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
```

`FILTER_MAP` değerleri, `tasks` veri dizisini filtrelemek için kullanacağımız fonksiyonlardır:

- `All` filtresi tüm görevleri gösterir, bu nedenle tüm görevler için `true` döndürürüz.
- `Active` filtresi, `completed` prop'u `false` olan görevleri gösterir.
- `Completed` filtresi, `completed` prop'u `true` olan görevleri gösterir.

Önceki eklememizin altına aşağıdakini ekleyin — burada bir `FILTER_NAMES` dizisi toplamak için [`Object.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) metodunu kullanıyoruz:

```jsx
const FILTER_NAMES = Object.keys(FILTER_MAP);
```

> [!NOTE]
> Bu sabitleri `App()` fonksiyonumuzun dışında tanımlıyoruz çünkü içinde tanımlansalardı `<App />` bileşeni her yeniden işlendiğinde (re-render) yeniden hesaplanırlardı ve biz bunu istemiyoruz. Uygulamamız ne yaparsa yapsın bu bilgiler asla değişmeyecektir.

#### Filtreleri işlemek

Artık `FILTER_NAMES` dizisine sahip olduğumuza göre, üç filtremizin tamamını işlemek için onu kullanabiliriz. `App()` fonksiyonunun içinde, adlar dizimiz üzerinde eşleme yapmak ve bir `<FilterButton />` bileşeni döndürmek için kullanacağımız `filterList` adlı bir sabit oluşturabiliriz. Unutmayın, burada da anahtarlara (`key`) ihtiyacımız var.

`taskList` sabiti bildiriminizin altına aşağıdakini ekleyin:

```jsx
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton key={name} name={name} />
));
```

Şimdi `App.jsx` içindeki tekrarlanan üç `<FilterButton />` bileşenini bu `filterList` ile değiştireceğiz. Aşağıdakini:

```jsx
<div className="filters btn-group stack-exception">
  <FilterButton />
  <FilterButton />
  <FilterButton />
</div>
```

Şununla değiştirin:

```jsx
<div className="filters btn-group stack-exception">{filterList}</div>
```

Bu henüz çalışmayacaktır. Önce yapmamız gereken biraz daha iş var.

#### Etkileşimli filtreler

Filtre düğmelerimizi etkileşimli hale getirmek için hangi prop'ları kullanmaları gerektiğini düşünmeliyiz.

- `<FilterButton />` bileşeninin o anda basılı olup olmadığını bildirmesi gerektiğini ve adı filtre durumumuzun geçerli değeriyle eşleşiyorsa basılı olması gerektiğini biliyoruz.
- `<FilterButton />` bileşeninin etkin filtreyi ayarlamak için bir geri çağırmaya (callback) ihtiyacı olduğunu biliyoruz. `setFilter` kancamızdan doğrudan yararlanabiliriz.

`filterList` sabitinizi aşağıdaki gibi güncelleyin:

```jsx
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
  />
));
```

Daha önce `<Todo />` bileşenimizle yaptığımız aynı şekilde, şimdi de ona verdiğimiz prop'ları kullanması için `FilterButton.jsx` dosyasını güncellememiz gerekiyor. Aşağıdakilerin her birini yapın ve bu değişkenleri okumak için süslü parantezler kullanmayı unutmayın!

- `all` ifadesini `{props.name}` ile değiştirin.
- `aria-pressed` değerini `{props.isPressed}` olarak ayarlayın.
- Filtrenin adıyla `props.setFilter()` çağrısı yapan bir `onClick` işleyicisi ekleyin.

Tüm bunlar yapıldıktan sonra `FilterButton.jsx` dosyanız şu şekilde okunmalıdır:

```jsx
function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}>
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
```

Tarayıcınızı tekrar ziyaret edin. Farklı düğmelere kendi ilgili adlarının verildiğini görmelisiniz. Bir filtre düğmesine bastığınızda metninin yeni bir dış çizgi aldığını görmelisiniz — bu size seçildiğini söyler. Ve düğmelere tıklarken DevTool'unuzun Sayfa Denetçisine (Page Inspector) bakarsanız, `aria-pressed` özniteliği değerlerinin buna göre değiştiğini görürsünüz.

![Uygulamanın üç filtre düğmesi - all, active ve completed - completed etrafında bir odak vurgusu var](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/frameworks_libraries/react_interactivity_filtering_conditional_rendering/filter-buttons.png)

Ancak düğmelerimiz kullanıcı arayüzündeki yapılacak işleri hâlâ gerçekten filtrelemiyor! Şimdi bunu tamamlayalım.

#### Kullanıcı arayüzünde görevleri filtrelemek

Şu anda `App()` içindeki `taskList` sabitimiz görevler durumu üzerinde eşleme yapmakta ve hepsi için yeni bir `<Todo />` bileşeni döndürmektedir. İstediğimiz şey bu değildir! Bir görev yalnızca seçilen filtrenin uygulanmasının sonuçlarına dahilse işlenmelidir. Görevler durumu üzerinde eşleme yapmadan önce, işlemek istemediğimiz nesneleri elemek için onu ([`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) ile) filtrelemeliyiz.

`taskList` sabitinizi şu şekilde güncelleyin:

```jsx
const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
```

`Array.prototype.filter()` içinde hangi geri çağırma fonksiyonunun kullanılacağına karar vermek için, `FILTER_MAP` içinde filtre durumumuzun anahtarına karşılık gelen değere erişiriz. Örneğin filtre `All` olduğunda, `FILTER_MAP[filter]` ifadesi `() => true` olarak değerlendirilecektir.

Tarayıcınızda bir filtre seçmek artık onun ölçütlerini karşılamayan görevleri kaldıracaktır. Listenin üstündeki başlıktaki sayım da listeyi yansıtacak şekilde değişecektir!

![Filtre düğmeleri yerindeyken uygulama. Active vurgulanmıştır, dolayısıyla yalnızca etkin yapılacaklar öğeleri gösterilmektedir.](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/frameworks_libraries/react_interactivity_filtering_conditional_rendering/filtered-todo-list.png)

### Özet

İşte bu kadar — uygulamamız artık işlevsel olarak tamamlandı. Ancak artık tüm özelliklerimizi uyguladığımıza göre, daha geniş bir kullanıcı yelpazesinin uygulamamızı kullanabilmesini sağlamak için birkaç iyileştirme yapabiliriz. Bir sonraki makalemiz, hem yalnızca klavye kullananlar hem de ekran okuyucu kullanıcıları için kullanılabilirliği artırabilecek ve kafa karışıklığını azaltabilecek React'te odak yönetimini (focus management) dahil etmeye bakarak React eğitimlerimizi tamamlıyor.

---

## 41. React'te Erişilebilirlik (Accessibility in React)

**Kaynak:** [Accessibility in React](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility)

Son eğitim makalemizde, hem yalnızca klavye kullananlar hem de ekran okuyucu kullanıcıları için kullanılabilirliği artırabilecek ve kafa karışıklığını azaltabilecek React'te odak yönetimi (focus management) de dahil olmak üzere erişilebilirliğe odaklanacağız (kelime oyunu kasıtlıdır).

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Çekirdek <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a> ve
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> dillerine ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">terminal/komut satırına</a> aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>React'te klavye erişilebilirliğini uygulamak.</td>
    </tr>
  </tbody>
</table>

### Klavye kullanıcılarını dahil etmek

Bu noktada, uygulamaya koyulduğumuz tüm özellikleri uyguladık. Kullanıcılar yeni bir görev ekleyebilir, görevleri işaretleyip işaretini kaldırabilir, görevleri silebilir veya görev adlarını düzenleyebilir. Ayrıca görev listelerini tümü, etkin veya tamamlanan görevlere göre filtreleyebilirler.

Ya da en azından tüm bu şeyleri bir fareyle yapabilirler. Ne yazık ki bu özellikler yalnızca klavye kullananlar için pek erişilebilir değildir. Şimdi bunu keşfedelim.

### Klavye kullanılabilirliği sorununu keşfetmek

Sanki yeni bir görev ekleyecekmişsiniz gibi uygulamamızın en üstündeki girdiye tıklayarak başlayın. O girdinin etrafında kalın, kesikli bir dış çizgi (outline) göreceksiniz. Bu dış çizgi, tarayıcının o anda bu öğeye odaklandığını gösteren görsel göstergenizdir. <kbd>Tab</kbd> tuşuna basın; dış çizginin girdinin altındaki "Add" ("Ekle") düğmesinin etrafında belirdiğini göreceksiniz. Bu size tarayıcının odağının hareket ettiğini gösterir.

Birkaç kez daha <kbd>Tab</kbd> tuşuna basın; bu kesikli odak göstergesinin filtre düğmelerinin her biri arasında hareket ettiğini göreceksiniz. Odak göstergesi ilk "Edit" ("Düzenle") düğmesinin etrafına gelene kadar devam edin. <kbd>Enter</kbd> tuşuna basın.

`<Todo />` bileşeni tasarladığımız gibi şablon değiştirecek ve görevin adını düzenlememize izin veren bir form göreceksiniz.

Ama odak göstergemiz nereye gitti?

`<Todo />` bileşenimizde şablonlar arasında geçiş yaptığımızda, eski şablondaki öğeleri tamamen kaldırır ve onları yeni şablondaki öğelerle değiştiririz. Bu, odaklandığımız öğenin artık var olmadığı anlamına gelir; dolayısıyla tarayıcının odağının nerede olduğuna dair hiçbir görsel ipucu yoktur. Bu durum çok çeşitli kullanıcıların — özellikle klavyeye güvenen kullanıcıların veya yardımcı teknoloji (assistive technology) kullanan kullanıcıların — kafasını karıştırabilir.

Klavye ve yardımcı teknoloji kullanıcıları için deneyimi iyileştirmek amacıyla tarayıcının odağını kendimiz yönetmeliyiz.

#### Ek bilgi: odak göstergemiz üzerine bir not

Farenizle "All", "Active" veya "Completed" filtre düğmelerine tıklarsanız görünür bir odak göstergesi *görmezsiniz*, ancak klavyenizdeki <kbd>Tab</kbd> tuşuyla aralarında hareket ederseniz görürsünüz. Endişelenmeyin — kodunuz bozuk değil!

CSS dosyamız odak göstergesine özel biçimlendirme sağlamak için [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) sözde sınıfını (pseudo-class) kullanır ve tarayıcı bunu kullanıcıya ne zaman göstereceğini belirlemek için bir dizi dahili kural kullanır. Genel olarak tarayıcı klavye girdisine yanıt olarak bir odak göstergesi *gösterecek* ve fare girdisine yanıt olarak *gösterebilecektir*. `<button>` öğeleri fare girdisine yanıt olarak odak göstergesi *göstermezken*, `<input>` öğeleri *gösterir*.

`:focus-visible` davranışı, daha aşina olabileceğiniz daha eski [`:focus`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) sözde sınıfından daha seçicidir. `:focus` çok daha fazla durumda bir odak göstergesi gösterir ve tercih ederseniz onu `:focus-visible` yerine veya onunla birlikte kullanabilirsiniz.

### Şablonlar arasında odaklanma

Bir kullanıcı `<Todo />` şablonunu görüntülemeden düzenlemeye değiştirdiğinde, onu yeniden adlandırmak için kullanılan `<input>` öğesine odaklanmalıyız; düzenlemeden görüntülemeye geri döndüğünde ise odağı "Edit" düğmesine geri taşımalıyız.

#### Öğelerimizi hedeflemek

Bu noktaya kadar JSX bileşenleri yazıyor ve React'in perde arkasında ortaya çıkan DOM'u oluşturmasına izin veriyorduk. Çoğu zaman DOM'daki belirli öğeleri hedeflememize gerek kalmaz çünkü neyin işleneceğini kontrol etmek için React'in durumunu (state) ve prop'larını kullanabiliriz. Ancak odağı yönetmek için belirli DOM öğelerini hedefleyebilmemiz *gerekir*.

İşte `useRef()` kancası burada devreye girer.

İlk olarak, `Todo.jsx` dosyasının en üstündeki `import` deyimini `useRef` içerecek şekilde değiştirin:

```jsx
import { useRef, useState } from "react";
```

`useRef()` tek bir özelliğe sahip bir nesne oluşturur: `current`. Ref'ler istediğimiz her değeri saklayabilir ve daha sonra bu değerlere bakabiliriz. Hatta DOM öğelerine olan başvuruları (references) bile saklayabiliriz ki burada tam olarak yapacağımız şey budur.

Ardından, `Todo()` fonksiyonunuzdaki `useState()` kancalarının altında iki yeni sabit oluşturun. Her biri bir ref olmalıdır – biri görünüm şablonundaki "Edit" düğmesi için ve biri düzenleme şablonundaki düzenleme alanı için.

```jsx
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```

Bu ref'ler, DOM öğelerine bağlanana kadar boş olacaklarını netleştirmek için `null` varsayılan değerine sahiptir. Onları öğelerine bağlamak için her öğenin JSX'ine özel `ref` özniteliğini ekleyeceğiz ve bu özniteliklerin değerlerini uygun şekilde adlandırılmış `ref` nesnelerine ayarlayacağız.

Düzenleme şablonunuzdaki `<input>` öğesini şu şekilde okunacak biçimde güncelleyin:

```jsx
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
  ref={editFieldRef}
/>
```

Görünüm şablonunuzdaki "Edit" düğmesini şu şekilde okunacak biçimde güncelleyin:

```jsx
<button
  type="button"
  className="btn"
  onClick={() => setEditing(true)}
  ref={editButtonRef}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Bunu yapmak `editFieldRef` ve `editButtonRef` nesnelerimizi bağlı oldukları DOM öğelerine olan başvurularla dolduracaktır, ancak *yalnızca* React bileşeni işledikten sonra. Bunu kendiniz test edin: `Todo()` fonksiyonunuzun gövdesinde bir yere, `editButtonRef` nesnesinin başlatıldığı yerin altına aşağıdaki satırı ekleyin:

```jsx
console.log(editButtonRef.current);
```

Bileşen ilk işlendiğinde `editButtonRef.current` değerinin `null` olduğunu göreceksiniz, ancak bir "Edit" düğmesine tıklarsanız konsola `<button>` öğesini yazdıracaktır. Bunun nedeni ref'in yalnızca bileşen işlendikten sonra doldurulması ve "Edit" düğmesine tıklamanın bileşenin yeniden işlenmesine neden olmasıdır. Devam etmeden önce bu konsol yazdırma satırını sildiğinizden emin olun.

> [!NOTE]
> Uygulamamızda 3 adet `<Todo />` örneği bulunduğu ve React geliştirme ortamında bileşenlerimizi iki kez işlediği için konsol kayıtlarınız 6 kez görünecektir.

Yaklaşıyoruz! Yeni başvurulan öğelerimizden yararlanmak için başka bir React kancası kullanmamız gerekiyor: `useEffect()`.

#### `useEffect()` uygulamak

[`useEffect()`](https://react.dev/reference/react/useEffect), işleme sürecine eklemek istediğimiz ancak ana fonksiyon gövdesinin içinde çalıştırılamayan tüm yan etkileri (side-effects) çalıştırdığı için bu şekilde adlandırılmıştır. `useEffect()` bir bileşen işlendikten hemen sonra çalışır; bu da önceki bölümde başvurduğumuz DOM öğelerinin kullanmamız için mevcut olacağı anlamına gelir.

`useEffect` eklemek için `Todo.jsx` dosyasının içe aktarma deyimini tekrar değiştirin:

```jsx
import { useEffect, useRef, useState } from "react";
```

`useEffect()` argüman olarak bir fonksiyon alır; bu fonksiyon bileşen işlendikten *sonra* yürütülür. Bunu göstermek için, `Todo()` gövdesindeki `return` deyiminin hemen üstüne aşağıdaki `useEffect()` çağrısını koyun ve içine konsolunuza "side effect" kelimelerini yazdıran bir fonksiyon geçirin:

```jsx
useEffect(() => {
  console.log("side effect");
});
```

Ana işleme süreci ile `useEffect()` içinde çalıştırılan kod arasındaki farkı göstermek için bir konsol kaydı daha ekleyin – bunu önceki eklemenin altına koyun:

```jsx
console.log("main render");
```

Şimdi uygulamayı tarayıcınızda açın. Konsolunuzda her biri birden çok kez tekrarlanan her iki mesajı da görmelisiniz. Kodda "side effect" kaydı önce görünmesine rağmen, "main render" kaydının nasıl birinci ve "side effect" kaydının nasıl ikinci yazdırıldığına dikkat edin.

```plain
main render                                     Todo.jsx
side effect                                     Todo.jsx
```

Yine, kayıtlar bu şekilde sıralanmıştır çünkü `useEffect()` içindeki kod bileşen işlendikten *sonra* çalışır. Buna alışmak biraz zaman alır; ilerlerken bunu yalnızca aklınızda bulundurun. Şimdilik `console.log("main render")` satırını silin ve odak yönetimimizi uygulamaya geçelim.

#### Düzenleme alanımıza odaklanmak

Artık `useEffect()` kancamızın çalıştığını bildiğimize göre onunla odağı yönetebiliriz. Bir hatırlatma olarak, düzenleme şablonuna geçtiğimizde düzenleme alanına odaklanmak istiyoruz.

Mevcut `useEffect()` kancanızı şu şekilde okunacak biçimde güncelleyin:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  }
}, [isEditing]);
```

Bu değişiklikler, `isEditing` doğru (`true`) ise React'in `editFieldRef` nesnesinin geçerli değerini okumasını ve tarayıcı odağını ona taşımasını sağlar. Ayrıca `useEffect()` içine ikinci bir argüman olarak bir dizi geçiririz. Bu dizi, `useEffect()` kancasının bağımlı olması gereken değerlerin bir listesidir. Bu değerler dahil edildiğinde, `useEffect()` yalnızca bu değerlerden biri değiştiğinde çalışacaktır. Odağı yalnızca `isEditing` değeri değiştiğinde değiştirmek istiyoruz.

Şimdi deneyin: "Edit" düğmelerinden birine gitmek için <kbd>Tab</kbd> tuşunu kullanın, ardından <kbd>Enter</kbd> tuşuna basın. `<Todo />` bileşeninin düzenleme şablonuna geçtiğini görmelisiniz ve tarayıcı odak göstergesi `<input>` öğesinin etrafında belirmelidir!

#### Odağı düzenle düğmesine geri taşımak

İlk bakışta, düzenleme kaydedildiğinde veya iptal edildiğinde React'in odağı "Edit" düğmemize geri taşımasını sağlamak aldatıcı bir şekilde kolay görünür. Elbette `isEditing` değeri `false` ise düzenle düğmesine odaklanmak için `useEffect` kancamıza bir koşul ekleyebiliriz, değil mi? Şimdi deneyelim — `useEffect()` çağrınızı şu şekilde güncelleyin:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);
```

Bu bir nevi çalışır. "Edit" düğmesini tetiklemek için klavyenizi kullanırsanız (unutmayın: <kbd>Tab</kbd> ile üzerine gelin ve <kbd>Enter</kbd> tuşuna basın), bir düzenlemeyi başlattığınızda ve bitirdiğinizde odağınızın Düzenleme `<input>` öğesi ile "Edit" düğmesi arasında hareket ettiğini göreceksiniz. Ancak yeni bir sorun fark etmiş olabilirsiniz — son `<Todo />` bileşenindeki "Edit" düğmesine, biz uygulamayla daha etkileşime bile girmeden sayfa yüklendiğinde hemen odaklanılmaktadır!

`useEffect()` kancamız tam olarak tasarladığımız gibi davranmaktadır: bileşen işlenir işlenmez çalışır, `isEditing` değerinin `false` olduğunu görür ve "Edit" düğmesine odaklanır. Üç adet `<Todo />` örneği vardır ve odak en son işlenenin "Edit" düğmesine verilir.

Odağın yalnızca `isEditing` bir değerden diğerine değiştiğinde değişmesi için yaklaşımımızı yeniden düzenlememiz (refactor) gerekiyor.

### Daha sağlam odak yönetimi

İyileştirilmiş ölçütlerimizi karşılamak için yalnızca `isEditing` değerini değil, aynı zamanda *o değerin ne zaman değiştiğini* de bilmemiz gerekir. Bunu yapmak için `isEditing` sabitinin önceki değerini okuyabilmemiz gerekir. Sözde kod (pseudocode) kullanırsak mantığımız şuna benzer olmalıdır:

```jsx
if (wasNotEditingBefore && isEditingNow) {
  focusOnEditField();
} else if (wasEditingBefore && isNotEditingNow) {
  focusOnEditButton();
}
```

React ekibi [bir bileşenin önceki durumunu almanın yollarını](https://legacy.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state) tartışmış ve bu iş için kullanabileceğimiz örnek bir kanca sağlamıştır.

#### `usePrevious()` sahneye çıkıyor

`Todo.jsx` dosyasının üst kısmına yakın bir yere, `Todo()` fonksiyonunuzun üstüne aşağıdaki kodu yapıştırın.

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

`usePrevious()`, işlemeler (renders) arasında bir değeri takip eden bir *özel kancadır (custom hook)*. Şunları yapar:

1. Boş bir `ref` oluşturmak için `useRef()` kancasını kullanır.
2. `ref` nesnesinin `current` değerini kendisini çağıran bileşene döndürür.
3. `useEffect()` kancasını çağırır ve çağıran bileşenin her işlenmesinden sonra `ref.current` içinde saklanan değeri günceller.

`useEffect()` davranışı bu işlevselliğin anahtarıdır. `ref.current` bir `useEffect()` çağrısının içinde güncellendiği için, bileşenin ana işleme döngüsündeki değer ne olursa olsun her zaman bir adım gerisindedir – `usePrevious()` adı da buradan gelir.

#### `usePrevious()` kullanmak

Artık `isEditing` durumunun önceki değerini takip etmek için bir `wasEditing` sabiti tanımlayabiliriz; bu, argüman olarak `isEditing` ile `usePrevious` çağrılarak başarılır. `Todo()` içine, `useRef` satırlarının altına aşağıdakini ekleyin:

```jsx
const wasEditing = usePrevious(isEditing);
```

Bu satırın altına bir konsol kaydı ekleyerek `usePrevious()` kancasının nasıl davrandığını görebilirsiniz:

```jsx
console.log(wasEditing);
```

Bu kayıtta, `wasEditing` sabitinin `current` değeri her zaman `isEditing` durumunun önceki değeri olacaktır. Değişimini izlemek için "Edit" ve "Cancel" düğmesine birkaç kez tıklayın, ardından devam etmeye hazır olduğunuzda bu konsol kaydını silin.

Bu `wasEditing` sabitiyle, daha önce tartıştığımız sözde kodu uygulamak üzere `useEffect()` kancamızı güncelleyebiliriz:

```jsx
useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  } else if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);
```

`useEffect()` mantığının artık `wasEditing` değerine bağımlı olduğuna, bu nedenle onu bağımlılıklar dizisinde sağladığımıza dikkat edin.

`<Todo />` bileşenindeki "Edit" ve "Cancel" düğmelerini etkinleştirmek için klavyenizi kullanmayı deneyin; bu bölümün başında tartıştığımız sorun olmadan tarayıcı odak göstergesinin uygun şekilde hareket ettiğini göreceksiniz.

### Kullanıcı bir görevi sildiğinde odaklanmak

Son bir klavye deneyimi boşluğu daha var: bir kullanıcı listeden bir görevi sildiğinde odak kaybolur. Önceki değişikliklerimize benzer bir kalıbı izleyeceğiz: yeni bir ref yapacağız ve bir kullanıcı bir görevi her sildiğinde liste başlığına odaklanabilmemiz için `usePrevious()` kancamızdan yararlanacağız.

#### Neden liste başlığı?

Bazen odağımızı göndermek istediğimiz yer barizdir: `<Todo />` şablonlarımız arasında geçiş yaptığımızda "geri dönecek" bir başlangıç noktamız — "Edit" düğmesi — vardı. Ancak bu durumda öğeleri DOM'dan tamamen kaldırdığımız için geri dönecek hiçbir yerimiz yoktur. En iyi ikinci seçenek yakınlarda bir yerde bulunan sezgisel bir konumdur. Liste başlığı en iyi seçimimizdir çünkü kullanıcının sileceği liste öğesine yakındır ve ona odaklanmak kullanıcıya kaç görev kaldığını söyleyecektir.

#### Ref'imizi oluşturmak

`useRef()` ve `useEffect()` kancalarını `App.jsx` içine aktarın — aşağıda her ikisine de ihtiyacınız olacak:

```jsx
import { useState, useRef, useEffect } from "react";
```

Ardından, `App()` fonksiyonunun içinde, `return` deyiminin hemen üstünde yeni bir ref bildirin:

```jsx
const listHeadingRef = useRef(null);
```

#### Başlığı hazırlamak

`<h2>` öğemiz gibi başlık öğeleri genellikle odaklanılabilir (focusable) değildir. Bu bir sorun değildir — ona [`tabindex="-1"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) özniteliğini ekleyerek herhangi bir öğeyi programatik olarak odaklanılabilir hale getirebiliriz. Bu, *yalnızca JavaScript ile odaklanılabilir* anlamına gelir. Bir [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) veya [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) öğesiyle yapabileceğiniz aynı şekilde, `-1` tabindex değerine sahip bir öğeye odaklanmak için <kbd>Tab</kbd> tuşuna basamazsınız (bu `tabindex="0"` kullanılarak yapılabilir, ancak bu durumda uygun değildir).

`listHeadingRef` nesnemizle birlikte görev listemizin üstündeki başlığa — JSX'te `tabIndex` olarak yazılan — `tabindex` özniteliğini ekleyelim:

```jsx
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>
```

> [!NOTE]
> `tabindex` özniteliği erişilebilirlik uç durumları (edge cases) için mükemmeldir, ancak onu aşırı kullanmamaya **büyük özen** göstermelisiniz. Bir öğeye yalnızca onu odaklanılabilir hale getirmenin kullanıcınıza bir şekilde fayda sağlayacağından emin olduğunuzda bir `tabindex` uygulayın. Çoğu durumda düğmeler, bağlantılar (anchors) ve girdiler gibi doğal olarak odak alabilen öğeleri kullanmalısınız. `tabindex` özniteliğinin sorumsuz kullanımı klavye ve ekran okuyucu kullanıcıları üzerinde son derece olumsuz bir etkiye sahip olabilir!

#### Önceki durumu almak

Yalnızca kullanıcımız listesinden bir görevi sildiğinde (`ref` özniteliği aracılığıyla) ref'imizle ilişkili öğeye odaklanmak istiyoruz. Bu, daha önce kullandığımız `usePrevious()` kancasını gerektirecektir. Onu `App.jsx` dosyanızın en üstüne, içe aktarmaların hemen altına ekleyin:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Şimdi `App()` fonksiyonunun içindeki `return` deyiminin üstüne aşağıdakini ekleyin:

```jsx
const prevTaskLength = usePrevious(tasks.length);
```

Burada görevler dizisinin önceki uzunluğunu takip etmek için `usePrevious()` fonksiyonunu çağırıyoruz.

> [!NOTE]
> Artık `usePrevious()` fonksiyonunu iki dosyada kullandığımıza göre, `usePrevious()` fonksiyonunu kendi dosyasına taşımak, o dosyadan dışa aktarmak (`export`) ve ihtiyaç duyduğunuz yerde içe aktarmak (`import`) daha verimli olabilir. Sona ulaştığınızda bir alıştırma olarak bunu yapmayı deneyin.

#### Başlık odağımızı kontrol etmek için `useEffect()` kullanmak

Artık daha önce kaç görevimiz olduğunu sakladığımıza göre, görev sayımız değiştiğinde çalışacak bir `useEffect()` kancası kurabiliriz; bu kanca, şu anda sahip olduğumuz görev sayısı daha önce olduğundan daha azsa — yani bir görevi sildiysek! — başlığa odaklanacaktır.

`App()` fonksiyonunuzun gövdesine, önceki eklemelerinizin hemen altına aşağıdakini ekleyin:

```jsx
useEffect(() => {
  if (tasks.length < prevTaskLength) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);
```

Yalnızca şu anda daha önce sahip olduğumuzdan daha az görevimiz varsa liste başlığımıza odaklanmaya çalışırız. Bu kancaya geçirilen bağımlılıklar, yalnızca bu değerlerden herhangi biri (geçerli görevlerin sayısı veya önceki görevlerin sayısı) değiştiğinde yeniden çalışmayı deneyeceğini garanti eder.

Artık tarayıcınızda bir görevi silmek için klavyenizi kullandığınızda, kesikli odak dış çizgimizin listenin üstündeki başlığın etrafında belirdiğini göreceksiniz.

### Bitti!

Az önce sıfırdan bir React uygulaması oluşturmayı bitirdiniz! Tebrikler! Burada öğrendiğiniz beceriler, React ile çalışmaya devam ederken üzerine inşa edeceğiniz harika bir temel olacaktır.

Çoğu zaman, yaptığınız tek şey bileşenler ve bunların durumları ile prop'ları hakkında dikkatlice düşünmek olsa bile bir React projesine etkili bir katkıda bulunan kişi olabilirsiniz. Her zaman yapabileceğiniz en iyi HTML'i yazmayı unutmayın.

`useRef()` ve `useEffect()` biraz ileri düzey özelliklerdir ve bunları kullandığınız için kendinizle gurur duymalısınız! Bunları daha fazla pratik yapmak için fırsatlar kollayın, çünkü bunu yapmak kullanıcılar için kapsayıcı deneyimler oluşturmanıza olanak tanıyacaktır. Unutmayın: onlar olmasaydı uygulamamız klavye kullanıcıları için erişilemez olurdu!

> [!NOTE]
> Kodunuzu bizim sürümümüzle karşılaştırarak kontrol etmeniz gerekirse, örnek React uygulaması kodunun tamamlanmış bir sürümünü [todo-react depomuzda](https://github.com/mdn/todo-react) bulabilirsiniz. Çalışan canlı bir sürüm için <https://mdn.github.io/todo-react/> adresine bakın.

En son makalede, öğreniminizde daha ileri gitmek için kullanabileceğiniz bir React kaynakları listesi sunacağız.

---

## 42. React Kaynakları (React resources)

**Kaynak:** [React resources](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_resources)

Son makalemiz, öğreniminizde daha ileri gitmek için kullanabileceğiniz bir React kaynakları listesi sunar.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Çekirdek <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a> ve
        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> dillerine ve <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">terminal/komut satırına</a> aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>React hakkında daha fazla bilgi edinmeye yönelik ek kaynaklara aşinalık.</td>
    </tr>
  </tbody>
</table>

### Bileşen düzeyinde stiller

Eğitimimiz için tüm CSS'i tek bir `index.css` dosyasında tutmuş olsak da, React uygulamalarının bileşen başına stil sayfaları tanımlaması yaygındır. Vite destekli bir uygulamada bu, bir CSS dosyası oluşturup onu karşılık gelen bileşen modülüne içe aktararak (`import`) yapılabilir.

Örneğin: `<Form />` bileşeniyle ilgili CSS'i barındırmak için özel bir `Form.css` dosyası yazabilir, ardından stilleri `Form.jsx` içine şu şekilde aktarabilirdik:

```jsx
import Form from "./Form";
import "./Form.css";
```

Bu yaklaşım, belirli bir bileşene ait olan CSS'i tanımlamayı ve yönetmeyi ve onu uygulama genelindeki stillerinizden ayırt etmeyi kolaylaştırır. Ancak aynı zamanda stil sayfanızı kod tabanınız genelinde parçalar ve bu parçalanma buna değmeyebilir. Yüzlerce benzersiz görünüme ve çok sayıda hareketli parçaya sahip daha büyük uygulamalar için bileşen düzeyinde stiller kullanmak ve böylece herhangi bir anda kullanıcınıza gönderilen ilgisiz kod miktarını sınırlamak mantıklıdır.

Bu ve React bileşenlerini biçimlendirmeye yönelik diğer yaklaşımlar hakkında daha fazlasını Smashing Magazine makalesi olan [React'te Bileşenleri Biçimlendirme (Styling Components In React)](https://www.smashingmagazine.com/2020/05/styling-components-react/) içinde okuyabilirsiniz.

### React DevTools

Bu eğitimde uygulamamızın durumunu ve prop'larını kontrol etmek için `console.log()` kullandık ve ayrıca React'in hem CLI'da hem de tarayıcınızın JavaScript konsolunda size verdiği yararlı uyarılardan ve hata mesajlarından bazılarını da görmüş olacaksınız. Ancak burada yapabileceğimiz daha çok şey var.

React DevTools yardımcı programı, React uygulamanızın iç yapısını doğrudan tarayıcıda incelemenize olanak tanır. Tarayıcınızın geliştirici araçlarına, çeşitli bileşenlerin durumunu ve prop'larını incelemenize ve hatta uygulamanızda anında değişiklikler yapmak üzere durumu ve prop'ları düzenlemenize olanak tanıyan yeni bir panel ekler.

Bu ekran görüntüsü, tamamlanmış uygulamamızın React DevTools'ta göründüğü halini göstermektedir:

![React devtools içinde gösterilen projemiz](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/core/frameworks_libraries/react_resources/react-devtools.png)

Solda, dizilerden işlenen öğeler için benzersiz anahtarlar (`key`) da dahil olmak üzere uygulamamızı oluşturan tüm bileşenleri görüyoruz. Sağda ise App bileşenimizin kullandığı prop'ları ve kancaları görüyoruz. Ayrıca `Form`, `FilterButton` ve `Todo` bileşenlerinin sağa doğru girintilendiğine (indented) de dikkat edin – bu, `App` bileşeninin onların üst öğesi (parent) olduğunu gösterir. Bu görünüm, üst/alt öğe ilişkilerini bir bakışta anlamak için harikadır ve daha karmaşık uygulamaları anlamak için paha biçilmezdir.

React DevTools birkaç biçimde mevcuttur:

- Bir [Chrome tarayıcı eklentisi](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).
- Bir [Firefox tarayıcı eklentisi](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).
- Bir [Microsoft Edge tarayıcı eklentisi](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil).
- [npm veya Yarn ile kurabileceğiniz bağımsız bir uygulama](https://www.npmjs.com/package/react-devtools).

Bunlardan birini kurmayı ve ardından az önce oluşturduğunuz uygulamayı incelemek için onu kullanmayı deneyin!

[React belgelerinde React DevTools hakkında daha fazlasını okuyabilirsiniz](https://react.dev/learn/react-developer-tools).

### `useReducer()` kancası

Bu eğitimde, küçük bir olay işleyici fonksiyonları koleksiyonu genelinde durumu yönetmek için `useState()` kancasını kullandık. Öğrenme amaçları için bu iyiydi, ancak durum yönetimi mantığımızı bileşenimizin olay işleyicilerine — özellikle de `<Todo />` bileşenininkilere — bağlı bıraktı.

`useReducer()` kancası geliştiricilere farklı ama birbiriyle ilişkili durum yönetimi mantığını tek bir fonksiyonda birleştirmenin bir yolunu sunar. `useState()` kancasından biraz daha karmaşıktır, ancak alet çantanızda bulundurmak için iyi bir araçtır. [React belgelerinde `useReducer()` hakkında daha fazlasını okuyabilirsiniz](https://react.dev/learn/extracting-state-logic-into-a-reducer).

### Context API'si

Bu eğitimde oluşturduğumuz uygulama, verileri `App` bileşeninden onlara ihtiyaç duyan alt bileşenlere geçirmek için bileşen prop'larını kullandı. Çoğu zaman prop'lar veri paylaşmak için uygun bir yöntemdir; ancak karmaşık, derinlemesine iç içe geçmiş uygulamalar için her zaman en iyisi değildirler.

React, bileşen ağacından aşağıya prop'lar geçirmeden verilere ihtiyaç duyan bileşenlere veri sağlamanın bir yolu olarak [Context API'sini](https://react.dev/learn/passing-data-deeply-with-context) sunar. Bunu kolaylaştıran [bir useContext kancası](https://react.dev/reference/react/useContext) da vardır.

Bu API'yi kendiniz denemek isterseniz, Smashing Magazine [React context hakkında bir giriş makalesi](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/) yazmıştır.

### Sınıf bileşenleri (Class components)

Bu eğitim onlardan bahsetmese de, [JavaScript sınıflarını (classes)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) kullanarak React bileşenleri oluşturmak mümkündür – bunlara sınıf bileşenleri (class components) denir. Kancaların gelişine kadar sınıflar, bileşenlere durum (state) getirmenin veya işleme yan etkilerini (side effects) yönetmenin tek yoluydu. Belirli uç durumları ele almanın hâlâ tek yoludurlar ve eski (legacy) React projelerinde yaygındırlar. Resmî React belgeleri [`Component`](https://react.dev/reference/react/Component) temel sınıfı için bir başvuru kaynağı tutmaktadır, ancak [durumu](https://react.dev/learn/state-a-components-memory) ve [yan etkileri](https://react.dev/learn/synchronizing-with-effects) yönetmek için kancaların kullanılmasını önerir.

### Test etme

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) gibi kütüphaneler React bileşenleri için birim testleri (unit tests) yazmayı mümkün kılar. Bu testleri *çalıştırmanın* pek çok yolu vardır. Test çerçevesi [Vitest](https://vitest.dev/), Vite üzerine inşa edilmiştir ve Vite destekli React uygulamalarınız için harika bir eşlikçidir. [Jest](https://jestjs.io/) ise React ile kullanılabilecek bir başka popüler test çerçevesidir.

### Yönlendirme (Routing)

Yönlendirme geleneksel olarak kullanıcının bilgisayarındaki bir uygulama tarafından değil bir sunucu tarafından ele alınsa da, bir web uygulamasını tarayıcının konumunu okuyup güncelleyecek ve belirli kullanıcı arayüzlerini işleyecek şekilde yapılandırmak mümkündür. Buna *istemci tarafı yönlendirme (client-side routing)* denir. Uygulamanız için pek çok benzersiz rota (`/home`, `/dashboard` veya `/login` gibi) oluşturmak mümkündür.

[React Router](https://reactrouter.com/), React için en popüler ve en sağlam istemci tarafı yönlendirme kütüphanesidir. Geliştiricilerin uygulamalarının rotalarını tanımlamasına ve bileşenleri bu rotalarla ilişkilendirmesine olanak tanır. Ayrıca tarayıcının konumunu ve geçmişini yönetmek için bir dizi yararlı kanca ve bileşen sağlar.

> [!NOTE]
> İstemci tarafı yönlendirme uygulamanızın hızlı hissettirmesini sağlayabilir, ancak özellikle yardımcı teknolojilere güvenen kişiler için bir dizi erişilebilirlik sorunu ortaya çıkarır. Bu konuda daha fazlasını Marcy Sutton'ın ["İstemci Tarafı Yönlendirmenin Etkileri" ("The Implications of Client-Side Routing")](https://testingaccessibility.com/implications-of-client-side-routing) makalesinde okuyabilirsiniz.

### Özet

JavaScript çerçeveleri için hepsi bu kadar. Umarız bu modül size çerçevelerin neden var olduğu ve nasıl kullanılacağı konusunda iyi bir fikir vermiştir.

Bir sonraki modülde [web erişilebilirliğine (web accessibility)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility) odaklanacağız.
