import axios from 'axios'

export default class JobPostingService{

    getJobPosting(){
        return axios.get("http://localhost:8080/api/jobpostings/getall")
    }

    newJobPosting(jobPosting){
        return axios.post("http://localhost:8080/api/jobpostings/add",jobPosting)
    }

    getChangeStatus(id){
        return axios.get("http://localhost:8080/api/jobpostings/changeStatus?id="+id)
    }

    getByIsActive(status){
        return axios.get("http://localhost:8080/api/jobpostings/findByIsActive",status)
    }

    deleteJobPosting(id){
        return axios.post("http://localhost:8080/api/jobpostings/delete?id="+id)
    }

}