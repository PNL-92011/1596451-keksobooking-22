// АКТИВНОЕ И НЕАКТИВНОЕ СОСТОЯНИЕ СТРАНИЦЫ

const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const mapFilterElements = mapFilters.querySelectorAll('.map__filter');


// отключение формы
adForm.classList.add('ad-form--disabled'); // Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled

const getFormOff = (adFormElements) => { // Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset;
  adFormElements.forEach((formElement) => {
    formElement.setAttribute('disabled', 'disabled');
  });
};
getFormOff(adFormElements);

// отключение фильтров
mapFilters.classList.add('map__filter--disabled'); // Форма с фильтрами .map__filters заблокирована (также добавлен специальный класс);

const getFilterOff = (mapFilterElements) => { // на её интерактивные элементы атрибуты disabled;
  mapFilterElements.forEach((filterElem) => {
    filterElem.setAttribute('disabled', 'disabled');
  });
};
getFilterOff(mapFilterElements);



// АКТИВАЦИЯ формы
const getFormOn = () => {
  adFormElements.forEach((formElement) => {
    formElement.removeAttribute('disabled', 'disabled');
  });
};

// АКТИВАЦИЯ фильтров
mapFilters.classList.remove('ad-form--disabled');

const getFilterOn = () => {
  mapFilterElements.forEach((filterElem) => {
    filterElem.removeAttribute('disabled', 'disabled');
  });
};



// ОБРАБОТКА ПОЛЬЗОВАТЕЛЬСКОГО ВВОДА ДЛЯ ПОЛЕЙ
const MinPrice = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOUSE: 5000,
  PALACE: 10000,
}

//const maxPrice = 1000000;

const formTypeHouse = document.querySelector('#type');
const formPriceNight = document.querySelector('#price');
const formTimeIn = document.querySelector('#timein');
const formTimeOut = document.querySelector('#timeout');

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




export {adForm, adFormElements, mapFilters, mapFilterElements, getFormOff, getFormOn, getFilterOff,  getFilterOn};
