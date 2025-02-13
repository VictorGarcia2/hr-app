import { instance } from "./instance"

export async function getEvidence(id) {
    try {
        const { status, data } = await instance.get(`/evidence/${id}`,
            {responseType: 'blob'}
        )
       
        return { status, data}
    } catch (error) {
        console.error(error)
    }
}
