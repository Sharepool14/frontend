import type { RequestHandler } from '@sveltejs/kit';
import { apiURL } from '../../../typescript/ts/global';

export const post: RequestHandler = async ({ request }) => {
	const reqBody = await request.json();
	const res = await fetch(apiURL + '/user/register', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(reqBody),
	});

	return {
		status: res.status,
	};
};
