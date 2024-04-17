import type { PageLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async ({ params,parent }) => {
	const slug = params.slug;
	const data = await parent();
	const lang = data.lang;

	const query = graphql(`
		query customer($slug: String!, $lang: I18NLocaleCode) {
			titanCustomerServices(filters: { slug: { eq: $slug } }, locale: $lang) {
				data {
					attributes {
						content
						section {
							title
							subtitle
							cards {
								title
								description
								media {
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
			}
		}
	`);

	const variables = { slug, lang };
	try {
		const responseData = await client.request(query, variables);

		return {
			page: {
				title: responseData.titanCustomerServices?.data[0].attributes?.section?.title,
				subtitle: responseData.titanCustomerServices?.data[0].attributes?.section?.subtitle,
				cards: responseData.titanCustomerServices?.data[0].attributes?.section?.cards,
				content: responseData.titanCustomerServices?.data[0].attributes?.content
			}
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}
}) satisfies PageLoad;
