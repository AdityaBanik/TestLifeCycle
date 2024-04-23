import type { PageLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';
export const load = (async ({ parent }) => {
	const data = await parent();
	const lang = data.lang;
	const query = graphql(`
		query whyChooseUs($lang: I18NLocaleCode) {
			titanWhyChooseUs(locale: $lang) {
				data {
					attributes {
						highlights {
							title
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
						cta {
							title
							description
							Button {
								link
								name
							}
						}
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
					}
				}
			}
		}
	`);

	const variables = { lang };
	try {
		const responseData = await client.request(query, variables);

		return {
			page: responseData.titanWhyChooseUs?.data?.attributes,
			seo: responseData.titanWhyChooseUs?.data?.attributes?.seo,
			cta: responseData.titanWhyChooseUs?.data?.attributes?.cta
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}
}) satisfies PageLoad;
