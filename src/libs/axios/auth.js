import {instance} from "./instance";

export async function login(body) {
    try {
        const data = await instance.post('/auth/login', body)
        return data
    } catch (error) {
        console.log(error);
    }
}
export async function logOut() {
    try {
        const data = await instance.post('/auth/logout')
        return data
    } catch (error) {
        console.log(error);
    }
}

