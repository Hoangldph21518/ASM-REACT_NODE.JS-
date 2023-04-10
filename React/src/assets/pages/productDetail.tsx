import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styleHome.css"

const ProductDetail = (props) => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const data = props.products.find(product => product._id == id)
        setProduct(data)
    })
    
    return (
        <div className='sanpham'>
            <h1 className='chu1'>Chi tiết sản phẩm</h1>
            <h3> Tên sản phẩm: {product?.name}</h3>
            <h3>Giá : {product?.price}</h3>
            <h3> Mô tả : {product?.des}</h3>
            <h3> Danh mục : {product?.categoryId}</h3>
        </div>
    )
}

export default ProductDetail