import { writable } from 'svelte/store';

export let hasAccess = writable(false);
export let currentUser = writable<number>(null);

const url = 'http://localhost:8080';

interface Tokens {
	id: number;
	access_token: string;
	refresh_token: string;
}

export const authenticate = async (login: Authentication) => {
	try {
		let response = await fetch(url + '/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(login),
		});
		let data = (await response.json()) as Tokens;
		document.cookie = `access_token=${data.access_token};`;
		document.cookie = `refresh_token=${data.refresh_token};`;
		currentUser.set(data.id);
		console.log(document.cookie);
		alert(`${document.cookie}`);
	} catch (err) {
		console.error(err);
	}
};

export const register = async (signUp: Registration) => {
	try {
		let response = await fetch(url + '/user/register', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(signUp),
		});
		alert(response.status);
	} catch (err) {
		console.error(err);
	}
};
