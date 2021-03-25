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
      onError('Ошибка при получении данных с сервера');
    });
}


export {getData};



