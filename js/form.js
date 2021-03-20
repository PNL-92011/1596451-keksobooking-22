const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
// const MAX_PRICE = 1000000;
// const MIN_PRICE = 0;


const MinPrice = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOUSE: 5000,
  PALACE: 10000,
}


const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const mapFilterElements = mapFilters.querySelectorAll('.map__filter');

const formTypeHouse = document.querySelector('#type');
const formPriceNight = document.querySelector('#price');
const formTimeIn = document.querySelector('#timein');
const formTimeOut = document.querySelector('#timeout');

const formTitleInput = document.querySelector('#title');
const formPriceInput = document.querySelector('#price');
// const formRooms = document.querySelector('#room_number');
// const formCapacity = document.querySelector('#capacity');

/**
 * Функция, отвечающая за включение и отключение формы и фильтров
 * @param {boolan} enable - состояние страницы
 * @return {boolan} - состояние страницы
 */

const setActivatePage = (enable) => {
  if (!enable) {
    adForm.classList.add('ad-form--disabled');
    adFormElements.forEach((element) => {
      element.setAttribute('disabled', 'disabled');
    });
    mapFilters.classList.add('map__filter--disabled');
    mapFilterElements.forEach((filterElem) => {
      filterElem.setAttribute('disabled', 'disabled');
    });
  } else {
    adForm.classList.remove('ad-form--disabled');
    adFormElements.forEach((formElement) => {
      formElement.removeAttribute('disabled', 'disabled');
    });
    mapFilters.classList.remove('ad-form--disabled');
    mapFilterElements.forEach((filterElem) => {
      filterElem.removeAttribute('disabled', 'disabled');
    });
  }
}



// ***  ОБРАБОТКА ПОЛЬЗОВАТЕЛЬСКОГО ВВОДА ДЛЯ ПОЛЕЙ

/**
 * Поле «Тип жилья» влияет на минимальное значение поля «Цена за ночь»
 * Выбор опции меняет атрибуты минимального значения и плейсхолдера поля «Цена за ночь»
 */
formTypeHouse.addEventListener('change', () => { // обработчик события
  formPriceNight.min = MinPrice[formTypeHouse.value.toUpperCase()]; // назначение мин цены по типу жилья
  formPriceNight.placeholder = MinPrice[formTypeHouse.value.toUpperCase()]; // назначение placeholder мин цены по типу жилья
});

/**
 * Поля «Время заезда» и «Время выезда» синхронизированы
 * Выбор опции одного поля автоматически изменят значение другого
 */
formTimeIn.addEventListener('change', () => {
  formTimeOut.value = formTimeIn.value;
});
formTimeOut.addEventListener('change', () => {
  formTimeIn.value = formTimeOut.value;
});


/**
 * Поле "Заголовок объявления"
 * обязательное текстовое поле; min = 30 символов, max = 100 символов.
 */

formTitleInput.addEventListener('input', (evt) => {
  const valueLength = evt.target.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    formTitleInput.setCustomValidity('Очень коротко. Добавьте ' + (MIN_TITLE_LENGTH - valueLength) + 'симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    formTitleInput.setCustomValidity('Сократите ' + (valueLength - MAX_TITLE_LENGTH) + 'симв.');
  } else {
    formTitleInput.setCustomValidity('');
  }

  formTitleInput.reportValidity();
});


/**
 * Поле "Цена за ночь"
 * обязательное числовое поле;  max = 1 000 000.
 */
formPriceInput.addEventListener('input', (evt) => {
  const valuePrice = evt.target.value;

  if (valuePrice < 0) {
    formPriceInput.setCustomValidity('Ошибка! Цена должна быть больше нуля!!!');
  } else

  // «Бунгало» — минимальная цена за ночь 0;
  // Как это прописать? Сейчас ноль не воспринимается!
  // if ((formTypeHouse.value == 'bungalow') && (valuePrice == MinPrice.BUNGALOW)) {
  //   formPriceInput.setCustomValidity('Вы действительно хотите указать цену = 0?!');
  // } else

  if (valuePrice > 1000000) {
    formPriceInput.setCustomValidity('Цена не должна превышать 1 000 000 !!!');
  } else

  if ((formTypeHouse.value == 'flat') && (valuePrice < MinPrice.FLAT)) {
    formPriceInput.setCustomValidity('Цена должна быть больше 1 000 !!!');
  } else

  if ((formTypeHouse.value == 'house') && (valuePrice < MinPrice.HOUSE)) {
    formPriceInput.setCustomValidity('Цена должна быть больше 5 000 !!!');
  } else

  if ((formTypeHouse.value == 'palace') && (valuePrice < MinPrice.PALACE)) {
    formPriceInput.setCustomValidity('Цена должна быть больше 10 000 !!!');
  } else {
    formPriceInput.setCustomValidity('');
  }

  formPriceInput.reportValidity();
});


/**
 * Поле «Количество комнат» синхронизировано с полем «Количество мест»
 * при выборе количества комнат вводятся ограничения на допустимые варианты выбора количества гостей:
 * 1 комната - для 1 гостя; 2 комнаты - для 1 или 2 гостей; 3 комнаты - для 1 или 2 или 3 гостей
 * 100 комнат - не для гостей
 */

// const formRooms = document.querySelector('#room_number');
// const formCapacity = document.querySelector('#capacity');

// formRooms.addEventListener('change', () => {



// })
















/**
 * Поле "Цена за ночь"
 * обязательное числовое поле;  max = 1 000 000.
 */
// formPriceInput.addEventListener('input', (evt) => {
//   const maxValue = evt.target.value.max;
//   const minValue = evt.target.value.min;

//   if (maxValue > MAX_PRICE) {
//     formPriceInput.setCustomValidity('Цена не может превышать 1 000 000');
//   } else if (minValue < MIN_PRICE) {
//     formPriceInput.setCustomValidity('Цена не может быть меньше 0');
//   } else {
//     formTitleInput.setCustomValidity('');
//   }

//   formPriceInput.reportValidity();

// });








export {
  adForm,
  adFormElements,
  mapFilters,
  mapFilterElements,
  setActivatePage
};
