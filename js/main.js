




//========================================================================================================================================================
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

//========================================================================================================================================================



//BURGER
$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.icon-menu,.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//========================================================================================================================================================
//SERVICES

  const openItemsWrap=(item)=>{
	const category=item.closest((".category"));
	const categoryWrap=category.find(".category__items-wrap");
	const categoryItems=categoryWrap.find(".category__items");
	const reqHeight=categoryItems.height();
	categoryWrap.addClass("active");
	categoryWrap.height(reqHeight);
}

const closeEveryItemsWrap=(categories)=>{
  const categoryWrap=categories.find('.category__items-wrap');
  const category=categories.find(".category");
  categoryWrap.removeClass('active');
  categoryWrap.height('0px');
  categoryTitles=categories.find('.category__title');
  categoryTitles.removeClass('active');
}
const  rotate=(arrow)=>{
  arrow.addClass('active')
}
const  rotateDelete=(arrow)=>{
  arrow.removeClass('active')
}

$('.category__title').click(e=>{
  const $this=$(e.currentTarget);
  const categories=$this.closest('.categories');
  const category=$this.closest('.category');
  const categoryWrap=category.find('.category__items-wrap');
 
  if(categoryWrap.hasClass('active')){
  
  }else{
    closeEveryItemsWrap(categories);
    openItemsWrap($this);
    rotate($this);
  }
})

///
const closeEveryItem=(categories)=>{
  const categoryItem=categories.find('.category__item');
  categoryItem.removeClass('active');
}

const closeEveryDescServices=(categories)=>{
  const descServicesItems=categories.find('.desc-services__items');
  console.log(descServicesItems);
  
  descServicesItems.removeClass('active');
}

const openDescServicesItems=(dataAtr)=>{

}



$('.category__item').click(e=>{
  const $this=$(e.currentTarget);
  const categories=$this.closest('.categories');

  const dataATR=$this.attr('data-services');
  
  
  const descServices=categories.siblings('.desc-services');
  const descServicesItems=descServices.find(`[data-services=${dataATR}]`);
  

  //console.log(dataATR);


  if($this.hasClass('active')){
  
  }else{
    closeEveryItem(categories);
    $this.addClass('active');

    closeEveryDescServices(descServices);
    descServicesItems.addClass('active');




  }
})

////MAP
let myMap;

const init=()=>{
  myMap=new ymaps.Map('map',{
    center: [66.647127, 46.475111],
    zoom: 15,
    controls: []
  })

const coords=[
  [66.644947, 46.485379],
  
];
const myCollection = new ymaps.GeoObjectCollection({}, {
  draggable:false,
  iconLayout: 'default#image',
  iconImageHref: '/img/decor/map.png',
  iconImageSize: [46, 57],
  iconImageOffset: [-35, -52]
});

for (let i = 0; i < coords.length; i++) {
  myCollection.add(new ymaps.Placemark(coords[i]));
}

myMap.geoObjects.add(myCollection);

myMap.behaviors.disable('scrollZoom');

};

ymaps.ready(init);


//SCROLL TOP
$(document).ready(function(){   
  $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
          $('.scroll-top').fadeIn();
      } else {
          $('.scroll-top').fadeOut();
      }
  });
  $('.scroll-top').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 400);
      return false;
  });
});


// Инициализируем Swiper


