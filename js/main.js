import './data.js';
import './util.js';
import './card.js';

import {createAds} from './data.js';
import {similarListElement, renderCard} from './card.js';

const COUNT = 10;
const dataAds = createAds(COUNT);

similarListElement.appendChild(renderCard(dataAds[0]));
