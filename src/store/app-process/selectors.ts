import {NameSpace} from '../../common/const';
import {State} from '../../types/state';
import {TCityName} from '../../types/offers';

export const getCurrentCity = (state: Pick<State, NameSpace.App>): TCityName => state[NameSpace.App].currentCity;
export const getCurrentOffer = (state: Pick<State, NameSpace.App>): string | null => state[NameSpace.App].currentOffer;
