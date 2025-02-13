import { instance } from "./instance"

export async function getUsers() {
    try {
        const { status, data } = await instance.get('/users')
        const estudiante = data.filter(user => user.role.name === 'Student');
        return { status, data: estudiante}
    } catch (error) {
        console.log(error)
    }
}

export async function createUser(newUser) {
  try {
    const { status, data } = await instance.post('/users', newUser)
    return{data, status}
    //status code 201
  } catch (error) {
    console.log(error)
  }
    
}


