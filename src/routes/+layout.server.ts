import type { LayoutServerLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async ({ locals }) => {
	const lang = locals.lang;
    
	const query = graphql(`
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
	`);

	const variables = { lang: lang };

	try {
		const responseData = await client.request(query, variables);
       
		return {
			navMenu: responseData.navMenu?.data?.attributes?.NavComponent,
		};
	} catch (error) {
		return { error: 'nav failed to load'}
	}
}) satisfies LayoutServerLoad;
