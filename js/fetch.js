import {adForm} from './form.js';

/**
 * Функция получения данных с сервера (запрос методом GET)
 * @param {function} onSuccess — функция обработки данных при успешном их получении
 * @param {function} onError — функция обработки данных при ошибке
 */
const getData = (onSuccess, onError) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((ads) => {
      onSuccess(ads);
    })
    .catch(() => {
      onError('Ошибка при получении данных');
    });
}




adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();                            // отмена перехода на другую страницу при отправке формы

  const formData = new FormData(evt.target);       // сбор данных из формы для отправки на сервер (методом fetch POST)

  fetch('https://22.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData,
  },
  );
});


export {getData};
