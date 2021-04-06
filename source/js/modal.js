const main = document.querySelector('main');

/**
 * Проверка нажатия Esc
 */
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

  document.querySelector('.ad-form').reset();
}


/**
 * Функция закрытие сообщения О НЕУДАЧНОЙ ОТПРАВКЕ по Esc
 * или при клике в любом месте экрана
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
  main.append(successMessage);
  closeSuccessMessage(successMessage);
}


/**
 * Функция отображения сообщения об ошибке создания объявления
 */
const showErrorMessage = (message) => {
  const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorMessage = errorMessageTemplate.cloneNode(true);
  errorMessage.querySelector('.error__message').textContent = message;
  main.append(errorMessage);
  closeErrorMessage(errorMessage);
}


export {showSuccessMessage, showErrorMessage}
