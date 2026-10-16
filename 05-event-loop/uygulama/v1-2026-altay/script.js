// ============================================================
// GÖREV LİSTESİ — MDN "Dynamic scripting with JavaScript" konuları
// Yorumlardaki [Bölüm N], md dosyasındaki bölüm numarasıdır.
// ============================================================

// [Bölüm 4] Değişkenler: const sabitler, let değişenler
const STORAGE_KEY = "gorevler-v1";
let filter = "all";       // aktif filtre
let editingId = null;     // şu an düzenlenen görevin id'si

// [Bölüm 27] DOM: sayfadaki öğelere başvurular
const addForm = document.querySelector("#add-form");
const newTask = document.querySelector("#new-task");
const statusEl = document.querySelector("#status");
const filtersEl = document.querySelector("#filters");
const list = document.querySelector("#list");
const counter = document.querySelector("#counter");
const clearBtn = document.querySelector("#clear-done");

// [Bölüm 11 + 25] Dizi içinde nesneler: her görev { id, name, completed }
let tasks = loadTasks();

// [Bölüm 30] JSON: veriyi metne çevirip saklamak ve geri okumak
function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (err) {
    console.error("Okuma hatası:", err); // [Bölüm 33] hata işleme
  }
  return [
    { id: 1, name: "MDN JavaScript bölümlerini oku", completed: true },
    { id: 2, name: "Uygulamayı sunuma hazırla", completed: false },
    { id: 3, name: "Canlı kod denemesi yap", completed: false },
  ];
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (err) {
    console.error("Kaydetme hatası:", err);
  }
}

// [Bölüm 18] Fonksiyonlar: her işi küçük bir fonksiyon yapar
function addTask(name) {
  tasks.push({ id: Date.now(), name, completed: false }); // [Bölüm 11] push
  update();
}

function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  task.completed = !task.completed;
  update();
}

function renameTask(id, name) {
  const task = tasks.find((t) => t.id === id);
  task.name = name;
  editingId = null;
  update();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id); // [Bölüm 11] filter
  update();
}

function setStatus(message) {
  statusEl.textContent = message;
}

// [Bölüm 14] Koşullar: hangi görevler gösterilecek?
const FILTERS = {
  all: () => true,
  active: (t) => !t.completed,
  done: (t) => t.completed,
};

function update() {
  saveTasks();
  render();
}

// Tek bir görev satırı oluşturur
function createItem(task) {
  const li = document.createElement("li");
  li.className = task.completed ? "item done" : "item";
  li.dataset.id = task.id;

  // [Bölüm 14] if...else: düzenleme modu mu, normal mod mu?
  if (task.id === editingId) {
    const form = document.createElement("form");
    form.className = "edit-form";
    const input = document.createElement("input");
    input.type = "text";
    input.className = "edit-input";
    input.value = task.name;
    input.setAttribute("aria-label", `"${task.name}" görevini düzenle`);
    form.append(
      input,
      makeButton("Kaydet", "save", "primary", "submit"),
      makeButton("Vazgeç", "cancel"),
    );
    li.append(form);
  } else {
    const label = document.createElement("label");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = task.completed;
    const name = document.createElement("span");
    name.className = "name";
    name.textContent = task.name; // textContent: güvenli metin ekleme
    label.append(check, name);
    li.append(label, makeButton("Düzenle", "edit"), makeButton("Sil", "delete", "danger"));
  }
  return li;
}

function makeButton(text, action, extraClass = "", type = "button") {
  const btn = document.createElement("button");
  btn.type = type;
  btn.textContent = text;
  btn.dataset.action = action;
  if (extraClass) btn.className = extraClass;
  return btn;
}

// Ekranı verilere göre yeniden çizer
function render() {
  const visible = tasks.filter(FILTERS[filter]);
  list.textContent = "";

  // [Bölüm 16] Döngü: her görev için bir satır ekle
  for (const task of visible) {
    list.append(createItem(task));
  }

  // [Bölüm 14] Koşullu gösterim: liste boşsa mesaj yaz
  if (visible.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent =
      tasks.length === 0 ? "Henüz görev yok. Yukarıdan bir tane ekle." : "Bu filtrede görev yok.";
    list.append(empty);
  }

  const remaining = tasks.filter(FILTERS.active).length;
  counter.textContent = `${remaining} görev kaldı`;
  clearBtn.disabled = tasks.every((t) => !t.completed);

  for (const btn of filtersEl.querySelectorAll("button")) {
    btn.setAttribute("aria-pressed", String(btn.dataset.filter === filter));
  }

  const editInput = list.querySelector(".edit-input");
  if (editInput) editInput.focus();
}

// [Bölüm 22] Olaylar: kullanıcı eylemlerine tepki
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = newTask.value.trim();
  if (name === "") {
    setStatus("Görev adı boş olamaz.");
    newTask.focus();
    return;
  }
  setStatus("");
  addTask(name);
  newTask.value = "";
  newTask.focus();
});

filtersEl.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-filter]");
  if (!btn) return;
  filter = btn.dataset.filter;
  render();
});

clearBtn.addEventListener("click", () => {
  tasks = tasks.filter(FILTERS.active);
  update();
});

// [Bölüm 23] Olay yetkilendirmesi: tek dinleyici ile tüm satırları yönet
list.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const id = Number(btn.closest("li").dataset.id);

  // [Bölüm 14] switch
  switch (btn.dataset.action) {
    case "delete":
      deleteTask(id);
      break;
    case "edit":
      editingId = id;
      render();
      break;
    case "cancel":
      editingId = null;
      render();
      break;
  }
});

list.addEventListener("change", (e) => {
  if (e.target.matches('input[type="checkbox"]')) {
    toggleTask(Number(e.target.closest("li").dataset.id));
  }
});

list.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = Number(e.target.closest("li").dataset.id);
  const name = e.target.querySelector(".edit-input").value.trim();
  if (name !== "") renameTask(id, name);
});

render(); // sayfa açılınca ilk çizim
