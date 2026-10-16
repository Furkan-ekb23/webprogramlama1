## Soru 1

JavaScript'in **tek iş parçacıklı (single thread)** bir dil olması ne anlama gelir?

- **A)** Aynı anda birden fazla işlemi paralel olarak yürütür
- **B)** Aynı anda yalnızca tek bir işlem gerçekleştirir ve sırayla ilerler.
- **C)** Sadece tek bir web sayfasında çalışabilir
- **D)** Kod çalışmadan önce tek bir dosyaya derlenir
- **E)** Yalnızca tek bir fonksiyon tanımlamaya izin verir

> ✅ **Cevap: B** – JavaScript aynı anda tek bir işlem yapar ve komutları sırayla yürütür.

---

## Soru 2

**Call Stack (Çağrı Yığını)** hangi prensiple çalışır?

- **A)** FIFO (İlk giren ilk çıkar)
- **B)** Rastgele sıralama
- **C)** LIFO (Son giren ilk çıkar).
- **D)** Önem derecesine göre sıralama
- **E)** Alfabetik sıralama

> ✅ **Cevap: C** – Fonksiyon çağrılınca yığına eklenir, bitince çıkarılır; en son giren ilk çıkar.

---

## Soru 3

Aşağıdakilerden hangisi tarayıcının sunduğu ve arka planda çalışan **Web API** bileşenlerinden biridir?

- **A)** `setTimeout`.
- **B)** `for` döngüsü
- **C)** `return` ifadesi
- **D)** Call Stack
- **E)** `if...else` yapısı

> ✅ **Cevap: A** – `setTimeout` gibi zamanlayıcıların sayımını tarayıcı arka planda yapar.

---

## Soru 4

Call Stack boşaldığında Event Loop **ilk olarak** hangi kuyruğu kontrol eder?

- **A)** Task Queue
- **B)** Web APIs
- **C)** Hangisi önce dolduysa o kuyruğu
- **D)** Microtask Queue.
- **E)** Hiçbirini, doğrudan Web API'lere geçer

> ✅ **Cevap: D** – Event Loop, Task Queue'ya bakmadan önce her zaman Microtask Queue'yu boşaltır.

---

## Soru 5

Aşağıdaki kodun konsol çıktısı hangi sırada olur?

```javascript
console.log('1: Başlangıç');

setTimeout(() => {
  console.log('2: Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Promise');
});

console.log('4: Bitiş');
```

- **A)** 1 → 2 → 3 → 4
- **B)** 1 → 4 → 2 → 3
- **C)** 1 → 3 → 4 → 2
- **D)** 4 → 1 → 3 → 2
- **E)** 1 → 4 → 3 → 2.

> ✅ **Cevap: E** – Önce senkron kodlar (1, 4), sonra Microtask olan Promise (3), en son Task Queue'daki Timeout (2) çalışır.
