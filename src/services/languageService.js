import axios from 'axios'

export default class LanguageService{

    getLanguage(){
        return axios.get("http://localhost:8080/api/languages/getall")
    }

    getByResumeId(id){
        return axios.get("http://localhost:8080/api/languages/findByResumeId?id="+id)
    }

    newLanguage(language){
        return axios.post("http://localhost:8080/api/languages/add",language)
    }

    update(language){
        return axios.post("http://localhost:8080/api/languages/update",language)
    }

    delete(id){
        return axios.post("http://localhost:8080/api/languages/delete?id="+id)
    }

}