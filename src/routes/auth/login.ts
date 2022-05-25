import type { RequestHandler } from '@sveltejs/kit';
import { postHandler } from '$lib/ts/api';
import { serialize } from 'cookie';
import { formDataToObject } from '$lib/ts/global';

export const post: RequestHandler = async ({ request }) => {
	let object: Authentication;
	try {
		const formData = await request.formData();
		object = formDataToObject<Authentication>(formData);
	} catch (err) {
		object = <Authentication>await request.json();
	}
	console.log(object);
	const { username, password } = object;

	const { status, body } = await postHandler('/login', request, { username, password });
	console.log(body);
	if (status >= 400) {
		return { status };
	}
	const accessToken = serialize('accessToken', body.access_token, {
		path: '/',
		maxAge: 60 * 60 * 24 * 7, // one week
	});

	const refreshToken = serialize('refreshToken', body.refresh_token, {
		path: '/',
		maxAge: 60 * 60 * 24 * 7, // one week
	});

	return {
		status: 200,
		headers: {
			'set-cookie': [accessToken, refreshToken],
		},
	};
};
