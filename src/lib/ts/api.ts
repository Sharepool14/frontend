const apiURL = 'http://localhost:8080';

const formPostHandler = (e: SubmitEvent) => {
	const req = new XMLHttpRequest();
	//@ts-ignore
	req.open(e.target.method, e.target.action, true);
	//@ts-ignore
	req.send(new FormData(e.target));
	e.preventDefault();
};

const dataFetcher = async (uri: string, auth: string) => {
	const res = await fetch(apiURL + uri, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			Authorization: 'Bearer ' + auth,
		},
	});
	const data = await res.json();
	return data;
};

export { apiURL, dataFetcher, formPostHandler };
