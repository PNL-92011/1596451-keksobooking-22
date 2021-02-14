/* eslint-disable no-console */
// Источники:
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//https://htmler.ru/2014/08/14/javascript-kolichestvo-znakov-posle-zapyatoy/

const MIN = 1;
const MAX = 3;
const N = 2;

/**
 * Функция получения случайного ЦЕЛОГО числа из переданного диапазона включительно
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @returns {number} — случайное число
 */
function getRandomNumberFromPeriodInclusive(min, max) {
  if (min >= 0 && max >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    // eslint-disable-next-line no-console
    console.log('ERROR. Please check the range.');
  }
}
// eslint-disable-next-line no-console
console.log(getRandomNumberFromPeriodInclusive(MIN, MAX));


/**
 * Функция получения случайного ДРОБНОГО числа из переданного диапазона включительно
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @param {number} n - количество знаков после запятой
 * @returns {number} — случайное число
 */
function getRandomNumberFloatInteger(min, max, n) {
  if (min >= 0 && max >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Number((min + Math.random() * (max - min)).toFixed(n));
  } else {
    console.log('ERROR!!!!!!!!!!!!');
  }
}
console.log(getRandomNumberFloatInteger(MIN, MAX, N));
