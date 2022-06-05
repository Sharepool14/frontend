import {
	getHandler,
	isItem,
	isLightInvite,
	isLoanRequest,
	isNewPool,
	postHandler,
} from '$lib/ts/api';
import { formDataToObject } from '$lib/ts/global';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ request }) => {
	const info = await getHandler('/user/info', request);
	const communities = await getHandler('/user/community', request);
	const items = await getHandler('/user/items', request);
	const invites = await getHandler('/user/invite', request);
	const itemRequests = await getHandler('/user/loan/othersInvite', request);
	const posts = await getHandler('/user/loan_post/', request);
	const loansAndRequests = await getHandler('/user/loan/myLoanOrReq', request);

	const requestData = [];
	const loansData = [];
	const requests = itemRequests.body;

	if (requests && requests?.length > 0) {
		requests.forEach((request) => {
			const post = posts?.body.find((post) => post.id == request.loan_post_id);
			if (!request.accepted) {
				requestData.push({
					community: post?.communityName,
					item: post?.itemName,
					requester: request.requesterName,
					requestID: request.id,
				});
			} else {
				loansData.push({});
			}
		});
	}
	return {
		body: {
			info: info.body,
			communities: communities.body,
			items: items.body,
			invites: invites.body,
			requests: requestData,
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
	}

	if (isNewPool(object)) {
		const { status } = await postHandler('/user/community/create', request, {
			name: object.poolName,
		});
		return {
			status,
		};
	} else if (isLightInvite(object)) {
		const { status } = await postHandler(`/user/invite/${object.inviteID}`, request);
		return {
			status,
		};
	} else if (isLoanRequest(object)) {
		const { status } = await postHandler(`/user/loan/${object.requestID}`, request);
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
		const { status } = await postHandler(`/user/invite/${object.inviteID}`, request);
		return {
			status,
		};
	} else if (isLoanRequest(object)) {
		const { status } = await postHandler(`/user/loan/${object.requestID}`, request);
		return {
			status,
		};
	}
};
