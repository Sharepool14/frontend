import type { Handle } from '@sveltejs/kit';
import cookie from 'cookie';

const openRoutes = ['/guide', '/auth'];
const nonSSR = ['/feed', '/pools'];

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/') {
		return await resolve(event);
	}
	for (const route of openRoutes) {
		if (event.url.pathname.startsWith(route)) {
			return await resolve(event);
		}
	}

	const auth = cookie.parse(event.request.headers.get('cookie') || '').accessToken;
	if (auth == undefined) {
		return new Response('Unauthorized access', { status: 403 });
	}

	event.request.headers.set('Authorization', `Bearer ${auth}`);
	for (const route of nonSSR) {
		if (event.url.pathname.startsWith(route)) {
			return await resolve(event, { ssr: false });
		}
	}
	return await resolve(event);
};
