import { GraphQLClient } from 'graphql-request'

import useSWR, { ConfigInterface } from 'swr'

export const fetcher = (query: any, variables: any = {}, headers: any = {}) => {
	const client = new GraphQLClient(process.env.api as string, {
		headers,
	})

	return client.request(query, variables)
}

export const useQuery = (
	query: string,
	variables: any,
	headers: any,
	options: ConfigInterface<any, any, any>
) => useSWR(query, (query) => fetcher(query, variables, headers), options)
