import axios from "axios";
export const token = JSON.parse(localStorage.getItem("token")!);
const instance = axios.create({
    baseURL: 'http://localhost:8080/api'
})

export default instance;