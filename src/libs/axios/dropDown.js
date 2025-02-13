import { instance } from "./instance";
export async function getRole() {
    try {
      const { status, data } = await instance.get('/roles')
    
      return{data, status}
      //status code 201
    } catch (error) {
      console.error(error)
    }
      
  }

  export async function getController() {
    try {
      const { status, data } = await instance.get('/users?r=2')
    
      return{data, status}
      //status code 201
    } catch (error) {
      console.error(error)
    }
      
  }
  export async function getCountry() {
    try {
      const { status, data } = await instance.get('/countries')
    
      return{data, status}
      //status code 201
    } catch (error) {
      console.error(error)
    }
      
  }

  export async function getRecrutier() {
    try {
      const { status, data } = await instance.get('/users?r=3')
    
      return{data, status}
      //status code 201
    } catch (error) {
      console.error(error)
    }
      
  }

  export async function getSchools() {
    try {
      const { status, data } = await instance.get('/schools')
    
      return{data, status}
      //status code 201
    } catch (error) {
      console.error(error)
    }
      
  }