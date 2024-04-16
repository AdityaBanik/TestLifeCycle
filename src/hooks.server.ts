import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
	let lang = event.cookies.get('lang');
	if (!lang) {
		const acceptLanguage = event.request.headers.get('Accept-Language');
		if (acceptLanguage && acceptLanguage.includes('ja')) {
			lang = 'ja';
		} else {
			lang = 'en';
		}
        event.cookies.set('lang', lang, { path: '/' });
	}
    
    event.locals.lang = lang;
   
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
