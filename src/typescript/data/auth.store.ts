import { writable } from 'svelte/store';

export let hasAccess = writable(false);

const url = 'http://localhost:8080';

interface Tokens {
	access_token: string;
	refresh_token: string;
}

export const authenticate = async (login: Authentication) => {
	try {
		let response = await fetch(url + '/login', {
			method: 'POST',
			headers: {
				Host: url,
				'contnent-type': 'application/json',
			},
			body: JSON.stringify(login),
		});
		let data = (await response.json()) as Tokens;
		document.cookie = `access_token=${data.access_token};`;
		document.cookie = `refresh_token=${data.refresh_token};`;
		hasAccess.set(true);
		console.log(document.cookie);
		alert(`${document.cookie}`);
	} catch (err) {
		console.error(err);
	}
};
