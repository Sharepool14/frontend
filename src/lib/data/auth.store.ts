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

export const authenticate = async (login: Authentication) => {
	const res = await fetch('api/user/login', {
		method: 'POST',
		body: JSON.stringify(login),
	});
	if (res.ok) {
		auth.set(true);
	}
};

export const register = async (signUp: User) => {
	await fetch('api/user/register', {
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
