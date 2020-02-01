import {ADD_COUNT, ADD_CART } from "./stateType"


export const mutations = {
    [ADD_COUNT](state, payload) {
    payload.count++;
  },
  [ADD_CART](state, payload) {
    state.cartlist.push(payload);
  }
};
