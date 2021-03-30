const PhotoSize = {
  WIDTH: 45,
  HEIGHT: 40,
};

const cardType = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  house: 'Дом',
  palace: 'Дворец',
}

const similarAdTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');


/**
 * Функция отображения карточки объявления
 * @param {{object, object}} author, offer - данные объявления
 * @return {object} карточка объявления по шаблону
 */
const renderCard = ({author, offer}) => {

  const card = similarAdTemplate.cloneNode(true);

  // функция вывода иконок преимуществ в карточку объявления
  const getFeaturesNumber = (features) => {
    if (features) {
      features.forEach((feature) => {
        const featureItem = document.createElement('li');
        featureItem.classList.add('popup__feature', `popup__feature--${feature}`);
        card.querySelector('.popup__features').append(featureItem);
      });
    } else { // Если данных для заполнения не хватает, соответствующий блок в карточке скрывается
      card.querySelector('.popup__features').remove();
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
        card.querySelector('.popup__photos').append(photoItem);
      });
    } else { // Если данных для заполнения не хватает, соответствующий блок в карточке скрывается
      card.querySelector('.popup__photos').remove();
    }
  };

  // Заполнение полей объявления данными по шаблону

  if (offer.title) {
    card.querySelector('.popup__title').textContent = offer.title;
  } else {
    card.querySelector('.popup__title').remove();
  }

  if (offer.address) {
    card.querySelector('.popup__text--address').textContent = offer.address;
  } else {
    card.querySelector('.popup__text--address').textContent.remove();
  }

  if (offer.price) {
    card.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  } else {
    card.querySelector('.popup__text--price').textContent.remove();
  }

  if (offer.type) {
    card.querySelector('.popup__type').textContent = cardType[offer.type];
  } else {
    card.querySelector('.popup__type').textContent.remove();
  }

  if (offer.rooms && offer.guests) {
    card.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнат(ы) для ${offer.guests} гостей`;
  } else {
    card.querySelector('.popup__text--capacity').remove();
  }

  if ((offer.checkin && offer.checkout) && ((offer.checkin !== '0:00') && (offer.checkout !== '0:00'))) {
    card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    card.querySelector('.popup__text--time').remove();
  }

  card.querySelector('.popup__features').textContent = '';
  getFeaturesNumber(offer.features);

  if (offer.description) {
    card.querySelector('.popup__description').textContent = offer.description;
  } else {
    card.querySelector('.popup__description').remove();
  }

  if (offer.photos) {
    card.querySelector('.popup__photos').textContent = '';
    getPhotosNumber(offer.photos);
  } else {
    card.querySelector('.popup__photos').remove();
  }

  if (author.avatar) {
    card.querySelector('.popup__avatar').src = author.avatar;
  } else {
    card.querySelector('.popup__avatar').remove();
  }


  return card;
};


export {renderCard};
