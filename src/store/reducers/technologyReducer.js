import { GET_BY_RESUME_ID_SUCCESS, TECHNOLOGY_UPDATE_SUCCESS } from "../actions/technologyActions";
import { technologies, technology } from "../initialValues/technologies"

const initialState = {
    technologies: technologies,
    technology: technology
}

export default function technologyReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_BY_RESUME_ID_SUCCESS:
            return {
                ...state,
                technologies: payload
            }
        case TECHNOLOGY_UPDATE_SUCCESS:
            return {
                ...state,
                technology: { ...state.technology, payload }
            }
        default:
            return state;
    }
}