const photoSize = {
  WIDTH: 45,
  HEIGHT: 40,
};

const similarListElement = document.querySelector('.map__canvas');
const similarAdTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');


/**
 * Функция отображения карточки объявления
 * @return {object} карточка объявления по шаблону
 */

const renderCard = (elem) => {

  const adElement = similarAdTemplate.cloneNode(true);

  // функция вывода иконок преимуществ в карточку объявления
  const getFeaturesNumber = (FEATURES) => { // используем параметр в функции, чтобы она была объявлена не глобально, а локально!
    if (elem.offer.features) {
      elem.offer.features.forEach((feature) => { // объявляем параметр (feature) и используем его в цикле
        const featureItem = document.createElement('li');
        featureItem.classList.add('popup__feature', `popup__feature--${[feature]}`);
        adElement.querySelector('.popup__features').append(featureItem);
      });
    } else { // Если данных для заполнения не хватает, соответствующий блок в карточке скрывается
      adElement.querySelector('.popup__features').remove();
    }
  };

  // функция вывода фото в карточку объявления
  const getPhotosNumber = (PHOTOS) => {
    if (elem.offer.photos) {
      elem.offer.photos.forEach((photo) => {
        const photoItem = document.createElement('img');
        photoItem.src = photo;
        photoItem.alt = 'Фотография жилья';
        photoItem.style.width = `${photoSize.WIDTH}px`;
        photoItem.style.height = `${photoSize.HEIGHT}px`;
        photoItem.classList.add('popup__photo');
        adElement.querySelector('.popup__photos').append(photoItem);
      });
    } else { // Если данных для заполнения не хватает, соответствующий блок в карточке скрывается
      adElement.querySelector('.popup__photos').remove();
    }
  };

  // заполнение полей объявления данными по шаблону
  adElement.querySelector('.popup__title').textContent = elem.offer.title;
  adElement.querySelector('.popup__text--address').textContent = elem.offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${elem.offer.price} ₽/ночь`;
  adElement.querySelector('.popup__type').textContent = elem.offer.type;
  adElement.querySelector('.popup__text--capacity').textContent = `${elem.offer.rooms} комнат(ы) для ${elem.offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${elem.offer.checkin}, выезд до ${elem.offer.checkout}`;
  adElement.querySelector('.popup__description').textContent = elem.offer.description;
  adElement.querySelector('.popup__avatar').src = elem.author.avatar;
  adElement.querySelector('.popup__features').textContent = '';
  getFeaturesNumber();
  adElement.querySelector('.popup__photos').textContent = '';
  getPhotosNumber();


  /**
  * Проверка наличия данных и удаление поля в случае отсутствия данных
  * @param {object} данные для поля
  * @param {object} селектор
  * @return {*} либо поле с данными, либо поля нет
  */
  const insertValue = (value, selector) => {
    if (value) {
      adElement.querySelector(selector).textContent = value;
    } else {
      adElement.querySelector(selector).remove();
    }
  }

  insertValue(elem.offer.title, '.popup__title');
  insertValue(elem.offer.address, '.popup__text--address');
  insertValue(`${elem.offer.price} ₽/ночь`, '.popup__text--price');
  insertValue(elem.offer.type, '.popup__type');
  insertValue(`${elem.offer.rooms} комнат(ы) для ${elem.offer.guests} гостей`, '.popup__text--capacity');
  insertValue(`Заезд после ${elem.offer.checkin}, выезд до ${elem.offer.checkout}`, '.popup__text--time');
  insertValue(elem.offer.description, '.popup__description');
  insertValue(elem.author.avatar, '.popup__avatar');


  return adElement;
};


export {
  similarListElement,
  renderCard
};
