import { combineReducers, createStore } from "redux";
import { expensReducer } from "../reducers/expenses";

const reducer = combineReducers({
  expenses: expensReducer,
});
const initialState = {};
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
