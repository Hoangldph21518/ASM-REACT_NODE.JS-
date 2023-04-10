import instance from "./instance";
import { token } from "./instance";
interface IProduct {
        id: number,
        name: string,
        price: number
        des: string
    }

const getAllProduct = () => {
    return instance.get('/products');
}
const getProductByid = (id: number| string) => {
    return instance.get(`/products/${id}`);
}
const addProduct = (product : IProduct) => {
    return instance.post('/products', product,
    {
        headers: {
            Authorization:`Bearer ${token}`
        }
    }
    );
}
const updateProduct = (product : IProduct) => {
    return instance.patch('/products/' + product._id, product ,
    {
        headers: {
            Authorization:`Bearer ${token}`
        }
    });
}
const deleteProduct = (id : number) => {
    return instance.delete('/products/' + id ,  {
        headers: {
            Authorization:`Bearer ${token}`
        }
    });
}

export { getAllProduct, getProductByid, addProduct, updateProduct, deleteProduct  }