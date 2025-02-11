import instance from "./instance";

export async function login(body) {
    try {
        const { status, data } = await instance.post('/auth/login', body)
        return { status, data }
    } catch (error) {
        console.log(error);
    }
}
