import { createApi } from '@reduxjs/toolkit/query/react';

import basicBaseQuery from '../../../shared/api/basicBaseQuery.ts';
import { DEFAULT_CUSTOMER_SCOPE, PROJECT_KEY } from '../../../shared/const';

interface ILoginUserParams {
	password: string;
	email: string;
	scope?: string;
}

type IAuthResponse = Readonly<{
	access_token: string;
	expires_in: number;
	refresh_token: string;
	scope: string;
	token_type: string;
}>;

export const authApi = createApi({
	reducerPath: 'productAPI',
	baseQuery: basicBaseQuery,
	endpoints: (build) => ({
		loginUser: build.mutation<IAuthResponse, ILoginUserParams>({
			query: ({ password, email, scope = DEFAULT_CUSTOMER_SCOPE }) => ({
				url: `/oauth/${PROJECT_KEY}/customers/token`,
				method: 'POST',
				body: {},
				params: {
					grant_type: 'password',
					username: email,
					password,
					scope,
				},
			}),
		}),

		anonymousSession: build.mutation<IAuthResponse, string>({
			query: (scope) => ({
				url: `/oauth/${PROJECT_KEY}/anonymous/token`,
				method: 'POST',
				body: {},
				params: {
					grant_type: 'client_credentials',
					scope: scope || DEFAULT_CUSTOMER_SCOPE,
				},
			}),
		}),
	}),
});

export const { useLoginUserMutation, useAnonymousSessionMutation } = authApi;