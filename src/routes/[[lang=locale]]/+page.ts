import { graphql } from '$lib/gql';
import { client } from '$lib';
import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
	const data = await parent();
	const lang = data.lang;
	const query = graphql(`
		query getHomePage($lang: I18NLocaleCode) {
			titanHomepage(locale: $lang) {
				data {
					attributes {
						Hero {
							title
							description
							Button {
								name
								link
							}
						}
						Cta {
							title
							Button {
								link
								name
							}
						}
						Features {
							title
							features {
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
						acceleratingSection {
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
			page: responseData.titanHomepage?.data?.attributes,
			seo:responseData.titanHomepage?.data?.attributes?.seo
		};
	} catch (error) {
		return Error(`Failed to home page ${error}`);
	}
}) satisfies PageLoad;
