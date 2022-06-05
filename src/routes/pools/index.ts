import { getHandler } from '$lib/ts/api';
import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie';

export const get: RequestHandler = async ({ request }) => {
	const { status, body } = await getHandler('/user/community', request);

	return {
		status,
		body: { communities: body },
	};
};
