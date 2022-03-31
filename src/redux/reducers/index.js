import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { createProduct } from "./productReducer";
import { deleteIt } from "./productReducer";
import { selectedProductReducer } from "./productReducer";
const allReducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  createIT: createProduct,
  deleteProduct: deleteIt,
});
export default allReducer;
