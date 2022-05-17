import type { RequestHandler } from '@sveltejs/kit';
import { apiURL } from '$lib/ts/api';
import cookie from 'cookie';

export const get: RequestHandler = async ({ request }) => {
	const auth = cookie.parse(request.headers.get('cookie') || '').accessToken;

	if (auth === undefined) {
		return {
			status: 403,
		};
	}

	const res = await fetch(apiURL + '/user/invite', {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			Authorization: 'Bearer ' + auth,
		},
	});
	const data = await res.json();

	return {
		body: {
			data,
		},
	};
};
