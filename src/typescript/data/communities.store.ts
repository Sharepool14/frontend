import { readable, get } from 'svelte/store';
import Cookies from 'js-cookie';
import { hasAccess } from './auth.store';

export const communities = readable<Array<object>>([], function start(set) {
	const unsubscribe = hasAccess.subscribe(() => {
		const setData = async () => {
			const res = await fetch('api/user/communities', {
				method: 'GET',
				headers: {
					access_token: Cookies.get('access_token'),
				},
			});
			const data = await res.json();
			if (res.ok) {
				set(data.data);
			} else {
				set([]);
			}
		};

		if (get(hasAccess)) {
			setData();
		} else {
			set([]);
		}
	});

	return function stop() {
		unsubscribe();
	};
});
