export {
	/**
	 * A wrapper component for holding nav links in an unorderd list
	 * @author Theo Johansson
	 */
	default as Bar,
} from './Navbar.svelte';

export {
	/**
	 * A link to a page
	 * @author Theo Johansson
	 * @prop {string} href - the target route
	 * @prop {string} navTitle - the title of the navigation link
	 */
	default as Link,
} from './Navlink.svelte';

export {
	/**
	 * A link to a profile page
	 * @author Theo Johansson
	 * @prop {string} href - the target route
	 */
	default as Profile,
} from './ProfileLink.svelte';

export {
	/**
	 * A loader that shows when data from a page takes more than 400ms to load
	 * @author Theo Johansson
	 */
	default as Loading,
} from './Loading.svelte';
