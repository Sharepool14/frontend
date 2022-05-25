import type { RequestHandler } from '@sveltejs/kit';
import { isRegister, postHandler } from '$lib/ts/api';
import { formDataToObject } from '$lib/ts/global';

export const post: RequestHandler = async ({ request }) => {
	const formData = await request.formData();
	const object = formDataToObject(formData);
	console.log(object);
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

		return {
			status,
		};
	}

	return {
		status: 400,
	};
};
