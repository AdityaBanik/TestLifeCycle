import type { LayoutServerLoad } from './$types';


import { GraphQLClient, gql } from 'graphql-request';
export const load = (async ({ locals }) => {
	const client = new GraphQLClient('https://strapi.12thwonder.com/graphql');

	const lang = locals.lang;

	const query = gql`
		query navMenu($lang: I18NLocaleCode) {
			navMenu(locale: $lang) {
				data {
					attributes {
						NavComponent {
							title
							Links {
								name
								link
							}
						}
					}
				}
			}
		}
	`;

	const variables = { lang: lang };

	try {
		const responseData = await client.request(query, variables) as any;

		return {
			navMenu: responseData.navMenu?.data?.attributes?.NavComponent
		};
	} catch (error) {
		return { error: 'problem' };
	}
}) satisfies LayoutServerLoad;
