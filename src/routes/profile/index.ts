import { dataFetcher } from '$lib/ts/api';
import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie';

export const get: RequestHandler = async ({ request }) => {
	const auth = cookie.parse(request.headers.get('cookie') || '').accessToken;
	if (auth === undefined) {
		return {
			status: 403,
		};
	}

	const info = await dataFetcher('/user/info', auth);
	const communities = await dataFetcher('/user/community', auth);
	const items = await dataFetcher('/user/items', auth);
	const invites = await dataFetcher('/user/invite', auth);

	return {
		body: { info, communities, items, invites },
	};
};
