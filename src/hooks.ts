import type { Handle } from '@sveltejs/kit';
import cookie from 'cookie';

const openRoutes = ['/', '/guide', '/auth/login', '/auth/register'];

export const handle: Handle = async ({ event, resolve }) => {
	if (openRoutes.includes(event.url.pathname)) {
		return await resolve(event);
	}

	const auth = cookie.parse(event.request.headers.get('cookie') || '').accessToken;
	if (auth == undefined) {
		return new Response('Unauthorized access', { status: 403 });
	}

	event.request.headers.set('Authorization', `Bearer ${auth}`);
	return await resolve(event);
};
