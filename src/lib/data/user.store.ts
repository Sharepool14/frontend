import { readable, get } from 'svelte/store';
import Cookies from 'js-cookie';
import { hasAccess } from './auth.store';

export const user = readable<object>([], function start(set) {
	const unsubscribe = hasAccess.subscribe(() => {
		const setData = async () => {
			const res = await fetch('api/user', {
				method: 'GET',
				headers: {
					access_token: Cookies.get('accessToken'),
				},
			});
			const data = await res.json();
			if (res.ok) {
				set(data.data);
			} else {
				set({});
			}
		};

		if (get(hasAccess)) {
			setData();
		} else {
			set({});
		}
	});

	return function stop() {
		unsubscribe();
	};
});
