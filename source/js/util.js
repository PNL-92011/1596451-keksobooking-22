const ALERT_SHOW_TIME = 5000;

/**
 * Функция отображения сообщения об ошибке для пользователя
 * @param {string} message - сообщение об ошидке
 */
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '25px';
  alertContainer.style.top = '10px';
  alertContainer.style.right = 0;
  alertContainer.style.padding = '20px 1px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'white';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}


export {showAlert};
