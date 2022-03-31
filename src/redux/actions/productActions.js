import { ActionTypes } from "../contants/action-types";
import fakeStoreApi from "../../apis/fakeStoreApi";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};
export const deleteProduct = (id) => async (dispatch) => {
  const del = fakeStoreApi
    .delete(`/products/${id}`)
    .then(function (response) {
      dispatch({ type: ActionTypes.DELETE_PRODUCT, payload: response });
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const create_product = (inputField) => async (dispatch) => {
  const posti = await fakeStoreApi
    .post("/products", {
      title: inputField.title,
      price: inputField.price,
      Id: inputField.Id,
      image: inputField.image,
      category: inputField.category,
    })
    .then(function (response) {
      dispatch({ type: ActionTypes.CREATE_PRODUCT, payload: response.data });
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeselectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
