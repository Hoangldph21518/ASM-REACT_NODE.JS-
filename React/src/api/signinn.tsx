import instance from "./instance";
interface ISign {
        id: number
        password: number
        email: string
    }
export const addSigin = (user : ISign) => {
    return instance.post("/signin", user);
}