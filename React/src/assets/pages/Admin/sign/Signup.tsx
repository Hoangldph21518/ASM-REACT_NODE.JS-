import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from 'antd';

interface ISign{
  name: string;
  email: string;
  password : number;
  confirmPassword : number
}
interface IProps {
  onAdd: (Sign : ISign) => void;
}
const Signup = (props : IProps) => {
  const navigate = useNavigate()
  const onFinish = (data) => {
    props.onAdd(data);
    navigate('/login');
    message.success('Đăng ký thành công!', 2);
}
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="signin">     <h1 className="h1">Đăng ký </h1>
<Form 
    name="basic" 
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 1100 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
<Form.Item
      label="Tên"
      name="name"
      rules={[{ required: true, message: 'Bạn chưa điền thông tin tên !' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Bạn chưa điền thông tin email !' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="password"
      name="password"
      rules={[{ required: true, message: 'Bạn chưa điền thông mật khẩu !' }]}>
      <Input.Password />
    </Form.Item>

    <Form.Item
      label="confirmPassword"
      name="confirmPassword"
      rules={[{ required: true, message: 'Bạn chưa điền thông tin confirm mật khẩu !' }]}>
      <Input.Password />
    </Form.Item>
 
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Đăng ký
      </Button>
    </Form.Item>
  </Form>

    </div>
  )
}

export default Signup




