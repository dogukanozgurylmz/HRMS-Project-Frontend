//tüm stateleri topladığım yer

import { combineReducers } from "redux";
import favoriteReducer from "./reducers/favoriteReducer";
import filterReducer from "./reducers/filterReducer";
import resumeReducer from "./reducers/resumeReducer";

const rootReducer = combineReducers({
    favorite: favoriteReducer,
    filter: filterReducer,
    resume:resumeReducer
})

export default rootReducer;