import React, { useState } from 'react'
import { Layout, PageHeader, Card, Breadcrumb, Select, message } from 'antd';
import { Item, items1, items2, items3 } from './shop.store';
import { useGetCategoriesQuery } from './shop.store';
import {
    ShoppingCartOutlined,
} from '@ant-design/icons';
import { useAppDispatch } from '../../app/hooks';
import { addItem } from '../cart/CartSlice';

const { Meta } = Card;


const Shop = () => {
    const [items, setItems] = useState<Item[]>(items1)
    const [selectedValue, setSelectedValue] = useState<string>('Оборудование для исследования поведенческих реакций');
    const dispatch = useAppDispatch();

    const { data: categories, isLoading: categoriesLoad, isError: categoriesError, error} = useGetCategoriesQuery('-');

    if (categoriesLoad) {
        return null
    }

    const categoryOption = categories?.map((category) => ({
        value: category.name,
        label: category.label
    }))

    const breadcrumbRoutes = [
        {
        path: '/',
        breadcrumbName: 'Главная',
        },
    ];

    const handleChange = (value: string) => {
        if (value === 'Оборудование для исследования поведенческих реакций') {
            setItems(items1)
        }
        if (value === 'Оборудование для изучения физиологии животных') {
            setItems(items2)
        }
        if (value === 'Товары для содержания и разведения лабораторных животных') {
            setItems(items3)
        }
        setSelectedValue(value)
    }
    return (
        <Layout style={{ padding: 10 }}>
            <PageHeader
                className="site-page-header"
                title={selectedValue}
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
            <Select
                style={{ width: '50%' }}
                defaultValue='Поведение'
                onChange={handleChange}
                options={categoryOption}
            />
            <div className="items-container">
                {
                    items.map((item) => (
                        <Card
                            hoverable
                            style={{ width: 240, marginBottom: '20px' }}
                            cover={<img alt="example" src={item.image} />}
                            key={item.name}
                            actions={[
                                <ShoppingCartOutlined 
                                    key="cart"
                                    onClick={() => {
                                        dispatch(addItem(item))
                                        message.success(`Товар ${item.name} добавлен в корзину`)
                                    }}
                                />
                            ]}
                        >
                            <Meta title={item.name} description={item.description} />
                        </Card>
                    ))
                }
            </div>
        </Layout>
    )
}

export default Shop