import {instance} from "./instance";

export async function login(body) {
    try {
        const data = await instance.post('/auth/login', body)
        return data
    } catch (error) {
        console.log(error);
    }
}
export async function getProfile() {
    try {
        const {status, data} = await instance.get('/auth/profile')
        return {data, status}
    } catch (error) {
      throw error
    }
    
}