import './form.js';
import {renderPins} from './map.js';
import {sendData, setFormSubmit, clearForm} from './form.js';
import {getData} from './fetch.js';
import {showAlert} from './util.js';
//import {showSuccessMessage, showErrorMessage} from './modal.js';



getData((ads) => {
  renderPins(ads);
  setFormSubmit();

});



