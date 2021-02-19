import {SIMILAR_AD_AMOUNT} from './base.js';
import {createAd} from './util.js';

const similarAds = new Array(SIMILAR_AD_AMOUNT).fill(1).map(() => createAd());

export {similarAds}
