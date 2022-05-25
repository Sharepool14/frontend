import type { RequestHandler } from '@sveltejs/kit';
import { apiURL, isRegister, postHandler } from '$lib/ts/api';
import { formDataToObject } from '$lib/ts/global';

export const post: RequestHandler = async ({ request }) => {
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
			if (res.status < 400) {
				return {
					status: res.status,
					headers: res.headers,
				};
			} else {
				return {
					status: res.status,
				};
			}
		}
	}

	return {
		status: 400,
	};
};
