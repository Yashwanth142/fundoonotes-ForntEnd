import { createStore } from "redux";
import { combineReducers } from "redux";
import { navReducer } from "./NavReducer";

const reducer = combineReducers({navReducer})
const store = createStore(reducer)

export default store