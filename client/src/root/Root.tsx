import {
  MenuOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  ContainerOutlined,
  TeamOutlined,
  ExperimentOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AppRoutes from '../App.routes'
import './root.css'

const { Header, Sider, Content } = Layout

interface MenuItemType {
  label: string
  icon: React.ReactNode
  to: string
}

export const routes: MenuItemType[] = [
  {
    label: 'Товары',
    icon: <ShoppingOutlined />,
    to: '/shop'
  },
  {
    label: 'Услуги',
    icon: <ExperimentOutlined />,
    to: '/shop'
  },
  {
    label: 'Корзина',
    icon: <ShoppingCartOutlined />,
    to: '/cart'
  },
  {
    label: 'Договоры',
    icon: <ContainerOutlined />,
    to: '/contracts'
  },
  {
    label: 'О нас',
    icon: <TeamOutlined />,
    to: '/about'
  }
]

const Root = () => {
  const [collapsed, setCollapsed] = useState(false)

  const collapse = () => {
    setCollapsed(!collapsed)
  }

  return (
      <Layout hasSider>
        <Sider trigger={null} collapsible collapsed={collapsed} theme="light" className="menu-sider" width={300}>
          <Menu
            theme="light"
            mode="vertical"
          >
            <li
                className="ant-menu-item"
                onClick={collapse}
                style={{ textAlign: 'center' }}
            >
                <MenuOutlined />
            </li>
            {
              routes.map((route) => (
                <Menu.Item
                  key={route.label}
                  icon={route.icon}
                >
                  <Link to={route.to}>
                    {route.label}
                  </Link>
                </Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 10, fontSize: '20px' }}>
            ПолеФарм
          </Header>
          <Content
            className="site-layout-background"
            style={{
            //   margin: '24px 16px',
              minHeight: '100vh'
            }}
          >
            <AppRoutes />
          </Content>
        </Layout>
      </Layout>
  )
}

export default Root
