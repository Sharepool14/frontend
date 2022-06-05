const apiURL = 'http://localhost:8080';

const isNewPool = (obj): obj is NewPool => {
	return 'poolName' in obj;
};

const isItem = (obj): obj is Item => {
	return 'name' in obj && 'description' in obj && 'category' in obj;
};

const isOtherUser = (obj): obj is OtherUser => {
	return 'email' in obj;
};

const isRegister = (obj): obj is Register => {
	return (
		'username' in obj &&
		'password' in obj &&
		'firstname' in obj &&
		'lastname' in obj &&
		'phone' in obj &&
		'city' in obj &&
		'zipcode' in obj &&
		'street' in obj
	);
};

const isLightInvite = (obj): obj is LightInvite => {
	return 'inviteID' in obj;
};

const isPostFromForm = (obj): obj is PostFromForm => {
	return 'itemID' in obj && 'startDate' in obj && 'endDate' in obj;
};

const isItemRequest = (obj): obj is ItemRequest => {
	return 'postID' in obj;
};

const isLoanRequest = (obj): obj is LoanRequest => {
	return 'requestID' in obj;
};

/**
 * A function for handling a post request from a HTMLFormElement
 * @author Theo Johansson
 * @async
 * @param {SubmitEvent} e
 * @returns the status code of the http call
 * @see HTMLFormElement
 */
const formPostHandler = async (e: SubmitEvent) => {
	const res = await fetch((<HTMLFormElement>e.target).action, {
		method: (<HTMLFormElement>e.target).method,
		body: new FormData(<HTMLFormElement>e.target),
	});
	return res.status;
};

/**
 * a function for handleing http get requests
 * @author Theo Johansson
 * @async
 * @param uri the uri of the requested resource
 * @param request the request from SvelteKit
 * @returns the data status and headers of the http request
 */
const getHandler = async (uri: string, request: Request) => {
	const { method, headers } = request;
	headers.set('content-type', 'application/json');
	const res = await fetch(apiURL + uri, {
		method,
		headers,
	});
	let data;
	try {
		data = await res.json();
	} catch (err) {
		data = null;
	}

	return {
		status: +res.status,
		headers: res.headers,
		body: data,
	};
};

/**
 * a function for handleing http post requests
 * @author Theo Johansson
 * @async
 * @param uri the uri of the requested resource
 * @param request the request from SvelteKit
 * @param {T extends object} newBody an optional override for the request body
 * @returns the data status and headers of the http request
 */
const postHandler = async <T extends object>(uri: string, request: Request, newBody?: T) => {
	const { method, headers, body } = request;
	headers.set('content-type', 'application/json');
	const res = await fetch(apiURL + uri, {
		method,
		headers,
		body: JSON.stringify(newBody ? newBody : body),
	});
	let data;
	try {
		data = await res.json();
	} catch (err) {
		data = null;
	}

	return {
		status: +res.status,
		headers: res.headers,
		body: data,
	};
};

export {
	apiURL,
	getHandler,
	postHandler,
	formPostHandler,
	isItem,
	isNewPool,
	isOtherUser,
	isRegister,
	isLightInvite,
	isPostFromForm,
	isItemRequest,
	isLoanRequest,
};
