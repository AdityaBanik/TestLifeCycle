import type { LayoutServerLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';
import type { NavMenuQuery } from '$lib/gql/graphql';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ locals, platform, url }) => {
	const lang = locals.lang;
	if (lang === 'ja' && !url.pathname.includes('/ja')) {
		redirect(302, `/ja/${url.pathname}`);
	}
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
		let responseData: NavMenuQuery;
		let cacheData: string | undefined | null;
		let cacheKey: string | undefined | null;
		if (locals.lang === 'en') {
			cacheKey = 'nav-menu';
			cacheData = await platform?.env.KV.get(cacheKey);
		} else if (locals.lang === 'ja') {
			cacheKey = 'nav-menu-ja';
			cacheData = await platform?.env.KV.get(cacheKey);
		}

		if (cacheData) {
			responseData = JSON.parse(cacheData) as NavMenuQuery;
		} else {
			responseData = await client.request(query, variables);
			platform?.env.KV.put(cacheKey, JSON.stringify(responseData));
		}

		return {
			navMenu: responseData.navMenu?.data?.attributes?.NavComponent,
			lang: lang
		};
	} catch (error) {
		return Error(`Failed to load nav menu ${error}`);
	}
}) satisfies LayoutServerLoad;
