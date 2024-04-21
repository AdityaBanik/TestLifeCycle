import type { PageLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async ({ parent }) => {
	const data = await parent();
	const lang = data.lang;
	const query = graphql(`
		query getRequestDemo($lang: I18NLocaleCode) {
			titanRequestDemo(locale: $lang) {
				data {
					attributes {
						title
						subtitle
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
					}
				}
			}
		}
	`);

	const variables = { lang };
	try {
		const responseData = await client.request(query, variables);

		return {
			page: responseData.titanRequestDemo?.data?.attributes,
			seo:responseData.titanRequestDemo?.data?.attributes?.seo
		};
	} catch (error) {
		return {
			status: 500,
			error: error
		};
	}
}) satisfies PageLoad;
