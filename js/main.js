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

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

// Check-in & Check-out are the same
const CHECKTIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

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

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const SIMILAR_AD_AMOUNT = 10;

/**
 * Функция получения случайного ЦЕЛОГО числа для задания номера аватара
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @returns {number} — случайное число
 */
function getRandomAvatarIndex(min, max) {
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

/**
 * Функция получения случайного целого числа для задания полей цены,
 * кол-ва комнат в объекте, кол-ва гостей
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

/**
 * Функция получения случайного элемента массива
 * для полей: заголовок, тип жилья, время заезда/выезда,
 * преимуществ, описания объекта, фото
 * @param {array} — массив данных
 * @return {array} — итоговый массив
 */
const getRandomElements = (sets) => {
  return sets[Math.floor(Math.random() * sets.length)];
}


/**
 * Функция генерирования объекта
 *  @return {object} — объект объявления
 */
function createAd() {  // const createAd = () => {

  const coordinateX = getRandomLocationX(35.65000, 35.70000, 5);
  const coordinateY = getRandomLocationY(139.70000, 139.80000, 5);
  const addressFull = coordinateX + ', ' + coordinateY;

  return {
    author: {
      avatar: 'img/avatars/users0' + getRandomAvatarIndex(1, 8) + '.png',
    },
    offer: {
      title: getRandomElements(HEADERS),
      address: addressFull,
      price: getRandomNumbers(1, 50000),
      type: getRandomElements(TYPES),
      rooms: getRandomNumbers(1, 20),
      guests: getRandomNumbers(1, 20),
      checkin: getRandomElements(CHECKTIME),
      checkout: getRandomElements(CHECKTIME),
      features: getRandomElements(FEATURES),
      description: getRandomElements(DESCRIPTIONS),
      photos: getRandomElements(PHOTOS),
    },
    location: {
      x: coordinateX,
      y: coordinateY,
    },
  }
}

console.log(
  createAd(),
);

const similarAds = new Array(SIMILAR_AD_AMOUNT).fill(1).map(() => createAd());

console.log(similarAds);
