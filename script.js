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
  closeBtn.addEventListener('click', function(e) {
    if(e.target === closeBtn) {
      modal.style.display = 'none';
    }  
  });
  
  // Закрытие при клике вне изображения
  modal.addEventListener('click', function(e) {
    if (e.target === modal || e.target === closeBtn) {
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

//Раскрывающееся модальное окно списка услуг
//Модальное окно
const modalServices = document.getElementById('servicesModal');
//Область отображения карточек-услуг
const servicesList = document.querySelector('.services-list');

//Фильтры
const button_allServices = document.querySelector('.all_services');
const button_designServices = document.querySelector('.design_services');
const button_montageServices = document.querySelector('.montage_services');  
const button_serviceServices = document.querySelector('.service_services');
const button_otherServices = document.querySelector('.other_services');

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
    modalServices.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    generateServicesList(servicesData);
    const closeBtn = document.querySelector('.close-btn');
    modalServices.addEventListener('click', function(e) {
    // Проверяем, является ли модальное окно целью или его родителем
        if (e.target === modalServices || modalServices.contains(e.target)) {
            // Если клик именно по фону модалки (не по контенту)
            if (e.target === modalServices || e.target === closeBtn) {
                modalServices.style.display = 'none';  
                document.body.style.overflow = 'auto';
            }
        }
    });
});

//Реализация фильтров
button_allServices.addEventListener('click', function(){
  generateServicesList(servicesData);
})

button_designServices.addEventListener('click', function(){
  generateServicesList(servicesData.filter(function(item){
    if(item.category === "Проектирование"){
      return item;
    }
  }))
})

button_montageServices.addEventListener('click', function(){
  generateServicesList(servicesData.filter(function(item){
    if(item.category === "Монтаж"){
      return item;
    }
  }))
})

button_serviceServices.addEventListener('click', function(){
  generateServicesList(servicesData.filter(function(item){
    if(item.category === "Обслуживание"){
      return item;
    }
  }))
})

button_otherServices.addEventListener('click', function(){
  generateServicesList(servicesData.filter(function(item){
    if(item.category === "Дополнительные услуги"){
      return item;
    }
  }))
})

//Секция услуг
document.addEventListener('DOMContentLoaded', function() {
  // Элементы DOM
  const filterItems = document.querySelectorAll('.filter-item');

});