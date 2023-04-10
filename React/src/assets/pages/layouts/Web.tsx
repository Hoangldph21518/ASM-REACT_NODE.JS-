import { Outlet , Link} from "react-router-dom"

import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const Web = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
  
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link style={{ textDecorationLine: 'none' }} to={`/admin`}>Home Admin</Link></Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
        <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
    // <div>
    //     <header>
    //       hedea
    //     </header>
    //       <Outlet />
    //     <footer>
    //       Footer
    //     </footer>
    // </div>
  )
}

export default Web




