import type { PageServerLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';
import type { SolutionsQuery } from '$lib/gql/graphql';

export const load = (async ({ params, locals, setHeaders, platform, url }) => {
	const slug = params.slug;

	//fragments are not understo ̑od by the compiler [not unused code]
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const Hero = graphql(`
		fragment Hero on ComponentTestLifeCycleHeroSection {
			__typename
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
	`);
	//fragments are not understood by the compiler [not unused code]
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const Highlights = graphql(`
		fragment Highlights on ComponentTestLifeCycleHighlights {
			__typename
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
	`);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const Features = graphql(`
		fragment Features on ComponentTestLifeCycleFeatures {
			__typename
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
	`);

	const query = graphql(`
		query solutions($slug: String!, $lang: I18NLocaleCode!) {
			titanSolutions(filters: { slug: { eq: $slug } }, locale: $lang) {
				data {
					attributes {
						sections {
							...Hero
							...Highlights
							...Features
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

	const variables = { slug, lang: locals.lang };

	try {
		let responseData: SolutionsQuery;
		const cacheData: string = await platform?.env.KV.get(url.pathname);

		if (cacheData) {
			responseData = JSON.parse(cacheData) as SolutionsQuery;
		} else {
			responseData = await client.request(query, variables);
			platform?.env.KV.put(url.pathname, JSON.stringify(responseData));
		}

		const heroSection = responseData.titanSolutions?.data[0]?.attributes?.sections?.find(
			(section) => section?.__typename === 'ComponentTestLifeCycleHeroSection'
		);
		const highlights = responseData.titanSolutions?.data[0]?.attributes?.sections?.find(
			(section) => section?.__typename === 'ComponentTestLifeCycleHighlights'
		);

		const features = responseData.titanSolutions?.data[0]?.attributes?.sections?.find(
			(section) => section?.__typename === 'ComponentTestLifeCycleFeatures'
		);

		setHeaders({
			'cache-control': 'public,max-age=3600'
		});

		return {
			hero: heroSection,
			highlights: highlights,
			features: features,
			seo: responseData.titanSolutions?.data[0]?.attributes?.seo
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}
}) satisfies PageServerLoad;
