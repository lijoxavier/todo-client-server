import axios from "axios";
import { API_TODO, BASE_URL } from "./Utils";

const API_URL=BASE_URL+API_TODO

export const fetchApi=async()=>{
    const response=await axios(API_URL)
    return response
}
export const postApi=async(method,data)=>{
    try{
        const response=await axios(API_URL,{
            method,
            data
        })
        return response

    }
    catch(error){
        console.log(error.message);
    }

}