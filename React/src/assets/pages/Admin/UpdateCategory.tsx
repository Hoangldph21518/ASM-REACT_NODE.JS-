import { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, message, Select } from 'antd';


interface ICategory{
  id: number;
  name: string;
}
interface IProps {
  category: ICategory[];
  onUpdate: () => void,
}
const UpdateCategory = (  {onUpdate , category} : IProps) => {
    const navigate = useNavigate()
    const { id : _id } = useParams();
    const [categorys, setCategory] = useState<ICategory>()
    useEffect(() => {
          const currentProduct = category.find((categorys: ICategory) => categorys._id == _id)
          setCategory(currentProduct)
        }, [category])       
        
   useEffect(() =>{
        setFields()
      }, [categorys])
      console.log(categorys);
      

   const [form] = Form.useForm();
   const setFields = () => {
    form.setFieldsValue({
        id: categorys?._id,
        name: categorys?.name,
    })
}
    const onFinish = (values: any) => {
    //   console.log({_id, ...values});
       onUpdate({_id, ...values});
          navigate('/admin/categorys');
        message.success('Cập nhật danh mục thành công!', 2);
    }
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

  return (
    <div> <h1 style={{ marginTop: 40, marginBottom: 40, marginLeft: 330 }}>Update Danh Mục</h1>
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

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Sửa sản phẩm
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}
export default UpdateCategory