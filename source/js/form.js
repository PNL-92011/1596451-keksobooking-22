import {renderPins, updateMap} from './map.js';
import {showSuccessMessage, showErrorMessage} from './modal.js';
import {sendData} from './fetch.js';
import {clearPhotoAndAvatar} from './photo-avatar.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const ROOM_FIRST_OPTION = '1';
const ROOM_SECOND_OPTION = '2';
const ROOM_THIRD_OPTION = '3';
const ROOM_EXTRA_OPTION = '100';

const MAX_PRICE = 1000000;

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
const mapFeatures = document.querySelector('.map__features');


const formTypeHouse = document.querySelector('#type');
const formPriceNight = document.querySelector('#price');
const formTimeIn = document.querySelector('#timein');
const formTimeOut = document.querySelector('#timeout');

const formTitleInput = document.querySelector('#title');
const formPriceInput = document.querySelector('#price');
const formRooms = document.querySelector('#room_number');
const formGuests = document.querySelector('#capacity');

const buttonClearForm = document.querySelector('.ad-form__reset');  // кнопка "Очистить"

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


/**
 * Функция, отвечающая за включение и отключение фильтров
 * @param {boolan} enable - состояние страницы
 * @return {boolan} - состояние страницы
 */
const setActivateFilters = (enable) => {
  if (!enable) {
    mapFilters.classList.add('map__filter--disabled');
    mapFilterElements.forEach((filterElem) => {
      filterElem.setAttribute('disabled', 'disabled');
    });
  }

  else {
    mapFilters.classList.remove('ad-form--disabled');
    mapFilterElements.forEach((filterElem) => {
      filterElem.removeAttribute('disabled');
    });
  }
}


// ОБРАБОТКА ПОЛЬЗОВАТЕЛЬСКОГО ВВОДА ДЛЯ ПОЛЕЙ

/**
 * Поле «Тип жилья» влияет на минимальное значение поля «Цена за ночь»
 * Выбор опции меняет атрибуты минимального значения и плейсхолдера поля «Цена за ночь»
 */
formTypeHouse.addEventListener('change', () => {
  formPriceNight.min = formPriceNight.placeholder = MinPrice[formTypeHouse.value.toUpperCase()];
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

  if ((formTypeHouse.value === 'bungalow') && (valuePrice === MinPrice.BUNGALOW)) {
    formPriceInput.setCustomValidity('Вы действительно хотите указать цену = 0?!');
  } else

  if (valuePrice > MAX_PRICE) {
    formPriceInput.setCustomValidity('Цена не должна превышать 1 000 000 !!!');
  } else

  if ((formTypeHouse.value === 'flat') && (valuePrice < MinPrice.FLAT)) {
    formPriceInput.setCustomValidity('Цена должна быть больше 1 000 !!!');
  } else

  if ((formTypeHouse.value === 'house') && (valuePrice < MinPrice.HOUSE)) {
    formPriceInput.setCustomValidity('Цена должна быть больше 5 000 !!!');
  } else

  if ((formTypeHouse.value === 'palace') && (valuePrice < MinPrice.PALACE)) {
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
formRooms.addEventListener('change', (evt) => {
  switch (evt.target.value) {
    case ROOM_FIRST_OPTION:
      formGuests.options[0].disabled = false;
      formGuests.options[1].disabled = true;
      formGuests.options[2].disabled = true;
      formGuests.options[3].disabled = true;
      formGuests.options[0].selected = true;
      break;
    case ROOM_SECOND_OPTION:
      formGuests.options[0].disabled = false;
      formGuests.options[1].disabled = false;
      formGuests.options[2].disabled = true;
      formGuests.options[3].disabled = true;
      formGuests.options[1].selected = true;
      break;
    case ROOM_THIRD_OPTION:
      formGuests.options[0].disabled = false;
      formGuests.options[1].disabled = false;
      formGuests.options[2].disabled = false;
      formGuests.options[3].disabled = true;
      formGuests.options[2].selected = true;
      break;
    case ROOM_EXTRA_OPTION:
      formGuests.options[0].disabled = true;
      formGuests.options[1].disabled = true;
      formGuests.options[2].disabled = true;
      formGuests.options[3].disabled = false;
      formGuests.options[3].selected = true;
      break;
    default:
      formGuests.options[0].disabled = false;
      formGuests.options[1].disabled = false;
      formGuests.options[2].disabled = false;
      formGuests.options[3].disabled = false;
  }
});


/**
 * Функция обработки кнопок "Опубликовать" и "Очистить"
 * @param {array} pins — массив объявлений
 */
const setFormSubmit = (pins) => {
  buttonClearForm.addEventListener('click', (evt) => {
    evt.preventDefault();

    adForm.reset();
    mapFilters.reset();
    updateMap();
    renderPins(pins);
    clearPhotoAndAvatar();
  });

  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {
        showSuccessMessage();
        adForm.reset();
        mapFilters.reset();
        updateMap();
        renderPins(pins);
        clearPhotoAndAvatar();

      },
      showErrorMessage,
      new FormData(evt.target),
    );
  });
}


export {setActivatePage, setFormSubmit, setActivateFilters, mapFeatures, mapFilters};
