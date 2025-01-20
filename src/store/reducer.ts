import {createReducer} from '@reduxjs/toolkit';
import {Cities} from '../utils/const';
import {offerPreviews} from '../mocks/offer-previews';
import {changeCity} from './actions';


const initialState = {
  currentCity: Cities[0],
  offers: offerPreviews
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.currentCity = city;
    });
});
export {reducer};
