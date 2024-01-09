import {productReducer, ProductDetailReducer} from '../Reducers/productReducer'

import { combineReducers } from 'redux';

const RootReducer = combineReducers({
   allproducts:  productReducer,
   product: ProductDetailReducer
})

export default RootReducer;