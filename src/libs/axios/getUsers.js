import { instance } from "./instance"

export async function getUsers() {
    try {
        const { status, data } = await instance.get('/users')
        const estudiante = data.filter(user => user.role.name === 'Student');
        console.log(status, estudiante);
        return { status, data: estudiante}
    } catch (error) {
        console.error(error)
    }
}
