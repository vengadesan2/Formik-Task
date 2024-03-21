import axios from "axios"
const API_URL = 'https://659e2be747ae28b0bd3547b5.mockapi.io/blog'


const AxiosService = axios.create({
    baseURL: API_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService