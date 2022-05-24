import { getHandler, isOtherUser } from '$lib/ts/api';
import { formDataToObject } from '$lib/ts/global';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ request, params }) => {
	const members = await getHandler(`/communities/${params.id}/members`, request);
	const posts = await getHandler(`/communities/${params.id}/posts/`, request);
	return {
		status: 200,
		body: {
			members: members.body,
			posts: posts.body,
		},
	};
};

export const post: RequestHandler = async ({ request, params }) => {
	const formData = await request.formData();
	const object = formDataToObject(formData);

	if (isOtherUser(object)) {
		const { status } = await getHandler(
			`/communities/${params.id}/members/invite/${object.email}`,
			request
		);
		return {
			status,
		};
	}
	return {
		status: 400,
	};
};
