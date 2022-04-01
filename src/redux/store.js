import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const reducer = combineReducers({
  rootReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));

export default store;
