const main = document.querySelector('main');
//const buttonTryAgain = document.querySelector('.error__button');  // через const не срабатывает (Почему???)
//const formMessage = errorMessage.querySelector('.error__message'); // через const не срабатывает (Почему???)


// проверка нажатия Esc
const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};


/**
 * Функция закрытие сообщения по Esc или клике в любом месте экрана
 */
const closeSuccessMessage = (message) => {
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      message.remove();
    }
  })

  document.addEventListener('click', () => {
    message.remove();
  })

  document.querySelector('.ad-form').reset();          // очистка полей формы
  //document.querySelector('.map__filters').reset();     // сброс фильтров --------  не работает

}

/**
 * Функция закрытие сообщения О НЕУДАЧНОЙ ОТПРАВКЕ по Esc или клике в любом месте экрана
 */
const closeErrorMessage = (message) => {
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      message.remove();
    }
  })

  document.addEventListener('click', () => {
    message.remove();
  })

  document.querySelector('.error__button').addEventListener('click', () => {
    message.remove();
  })
}



/**
 * Функция отображения сообщения об успешном создании объявления
 */
const showSuccessMessage = () => {
  const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
  const successMessage = successMessageTemplate.cloneNode(true);
  //successMessage.querySelector('.error__message').textContent = message;
  main.append(successMessage);
  closeSuccessMessage(successMessage);
}


/**
 * Функция отображения сообщения об ошибке создания объявления
 */
const showErrorMessage = (message) => {
  const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorMessage = errorMessageTemplate.cloneNode(true);
  // formMessage.textContent = message; "errorMessage is not defined"  // не работает! Почему??? 
  errorMessage.querySelector('.error__message').textContent = message;
  main.append(errorMessage);
  closeErrorMessage(errorMessage);
}











export {showSuccessMessage, showErrorMessage}
