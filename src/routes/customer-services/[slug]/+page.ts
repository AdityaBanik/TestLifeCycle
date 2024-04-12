import type { PageLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async ({ params }) => {
	let slug = params.slug;
	const query = graphql(`
		query customer($slug: String!) {
			titanCustomerServices(filters: { slug: { eq: $slug } }) {
				data {
					attributes {
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

	const variables = { slug };
	try {
		const responseData = await client.request(query, variables);

		return {
            page: {
                title: responseData.titanCustomerServices?.data[0].attributes?.section?.title,
                subtitle: responseData.titanCustomerServices?.data[0].attributes?.section?.subtitle,
                cards: responseData.titanCustomerServices?.data[0].attributes?.section?.cards
            }
        };
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}
}) satisfies PageLoad;
