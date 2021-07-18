import { toast } from "react-toastify"
import TechnologyService from "../../services/technologyService"

export const GET_BY_RESUME_ID_SUCCESS = "GET_BY_RESUME_ID"
export const TECHNOLOGY_UPDATE_SUCCESS = "TECHNOLOGY_UPDATE_SUCCESS"
export const TECHNOLOGY_ADD_SUCCESS = "TECHNOLOGY_ADD_SUCCESS"
export const TECHNOLOGY_DELETE_SUCCESS = "TECHNOLOGY_DELETE_SUCCESS"

let technologyService = new TechnologyService()

export const getByResumeId = (resumeId) => (dispatch) => {
    technologyService.getByResumeId(resumeId).then(result =>
        dispatch({
            type: GET_BY_RESUME_ID_SUCCESS,
            payload: result.data.data
        })
    )
}
export const technologyUpdate = (technology) => (dispatch) => {
    technologyService.update(technology).then(result => {
        toast.update(`${technology.description} updated`)
        dispatch({
            type: TECHNOLOGY_UPDATE_SUCCESS,
            payload: technology
        })
    })
}
export const technologyAdd = (technology) => (dispatch) => {
    technologyService.newTechnology(technology).then(result => {
        toast.success(`${technology.description} added`)
        dispatch({
            type: TECHNOLOGY_ADD_SUCCESS,
            payload: technology
        })
    })
}
export const technologyDelete = (id) => (dispatch) => {
    technologyService.delete(id).then(result => {
        toast.error(`Technology deleted`)
        dispatch({
            type: TECHNOLOGY_DELETE_SUCCESS,
            payload: id
        })
    })
}