import React from 'react'
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom'
import {ICategory} from '../../../api/category'

type Props = {
    category: ICategory,
    onRemove: () => void
}

const ListCategory = ({category, onRemove} : Props) => {
  const data = category.map(item => {
    return {
        key: item._id,
        name: item.name,
    }
})
interface DataType {
    key: string;
    name: string;
}
const removeCategory = (id: number | string)=>{
    onRemove(id);
}
const columns: ColumnsType<DataType> = [
    {
        title: 'Tên danh mục',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Action',
        key: 'action',
        render: (record) => ( 
            <Space size="middle">
                 <Button type="primary"><Link to={`/admin/categorys/${record.key}/update`}>Update</Link></Button>
                <Button type="primary" onClick={() => removeCategory(record.key)} >Xóa</Button>
            </Space>
        ),
    },
];
  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
}

export default ListCategory