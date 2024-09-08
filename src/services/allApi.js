import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//1.register request
export const registerApi = async (reqBody) => {
 return await commonApi("POST",`${serverUrl}/register`,reqBody,"")
}

//2.login request
export const loginApi = async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/login`,reqBody,"")
}

//all product request
export const allProductApi = async(searchKey)=>{
    return await commonApi("GET",`${serverUrl}/allproducts?search=${searchKey}`,"","")

}

//contact 
export const contactApi = async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/contact`,reqBody,"")
}














//query parameter = baseurl?key=value