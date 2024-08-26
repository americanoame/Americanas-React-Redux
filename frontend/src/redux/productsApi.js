import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/'}),
    endpoints: (buider) => ({
        getAllProducts: buider.query({
            query: () => 'products',
        }),
    }),
});

export const { useGetAllProductsQuery } = productsApi;



















