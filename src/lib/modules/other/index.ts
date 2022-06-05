export {
	/**
	 * A component for displaying an item availible for borrowing
	 * @author Theo Johansson
	 * @prop {number} id - the id of the post in the database
	 * @prop {string} title - the title of the item that can be borrowed
	 * @prop {boolean} borrowed - if the item is borrowed or not
	 * @prop {Date} startDate - the starting date of the of the borrow ad
	 * @prop {Date} endDate - the day the ad ends
	 */
	default as BorrowPost,
} from './BorrowPost.svelte';

export {
	/**
	 * A component for displaying an invite and buttons for accepting or denying the invite
	 * @prop {number} inviteID - the id of the invite in the database
	 * @prop {string} inviter - the email of the inviter
	 * @prop {string} communityName - the name of the pool the user is invited to
	 */
	default as Invite,
} from './Invite.svelte';

export {
	/**
	 * A modal with a form for the creation of a new pool
	 * @author Theo Johansson
	 */
	default as NewPool,
} from './NewPool.svelte';

export {
	/**
	 * A component for displaying a request for borrowing an item and buttons for accepting or denying the request
	 * @author Theo Johansson
	 * @prop {number} requestID - the id of the request in the database
	 * @prop {string} requester - the email of the requester
	 * @prop {string} item - name of the item
	 * @prop {string} communityName - name of the pool the requester is making the request from
	 */
	default as Request,
} from './Request.svelte';
