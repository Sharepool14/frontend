import { getHandler } from '$lib/ts/api';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ request }) => {
	const { body } = await getHandler('/user/community', request);
	const posts = [];

	try {
		body.forEach((community) => {
			community.loan_posts.forEach((post) => {
				const startTime = new Date(post.start_date).getTime();
				const endTime = new Date(post.return_date).getTime();
				if (Date.now() - startTime >= endTime - startTime) {
					post.visible = false;
				}
				if (post.visible) {
					if (!posts.find((feedPost) => feedPost.item.id == post.item.id)) {
						posts.push(post);
					}
				}
			});
		});
	} catch (err) {
		console.warn(err);
	}

	return {
		body: {
			posts,
		},
	};
};
