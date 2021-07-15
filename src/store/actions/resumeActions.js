import ResumeService from "../../services/resumeService"

export const GET_RESUME_BY_ID = "GET_RESUME_BY_ID"
export const ADD_RESUME = "ADD_RESUME"
export const UPDATE_RESUME = "UPDATE_RESUME"

let resumeService = new ResumeService()

export const getResumeById=(resumeId)=>(dispatch)=> {
        return resumeService.getById(resumeId).then(result => 
            dispatch({
                type: GET_RESUME_BY_ID,
                payload: result.data.data
        })
    )
}

export const addResume = (resume) => async (dispatch) => {
    await resumeService.newResume(resume).then(result => {
        dispatch({
            type: ADD_RESUME,
            payload: result.data.data
        })
    })
}
export const updateResume = (resume) => async (dispatch) => {
    await resumeService.update(resume).then(result => {
        dispatch({
            type: UPDATE_RESUME,
            payload: result.data.data
        })
    })
}