import type { PageLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async ({ params }) => {
	let slug = params.slug;
	//fragments are not understood by the compiler [not unused code]
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
		query solutions($slug: String!) {
			titanSolutions(filters: { slug: { eq: $slug } }, locale: "all") {
				data {
					attributes {
						sections {
							...Hero
							...Highlights
							...Features
						}
					}
				}
			}
		}
	`);

	const variables = { slug };

	try {
		const responseData = await client.request(query, variables);

		const heroSection = responseData.titanSolutions?.data[0]?.attributes?.sections?.find(
			(section) => section?.__typename === 'ComponentTestLifeCycleHeroSection'
		);
		const highlights = responseData.titanSolutions?.data[0]?.attributes?.sections?.find(
			(section) => section?.__typename === 'ComponentTestLifeCycleHighlights'
		);

		const features = responseData.titanSolutions?.data[0]?.attributes?.sections?.find(
			(section) => section?.__typename === 'ComponentTestLifeCycleFeatures'
		);
		return {
			hero: heroSection,
			highlights: highlights,
			features: features
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}
}) satisfies PageLoad;
