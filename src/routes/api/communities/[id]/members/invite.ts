import { apiURL } from '../../../../../typescript/ts/global';
import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async ({ request, params }) => {
	const reqBody = await request.json();
	const res = await fetch(apiURL + `/communities/${params.id}/members/invite/${reqBody.invitee}`, {
		method: 'POST',
		headers: {
			Authorization: 'Bearer ' + request.headers.get('access_token'),
		},
	});

	return {
		status: res.status,
	};
};
