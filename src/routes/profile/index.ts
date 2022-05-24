import { getHandler, isItem, isNewPool, postHandler } from '$lib/ts/api';
import { formDataToObject } from '$lib/ts/global';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ request }) => {
	const info = await getHandler('/user/info', request);
	const communities = await getHandler('/user/community', request);
	const items = await getHandler('/user/items', request);
	const invites = await getHandler('/user/invite', request);

	return {
		body: {
			info: info.body,
			communities: communities.body,
			items: items.body,
			invites: invites.body,
		},
	};
};

export const post: RequestHandler = async ({ request }) => {
	const formData = await request.formData();
	const object = formDataToObject(formData);

	if (isNewPool(object)) {
		const createCommunity = await postHandler('/user/community/create', request, {
			community: { name: object.poolName },
		});
		if (createCommunity.status < 400) {
			const communities = await getHandler('/user/community', request);
			const [{ id }] = communities.body?.filter((community) => community.name == object.poolName);
			return {
				status: 200,
			};
		}
	} else if (isItem(object)) {
		//make sure item.category is a number, this is dumb but necessary
		object.category = parseInt((<unknown>object.category) as string);
		const item = object;
		const { status } = await postHandler('/user/items/create', request, item);
		return {
			status,
		};
	}

	return {
		status: 400,
	};
};
