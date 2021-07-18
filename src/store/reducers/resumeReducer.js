import { GET_BY_ID_SUCCESS, RESUME_UPDATE_SUCCESS } from "../actions/resumeActions";
import { resume } from "../initialValues/resumes"

const initialState = {
    resume: resume
}

export default function resumeReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_BY_ID_SUCCESS:
            return {
                ...state,
                resume: payload
            }
        case RESUME_UPDATE_SUCCESS:
            return {
                ...state,
                resume: { ...state.resume, payload }
            }
        default:
            return state;
    }
}