import { applyMiddleware, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

export function configureStore() {
    return createStore(rootReducer,devToolsEnhancer())
}
//applyMiddleware(thunk)