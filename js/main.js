/* global _:readonly */
import {renderPins} from './map.js';
import {setFormSubmit} from './form.js';
import {getData} from './fetch.js';
import {showAlert} from './util.js';
import {chooseFilter} from './filter.js';

const OFFERS_LIMIT = 10;
const RERENDER_DELAY = 500;


getData(
  (ads) => {
    renderPins(ads.slice(0, OFFERS_LIMIT));
    chooseFilter(_.debounce(
      () => {
        renderPins(ads.slice(0, OFFERS_LIMIT));
      }, RERENDER_DELAY));

    setFormSubmit(ads.slice(0, OFFERS_LIMIT));

  }, (message) => showAlert(message));
