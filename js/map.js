/* global L:readonly */
import {setActivatePage} from './form.js';
import {renderCard} from './card.js';
import {filterData} from './filter.js';

const ZOOM = 10;
const DECIMAL = 5;

const tokioCenter = {
  lat: 35.68950,
  lng: 139.69200,
}

const mainPin = {
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
}

const ordinaryPin = {
  iconUrl: './img/pin.svg',
  iconSize: [32, 32],
  iconAnchor: [18, 32],
}

const layerOfPins = L.layerGroup();

const removeOrdinaryMarkers = () => {
  layerOfPins.remove();
}


/**
 * Активации карты на странице
 */
const map = L.map('map-canvas')
  .on('load', () => {
    setActivatePage(true);        // Активация страницы

  })
  .setView(tokioCenter, ZOOM);   // Отображение координат центра


/**
 * Добавление на карту копирайта
 */
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


/**
 * Кастомная иконка для главного маркера
 */
const mainPinMarker = L.icon(mainPin);

/**
 * Главная метка
 */
const mainMarker = L.marker({
  lat: tokioCenter.lat,
  lng: tokioCenter.lng,
}, {
  draggable: true, // Перемещение маркера по карте
  icon: mainPinMarker, // Добавление кастомной иконки маркера
});
mainMarker.addTo(map);


/**
 * Получение адреса путём перемещения главной метки
 */
mainMarker.on('move', (evt) => {
  const formAddress = document.querySelector('#address');
  formAddress.value = `${evt.target.getLatLng().lat.toFixed(DECIMAL)}, ${evt.target.getLatLng().lng.toFixed(DECIMAL)}`;
});


/**
 * Функция отображения обычных маркеров для объявлений на карте
 * При нажатии на маркер открывается балун с карточкой объявления по шаблону
 * @param {array} pins — массив объявлений
 */
const createPins = (pins) => {
  layerOfPins.clearLayers();
  pins.forEach(({author, offer, location}) => {
    const ordinaryPinMarker = L.icon(ordinaryPin);

    const ordinaryMarker = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        draggable: false,
        icon: ordinaryPinMarker,
      },
    );

    ordinaryMarker
      .addTo(layerOfPins)
      .bindPopup(
        renderCard({author, offer}),
        {
          keepInView: true,
        },
      );
  });
  layerOfPins.addTo(map)
}


/**
 * Функция отображения маркеров на карте с учетом фильтров
 */
const renderPins = (pins) => {
  const filteredPins = filterData(pins);

  createPins(filteredPins, layerOfPins);
  layerOfPins.addTo(map);
};


/**
 * Возврат карты в исходное состояние
 */
const updateMap = () => {
  map.setView(tokioCenter, ZOOM);   // карта не встает в исходное
  mainMarker.setLatLng({
    lat: tokioCenter.lat,
    lng: tokioCenter.lng,
  });
  removeOrdinaryMarkers();
}


export {renderPins, updateMap};
