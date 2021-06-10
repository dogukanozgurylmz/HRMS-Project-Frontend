import axios from 'axios'

export default class GraduateService{

    getGraduate(){
        return axios.get("http://localhost:8080/api/graduate/getall")
    }

}