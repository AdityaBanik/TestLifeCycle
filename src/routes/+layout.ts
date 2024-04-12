import type { LayoutLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async () => {
	const query = graphql(`
		query navLinks {
			titanFunctionals {
				data {
					attributes {
						name
						slug
					}
				}
			}
			titanSolutions {
				data {
					attributes {
						name
						slug
					}
				}
			}
			titanCustomerServices {
				data {
					attributes {
						name
						slug
					}
				}
			}
		}
	`);

	try {
		const responseData = await client.request(query);

		const navLinks = {
            'solutions': responseData.titanSolutions?.data.map(({ attributes }) => attributes),
			'customer service': responseData.titanCustomerServices?.data.map(({ attributes }) => attributes),
            'functional test area': responseData.titanFunctionals?.data.map(({ attributes }) => attributes),
		};

		return {
			navLinks: navLinks
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}
}) satisfies LayoutLoad;