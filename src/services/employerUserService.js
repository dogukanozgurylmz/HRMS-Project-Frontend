import axios from 'axios'

export default class EmployerUserService{

    getEmployerUser(){
        return axios.get("http://localhost:8080/api/employerusers/getall")
    }

}