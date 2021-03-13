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
