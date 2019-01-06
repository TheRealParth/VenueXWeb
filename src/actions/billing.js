import * as types from '../types';

export function incrementMonth() {
  return {
    type: types.billingTypes.INCREMENT_MONTH
  };
}
export function decrementMonth() {
  return {
    type: types.billingTypes.DECREMENT_MONTH
  };
}
