import { readable, get } from 'svelte/store';
import Cookies from 'js-cookie';
import { hasAccess } from './auth.store';

export const items = readable<Array<object>>([], function start(set) {
	const unsubscribe = hasAccess.subscribe(() => {
		if (get(hasAccess)) {
			const setData = async () => {
				const communities = await getItems();
				set(communities.data);
			};
			setData();
		} else {
			set([]);
		}
	});
	return function stop() {
		unsubscribe();
	};
});

const getItems = async () => {
	const res = await fetch('api/user/items', {
		method: 'GET',
		headers: {
			access_token: Cookies.get('access_token'),
		},
	});
	const data = await res.json();
	if (res.ok) {
		return data;
	}
};
