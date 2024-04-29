import axios from "axios";
import { base_url } from "./data";

const API = axios.create({baseURL:base_url})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('token')){
        req.headers.Authorization = localStorage.getItem('token')
    }
    return req
})

export default API;