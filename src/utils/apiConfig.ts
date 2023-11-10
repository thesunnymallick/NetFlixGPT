
import axios from 'axios'
import { BASE_URL, API_OPTIONS } from './config'
export const fetchApi=async(url:string)=>{
    try {
        const {data}=await axios.get(BASE_URL+url, API_OPTIONS)
        return data;
    } catch (error) {
        return error
    }
}