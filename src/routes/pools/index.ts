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
	const communities = await dataFetcher('/user/community', auth);

	return {
		body: { communities },
	};
};
