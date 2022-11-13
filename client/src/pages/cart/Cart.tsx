import { Avatar, Breadcrumb, Layout, List, PageHeader } from 'antd';
import {
  MinusOutlined,
  PlusOutlined
} from '@ant-design/icons';
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addItem, removeItem } from './CartSlice';

const breadcrumbRoutes = [
  {
    path: '/',
    breadcrumbName: 'Главная',
  },
];

const Cart = () => {
  const totalCount = useAppSelector((selector) => selector.cart.totalCount);
  const items = useAppSelector((selector) => selector.cart.items);
  const dispatch = useAppDispatch();
  return (
    <Layout style={{ padding: 10 }}>
      <PageHeader
        className="site-page-header"
        title="Корзина"
        subTitle={`Предметов в корзине: ${totalCount}`}
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
      <List
        itemLayout="horizontal"
        dataSource={items}
        renderItem={item => (
          <List.Item
            actions={[
              <MinusOutlined 
                key={item.name}
                onClick={() => dispatch(removeItem(item))}
                style={{
                  cursor: 'pointer'
                }}
              />,
              `| ${item.count} |`,
              <PlusOutlined 
                key={item.name}
                onClick={() => dispatch(addItem(item))}
              />
            ]}
          >
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={item.name}
                description={item.description}
              />
          </List.Item>
        )}
      />
    </Layout>
  )
}

export default Cart