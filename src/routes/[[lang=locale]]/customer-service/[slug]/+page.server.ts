import type { PageServerLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';
import type { CustomerQuery } from '$lib/gql/graphql';

export const load = (async ({ params, locals, setHeaders, platform ,url}) => {
	const slug = params.slug;

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

	const variables = { slug, lang: locals.lang };
	try {
		let responseData: CustomerQuery;
		const cacheData: string = await platform?.env.KV.get(url.pathname);

		if (cacheData) {
			responseData = JSON.parse(cacheData) as CustomerQuery;
		} else {
			responseData = await client.request(query, variables);
			platform?.env.KV.put(url.pathname, JSON.stringify(responseData));
		}

		setHeaders({
			'cache-control': 'public,max-age=3600'
		});
		
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
}) satisfies PageServerLoad;
