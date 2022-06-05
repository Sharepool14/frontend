import { readable, writable, get } from 'svelte/store';
import Cookies from 'js-cookie';
import { goto } from '$app/navigation';

/**
 * A readable store that signals whether a user has access to pages and functions requiering authentication
 * @see readable
 * @see NodeJS.Timer
 * @see auth
 */
export const hasAccess = readable(false, function start(set) {
	setInterval(() => set(get(auth)), 100);
});

/**
 * A writable store that signals whether a user is authenticated and that only functions within this scope can access
 * @see writable
 * @see hasAccess
 */
const auth = writable(false);

/**
 * checks if a user has an accessToken
 * @author Theo Johansson
 */
export const authenticate = () => {
	if (Cookies.get('accessToken')) {
		auth.set(true);
	} else {
		auth.set(false);
	}
};

/**
 * removes all access tokens and de-authenticates a user then navigates to the homepage
 * @author Theo Johansson
 * @async
 */
export const logOut = async () => {
	Cookies.remove('accessToken');
	Cookies.remove('refreshToken');
	auth.set(false);
	await goto('/');
};
