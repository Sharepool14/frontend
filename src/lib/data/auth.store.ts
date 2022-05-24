import { readable, writable, get } from 'svelte/store';
import { apiURL } from '../ts/api';
import Cookies from 'js-cookie';
import { session } from '$app/stores';
import { goto, invalidate } from '$app/navigation';

export const hasAccess = readable(false, function start(set) {
	setInterval(() => set(get(auth)), 100);
});
const auth = writable(false);

interface Tokens {
	access_token: string;
	refresh_token: string;
}

export const authenticate = async () => {
	if (Cookies.get('accessToken')) {
		auth.set(true);
	} else {
		auth.set(false);
	}
};

export const register = async (signUp: User) => {
	await fetch('auth/register', {
		method: 'POST',
		body: JSON.stringify(signUp),
	});
};

export const logOut = () => {
	Cookies.remove('accessToken');
	Cookies.remove('refreshToken');
	auth.set(false);
	goto('/');
};
