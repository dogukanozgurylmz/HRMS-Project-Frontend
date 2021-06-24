import axios from "axios";

export default class AuthService{
    
    registerCandidate(candidateUser){
        return axios.post("http://localhost:8080/api/auth/registerCandidate",candidateUser)
    }

    registerEmployer(employerUser){
        return axios.post("http://localhost:8080/api/auth/registerEmployer",employerUser)
    }

}