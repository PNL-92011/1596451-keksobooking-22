/* global L:readonly */
import {adForm, mapFilters, getFormOn, getFilterOn} from './form.js';

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
    lat: 35.6895,
    lng: 139.692,
  }, 10);

// Добавление к карте копирайт
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerMainPin = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [25, 52],
});

const marker = L.marker({
  lat: 35.6895,
  lng: 139.692,
},
{
  draggable: true,
  icon: markerMainPin,
});
marker.addTo(map);



