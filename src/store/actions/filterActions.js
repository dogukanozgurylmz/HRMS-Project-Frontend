export const ADD_NEW_FILTER = "ADD_NEW_FILTER"
export const CLEAR_FILTER = "CLEAR_FILTER"

export const addNewFilter = (filter)=>{
    return {
        type:ADD_NEW_FILTER,
        payload:filter
    }
}

export const clearFilter=()=>{
    return {
        type:CLEAR_FILTER,
        payload:{
            cityId:[null],
            jobPositionId:[null],
            workingTimeId:[null],
            workTypeId:[null]
        }
    }
}