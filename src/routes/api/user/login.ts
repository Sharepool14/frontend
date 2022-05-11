import type { RequestHandler } from '@sveltejs/kit';
import { apiURL } from '../../../typescript/ts/global';

export const post: RequestHandler = async ({ request }) => {
	const reqBody = await request.json();

	const res = await fetch(apiURL + '/login', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			username: reqBody.username,
			password: reqBody.password,
		}),
	});
	const data = await res.json();

	return {
		status: res.status,
		body: {
			access_token: data.access_token,
			refresh_token: data.refresh_token,
		},
	};
};
