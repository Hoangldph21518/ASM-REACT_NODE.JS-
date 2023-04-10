import { useNavigate, useParams } from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from 'antd';

interface ICategory {
  id: number,
  name: string,
}
interface IProps{
  onAdd : (category : ICategory) => void
}
const AddCategory = (props : IProps) => {
  const navigate = useNavigate()
  const { id } = useParams();

  const onFinish = (data) => {
  props.onAdd(data);
  navigate('/admin/categorys');
  message.success('Thêm danh mục thành công!');
}
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

  return (
    <div>    <h1>Thêm danh mục </h1>
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
          label="Tên danh mục"
          name="name"
          rules={[{ required: true, message: 'Bạn chưa điền thông tin tên !' }]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Thêm sản phẩm
          </Button>
        </Form.Item>
      </Form>
      </div>
  )
}

export default AddCategory