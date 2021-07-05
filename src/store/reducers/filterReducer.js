import { ADD_NEW_FILTER, CLEAR_FILTER } from "../actions/filterActions"
import { jobPostingFilterValues } from "../initialValues/filters"
const initialState = {
    jobPostingFilterValues: jobPostingFilterValues
}

export default function filterReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_NEW_FILTER:
            return {
                ...state,
                jobPostingFilterValues: payload
            }
        case CLEAR_FILTER:
            return {
                ...state,
                jobPostingFilterValues: payload
            }
        default:
            return state;
    }
}