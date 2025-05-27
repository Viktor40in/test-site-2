//СМЕНА ПЕРЕЧНЯ УСЛУГ
document.addEventListener('DOMContentLoaded', function() {
  const services = document.querySelectorAll('.service-item');
  let current = 0;
  
  function rotateServices() {
    // Скрываем текущий элемент
    services[current].classList.remove('active');
    
    // Переходим к следующему
    current = (current + 1) % services.length;
    
    // Показываем новый элемент
    services[current].classList.add('active');
  }
  
  // Запускаем ротацию каждые 7 секунд
  setInterval(rotateServices, 7000);
  
  // Инициализация - показываем первый элемент
  if (services.length > 0) {
    services[0].classList.add('active');
  }
});

//ОТПРАВКА ФОРМЫ
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Получаем данные формы
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  
  // Здесь можно добавить AJAX-запрос или другую обработку
  console.log('Отправлены данные:', { phone, email });
  
  // Оповещение пользователя
  alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  
  // Очистка формы
  this.reset();
});

//СЛАЙДЕР ИЗРБРАЖЕНИЙ ЛИЦЕНЗИИ
document.addEventListener('DOMContentLoaded', function() {
  // Получаем элементы
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close-btn');
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  // Открытие модального окна
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
      modal.style.display = 'flex';
      modalImg.src = this.getAttribute('data-full');
    });
  });
  
  // Закрытие модального окна
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // Закрытие при клике вне изображения
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Закрытие по ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });
});


//ИНТЕРАКТИВНАЯ КАРТА
document.addEventListener('DOMContentLoaded', function() {
  // Инициализация карты
  ymaps.ready(init);
  
  function init() {
    // Создание карты
    const myMap = new ymaps.Map("yandexMap", {
      center: [68.137380, 33.254186], // Координаты вашей организации
      zoom: 17
    });
    
    // Добавление метки
    const myPlacemark = new ymaps.Placemark([68.137476, 33.254727], {
      hintContent: 'Наш офис',
      balloonContent: 'Россия, Мурманская обл., г. Оленегорск, ул. Высокая, д. 5'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -40]
    });
    
    myMap.geoObjects.add(myPlacemark);
    
    // Адаптация под мобильные устройства
    myMap.behaviors.disable('scrollZoom');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      myMap.behaviors.disable('drag');
    }
  }
});