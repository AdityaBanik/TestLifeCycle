import type { PageLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async ({url}) => {
	const page = Number(url.searchParams.get('page')) || 1;

	const query = graphql(`
		query getBlogs($lang: I18NLocaleCode, $page: Int!) {
			titanBlogs(locale: $lang, sort: "date:desc", pagination: { page: $page , pageSize: 9 }) {
				meta {
					pagination {
						pageCount
					}
				}
				data {
					attributes {
						title
						description
						date
						slug
						coverImage {
							data {
								attributes {
									url
									alternativeText
								}
							}
						}
					}
				}
			}
		}
	`);
	const variables = { lang: 'en', page};
	try {
		const responseData = await client.request(query, variables);

		return {
			blogs: responseData.titanBlogs?.data,
			totalPages: responseData.titanBlogs?.meta?.pagination?.pageCount || 1,
			currentPage: page
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}
}) satisfies PageLoad;
