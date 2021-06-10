import axios from 'axios'

export default class JobExperienceService{

    getJobExperience(){
        return axios.get("http://localhost:8080/api/jobexperiences/getallsorted")
    }

}