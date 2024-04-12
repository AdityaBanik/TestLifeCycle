import type { PageLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async ({ params }) => {
	let slug = params.slug;
	const query = graphql(`
		query getFunctionalTestArea($slug: String!) {
			titanFunctionals(filters: { slug: { eq: $slug } }) {
				data {
					attributes {
						seo {
							metaTitle
							metaDescription
						}
						heroSection {
							title
							subtitle
							coverImage {
								data {
									attributes {
										url
										alternativeText
									}
								}
							}
						}
						content
					}
				}
			}
		}
	`);

	const variables = { slug };
	try {
		const responseData = await client.request(query, variables);
	
		return {
			seo: responseData.titanFunctionals?.data[0].attributes?.seo,
			page: {
				hero: responseData.titanFunctionals?.data[0].attributes?.heroSection,
				content: responseData.titanFunctionals?.data[0].attributes?.content
			}
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}

}) satisfies PageLoad;
