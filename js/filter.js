import {mapFilters} from './form.js';

const ANY = 'any';  // Любой тип жилья
const filterType = mapFilters.querySelector('#housing-type');
const filterPrice = mapFilters.querySelector('#housing-price');
const filterRooms = mapFilters.querySelector('#housing-rooms');
const filterGuests = mapFilters.querySelector('#housing-guests');


const priceOptions = {
  low: {
    min: 0,
    max: 10000,
  },
  middle: {
    min: 10000,
    max: 50000,
  },
  high: {
    min: 50000,
    max: 1000000,
  },
};


/**
 * Проверка объявления на соответствие выбранному фильтру (тип жилья)
 * @param {object} element - объявление
 * @return {boolean}
 */
const searchMatches = (element) => {
  let isType = true;
  let isPrice = true;
  let isRooms = true;
  let isGuests = true;
  let isFeatures = true;

  if (filterType.value !== ANY) {isType = element.offer.type === filterType.value; }

  let selectPrice = priceOptions[filterPrice.value];
  if (filterPrice.value !== ANY) {
    isPrice = element.offer.price >= selectPrice.min &&  element.offer.price < selectPrice.max
  }

  if (filterRooms.value !== ANY) {isRooms = element.offer.rooms.toString() === filterRooms.value; }

  if (filterGuests.value !== ANY) {isGuests = element.offer.guests.toString() === filterGuests.value; }


  let checkedFeatures = mapFilters.querySelectorAll('input[type="checkbox"]:checked');
  if (checkedFeatures) {
    checkedFeatures.forEach((feature) => {
      if (element.offer.features.indexOf(feature.value) === -1) {
        isFeatures = false;
      }
    });
  }

  return isType && isRooms && isGuests && isPrice && isFeatures;
}

/**
 * Отбор объявлений из массива с учетом выбранного фильтра
 * @param {array} data - массив объявлений
 * @return {array} filteredAds - отфильтрованные объявления
 */
const filterData = (data) => {
  const filteredAds = [];

  data.forEach((element) => {
    if (searchMatches(element)) {
      filteredAds.push(element);
    }
  })
  return filteredAds;
};


const chooseFilter = (cb) => {
  mapFilters.addEventListener('change', () => {
    cb();
  })
}

export {filterData, chooseFilter};
