import { getHandler, isItemRequest, isOtherUser, isPostFromForm, postHandler } from '$lib/ts/api';
import { formDataToObject } from '$lib/ts/global';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ request, params }) => {
	const communities = await getHandler('/user/community', request);
	const members = await getHandler(`/communities/${params.id}/members`, request);
	const posts = await getHandler(`/user/loan_post/${params.id}/posts`, request);
	const items = await getHandler('/user/items', request);

	let community;
	try {
		[community] = (communities.body as Array<any>).filter((community) => community.id == params.id);
	} catch (err) {
		console.warn(err);
	}

	return {
		status: 200,
		body: {
			community,
			members: members.body,
			posts: posts.body,
			items: items.body,
		},
	};
};

export const post: RequestHandler = async ({ request, params }) => {
	let object;
	try {
		const formData = await request.formData();
		object = formDataToObject(formData);
	} catch (err) {
		object = await request.json();
	}

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
				end_date: new Date(object.endDate),
			}
		);
		return {
			status,
		};
	} else if (isItemRequest(object)) {
		const { status } = await postHandler(`/user/loan/${object.postID}/request`, request);
		return { status };
	}
	return {
		status: 400,
	};
};
