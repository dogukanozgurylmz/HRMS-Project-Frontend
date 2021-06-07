import axios from 'axios'

export default class CandidateUserService{

    getCandidateUsers(){
        return axios.get("http://localhost:8080/api/candidates/getall")
    }

}