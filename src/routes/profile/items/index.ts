import { getHandler } from '$lib/ts/api';
import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie';

export const get: RequestHandler = async ({ request }) => {
	const { status, body } = await getHandler('/user/items', request);

	return {
		status,
		body: {
			items: body,
		},
	};
};
