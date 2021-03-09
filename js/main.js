import './data.js';
import './card.js';
import './util.js';

import {createAds} from './data.js';
import {similarListElement, renderCard} from './card.js';

const COUNT = 10;
const dataAds = createAds(COUNT);

console.log(similarListElement.appendChild(renderCard(dataAds[0])));
