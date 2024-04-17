import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
export const load = (async ({ locals, url }) => {

	const lang = locals.lang;

	if (lang === 'ja' && !url.pathname.includes('/ja')) {
		redirect(302,`/ja/${url.pathname}`);
	}

	return {
		url: url.pathname,
		lang: lang
	};
}) satisfies LayoutServerLoad;
