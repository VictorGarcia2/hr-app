import instance from "./instance"

export async function getProfile() {
    try{
        const { status, data} = await instance.get('/auth/profile')
        return { status, data}    
    } catch (error){
        console.error(error)
    }
}