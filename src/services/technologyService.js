import axios from 'axios'

export default class TechnologyService{

    getTechnology(){
        return axios.get("http://localhost:8080/api/technologies/getall")
    }

    getByResumeById(id){
        return axios.get("http://localhost:8080/api/technologies/findByResumeId?id="+id)
    }

    newTechnology(technology){
        return axios.post("http://localhost:8080/api/technologies/add",technology)
    }

    update(technology){
        return axios.post("http://localhost:8080/api/technologies/update",technology)
    }

}