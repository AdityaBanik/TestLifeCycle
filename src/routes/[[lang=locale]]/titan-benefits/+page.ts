import { graphql } from '$lib/gql';
import { client } from '$lib';
import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
	const data = await parent();
	const lang = data.lang;
	const query = graphql(`
		query getTitanBenefits($lang: I18NLocaleCode) {
			titanBenefit(locale: $lang) {
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
						features {
							title
							content
							image {
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
	`);

	const variables = { lang };
	try {
		const responseData = await client.request(query, variables);

		return {
			page: responseData.titanBenefit?.data?.attributes
		};
	} catch (error) {
		return Error(`Failed to home page ${error}`);
	}
}) satisfies PageLoad;
