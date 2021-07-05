//tüm stateleri topladığım yer

import { combineReducers } from "redux";
import favoriteReducer from "./reducers/favoriteReducer";
import filterReducer from "./reducers/filterReducer";

const rootReducer = combineReducers({
    favorite: favoriteReducer,
    filter: filterReducer
})

export default rootReducer;