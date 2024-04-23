import { graphql } from '$lib/gql';
import { client } from '$lib';
import type { PageServerLoad } from './$types';
import type { GetHomePageQuery } from '$lib/gql/graphql';

export const load = (async ({ locals,setHeaders,fetch,platform,url }) => {
	
	
	
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

	const variables = { lang: locals.lang };
	
	try {

		let responseData: GetHomePageQuery;
		/* const cacheData: string = await platform?.env.KV.get(url.pathname);

		if (cacheData) {
			responseData = JSON.parse(cacheData) as GetHomePageQuery;
		} else {
			responseData = await client.request(query, variables);
			platform?.env.KV.put(url.pathname, JSON.stringify(responseData));
		} */
		responseData = await client.request(query, variables);
		setHeaders({
			'cache-control': 'public,max-age=3600'
		});
		return {
			page: responseData.titanHomepage?.data?.attributes,
			seo:responseData.titanHomepage?.data?.attributes?.seo,
			
		};
	} catch (error) {
		return {};
	}
}) satisfies PageServerLoad;
