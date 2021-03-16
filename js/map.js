/* global L:readonly */
import {adForm, mapFilters, getFormOn, getFilterOn} from './form.js';
import {createAds} from './data.js';
import {renderCard} from './card.js';

const COUNT = 10;
const dataAds = createAds(COUNT);


// const LAT = 35.68950;
// const LNG = 139.69200;

// const TokioCenter = {
//   lat: 35.68950,
//   lng: 139.69200,
// }


// Добавление карты на страницу и активация формы и фильтров
const map = L.map('map-canvas') // место для карты определяем по id
  .on('load', () => {
    adForm.classList.remove('ad-form--disabled');
    getFormOn();
    mapFilters.classList.remove('ad-form--disabled');
    getFilterOn();
    console.log('Карта готова !!!')
  })
  .setView({
    lat: 35.68950,
    lng: 139.69200,
  }, 10);

// Добавление к карте копирайт
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinMarker = L.icon({ // Кастомная иконка для главного маркера
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker({
  lat: 35.68950,
  lng: 139.69200,
}, {
  draggable: true, // Перемещение маркера по карте
  icon: mainPinMarker, // Добавление кастомной иконки маркера
});
mainMarker.addTo(map);


// Получение адреса путём перемещения главной метки
mainMarker.on('moveend', (evt) => {
  const formAddress = document.querySelector('#address');
  formAddress.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;

  console.log(formAddress.value);
});


// Добавление на карту маркеров соседних объявлений

dataAds.forEach(({author, offer, location}) => {
  const ordinarPinMarker = L.icon({     // Иконка для обычного маркера
    iconUrl: './img/pin.svg',
    iconSize: [32, 32],
    iconAnchor: [18, 32],
  });

  const ordinaryMarker = L.marker(
    {
      lat: location.x,
      lng: location.y,
    },
    {
      draggable: false,
      icon: ordinarPinMarker,
    },
  );

  ordinaryMarker
    .addTo(map)
    .bindPopup(
      renderCard({author, offer}),
      {
        keepInView: true,
      },
    );
});




//  var latlng = L.latLng(50.5, 30.5);

//  L.latLng(<Number> latitude, <Number> longitude, <Number> altitude?)
// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).
