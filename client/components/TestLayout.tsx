import React from 'react';
import { Layout, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

interface TestLayoutProps {
  children: React.ReactNode;
}

const TestLayout: React.FC<TestLayoutProps> = ({ children }) => {
  return (
    <>
      {/* Simple Navbar */}
      <Header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'white',
        borderBottom: '1px solid #f0f0f0',
        padding: '0 16px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3edd7caac97715f7acba6475663e5e545775d1b8?width=400"
            alt="Vyalux Logo"
            style={{ height: '40px', width: 'auto' }}
          />
        </div>
        <Button 
          type="text" 
          icon={<MenuOutlined />}
          style={{ fontSize: '20px' }}
        />
      </Header>

      {/* Content */}
      <Layout style={{ marginTop: '80px' }}>
        <Content style={{ minHeight: 'calc(100vh - 80px)', backgroundColor: '#040404' }}>
          {children}
        </Content>
      </Layout>
    </>
  );
};

export default TestLayout;
