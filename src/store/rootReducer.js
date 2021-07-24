//tüm stateleri topladığım yer

import { combineReducers } from "redux";
import favoriteReducer from "./reducers/favoriteReducer";
import filterReducer from "./reducers/filterReducer";
import languageReducer from "./reducers/languageReducer";
import resumeReducer from "./reducers/resumeReducer";
import technologyReducer from "./reducers/technologyReducer";

const rootReducer = combineReducers({
    favorite: favoriteReducer,
    filter: filterReducer,
    resume:resumeReducer,
    technology:technologyReducer,
    language:languageReducer
})

export default rootReducer;