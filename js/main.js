import './form.js';
import {
  renderPins
} from './map.js';
import {
  getData
} from './fetch.js';
//import {createAds} from './data.js';
// const COUNT = 10;
// const dataAds = createAds(COUNT);



getData(
  (ads) => {
    renderPins(ads)

  }, (err) => console.log(err));
