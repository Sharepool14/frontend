declare interface HTMLDialogElement extends HTMLElement {
	showModal(): void;
	close(): void;
}

declare interface Authentication {
	email: string;
	password: string;
}

declare interface Registration extends Authentication {
	firstName: string;
	lastName: string;
	city: string;
	zipCode: string;
	address: string;
}
