import type { RequestHandler } from '@sveltejs/kit';
import { apiURL } from '../../../../../typescript/ts/global';

export const post: RequestHandler = async ({ request, params }) => {
	if (request.headers.get('access_token') === undefined) {
		return {
			status: 403,
		};
	}

	const res = await fetch(apiURL + `/user/invite/${params.id}`, {
		method: 'post',
		headers: {
			'content-type': 'application/json',
			Authorization: 'Bearer ' + request.headers.get('access_token'),
		},
	});

	return {
		status: res.status,
	};
};

export const del: RequestHandler = async ({ request, params }) => {
	if (request.headers.get('access_token') === undefined) {
		return {
			status: 403,
		};
	}

	const res = await fetch(apiURL + `/user/invite/${params.id}`, {
		method: 'post',
		headers: {
			'content-type': 'application/json',
			Authorization: 'Bearer ' + request.headers.get('access_token'),
		},
	});

	return {
		status: res.status,
	};
};
