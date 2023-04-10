import React from 'react'
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom'
import {IProduct } from '../../../api/product'
type Props = {
    products: IProduct,
    onRemove: () => void
}
const ProductMangementPage = ({products, onRemove} : Props) => {
  const data = products.map(item => {
    return {
        key: item._id,
        name: item.name,
        price: item.price,
        des: item.des,
        categoryId: item.categoryId
    }
})
interface DataType {
    key: string;
    name: string;
    price: number;
    des: string;
    categoryId: string;
}
const onHandleRemove = (id: number | string)=>{    
    onRemove(id);
}
const columns: ColumnsType<DataType> = [
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Giá',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Mô tả',
        dataIndex: 'des',
        key: 'des',
    },
    {
        title: 'Danh mục',
        dataIndex: 'categoryId',
        key: 'categoryId',
        
    },
    {
        title: 'Action',
        key: 'action',
        render: (record) => ( 
            <Space size="middle">
                <Button type="primary" onClick={() => onHandleRemove(record.key)} >Xóa</Button>
                <Button type="primary"><Link to={`/admin/products/${record.key}/update`}>Update</Link></Button>
            </Space>
        ),
    },
];
  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
}

export default ProductMangementPage