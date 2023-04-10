import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from 'antd';
import { addSigin } from "../../../../api/signinn";
import { useForm } from "react-hook-form";
import "./login.css"
// interface ISign{
//   email: string;
//   password : number;
// }
// interface IProps {
//   onAdd: (Sign : ISign) => void;
// }
type Props = {};
const Signinn = (props: Props) => {
  const {
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    const { data: user } = await addSigin(values);
    console.log(user);
    localStorage.setItem("token", JSON.stringify(user.accessToken));
    message.success("Đăng nhập thành công!", 2);
    if (user.role === "member") {
      navigate("/");
      message.success('Email hoặc mật khẩu không đúng')
    } else {
      navigate("/admin");
    }
  };

//   const navigate = useNavigate()
//   const onFinish = async (data) => {
//     props.onAdd(data);
//   navigate("/")
//   message.success('Đăng nhap thành công!', 2);
// }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="signin"><h1 className="h1">ĐĂNG NHẬP </h1>
<Form 
className="form"
    name="basic" 
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 900 }}
    onFinish={onFinish}
    initialValues={{ remember: true }}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
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
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Đăng nhập
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default Signinn




