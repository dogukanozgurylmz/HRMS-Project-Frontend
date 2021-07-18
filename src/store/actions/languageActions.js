import { toast } from "react-toastify"
import LanguageService from "../../services/languageService"

export const GET_BY_RESUME_ID_SUCCESS = "GET_BY_RESUME_ID"
export const LANGUAGE_UPDATE_SUCCESS = "LANGUAGE_UPDATE_SUCCESS"
export const LANGUAGE_ADD_SUCCESS = "LANGUAGE_ADD_SUCCESS"
export const LANGUAGE_DELETE_SUCCESS = "LANGUAGE_DELETE_SUCCESS"

let languageService = new LanguageService()

export const getByResumeId = (resumeId) => (dispatch) => {
    languageService.getByResumeId(resumeId).then(result =>
        dispatch({
            type: GET_BY_RESUME_ID_SUCCESS,
            payload: result.data.data
        })
    )
}
export const languageUpdate = (language) => (dispatch) => {
    languageService.update(language).then(result => {
        toast.update(`${language.language} updated`)
        dispatch({
            type:LANGUAGE_UPDATE_SUCCESS,
            payload:language
        })
    })
}
export const languageAdd =(language)=>(dispatch)=>{
    languageService.newLanguage(language).then(result=>{
        toast.success(`${language.language} added`)
    })
}