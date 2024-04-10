import type { PageLoad } from './$types';
import { gql } from 'graphql-request';
import { graphql } from '$lib/gql';
import { client } from '$lib';

export const load = (async ({ params }) => {
	let slug = params.slug;
	const query = graphql(`
		query getFunctionalTestArea($slug: String!) {
			titanFunctionals(filters: { slug: { eq: $slug } }) {
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

	const variables = { slug };
	try {
		const responseData = await client.request(query, variables);
        console.log(responseData);
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

	/* const query = `query getFunctionalTestArea($slug: String!) {
        titanFunctionals(filters: { slug: { eq: $slug } }) {
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
      }`;

	const variables = { slug };

	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query, variables })
	};
	try {
		const response = await fetch(serverUrl + '/graphql', options);

		if (!response.ok) {
			const message = `An error has occured: ${response.status}`;
			throw new Error(message);
		}
		const responseData = await response.json();

		return {
			seo: responseData.data.titanFunctionals.data[0].attributes.seo,
            page:{
                hero: responseData.data.titanFunctionals.data[0].attributes.heroSection,
                content: responseData.data.titanFunctionals.data[0].attributes.content,
            }	
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error',
		};
	} */
}) satisfies PageLoad;
