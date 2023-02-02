import { createSlice } from '@reduxjs/toolkit';
import { PromoCodeState } from '../app/types';

const initialState: PromoCodeState = {
  promoCodes: [
    {
      code: 'RS',
      discount: 2,
    },
    {
      code: 'EMP',
      discount: 5,
    },
    {
      code: 'EPM',
      discount: 10,
    },
    {
      code: 'TEST',
      discount: 25,
    },
  ],
  promoCodeUse: [
  ],
};

const promoCodeSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPromoCode(state, action: {
      payload: string; type: string;
    }): PromoCodeState {
      const codeWrite = action.payload;
      const isValid = state.promoCodes.find((code) => code.code === codeWrite);
      const isUse = state.promoCodeUse.find((code) => code.code === codeWrite);

      if (isValid && !isUse) {
        return { ...state, promoCodeUse: state.promoCodeUse.concat(isValid) };
      }
      return state;
    },

    removePromoCode(state, action: {
      payload: string; type: string;
    }): PromoCodeState {
      const codeDelete = action.payload;

      return {
        ...state,
        promoCodeUse: state.promoCodeUse
          .filter((code) => code.code !== codeDelete),
      };
    },

    clearPromoCode(state): PromoCodeState {
      return { ...state, promoCodeUse: [] };
    },
  },
});

export const { addPromoCode, clearPromoCode, removePromoCode } = promoCodeSlice.actions;
export default promoCodeSlice.reducer;
