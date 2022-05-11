import { readable, writable, get } from 'svelte/store';
import { apiURL } from '../ts/global';
import Cookies from 'js-cookie';
import { page } from '$app/stores';

export const hasAccess = readable(false, function start(set) {
	setInterval(() => set(get(auth)), 100);
});
const auth = writable(false);

interface Tokens {
	access_token: string;
	refresh_token: string;
}

export const authenticate = async (login: Authentication) => {
	try {
		const res = await fetch('api/user/login', {
			method: 'POST',
			body: JSON.stringify(login),
		});
		const data = await res.json();
		if (res.ok) {
			auth.set(true);
		}
		Cookies.set('access_token', data.access_token);
		Cookies.set('refresh_token', data.refresh_token);
		console.log('Access token: ' + Cookies.get('access_token'));
		console.log('Refresh token: ' + Cookies.get('refresh_token'));
	} catch (err) {
		console.error(err);
	}
};

export const register = async (signUp: User) => {
	console.log(JSON.stringify(signUp));
	try {
		const response = await fetch('api/user/register', {
			method: 'POST',
			body: JSON.stringify(signUp),
		});
		alert(response.status);
	} catch (err) {
		console.error(err);
	}
};

export const logOut = () => {
	Cookies.remove('access_token');
	Cookies.remove('refresh_token');
	auth.set(false);
};
