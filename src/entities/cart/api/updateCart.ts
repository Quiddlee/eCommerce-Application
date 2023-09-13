import { createApi } from '@reduxjs/toolkit/query/react';

import baseQueryWithReauth from '../../../shared/api/baseQueryWithReauth.ts';
import { CartResponse } from '../../../shared/types';
import ICreateCartParams from '../types/interfaces.ts';

export const updateCartApi = createApi({
	reducerPath: 'updateCartApi',
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		getCart: build.mutation<CartResponse, ICreateCartParams>({
			query: (body) => ({
				url: `/${import.meta.env.VITE_PROJECT_KEY}/carts`,
				method: 'POST',
				body,
			}),
		}),
	}),
});

export const { useGetCartMutation } = updateCartApi;
