export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE"
export const REMOVE_TO_FAVORITE = "REMOVE_TO_FAVORITE"

export function addToFavorite(jobPosting) {
    return {
        type : ADD_TO_FAVORITE,
        payload : jobPosting
    }
}

export function removeToFavorite(jobPosting) {
    return {
        type : REMOVE_TO_FAVORITE,
        payload : jobPosting
    }
}