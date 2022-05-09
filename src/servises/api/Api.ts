import axios from 'axios';

export const pathname: string = 'https://jsonplaceholder.typicode.com';

const instance = axios.create({
  baseURL: pathname,
  headers: {
    'Content-Type': 'application/json',
  },
})


export const appAPI = {
    getUser(id:number) {
      return instance.get(`${pathname}/users/${id}`)
    },
    getUsers() {
      return instance.get(`${pathname}/users`)
    }
}