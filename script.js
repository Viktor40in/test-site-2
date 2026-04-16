//Импорт списка услуг
import { servicesData, servicesData_full } from "./servicesData.js";

//Форма для связи 
const form = document.getElementById('contactForm');

//ОТПРАВКА ФОРМЫ
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const formData = new FormData(form);
    // Превращаем данные формы в обычный объект для отправки
    const data = Object.fromEntries(formData.entries());

    alert('Спасибо! Мы скоро свяжемся с Вами!');
    form.reset();
    try {
        const response = await fetch('/submit-contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Указываем, что шлем JSON
            },
            body: JSON.stringify(data) 
        });

        const result = await response.json();
    } 
    catch (error) {
        console.error('Ошибка:', error);
    }
});



//      СЕКЦИЯ ИЗОБРАЖЕНИЙ ЛИЦЕНЗИИ
document.addEventListener('DOMContentLoaded', function() {
  // Получаем элементы
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  // Открытие модального окна
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
      modal.style.display = 'flex';
      modalImg.src = this.getAttribute('data-full');
    });
  });
  
  // Закрытие при клике вне изображения
  modal.addEventListener('click', function(e) {
      if (e.target === modal || e.target.closest('.close-btn')) {
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



//      СЕКЦИЯ УСЛУГ
//слайдер услуг
const servicesWrapper = document.querySelector('.services-wrapper');
//Стрелки и их функции
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
leftArrow.addEventListener('click', function() {
    servicesWrapper.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});
rightArrow.addEventListener('click', function() {
    servicesWrapper.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});

//Кнопка "Смотреть все"
const allServicesBtn = document.getElementById('allServicesBtn');

//Генерация карточек для слайдера
(function generateServiceCards() {
    servicesWrapper.innerHTML = '';
    servicesData.slice(0, 24).forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
          <div class="service-image" style="background-image: ${service.image}"></div>
          <div class="service-info">
            <h3 class="service-title ${service.class}">${service.title}</h3>
            <a href="#contact" class="service-btn">Связаться с нами</a>
          </div>
        `;
        servicesWrapper.appendChild(card);
    });
})();

//Отрытие фильрованного списка услуг при нажатии на заголовок карточки
//Набор DOM-элементов с параметром-классом
const designCards = document.querySelectorAll('.design');
const montageCards = document.querySelectorAll('.montage');
const serviceCards = document.querySelectorAll('.service');
const additionalCards = document.querySelectorAll('.additional');
//Массив с параметрами сотрировки карточек при открытии модального окна
const categories_array = ["Проектирование", "Монтаж", "Обслуживание", "Дополнительные услуги"];
//Функция для накладываения эвента-нажатия по загаловку карточки
function eventFilterOnCardTitle(cards, category){
  cards.forEach(card => {
      card.addEventListener('click', function(){
          modalServices.style.display = 'flex';
          document.body.style.overflow = 'hidden';
          const filteredData = servicesData_full.filter(function(item){
              if(item.category === category){
                  return item;
              }
          })
          generateServicesList(filteredData)
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
      })
  })
}
//Функция выше для каждого типа услуг-карточек
eventFilterOnCardTitle(designCards, categories_array[0]);
eventFilterOnCardTitle(montageCards, categories_array[1]);
eventFilterOnCardTitle(serviceCards, categories_array[2]);
eventFilterOnCardTitle(additionalCards, categories_array[3]);

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
const button_fireFightServices = document.querySelector('.fireFight_services');
const button_electroLabServices = document.querySelector('.electroLab_services');

//Генерация списка услуг для модального окна
function generateServicesList(data, category) {
    servicesList.innerHTML = '';
    data.forEach(service => {
        const item = document.createElement('div');
        item.className = 'service-modal-item';
        item.innerHTML = `
          <h3 class="service-modal-title">${service.title}</h3>
          <span class="service-modal-category">${category}</span>
        `;
        servicesList.appendChild(item);
    });
};
function generateAllServicesList(data) {
    servicesList.innerHTML = '';
    data.forEach(service => {
        if(service.id < 8){
          const item = document.createElement('div');
          item.className = 'service-modal-item';
          item.innerHTML = 
          `
            <h3 class="service-modal-title">${service.title}</h3>
            <span class="service-modal-category">Проектирование</span>
            <span class="service-modal-category">Монтаж</span>
            <span class="service-modal-category">Техническое обслуживание</span>
          `;
          servicesList.appendChild(item);
        } else {
          const item = document.createElement('div');
          item.className = 'service-modal-item';
          item.innerHTML = `
            <h3 class="service-modal-title">${service.title}</h3>
            <span class="service-modal-category">${service.category}</span>
          `;
          servicesList.appendChild(item);
        }     
    });
};


//Открытие модального окна
allServicesBtn.addEventListener('click', function() {
    modalServices.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    generateAllServicesList(servicesData_full);
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
  generateAllServicesList(servicesData_full);
})

button_designServices.addEventListener('click', function(){
  generateServicesList(servicesData_full.filter(function(item){
    if(item.category === "Проектирование"){
      return item;
    }
  }), "Проектирование")
})

button_montageServices.addEventListener('click', function(){
  generateServicesList(servicesData_full.filter(function(item){
    if(item.category2 === "Монтаж"){
      return item;
    }
  }), "Монтаж")
})

button_serviceServices.addEventListener('click', function(){
  generateServicesList(servicesData_full.filter(function(item){
    if(item.category3 === "Техническое обслуживание"){
      return item;
    }
  }), "Техническое обслуживание")
})

button_fireFightServices.addEventListener('click', function(){
  generateServicesList(servicesData_full.filter(function(item){
    if(item.category === "Противопожарная безопасность"){
      return item;
    }
  }), "Противопожарная безопасность")
})

button_electroLabServices.addEventListener('click', function(){
  generateServicesList(servicesData_full.filter(function(item){
    if(item.category === "Услуги электролаборатории"){
      return item;
    }
  }), "Услуги электролаборатории")
})




//      ИНТЕРАКТИВНАЯ КАРТА
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
    const myPlacemark = new ymaps.Placemark([68.136715, 33.255995], {
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


