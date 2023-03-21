import { combineReducers } from "redux";
import {
  addUserReducer,
  productsReducer,
  selectedProductsReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  user: addUserReducer,
});
export default reducers;
