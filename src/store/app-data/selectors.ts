import {NameSpace} from '../../utils/const';
import {State} from '../../utils/state';
import {TOfferPreview} from '../../utils/types';

export const getOffers = (state: State): TOfferPreview[] => state[NameSpace.Data].offers;
