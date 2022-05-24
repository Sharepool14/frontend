import type { RequestHandler } from '@sveltejs/kit';
import { apiURL, isRegister, postHandler } from '$lib/ts/api';
import { formDataToObject } from '$lib/ts/global';

export const post = async ({ request }) => {
	const formData = await request.formData();
	const object = formDataToObject(formData);
	if (isRegister(object)) {
		const { username, password, lastname, firstname, phone, city, zipcode, street } = object;

		const { status } = await postHandler('/user/register', request, <User>{
			username,
			password,
			userInformation: {
				firstname,
				lastname,
				phone,
				city,
				zipcode,
				street,
			},
		});

		if (status < 400) {
			const res = await fetch('auth/login', {
				method: 'post',
				body: JSON.stringify({ username, password }),
			});

			return {
				status: res.status,
				headers: res.headers.get('set-cookie'),
			};
		}
	}

	return {
		status: 400,
	};
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
