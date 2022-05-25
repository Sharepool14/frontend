import { getHandler, isOtherUser, isPostFromForm, postHandler } from '$lib/ts/api';
import { formDataToObject } from '$lib/ts/global';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ request, params }) => {
	const members = await getHandler(`/communities/${params.id}/members`, request);
	const posts = await getHandler(`/user/loan_post/${params.id}/posts`, request);
	const items = await getHandler('/user/items', request);

	return {
		status: 200,
		body: {
			members: members.body,
			posts: posts.body,
			items: items.body,
		},
	};
};

export const post: RequestHandler = async ({ request, params }) => {
	const formData = await request.formData();
	const object = formDataToObject(formData);
	console.log(object);

	if (isOtherUser(object)) {
		const { status } = await postHandler(
			`/communities/${params.id}/members/invite/${object.email}`,
			request
		);
		return {
			status,
		};
	} else if (isPostFromForm(object)) {
		const { status } = await postHandler(
			`/user/loan_post/communities/${params.id}/post/create`,
			request,
			{
				item_id: parseInt(object.itemID),
				community_id: params.id,
				start_date: new Date(object.startDate),
				return_date: new Date(object.returnDate),
			}
		);
		return {
			status,
		};
	}
	return {
		status: 400,
	};
};
