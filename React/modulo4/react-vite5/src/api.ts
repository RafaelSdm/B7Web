import axios from 'axios'

/*

const BASE = 'https://jsonplaceholder.typicode.com';

export const api = {
    getAllPosts: async () =>{

        let response = await fetch(`${BASE}/posts`)
        let json = await response.json();
        return json;

    },
    addNewPost: async (title:string, body:string, userId:number) =>{

        let response = await fetch(`${BASE}/posts`, 

        {
          method: 'POST',
          body:  JSON.stringify({
            title,
            body,
            userId:1,

          }),

          headers:{
            'Content-Type': 'application/json'
          }
        }
      
      
      )

      let json = await response.json();
      return json

    }
}

*/




//USANDO AXIOS

//const BASE = 'https://jsonplaceholder.typicode.com';


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
    getAllPosts: async () =>{

        let response = await axiosInstance.get(`/posts`)
        return response.data;

        

    },
    addNewPost: async (title:string, body:string, userId:number) =>{

        let response = await axiosInstance.post(`/posts`, {
            title, body, userId
        });


        return response.data;

        

    }
}