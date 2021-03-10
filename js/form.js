const MinPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
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
  formPriceNight.price = MinPrice[formTypeHouse.value]; // назначение мин цены по типу жилья
  formPriceNight.placeholder = MinPrice[formTypeHouse.value]; // назначение placeholder мин цены по типу жилья
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
