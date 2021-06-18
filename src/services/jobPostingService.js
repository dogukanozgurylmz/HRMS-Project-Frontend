import axios from 'axios'

export default class JobPostingService{

    getJobPosting(){
        return axios.get("http://localhost:8080/api/jobpostings/getall")
    }

    newJobPosting(jobPosting){
        return axios.post("http://localhost:8080/api/jobpostings/add",jobPosting)
    }

}