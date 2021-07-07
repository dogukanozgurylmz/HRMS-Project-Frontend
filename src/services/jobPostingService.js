import axios from 'axios'

export default class JobPostingService{

    getJobPosting(){
        return axios.get("http://localhost:8080/api/jobpostings/getall")
    }

    newJobPosting(jobPosting){
        return axios.post("http://localhost:8080/api/jobpostings/add",jobPosting)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobpostings/findbyid?id="+id)
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

    getByJobPostingFilter(pageNo, pageSize, filter){
        return axios.post(`http://localhost:8080/api/jobpostings/getByJobPostingFilter?pageNo=${pageNo}&pageSize=${pageSize}`,filter)
    }

}