import { Breadcrumb, Layout, PageHeader } from 'antd';
import React from 'react'
import { useAppSelector } from '../../app/hooks'

const breadcrumbRoutes = [
  {
    path: '/',
    breadcrumbName: 'Главная',
  },
];

const Cart = () => {
  const totalCount = useAppSelector((selector) => selector.cart.totalCount);
  const items = useAppSelector((selector) => selector.cart.items)
  return (
    <Layout style={{ padding: 10 }}>
      <PageHeader
      className="site-page-header"
      title="Корзина"
      breadcrumb={
          <Breadcrumb separator=">">
              {
                  breadcrumbRoutes.map((route) => (
                      <Breadcrumb.Item href={route.path} key={route.path}>{route.breadcrumbName}</Breadcrumb.Item>
                  ))
              }
          </Breadcrumb>
      }
      />
    </Layout>
  )
}

export default Cart