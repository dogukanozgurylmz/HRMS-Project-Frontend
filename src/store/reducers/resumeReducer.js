import { ADD_RESUME, GET_RESUME_BY_ID, UPDATE_RESUME } from "../actions/resumeActions";
import { resume } from "../initialValues/resumes"

const initialState = {
    resume: resume
}

export default function resumeReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_RESUME_BY_ID:
            return {
                ...state,
                resume: payload
            }
        case ADD_RESUME:
            return {
                ...state,
                resume: payload
            }
        case UPDATE_RESUME:
            return {
                ...state,
                resume: payload
            }
        default:
            return state;
    }
}