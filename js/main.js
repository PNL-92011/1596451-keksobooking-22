import {renderPins} from './map.js';
import {setFormSubmit} from './form.js';
import {getData} from './fetch.js';
import {showAlert} from './util.js';



getData(
  (ads) => {
    renderPins(ads);
    setFormSubmit();
    
  }, (message) => showAlert(message));







