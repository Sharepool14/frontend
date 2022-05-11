import { apiURL } from '../../../../typescript/ts/global';
import Cookies from 'js-cookie';
import type { RequestHandler } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get: RequestHandler = async ({ request }) => {
	if (request.headers.get('access_token') === undefined) {
		return {
			status: 403,
		};
	}

	const res = await fetch(apiURL + '/user/community', {
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

/** @type {import('@sveltejs/kit').RequestHandler} */
export const post: RequestHandler = () => {
	return {
		body: {
			1: 1,
		},
	};
};
