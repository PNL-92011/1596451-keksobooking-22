const similarListElement = document.querySelector('.map__canvas');
const similarAdTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

/**
 * Функция отрисовки карточки объявления
 */
const renderCard = (elem) => {

  const adElement = similarAdTemplate.cloneNode(true);

  adElement.querySelector('.popup__title').textContent = elem.offer.title;
  adElement.querySelector('.popup__text--address').textContent = elem.offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${elem.offer.price} ₽/ночь`;
  adElement.querySelector('.popup__type').textContent = elem.offer.type;
  adElement.querySelector('.popup__text--capacity').textContent = `${elem.offer.rooms} комнат(ы) для ${elem.offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${elem.offer.checkin}, выезд до ${elem.offer.checkout}`;
  adElement.querySelector('.popup__description').textContent = elem.offer.description;
  adElement.querySelector('.popup__avatar').src = elem.author.avatar;
  adElement.querySelector('.popup__features').src = elem.author.avatar;

  //const featuresList = adElement.querySelector('.popup__features');
  // const photosList = adElement.querySelector('.popup__photos');
  // Каждая из строк массива photos должна записываться как src соответствующего изображения.

  return adElement;
};


// Если данных для заполнения не хватает, соответствующий блок в карточке скрывается

export {similarListElement, renderCard};


