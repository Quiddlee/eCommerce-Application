import { createApi } from '@reduxjs/toolkit/dist/query/react';

import baseQueryWithReauth from '../../../shared/api/baseQueryWithReauth.ts';
import { PROJECT_KEY } from '../../../shared/const';
import { ILoginUserDataResponse, ILoginUserParams, IUser } from '../../../shared/types';

export const userDataApi = createApi({
	reducerPath: 'userDataApi',
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		loginUserData: build.mutation<ILoginUserDataResponse, ILoginUserParams>({
			query: (loginData) => ({
				url: `/${PROJECT_KEY}/login`,
				method: 'POST',
				body: JSON.stringify(loginData),
			}),
		}),

		getUser: build.query<IUser, string>({
			query: (id) => ({
				url: `${PROJECT_KEY}/customers/${id}`,
			}),
		}),
	}),
});

export const { useLoginUserDataMutation, useGetUserQuery } = userDataApi;
