export async function deleteUser() {
  try {
    const { status, data } = await instance.delete('/users', )
    return{data, status}
    //status code 201
  } catch (error) {
    console.log(error)
  }
    
}