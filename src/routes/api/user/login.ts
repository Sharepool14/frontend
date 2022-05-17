import type { RequestHandler } from '@sveltejs/kit';
import { apiURL } from '$lib/ts/api';
import { serialize } from 'cookie';

export async function post({ request }) {
	const req = await request.json();

	const res = await fetch(apiURL + '/login', {
		method: 'POST',
		headers: {
			accepts: 'application/json',
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			username: req.username,
			password: req.password,
		}),
	});

	if (res.status >= 400) {
		return res.status;
	}

	const data = await res.json();
	return {
		status: res.status,
		headers: {
			'set-cookie': [
				serialize('accessToken', data.access_token, {
					path: '/',
					maxAge: 60 * 60 * 24 * 7, // one week
				}),
				serialize('refreshToken', data.refresh_token, {
					path: '/',
					maxAge: 60 * 60 * 24 * 7, // one week
				}),
			],
		},
	};
}
