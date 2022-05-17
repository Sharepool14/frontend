import { writable, readable, get } from 'svelte/store';
import Cookies from 'js-cookie';
import { hasAccess } from './auth.store';

const reFetch = writable(false);

export const communities = readable<Array<any>>([], function start(set) {
	const setData = async () => {
		const res = await fetch('api/user/communities', {
			method: 'GET',
			headers: {
				access_token: Cookies.get('access-token'),
			},
		});
		const data = await res.json();
		if (res.ok) {
			set(data.data);
		} else {
			set([]);
		}
	};

	const unsubscribeAccess = hasAccess.subscribe(() => {
		if (get(hasAccess)) {
			setData();
		} else {
			set([]);
		}
	});

	const unsubscribeReFetch = reFetch.subscribe(() => {
		if (get(reFetch) && get(hasAccess)) {
			setData();
			reFetch.set(false);
		}
	});

	return function stop() {
		unsubscribeAccess();
		unsubscribeReFetch();
	};
});

export const reFetchPools = () => {
	reFetch.set(true);
};
