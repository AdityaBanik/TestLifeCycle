import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({request,platform}) => {

    const req = await request.json();

    let key

    if (req.model === 'nav-menu') {
        key = 'nav-menu';
        if(req.entry.locale === 'ja'){
            key = `${key}-ja`;
        }
        await platform?.env.KV.delete(key);
        return json({success: true});
    }

    if (req.model === 'titan-functional') {
        key = `/functional-test-area/${req.entry.slug}`;
    }
    else if (req.model === 'titan-homepage') {
        key = `/`;
    }
    else if (req.model === 'titan-solutions'){
        key = `/solutions/${req.entry.slug}`;
    }
    else if (req.model === 'titan-customer-service'){
        key = `/customer-service/${req.entry.slug}`;
    }

    if(req.entry.locale === 'ja'){
        key = `/ja${key}`;
    }

    await platform?.env.KV.delete(key);

    return json({success: true});
};