const apiURL = 'http://localhost:8080';

const dataFetcher = async (uri: string, auth: string) => {
	const res = await fetch(apiURL + uri, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			Authorization: 'Bearer ' + auth,
		},
	});
	const data = await res.json();
	console.log(data);
	return data;
};

export { apiURL, dataFetcher };
