import instance from "./instance";
interface ISign {
        id: number,
        name: string,
        password: number
        email: string
        confirmPassword: number
    }

export const addSigup = (user : ISign) => {
    return instance.post('/signup', user);
}
