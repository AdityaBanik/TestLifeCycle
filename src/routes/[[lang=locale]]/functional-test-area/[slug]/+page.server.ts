import type { PageServerLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';
import type { GetFunctionalTestAreaQuery } from '$lib/gql/graphql';
export const load = (async ({ params,locals,platform,setHeaders,url }) => {
	
	const slug = params.slug;

	const query = graphql(`
		query getFunctionalTestArea($slug: String!, $lang: I18NLocaleCode) {
			titanFunctionals(filters: { slug: { eq: $slug } } locale: $lang) {
				data {
					attributes {
						seo {
							metaTitle
							metaDescription
						}
						heroSection {
							title
							subtitle
							coverImage {
								data {
									attributes {
										url
										alternativeText
									}
								}
							}
						}
						content
					}
				}
			}
		}
	`);

	const variables = { slug, lang:locals.lang };
	try {
		
		let responseData: GetFunctionalTestAreaQuery;
		const cacheData: string = await platform?.env.KV.get(url.pathname);

		if (cacheData) {
			responseData = JSON.parse(cacheData) as GetFunctionalTestAreaQuery;
		} else {
			responseData = await client.request(query, variables);
			platform?.env.KV.put(url.pathname, JSON.stringify(responseData));
		}

		setHeaders({
			'cache-control': 'public,max-age=3600'
		});
		return {
			seo: responseData.titanFunctionals?.data[0].attributes?.seo,
			page: {
				hero: responseData.titanFunctionals?.data[0].attributes?.heroSection,
				content: responseData.titanFunctionals?.data[0].attributes?.content
			}
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}

}) satisfies PageServerLoad;
