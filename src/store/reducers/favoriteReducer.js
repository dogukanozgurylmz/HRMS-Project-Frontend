import { ADD_TO_FAVORITE, REMOVE_TO_FAVORITE } from "../actions/favoriteActions";
import { favoriteItems } from "../initialValues/favoriteItems";

const initialState = {
    favoriteItems: favoriteItems
}

export default function favoriteReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_FAVORITE:
            let jobPosting = state.favoriteItems.find(f => f.jobPosting.id === payload.id)
            if (jobPosting) {
                return {
                    ...state,
                    favoriteItems: state.favoriteItems.filter((c) => c.jobPosting.id !== payload.id)
                }
            } else {
                return {
                    ...state,
                    favoriteItems: [...state.favoriteItems, { quantity: 1, jobPosting: payload }],
                }
            }
        case REMOVE_TO_FAVORITE:
            return {
                ...state,
                favoriteItems: state.favoriteItems.filter(f => f.jobPosting.id !== payload.id)
            }
        default:
            return state;
    }
}