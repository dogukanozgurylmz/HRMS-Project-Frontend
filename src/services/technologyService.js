import axios from 'axios'

export default class TechnologyService{

    getTechnology(){
        return axios.get("http://localhost:8080/api/getall")
    }

}