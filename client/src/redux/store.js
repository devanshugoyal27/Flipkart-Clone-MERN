import {createStore,combineReducers,applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';
import getproductReducer from './reducers/productReducer';
import { getProductDetailsReducer } from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';


const reducer = combineReducers({
    getProducts : getproductReducer,
    getProductDetails : getProductDetailsReducer,
    cart:cartReducer
})

const middleware = [thunk];

const store = createStore (
     reducer,composeWithDevTools(applyMiddleware(...middleware))
)

export default store;