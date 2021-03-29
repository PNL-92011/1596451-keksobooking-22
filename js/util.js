const ALERT_SHOW_TIME = 5000;

/**
 * Функция получения случайного ЦЕЛОГО числа для задания номера аватара
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @returns {number} — случайное число
 */
const getRandomAvatarIndex = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * Функция получения случайного ДРОБНОГО числа для задания координат
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @param {number} n - количество знаков после запятой
 * @returns {number} — случайное число
 */
const getRandomLocationX = (min, max, n) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Number((min + Math.random() * (max - min)).toFixed(n));
}

const getRandomLocationY = (min, max, n) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Number((min + Math.random() * (max - min)).toFixed(n));
}

/**
 * Функция получения случайного целого числа для задания полей цены,
 * кол-ва комнат в объекте, кол-ва гостей
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @returns {number} — случайное число
 */
const getRandomNumbers = (min, max) => {
  if (min >= 0 && max >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
  } else console.log('Please check the data!')

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Функция получения случайного элемента массива
 * для полей: заголовок, тип жилья, время заезда/выезда,
 * преимуществ, описания объекта, фото
 * @param {array} sets — массив данных
 * @return {array} — итоговый массив
 */
const getRandomElements = (sets) => {
  return sets[Math.floor(Math.random() * sets.length)];
}


/**
 * Функция перемешивания данных в массиве
 * @param {array} — массив данных
 * @return {array} — итоговый массив
*/
const getShuffled = (arr) => arr.sort(() => {
  return Math.random() - 0.5;
});


/**
 * Функция отображения сообщения об ошибке для пользователя
 * @param {string} message - сообщение об ошидке
 */
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '25px';
  alertContainer.style.top = '10px';
  alertContainer.style.right = 0;
  alertContainer.style.padding = '20px 1px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'white';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}


export {getRandomAvatarIndex, getRandomLocationX, getRandomLocationY, getRandomNumbers, getRandomElements, getShuffled, showAlert};
