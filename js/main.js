// Источники:
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//https://htmler.ru/2014/08/14/javascript-kolichestvo-znakov-posle-zapyatoy/

/**
 * Функция получения случайного ЦЕЛОГО числа из переданного диапазона включительно
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @returns {number} — случайное число
 */

const MIN = 1;
const MAX = 4;

function getRandomNumberFromPeriodInclusive(min, max) {
  if (min >= 0 && max >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    alert('ERROR. Please check the range.');
  }
}
alert(getRandomNumberFromPeriodInclusive(MIN, MAX));


/**
 * Функция получения случайного ДРОБНОГО числа из переданного диапазона включительно
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @returns {number} — случайное число
 * @param {number} n - количество знаков после запятой
 */

const N = 3;

function getRandomNumberFloatInteger(min, max, n) {
  if (min >= 0 && max >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (min + Math.random() * (max - min)).toFixed(n);
  } else {
    alert('ERROR!!!!!!!!!!!!');
  }
}
alert(getRandomNumberFloatInteger(MIN, MAX, N));
