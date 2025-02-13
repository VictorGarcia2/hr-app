import { instance } from "./instance"

export async function postService(body) {
    try {
    const { status, data } = await instance.post('/services', body)
    return { data, status }
    //status code 201
    } catch (error) {
    throw error
    }
    }
    



/* 

export async function postService() {
    try {
        const { status, data } = await instance.get('/services')
        console.log(data);
      
        return { status, data}
    } catch (error) {
        console.error(error)
        return { status: 'error', gata: null }
    }
}


 */