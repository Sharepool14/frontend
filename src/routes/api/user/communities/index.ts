import { apiURL } from '$lib/ts/api';
import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get: RequestHandler = async ({ request }) => {
	const auth = cookie.parse(request.headers.get('cookie') || '').accessToken;
	if (auth === undefined) {
		return {
			status: 403,
		};
	}

	const res = await fetch(apiURL + '/user/community', {
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

/** @type {import('@sveltejs/kit').RequestHandler} */
export const post: RequestHandler = () => {
	return {
		body: {
			1: 1,
		},
	};
};
