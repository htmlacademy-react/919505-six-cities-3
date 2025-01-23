import {NameSpace} from '../../common/const';
import {State} from '../../types/state';
import {TOfferPreview} from '../../types/offers';

export const getOffers = (state: State): TOfferPreview[] => state[NameSpace.Data].offers;
