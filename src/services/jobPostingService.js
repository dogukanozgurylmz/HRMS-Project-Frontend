import axios from 'axios'

export default class JobPositngService{

    getJobPosting(){
        return axios.get("http://localhost:8080/api/jobpostings/getall")
    }

}