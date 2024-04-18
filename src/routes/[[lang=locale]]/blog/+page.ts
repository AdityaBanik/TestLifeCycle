import type { PageLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async ({ parent }) => {
	const data = await parent();
	const lang = data.lang;
	const query = graphql(`
		query getBlogs($lang: I18NLocaleCode) {
			titanBlogs (locale: $lang){
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
	const variables = { lang };
	try {
		const responseData = await client.request(query, variables);
	
		return {
			blogs: responseData.titanBlogs?.data
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}
}) satisfies PageLoad;
