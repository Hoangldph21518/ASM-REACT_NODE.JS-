import instance from "./instance";
import { token } from "./instance";
interface ICategory {
        id: number,
        name: string,
    }

const getAllCategory = () => {
    return instance.get('/categorys');
}
const getOneCategory = (id: number | string) => {
    return instance.get('/categorys/' + id);
}
const addCategory = (category : ICategory) => {
    return instance.post('/categorys', category ,
    {
        headers: {
            Authorization:`Bearer ${token}`
        }
    });
}
const updateCategory = (category : ICategory) => {
    return instance.patch('/categorys/' + category._id, category, {
        headers: {
            Authorization:`Bearer ${token}`
        }
    });
}
const deleteCategory = (id : number) => {
    return instance.delete('/categorys/' + id,  {
        headers: {
            Authorization:`Bearer ${token}`
        }
    });
}

export { getAllCategory, getOneCategory, addCategory, updateCategory, deleteCategory  }