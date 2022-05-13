import { apiURL } from '$lib/typescript/ts/global';
import type { RequestHandler } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const post: RequestHandler = async ({ request }) => {
	if (request.headers.get('access_token') === undefined) {
		return {
			status: 403,
		};
	}
	const reqBody = await request.json();
	const res = await fetch(apiURL + '/user/community/create', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			Authorization: 'Bearer ' + request.headers.get('access_token'),
		},
		body: JSON.stringify(reqBody),
	});

	return {
		status: res.status,
	};
};
