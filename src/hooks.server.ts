import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
	let lang: string | undefined;

	if (event.params.lang === 'ja') {
		lang = 'ja';
	}

	if (!lang) {
		const acceptLanguage = event.request.headers.get('Accept-Language');
		if (acceptLanguage && acceptLanguage.includes('ja')) {
			lang = 'ja';
			
		} else {
			lang = 'en';
		}
	}

	event.locals.lang = lang;

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
