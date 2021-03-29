/* global _:readonly */
import {mapFilters} from './form.js';
//import {renderPins} from './map';

const ANY = 'any';  // Любой тип жилья
const filterType = mapFilters.querySelector('#housing-type');

/**
 * Проверка объявления на соответствие выбранному фильтру (тип жилья)
 * @param {object} elem - объявление
 * @return {boolean}
 */
const searchMatches = (elem) => {
  let isType = true;

  if (filterType.value !== ANY) {
    isType = elem.offer.type === filterType.value;
  }
  return isType;
}

/**
 * Отбор объявлений из массива с учетом выбранного фильтра
 * @param {array} data - массив объявлений
 * @return {array} filteredAds - отфильтрованные объявления
 */
const filterData = (data) => {
  const filteredAds = [];

  data.forEach((elem) => {
    if (searchMatches(elem)) {
      filteredAds.push(elem);
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



// добавить позже

// const filterPrice = mapFilters.querySelector('#housing-price');
// const filterRooms = mapFilters.querySelector('#housing-rooms');
// const filterGuests = mapFilters.querySelector('#housing-guests');
//const filterFeatures = mapFilters.querySelector('#housing-features');  ??

// let isPrice = true;
// let isRooms = true;
// let isGuests = true;
// let isFeatures = true;

// if (filterRooms.value !== ANY) {
//   isRooms = elem.offer.rooms.toString() === filterRooms.value;
// }
// if (filterGuests.value !== ANY) {
//   isGuests = elem.offer.guests.toString() === filterGuests.value;
// }



