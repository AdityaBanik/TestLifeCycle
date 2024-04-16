import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const formData = await request.formData();
	const locale = formData.get('locale');

	const referrer = request.headers.get('referer');
	const baseUrl = new URL(referrer as string).pathname;
	
	// Handle the case when switching from 'ja' to 'en' on the home page
	if (baseUrl === '/ja' && locale === 'en') {
		return redirect(302, '/');
	  }
	
	if (locale === 'ja') {
		return redirect(302, 'ja' + baseUrl);
	}

	return redirect(302, baseUrl.slice(3, baseUrl.length));
};
