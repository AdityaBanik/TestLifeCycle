import type { PageLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async ({ params,parent }) => {
	const slug = params.slug;
	const data = await parent();
	const lang = data.lang;
	const query = graphql(`
	query getNewsAndEvent($slug: String!,$lang: I18NLocaleCode) {
		titanNewsAndEvents (filters: { slug: { eq: $slug } },locale: $lang){
			data {
				attributes {
					title
					content
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
	const variables = { slug, lang }
	try {
		const responseData = await client.request(query, variables);
		console.log(responseData);
		return {
			blog: responseData.titanNewsAndEvents?.data[0],
           
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}
}) satisfies PageLoad;
