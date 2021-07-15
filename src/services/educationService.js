import axios from 'axios'

export default class EducationService{

    getEducation(){
        return axios.get("http://localhost:8080/api/education/getallsorted")
    }

    getByResumeById(id){
        return axios.get("http://localhost:8080/api/education/findByResumeId?id="+id)
    }

    newEducation(education){
        return axios.post("http://localhost:8080/api/education/add",education)
    }

    update(education){
        return axios.post("http://localhost:8080/api/education/update",education)
    }

    delete(id){
        return axios.post("http://localhost:8080/api/education/delete?id="+id)
    }

}