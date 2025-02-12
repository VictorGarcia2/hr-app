import { instance } from "./instance"

export async function login(body) {
    try {
        const  data  = await instance.post('/auth/login', body)
        return  data 
    } catch (error) {
        console.log(error);
    }
}
