import type { LayoutServerLoad } from './$types';
import { graphql } from '$lib/gql';
import { client } from '$lib';
import type { Actions } from '@sveltejs/kit';

  


export const load = (async ({ cookies, url, locals }) => {

	const nav = cookies.get('nav');
	if (nav) {
		const navLinks:[] = JSON.parse(nav);
		return {
			navLinks: navLinks,
			url: url.pathname,
			lang: locals.lang
		};
	}

	const query = graphql(`
		query navLinks {
			titanFunctionals {
				data {
					attributes {
						name
						slug
					}
				}
			}
			titanSolutions(sort: "publishedAt:asc") {
				data {
					attributes {
						name
						slug
					}
				}
			}
			titanCustomerServices(sort: "publishedAt:asc") {
				data {
					attributes {
						name
						slug
					}
				}
			}
		}
	`);

	try {
		const responseData = await client.request(query);

		const navLinks = {
			solutions: responseData.titanSolutions?.data.map(({ attributes }) => attributes),
			'customer service': responseData.titanCustomerServices?.data.map(
				({ attributes }) => attributes
			),
			'functional test area': responseData.titanFunctionals?.data.map(
				({ attributes }) => attributes
			)
		};
		cookies.set('nav', JSON.stringify(navLinks), {
			path: '/',
			maxAge: 10 * 60 
		});

		return {
			navLinks: navLinks,
			url: url.pathname,
			lang: locals.lang
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}
}) satisfies LayoutServerLoad;
