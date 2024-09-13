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
//get single product

export const getSingleProductApi = async (_id, reqHeader) => {
    return await commonApi("GET", `${serverUrl}/single-product/${_id}`, "", reqHeader);
  };
  

// add to cart
export const addToCartApi = async (reqBody) => {
    return await commonApi("POST",`${serverUrl}/add-cart`, reqBody);
}


//get cart product

export const getCartProductApi = async (_id, reqHeader) => {
    return await commonApi("GET", `${serverUrl}/getcart/${_id}`, reqHeader);
  };

// remove from cart
export const removeCartApi = async (userId, productId,reqHeader) => {
    return await commonApi("DELETE", `${serverUrl}/remove/${userId}/${productId}`,reqHeader);
  };


//query parameter = baseurl?key=value