import {createAds} from './data.js'

const similarListElement = document.querySelector('.map__canvas');     // место, куда разместим похожие объявления
const similarAdTemplate = document.querySelector('#card')              // находим шаблон
  .content                                                             // будем использовать его содержимое
  .querySelector('.popup');                                            // и элемент, который будем копировать

const similarAds = createAds();

similarAds.forEach((elem) => {
  const adElement = similarAdTemplate.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = elem.offer.title;
  adElement.querySelector('.popup__text--address').textContent = elem.offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${elem.offer.price} ₽/ночь`;
  adElement.querySelector('.popup__type').textContent = elem.offer.type;
  adElement.querySelector('.popup__text--capacity').textContent = `${elem.offer.rooms} комнаты для ${elem.offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${elem.offer.checkin}, выезд до ${elem.offer.checkout}`;
  adElement.querySelector('.popup__description').textContent = elem.offer.description;
  adElement.querySelector('.popup__avatar').src = elem.author.avatar;  //  аватар не отображается
  // list of features
  // (.popup__photos) = ?  Каждая из строк массива photos должна записываться как src соответствующего изображения.

  // Если данных для заполнения не хватает, соответствующий блок в карточке скрывается
  
  similarListElement.appendChild(adElement);
});
