import { toast } from "react-toastify"
import ResumeService from "../../services/resumeService"

export const GET_BY_ID_SUCCESS = "GET_BY_ID_SUCCESS"
export const RESUME_UPDATE_SUCCESS = "RESUME_UPDATE_SUCCESS"

let resumeService = new ResumeService()

export const getById = (resumeId) => (dispatch) => {
    resumeService.getById(resumeId).then(result =>
        dispatch({
            type: GET_BY_ID_SUCCESS,
            payload: result.data.data
        })
    )
}
export const resumeUpdate = (resume) => (dispatch) => {
    resumeService.update(resume).then(result => {
        toast.update("Resume head updated.")
        dispatch({
            type: RESUME_UPDATE_SUCCESS,
            payload: resume
        })
    }
    )
}