let myImageSlider = new Swiper('.image-slider', {
	// Стрелки
	navigation: { 
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
	
		type: 'fraction', 
		// Кастомный вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return '<span class="' + currentClass + '"></span>' +
				'/' +
				'<span class="' + totalClass + '"></span>';
		},
		
		
	},


	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа,если мы хотим чтоб слайдер переключался с больши усилием ставим >1, если хотим отк 0
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания, теперь станет как рука
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: false,

	// Навигация по хешу,листая слайды мы заметим ,что у кажного слайда есть свой адрес #slide-2,для этого добавить data-hash="slide-1" в html 
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,  //навигация с помощью стрелок брайзера
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта,т е будет листаться только тогда когда мы до него доскролили
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider__slide"
	},

	// Автовысота
	autoHeight: false, //подстройка слайда в зависимости от контента слайдера,поставь true и в slidesPerView: 1,чтоб увидеть подстройку
	
	// Количество слайдов для показа
	slidesPerView: 1, // можно указать дробное число,2.5 также можно указать slidesPerView: 'auto',но тогда в сss надо .image-slider swiper-slide {width: auto; } , этом случае ширина слайда будет формироваться шириной контента внутри него

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	//Показывает Активный слайд , по центру чтоб был акт слайд centeredSlides: true, 
	centeredSlides: false, 

  //Поменять направление пролистования слайдера rtl направление
	//Нужно для главного контейнера слайдера указать dir="rtl"  :	<div dir="rtl" class="image-slider swiper-container"> 

	// Стартовый слайд.
	initialSlide: 0,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: false,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: true,

	// Автопрокрутка
	/*
	autoplay: {
		// Пауза между прокруткой
		delay: 1000,
		// Закончить на последнем слайде
		stopOnLastSlide: true,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},
	*/

	// Скорость
	speed: 1000,

	// Вертикальный слайдер
	direction: 'horizontal',


	// Эффекты переключения слайдов.
	// Листание
	effect: 'slide',

	/*
	// Эффекты переключения слайдов.
	// Cмена прозрачности
	effect: 'fade',

	// Дополнение к fade
	fadeEffect: {
		// Параллельная
		// смена прозрачности
		crossFade: true
	},
	*/
	/*
	// Эффекты переключения слайдов.
	// Переворот
	effect: 'flip',

	// Дополнение к flip
	flipEffect: {
		// Тень
		slideShadows: true,
		// Показ только активного слайда
		limitRotation: true
	},
	*/
	/*
	// Эффекты переключения слайдов.
	// Куб
	effect: 'cube',

	// Дополнение к cube
	cubeEffect: {
		// Настройки тени
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	},
	*/
	/*
	// Эффекты переключения слайдов.
	// Эффект потока
	effect: 'coverflow',

	// Дополнение к coverflow
	coverflowEffect: {
		// Угол
		rotate: 20,
		// Наложение
		stretch: 50,
		// Тень
		slideShadows: true,
	},
	*/
	/*
	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		}
	},
	*/
	/*
	// Брейк поинты (адаптив)
	// Соотношение сторон
	breakpoints: {
		'@0.75': {
			slidesPerView: 1,
		},
		'@1.00': {
			slidesPerView: 2,
		},
		'@1.50': {
			slidesPerView: 3,
		}
	},
	*/

	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки
	// zoom: {
	// 	// Макимальное увеличение
	// 	maxRatio: 5,
	// 	// Минимальное увеличение
	// 	minRatio: 1,
	// },

	// Миниатюры (превью)
	/*
	thumbs: {
		// Свайпер с мениатюрами
		// и его настройки
		swiper: {
			el: '.image-mini-slider',
			slidesPerView: 5,
		}
	},
	*/
	/*
	// Передача управления
	controller: {
		control: myTextSlider
	},
	*/

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,

	// Виртуальные слайды
	// формирование слайдера
	/*
	virtual: {
		slides: (function () {
			let slide = []
			for (let i = 0; i < 500; i++) {
				slide.push(`<div class="image-slider__text">Слайд №${i}</div>`);
			}
			return slide;
		}()),
	},
	*/
	/*
	// Доступность
	a11y: {
		// Включить/выключить
		enabled: true,
		// Сообщения
		prevSlideMessage: 'Previous slide',
		nextSlideMessage: 'Next slide',
		firstSlideMessage: 'This is the first slide',
		lastSlideMessage: 'This is the last slide',
		paginationBulletMessage: 'Go to slide {{index}}',
		notificationClass: 'swiper-notification',
		containerMessage: '',
		containerRoleDescriptionMessage: '',
		itemRoleDescriptionMessage: '',
		// и т.д.
	},
	*/
	/*
	// События
	on: {
		// Событие инициализации
		init: function () {
			console.log('Слайдер запущен!');
		},
		// Событие смены слайда
		slideChange: function () {
			console.log('Слайд переключен');
		}
	},
	*/
});

/*
// Слайдер в слайдере
new Swiper('.image-in-slider', {
	// Курсор перетаскивания
	grabCursor: true,
	// Навигация
	// пагинация, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		clickable: true,
	},
	// Корректная работа
	// перетаскивания\свайпа
	// для дочернего слайдера
	nested: true,
});
*/
/*
// Еще один слайдер
let myTextSlider = new Swiper('.text-slider', {
	// Количество слайдов для показа
	slidesPerView: 3,
	// Отступ между слайдами
	spaceBetween: 30,
});

// Передача управления
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;
*/

/*
// Параллакс слайдер
new Swiper('.parallax-slider', {
	// Включаем параллакс
	parallax: true,
	// скорость переключения
	speed: 2000,
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});
*/


/*
// Параметры
// Получение
let qSlides = myImageSlider.slides.length;

// Изменение
myImageSlider.params.speed = 3000;
*/

/*
// Методы
// Обновить слайдер
myImageSlider.update();

// Переключится на слайд 2, скорость 800
myImageSlider.slideTo(2, 800);
*/

/*
// События
// Событие смены слайда
myImageSlider.on('slideChange', function () {
	console.log('Слайд переключен');
});
*/


/*
// Запуск автоппрокрутки при наведении
let sliderBlock = document.querySelector('.image-slider');

// myImageSlider  - это переменная которой присвоен слайдер

sliderBlock.addEventListener("mouseenter", function (e) {
	myImageSlider.params.autoplay.disableOnInteraction = false;
	myImageSlider.params.autoplay.delay = 500;
	myImageSlider.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
	myImageSlider.autoplay.stop();
});

*/


/*
// Фракция
let mySliderAllSlides = document.querySelector('.image-slider__total');
let mySliderCurrentSlide = document.querySelector('.image-slider__current');

mySliderAllSlides.innerHTML = myImageSlider.slides.length;

myImageSlider.on('slideChange', function () {
	let currentSlide = ++myImageSlider.realIndex;
	mySliderCurrentSlide.innerHTML = currentSlide;
});
*/
