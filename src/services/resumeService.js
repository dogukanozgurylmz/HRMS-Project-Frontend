import axios from 'axios'

export default class ResumeService{

    getResume(){
        return axios.get("http://localhost:8080/api/resumes/getall")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/resumes/getById?id="+id)
    }

    newResume(resume){
        return axios.post("http://localhost:8080/api/resumes/add",resume)
    }

    saveImage(file,resumeId){
        return axios.put("http://localhost:8080/api/resumes/uploadImage?resumeId="+resumeId,file)
    }

}