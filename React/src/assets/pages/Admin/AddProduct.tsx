import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Checkbox, Form, Input, message, Select } from 'antd';
import { getAllCategory } from "../../../api/category";

interface IProduct {
  id: number;
  name: string;
  price: number;
  des: String;
}
interface ICategory {
  id: number;
  name: string;
}
interface IProps {
  onAdd: (product : IProduct) => void;
}
const AddProduct = (props : IProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    getAllCategory()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  const navigate = useNavigate()
  const { id } = useParams();
  const onFinish = (data) => {
    props.onAdd(data);
    navigate('/admin/products');
    message.success('Thêm sản phẩm thành công!', 2);
}
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>    <h1>Thêm sản phẩm </h1>
<Form 
    name="basic" 
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Tên sản phẩm"
      name="name"
      rules={[{ required: true, message: 'Bạn chưa điền thông tin tên !' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Giá sản phẩm"
      name="price"
      rules={[{ required: true, message: 'Bạn chưa điền thông tin giá !' }]}>
      <Input />
    </Form.Item>
    <Form.Item
      label="Mô tả"
      name="des"
      rules={[{ required: true, message: 'Bạn chưa điền thông tin mô tả !' }]}>
      <Input />
    </Form.Item>

    <Form.Item
      label="Danh mục"
      name="categoryId"
      // rules={[{ required: true, message: 'Bạn chưa điền thông tin mô tả !' }]}
       >
      <Select>
      {categories &&
              categories.map((category) => (
                <Select.Option key={category._id} value={category._id}>
                  {category.name}
                </Select.Option>
              ))}
      </Select>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Thêm sản phẩm
      </Button>
    </Form.Item>
  </Form>

            {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" placeholder='Product Name' {... register('name')} />
                <input type="number"  {... register('price')} />
                <button type="submit">Add New Product</button>
            </form> */}
    </div>
  )
}

export default AddProduct




