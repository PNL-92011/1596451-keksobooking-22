import {renderPins} from './map.js';
import {setActivatePage, setFormSubmit} from './form.js';
import {getData} from './fetch.js';
import {showAlert} from './util.js';



getData(
  (ads) => {
    //setActivatePage(false);  // работает не корректно 
    renderPins(ads);
    setActivatePage(true);    // работает не корректно
    setFormSubmit(ads);

  }, (message) => showAlert(message));







