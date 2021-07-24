import { GET_BY_RESUME_ID_SUCCESS, LANGUAGE_ADD_SUCCESS } from "../actions/languageActions";
import { language, languages } from "../initialValues/languages"

const initialState = {
    language: language,
    languages: languages
}

export default function languageReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_BY_RESUME_ID_SUCCESS:
            return {
                ...state,
                languages: payload
            }
        case LANGUAGE_ADD_SUCCESS:
            return {
                ...state,
                language: { ...state.language, payload }
            }
        default:
            return state
    }
}