import axios from 'axios'

export default class TechnologyService{

    getTechnology(){
        return axios.get("http://localhost:8080/api/technologies/getall")
    }

    getByResumeById(id){
        return axios.get("http://localhost:8080/api/technologies/findByResumeId?id="+id)
    }

}