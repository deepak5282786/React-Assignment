import { combineReducers } from "redux";
import reducerNew from "./reducerNew";
/**
 * @param {reducer} reducerNew
 * @desc Combine Reducer is a function which is used to Combine multiple reducers and it is taking reducerNew As an argument
 */
const rootReducer = combineReducers({ reducerNew });
export default rootReducer;
