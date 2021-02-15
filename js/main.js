/* eslint-disable no-console */
// Источники:
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//https://htmler.ru/2014/08/14/javascript-kolichestvo-znakov-posle-zapyatoy/

/*const MIN = 1;
const MAX = 3;
const N = 2;

/**
 * Функция получения случайного ЦЕЛОГО числа из переданного диапазона включительно
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @returns {number} — случайное число

function getRandomNumberFromPeriodInclusive(min, max) {
  if (min >= 0 && max >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    console.log('ERROR. Please check the range.');
  }
}
console.log(getRandomNumberFromPeriodInclusive(MIN, MAX));


/**
 * Функция получения случайного ДРОБНОГО числа из переданного диапазона включительно
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @param {number} n - количество знаков после запятой
 * @returns {number} — случайное число

function getRandomNumberFloatInteger(min, max, n) {
  if (min >= 0 && max >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Number((min + Math.random() * (max - min)).toFixed(n));
  } else {
    console.log('ERROR!!!!!!!!!!!!');
  }
}
console.log(getRandomNumberFloatInteger(MIN, MAX, N));*/



/*Структура каждого объекта должна быть следующей:
    author, объект — описывает автора. Содержит одно поле:
        avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это случайное число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д.

    offer, объект — содержит информацию об объявлении. Состоит из полей:
        title, строка — заголовок предложения. Придумайте самостоятельно.
        address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
        price, число — стоимость. Любое положительное число.
        type, строка — одно из четырёх фиксированных значений: palace, flat, house или bungalow.
        rooms, число — количество комнат. Любое положительное число.
        guests, число — количество гостей, которое можно разместить. Любое положительное число.
        checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
        checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
        features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
        description, строка — описание помещения. Придумайте самостоятельно.

        photos, массив строк — массив случайной длины из значений: http://o0.github.io/assets/images/tokyo/hotel1.jpg, http://o0.github.io/assets/images/tokyo/hotel2.jpg, http://o0.github.io/assets/images/tokyo/hotel3.jpg.

    location, объект — местоположение в виде географических координат. Состоит из двух полей:
        x, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
        y, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
*/

//  ЗАГОЛОВОК
const HEADERS = [
  'Шикарный дом на берегу залива',
  'Уютная квартира для молодой пары',
  'Бунгало для двоих',
  'Дворец в старо-японском стиле',
  'Дом для большой семьи',
  'Квартира в тихом районе',
  'Квартира с видом на парк Ёёги',
  'Восточный дворец',
  'Дом с террасой',
  'Бунгало. Эконом-вариант.',
];

//  ТИП РАЗМЕЩЕНИЯ
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

//  ВРЕМЯ ЗАЕЗДА И ВЫЕЗДА
const CHECKINTIME = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTTIME = [
  '12:00',
  '13:00',
  '14:00',
];

//  УДОБСТВА И ПРЕИМУЩЕСТВА
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

//  ОПИСАНИЕ
const DESCRIPTIONS = [
  'Здесь есть все самое необходимое.',
  'Лучшее предложение в этом районе.',
  'Можно с животными.',
  'Вам здесь понравится!',
  'Отличный вид из панорамных окон',
  'Имеется большая кладовка',
  'Гараж на две машины',
  'В пешей доступности от метро',
  'Развитая инфраструктура',
  'Окна выходят на запад. Вы сможете наслаждаться закатами каждый вечер!',
];

//  ФОТО
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

// КОЛ-ВО ОБЪЯВЛЕНИЙ
const SIMILAR_AD_AMOUNT = 10;


//  АВАТАР
/** Функция получения случайного ЦЕЛОГО числа из переданного диапазона включительно
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @returns {number} — случайное число
 */
function getRandomAvatarIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//  КООРДИНАТЫ Х и Y
/** Функция получения случайного ДРОБНОГО числа из переданного диапазона включительно
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @param {number} n - количество знаков после запятой
 * @returns {number} — случайное число
 */
function getRandomLocationX(min, max, n) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Number((min + Math.random() * (max - min)).toFixed(n));
}

function getRandomLocationY(min, max, n) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Number((min + Math.random() * (max - min)).toFixed(n));
}

//  ЦЕНА  //  КОЛ-ВО КОМНАТ  //  КОЛ-ВО ГОСТЕЙ  //  ***** getRandomNumbers *****  //
/** Функция получения случайного целого числа из переданного диапазона включительно
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @returns {number} — случайное число
 */
function getRandomNumbers(min, max) {
  if (min >= 0 && max >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
  } else console.log('Please check the data!')
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//  ЗАГОЛОВОК  //  ТИП ЖИЛЬЯ  //  ДАТЫ ЗАЕЗДА/ВЫЕЗДА  //  УДОБСТВА  //  ОПИСАНИЕ  //  ФОТО  //  ***** getRandomElements *****  //
/** Функция получения случайного элемента массива
 * @param {array} — массив данных
 * @return {array} — итоговый массив
 */
const getRandomElements = (sets) => {
  return sets[Math.floor(Math.random() * sets.length)];
}


//  СОЗДАНИЕ ОБЪЯВЛЕНИЯ
/** Функция генерирования объекта из данных
 *  @return {object} — объект объявления
 */
function createAd() {
  return {
    author: {
      avatar: 'img/avatars/users0' + getRandomAvatarIndex(1, 8) + '.png',
    },
    offer: {
      title: getRandomElements(HEADERS),
      address: 'Точный адрес: (' + getRandomLocationX(35.65000, 35.70000, 5) + '; ' + getRandomLocationY(139.70000, 139.80000, 5) + ')',
      price: getRandomNumbers(1, 50000),
      type: getRandomElements(TYPES),
      rooms: getRandomNumbers(1, 20),
      guests: getRandomNumbers(1, 20),
      checkin: getRandomElements(CHECKINTIME),
      checkout: getRandomElements(CHECKOUTTIME),
      features: getRandomElements(FEATURES),
      description: getRandomElements(DESCRIPTIONS),
      photos: getRandomElements(PHOTOS),
    },
    location: 'Координаты объекта: (' + getRandomLocationX(35.65000, 35.70000, 5) + '; ' + getRandomLocationY(139.70000, 139.80000, 5) + ')',
  }
}

console.log(
  createAd(),
);

const similarAds = new Array(SIMILAR_AD_AMOUNT).fill(1).map(() => createAd());

console.log(similarAds);
