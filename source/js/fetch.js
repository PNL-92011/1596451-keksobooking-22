import {setActivateFilters, mapFeatures} from './form.js';

const URL_GET = 'https://22.javascript.pages.academy/keksobooking/data';
const URL_SEND = 'https://22.javascript.pages.academy/keksobooking'


/**
 * Функция получения данных с сервера (запрос методом GET)
 * @param {function} onSuccess — функция обработки данных при успешном их получении
 * @param {function} onError — функция обработки данных при ошибке
 */
const getData = (onSuccess, onError) => {
  fetch(URL_GET)
    .then((response) => response.json())
    .then((ads) => {
      onSuccess(ads);
    })
    .catch(() => {
      onError('Ошибка при получении данных с сервера!');
      setActivateFilters(false);       // блокировка фильтров-select
      mapFeatures.disabled = true;     // блокировка фильтров-checkbox
    });
}


/**
 * Функция отправки пользовательских данных на сервер (методом POST)
 * @param {function} onSuccess — функция обработки данных при успешном их получении
 * @param {function} onError — функция обработки данных при ошибке
 * @param {object} body — данные формы для отправки на сервер
 */
const sendData = (onSuccess, onError, body) => {
  fetch(URL_SEND,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError('Ошибка при отправке данных');
      }
    })
    .catch(() => {
      onError('Ошибка при отправке данных');
    });
}


export {getData, sendData};
