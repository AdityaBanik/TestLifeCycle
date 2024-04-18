import type { LayoutServerLoad } from './$types';

export const load = async ({ locals,fetch }) => {
	const url = 'https://strapi.12thwonder.com/graphql';
	const lang = locals.lang;

	const query = `
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

	const response = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: query,
			variables: variables
		})
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const responseData = await response.json();

	return {
		navMenu: responseData.data.navMenu.data.attributes.NavComponent
	};
};
