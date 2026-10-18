> **Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı çevrilmiş ve derlenmiştir. Orijinal dokümantasyon kaynakları (MDN Web Docs, Vue.js, Three.js vb.) kendi orijinal lisanslarına (CC-BY-SA, MIT) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

# Uygulama v1 — 2026 Güz · Altay

**Konu:** 05 - Event Loop (MDN *Dynamic scripting with JavaScript* konularının uygulaması)
**Takım:** Altay
**Uygulama:** Görev Listesi (To-Do) — saf HTML, CSS ve JavaScript

## Takım ve Roller

| GitHub | İsim | Rol |
|---|---|---|
| [@Furkan-ekb23](https://github.com/Furkan-ekb23) | Furkan | Uygulama (Canlı Kod) — *rolünü kontrol et* |
| [@kullanici-adi](https://github.com/kullanici-adi) | İsim Soyisim | Tam Çeviri ve Mimari Slayt |
| [@kullanici-adi](https://github.com/kullanici-adi) | İsim Soyisim | Sınıf İçi Sunum (Teori) |
| [@kullanici-adi](https://github.com/kullanici-adi) | İsim Soyisim | Soru-Cevap (QA) |

## Ne yaptık?

MDN'nin *Dynamic scripting with JavaScript* modülündeki konuları tek bir küçük uygulamada topladık. Framework ya da kütüphane kullanmadık, her şey düz JavaScript:

- **HTML** (`index.html`): başlık, yeni görev formu, filtre düğmeleri, görev listesi ve alt bilgi (sayaç + "Bitenleri temizle").
- **CSS** (`style.css`): ortalanmış kart düzeni, `prefers-color-scheme` ile otomatik açık/koyu tema, telefona uyumlu genişlik (`max-width`) ve klavye kullanıcıları için `:focus-visible` çerçevesi.
- **JavaScript** (`script.js`):
  1. Görev **ekleme**, **düzenleme**, **silme** ve **tamamlandı olarak işaretleme**.
  2. **Filtreleme:** Tümü / Yapılacak / Biten.
  3. Kalan görev sayacı ve tamamlanan görevleri tek tıkla temizleme.
  4. Görevler `localStorage`'a **JSON** olarak kaydedilir, sayfa yenilense de kaybolmaz.
  5. Boş görev eklenmeye çalışılırsa ekran okuyucuların da duyabileceği (`aria-live`) bir uyarı gösterilir.
- **Erişilebilirlik:** Filtre düğmelerinde `aria-pressed`, durum mesajında `role="status"`, düzenleme kutusunda açıklayıcı `aria-label`.

## MDN konuları kodda nerede kullanıldı?

`script.js` içindeki yorumlarda `[Bölüm N]` etiketleri, çeviri dosyasındaki ([`ceviri/2026-guz-altay.md`](../../ceviri/2026-guz-altay.md)) bölüm numaralarını gösterir.

| Bölüm | MDN konusu | Kodda nerede? |
|---|---|---|
| 4 | Değişkenler | `const STORAGE_KEY`, `let filter`, `let editingId` |
| 11 | Diziler | `tasks` dizisi, `push`, `find`, `filter` |
| 14 | Koşullu ifadeler | `if...else` (düzenleme modu), `switch` (düğme eylemleri), `FILTERS` |
| 16 | Döngüler | `for...of` ile her görev için satır çizme |
| 18 | Fonksiyonlar | `addTask`, `toggleTask`, `renameTask`, `deleteTask`, `render`... |
| 22 | Olaylara giriş | `submit`, `click`, `change` olay dinleyicileri |
| 23 | Olay kabarcıklanması | `list` üzerinde tek dinleyici ile tüm satırları yönetme (olay yetkilendirmesi) |
| 25 | Nesne temelleri | Her görev bir nesne: `{ id, name, completed }` |
| 27 | DOM betik yazımı | `querySelector`, `createElement`, `append`, `textContent`, `dataset` |
| 30 | JSON | `JSON.stringify` ile kaydetme, `JSON.parse` ile okuma |
| 33 | Hata ayıklama ve hata işleme | `try...catch` ile `localStorage` okuma/yazma hataları |

## Klasör yapısı

```
v1-2026-altay/
├── README.md
├── index.html
├── style.css
└── script.js
```

## Nasıl çalıştırılır?

**Yöntem 1 — Doğrudan:** `index.html` dosyasına çift tıklayıp tarayıcıda açın.

**Yöntem 2 — Yerel sunucu (önerilen):**

```bash
cd v1-2026-altay
python3 -m http.server 8000
```

Tarayıcıda `http://localhost:8000/index.html` adresini açın. VS Code kullanıyorsanız `index.html`'e sağ tıklayıp **Live Preview: Show Preview** de seçebilirsiniz.

## Denenebilecekler

1. Yeni bir görev yazıp **Ekle**'ye basın. Boş bırakıp basarsanız uyarı çıkar.
2. Görevin yanındaki kutuyu işaretleyin, üstü çizilir ve sayaç azalır.
3. **Düzenle** ile adı değiştirin, **Vazgeç** ile iptal edin.
4. **Yapılacak** ve **Biten** filtreleriyle listeyi daraltın.
5. Sayfayı yenileyin. Görevleriniz hâlâ yerinde olmalı.
6. Tarayıcınızı koyu temaya alın, uygulama otomatik uyum sağlar.
7. **F12 → Application → Local Storage** bölümünde `gorevler-v1` anahtarını inceleyin.

## İlgili dosyalar

- Çeviri: [`ceviri/2026-guz-altay.md`](../../ceviri/2026-guz-altay.md)
- Sunum: [`sunum/2026-guz-altay.pdf`](../../sunum/2026-guz-altay.pdf)
- Soru-Cevap: [`soru-cevap/2026-guz-altay.md`](../../soru-cevap/2026-guz-altay.md)
