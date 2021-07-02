import axios from 'axios'

export default class LanguageService{

    getLanguage(){
        return axios.get("http://localhost:8080/api/languages/getall")
    }

    getByResumeById(id){
        return axios.get("http://localhost:8080/api/languages/findByResumeId?id="+id)
    }

}