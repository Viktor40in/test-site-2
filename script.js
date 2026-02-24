//Импорт списка услуг
import { servicesData } from "./servicesData.js";
import { servicesData_design } from "./servicesData.js";
import { servicesData_montage } from "./servicesData.js";
import { servicesData_service } from "./servicesData.js";
import { servicesData_other } from "./servicesData.js";

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

//СЕКЦИЯ ИЗОБРАЖЕНИЙ ЛИЦЕНЗИИ
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



//----------------------------------------------СЕКЦИЯ УСЛУГ------------------------------------------------

//слайдер услуг
const servicesWrapper = document.querySelector('.services-wrapper');


//Стрелки и их функции
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', function() {
    console.log("left")
    servicesWrapper.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', function() {
    console.log("right")
    servicesWrapper.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});




//Кнопка "Смотреть все"
const allServicesBtn = document.getElementById('allServicesBtn');

//генерация карточек для слайдера
(function generateServiceCards() {
    servicesWrapper.innerHTML = '';
    servicesData.slice(0, 24).forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
          <div class="service-image" style="background-image: ${service.image}"></div>
          <div class="service-info">
            <h3 class="service-title">${service.title}</h3>
            <a href="#contact" class="service-btn">Связаться с нами</a>
          </div>
        `;
        servicesWrapper.appendChild(card);
    });
})();



//Модальное окно
//div со списком услуг во всплывающем окне
//Фон модального окна
const modalServices = document.getElementById('servicesModal');
const servicesList = document.querySelector('.services-list');
const button_allServices = document.querySelector('all_services');
const button_designServices = document.querySelector('design_services');
const button_montageServices = document.querySelector('montage_services');  
const button_serviceServices = document.querySelector('service_services');
const button_otherServices = document.querySelector('other_services');

//Генерация списка услуг для модального окна
function generateServicesList(data) {
    servicesList.innerHTML = '';
    data.forEach(service => {
        const item = document.createElement('div');
        item.className = 'service-modal-item';
        item.innerHTML = `
          <h3 class="service-modal-title">${service.title}</h3>
          <span class="service-modal-category">${service.category}</span>
        `;
        servicesList.appendChild(item);
    });
};
// Открытие модального окна
allServicesBtn.addEventListener('click', function() {
    modalServices.style.display = 'block';
    document.body.style.overflow = 'hidden';
    generateServicesList(servicesData);
});
// Закрытие модального окна
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});
// Закрытие при клике вне окна
window.addEventListener('click', function(e) {
    // Проверяем, является ли модальное окно целью или его родителем
    if (e.target === modalServices || modalServices.contains(e.target)) {
        // Если клик именно по фону модалки (не по контенту)
        if (e.target === modalServices) {
            modalServices.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});

//Секция услуг
document.addEventListener('DOMContentLoaded', function() {
  // Элементы DOM
  const filterItems = document.querySelectorAll('.filter-item');
  


  // Генерация карточек услуг для слайдера
  // Навигация слайдера

});


//Слайдер
/*
// Добавляем новые переменные
const sliderDots = document.querySelector('.slider-dots');
let currentPosition = 0;
const cardsPerView = Math.floor(servicesWrapper.offsetWidth / 330) || 1; // Рассчитываем сколько карточек видно

// Функция создания индикаторов
function createDots() {
  sliderDots.innerHTML = '';
  const dotCount = Math.ceil(servicesData.length / cardsPerView);
  
  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('div');
    dot.className = 'slider-dot';
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      goToSlide(i);
    });
    sliderDots.appendChild(dot);
  }
}

// Функция перехода к конкретному слайду
function goToSlide(index) {
  const cardWidth = document.querySelector('.service-card').offsetWidth + 30; // 30px gap
  servicesWrapper.scrollTo({
    left: index * cardsPerView * cardWidth,
    behavior: 'smooth'
  });
  currentPosition = index;
  updateDots();
}

// Обновление состояния индикаторов
function updateDots() {
  const dots = document.querySelectorAll('.slider-dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentPosition);
  });
}

// Обновляем навигацию слайдера
leftArrow.addEventListener('click', function() {
  if (currentPosition > 0) {
    goToSlide(currentPosition - 1);
  }
});

rightArrow.addEventListener('click', function() {
  const dotCount = document.querySelectorAll('.slider-dot').length;
  if (currentPosition < dotCount - 1) {
    goToSlide(currentPosition + 1);
  }
});
*/

// Обработка скролла
servicesWrapper.addEventListener('scroll', function() {
  const cardWidth = document.querySelector('.service-card').offsetWidth + 30;
  const newPosition = Math.round(this.scrollLeft / (cardWidth * cardsPerView));
  if (newPosition !== currentPosition) {
    currentPosition = newPosition;
    updateDots();
  }
});

// Вызываем создание индикаторов после генерации карточек
generateServiceCards();
createDots();