import type { PageLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async ({ params, parent }) => {
	const slug = params.slug;
	const data = await parent();
	const lang = data.lang;
	const query = graphql(`
		query getBlogPost($slug: String!, $lang: I18NLocaleCode) {
			titanBlogs(filters: { slug: { eq: $slug } }, locale: $lang) {
				data {
					attributes {
						title
						date
						slug
						seo {
							metaTitle
							metaDescription
							metaImage {
								data {
									attributes {
										url
									}
								}
							}
							metaSocial {
								socialNetwork
								title
								description
								image {
									data {
										attributes {
											url
										}
									}
								}
							}
							keywords
							structuredData
						}

						coverImage {
							data {
								attributes {
									url
									alternativeText
								}
							}
						}
						content
					}
				}
			}
		}
	`);

	const variables = { slug, lang };
	try {
		const responseData = await client.request(query, variables);

		return {
			blog: responseData.titanBlogs?.data[0].attributes,
			seo:responseData.titanBlogs?.data[0].attributes?.seo
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}
}) satisfies PageLoad;
