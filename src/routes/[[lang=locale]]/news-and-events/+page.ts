import type { PageLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async ({ parent }) => {
	const data = await parent();
	const lang = data.lang;
	const query = graphql(`
	query getNewsAndEvents($lang: I18NLocaleCode) {
		titanNewsAndEvents (locale: $lang){
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
		console.log(responseData);
		return {
			blogs: responseData.titanNewsAndEvents?.data,
           
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}
}) satisfies PageLoad;
