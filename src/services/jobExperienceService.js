import axios from 'axios'

export default class JobExperienceService{

    getJobExperience(){
        return axios.get("http://localhost:8080/api/jobexperiences/getallsorted")
    }

    getByResumeById(id){
        return axios.get("http://localhost:8080/api/jobexperiences/findByResumeId?id="+id)
    }

    newJobExperience(jobExperience){
        return axios.post("http://localhost:8080/api/jobexperiences/add",jobExperience)
    }

}