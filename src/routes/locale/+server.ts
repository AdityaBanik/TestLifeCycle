import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const formData = await request.formData();
	const locale = formData.get('locale');
	cookies.set('lang', locale as string, { path: '/' });

	const referrer = request.headers.get('referer');
    const baseUrl = new URL(referrer as string).origin;


    if (referrer as string === baseUrl + '/') {
        redirect(302, baseUrl + '/');  
    }

	if (locale === 'ja') {
		return redirect(302, referrer + '-ja');
	}

	redirect(302, referrer!.slice(0, -3));
};
