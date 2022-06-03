import { getHandler, isItem, postHandler } from '$lib/ts/api';
import { formDataToObject } from '$lib/ts/global';
import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie';

export const get: RequestHandler = async ({ request }) => {
	const { status, body } = await getHandler('/user/items', request);
	const categories = await getHandler('/user/category/all', request);
	console.log(categories.body);
	return {
		status,
		body: {
			items: body,
			categories: categories.body,
		},
	};
};

export const post: RequestHandler = async ({ request }) => {
	const formData = await request.formData();
	const object = formDataToObject(formData);
	console.log(object);
	if (isItem(object)) {
		const item = {
			name: object.name,
			description: object.description,
			category: {
				id: +object.category,
			},
		};
		console.log(item);
		const { status } = await postHandler('/user/items/item/create', request, item);
		return {
			status,
		};
	}
	return {
		status: 400,
	};
};
