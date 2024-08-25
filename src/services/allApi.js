import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//1.register request
export const registerApi = async (reqBody) => {
 return await commonApi("POST",`${serverUrl}/register`,reqBody,"")
}
