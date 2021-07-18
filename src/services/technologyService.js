import axios from 'axios'

export default class TechnologyService{

    getTechnology(){
        return axios.get("http://localhost:8080/api/technologies/getall")
    }

    getByResumeId(id){
        return axios.get("http://localhost:8080/api/technologies/findByResumeId?id="+id)
    }

    newTechnology(technology){
        return axios.post("http://localhost:8080/api/technologies/add",technology)
    }

    update(technology){
        return axios.put("http://localhost:8080/api/technologies/update",technology)
    }

    delete(id){
        return axios.post("http://localhost:8080/api/technologies/delete?id="+id)
    }

}