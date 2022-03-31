import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const createProduct = (state = [{}], { type, payload }) => {
  switch (type) {
    case ActionTypes.CREATE_PRODUCT: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};
export const deleteIt = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.DELETE_PRODUCT: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
