declare interface HTMLDialogElement extends HTMLElement {
	showModal(): void;
	close(): void;
}

declare interface Authentication {
	username: string;
	password: string;
}

declare interface Registration extends Authentication {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	address: {
		street: string;
		city: string;
		zipCode: string;
	};
}
