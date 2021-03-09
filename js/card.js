const similarListElement = document.querySelector('.map__canvas');
const similarAdTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');


const photoSize = {
  WIDTH: 45,
  HEIGHT: 40,
};

// Функция отображения карточки объявления
const renderCard = (elem) => {

  const adElement = similarAdTemplate.cloneNode(true);

  // функция вывода иконок преимуществ в карточку объявления
  const getFeaturesNumber = () => {
    if (elem.offer.features) {
      elem.offer.features.forEach((item, FEATURES) => {
        const featureItem = document.createElement('li');
        featureItem.classList.add('popup__feature', `popup__feature--${elem.offer.features[FEATURES]}`);
        adElement.querySelector('.popup__features').append(featureItem);
      });
    } else { // Если данных для заполнения не хватает, соответствующий блок в карточке скрывается
      adElement.querySelector('.popup__features').remove();
    }
  };

  // функция вывода фото в карточку объявления
  const getPhotosNumber = () => {
    if (elem.offer.photos) {
      elem.offer.photos.forEach((photo) => {
        const photoItem = document.createElement('img');
        photoItem.src = photo;
        // photoItem.src = elem.offer.photos[PHOTOS];
        photoItem.alt = 'Фотография жилья';
        photoItem.style.width = `${photoSize.WIDTH}px`;
        photoItem.style.width = `${photoSize.HEIGHT}px`;
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

  return adElement;
};

export {
  similarListElement,
  renderCard
};
