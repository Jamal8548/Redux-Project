import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectedProductReducer } from "./productReducer";
const allReducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});
export default allReducer;
