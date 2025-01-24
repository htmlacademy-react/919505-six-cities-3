import {NameSpace} from '../../common/const';
import {State} from '../../types/state';
import {TCityName, TOfferSortType} from '../../types/offers';

export const getCurrentCity = (state: Pick<State, NameSpace.App>): TCityName => state[NameSpace.App].currentCity;
export const getCurrentOffer = (state: Pick<State, NameSpace.App>): string | null => state[NameSpace.App].currentOffer;
export const getCurrentOffersSortType = (state: Pick<State, NameSpace.App>): TOfferSortType => state[NameSpace.App].currentOffersSortType;
export const checkIsOffersSortingPanelOpen = (state: Pick<State, NameSpace.App>): boolean => state[NameSpace.App].isOffersSortingPanelOpen;
