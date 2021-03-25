const main = document.querySelector('main');


/**
 * Функция отображения сообщения об успешном создании объявления
 */
const showSuccessMessage = () => {
  const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
  const successMessage = successMessageTemplate.cloneNode(true);

  main.append(successMessage);
}


/**
 * Функция отображения сообщения об ошибке создания объявления
 */
const showErrorMessage = () => {
  const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorMessage = errorMessageTemplate.cloneNode(true);

  main.append(errorMessage);
}


export {showSuccessMessage, showErrorMessage}
