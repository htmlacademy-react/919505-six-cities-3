import {NameSpace} from '../../utils/const';
import {State} from '../../utils/state';
import {TCityName} from '../../utils/types';

export const getCurrentCity = (state: Pick<State, NameSpace.App>): TCityName => state[NameSpace.App].currentCity;
export const getCurrentOffer = (state: Pick<State, NameSpace.App>): string | null => state[NameSpace.App].currentOffer;
