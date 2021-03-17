import './form.js';
import {renderPins} from './map.js';
import {createAds} from './data.js';
// import {similarListElement, renderCard} from './card.js';


const COUNT = 10;
const dataAds = createAds(COUNT);

renderPins(dataAds);

// similarListElement.appendChild(renderCard(dataAds[0]));


