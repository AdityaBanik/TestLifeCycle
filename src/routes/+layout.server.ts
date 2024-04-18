import type { LayoutServerLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';
import { gql } from 'graphql-request';
export const load = (async ({ locals }) => {
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
		const responseData:any = await client.request(query, variables);

		return {
			navMenu: responseData.navMenu?.data?.attributes?.NavComponent
		};
	} catch (error) {
		return { error: error };
	}
}) satisfies LayoutServerLoad;
