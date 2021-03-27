import {renderPins} from './map.js';
import {setFormSubmit} from './form.js';
import {getData} from './fetch.js';
import {showAlert} from './util.js';

const OFFERS_LIMIT = 10;

getData(
  (ads) => {
    renderPins(ads.slice(0, OFFERS_LIMIT));
    setFormSubmit(ads.slice(0, OFFERS_LIMIT));
  }, (message) => showAlert(message));







