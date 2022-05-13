import type { RequestHandler } from '@sveltejs/kit';
import { apiURL } from '$lib/typescript/ts/global';

export const get: RequestHandler = async ({ request }) => {
	if (request.headers.get('access_token') === undefined) {
		return {
			status: 403,
		};
	}

	const res = await fetch(apiURL + '/user/invite', {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			Authorization: 'Bearer ' + request.headers.get('access_token'),
		},
	});
	const data = await res.json();

	return {
		body: {
			data,
		},
	};
};
