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

    getByIsActiveTrue(){
        return axios.get("http://localhost:8080/api/jobpostings/findByIsActive?status=true")
    }

    getByIsActiveFalse(){
        return axios.get("http://localhost:8080/api/jobpostings/findByIsActive?status=false")
    }

    deleteJobPosting(id){
        return axios.post("http://localhost:8080/api/jobpostings/delete?id="+id)
    }
    
    getJobPostingPage(pageNo, pageSize){
        return axios.get(`http://localhost:8080/api/jobpostings/getallByPage?pageNo=${pageNo}&pageSize=${pageSize}`)
    }

}