// Получаем ссылку на элементы формы
const idInput = document.getElementById('idInput');

// Функция для генерации случайного 6-значного ID
function generateRandomID() {
  return Math.floor(Math.random() * 900000) + 100000;
}

// Функция для сохранения ID в Local Storage
function saveID(id) {
  localStorage.setItem('userId', id);
}

// Функция для загрузки ID из Local Storage
function loadID() {
  let id = localStorage.getItem('userId');
  if (!id) {
    id = generateRandomID();
    saveID(id);
  }
  return id;
}

// Загружаем ID при загрузке страницы
const userId = loadID();
idInput.value = userId;