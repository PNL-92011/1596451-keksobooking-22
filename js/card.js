const PhotoSize = {
  WIDTH: 45,
  HEIGHT: 40,
};

const CardType = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  house: 'Дом',
  palace: 'Дворец',
}

const similarListElement = document.querySelector('.map__canvas');
const similarAdTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');


/**
 * Функция отображения карточки объявления
 * @param {{object, object}} author, offer - данные объявления
 * @return {object} карточка объявления по шаблону
 */
const renderCard = ({author, offer}) => {

  const adElement = similarAdTemplate.cloneNode(true);

  // функция вывода иконок преимуществ в карточку объявления
  const getFeaturesNumber = (features) => {
    if (features) {
      features.forEach((feature) => {
        const featureItem = document.createElement('li');
        featureItem.classList.add('popup__feature', `popup__feature--${feature}`);
        adElement.querySelector('.popup__features').append(featureItem);
      });
    } else { // Если данных для заполнения не хватает, соответствующий блок в карточке скрывается
      adElement.querySelector('.popup__features').remove();
    }
  };

  // функция вывода фото в карточку объявления
  const getPhotosNumber = (photos) => {
    if (photos) {
      photos.forEach((photo) => {
        const photoItem = document.createElement('img');
        photoItem.src = photo;
        photoItem.alt = 'Фотография жилья';
        photoItem.style.width = `${PhotoSize.WIDTH}px`;
        photoItem.style.height = `${PhotoSize.HEIGHT}px`;
        photoItem.classList.add('popup__photo');
        adElement.querySelector('.popup__photos').append(photoItem);
      });
    } else { // Если данных для заполнения не хватает, соответствующий блок в карточке скрывается
      adElement.querySelector('.popup__photos').remove();
    }
  };

  // заполнение полей объявления данными по шаблону
  adElement.querySelector('.popup__features').textContent = '';
  getFeaturesNumber(offer.features);
  adElement.querySelector('.popup__photos').textContent = '';
  getPhotosNumber(offer.photos);


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

  insertValue(offer.title, '.popup__title');
  insertValue(offer.address, '.popup__text--address');
  insertValue(`${offer.price} ₽/ночь`, '.popup__text--price');
  insertValue(CardType[offer.type], '.popup__type');
  insertValue(`${offer.rooms} комнат(ы) для ${offer.guests} гостей`, '.popup__text--capacity');
  insertValue(`Заезд после ${offer.checkin}, выезд до ${offer.checkout}`, '.popup__text--time');
  insertValue(offer.description, '.popup__description');
  insertValue(author.avatar, '.popup__avatar');


  return adElement;
};


export {similarListElement, renderCard};
