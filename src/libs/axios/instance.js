
import axios from 'axios';

export const instance = axios.create({
        baseURL: 'https://www.hs-service.api.crealape.com/api/v1',
        withCredentials: true
    });
    
    instance.interceptors.response.use((response) => response, (error)=>{
        if(error.status === 401){
            window.location.href = "/login"
        }
        if(error.status === 403){
            windows.location.href = "/"
        }
        return Promise.reject(error);
    })
    
  

