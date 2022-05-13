import { apiURL } from '$lib/typescript/ts/global';
import Cookies from 'js-cookie';
import type { RequestHandler } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get: RequestHandler = async ({ request }) => {
	if (request.headers.get('access_token') === undefined) {
		return {
			status: 403,
		};
	}
	const res = await fetch(apiURL + '/user/info', {
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + request.headers.get('access_token'),
		},
	});

	if (res.status >= 400) {
		return {
			status: res.status,
		};
	}

	const data = await res.json();
	return {
		body: {
			data,
		},
	};
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export const post: RequestHandler = async ({ request }) => {
	const res = await fetch(apiURL + '/user', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			Authorization: 'Bearer ' + request.headers.get('access_token'),
		},
		body: JSON.stringify(request),
	});

	return {
		status: res.status,
	};
};
