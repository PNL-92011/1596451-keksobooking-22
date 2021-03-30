const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form__field input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview');
const photoChooser = document.querySelector('.ad-form__upload input[type=file]');
const previewPhoto = document.querySelector('.ad-form__photo');


// Добавление превью аватара
const chooseAvatar = () => {
  avatarChooser.addEventListener('change', (evt) => {
    const file = evt.target.files[0];
    const fileName = file.name.toLowerCase(); // намеренно переводим название файла в нижний регистр

    // делаем проверку окончания файлов (отбираем нужные расширения)
    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    // извлекаем сам файл (содержимое) из file
    if (matches) {
      const reader = new FileReader();

      // результат чтения файла = изображение —->
      // кладем его в атрибут src DOM-узла с превью картинки
      reader.addEventListener('load', () => {
        previewAvatar.src = reader.result;
      });

      // чтение файла (из Input), после которого сработает событие обработчика 'load' и
      // мы получим результат чтения DataURL, который сможем записать в src нашего превью
      reader.readAsDataURL(file);
    }
  });
}



// Добавление превью фото жилья
const choosePhoto = () => {
  photoChooser.addEventListener('change', (evt) => {
    const file = evt.target.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        previewPhoto.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
}


export {chooseAvatar, choosePhoto}
