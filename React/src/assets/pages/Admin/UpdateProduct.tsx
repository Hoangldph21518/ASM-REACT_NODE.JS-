import { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, message, Select } from 'antd';
import { getAllCategory } from "../../../api/category";


interface IProduct{
  id: number;
  name: string;
  price: number;
  description: string;
  categoryId: string;
}

interface IProps {
  products: IProduct[],
  onUpdate: () => void,
  category: string;
}
interface ICategory {
  id: number;
  name: string;
}
const UpdateProduct = ( {onUpdate ,props, products } : IProps) => {  
  // const [categories, setCategories] = useState<ICategory[]>([]);
  // useEffect(() => {
  //   getAllCategory()
  //     .then((response) => {
  //       setCategories(response.data);
  //       console.log(response.data);
        
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

    const navigate = useNavigate()
    const { id : _id } = useParams();
    const [product, setProduct] = useState<IProduct>()
    useEffect(() => {
          const currentProduct = products.find((product: IProduct) => product._id == _id)
          setProduct(currentProduct)
        
        }, [products])
              
   useEffect(() =>{
        setFields()
      }, [product])

   const [form] = Form.useForm();
   const setFields = () => {
    form.setFieldsValue({
        id: product?._id,
        name: product?.name,
        des: product?.des,
        price: product?.price,
        categoryId: product?.categoryId
    })
}

    const onFinish = (values: any) => {
      // console.log({_id, ...values});
      
       onUpdate({_id, ...values});
          navigate('/admin/products');
        message.success('Cập nhật sản phẩm thành công!', 2);
    }
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

   

  return (
    <div> <h1 style={{ marginTop: 40, marginBottom: 40, marginLeft: 330 }}>Update Sản Phẩm</h1>
           <Form 
                name="basic" 
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
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
      label="Mô tả sản phẩm"
      name="des"
      rules={[{ required: true, message: 'Bạn chưa điền thông tin mô tả !' }]}>
      <Input />
    </Form.Item>
    <Form.Item
      label="Danh mục"
      name="categoryId"
      rules={[{ required: true, message: 'Bạn chưa điền thông tin !' }]}
      >   

        {/* <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Chọn danh mục"
          optionFilterProp="children"
          filterOption={(input, option) =>
            props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {categories.map((category) => (
            <Select.Option key={category.id} value={category._id}>
              {category.name}
            </Select.Option>
          ))}
        </Select> */}
        <Input/>
  
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Sửa sản phẩm
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}
export default UpdateProduct