
import { createStore,combineReducers } from "redux";
import ItemReducer from '../Redux/Reducer/ItemReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootStore= combineReducers({
    ItemReducer
})
export const store =createStore(rootStore,composeWithDevTools())