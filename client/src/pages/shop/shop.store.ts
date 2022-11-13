import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';
import { RecordKey } from '@faker-js/faker/modules/helpers/unique';

export interface Item {
    id: string,
    name: string,
    description: string,
    image: string,
    category: string,
    amount: number,
    count: number
}

export const items1: Item[] = [];
export const items2: Item[] = [];
export const items3: Item[] = [];

const generateItems = (num: number) => {
    for (let i = 0; i < num; i++) {
        const item: Item = {
            id: faker.datatype.uuid(),
            name: faker.commerce.product(),
            description: faker.commerce.productDescription(),
            category: faker.commerce.department(),
            image: faker.image.cats(640, 480, true),
            amount: Number(faker.random.numeric(5)),
            count: 1,
        }
        items1.push(item)
    }
    for (let i = 0; i < num; i++) {
        const item: Item = {
            id: faker.datatype.uuid(),
            name: faker.commerce.product(),
            description: faker.commerce.productDescription(),
            category: faker.commerce.department(),
            image: faker.image.cats(640, 480, true),
            amount: Number(faker.random.numeric(5)),
            count: 1,
        }
        items2.push(item)
    }
    for (let i = 0; i < num; i++) {
        const item: Item = {
            id: faker.datatype.uuid(),
            name: faker.commerce.product(),
            description: faker.commerce.productDescription(),
            category: faker.commerce.department(),
            image: faker.image.cats(640, 480, true),
            amount: Number(faker.random.numeric(5)),
            count: 1,
        }
        items3.push(item)
    }
}

generateItems(15)

export interface Categoties {
    name: string;
    label: string,
}
export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3100/api/v1' }),
    endpoints: (build) => ({
        getItems: build.query({
            query: () => 'items'
        }),
        getCategories: build.query<Categoties[], string>({
            query: () => '/categories',
        }),
    })
})

export const { useGetItemsQuery, useGetCategoriesQuery } = shopApi;
