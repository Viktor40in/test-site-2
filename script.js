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



//Всплывающая cекция услуг
document.addEventListener('DOMContentLoaded', function() {
  // Данные услуг
  const servicesData = [
  {
    id: 1,
    title: "Проектирование противопожарных систем",
    category: "Проектирование",
    image: "url('./icons/homework.png')"
  },
  {
    id: 2,
    title: "Проектирование охранно-пожарной сигнализации",
    category: "Проектирование",
    image: "url('./icons/wrench.png')"
  },
  {
    id: 3,
    title: "Проектирование видеонаблюдения",
    category: "Проектирование",
    image: "url('./icons/gear.png')"
  },
  {
    id: 4,
    title: "Проектирование СКУД",
    category: "Проектирование",
    image: "url('./icons/homework.png')"
  },
  {
    id: 5,
    title: "Проектирование ВОЛС (телефонных, радио и телевидения и т.д), СКС (телефонизация, локальные сети)",
    category: "Проектирование",
    image: "url('./icons/wrench.png')"
  },
  {
    id: 6,
    title: "Монтаж системы пожарной сигнализации",
    category: "Монтаж",
    image: "url('./icons/gear.png')"
  },
  {
    id: 7,
    title: "Монтаж системы оповещения о пожаре и управления эвакуацией (СОУЭ)",
    category: "Монтаж",
    image: "url('./icons/homework.png')"
  },
  {
    id: 8,
    title: "Монтаж систем пожаротушения",
    category: "Монтаж",
    image: "url('./icons/wrench.png')"
  },
  {
    id: 9,
    title: "Монтаж охранно-пожарной сигнализации (ОПС)",
    category: "Монтаж",
    image: "url('./icons/gear.png')"
  },
  {
    id: 10,
    title: "Монтаж систем видеонаблюдения",
    category: "Монтаж",
    image: "url('./icons/homework.png')"
  },
  {
    id: 11,
    title: "Монтаж периметральной сигнализации",
    category: "Монтаж",
    image: "url('./icons/wrench.png')"
  },
  {
    id: 12,
    title: "Монтаж системы СКУД",
    category: "Монтаж",
    image: "url('./icons/gear.png')"
  },
  {
    id: 13,
    title: "Монтаж ВОЛС (телефонных, радио и телевидения и т.д), СКС (телефонизация, локальные сети)",
    category: "Монтаж",
    image: "url('./icons/homework.png')"
  },
  {
    id: 14,
    title: "Обслуживание пожарной сигнализации и систем оповещения о пожаре (ПАС и СОУЭ)",
    category: "Обслуживание",
    image: "url('./icons/wrench.png')"
  },
  {
    id: 15,
    title: "Техническое обслуживание автоматических установок пожаротушения (АУПТ)",
    category: "Обслуживание",
    image: "url('./icons/gear.png')"
  },
  {
    id: 16,
    title: "Техническое обслуживание охранно-пожарной сигнализации (ОПС)",
    category: "Обслуживание",
    image: "url('./icons/homework.png')"
  },
  {
    id: 17,
    title: "Техническое обслуживание систем видеонаблюдения, СКУД",
    category: "Обслуживание",
    image: "url('./icons/wrench.png')"
  },
  {
    id: 18,
    title: "Огнезащитная обработка",
    category: "Дополнительные услуги",
    image: "url('./icons/gear.png')"
  },
  {
    id: 19,
    title: "ТО и ремонт, перезарядка, списывание (выбраковка), гидравлические испытания огнетушителей",
    category: "Дополнительные услуги",
    image: "url('./icons/homework.png')"
  },
  {
    id: 20,
    title: "Проведение испытаний противопожарного водопровода и перемотка пожарных рукавов",
    category: "Дополнительные услуги",
    image: "url('./icons/wrench.png')"
  },
  {
    id: 21,
    title: "Испытание наружных лестниц и ограждений кровли",
    category: "Дополнительные услуги",
    image: "url('./icons/gear.png')"
  },
  {
    id: 22,
    title: "Услуги электролаборатории и проверка средств индивидуальной защиты",
    category: "Дополнительные услуги",
    image: "url('./icons/homework.png')"
  },
  {
    id: 23,
    title: "Поставка полиграфической продукции и оборудования в области пожарной безопасности (знаки эвакуации, пожарные шкафы, огнетушители и комплектующие)",
    category: "Дополнительные услуги",
    image: "url('./icons/wrench.png')"
  },
  {
    id: 24,
    title: "Изготовление планов эвакуации по ГОСТ 34428-2018",
    category: "Дополнительные услуги",
    image: "url('./icons/gear.png')"
  },
  {
    id: 25,
    title: "Установка сигнализаторов и газоанализаторов (датчики сигнализаторов довзрывоопасных концентраций на открытых установках)",
    category: "Дополнительные услуги",
    image: "url('./icons/homework.png')"
  }
];

  // Элементы DOM
  const servicesWrapper = document.querySelector('.services-wrapper');
  const servicesList = document.querySelector('.services-list');
  const allServicesBtn = document.getElementById('allServicesBtn');
  const modal = document.getElementById('servicesModal');
  const closeBtn = document.querySelector('.close-btn');
  const filterItems = document.querySelectorAll('.filter-item');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  // Генерация карточек услуг для слайдера
  function generateServiceCards() {
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
  }

  // Генерация списка услуг для модального окна
  function generateServicesList(filter = 'all') {
    servicesList.innerHTML = '';
    const filteredServices = filter === 'all' 
      ? servicesData 
      : servicesData.filter(service => service.category === filter);
    
    filteredServices.forEach(service => {
      const item = document.createElement('div');
      item.className = 'service-modal-item';
      item.innerHTML = `
        <h3 class="service-modal-title">${service.title}</h3>
        <span class="service-modal-category">${service.category}</span>
      `;
      servicesList.appendChild(item);
    });
  }

  // Открытие модального окна
  allServicesBtn.addEventListener('click', function() {
    modal.style.display = 'block';
    generateServicesList();
    document.body.style.overflow = 'hidden';
  });

  // Закрытие модального окна
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Закрытие при клике вне окна
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Фильтрация услуг
  filterItems.forEach(item => {
    item.addEventListener('click', function() {
      filterItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      const filter = this.getAttribute('data-filter');
      generateServicesList(filter);
    });
  });

  // Навигация слайдера
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

  // Инициализация
  generateServiceCards();
  generateServicesList();
});


//Слайдер
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