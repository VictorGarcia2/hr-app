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
export async function getCategories() {
    try {
      const { status, data } = await instance.get('/categories')
      return { data, status }
    } catch (error) {
      throw error
    }
  }