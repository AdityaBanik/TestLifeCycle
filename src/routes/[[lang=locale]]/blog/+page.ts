import type { PageLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async () => {
	
	const query = graphql(`
		query getBlogs {
			titanBlogs {
				data {
					attributes {
						title
						description
						date
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

	try {
		const responseData = await client.request(query);

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
