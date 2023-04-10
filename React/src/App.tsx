import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import React, {useState, useEffect} from 'react'
import HomePages from './assets/pages/HomePages'
import Product from './assets/pages/Product'
import ProductDetail from './assets/pages/productDetail'
import { addProduct, deleteProduct, getAllProduct, updateProduct  } from './api/product'
import AddProduct from './assets/pages/Admin/AddProduct'
import Dashboard from './assets/pages/Admin/Dashboard'
import ProductMangementPage from './assets/pages/Admin/ProductMangementPage'
import Web from './assets/pages/layouts/Web'
import Admin from './assets/pages/layouts/Admin'
import UpdateProduct from './assets/pages/Admin/UpdateProduct'
import AddCategory from './assets/pages/Admin/AddCategory'
import ListCategory from './assets/pages/Admin/ListCategory'
import { addCategory, deleteCategory, getAllCategory, updateCategory } from './api/category'
import {IProduct} from './api/product'
import {ICategory} from './api/category'

import Signinn from './assets/pages/Admin/sign/Signinn'
import { addSigup } from './api/signupp'
import { addSigin } from './api/signinn'
import Signup from './assets/pages/Admin/sign/Signup'
import UpdateCategory from './assets/pages/Admin/UpdateCategory'




function App(){
  const [products, setProduct] = useState([])
  const [category, setCategory] = useState([])
  useEffect(() => {
   (async()=>{
    await getAllProduct().then(({data})=> setProduct(data))
      })()
        },[])

  useEffect(() => {
      (async()=>{
      await getAllCategory().then(({data})=> setCategory(data))
          })()
          },[])
          
  const onHandleRemove = async (id : number | string) => {
    try {
      await deleteProduct(id)
     .then(() =>  setProduct(products.filter(product => product._id!== id)))
    } catch (error) {
      console.log("Lỗi xóa")
    }
  }
  
  const removeCategory = async (id : number | string) => {
    try {
      await deleteCategory(id)
      .then(() => setCategory(category.filter(category => category._id!== id)))
    } catch (error) {
      console.log("Lỗi xx")
    }
  }

  const onHandleAdd = async (product : any) => {
   try {
    const {data} = await addProduct(product)
   } catch (error) {
    console.log("Loi")
   }
  }

  const onHandleAddcategory = async (category : any) => {
    try {
     await addCategory(category)
    .then(() => getAllCategory().then(({data}) => setCategory(data) ))
    } catch (error) {
     console.log("Loi")
    }
   }

   const onHandleAddsigup = async (Sigup : any) => {
    try {
     const {data} = await addSigup(Sigup)
   console.log(data)
    } catch (error) {
     console.log("Loi đky")
    }
   }

   const onHandleAddsigin = async (Sigin : any) => {
    try {
     const {data} = await addSigin(Sigin)
     localStorage.setItem("user", JSON.stringify(data.user))
     localStorage.setItem("token", JSON.stringify(data.accessToken))
   console.log(data)
    } catch (error) {
     console.log("Loi đnhap")
    }
   }

   const onHandleUpdate =async (product: IProduct) => {
    try {
    await updateProduct(product).then(() => getAllProduct().then(({ data }) => setProduct(data)))
    } catch (error) {
      console.log(error.message);
    }
  }

  const onHandleUpdateCategory =async (category: ICategory) => {
    try {
    await updateCategory(category).then(() => getAllCategory().then(({ data }) => setCategory(data)))
    } catch (error) {
      console.log(error.message);
    }
  }
   return (
    <div className="App">

<BrowserRouter>
        <Routes>
          <Route path='/' element={<Web />}>
            <Route index element={<HomePages products={products} />} />
            <Route path='products' element={<Product products={products} onRemove={onHandleRemove} />} />
            <Route path='products/:id' element={<ProductDetail products = {products} />} />
          </Route>
              <Route path='login' element={<Signinn onAdd={onHandleAddsigin}  />} />
              <Route path='signup' element={< Signup onAdd={onHandleAddsigup} />} />
          <Route path='/admin' element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path='categorys'>
              <Route index element={<ListCategory category={category}  onRemove = {removeCategory}/>} />
              <Route path='add' element={<AddCategory onAdd={onHandleAddcategory} />} />
              <Route path=':id/update' element={<UpdateCategory category={category} onUpdate={onHandleUpdateCategory} />} />
            </Route>
            <Route path='products'>
              <Route index element={<ProductMangementPage products={products} onRemove = {onHandleRemove} />} />
              <Route path='add' element={<AddProduct onAdd={onHandleAdd} />} />
              <Route path=':id/update' element={<UpdateProduct onUpdate={onHandleUpdate} products={products} />} />
            </Route>
          </Route>
        </Routes>
</BrowserRouter>
     
    </div>
  )
}
export default App
