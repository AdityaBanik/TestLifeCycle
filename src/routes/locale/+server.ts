import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies, url }) => {
	const formData = await request.formData();
	const locale = formData.get('locale');

	const referrer = request.headers.get('referer');

	if (locale === 'ja') {
		return redirect(302, referrer + '-ja');
	}
	cookies.set('lang', locale as string, { path: '/' });

	redirect(302, url.pathname);
};
