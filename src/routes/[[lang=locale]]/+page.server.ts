import type { PageServerLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async ({ locals }) => {
	const lang = locals.lang;
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
					}
				}
			}
		}
	`);

	const variables = { lang };
	try {
		const responseData = await client.request(query, variables);

		return {
            page: responseData.titanHomepage?.data?.attributes
        };
	} catch (error) {
		return Error(`Failed to home page ${error}`);
	}
}) satisfies PageServerLoad;
