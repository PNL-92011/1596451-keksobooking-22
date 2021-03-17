const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const mapFilterElements = mapFilters.querySelectorAll('.map__filter');

const MinPrice = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOUSE: 5000,
  PALACE: 10000,
}

//const maxPrice = 1000000;

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


// ОБРАБОТКА ПОЛЬЗОВАТЕЛЬСКОГО ВВОДА ДЛЯ ПОЛЕЙ

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



export {adForm, adFormElements, mapFilters, mapFilterElements, setActivatePage};
