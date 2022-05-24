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

const formPostHandler = async (e: SubmitEvent) => {
	const res = await fetch((<HTMLFormElement>e.target).action, {
		method: (<HTMLFormElement>e.target).method,
		body: new FormData(<HTMLFormElement>e.target),
	});
	return res.status;
};

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
		data = undefined;
	}

	if (data === undefined) {
		try {
			data = await res.text();
		} catch (err) {
			data = undefined;
		}
	}

	return {
		status: +res.status,
		body: data,
	};
};

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
		data = undefined;
	}

	return {
		status: +res.status,
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
};
