import type { PageLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async ({ params, parent }) => {
	const slug = params.slug;
	const data = await parent();
	const lang = data.lang;

	const query = graphql(`
		query customer($slug: String!, $lang: I18NLocaleCode) {
			titanCustomerServices(filters: { slug: { eq: $slug } }, locale: $lang) {
				data {
					attributes {
						image {
							data {
								attributes {
									url
									alternativeText
								}
							}
						}

						content
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
						cta {
							title
							description
							Button {
								link
								name
							}
						}
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
				content: responseData.titanCustomerServices?.data[0].attributes?.content,
				image: responseData.titanCustomerServices?.data[0].attributes?.image?.data?.attributes
			},

			seo: responseData.titanCustomerServices?.data[0].attributes?.seo,
			cta: responseData.titanCustomerServices?.data[0].attributes?.cta
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}
}) satisfies PageLoad;
