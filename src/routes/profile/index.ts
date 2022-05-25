import { getHandler, isItem, isLightInvite, isNewPool, postHandler } from '$lib/ts/api';
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
	let object;
	try {
		const formData = await request.formData();
		object = formDataToObject(formData);
	} catch (err) {
		object = await request.json();
		console.log(object);
	}

	if (isNewPool(object)) {
		const { status } = await postHandler('/user/community/create', request, {
			name: object.poolName,
		});
		return {
			status,
		};
	} else if (isLightInvite(object)) {
		const { status } = await postHandler(`/user/invite/${object.inviteID}`, request, null);
		return {
			status,
		};
	}

	return {
		status: 400,
	};
};

export const del: RequestHandler = async ({ request }) => {
	const object = await request.json();
	if (isLightInvite(object)) {
		const { status } = await postHandler(`/user/invite/${object.inviteID}`, request, null);
		return {
			status,
		};
	}
};
